# Styleguide „Retro 90s“ – Homepage von 1996

> **Zweck:** Gestaltungsreferenz für nostalgische, absichtlich altmodische Seiten: Jubiläen, Retro-Events, LAN-Partys, Spiele- und Musikprojekte, Easter-Egg-Unterseiten, Aprilscherze, persönliche Spaßseiten. Der Stil imitiert eine Homepage aus der Mitte der Neunziger: Sternenhimmel, Planeten als Navigation, Chrom-Schrift, graue 3D-Knöpfe, unterstrichene blaue Links, Laufschrift und Besucherzähler – aber mit modernem, sauberem Code darunter.

## Kurzfassung

Schwarzer Weltraum mit gekachelten Sternen. In der Mitte der Name in Chrom-Lettern, ringsum kreisen Planeten, jeder ist ein Link zu einem Abschnitt. Darunter eine Laufschrift, ein blinkendes „NEU!“, ein Baustellenschild und ein Besucherzähler. Text in Times New Roman, Überschriften in Arial Black, Knöpfe im grauen Windows-95-Look mit abgeschrägten Kanten. **Keine Webfonts** – nur Systemschriften, wie damals.

## 1. Leitidee

- **Liebevolle Parodie, solide Technik:** Das Aussehen ist 1996, das Fundament ist modern: semantisches HTML, responsiv, barrierearm, schnell.
- **Navigation als Spielzeug:** Die Abschnitte sind Planeten um ein Zentrum. Zusätzlich gibt es eine normale Textnavigation (für Tastatur, Screenreader und Mobilgeräte).
- **Typische Zeitzeugen dosiert:** Laufschrift, „NEU!“, Baustelle, Zähler, „Optimiert für 800 × 600“. Jeweils einmal.
- **Inspiration, keine Kopie:** An Kinofilm-Homepages der 90er angelehnt, aber ohne deren Figuren, Logos oder Grafiken.

**Passt gut für:** Retro-Events, Jubiläen, Spaß- und Fanseiten, Unterseiten mit Augenzwinkern. **Passt nicht für:** ernsthafte Akquise, Behörden, Shops.

## 2. Farben und Rollen

| Token                    | Wert                  | Verwendung                                                 |
|--------------------------|-----------------------|------------------------------------------------------------|
| `bg`                     | `#000010`             | Weltraum (mit Sternen-Kachel)                              |
| `surface`                | `#C0C0C0`             | 3D-Knöpfe, Fenster, Boxen                                  |
| `surface-2`              | `#DFDFDF`             | helle Fensterflächen                                       |
| `win-light` / `win-dark` | `#FFFFFF` / `#404040` | abgeschrägte Kanten (oben links hell, unten rechts dunkel) |
| `text`                   | `#FFFFFF`             | Text auf Schwarz                                           |
| `text-soft`              | `#E6E6FF`             | Fließtext                                                  |
| `text-muted`             | `#B8B8FF`             | Metadaten                                                  |
| `line`                   | `#808080`             | Ränder, Trennlinien (`ridge`)                              |
| `accent`                 | `#FFFF00`             | Gelb: Überschriften-Akzente, „NEU!“, Laufschrift           |
| `accent-soft`            | `#000080`             | Navy-Flächen (Titelleisten)                                |
| `link`                   | `#66CCFF`             | Links (unterstrichen)                                      |
| `visited`                | `#CC99FF`             | besuchte Links                                             |
| `success`                | `#00FF00`             | Zähler, Status                                             |

**Kontrast:** Weiß auf `bg` 20,8 : 1, `accent` auf `bg` 19,4 : 1, `link` 11,6 : 1, `visited` 9,5 : 1, Schwarz auf `surface` 11,5 : 1. **Achtung:** Weißer Text auf den grauen Knöpfen hat nur 1,8 : 1 – auf `surface` immer schwarzer Text.

## 3. Typografie

- **Text:** `'Times New Roman', Times, 'Liberation Serif', serif`.
- **Überschriften:** `'Arial Black', Arial, 'Liberation Sans', sans-serif`, Gewicht 900.
- **Spaß-Akzent:** `'Comic Sans MS', 'Comic Neue', 'Chalkboard SE', cursive` – höchstens für einen Hinweis.
- **Code/Zähler:** `'Courier New', Courier, monospace`.
- **Chrom-Lettern:** `background: linear-gradient(180deg, #fff 0%, #9fd3ff 30%, #2a5bd7 50%, #fff 52%, #f6b73c 75%, #c0392b 100%)` mit `background-clip: text`, dazu `text-shadow: 3px 3px 0 #ff00ff` (Magenta-Versatz) oder `2px 2px 0 #000080`.
- **Größen:** Display `clamp(2.4rem, 1.4rem + 4vw, 6rem)`, Überschrift `clamp(1.8rem, 1.3rem + 1.8vw, 3rem)`.
- Links immer unterstrichen.

