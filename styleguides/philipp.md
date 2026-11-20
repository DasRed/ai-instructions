# Styleguide „Philipp“ – Code-Bento in Signalrot

> **Zweck:** Gestaltungsreferenz für klare, moderne Seiten mit Entwickler-Bezug und einer kräftigen Markenfarbe: Portfolios, Freelancer- und Agentur-Seiten, Dev-Tools, Tech-Startups. Der Stil ist aus Designer-Feedback zu mehreren Entwürfen entstanden und kombiniert deren beste Teile: die Ruhe und die Code-Schnipsel von „Hello World“, die Kachel-Übersicht von „Bento“, die nummerierten Zeilen und den Fahrplan von „Studio“, die Zeitleiste und Verlaufsüberschriften von „Cosmos“ und die blinkenden Cursor von „Terminal“ – zusammengehalten von einem Signalrot und wechselnden Abschnittsfarben.

## Kurzfassung

Ein roter Einstieg mit sich abtippenden Code-Zeilen, einer großen, sehr gut lesbaren Überschrift in Weiß und einem Porträt als Kachel. Darunter eine Bento-Übersicht mit den wichtigsten Fakten. Die Abschnitte wechseln die Farbe – Weiß, Hellgrau, Dunkelgrau, Rot – und sind so ohne Rahmen klar getrennt. Leistungen und Listen als nummerierte Zeilen mit rotem Hover, der Ablauf als Fahrplan-Karten, der Werdegang als Zeitleiste. Hinter jeder Abschnittsüberschrift blinkt ein roter Cursor. Schrift: Geist und Geist Mono. Hell- und Dunkelmodus.

## 1. Leitidee

- **Überblick zuerst:** Nach dem Hero beantwortet eine Kachelreihe die wichtigsten Fragen auf einen Blick.
- **Lesbarkeit vor Effekt:** Überschriften in einer kräftigen Sans, nicht in dünner Serif oder extrem breiter Display-Schrift.
- **Struktur durch Farbe:** Abschnittswechsel über Hintergrundfarben statt über Linien und Kästen. Rot nur am Anfang und am Ende (Hero und Kontakt) als große Fläche.
- **Code als leiser Akzent:** Kurze Code-Zeilen, Mono-Zähler (`// 01`), blinkende Cursor. Nie ganze Abschnitte als Terminal.
- **Ordnung durch Nummern:** Leistungen, Listen und Ablauf sind nummeriert.

**Passt gut für:** Entwickler und Freelancer, kleine Agenturen, Tech-Produkte, Personal Branding mit kräftiger Markenfarbe. **Passt weniger für:** sehr leise oder sehr verspielte Marken.

## 2. Farben und Rollen

| Token                         | Hell      | Dunkel                | Verwendung                                                       |
|-------------------------------|-----------|-----------------------|------------------------------------------------------------------|
| `bg` / `section-white`        | `#FFFFFF` | `#141416`             | Seitengrund, weiße Abschnitte                                    |
| `section-light` / `surface-2` | `#F2F2F0` | `#1B1B1E` / `#232327` | hellgraue Abschnitte, Chips                                      |
| `section-gray`                | `#26262A` | `#0C0C0E`             | dunkelgraue Abschnitte, Footer, „Aktuell“-Kachel                 |
| `section-gray-text`           | `#F4F4F5` | `#F4F4F5`             | Text auf Dunkelgrau                                              |
| `section-gray-muted`          | `#A1A1AA` | `#A1A1AA`             | gedämpfter Text auf Dunkelgrau                                   |
| `surface` / `tile`            | `#FFFFFF` | `#1C1C1F` / `#1F1F23` | Kacheln und Karten                                               |
| `text`                        | `#141416` | `#F4F4F5`             | Schrift                                                          |
| `text-soft`                   | `#3A3A40` | `#C9C9CF`             | Fließtext                                                        |
| `text-muted`                  | `#72727A` | `#8F8F98`             | Labels, Metadaten                                                |
| `line`                        | `#E2E2DF` | `#2E2E33`             | Ränder                                                           |
| `red`                         | `#E3202F` | `#C4141F`             | Markenrot: Hero-, Kontakt- und Artikel-Flächen, gefüllte Buttons |
| `red-deep`                    | `#A80F19` | `#7D0C15`             | Verlaufsende im Hero, Schatten                                   |
| `accent`                      | `#E3202F` | `#FF3B47`             | Text-Akzente: Zahlen, Links, Zähler, Cursor, Hover               |
| `accent-strong`               | `#B8141F` | `#FF6A73`             | Hover                                                            |
| `accent-soft`                 | `#FDE4E6` | `#3A1418`             | Badges, Hinterlegungen                                           |

**Kontrast (WCAG):**

