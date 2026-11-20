---
name: neue-webseite
description: Wenn Marco eine neue Webseite bauen will (Kunden-, Vereins-, Turnier-, Produkt- oder eigene Seite): Rahmenbedingungen abfragen, Steckbrief abstimmen, nach seinem Standard umsetzen.
---

# Neue Webseite für Marco

> Quelle dieses Skills: `~/Web/ai/skills/neue-webseite/SKILL.md` (versioniert). Die Kopie im Claude-Konto
> wird bei Änderungen daraus synchronisiert.

Ablauf: **Kontext sammeln → Rahmenbedingungen abfragen → Steckbrief freigeben lassen → umsetzen.**
Vor der Freigabe des Steckbriefs wird **keine Datei angelegt**, kein Repo erstellt, nichts deployt.
Unterhaltung auf Deutsch, Code/Kommentare/Dateinamen/README auf Englisch.

---

## 1. Kontext still sammeln (nur lesen)

Bevor du fragst, schau nach, was schon bekannt ist, damit du nichts doppelt abfragst:

- **Memory:** passende Projekt-/Kundendateien (z. B. Selbstständigkeit Webseiten, Glonntaler Cup, Copa, Annuva, aspect42).
- **Code-Guidelines:** `~/Web/ai/CodeGuidlines.md` und `~/Web/ai/intellij-code-styles.xml`.
- **Styleguides:** alle Dateien in `~/Web/ai/styleguides/` auflisten und von jedem Titel, Zweck und Kurzfassung lesen, damit du in der Design-Runde passende Styleguides vorschlagen kannst. Standard ist `civic.md` (dort zusätzlich Abschnitt 7 kennen).
- **Webseiten-Bausteine:** `~/Web/ai/website-marco-starker.de/README.md` lesen (Doku-Vertrag, Projektdaten, Doku-Einbindung, öffentliche Repos). Welche Datei wann gebraucht wird, steht dort und bei den Fragen 21 und 23–25.
- **Referenz-Repo:** `~/Web/private/annuva-website` (bzw. GitHub `DasRed/annuva-website`) ist die aktuelle Vorlage für Struktur, Config, i18n, Rechtstexte, Dockerfile und CI. Sein `src/style/tokens.css` ist zugleich ein Umsetzungsbeispiel des Civic-Styleguides (Cremeflächen, Source Serif 4 + Atkinson Hyperlegible Next, eigener Petrol-Akzent).
- **Domains:** IONOS-Connector `domains_list_domains`, ob die Domain schon im Konto ist.
- **Server/Ports:** Dockhand-Connector `list_containers` auf chronos, um freie Ports (Schema **4xxxx** für Apps/Webseiten, 5xxxx für MCPs) und freie Containernamen zu finden.
- **Proxy:** NPM-Connector `list_proxy_hosts`, ob es den Host schon gibt.
- Liegt unter `~/Web/private/<name>` schon ein Repo, erst das lesen.

## 2. Rahmenbedingungen abfragen

- **Lieber gründlich als knapp.** Es dürfen deutlich mehr als vier Fragen sein: `AskUserQuestion` nimmt max. 4 Fragen pro Aufruf, also so viele Aufrufe hintereinander, wie die Runden unten brauchen.
- Was aus der Anfrage oder dem Kontext schon klar ist, **nicht** fragen, sondern im Steckbrief als gesetzt aufführen.
- Marcos Standard jeweils als erste Option mit „(Empfohlen)“ anbieten. Freitext ist immer möglich.
- Folgefragen hängen von Antworten ab (z. B. Civic-Details nur, wenn Civic gewählt wurde).

### Runde 1 – Projekt und Ziel
1. **Art der Seite:** Kundenseite (direkt / über Philipp), Verein/Turnier/Event, Produkt-/Marketingseite zu eigenem Projekt, private/eigene Seite, Landingpage.
2. **Ziel und Zielgruppe:** Was sollen Besucher dort tun (informieren, Kontakt aufnehmen, anmelden, Ergebnisse sehen, App laden …)? Die 3–6 wichtigsten Aufgaben.
3. **Seitenumfang:** One-Pager / wenige Unterseiten / größere Struktur. Welche Seiten sind gesetzt?
4. **Inhalte:** Liefert der Kunde Texte/Bilder/Logo, schreibt Claude Entwurfstexte, oder gibt es eine bestehende Seite als Quelle?

### Runde 2 – Design
5. **Design-Grundlage:**
   - Styleguide aus `~/Web/ai/styleguides/` (Empfohlen) – welcher, klärt Frage 6
   - CI des Kunden (Logo, Farben, Schriften vorhanden)
   - Styleguide-Prinzipien + Farben/Logo aus Kunden-CI
   - Wie eine bestehende Seite von Marco (z. B. annuva-website)
   - „Frei neu entwerfen“ geht über Freitext.
