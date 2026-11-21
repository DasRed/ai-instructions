# Styleguide „Comic“ – Zeitungspapier, dicke Tusche, Rasterpunkte

> **Zweck:** Gestaltungsreferenz für fröhliche, laute und zugängliche Seiten: Events, Kinder- und Jugendangebote, Kreativ-Portfolios, Spiele, Produktlaunches mit Augenzwinkern. Der Stil sieht aus wie eine Comicseite mit Panels, Sprechblasen, Soundeffekten und Druckraster.

## Kurzfassung

Cremefarbenes Zeitungspapier mit feinem rotem Rasterpunkt, darauf weiße Panels mit 3 px schwarzer Tusche-Linie und hartem Versatzschatten. Überschriften in Bangers, groß und leicht schräg, mit schwarzem Schatten. Primärfarben Rot, Gelb, Blau. Sprechblasen und ein Explosions-Stern („BOOM“) für die eine wichtigste Zahl oder Botschaft. Panels sind minimal verdreht, damit es gezeichnet wirkt.

## 1. Leitidee

- **Die Seite ist ein Heft:** Der Hero ist eine Comicseite aus mehreren Panels; Abschnitte sind weitere Seiten.
- **Erzählen statt auflisten:** Erzählkästen (gelbe Caption-Boxen) leiten ein, Sprechblasen lassen die Person sprechen, Gedankenblasen zeigen Nebengedanken.
- **Laut, aber lesbar:** Comic-Schrift für Überschriften und Ausrufe; Fließtext in einer lesbaren, freundlichen Schrift.

**Passt gut für:** Events, Workshops, Kinder- und Jugendarbeit, Vereine, Kreative, Spiele. **Passt nicht für:** seriöse Beratung, Recht, Gesundheit. Keine Figuren, Logos oder Panels aus bestehenden Comics verwenden.

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                                |
|-----------------|-----------|-------------------------------------------|
| `bg`            | `#FFF6D8` | Zeitungspapier                            |
| `surface`       | `#FFFFFF` | Panels, Karten                            |
| `surface-2`     | `#FFF1B8` | Caption-Boxen, abgesetzte Flächen         |
| `text` / `line` | `#111111` | Tusche: Text und alle Ränder              |
| `text-soft`     | `#222222` | Fließtext                                 |
| `text-muted`    | `#555555` | Metadaten                                 |
| `accent`        | `#EF3E36` | Rot: Primärbutton, Soundeffekte, Raster   |
| `accent-strong` | `#C92A22` | Hover                                     |
| `yellow`        | `#FFD23F` | Erzählkästen, Explosion, Hervorhebungen   |
| `blue`          | `#2E86DE` | Porträt-Panel-Hintergrund, Fokus-Schatten |
| `cyan`          | `#48DBFB` | Monogramme, kleine Flächen                |

**Kontrast:** `text` auf `bg` 17,5 : 1, `text-muted` 6,9 : 1, Schwarz auf `yellow` 13,1 : 1. **Achtung:**

- Weiß auf `accent` hat nur 3,9 : 1. Das reicht nur für große Schrift (Bangers ab ~24 px). Für kleine Buttontexte `accent-strong` (`#C92A22`, 5,5 : 1) oder schwarzen Text (4,9 : 1) nehmen.
- `blue` als Linkfarbe auf Weiß hat 3,8 : 1. Für Textlinks ein dunkleres Blau wie `#1A6BBF` (5,4 : 1) verwenden; `#2E86DE` nur für Flächen und Schatten.
- Gelb und Cyan sind Flächenfarben, nie Textfarben auf hellem Grund.

## 3. Typografie

- **Display:** `Bangers` (`@fontsource/bangers`), Versalien, `letter-spacing: 0.02–0.04em`, Schatten `3px 3px 0 #111` (große Titel `6px 6px 0`).
- **Text:** `Comic Neue` 400/700 (`@fontsource/comic-neue`), Fallback `Comic Sans MS`, `Chalkboard SE`. Gut lesbar, nicht albern. Lizenz beider Schriften: SIL OFL.
- **Größen:** Display `clamp(2.6rem, 1.4rem + 4.6vw, 6.6rem)`, Überschrift `clamp(2.4rem, 1.4rem + 3.4vw, 5rem)`, Lead `clamp(1.15rem, 1.05rem + 0.4vw, 1.45rem)`.

## 4. Layout und Flächen