| Paar                                    | Hell     | Dunkel   |
|-----------------------------------------|----------|----------|
| `text` auf `bg`                         | 18,4 : 1 | 16,7 : 1 |
| `text-muted` auf `bg`                   | 4,8 : 1  | 5,7 : 1  |
| `accent` auf `bg`                       | 4,7 : 1  | 5,2 : 1  |
| Weiß auf `red`                          | 4,7 : 1  | 6,1 : 1  |
| `section-gray-muted` auf `section-gray` | 5,9 : 1  | –        |

**Regeln, die daraus folgen:**

- Gefüllte rote Buttons und rote Flächen mit weißem Text nutzen **immer `red`**, nie `accent`. Im Dunkelmodus hätte Weiß auf `accent` (`#FF3B47`) nur 3,5 : 1.
- `red` ist im Dunkelmodus keine Textfarbe (3,0 : 1 auf `bg`); dafür gibt es `accent`.
- Auf Rot weißen Text mit voller Deckkraft setzen; abgeschwächtes Weiß (z. B. 75 %) nur für große Labels.

## 3. Typografie

- **Sans:** `Geist` (Variable) für Überschriften und Text, `@fontsource-variable/geist`.
- **Mono:** `Geist Mono` (Variable) für Code-Zeilen, Zähler, Labels, Chips, Bildunterschriften; `@fontsource-variable/geist-mono`. Lizenz: SIL OFL.
- **Größen:** Display `clamp(2.5rem, 1.4rem + 3.8vw, 5.6rem)`, Gewicht 700–750, `letter-spacing: -0.045em`, Zeilenhöhe ~1.0; Überschrift `clamp(2rem, 1.3rem + 2.4vw, 3.6rem)`, `letter-spacing: -0.04em`; Lead `clamp(1.08rem, 1rem + 0.4vw, 1.35rem)`.
- **Abschnittszähler:** Mono `// 01` in `accent`, 0.8rem, über der Überschrift.
- **Verlaufsüberschrift:** Abschnittstitel laufen von `text` zu `accent` (`background-clip: text`), auf Dunkelgrau von Weiß zu einem hellen Rot. Nur Titel, kein Fließtext.
- **Labels:** Mono, Versalien, `letter-spacing: 0.06em`, 0.75rem.

## 4. Layout und Abschnitte

- **Farbfolge (Beispiel):** Hero **Rot** → Übersicht **Hellgrau** → Über **Weiß** → Leistungen **Hellgrau** → Code-Liste **Dunkelgrau** → Projekte **Weiß** → Werdegang **Hellgrau** → Werkzeuge **Weiß** → Artikel **Hellgrau** → Kontakt **Rot** → Footer **Dunkelgrau**. Nie zwei gleiche Farben direkt hintereinander.
- **Raster:** Kacheln 2 → 4 (ab `48rem`) → 6 Spalten (ab `80rem`), `gap: 0.9rem`; jede Zeile muss aufgehen (letzte Kacheln bei 6 Spalten `span 3`).
- **Kein fester Max-Width-Container:** breite Bildschirme bekommen mehr Spalten.
- **Ecken:** Kacheln `1.25rem`, kleine Elemente `0.6rem`. **Schatten:** `0 1px 2px rgb(20 20 22 / 0.05), 0 12px 32px -20px rgb(20 20 22 / 0.3)`.
- **Abstände:** Seitenrand `clamp(1.25rem, 4vw, 4rem)`, Abschnittsabstand `clamp(4.5rem, 9vw, 8rem)`.

## 5. Komponenten

| Element                     | Gestaltung                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Header**                  | Name in Mono mit rotem, blinkendem Block-Cursor; Navigation; Theme-Umschalter; Sprachwahl als Pille                                                                                                                                                                                                                                              |
| **Hero (Rot)**              | Verlauf `red` → `red-deep`; oben eine Code-Zeile mit Kommentar (`// Sprache · Jahr`), die sich abtippt und reihum wechselt; Begrüßung, große weiße Überschrift, Lead, Verfügbarkeits-Badge, Buttons (weiß gefüllt mit roter Schrift + weiße Outline); rechts das Porträt als Kachel mit Mono-Bildunterschrift im Code-Stil (`<Name role="…" />`) |
| **Bento-Übersicht**         | Kacheln: „Aktuell“ (dunkelgrau), 4 Kennzahlen (rote Zahl unten), tägliches Werkzeug (Mono-Chips), neuester Artikel (rote Kachel, Pfeil), Wohnort (Punktraster `radial-gradient(var(--line) 1.2px, transparent 1.2px)` / `12px`), persönliche Notiz, Erreichbarkeit                                                                               |
| **Abschnittskopf**          | `// 0n` → Verlaufsüberschrift mit blinkendem Cursor dahinter → Lead                                                                                                                                                                                                                                                                              |
| **Nummerierte Zeilen**      | volle Breite, Nummer in Mono/Rot, Titel groß, Beschreibung oder Code rechts, feine Linie dazwischen; Hover: Zeile wird rot hinterlegt bzw. Titel rot und rückt ein                                                                                                                                                                               |
| **Fahrplan**                | 4 Karten nebeneinander, jede mit 3 px rotem Balken oben, Nummer in Mono, Titel, zwei Sätze                                                                                                                                                                                                                                                       |
| **Code-Liste (Dunkelgrau)** | Zeilen: Nummer · Sprache · Jahr und Ort · die passende Code-Zeile in Mono                                                                                                                                                                                                                                                                        |
| **Zeitleiste**              | vertikale Linie mit Verlauf (Rot → transparent), Punkte als rote Ringe (aktuelle Station gefüllt), Zeitraum in Mono/Rot, Station rechts                                                                                                                                                                                                          |
| **Karten**                  | weiß, Rand `line`, Radius `1.25rem`, Hover Rand `accent` und `translateY(-2px)`                                                                                                                                                                                                                                                                  |
| **Kontakt (Rot)**           | Formular als weiße Karte auf Rot, Kontaktwege daneben in Weiß mit Icons                                                                                                                                                                                                                                                                          |
| **Footer**                  | Dunkelgrau, klein, Links rechts                                                                                                                                                                                                                                                                                                                  |
| **Theme-Umschalter**        | System → Hell → Dunkel, Wahl in `localStorage`, Inline-Skript setzt `data-theme` vor dem ersten Zeichnen                                                                                                                                                                                                                                         |