## 4. Layout und Flächen

- **Sterne:** sechs bis acht `radial-gradient`-Punkte (1–2 px, weiß, hellgelb, hellblau) in einer `200px × 200px`-Kachel.
- **Planeten-Hero:** Zentrum mit Titel und Porträt; Planeten auf einer **Ellipse** verteilt (Position per `sin`/`cos` berechnen, Startwinkel um ca. −60° versetzt, damit nichts das Zentrum überdeckt), jeder Planet ein runder Verlauf mit Beschriftung darunter.
- **3D-Boxen:** `surface`-Grund, `border` 2 px mit `win-light` oben/links und `win-dark` unten/rechts; gedrückt invertiert.
- **Trennlinien:** `border-bottom: 2px ridge var(--line)` statt moderner Haarlinien.
- **Ecken:** `0`. **Schatten:** keine.
- **Mobil:** Planeten werden zu einer zweispaltigen Liste runder Buttons; der Rest stapelt sich.

## 5. Komponenten

| Element              | Gestaltung                                                                                 |
|----------------------|--------------------------------------------------------------------------------------------|
| **Begrüßung**        | „Willkommen auf meiner Homepage!“ in Gelb über dem Titel                                   |
| **Laufschrift**      | Navy-Leiste mit gelbem Text, CSS-Animation `ticker 28s linear infinite` (kein `<marquee>`) |
| **NEU!-Sticker**     | rot/gelb, blinkt (`blink 1s steps(1) infinite`)                                            |
| **Baustellenschild** | gelb-schwarz gestreift, „Under Construction“                                               |
| **Besucherzähler**   | schwarze Ziffernfelder mit grüner Mono-Schrift                                             |
| **Buttons**          | graue 3D-Knöpfe mit schwarzem Text                                                         |
| **Fenster-Karten**   | grau mit Navy-Titelleiste (weiße Schrift), Inhalt auf `surface-2` in Schwarz               |
| **Footer**           | „Best viewed with …“, Webring-Pfeile, „Letzte Änderung: …“                                 |

## 6. Bewegung

- Laufschrift und Blinken – beides **muss** mit `prefers-reduced-motion: reduce` stoppen (Laufschrift statisch, Blinken aus).
- Planeten können beim Hover leicht wachsen.

## 7. Dos und Don'ts

- **Do:** Alle Zeitzeugen einmal und mit Liebe zum Detail.
- **Do:** Echte, gut lesbare Inhalte in den Fenstern; die Parodie ist der Rahmen.
- **Don't:** Webfonts laden – Systemschriften gehören zum Look und halten die Seite schnell.
- **Don't:** Echte `<marquee>`/`<blink>`-Tags oder Tabellenlayout.
- **Don't:** Grafiken, Figuren oder Logos fremder Filme und Marken.

## 8. Tokens als CSS

```css
:root {
    --bg: #000010;
    --surface: #c0c0c0;
    --surface-2: #dfdfdf;
    --text: #ffffff;
    --text-soft: #e6e6ff;
    --text-muted: #b8b8ff;
    --line: #808080;
    --accent: #ffff00;
    --accent-soft: #000080;
    --accent-ink: #000000;
    --link: #66ccff;
    --visited: #cc99ff;
    --win-dark: #404040;
    --win-light: #ffffff;
    --success: #00ff00;
    --danger: #ff3333;
    --radius: 0;
    --shadow: none;
    --font-sans: 'Times New Roman', Times, 'Liberation Serif', serif;
    --font-display: 'Arial Black', 'Arial', 'Liberation Sans', sans-serif;
    --font-comic: 'Comic Sans MS', 'Comic Neue', 'Chalkboard SE', cursive;
    --font-mono: 'Courier New', Courier, monospace;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `./styleguides/retro90s.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Anlass]**. Startseite als 90er-Homepage: Chrom-Titel **[Name]**, Planeten-Navigation für **[Abschnitte]**, Laufschrift mit **[Text]**. Systemschriften, moderner und barrierearmer Code darunter.
