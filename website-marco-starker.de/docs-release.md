# Doku-Änderungen per Release auf die Webseite bringen

Ändert sich die Doku in einem Projekt-Repo, soll die Webseite ein neues Release bauen, das die Doku enthält
(`docs-integration.md`). Dafür legt das Projekt-Repo einen leeren Commit im Repo der Webseite an. Dessen
Commit-Typ `docs` löst über semantic-release ein Patch-Release aus; der Build holt dabei die Doku aller Projekte.

Entscheidung (20.11.2026): Release statt Abruf zur Laufzeit, damit alles vorgebaut im Docker-Image liegt.

## 1. Ablauf

```
Push auf main mit Änderung in docs/** (Projekt-Repo)
    → Workflow docs.yml (ruft docs.yml aus github-workflows auf)
        → Action docs-check: Vertrag prüfen (bricht bei Fehlern ab)
        → Action website-release: leerer Commit „docs(<slug>): sync documentation“ auf main der Webseite
            → CI der Webseite (node-docker.yml): semantic-release → Patch-Version
                → npm run build (prebuild holt die Doku aller Projekte) → Image → Deploy auf chronos
```

## 2. Commit-Konvention

- Nachricht: `docs(<slug>): sync documentation`, z. B. `docs(hetzner-mcp): sync documentation`.
- Kein `fix:` – der Changelog soll zeigen, welche Doku sich geändert hat, nicht einen erfundenen Fehler.
- semantic-release muss `docs` als Patch werten und in den Release Notes zeigen. Das macht das in `node-docker.yml`
  eingebaute semantic-release mit dem Input `release-docs: true` in der `ci.yml` der Webseite; die Release Notes haben
  immer einen Abschnitt „Documentation“. Im Repo der Webseite steht dafür nichts in der `package.json`:

```yaml
jobs:
  pipeline:
    uses: DasRed/github-workflows/.github/workflows/node-docker.yml@v2
    secrets:
      dockhand-host:             ${{ secrets.DOCKHAND_HOST }}
      dockhand-token:            ${{ secrets.DOCKHAND_TOKEN }}
      homeassistant-webhook-url: ${{ secrets.HOMEASSISTANT_WEBHOOK_URL }}
    with:
      environment:  chronos
      release-docs: true
      changelog:    false
```

Damit lösen auch reine `docs:`-Commits im Repo der Webseite selbst ein Release aus – gewollt, denn die Seite ist ihr
Inhalt. `changelog: false`, weil marco-starker.de kein `CHANGELOG.md` führt.

## 3. Action `docs-check` (Repo github-workflows)

`.github/actions/docs-check/action.yml`, Node-basiert, prüft `docs/` nach `docs-contract.md`:

- `docs/de/index.md` und `docs/en/index.md` vorhanden
- jede Datei in beiden Sprachen, Frontmatter `title`, `description` (120–160 Zeichen), `order`
- kein `# H1` im Text, Codeblöcke mit Sprache, relative Links zeigen auf vorhandene Dateien
- Bilder in `docs/assets/` mit Alt-Text und in der Größengrenze

| Input  | Standard | Beschreibung      |
|--------|----------|-------------------|
| `path` | `docs`   | Ordner der Doku   |

Dieselbe Prüfung nutzt `scripts/fetch-docs.ts` der Webseite (gemeinsamer Code oder gleiche Regeln), damit beide
Seiten dasselbe für gültig halten. Ausnahme: Die Länge der `description` prüft nur `docs-check` im Projekt-Repo, der
Build der Webseite nicht.

## 4. Action `website-release` (Repo github-workflows)

`.github/actions/website-release/action.yml`, Composite Action mit `gh api`, ohne Klonen:

| Input    | Pflicht | Standard                  | Beschreibung                          |
|----------|---------|---------------------------|---------------------------------------|
| `token`  | ja      |                           | `WEBSITE_RELEASE_TOKEN`               |
| `slug`   | ja      |                           | Projekt-Slug auf der Webseite         |
| `repo`   | nein    | `DasRed/marco-starker.de` | Repo der Webseite                     |
| `branch` | nein    | `main`                    | Release-Branch der Webseite           |

