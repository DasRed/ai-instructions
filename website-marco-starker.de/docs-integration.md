# Doku auf der Webseite einbinden (Webseiten-Seite)

Wie eine Next.js-Webseite nach Marcos Standard die Doku aus Repos nach `docs-contract.md` einbaut und darstellt.
Vorbild: marco-starker.de. Gilt für jede Seite, die Projekt-Doku zeigen soll (auch Produktseiten).

## 1. Grundsatz

- Die Doku wird **beim Build** aus den Repos geholt, geprüft und als statische Seiten **ins Docker-Image gebaut**.
  Zur Laufzeit liest die Webseite nichts von GitHub.
- Jede Doku-Änderung führt über ein **Release der Webseite** auf die Seite (`docs-release.md`). Ein Image ist damit
  immer ein vollständiger, reproduzierbarer Stand; ein Rollback nimmt die passende Doku mit.
- Ist die Doku eines Projekts fehlerhaft, schlägt der Build fehl. Es entsteht kein Release, die laufende Version bleibt.
- Einzige Ausnahme zur Laufzeit: npm-Downloadzahlen (siehe 6).

## 2. Pfade (übersetzt)

| Deutsch                              | Englisch                               | Inhalt                    |
|--------------------------------------|----------------------------------------|---------------------------|
| `/de/projekte/<slug>`                | `/en/projects/<slug>`                  | Projektseite              |
| `/de/projekte/<slug>/doku`           | `/en/projects/<slug>/docs`             | `index.md`                |
| `/de/projekte/<slug>/doku/<slug-de>` | `/en/projects/<slug>/docs/<slug-en>`   | übrige Seiten             |
| `/docs-assets/<slug>/<datei>`        | (gleich)                               | Bilder aus `docs/assets/`, statisch aus `public/` |

- Intern liegen die Routen englisch unter `src/app/[locale]/projects/[slug]/docs/[[...page]]`.
- Eine Routentabelle `src/i18n/routes.ts` ordnet jedem Routen-Schlüssel die Segmente je Sprache zu
  (`projects: {de: 'projekte', en: 'projects'}`, `docs: {de: 'doku', en: 'docs'}` …).
- `proxy.ts` schreibt übersetzte Pfade auf die interne Route um und leitet Pfade in der falschen Sprache per 301 um.
- Links nur über einen Helfer `buildPath(locale, route, params)`, nie als String im Code.
- Der Sprachumschalter verknüpft Doku-Seiten über den Dateinamen (siehe Vertrag).

## 3. Holen beim Build

Skript `scripts/fetch-docs.ts`, als npm-Skript `docs:fetch` und automatisch vor dem Build (`prebuild`):

1. Für jedes Projekt mit `docs` aus `src/data/projects.ts` das Archiv des Branches laden:
   `https://github.com/<repo>/archive/refs/heads/<branch>.tar.gz`. Das ist kein API-Aufruf, es braucht kein Token und
   zählt nicht gegen das API-Limit.
2. Nur `<path>/` daraus entpacken nach `.docs-cache/<slug>/` (in `.gitignore`).
3. Prüfen: Frontmatter vollständig, jede Seite in beiden Sprachen, `index.md` vorhanden, Bilder in der Größengrenze.
   Jeder Verstoß wird mit Projekt, Datei und Grund ausgegeben; danach Abbruch mit Exit-Code 1.
4. `assets/` nach `public/docs-assets/<slug>/` kopieren (in `.gitignore`).
5. Den Stand je Projekt festhalten (Commit-SHA aus dem Archiv, Datum) in `.docs-cache/manifest.json`, damit die
   Seite „Stand“ und „Auf GitHub ansehen“ zeigen kann.

`DOCS_OFFLINE=1` überspringt das Laden und nutzt den vorhandenen `.docs-cache` (lokale Entwicklung ohne Netz).
Fehlt der Cache dann, bricht das Skript mit einem Hinweis ab.

Im Code liest `src/service/ProjectDocsService.ts` nur aus `.docs-cache`. Die Doku-Routen erzeugen alle Seiten über
`generateStaticParams` und setzen `dynamicParams = false`, unbekannte Seiten ergeben 404. Zur Laufzeit wird
`.docs-cache` nicht mehr gebraucht.

## 4. Darstellen

- Markdown mit `marked` (wie schon im Projekt), Frontmatter mit `gray-matter`.
- Überschriften-IDs wie auf GitHub (`github-slugger`), damit Anker aus dem Repo passen.
- GitHub-Hinweise (`> [!NOTE]` …) als Callout-Komponente.
- Syntax-Highlighting beim Build (`shiki`), Kopierknopf als kleine Client-Komponente.
- HTML-Ausgabe säubern (`sanitize-html`), erlaubt sind nur die Elemente aus dem Vertrag plus `details`/`summary`.
- Links umschreiben: `x.md` → Doku-Seite in derselben Sprache, `../assets/y.webp` → `/docs-assets/<slug>/y.webp`.

**Layout** (gleiches Designsystem wie die Seite, aber ruhig): kein Hero, keine farbigen Abschnittsbänder.

- links: Navigation aus `section` und `order`
- Mitte: Inhalt, Lesebreite etwa 72ch
- rechts: Inhaltsverzeichnis aus `##`/`###` (ab Desktop)
- unten: zurück/weiter, „Auf GitHub ansehen“, Stand (aus dem Manifest)
- mobil: Navigation als ausklappbares Menü, Inhaltsverzeichnis oben eingeklappt

Komponenten unter `src/component/docs/`: `DocsLayout`, `DocsSidebar`, `DocsToc`, `DocsPager`, `DocsCallout`,
`CopyButton`.

## 5. SEO

- Titel `<title> – <Projekt> | <Seitenname>`, Description aus dem Frontmatter.
- Canonical und `alternates.languages` (hreflang) je Seitenpaar.
- `sitemap.ts` listet alle Projekt- und Doku-Seiten beider Sprachen mit hreflang-Paaren.
- OG-Bild je Projekt (gemeinsames Bild mit Projektname reicht).

## 6. npm-Downloadzahlen (Laufzeit)

- Serverseitig von `https://api.npmjs.org/downloads/point/last-month/<paket>` holen, **einmal am Tag** (Cache
  24 Stunden), auf der Projektseite als „ca. X Downloads/Monat“ zeigen.
- Schlägt der Abruf fehl, die Zahl einfach weglassen; die Seite darf daran nie scheitern.
- Der Abruf läuft auf dem Server, Besucher laden nichts von npm.

## 7. Konfiguration (`.env.example`)

| Variable          | Standard | Zweck                                                      |
|-------------------|----------|------------------------------------------------------------|
| `DOCS_OFFLINE`    | leer     | `1` = Doku nicht laden, vorhandenen `.docs-cache` nutzen    |
| `NPM_STATS_HOURS` | `24`     | Lebensdauer des Caches für npm-Downloadzahlen              |

## 8. Tests

- Testdaten unter `test/fixtures/docs/<projekt>/{de,en,assets}`.
- Getestet werden: Prüfung des Vertrags (fehlendes Gegenstück, fehlendes Frontmatter), Link-Umschreibung,
  Routentabelle und `buildPath`, Säubern des HTML, Ausfall des npm-Abrufs.