6. **Styleguide** (bei Styleguide-Grundlage oder Mischung mit Kunden-CI): Welcher Styleguide aus `~/Web/ai/styleguides/`?
   - Standard: `civic.md` als erste Option mit „(Empfohlen)“.
   - Dazu bis zu drei weitere, die laut ihrem Zweck am besten zu Art, Zielgruppe und Tonalität der Seite passen, jeweils mit einer Kurzbeschreibung aus Titel und Zweck.
   - Im Fragetext alle verfügbaren Styleguides kurz nennen, damit Marco per Freitext auch einen anderen wählen kann. Die Liste immer frisch aus dem Ordner lesen, nicht aus dem Gedächtnis.
7. **Anpassung des gewählten Styleguides:**
   - Komplett übernehmen (Flächen, Typo, Layout, Komponenten) oder nur Struktur und Prinzipien, Farben/Schriften aus dem Projekt?
   - Akzent-/Markenfarbe beibehalten oder durch welche ersetzen? Bei Civic wird das Civic-Rot `#C8102E` immer ersetzt.
   - **Nur bei Civic:** Markenmomente (handschriftlicher Akzent max. 1× pro Layout, mehrfarbige Markengeste, Serif-Versal-Headlines im Hero – ja/nein?) und Schriften (Source Serif 4 + Atkinson Hyperlegible Next als aktueller Auftritt oder Playfair + Inter als ältere Beschreibung)?
8. **Nur bei Kunden-CI:** Wer liefert die Assets (Kunde, Philipp / Die Signatur)? Gibt es Farbwerte, Schriftlizenzen, Logo als SVG?
9. **Hell/Dunkel:** Hell, ohne Darkmode (Empfohlen, Marcos Vorliebe) / mit Hell-Dunkel-Umschalter. Gibt der gewählte Styleguide etwas anderes vor (nur dunkel, oder hell und dunkel), darauf hinweisen und den Styleguide-Modus als Option anbieten.
10. **Bildsprache:** eigene Fotos (Kunde/Verein) / lizenzierte Stockfotos / Illustrationen oder Icons / kaum Bilder.
11. **Tonalität und Anrede:** du / Sie; sachlich / locker / sportlich.
12. **Vorbilder:** Gibt es Seiten, die gefallen (oder gar nicht)?

Immer fest, ohne Frage: Schriften selbst gehostet (`@fontsource-variable/*`), keine Google Fonts; Icons `@tabler/icons-react`; keine feste Max-Breite, Grids bekommen auf breiten Screens mehr Spalten; barrierearm (Skip-Link, Kontraste, Fokus, `lang`).

### Runde 3 – Domain, Sprache, Rechtliches
13. **Domain(s):** Hauptdomain, kanonische Adresse (Standard `https://www.<domain>`), weitere TLDs/Varianten, die per Redirect darauf zeigen. Schon bei IONOS registriert?
14. **Sprachen:** nur Deutsch / Deutsch + Englisch unter `/de` und `/en` mit Sprachweiche (Cookie + Accept-Language). Standardsprache?
15. **Verantwortlicher für Impressum/Datenschutz:** Marco / Kunde / Verein (Name, Anschrift, E-Mail, ggf. Telefon; bei Vereinen Vertretungsberechtigter und Registereintrag; bei Firmen Rechtsform, Register, USt-IdNr.).
16. **Statistik:** Umami (cookieless, `umami.marco-starker.de`) ja (Empfohlen) / nein.

### Runde 4 – Technik und Funktionen
17. **Technik:**
    - Standard (Empfohlen): Next.js (App Router, `output: 'standalone'`), React 19, TypeScript 7, Tailwind 4, Node 26, ESM.
    - Alternative: WordPress (wenn der Kunde Inhalte selbst pflegen will), rein statisch.
18. **Pflege:** Wer pflegt die Inhalte später, und wie oft ändern sie sich? (Kunde selbst → WordPress oder Markdown-Inhalte ansprechen.)
19. **Funktionen:** Kontaktformular (Mailversand wie?), Galerie, Termine/Spielplan/Ergebnisse, Downloads, Suche, externe Einbindungen (YouTube, Maps, Instagram → nur mit Zwei-Klick-Lösung), Login/Admin.
20. **Daten:** keine / SQLite / Postgres 18 auf chronos / externe API.
21. **Projekt-Doku anzeigen:** Soll die Seite Doku aus Projekt-Repos zeigen (z. B. Doku zum eigenen Produkt oder zu Open-Source-Projekten)?
    - nein (Empfohlen bei Kunden-, Vereins- und Eventseiten)
    - ja → `~/Web/ai/website-marco-starker.de/docs-contract.md`, `project-schema.md`, `docs-integration.md` und `docs-release.md` lesen. Im Steckbrief festhalten, welche Repos (Slug, Repo, Branch) eingebunden werden. Die Doku wird beim Build ins Image gebaut, Änderungen kommen per Release der Webseite.

