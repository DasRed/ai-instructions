---
name: new-mcp
description: Wenn Marco einen neuen MCP-Server bauen will – Rahmenbedingungen abfragen, Steckbrief abstimmen, Repo nach seinem Standard anlegen – Code, Docker, CI, MCP Registry, Doku und marco-starker.de.
---

# Neuer MCP-Server für Marco

> Quelle dieses Skills: `skills/new-mcp/SKILL.md` im Repo `DasRed/ai-instructions` (versioniert). Die Kopie im
> Claude-Konto wird bei Änderungen daraus synchronisiert. Alle Pfade ohne Repo-Angabe gehen vom Root dieses Repos aus
> (lokaler Clone oder GitHub).

Ablauf: **Kontext sammeln → Rahmenbedingungen abfragen → Steckbrief freigeben lassen → umsetzen → prüfen → übergeben.**
Vor der Freigabe des Steckbriefs wird **keine Datei angelegt**, kein Repo erstellt, nichts deployt.
Unterhaltung auf Deutsch; Code, Kommentare, Dateinamen, README und Tool-Beschreibungen auf Englisch; Doku auf Deutsch
und Englisch.

Was am Ende steht (so wie bei hetzner-mcp, nginx-proxy-manager-mcp, discord-mcp und backrest-mcp):

```
Repo DasRed/<slug> (public, MIT)
    → Push auf main → node-docker.yml: semantic-release → Image ghcr.io/dasred/<slug> → Dockhand-Deploy auf chronos
        → mcp-publish.yml: Eintrag io.github.DasRed/<slug> in der offiziellen MCP Registry
    → Push mit docs/** → docs.yml: docs-check → Release von marco-starker.de mit der Doku
Container mcp-<name> im Stack chronos/mcp → NPM-Host <name>.mcp.marco-starker.de → Custom Connector in Claude
```

---

## 1. Kontext still sammeln (nur lesen)

Bevor du fragst, schau nach, was schon bekannt ist, damit du nichts doppelt abfragst:

- **Memory:** Dateien zu den bestehenden MCPs (backrest-mcp, hetzner-mcp, nginx-proxy-manager-mcp, discord-mcp),
  Server-Infrastruktur, GitHub-Workflows und eigene Webseiten.
- **Code-Guidelines:** `CodeGuidlines.md` (vor allem „Node-Projekte“, „Services (Fastify)“, „SDKs“, „README“) und
  `intellij-code-styles.xml`.
- **Webseiten-Bausteine:** `website-marco-starker.de/docs-contract.md`, `docs-templates.md` (Abschnitt „MCP-Server“),
  `docs-release.md`, `project-schema.md` und `public-repo-checklist.md`. Bei MCP-Servern sind alle fünf gesetzt.
- **Referenz-Repo:** `DasRed/backrest-mcp` (lokal `~/Web/private/backrest-mcp`) ist die aktuelle Vorlage für Struktur,
  Konfiguration, Tool-Klassen, Tests, Dockerfile, `server.json`, CI und Doku. Für Sonderfälle:
    - `hetzner-mcp`: dünne Hülle um ein vorhandenes npm-Paket mit stdio-Tools, Tool-Gruppen (`MCP_SPLITS`)
    - `nginx-proxy-manager-mcp`: Login mit E-Mail/Passwort, Token-Cache mit Neuanmeldung bei `401`, Teil-Updates
    - `discord-mcp`: Login per Benutzerkonto mit Playwright, Zustand im Volume, Status „Experiment“
- **Workflows:** im Repo `DasRed/github-workflows` (lokal `~/Web/private/github-workflows`) die Doku zu
  `node-docker.yml`, `mcp-publish.yml`, `docs-check` und `website-release` (Inputs, Secrets, Outputs).
- **Ziel-API:** offizielle API-Doku bzw. OpenAPI/Proto des Dienstes lesen, Version und Stabilität notieren, prüfen,
  welche Funktionen es per API wirklich gibt (Lehre aus hetzner-mcp: die Cloud-API kennt keine Rechnungen). Prüfen,
  ob die API Geheimnisse im Klartext zurückgibt (Lehre aus backrest-mcp: Repo-Passwörter in der Konfiguration).
