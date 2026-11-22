---
name: neue-webseite
description: Wenn Marco eine neue Webseite bauen will (Kunden-, Vereins-, Turnier-, Produkt- oder eigene Seite): Rahmenbedingungen abfragen, Steckbrief abstimmen, nach seinem Standard umsetzen.
---

# Neue Webseite für Marco

> Quelle dieses Skills: `skills/neue-webseite/SKILL.md` im Repo `DasRed/ai-instructions` (versioniert). Die Kopie im
> Claude-Konto wird bei Änderungen daraus synchronisiert. Alle Pfade ohne Repo-Angabe gehen vom Root dieses Repos aus
> (lokaler Clone oder GitHub).

Ablauf: **Kontext sammeln → Rahmenbedingungen abfragen → Steckbrief freigeben lassen → umsetzen.**
Vor der Freigabe des Steckbriefs wird **keine Datei angelegt**, kein Repo erstellt, nichts deployt.
Unterhaltung auf Deutsch, Code/Kommentare/Dateinamen/README auf Englisch.

---

## 1. Kontext still sammeln (nur lesen)

Bevor du fragst, schau nach, was schon bekannt ist, damit du nichts doppelt abfragst:

- **Memory:** passende Projekt-/Kundendateien (z. B. Selbstständigkeit Webseiten, Glonntaler Cup, Copa, Annuva, aspect42).
- **Code-Guidelines:** `CodeGuidlines.md` und `intellij-code-styles.xml`.
- **Styleguides:** alle Dateien in `styleguides/` auflisten und von jedem Titel, Zweck und Kurzfassung lesen, damit du in der Design-Runde passende Styleguides vorschlagen kannst. Standard ist `civic.md` (dort zusätzlich Abschnitt 7 kennen).
- **Webseiten-Bausteine:** `website-marco-starker.de/README.md` lesen (Doku-Vertrag, Projektdaten, Doku-Einbindung, öffentliche Repos). Welche Datei wann gebraucht wird, steht dort und bei den Fragen 25 und 27–29.
- **Referenz-Repo:** `DasRed/annuva-website` ist die aktuelle Vorlage für Struktur, Config, i18n, Rechtstexte, Dockerfile und CI. Sein `src/style/tokens.css` ist zugleich ein Umsetzungsbeispiel des Civic-Styleguides (Cremeflächen, Source Serif 4 + Atkinson Hyperlegible Next, eigener Petrol-Akzent).
- **Domains:** IONOS-Connector `domains_list_domains`, ob die Domain schon im Konto ist.
- **Server/Ports:** Dockhand-Connector `list_containers` auf chronos, um freie Ports (Schema **4xxxx** für Apps/Webseiten, 5xxxx für MCPs) und freie Containernamen zu finden.
- **Proxy:** NPM-Connector `list_proxy_hosts`, ob es den Host schon gibt.
- **Bestehende Seite (Relaunch):** Gibt es unter der Domain schon eine Seite, deren URLs, Titel, Descriptions und Sitemap aufnehmen (öffentlich abrufen). Ist die Domain in der Search Console, mit `node tools/search-console.mjs sites`, `sitemaps <site>` und `query <site> <start> <ende> page` die Seiten mit Klicks und Impressionen holen. Das ist die Grundlage für die 301-Weiterleitungen (Frage 19).
- Gibt es das Repo `DasRed/<name>` schon, erst das lesen.

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
   - Styleguide aus `styleguides/` (Empfohlen) – welcher, klärt Frage 6
   - CI des Kunden (Logo, Farben, Schriften vorhanden)
   - Styleguide-Prinzipien + Farben/Logo aus Kunden-CI
   - Wie eine bestehende Seite von Marco (z. B. annuva-website)
   - „Frei neu entwerfen“ geht über Freitext.
6. **Styleguide** (bei Styleguide-Grundlage oder Mischung mit Kunden-CI): Welcher Styleguide aus `styleguides/`?
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