### Runde 5 – Betrieb und Workflow
22. **Server:** chronos (Empfohlen, alles Öffentliche) / eros. Port und Containername aus Schritt 1 vorschlagen.
23. **Repo:** Name unter `DasRed`, privat/öffentlich, Pfad `~/Web/private/<name>`. Öffentlich nur, wenn andere es nutzen können (Tools, Pakete, MCP-Server, Mods); Kunden-, Vereins- und Produktseiten bleiben privat. Bei öffentlich gilt `~/Web/ai/website-marco-starker.de/public-repo-checklist.md`.
24. **Doku im Repo:** Soll das Repo Doku nach dem Doku-Vertrag bekommen (`docs/de`, `docs/en`)?
    - ja (Empfohlen bei öffentlichen Repos, die andere nutzen) → `docs-contract.md` und `docs-templates.md` lesen und den Seitensatz der passenden Projektart vorschlagen; dazu `docs.yml` und das Secret `WEBSITE_RELEASE_TOKEN` nach `docs-release.md`
    - nein (Empfohlen bei privaten Repos)
25. **marco-starker.de:** Soll das Projekt auf marco-starker.de erscheinen (Open Source, Produkt, Referenz, Experiment)? Bei Kundenseiten nur mit Einverständnis des Kunden. Ja → Eintrag nach `~/Web/ai/website-marco-starker.de/project-schema.md` (Abschnitt 4) als Vorschlag vorbereiten; das Repo marco-starker.de nicht selbst ändern.
26. **Git:** Darf Claude in diesem Repo committen/pushen? Standard: **nein**, nur mit ausdrücklichem OK.
27. **Tests:** Unit-Tests gewünscht? (Bei einfachen Seiten oft nein; Lint + Typecheck immer.)

### Runde 6 – Geschäftliches (nur Kundenseiten)
28. **Abrechnung** nach Marcos Modell: Ersteinrichtung (deckt 1. Jahr ab), Hosting 60 €/Jahr, Domains 1:1 zum IONOS-Preis, Stundensatz 80 €/h (Sonderfälle nachfragen). Direkt oder über Philipp?
29. **Angebot:** Pakete/Angebot nötig? Termin oder Deadline?
30. **Annuva:** Kunde/Projekt in Annuva anlegen?

## 3. Steckbrief freigeben lassen

Fasse alles als kurzen **Projektsteckbrief** im Chat zusammen. Abschnitte: Projekt & Ziel, Design (Grundlage, Styleguide, Akzentfarbe, Schriften, Markenmomente, Hell/Dunkel, Bildsprache, Ton), Domain & Betrieb, Technik, Inhalte & Funktionen, Doku & Portfolio (Projekt-Doku, Doku im Repo, öffentlich/privat, marco-starker.de), Rechtliches, Workflow, ggf. Geschäftliches. Markiere klar, was gesetzt (Standard) und was entschieden wurde, und liste offene Punkte.

Dann **auf Freigabe warten**. Erst nach „ok“ / „los“ geht es weiter. Der Steckbrief wandert später als Kontext in `CLAUDE.md` und `README.md` des Repos.

## 4. Umsetzung nach Marcos Standard