- **Vorhandene MCP-Server** für den Dienst suchen (GitHub, MCP Registry, Glama). Meist sprechen sie nur stdio; ihr
  Tool-Set darf Vorbild sein, ihr Code wird nicht eingebunden. Lizenz und Quelle für die Danksagung notieren.
- **Betrieb:** `chronos/mcp/compose.yaml` im Repo `docker-environment` (lokal `~/Web/private/docker-environment`):
  belegte Ports (Schema **500xx** für MCPs, nächster freier Port), Containernamen `mcp-<name>` und die Liste der
  Proxy-Hosts im Kopfkommentar. Optional Dockhand-Connector `list_containers` auf chronos und NPM-Connector
  `list_proxy_hosts`. **Die Datei enthält echte Zugangsdaten: keine Werte daraus in Chat, Repo oder Vorschläge
  übernehmen.**
- **marco-starker.de** (lokal `~/Web/private/marco-starker.de`): `src/data/projects.ts`,
  `src/translations/{de,en}/project.ts` und `content/projects/{de,en}/` der vier bestehenden MCPs als Vorlage.
- **Secrets:** `secrets/.env` dieses Repos (lokal `~/Web/ai/secrets/.env`, von Git ignoriert) enthält
  `DOCKHAND_HOST`, `DOCKHAND_TOKEN`, `HOMEASSISTANT_WEBHOOK_URL` und `WEBSITE_RELEASE_TOKEN` für die Secrets der
  MCP-Repos. Nur prüfen, ob die Namen da sind; Werte nie anzeigen.
- **GitHub:** ob `gh` verfügbar und angemeldet ist (`gh auth status`) und wie das About der bestehenden MCP-Repos
  aussieht (`gh repo view DasRed/backrest-mcp --json description,homepageUrl,repositoryTopics`).
- Gibt es das Repo `DasRed/<slug>` schon (lokal oder auf GitHub), erst das lesen.

## 2. Rahmenbedingungen abfragen

- **Lieber gründlich als knapp.** `AskUserQuestion` nimmt max. 4 Fragen pro Aufruf, also so viele Aufrufe
  hintereinander, wie die Runden brauchen.
- Was aus der Anfrage oder dem Kontext schon klar ist, **nicht** fragen, sondern im Steckbrief als gesetzt aufführen.
- Marcos Standard jeweils als erste Option mit „(Empfohlen)“. Freitext ist immer möglich.

### Runde 1 – Dienst und Umfang
1. **Dienst und Ziel:** Welcher Dienst, welche Instanz (eigene URL, Cloud-API)? Was soll Claude damit können – die
   3–6 wichtigsten Fragen, die Marco stellen will („Sind heute Nacht alle Backups gelaufen?“).
2. **Name:** Repo und Slug `<dienst>-mcp` (Empfohlen), kebab-case, in allen Sprachen gleich. Daraus folgen Image
   `ghcr.io/dasred/<slug>`, Registry-Name `io.github.DasRed/<slug>`, npm-Name `@dasred/<slug>`, Container
   `mcp-<dienst>`, Host `<dienst>.mcp.marco-starker.de`, Env-Präfix `<DIENST>_MCP_`.
3. **Grundlage:**
    - eigene Implementierung gegen die API (Empfohlen, wie backrest-mcp)
    - Tool-Set eines vorhandenen Servers als Vorbild, eigener Code (wie nginx-proxy-manager-mcp, discord-mcp)
    - dünne Hülle um ein vorhandenes npm-Paket mit stdio-Tools (wie hetzner-mcp)
4. **Umfang der Tools:** alle Funktionen der API, die ein Client nutzen kann (Empfohlen) / nur lesende / gezielte
   Auswahl. Bei sehr vielen Tools (> 60) Tool-Gruppen per Env vorschlagen, weil jede Beschreibung im Kontext landet.

### Runde 2 – Zugang und Sicherheit
5. **Anmeldung am Dienst:** API-Token / Benutzer + Passwort (Basic Auth oder Login mit Token-Cache) / Benutzerkonto
   per Browser-Login / ohne Anmeldung / beides optional (wie backrest-mcp). Eigenen Benutzer bzw. eigenes Token nur für
   den MCP mit minimalen Rechten empfehlen.