### Runde 4 – SEO und Auffindbarkeit
17. **Suchbegriffe und Region:** Wofür soll die Seite gefunden werden? 3–5 Begriffe je Hauptseite (z. B. „Tennisverein Vierkirchen“, „U9-Hallenturnier Dachau“). Lokal (Ort, Landkreis) oder überregional? Daraus entstehen Titel, Descriptions, H1 und URL-Slugs; die Begriffe kommen in den Steckbrief.
18. **Strukturierte Daten (JSON-LD):** Haupttyp passend zur Art der Seite vorschlagen und fehlende Angaben abfragen:
    - Verein → `SportsClub` bzw. `SportsOrganization`; Turnier/Event → zusätzlich `SportsEvent`/`Event` je Termin (Datum, Ort, Veranstalter, ggf. Anmeldung/Tickets)
    - Kunde mit Laden, Praxis oder Büro → passende `LocalBusiness`-Unterart (Adresse, Öffnungszeiten, Telefon, Geo)
    - Firma, Marco selbst → `Organization` bzw. `Person`/`ProfessionalService`
    - Produkt/App → `SoftwareApplication`/`MobileApplication` (Plattform, Kategorie, Preis/kostenlos)
    - Immer dazu: `WebSite` und bei Unterseiten `BreadcrumbList`.
    - Abfragen: Logo (quadratisch, mind. 112 px), Profile für `sameAs` (Instagram, Facebook, LinkedIn, GitHub, App-Stores), Öffnungszeiten/Termine.
19. **Relaunch und Search Console:** Gibt es alte URLs, die per 301 auf neue Seiten zeigen müssen (Liste aus Schritt 1 vorschlagen)? Gibt es die Domain-Property `sc-domain:<domain>` schon? Falls nein: Marco legt sie an und verifiziert per DNS-TXT bei IONOS; der Service-Account aus `secrets/` wird als Nutzer eingetragen.
20. **Teilen-Vorschau (Open Graph):** OG-Bild automatisch aus Logo + Seitentitel im Design der Seite erzeugen (Empfohlen) / ein festes Motiv je Sprache / je Seite ein eigenes Motiv (z. B. Turnierplakat).

Immer fest, ohne Frage (Details in Schritt 4 „SEO“): eine kanonische Adresse mit Canonical auf jeder Seite, hreflang mit `x-default` bei mehreren Sprachen, eigener Titel und eigene Description je Seite, Open Graph/Twitter Card, JSON-LD serverseitig, `robots.txt` und `sitemap.xml` aus dem Code, Vorschau-/Staging-Instanzen `noindex`, Impressum und Datenschutz `noindex, follow` und nicht in der Sitemap, echte 404, eine `h1` je Seite, Core Web Vitals im Blick.

### Runde 5 – Technik und Funktionen
21. **Technik:**
    - Standard (Empfohlen): Next.js (App Router, `output: 'standalone'`), React 19, TypeScript 7, Tailwind 4, Node 26, ESM.
    - Alternative: WordPress (wenn der Kunde Inhalte selbst pflegen will), rein statisch. Auch dann gilt der SEO-Standard aus Schritt 4 (bei WordPress über ein schlankes SEO-Plugin, z. B. The SEO Framework).
22. **Pflege:** Wer pflegt die Inhalte später, und wie oft ändern sie sich? (Kunde selbst → WordPress oder Markdown-Inhalte ansprechen.)
23. **Funktionen:** Kontaktformular (Mailversand wie?), Galerie, Termine/Spielplan/Ergebnisse, Downloads, Suche, externe Einbindungen (YouTube, Maps, Instagram → nur mit Zwei-Klick-Lösung), Login/Admin.
24. **Daten:** keine / SQLite / Postgres 18 auf chronos / externe API.
25. **Projekt-Doku anzeigen:** Soll die Seite Doku aus Projekt-Repos zeigen (z. B. Doku zum eigenen Produkt oder zu Open-Source-Projekten)?
    - nein (Empfohlen bei Kunden-, Vereins- und Eventseiten)
    - ja → `website-marco-starker.de/docs-contract.md`, `project-schema.md`, `docs-integration.md` und `docs-release.md` lesen. Im Steckbrief festhalten, welche Repos (Slug, Repo, Branch) eingebunden werden. Die Doku wird beim Build ins Image gebaut, Änderungen kommen per Release der Webseite.