**Design:**
- Den gewählten Styleguide aus `~/Web/ai/styleguides/` vollständig lesen und seine Farbrollen als Tokens in `src/style/tokens.css` abbilden (Rollen semantisch benennen). Bringt der Styleguide einen Abschnitt „Tokens als CSS“ mit, diesen als Ausgangspunkt nehmen und an die Entscheidungen aus dem Steckbrief anpassen.
- Bei Civic den Akzent ersetzen und die Identität des Vorbilds (Wappen, Rose, Ortsbilder, Ortsnamen) nie übernehmen. Allgemein keine Marken, Figuren oder geschützten Motive übernehmen, an die ein Styleguide nur angelehnt ist (z. B. Comic-Helden, Spiele).
- Vor dem Abschluss die **Prüfliste des Styleguides** durchgehen (Civic: Abschnitt 7, sonst „Dos und Don'ts“) und das Ergebnis im Bericht nennen.
- Bei Kunden-CI dessen Werte als Tokens anlegen; fehlende Werte als offene Punkte melden statt zu raten.

**Struktur (wie annuva-website):**
```
src/
    app/[locale]/   Seiten inkl. imprint, privacy, not-found; api/health; robots.ts; sitemap.ts
    component/      eine Komponente pro Datei (layout, ui, <bereich>)
    config/         config.ts + env.ts + ConfigInterface.ts
    content/legal/  Rechtstexte als Markdown je Sprache, mit {{platzhaltern}} und <!-- if:... --> Blöcken
    i18n/           Locale-Enum, Translator, Sprachweiche
    seo/            buildMetadata
    service/        Klassen ohne Konfiguration
    style/          tokens.css, base.css, layout.css, components.css
    translations/   de/ und en/ als Key/Value-Objekte (DE gegen EN typisiert)
    proxy.ts        Sprach-Redirect (nur bei mehrsprachig)
```

**Code-Regeln:**
- IntelliJ-Code-Style laut CodeGuidlines: 4 Spaces, Single Quotes, Semikolons, Trailing Commas, `else`/`catch`/`finally` auf neuer Zeile, immer Klammern, ausgerichtete Objektwerte und Zuweisungen, Imports nach Pfad sortiert.
- Imports über den Alias `@/` statt relativer Pfade.
- Eine Interface/Klasse/Enum/Komponente pro Datei, nur `export default` (Named Exports nur wo Next.js sie verlangt).
- Suffixe `Interface`, `Enum`, `Type`; explizite Rückgabetypen; Enum-Cases in GroßCamelCase.
- UI-Texte nur über `src/translations`, lange Texte als Markdown.
- Konfiguration nur über Umgebungsvariablen mit Default, alle dokumentiert in `.env.example` (SITE_URL, SITE_NAME, UMAMI_*, LEGAL_NAME/ADDRESS/EMAIL/PHONE/HOSTING, PORT, …).
- Keine Cookies außer technisch nötigen (z. B. Sprachwahl); das in der Datenschutzerklärung benennen.
- Hosting-Angabe im Datenschutz: Hetzner Online GmbH (chronos).

**Tooling:** `npm test` = `tsc --noEmit` + `oxlint` (+ `vitest run`, falls Tests gewünscht). Kein ESLint, kein tsup, kein ctix, kein CircleCI. `package.json` mit `@dasred/<name>`, `engines` Node ≥ 26, semantic-release (main, Backmerge nach develop).

**Docker:** Einstufiges `node:26-alpine`-Image, kopiert `.next/standalone`, `.next/static`, `public` und zuletzt `package.json`; `USER node`; `EXPOSE <port>`; HEALTHCHECK per `wget` auf `/api/health`.

**CI:** `.github/workflows/ci.yml` nutzt `DasRed/github-workflows/.github/workflows/node-docker.yml@v1` mit `dockhand-environment: chronos` und `container-name: <name>`, Secret `DOCKHAND_TOKEN`. Branches: Arbeit auf `develop`, Release auf `main`, Conventional Commits.

**Doku und Portfolio (nur wenn in den Fragen 21 und 23–25 gewählt):**
- Projekt-Doku anzeigen: nach `~/Web/ai/website-marco-starker.de/docs-integration.md` umsetzen (übersetzte Pfade, `scripts/fetch-docs.ts` als `prebuild`, `ProjectDocsService`, Doku-Layout, `.releaserc.json` mit `docs` → Patch, Concurrency in `ci.yml`), Projektdaten nach `project-schema.md`.
- Doku im Repo: `docs/de` und `docs/en` nach `docs-contract.md` mit dem Seitensatz aus `docs-templates.md` anlegen; das README verlinkt auf die Doku-Seite; `docs.yml` nach `docs-release.md`. Token und Secret setzt Marco.
- Öffentliches Repo: `public-repo-checklist.md` vor dem Umschalten abarbeiten und das Ergebnis im Bericht nennen. Umschalten macht Marco.
- marco-starker.de: Eintrag (Daten, Übersetzungen, ggf. Fallstudie) als Vorschlag im Bericht liefern, nicht ins Repo marco-starker.de schreiben.

**Infrastruktur – nur vorbereiten, nicht selbst ausführen:**
- Compose-Service für `~/Web/private/docker-environment/chronos/<stack>/compose.yaml` als Vorschlag liefern, **nicht committen**.
- DNS-Einträge (IONOS), NPM-Proxy-Host (inkl. Redirects der Neben-Domains auf die kanonische Adresse, Let's Encrypt, Force SSL) und Dockhand-Stack richtet Marco selbst ein. Nur mit ausdrücklichem Auftrag über die Connectoren ändern.

**Vor dem Abschluss:** `npm test` und `npm run build` müssen grün sein. Ehrlich berichten, was offen ist (fehlende Rechtsdaten, Platzhaltertexte, Bilder, Design-Werte, Infrastruktur-Schritte für Marco). Kein Commit/Push ohne ausdrückliches OK.