6. **Schreibzugriff:** standardmäßig nur lesend, Schreiben per `<PREFIX>READ_ONLY=false` (Empfohlen) / nur lesend
   ohne Schreib-Tools. Welche Tools sind destruktiv (löschen, überschreiben, wiederherstellen, Befehle ausführen)?
7. **Geheimnisse in Antworten:** Gibt die API Passwörter, Tokens oder Schlüssel zurück? Dann maskieren als `********`
   (Empfohlen, Schalter `<PREFIX>MASK_SECRETS`, Standard `true`) und beim Zurückschreiben wieder einsetzen; fehlt der
   gespeicherte Wert, schlägt der Aufruf fehl.
8. **Rechtliches/Risiko:** Verstößt die Nutzung gegen Nutzungsbedingungen (z. B. Self-Bot bei Discord)? Dann Warnkasten
   in README und Doku, Status „Experiment“.

### Runde 3 – Betrieb bei Marco
9. **Eigene Instanz:** auf chronos im Stack `chronos/mcp` (Empfohlen) / auf eros / keine eigene Instanz (nur
   veröffentlichen). Port und Containername aus Schritt 1 vorschlagen.
10. **Ziel bei Marco:** URL der eigenen Instanz des Dienstes (z. B. `https://backup.dasred.de`), Lese- oder
    Schreibmodus, welche Tools gesperrt werden.
11. **In Claude einbinden:** als Custom Connector über `<dienst>.mcp.marco-starker.de` (Empfohlen) / nur Claude Code /
    gar nicht.

### Runde 4 – Veröffentlichung
12. **Repo öffentlich:** ja, MIT (Empfohlen – MCP-Server sind Projekte, die andere nutzen) / privat (dann entfallen
    Registry, Doku-Release und GitHub-Link auf der Webseite).
13. **MCP Registry:** nach jedem Release per CI eintragen (Empfohlen) / nein.
14. **marco-starker.de:** Projekt mit Doku aufnehmen (Empfohlen) / nur Doku im Repo / nein. Status `active`
    (Empfohlen) oder `experiment`, `featured` ja/nein, Fallstudie (`detail: true`, Standard bei MCPs). Die Änderungen
    im lokalen Repo `marco-starker.de` vorbereiten (Empfohlen) oder nur als Vorschlag im Bericht liefern.
15. **GitHub-Repo einrichten:** Sobald `DasRed/<slug>` auf GitHub existiert, setzt Claude per `gh` die Secrets aus
    `secrets/.env` und das About (Beschreibung, Website, Topics) (Empfohlen) / Marco macht es selbst, Claude liefert
    die Befehle. Das Ja ist der Auftrag für genau diese zwei Schritte, nicht für andere Änderungen am Repo.
16. **Git:** Darf Claude committen/pushen? Standard: **nein**, nur mit ausdrücklichem OK.

## 3. Steckbrief freigeben lassen

Fasse alles als kurzen **Steckbrief** im Chat zusammen: Dienst & Ziel, Namen (Slug, Image, Registry-Name,
Env-Präfix, Container, Host, Port), Grundlage und Danksagung, Tools (Gruppen, lesend/schreibend/destruktiv,
grobe Anzahl), Anmeldung, Sicherheit (Lesemodus, Filter, Token, Maskieren), Betrieb, Veröffentlichung, Workflow.
Markiere, was gesetzt (Standard) und was entschieden wurde, und liste offene Punkte (z. B. unklare API-Teile).

Dann **auf Freigabe warten**. Erst nach „ok“ / „los“ geht es weiter.

## 4. Umsetzung nach Marcos Standard

Lokal unter `~/Web/private/<slug>`. Alles, was nicht dienstspezifisch ist, aus backrest-mcp übernehmen und umbenennen,
nicht neu erfinden.

### Struktur