### Runde 6 – Betrieb und Workflow
26. **Server:** chronos (Empfohlen, alles Öffentliche) / eros. Port und Containername aus Schritt 1 vorschlagen.
27. **Repo:** Name unter `DasRed`, privat/öffentlich. Öffentlich nur, wenn andere es nutzen können (Tools, Pakete, MCP-Server, Mods); Kunden-, Vereins- und Produktseiten bleiben privat. Bei öffentlich gilt `website-marco-starker.de/public-repo-checklist.md`.
28. **Doku im Repo:** Soll das Repo Doku nach dem Doku-Vertrag bekommen (`docs/de`, `docs/en`)?
    - ja (Empfohlen bei öffentlichen Repos, die andere nutzen) → `docs-contract.md` und `docs-templates.md` lesen und den Seitensatz der passenden Projektart vorschlagen; dazu `docs.yml` und das Secret `WEBSITE_RELEASE_TOKEN` nach `docs-release.md`
    - nein (Empfohlen bei privaten Repos)
29. **marco-starker.de:** Soll das Projekt auf marco-starker.de erscheinen (Open Source, Produkt, Referenz, Experiment)? Bei Kundenseiten nur mit Einverständnis des Kunden. Ja → Eintrag nach `website-marco-starker.de/project-schema.md` (Abschnitt 4) als Vorschlag vorbereiten; das Repo marco-starker.de nicht selbst ändern.
30. **Git:** Darf Claude in diesem Repo committen/pushen? Standard: **nein**, nur mit ausdrücklichem OK.
31. **Tests:** Unit-Tests gewünscht? (Bei einfachen Seiten oft nein; Lint + Typecheck immer.)

### Runde 7 – Geschäftliches (nur Kundenseiten)
32. **Abrechnung** nach Marcos Modell: Ersteinrichtung (deckt 1. Jahr ab), Hosting 60 €/Jahr, Domains 1:1 zum IONOS-Preis, Stundensatz 80 €/h (Sonderfälle nachfragen). Direkt oder über Philipp?
33. **Angebot:** Pakete/Angebot nötig? Termin oder Deadline?
34. **Annuva:** Kunde/Projekt in Annuva anlegen?

## 3. Steckbrief freigeben lassen

Fasse alles als kurzen **Projektsteckbrief** im Chat zusammen. Abschnitte: Projekt & Ziel, Design (Grundlage, Styleguide, Akzentfarbe, Schriften, Markenmomente, Hell/Dunkel, Bildsprache, Ton), Domain & Betrieb, SEO (Suchbegriffe, Region, JSON-LD-Typen und fehlende Angaben, Weiterleitungen aus dem Relaunch, OG-Bild, Search Console), Technik, Inhalte & Funktionen, Doku & Portfolio (Projekt-Doku, Doku im Repo, öffentlich/privat, marco-starker.de), Rechtliches, Workflow, ggf. Geschäftliches. Markiere klar, was gesetzt (Standard) und was entschieden wurde, und liste offene Punkte.

Dann **auf Freigabe warten**. Erst nach „ok“ / „los“ geht es weiter. Der Steckbrief wandert später als Kontext in `CLAUDE.md` und `README.md` des Repos.

## 4. Umsetzung nach Marcos Standard