Ablauf, mit bis zu drei Versuchen, falls zwei Repos gleichzeitig auslösen:

```bash
sha=$(gh api "repos/$REPO/git/ref/heads/$BRANCH" --jq .object.sha)
tree=$(gh api "repos/$REPO/git/commits/$sha" --jq .tree.sha)
commit=$(gh api "repos/$REPO/git/commits" \
    -f message="docs($SLUG): sync documentation" -f tree="$tree" -f "parents[]=$sha" --jq .sha)
gh api -X PATCH "repos/$REPO/git/refs/heads/$BRANCH" -f sha="$commit"   # ohne force: schlägt fehl, wenn main weitergelaufen ist
```

Wichtig: Der Commit muss mit einem eigenen Token angelegt werden. Ein Push mit dem `GITHUB_TOKEN` eines Workflows
startet keine weiteren Workflows, die CI der Webseite liefe dann nicht los.

## 5. Workflow im Projekt-Repo

`.github/workflows/docs.yml` – unabhängig von Sprache und Build-System (auch für Java/Gradle-Mods). Prüfung und
Release stecken im wiederverwendbaren Workflow `docs.yml` des Repos github-workflows; im Projekt bleibt nur der Aufruf:

```yaml
name: Docs

on:
  push:
    branches: [ main ]
    paths:    [ 'docs/**' ]

  pull_request:
    paths:    [ 'docs/**' ]

  workflow_dispatch:

permissions:
  contents: read

jobs:
  docs:
    uses: DasRed/github-workflows/.github/workflows/docs.yml@v2
    secrets:
      website-release-token: ${{ secrets.WEBSITE_RELEASE_TOKEN }}
```

In Pull Requests läuft nur `docs-check`, das Release folgt mit dem Merge. Der Slug ist standardmäßig der Name des
Repos; weicht er ab, kommt `with: slug: <slug>` dazu.

## 6. Webseite

- `ci.yml` bekommt eine Concurrency-Gruppe, damit Releases nacheinander laufen. Ein wartender Lauf ersetzt ältere
  wartende; das ist in Ordnung, denn jeder Build holt die Doku aller Projekte frisch:

```yaml
concurrency:
  group:              ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: false
```

- `prebuild` holt die Doku (`docs-integration.md`, Abschnitt 3). Ein Token braucht der Build dafür nicht.
- Auf `main` darf kein Branch-Schutz liegen, der direkte Pushes verbietet, sonst scheitert `website-release`.
  Falls doch gewünscht: das Token bzw. eine GitHub App als Ausnahme zulassen.

## 7. Token

Fine-grained Personal Access Token „website-release“:

- Repository access: nur `DasRed/marco-starker.de`
- Permissions: Contents „Read and write“ (sonst nichts)
- Ablaufdatum setzen (z. B. ein Jahr) und einen Termin zum Erneuern anlegen

Private GitHub-Konten haben keine kontoweiten Actions-Secrets. Das Secret muss in jedes Projekt-Repo:

```bash
for repo in hetzner-mcp nginx-proxy-manager-mcp discord-mcp; do
    gh secret set WEBSITE_RELEASE_TOKEN --repo "DasRed/$repo" --body "$WEBSITE_RELEASE_TOKEN"
done
```

Den Wert im Passwortmanager bzw. in `secrets/.env` ablegen (von Git ignoriert), nie committen.

## 8. Prüfen

1. Kleine Änderung an `docs/de/index.md` des Projekts pushen.
2. Workflow „Docs“ läuft grün, im Repo der Webseite liegt der Commit `docs(<slug>): sync documentation`.
3. Die CI der Webseite erzeugt ein Patch-Release mit Abschnitt „Documentation“ und deployt.
4. `/de/projekte/<slug>/doku` zeigt die Änderung.