```
src/
    index.ts                  app registrieren, listen, Startlog (Auth-Art, Ziel-URL, Lesemodus, aktive Tools), SIGINT/SIGTERM
    config.ts                 ConfigInterface-Objekt aus env(), gruppiert: <dienst>, mcp, server
    env.ts                    env<T>(name, default) – ohne Default Pflicht, Boolean/Number geprüft
    enum/  interface/  model/ model/api/ (Antworten der API als Interfaces)
    lib/                      Singletons: app (Fastify), <dienst>APIClient, mcpServerFactory
    route/                    index.ts, health.ts (/healthz), mcp.ts
    service/                  <Dienst>APIClient, BearerTokenValidator, ToolFilter, ListParser, …
    service/exception/        <Dienst>Exception + Unterklassen, ExceptionConverter
    service/mcp/              MCPServerFactory, MCPTool (abstrakt), MCPTool<Name> je Tool
test/                         gleiche Struktur wie src/, Fake<Dienst> bzw. Fake<Dienst>APIClient
docs/de, docs/en              Doku nach Vertrag
.github/workflows/            ci.yml, docs.yml
.env.example  .dockerignore  .gitignore  Dockerfile  LICENSE (MIT)  README.md  server.json
package.json  package-lock.json  tsconfig.json  vitest.config.ts
```

`CHANGELOG.md` legt semantic-release an, nicht von Hand.

### Server

- **Transport:** Streamable HTTP, **zustandslos**: jeder `POST` auf `<PREFIX>PATH` (Standard `/mcp`) bekommt eine
  frische `McpServer`-Instanz und einen `StreamableHTTPServerTransport` mit `sessionIdGenerator: undefined` und
  `enableJsonResponse: true`; beim Schließen der Antwort beide schließen. `GET`/`DELETE` → `405` mit `allow: POST`.
- **Fastify** mit `bodyLimit` 4 MB und Logger-Level aus der Konfiguration; `/healthz` → `{"status":"ok"}` ohne Auth,
  prüft nur den Server selbst.
- **Bearer-Token** optional (`<PREFIX>AUTH_TOKEN`, leer = aus), Vergleich mit `timingSafeEqual`, sonst `401` mit
  `www-authenticate: Bearer` und JSON-RPC-Fehler.