**Design:**
- Den gewählten Styleguide aus `styleguides/` vollständig lesen und seine Farbrollen als Tokens in `src/style/tokens.css` abbilden (Rollen semantisch benennen). Bringt der Styleguide einen Abschnitt „Tokens als CSS“ mit, diesen als Ausgangspunkt nehmen und an die Entscheidungen aus dem Steckbrief anpassen.
- Bei Civic den Akzent ersetzen und die Identität des Vorbilds (Wappen, Rose, Ortsbilder, Ortsnamen) nie übernehmen. Allgemein keine Marken, Figuren oder geschützten Motive übernehmen, an die ein Styleguide nur angelehnt ist (z. B. Comic-Helden, Spiele).
- Vor dem Abschluss die **Prüfliste des Styleguides** durchgehen (Civic: Abschnitt 7, sonst „Dos und Don'ts“) und das Ergebnis im Bericht nennen.
- Bei Kunden-CI dessen Werte als Tokens anlegen; fehlende Werte als offene Punkte melden statt zu raten.

**Struktur (wie annuva-website):**
```
src/
    app/            robots.ts, sitemap.ts, manifest.ts, icon.svg, apple-icon.png (nur im App-Root, nicht unter [locale])
    app/[locale]/   Seiten inkl. imprint, privacy, not-found; opengraph-image.tsx; api/health
    component/      eine Komponente pro Datei (layout, ui, seo/JsonLd, <bereich>)
    config/         config.ts + env.ts + ConfigInterface.ts
    content/legal/  Rechtstexte als Markdown je Sprache, mit {{platzhaltern}} und <!-- if:... --> Blöcken
    i18n/           Locale-Enum, Translator, Sprachweiche
    seo/            buildMetadata, buildAlternates, Builder je JSON-LD-Typ, sitemapEntries
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
- Konfiguration nur über Umgebungsvariablen mit Default, alle dokumentiert in `.env.example` (SITE_URL, SITE_NAME, SITE_INDEXABLE, UMAMI_*, LEGAL_NAME/ADDRESS/EMAIL/PHONE/HOSTING, PORT, …).
- Keine Cookies außer technisch nötigen (z. B. Sprachwahl); das in der Datenschutzerklärung benennen.
- Hosting-Angabe im Datenschutz: Hetzner Online GmbH (chronos).

**SEO (immer):**
- **Kanonische Adresse:** `SITE_URL` ist die einzige Origin (https, www-Variante laut Frage 13, ohne Slash am Ende) und wird im Root-Layout als `metadataBase` gesetzt. Jede Seite hat ein absolutes Canonical auf sich selbst, ohne Query-Parameter. `trailingSlash: false`, URLs klein, sprechend und in der Sprache der Seite (bei mehrsprachig übersetzte Segmente über eine Routentabelle wie in `website-marco-starker.de/docs-integration.md` Abschnitt 2).
- **Metadaten nur über `src/seo/buildMetadata`:** Jede `page.tsx` exportiert `generateMetadata` und ruft `buildMetadata({locale, route, params, title, description, image?, noIndex?})` auf, nie eigene `<meta>`-Tags. Ergebnis: `title`, `description`, `alternates` (Canonical + `languages`), `openGraph` (`type`, `url`, `siteName`, `locale`, `alternateLocale`, `images`), `twitter` (`summary_large_image`), `robots`.
- **Titel und Description:** aus den Übersetzungen, je Seite eindeutig. Titel ≤ 60 Zeichen über das Template `%s | <SITE_NAME>` (Startseite: Seitenname + Kernaussage, ohne Template), Description 120–160 Zeichen mit dem Suchbegriff der Seite. Genau eine `h1` je Seite, die zum Titel passt; Überschriften ohne Sprünge.
- **Mehrsprachig:** `alternates.languages` mit `de`, `en` und `x-default` (→ `/`), auf allen Sprachfassungen gegenseitig. Die Sprachweiche auf `/` leitet mit **307** um (je Besucher verschieden), Pfade in der falschen Sprache mit **301**. `<html lang>` je Locale, `og:locale` `de_DE`/`en_US` plus `og:locale:alternate`. Die Sprachweiche greift nur auf `/`, nie auf Seiten mit Sprachpräfix (Crawler kommen ohne Cookie und mit englischem Accept-Language).
- **JSON-LD:** `src/component/seo/JsonLd.tsx` gibt `<script type="application/ld+json">` serverseitig aus, Inhalt per `JSON.stringify(data).replace(/</g, '\\u003c')`. Je Typ ein Builder in `src/seo/` (Typen aus `schema-dts`, nur als devDependency). `WebSite` und der Haupttyp (mit `@id` `<SITE_URL>/#organization`, `name`, `url`, `logo`, `sameAs`, ggf. `address`, `openingHoursSpecification`) stehen im Layout, seitenbezogene Typen (`Event`, `BreadcrumbList`, `SoftwareApplication` …) in der Seite und verweisen per `@id` aufeinander. Nur Angaben, die auch sichtbar auf der Seite stehen; keine erfundenen Bewertungen, Preise oder Termine. `FAQPage` nur bei echter, sichtbarer FAQ.
- **`robots.ts`:** Mit `SITE_INDEXABLE=true`: alles erlauben außer `/api/`, dazu `sitemap: <SITE_URL>/sitemap.xml`. Sonst (Standard, lokal, Staging, Vorschau): `Disallow: /`, zusätzlich `robots: {index: false, follow: false}` in `buildMetadata` und Header `X-Robots-Tag: noindex, nofollow` über `headers()` in `next.config.ts`.
- **`sitemap.ts`:** aus derselben Routentabelle bzw. denselben Daten wie die Navigation erzeugen, nie von Hand pflegen. Jede indexierbare Seite je Sprache mit `alternates.languages`; `lastModified` nur mit echtem Datum (Inhalt, Termin, Doku-Manifest), sonst weglassen; kein `changefreq`/`priority`. Nicht hinein: `noindex`-Seiten (Impressum, Datenschutz), Weiterleitungen, 404, `/api`. Ab 50.000 URLs `generateSitemaps`.
- **Statuscodes:** unbekannte Pfade und fehlende Inhalte über `notFound()` mit echtem 404 und `noindex`; Weiterleitungen alter URLs aus Frage 19 als `redirects()` in `next.config.ts` mit `permanent: true`, jeweils auf die passende neue Seite, nicht pauschal auf die Startseite.
- **Teilen-Vorschau:** `opengraph-image.tsx` mit `next/og` (1200×630, Logo + Titel in den Farben der Tokens; Schrift als TTF/WOFF aus dem `@fontsource`-Paket laden, `next/og` kann kein WOFF2) oder feste Motive aus Frage 20. Alt-Text für das Bild setzen.
- **Icons und Manifest** über die Next.js-Dateikonventionen: `icon.svg`, `apple-icon.png` (180×180), `manifest.ts` mit Name, Farben und Icons; `themeColor` im `viewport`-Export.
- **Leistung (Core Web Vitals):** Server Components als Standard, Client-JS nur, wo nötig. Bilder über `next/image` mit Größen und `sizes`, das LCP-Bild mit `priority`, AVIF/WebP. Schriften selbst gehostet mit `font-display: swap`, nur benötigte Schnitte. Keine Layout-Shifts durch Banner, Einbettungen oder nachladende Schriften. Externe Einbindungen nur per Zwei-Klick.
- **Inhalte:** sprechende Linktexte (kein „hier klicken“), Alt-Texte für alle inhaltlichen Bilder, interne Links zwischen verwandten Seiten, bei lokalen Seiten Name, Adresse und Telefon überall identisch (Footer, Impressum, JSON-LD, Google-Unternehmensprofil).
- **Tests** (falls gewünscht): `buildMetadata` (Canonical, hreflang inkl. `x-default`, `noindex`), `sitemap` (alle Seiten in beiden Sprachen, keine Rechtsseiten), `robots` je `SITE_INDEXABLE`, `JsonLd` maskiert `<`.

**Tooling:** `npm test` = `tsc --noEmit` + `oxlint` (+ `vitest run`, falls Tests gewünscht). Kein ESLint, kein tsup, kein ctix, kein CircleCI. `package.json` mit `@dasred/<name>`, `engines` Node ≥ 26, semantic-release (main, Backmerge nach develop).

**Docker:** Einstufiges `node:26-alpine`-Image, kopiert `.next/standalone`, `.next/static`, `public` und zuletzt `package.json`; `USER node`; `EXPOSE <port>`; HEALTHCHECK per `wget` auf `/api/health`.

**CI:** `.github/workflows/ci.yml` nutzt `DasRed/github-workflows/.github/workflows/node-docker.yml@v1` mit `dockhand-environment: chronos` und `container-name: <name>`, Secret `DOCKHAND_TOKEN`. Branches: Arbeit auf `develop`, Release auf `main`, Conventional Commits.

**Doku und Portfolio (nur wenn in den Fragen 25 und 27–29 gewählt):**
- Projekt-Doku anzeigen: nach `website-marco-starker.de/docs-integration.md` umsetzen (übersetzte Pfade, `scripts/fetch-docs.ts` als `prebuild`, `DocsRepository`, Doku-Layout, semantic-release-Konfiguration im Schlüssel `"release"` der `package.json` mit `docs` → Patch, Concurrency in `ci.yml`), Projektdaten nach `project-schema.md`.
- Doku im Repo: `docs/de` und `docs/en` nach `docs-contract.md` mit dem Seitensatz aus `docs-templates.md` anlegen; das README verlinkt auf die Doku-Seite; `docs.yml` nach `docs-release.md`. Token und Secret setzt Marco.
- Öffentliches Repo: `public-repo-checklist.md` vor dem Umschalten abarbeiten und das Ergebnis im Bericht nennen. Umschalten macht Marco.
- marco-starker.de: Eintrag (Daten, Übersetzungen, ggf. Fallstudie) als Vorschlag im Bericht liefern, nicht ins Repo marco-starker.de schreiben.

**Infrastruktur – nur vorbereiten, nicht selbst ausführen:**
- Compose-Service für `chronos/<stack>/compose.yaml` im Repo `docker-environment` als Vorschlag liefern, **nicht committen**. Produktion setzt `SITE_INDEXABLE=true`, jede andere Instanz nicht.
- DNS-Einträge (IONOS), NPM-Proxy-Host (inkl. 301-Redirects der Neben-Domains und der nicht kanonischen www-Variante auf die kanonische Adresse **mit Pfad**, Let's Encrypt, Force SSL) und Dockhand-Stack richtet Marco selbst ein. Nur mit ausdrücklichem Auftrag über die Connectoren ändern.

**SEO-Prüfung vor dem Abschluss** (lokal mit `npm run build` und `SITE_INDEXABLE=true npm start`, Ergebnis im Bericht):
- `/robots.txt` und `/sitemap.xml` liefern 200; jede URL der Sitemap liefert 200 ohne Weiterleitung; ohne `SITE_INDEXABLE` sperrt `robots.txt` alles und der Header `X-Robots-Tag` ist gesetzt.
- Auf jeder Seite: genau ein Canonical (absolut, auf sich selbst), hreflang-Paare gegenseitig inkl. `x-default`, Titel und Description vorhanden, eindeutig und in der Länge, genau eine `h1`, `lang` stimmt.
- Jeder JSON-LD-Block ist gültiges JSON mit `@context` und `@type`, die Angaben stimmen mit der Seite überein.
- Ein unbekannter Pfad liefert 404; alte URLs aus Frage 19 liefern 301/308 auf die richtige Seite; `/` leitet mit 307 auf die Sprache.
- Lighthouse, falls verfügbar (`npx lighthouse <url> --only-categories=seo,accessibility,performance,best-practices`): SEO und Barrierefreiheit ≥ 95, Performance ≥ 90 (mobil).

**Nach dem Go-live – macht Marco oder Claude nur mit ausdrücklichem OK:**
- Search Console: Domain-Property `sc-domain:<domain>` (DNS-TXT bei IONOS), Sitemap einreichen mit `node tools/search-console.mjs submit-sitemap sc-domain:<domain> <SITE_URL>/sitemap.xml`, Startseite mit `inspect` prüfen. Bei Relaunch nach einigen Tagen `query … page` gegen die alten URLs prüfen.
- JSON-LD im Rich-Results-Test von Google und auf validator.schema.org prüfen.
- Lokale Seiten: Google-Unternehmensprofil mit identischen Angaben anlegen oder aktualisieren (Kunde oder Marco). Optional Bing Webmaster Tools (Import aus der Search Console).

**Vor dem Abschluss:** `npm test` und `npm run build` müssen grün sein. Ehrlich berichten, was offen ist (fehlende Rechtsdaten, Platzhaltertexte, Bilder, Design-Werte, Infrastruktur-Schritte für Marco). Kein Commit/Push ohne ausdrückliches OK.