- **Tusche:** `--ink: 3px solid #111`; Hero-Panels 4 px.
- **Pop-Schatten:** `--pop: 6px 6px 0 #111` – harter Versatz ohne Unschärfe, für Panels, Karten, Buttons.
- **Rasterpunkte:** Seitengrund `radial-gradient(rgb(239 62 54 / 0.12) 1.4px, transparent 1.6px)` mit `background-size: 14px 14px`; auf farbigen Panels weiße Punkte (`0.35` Deckkraft, 12 px).
- **Verdrehung:** Panels und Karten abwechselnd um ±0.6° bis ±1.5° drehen; Sticker bis −8°.
- **Radius:** klein (`0.3–0.4rem`), damit Ecken gezeichnet wirken.

## 5. Komponenten

| Element                 | Gestaltung                                                                                                                                                                                                                        |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero als Comicseite** | Raster aus 3 Panels: Story-Panel (Caption-Box, Titel, Lead, Buttons), Porträt-Panel auf Blau mit Sprechblase („Hi, ich bin …“), Boom-Panel mit Strahlen und Explosionsstern für eine Kennzahl; unten rechts „Fortsetzung folgt →“ |
| **Sprechblase**         | weißer Kasten mit Tusche-Rand und Dreieck-Zipfel; Gedankenblase mit kleinen Kreisen                                                                                                                                               |
| **Explosionsstern**     | `clip-path` mit 16 Zacken, gelb, Text in Bangers                                                                                                                                                                                  |
| **Strahlenhintergrund** | `repeating-conic-gradient(rgb(239 62 54 / 0.35) 0 6deg, transparent 6deg 18deg)`                                                                                                                                                  |
| **Caption-Box**         | gelb, Tusche-Rand, Versalien, oben links im Panel                                                                                                                                                                                 |
| **Buttons**             | Tusche-Rand, Pop-Schatten; beim Hover Schatten kleiner und Button verschiebt sich um den Schattenversatz (wirkt „gedrückt“)                                                                                                       |
| **Karten**              | weiße Panels mit Pop-Schatten, leicht verdreht, Tagline blau, Monogramm auf Cyan                                                                                                                                                  |
| **Formularfelder**      | Tusche-Rand, Fokus mit blauem Pop-Schatten `4px 4px 0 #2E86DE`                                                                                                                                                                    |

## 6. Bewegung

- Der Explosionsstern wackelt leicht (`wobble`, 2.4 s, `rotate` + `scale`).
- Buttons und Karten springen beim Hover leicht.
- `prefers-reduced-motion`: Wackeln aus, Verdrehungen bleiben (statisch).

## 7. Mobil

Panels untereinander; Sprechblasen und Gedankenblasen verkleinern oder unter das Bild setzen; Verdrehungen reduzieren, damit nichts über den Rand ragt (`overflow-x: clip` am Abschnitt).

## 8. Dos und Don'ts

- **Do:** Ein Soundeffekt, eine Explosion pro Bildschirm – sonst wird es unruhig.
- **Do:** Fließtext ruhig auf weißen Panels.
- **Don't:** Bangers für Absätze oder Formulare.
- **Don't:** Echte Comicfiguren, Verlagslogos oder Heftcover nachbauen.
- **Don't:** Weißer kleiner Text auf dem hellen Rot.

## 9. Tokens als CSS

```css
:root {
    --bg: #fff6d8;
    --surface: #ffffff;
    --surface-2: #fff1b8;
    --text: #111111;
    --text-soft: #222222;
    --text-muted: #555555;
    --line: #111111;
    --accent: #ef3e36;
    --accent-strong: #c92a22;
    --accent-soft: #ffd23f;
    --accent-ink: #ffffff;
    --yellow: #ffd23f;
    --blue: #2e86de;
    --cyan: #48dbfb;
    --ink: 3px solid #111111;
    --pop: 6px 6px 0 #111111;
    --radius: 0.4rem;
    --shadow: var(--pop);
    --font-sans: 'Comic Neue', 'Comic Sans MS', 'Chalkboard SE', sans-serif;
    --font-display: 'Bangers', 'Impact', sans-serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/comic.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Baue den Hero als Comicseite mit drei Panels; die Sprechblase sagt **[Begrüßung]**, der Explosionsstern zeigt **[Kennzahl]**. Nur eigene Motive, keine bekannten Figuren.
