# Doku-Vertrag (Repo-Seite)

Dieser Vertrag legt fest, wie ein Projekt-Repo seine Doku ablegt, damit eine Webseite (z. B. marco-starker.de oder
die Seite eines Produkts) sie einlesen und als eigene Seiten darstellen kann. Er gilt für alle öffentlichen Repos,
die andere nutzen können (MCP-Server, npm-Pakete, Workflows, Mods, Tools). Kunden-, Vereins- und Produktseiten
brauchen ihn nicht.

Die Seite der Webseite beschreibt `docs-integration.md`, den Weg auf die Webseite per Release `docs-release.md`,
fertige Seitengerüste je Projektart `docs-templates.md`.

## 1. Ablage

```
docs/
    de/
        index.md            Pflicht: Startseite der Doku
        installation.md
        configuration.md
    en/
        index.md            Pflicht
        installation.md
        configuration.md
    assets/
        map.webp            sprachneutrale Bilder
        map.de.webp         nur falls ein Bild Text in einer Sprache enthält
```

- **Zwei Sprachen, gleiche Dateinamen.** Jede Seite gibt es in `de/` und `en/` mit identischem Dateinamen. Fehlt das
  Gegenstück, gilt die Doku als fehlerhaft.
- **Der Dateiname ist die feste Kennung der Seite** (Englisch, kebab-case, `.md`). Über ihn verknüpft die Webseite die
  Sprachfassungen und baut den Sprachumschalter. Die URL kommt aus `slug` im Frontmatter (siehe 2).
- **Flach:** keine Unterordner in `de/` und `en/`. Gruppen in der Navigation entstehen über `section`.
- `index.md` ist Pflicht und beschreibt: was das Projekt ist, für wen, Status und wohin es weitergeht.
- Die Doku liegt auf dem Standard-Branch (`main`). Die Webseite holt sie beim Build von dort und baut sie ins Image.
  Da Releases von `main` entstehen, beschreibt `main` den veröffentlichten Stand.

## 2. Frontmatter

Jede Seite beginnt mit YAML-Frontmatter:

```yaml
---
title: Installation
description: Docker-Image starten, Zugangsdaten per Umgebungsvariable übergeben und den Server mit Claude Desktop, Claude Code oder einem anderen MCP-Client verbinden.
order: 20
slug: installation
section: Einstieg
---
```

| Feld          | Pflicht | Bedeutung                                                                                   |
|---------------|---------|---------------------------------------------------------------------------------------------|
| `title`       | ja      | Überschrift (H1) der Seite und Eintrag in der Navigation                                    |
| `description` | ja      | Meta-Description und Teaser, ein bis zwei Sätze, **120–160 Zeichen** (siehe unten)          |
| `order`       | ja      | Reihenfolge in der Navigation, in 10er-Schritten (`index.md` hat `0`)                       |
| `slug`        | nein    | URL-Segment in dieser Sprache (z. B. `konfiguration` / `configuration`), Standard: Dateiname |
| `section`     | nein    | Gruppenüberschrift in der Navigation, in der Sprache der Datei                              |

- `description` sagt konkret, was die Seite zeigt oder was man danach kann, mit dem Begriff, unter dem man die Seite
  suchen würde. Unter 120 Zeichen ist sie für Suchmaschinen zu knapp, über 160 wird sie abgeschnitten. Die Grenze gilt
  für alle Sprachen; `docs-check` prüft sie im Projekt-Repo.
- Kein `# H1` im Text, der Titel kommt aus `title`. Der Text beginnt mit `##`.
- `slug` von `index.md` wird ignoriert, die Startseite hat keinen eigenen Pfadteil.

## 3. Markdown

- CommonMark plus GitHub Flavored Markdown (Tabellen, Aufgabenlisten, Fenced Code).
- **Codeblöcke immer mit Sprache** (` ```bash `, ` ```yaml `, ` ```ts `). Shell-Befehle ohne `$`-Prompt, damit der
  Kopierknopf direkt nutzbare Befehle liefert.
- **Hinweise** im GitHub-Format, damit sie auch auf GitHub gut aussehen:
  ```markdown
  > [!NOTE]
  > Text
  ```
  Erlaubt: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`.
- **Überschriften:** `##` und `###` bilden das Inhaltsverzeichnis. Tiefer nur, wenn es nötig ist.
- **Links zwischen Doku-Seiten** relativ auf die Datei: `[Konfiguration](configuration.md)` oder
  `[Variablen](configuration.md#variablen)`. Die Webseite schreibt sie auf die Seite in derselben Sprache um.
- **Links auf andere Dateien im Repo** (Code, Beispiele) immer absolut auf GitHub, z. B.
  `https://github.com/DasRed/<repo>/blob/main/compose.example.yaml`.
- **Bilder** relativ aus `assets/`: `![Karte mit Entities](../assets/map.webp)`. Alt-Text ist Pflicht.
  WebP, SVG oder PNG, höchstens 1600 px breit und 500 KB groß. Keine Animation über 2 MB.
- **Kein HTML** außer `<details>`/`<summary>`. Keine Skripte, iframes, Styles. Die Webseite filtert alles andere heraus.
- **Umgebungsvariablen und Optionen als Tabelle:** `Name | Standard | Beschreibung`.
- Ton wie auf der Webseite: du, locker-sachlich. Englisch entsprechend direkt und knapp.

## 4. README

- Das README bleibt auf Englisch und kurz: was es ist, Schnellstart, Lizenz.
- Es verlinkt auf die Doku der Webseite, z. B.
  `Documentation: https://www.marco-starker.de/en/projects/<slug>/docs` (Deutsch: `/de/projekte/<slug>/doku`).
- Das README wird von der Webseite **nicht** eingelesen. Was in die Doku gehört, steht in `docs/`.

## 5. Pflege

- Doku-Änderungen gehören in denselben Commit oder PR wie die Code-Änderung (`docs:` für reine Doku-Commits).
- Nach einem Push auf `main`, der `docs/**` ändert, prüft `docs.yml` die Doku und löst ein Release der Webseite aus
  (`docs-release.md`). Dafür braucht das Repo den Workflow `docs.yml` und das Secret `WEBSITE_RELEASE_TOKEN`.
- Fehlerhafte Doku hält `docs-check` im Projekt-Repo auf; käme sie trotzdem an, bricht der Build der Webseite ab.
- Status (aktiv, Experiment, nicht gepflegt) steht nicht in der Doku, sondern in den Projektdaten der Webseite
  (`project-schema.md`). Ein Hinweis in `index.md` ist trotzdem gut, etwa „Getestet mit Minecraft 1.21.4 / Fabric,
  wird nicht aktiv weiterentwickelt“.

## 6. Prüfliste

- [ ] `docs/de/index.md` und `docs/en/index.md` vorhanden
- [ ] jede Seite in beiden Sprachen, gleiche Dateinamen
- [ ] Frontmatter mit `title`, `description`, `order` auf jeder Seite
- [ ] `description` 120–160 Zeichen in allen Sprachen
- [ ] kein `# H1` im Text
- [ ] alle Codeblöcke mit Sprache
- [ ] interne Links relativ auf `.md`, Repo-Links absolut
- [ ] Bilder in `docs/assets/` mit Alt-Text und in der Größengrenze
- [ ] README verlinkt auf die Doku der Webseite