- **Tools** als Klassen, die von `MCPTool` erben: `name` (snake_case), `title`, `description` (Englisch, sagt, wann
  das Tool zu nutzen ist und woher IDs kommen), `inputSchema` (zod, mit `.describe()`), `readOnly`, `destructive`,
  `execute()`. Registrierung mit `annotations` (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`,
  `title`). Fehler kommen als `isError`-Text `Error: …` zurück, nie als Exception aus dem Handler.
- **Filter:** `<PREFIX>READ_ONLY` (Standard `true`) entfernt alle schreibenden Tools; `<PREFIX>TOOLS_ALLOW` und
  `<PREFIX>TOOLS_DENY` als Kommaliste mit `*` als Platzhalter.
- **Instructions** im `McpServer`: zwei, drei Sätze, womit Claude anfängt (welches Tool liefert die IDs), Einheiten
  (Zeiten, IDs als String), wie lange Vorgänge verfolgt werden.
- **Antworten kompakt halten:** große Listen begrenzen (`limit`, `max_bytes`), Logs vom Ende kürzen, Streams zeitlich
  begrenzt lesen, unnötige Felder weglassen. Lange Vorgänge mit `wait_seconds` warten lassen und sonst `running` melden.
- **API-Client** nach „SDKs (API-Clients)“ der CodeGuidlines: natives `fetch`, Timeout (`<PREFIX><DIENST>_TIMEOUT`),
  Fehler der API in eigene Exceptions übersetzen (nicht erreichbar, Timeout, 401/403, 404, ungültige Eingabe).
- **Variablen** (UPPER_SNAKE_CASE mit Präfix `<DIENST>_MCP_`): Ziel-URL und Zugangsdaten des Dienstes,
  `…_SERVER_HOST` (`0.0.0.0`), `…_SERVER_PORT` (`3000`), `…_SERVER_LOG_LEVEL` (`info`), `…_PATH` (`/mcp`),
  `…_READ_ONLY` (`true`), `…_TOOLS_ALLOW`, `…_TOOLS_DENY`, `…_AUTH_TOKEN`, ggf. `…_MASK_SECRETS` (`true`). Jede Variable
  in `.env.example` im Format: Kommentar mit Beschreibung, Zeile `# required` bzw. `# optional, default=…`,
  auskommentierter Beispielwert.

### package.json

Wie backrest-mcp: `@dasred/<slug>`, `"type": "module"`, `"private": true`, `license` MIT, `homepage` auf die Doku
(`https://www.marco-starker.de/en/projects/<slug>/docs`), `engines` aus den CodeGuidlines, Script-Namen aus den
CodeGuidlines (`build` = `tsc && tsc-alias`, `test` = `vitest run`, `dev`, `start`, …). Abhängigkeiten so wenige wie
möglich: `@modelcontextprotocol/sdk`, `fastify`, `zod`, `dotenv`. Release-Konfiguration im Schlüssel `"release"`:
commit-analyzer, release-notes-generator, changelog, npm (`npmPublish: false`), **exec** (setzt die Version in
`server.json` und den Tag des OCI-Pakets), git (Assets `package.json`, `package-lock.json`, `server.json`,
`CHANGELOG.md`), github (`failComment: false`) – den `prepareCmd` 1:1 aus backrest-mcp übernehmen.

### Docker

```dockerfile
FROM node:26-alpine

LABEL io.modelcontextprotocol.server.name="io.github.DasRed/<slug>"

ENV NODE_ENV=production
ENV <PREFIX>SERVER_HOST=0.0.0.0
ENV <PREFIX>SERVER_PORT=3000

WORKDIR /var/www

COPY ./package.json /var/www/package.json
COPY ./package-lock.json /var/www/package-lock.json

RUN npm ci --omit=dev \
    && npm cache clean --force

COPY ./dist /var/www/dist

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD node -e "fetch('http://127.0.0.1:' + process.env.<PREFIX>SERVER_PORT + '/healthz').then((response) => process.exit(response.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "dist/index.js"]
```

Der Container läuft ohne Root, ohne Zustand auf der Platte und mit schreibgeschütztem Dateisystem. Braucht der Server
doch Zustand (Browser-Session, Token), dann ein Volume und das in der Doku begründen. `.dockerignore` und `.gitignore`
aus backrest-mcp.

### server.json (MCP Registry)

Aus backrest-mcp übernehmen und anpassen:

- `$schema` wie in backrest-mcp, `name` `io.github.DasRed/<slug>`, `title`, `version` = Version der `package.json`
- `description` **höchstens 100 Zeichen**, Englisch, mit „Read-only by default“, wenn das gilt
- `websiteUrl` auf die englische Doku, `repository` mit `source: github` und `url` (die `id` ist die numerische
  GitHub-ID des Repos: `gh api repos/DasRed/<slug> --jq .id`; gibt es das Repo noch nicht, nach dem Anlegen eintragen)
- ein Paket `registryType: oci`, `identifier` `ghcr.io/dasred/<slug>:<version>`, `runtimeHint: docker`,
  Port-Mapping als `runtimeArguments`, `transport` `streamable-http` mit `url` `http://localhost:3000/mcp` und optionalem
  `Authorization`-Header (`isSecret`)
- `environmentVariables`: alle Variablen, die ein Nutzer setzen würde, mit `description`, `isRequired`, `isSecret`,
  `format`, `default`, `choices` und `placeholder`

### CI

`.github/workflows/ci.yml` wie in backrest-mcp: Push auf `main` und `workflow_dispatch`, Job `pipeline` mit
`DasRed/github-workflows/.github/workflows/node-docker.yml@v1` (`environment: chronos`, `container-name: mcp-<dienst>`,
Secrets `dockhand-host`, `dockhand-token`, `homeassistant-webhook-url`), Job `mcp-registry` mit `mcp-publish.yml@v1`,
nur wenn `needs.pipeline.outputs.released == 'true'`, mit `version: ${{ needs.pipeline.outputs.version }}` und
`id-token: write`. Ohne eigene Instanz `deploy: false` setzen. Ohne Registry den zweiten Job weglassen.

`.github/workflows/docs.yml` 1:1 aus backrest-mcp, nur `slug` anpassen.

Nicht darauf hinweisen, dass die Actions im Workflow-Repo noch fehlen könnten.

### GitHub-Repo: Secrets und About (wenn in Frage 15 gewählt)

Erst, wenn das Repo `DasRed/<slug>` auf GitHub existiert und `gh` als DasRed angemeldet ist. Ohne `gh` die Befehle
unten mit eingesetztem Slug an Marco geben.

**Secrets** – alle vier, auch ohne eigene Instanz (`node-docker.yml` verlangt die Dockhand- und Home-Assistant-Secrets
immer). Die Werte kommen nur per Pipe aus `secrets/.env` zu `gh`; nie ausgeben, in Dateien schreiben, als Argument
übergeben oder in den Chat übernehmen:

```bash
repo=DasRed/<slug>
for name in DOCKHAND_HOST DOCKHAND_TOKEN HOMEASSISTANT_WEBHOOK_URL WEBSITE_RELEASE_TOKEN; do
    value=$(grep -E "^${name}=" ~/Web/ai/secrets/.env | cut -d= -f2- | tr -d '\r\n')
    if [ -z "$value" ]; then
        echo "$name fehlt in secrets/.env"
        continue
    fi
    printf '%s' "$value" | gh secret set "$name" --repo "$repo"
done
unset value
gh secret list --repo "$repo"
```

Fehlt ein Name in `secrets/.env`, das im Bericht nennen statt einen Wert zu raten.

**About** nach dem Muster der bestehenden MCP-Repos:

- Beschreibung auf Englisch, ein Satz: `MCP server for the <Dienst> API – <was Claude damit sieht und tut>,
  read-only by default.` (letzter Teil nur, wenn es stimmt; höchstens 350 Zeichen)
- Website: die englische Doku `https://www.marco-starker.de/en/projects/<slug>/docs`
- Topics (klein, kebab-case): immer `claude`, `docker`, `mcp`, `mcp-server`, `model-context-protocol`, `typescript`,
  dazu zwei bis drei zum Dienst (z. B. `backrest`, `restic`, `backup`)

```bash
gh repo edit DasRed/<slug> \
    --description "MCP server for the <Dienst> API – …, read-only by default." \
    --homepage "https://www.marco-starker.de/en/projects/<slug>/docs" \
    --add-topic claude,docker,mcp,mcp-server,model-context-protocol,typescript,<dienst>
gh repo view DasRed/<slug> --json description,homepageUrl,repositoryTopics
```

Danach die Repo-ID für `server.json` holen: `gh api repos/DasRed/<slug> --jq .id`.

### README (Englisch, kurz)

Wie backrest-mcp: Titel, ein Absatz Was/Wofür (Anzahl Tools, „read-only by default“), Zeile zu Sicherheit, Links auf
die Doku (`Documentation: https://www.marco-starker.de/en/projects/<slug>/docs` und
`(Deutsch: https://www.marco-starker.de/de/projekte/<slug>/doku)`), `## Quick start` mit `docker run`, Hinweis „never
expose it to the internet without TLS and access control“, `## Local development` (`npm ci`, `.env`, `npm run dev`,
`npm test`, `npm run build`, Release per semantic-release), ggf. Danksagung an das Vorbild, `## License` MIT.

### Doku (`docs/de`, `docs/en`)

Nach `docs-contract.md`, Seitensatz „MCP-Server“ aus `docs-templates.md`. Bei MCPs immer:

| Datei              | order | DE / EN                                  | section DE / EN       | Inhalt                                                                                  |
|--------------------|-------|------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------|
| `index.md`         | 0     | Überblick / Overview                     | Einstieg / Getting started | Was, Wofür (Beispielfragen), Tools grob, So funktioniert es, Status, „Weiter“-Liste |
| `installation.md`  | 10    | Installation                             | Einrichtung / Setup   | Image und Tags, Voraussetzungen, Schnellstart, Compose, Ports und Endpunkte, für Claude erreichbar machen |
| `configuration.md` | 20    | Konfiguration / Configuration            | Einrichtung / Setup   | alle Variablen als Tabelle (Name, Standard, Beschreibung), Zugang beschaffen, Tool-Filter, Beispiel |
| `claude.md`        | 30    | In Claude einbinden / Connect to Claude  | Einrichtung / Setup   | Custom Connector, Claude Code mit Bearer-Token, Testen (Beispielfragen), Fehlersuche als Tabelle |
| `clients.md`       | 35    | Andere MCP-Clients / Other MCP clients   | Einrichtung / Setup   | JSON-Eintrag per HTTP, mcp-remote für stdio-Clients, Testen                              |
| `tools.md`         | 40    | Tools                                    | Referenz / Reference  | Übersicht (lesend/schreibend/destruktiv), je Tool `###` mit Zweck, Parametern, Beispiel  |
| `security.md`      | 50    | Sicherheit / Security                    | Referenz / Reference  | Standard nur lesen, Schreibmodus, Geheimnisse, Zugangsdaten, Endpunkt absichern, Container |

Slugs: `installation`, `konfiguration`/`configuration`, `claude`, `andere-clients`/`other-clients`, `tools`,
`sicherheit`/`security`.

Feste Inhalte, die in jeder MCP-Doku stehen (Wortlaut aus backrest-mcp übernehmen und anpassen):

- `claude.md`: Custom Connectors verbinden sich **von den Servern von Anthropic aus**; Connectors können keine Header
  senden, deshalb Schutz am Reverse Proxy (Basic Auth bzw. Access List mit den
  [ausgehenden IP-Adressen von Anthropic](https://docs.claude.com/en/api/ip-addresses)); im Schreibmodus pro Tool
  „vorher fragen“ für die destruktiven Tools; nach Änderung der Tools den Connector trennen und neu verbinden.
- `clients.md`: JSON-Eintrag unter `mcpServers` mit `type: http`, `url`, `headers`; `type` je nach Client `http` oder
  `streamable-http`; Heimnetz-Adresse reicht; mcp-remote mit Token in `env` und `--allow-http` für `http://`.
- Jede `description` **120–160 Zeichen** in beiden Sprachen, beginnt mit `<slug>` bzw. sagt konkret, was die Seite
  zeigt. Codeblöcke immer mit Sprache, kein HTML, keine `# H1`, interne Links relativ auf `.md`, Repo-Links absolut.
- Ton: du, locker-sachlich; Englisch direkt und knapp.

### marco-starker.de (nur wenn in Frage 14 gewählt)

Im lokalen Repo `~/Web/private/marco-starker.de` (oder als Vorschlag im Bericht):

1. Eintrag in `src/data/projects.ts` nach `project-schema.md` wie die anderen MCPs: `category: OPEN_SOURCE`,
   `detail: true`, `docs: {branch: 'main', path: 'docs', repo: 'DasRed/<slug>'}`, GitHub-Link, `npm: null`,
   `stack: ['TypeScript', 'Node.js', 'MCP', 'Streamable HTTP', 'Docker', …]`, `status`, `year`.
2. `related` **gegenseitig**: der neue Slug in die `related`-Listen aller anderen MCP-Projekte und umgekehrt.
3. Übersetzungen in `src/translations/{de,en}/project.ts`: `project.<slug>.tagline` (kurz),
   `project.<slug>.description` (120–160 Zeichen) und `project.<slug>.summary`.
4. Fallstudie `content/projects/{de,en}/<slug>.md`: Einstieg (warum), `## Was er kann` als Liste, `## Wie er gebaut
   ist`, Schlusssatz mit Verweis auf die Doku.
5. Die Doku kommt per `docs.yml` auf die Seite; ein Release der Webseite löst der erste Push mit `docs/**` aus.

### Betrieb vorbereiten (nur Vorschläge, nicht selbst ausführen)

- **Compose-Service** für `chronos/mcp/compose.yaml` im Repo `docker-environment`, Aufbau wie `mcp-backrest`:
  `image: ghcr.io/dasred/<slug>:latest`, `container_name: mcp-<dienst>`, `read_only: true`, `cap_drop: [ALL]`,
  `security_opt: [no-new-privileges:true]`, `ports: "<500xx>:3000"`, Variablen mit Platzhaltern statt Werten,
  Healthcheck per `node -e fetch(…/healthz)`, Labels `grafana.*` und `homeassistant.*`. Dazu die Zeile für den
  Kopfkommentar (`<dienst>.mcp.marco-starker.de -> http://10.2.2.2:<500xx>`) und neue Variablen in der Liste dort.
  Nicht committen.
- **NPM-Proxy-Host** `<dienst>.mcp.marco-starker.de` auf chronos wie die anderen MCP-Hosts: Wildcard-Zertifikat
  `*.mcp.marco-starker.de`, Force SSL, HTTP/2, Access List „Anthropic outbound“. Richtet Marco ein bzw. nur mit
  ausdrücklichem Auftrag über den NPM-Connector.
- **Claude:** Custom Connector mit `https://<dienst>.mcp.marco-starker.de/mcp`; richtet Marco ein.

## 5. Prüfen vor dem Abschluss

- `npm ci`, `npm test`, `npm run build` grün. Tests mindestens für Konfiguration/Filter (`ToolFilter`,
  `BearerTokenValidator`), API-Client gegen einen Fake, jedes Tool (Schema, Annotationen, Aufruf gegen den Fake),
  die Route `/mcp` (401 mit Token, 405 bei GET, `initialize` und `tools/list`) und ggf. das Maskieren hin und zurück.
- Lokaler Start mit `.env` gegen die echte Instanz (wenn erreichbar und freigegeben), dann:
  `curl -s localhost:3000/healthz` und ein `POST` mit `initialize` und `tools/list`
  (Header `accept: application/json, text/event-stream`). Im Lesemodus dürfen keine schreibenden Tools erscheinen.
- `docker build` und Container einmal starten, Healthcheck wird `healthy`.
- Doku mit `docs-check` lokal prüfen:
  `GITHUB_WORKSPACE=$PWD node ~/Web/private/github-workflows/.github/actions/docs-check/docs-check.mjs`
- `server.json`: gültiges JSON, `version` = `package.json`, OCI-Tag = Version, Label im Dockerfile = `name`,
  `description` ≤ 100 Zeichen.
- Falls Frage 15 mit Ja beantwortet und das Repo schon da ist: `gh secret list` zeigt die vier Secrets, `gh repo view`
  zeigt Beschreibung, Website und Topics.
- `public-repo-checklist.md` durchgehen (u. a. `gitleaks detect`, keine echten Zugangsdaten in Tests und Beispielen)
  und das Ergebnis im Bericht nennen.

## 6. Übergabe

Ehrlich berichten, was fertig ist, was offen ist und was Marco tun muss. Keine Commits oder Pushes ohne ausdrückliches
OK. Commit-Messages als Conventional Commits mit **`feat:` oder `fix:`** vorschlagen, nicht `docs:` oder `chore:` –
sonst entsteht kein Release und nichts wird deployt.

Schritte für Marco (in dieser Reihenfolge):

1. Repo `DasRed/<slug>` auf GitHub anlegen (public erst nach der Checkliste). Danach setzt Claude Secrets, About und
   `repository.id` in `server.json` (Frage 15), sonst macht Marco das mit den Befehlen aus dem Bericht.
2. Erster Push auf `main` mit `feat:` → Release, Image auf GHCR.
3. GHCR-Paket `<slug>` auf public stellen (Registry und andere Nutzer müssen das Image ziehen können). Ist der Job
   `mcp-registry` vorher gescheitert, ihn danach neu starten.
4. Compose-Service in `docker-environment` übernehmen, Stack in Dockhand aktualisieren.
5. NPM-Proxy-Host anlegen, Connector in Claude hinzufügen, mit den Beispielfragen aus Runde 1 testen.
6. marco-starker.de committen.

## Grenzen

- Keine Infrastruktur-Änderungen (DNS, NPM, Dockhand, Stacks) ohne ausdrücklichen Auftrag; nur Vorschläge.
- Keine Zugangsdaten in Repo, Chat oder Doku; Werte aus `docker-environment` und `secrets/` nie übernehmen. Einzige
  Ausnahme: die vier Secrets aus `secrets/.env` per Pipe an `gh secret set` (Frage 15), ohne sie anzuzeigen.
- Fremden Code nicht einbinden oder kopieren, nur als Vorbild nennen und in README/Doku danken.
- Nichts versprechen, was die API nicht hergibt; Lücken im Steckbrief und in der Doku offen nennen.
