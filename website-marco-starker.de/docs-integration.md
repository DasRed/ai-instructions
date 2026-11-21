# Doku auf der Webseite einbinden (Webseiten-Seite)

Wie eine Next.js-Webseite nach Marcos Standard die Doku aus Repos nach `docs-contract.md` einbaut und darstellt.
Vorbild: marco-starker.de. Gilt für jede Seite, die Projekt-Doku zeigen soll (auch Produktseiten).

## 1. Grundsatz

- Die Doku wird **beim Build** aus den Repos geholt, geprüft und **ins Docker-Image gebaut** (als `.docs-cache`, siehe Abschnitt 3).
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
Fehlt der Cache dann, bricht das Skript mit einem Hinweis ab. `DOCS_LOCAL_ROOT=<ordner>` liest die Repos stattdessen
aus lokalen Klonen (`<ordner>/<repo-name>/<path>`), etwa zum Testen einer Doku vor dem Push.

Im Code liest `src/service/docs/DocsRepository.ts` (Instanz in `src/lib/docsRepository.ts`) nur aus `.docs-cache`.
Weil das Layout der Seite `force-dynamic` ist, werden die Doku-Seiten nicht vorab als statisches HTML erzeugt, sondern
zur Laufzeit aus dem `.docs-cache` im Image gelesen und im Speicher gehalten. `.docs-cache` gehört deshalb ins Image
(`outputFileTracingIncludes` in `next.config.ts`). Am Prinzip ändert das nichts: Neue Doku kommt nur mit einem neuen
Build, also einem Release. Unbekannte Seiten ergeben 404, ein Slug der anderen Sprache leitet auf die passende Seite
um.

## 4. Darstellen

- Markdown mit `marked` (wie schon im Projekt), Frontmatter mit einem eigenen kleinen Parser
  (`FrontmatterParser`, flache `key: value`-Paare – mehr erlaubt der Vertrag nicht).
- Überschriften-IDs wie auf GitHub (eigener `HeadingSlugger`), damit Anker aus dem Repo passen.
- GitHub-Hinweise (`> [!NOTE]` …) als Callout.
- Syntax-Highlighting auf dem Server (`shiki`, helles und dunkles Theme), Kopierknopf als kleine Client-Komponente.
- HTML im Markdown wird je Tag geprüft: erlaubt sind nur `details`/`summary`, alles andere wird als Text ausgegeben.
- Renderer: `src/service/docs/DocsRenderer.ts`; dieselbe Darstellung nutzen auch die Artikel der Seite.
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
| `DOCS_LOCAL_ROOT` | leer     | Ordner mit lokalen Klonen der Repos statt GitHub-Archiv     |
| `NPM_STATS_HOURS` | `24`     | Lebensdauer des Caches für npm-Downloadzahlen              |

## 8. Tests

- Testdaten unter `test/fixtures/docs/<projekt>/{de,en,assets}`.
- Getestet werden: Prüfung des Vertrags (fehlendes Gegenstück, fehlendes Frontmatter), Link-Umschreibung,
  Routentabelle und `buildPath`, Säubern des HTML, Ausfall des npm-Abrufs.