## 6. Bewegung

- Hero-Code: Zeilen per `clip-path` aufdecken, reihum wechseln (`hello calc(var(--count) * 3s) infinite`).
- Cursor: `blink 1.1s steps(1) infinite` – im Header, hinter Abschnittstiteln, am Ende der Code-Zeile.
- Hover: Kacheln heben sich, Zeilen färben sich.
- `prefers-reduced-motion`: erste Code-Zeile statisch, Cursor ohne Blinken, kein Anheben.

## 7. Dos und Don'ts

- **Do:** Rot als Fläche nur oben und unten; dazwischen trägt Rot nur Akzente.
- **Do:** Jede Bento-Zeile schließen; mobil Reihenfolge prüfen.
- **Do:** Echte, korrekte Code-Zeilen.
- **Don't:** Weißer Text auf dem hellen Dunkelmodus-Rot.
- **Don't:** Mehr als ein großes Rot pro Bildschirm.
- **Don't:** Extreme Display-Schriften oder dünne Serifen für Überschriften – Lesbarkeit ist der Kern dieses Stils.

## 8. Tokens als CSS

```css
:root {
    --bg: #ffffff;
    --surface: #ffffff;
    --surface-2: #f2f2f0;
    --text: #141416;
    --text-soft: #3a3a40;
    --text-muted: #72727a;
    --line: #e2e2df;
    --accent: #e3202f;
    --accent-strong: #b8141f;
    --accent-soft: #fde4e6;
    --accent-ink: #ffffff;
    --red: #e3202f;
    --red-deep: #a80f19;
    --section-white: #ffffff;
    --section-light: #f2f2f0;
    --section-gray: #26262a;
    --section-gray-text: #f4f4f5;
    --section-gray-muted: #a1a1aa;
    --section-gray-line: #3a3a40;
    --tile: #ffffff;
    --radius: 1.25rem;
    --radius-small: 0.6rem;
    --shadow: 0 1px 2px rgb(20 20 22 / 0.05), 0 12px 32px -20px rgb(20 20 22 / 0.3);
    --font-sans: 'Geist Variable', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'Geist Mono Variable', ui-monospace, Menlo, monospace;
    color-scheme: light;
}

[data-theme=dark] {
    --bg: #141416;
    --surface: #1c1c1f;
    --surface-2: #232327;
    --text: #f4f4f5;
    --text-soft: #c9c9cf;
    --text-muted: #8f8f98;
    --line: #2e2e33;
    --accent: #ff3b47;
    --accent-strong: #ff6a73;
    --accent-soft: #3a1418;
    --accent-ink: #ffffff; /* nur auf --red verwenden, nicht auf --accent */
    --red: #c4141f;
    --red-deep: #7d0c15;
    --section-white: #141416;
    --section-light: #1b1b1e;
    --section-gray: #0c0c0e;
    --section-gray-line: #2a2a2e;
    --tile: #1f1f23;
    --shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 12px 32px -20px rgb(0 0 0 / 0.7);
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/philipp.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**, Markenfarbe **[Rot oder andere kräftige Farbe]**. Roter Hero mit Code-Zeilen in **[Sprachen]**, Bento-Übersicht mit **[Fakten]**, Leistungen als nummerierte Zeilen, Fahrplan in **[Schritte]**, Werdegang als Zeitleiste, Abschnitte im Farbwechsel Weiß/Hellgrau/Dunkelgrau/Rot, Hell- und Dunkelmodus.
