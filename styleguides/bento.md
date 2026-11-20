# Styleguide „Bento“ – Kachelraster in Petrol, hell und dunkel

> **Zweck:** Gestaltungsreferenz für Websites, Portfolios, Produktseiten und Dashboards, die viel Information auf einen Blick zeigen sollen. Der Stil ordnet Inhalte in Kacheln unterschiedlicher Größe wie in einer Bento-Box. Er ist ruhig, modern und technisch, ohne kalt zu wirken, und hat einen hellen und einen dunklen Modus.

## Kurzfassung

Ein ruhiger grau-grüner Grund, darauf weiße Kacheln mit großen Rundungen und weichem Schatten. Eine einzige Akzentfarbe in Petrol für Zahlen, Links und Aktionen und eine zweite, sehr helle Signalfarbe in Lime für genau eine Kachel. Dazu eine dunkle Kachel als Kontrastanker. Typografie in Geist, sehr gut lesbar, eng gesetzte Überschriften und kleine Mono-Labels. Der Inhalt steht im Raster, nicht in Fließtextblöcken.

## 1. Leitidee

- **Überblick vor Tiefe:** Die erste Bildschirmseite beantwortet die wichtigsten Fragen in Kacheln: wer, was, wo, wie erreichbar, was ist neu. Details folgen weiter unten oder auf Unterseiten.
- **Jede Kachel hat genau eine Aufgabe:** eine Zahl, einen Status, eine Liste, einen Link. Keine Kachel mischt zwei Themen.
- **Größe heißt Gewicht:** Wichtige Kacheln sind breiter oder höher, Nebeninformationen klein.
- **Ruhe durch Wiederholung:** Alle Kacheln teilen Radius, Rand, Schatten und Innenabstand. Abwechslung entsteht nur über Größe und über wenige farbige Kacheln.

**Passt gut für:** persönliche Portfolios, SaaS-Startseiten, Produkt-Feature-Übersichten, Team- und Status-Seiten, Dashboards. **Passt weniger für:** lange Erzähltexte, emotionale Kampagnen, sehr textlastige Behördenseiten.

## 2. Farben und Rollen

| Token           | Hell      | Dunkel    | Verwendung                                             |
|-----------------|-----------|-----------|--------------------------------------------------------|
| `bg`            | `#F3F5F4` | `#0C1413` | Seitengrund                                            |
| `surface`       | `#FFFFFF` | `#131E1C` | Kacheln, Karten                                        |
| `surface-2`     | `#E8EEEC` | `#1B2826` | Chips, Eingabefelder, abgesetzte Flächen               |
| `text`          | `#0F1716` | `#E7F2EF` | Haupttext                                              |
| `text-soft`     | `#34413F` | `#B8C8C4` | Fließtext                                              |
| `text-muted`    | `#63716E` | `#82948F` | Labels, Metadaten                                      |
| `line`          | `#DFE6E4` | `#22312E` | Kachelränder, Trennlinien                              |
| `accent`        | `#0F766E` | `#2DD4BF` | Zahlen, Links, Primärbutton                            |
| `accent-strong` | `#0B5E57` | `#5EEAD4` | Hover, gedrückter Zustand                              |
| `accent-soft`   | `#D5EFEB` | `#123631` | Badges, Hintergrund von Hinweisen                      |
| `accent-ink`    | `#FFFFFF` | `#04201C` | Text auf `accent`                                      |
| `tile-dark`     | `#0F1716` | `#E7F2EF` | Die eine Kontrastkachel (kehrt sich im Dunkelmodus um) |
| `lime`          | `#C7F25B` | `#C7F25B` | Genau eine Signalkachel, z. B. „Neu“                   |

**Rollen:** Petrol ist die einzige Aktionsfarbe. Lime ist ein Markenmoment und kein Button. Die dunkle Kachel trägt die wichtigste Statusinformation (z. B. „Aktuell“).

**Kontrast (WCAG):**

| Paar                      | Hell     | Dunkel   |
|---------------------------|----------|----------|
| `text` auf `bg`           | 16,6 : 1 | 16,3 : 1 |
| `text-muted` auf `bg`     | 4,7 : 1  | 5,8 : 1  |
| `accent` auf `bg`         | 5,0 : 1  | 10,0 : 1 |
| `accent-ink` auf `accent` | 5,5 : 1  | 9,2 : 1  |
| `text` auf `lime`         | 14,1 : 1 | –        |

## 3. Typografie

- **Schrift:** `Geist` (Variable) für alles, `Geist Mono` für Labels, Chips und Zahlen-Zusätze. Pakete: `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`. Lizenz: SIL OFL.
- **Display:** `clamp(2.2rem, 1.3rem + 3vw, 4.8rem)`, Gewicht 650–700, `letter-spacing: -0.045em`, Zeilenhöhe ~1.0.
- **Überschrift:** `clamp(1.8rem, 1.2rem + 2vw, 3.2rem)`, `letter-spacing: -0.04em`.
- **Lead:** `clamp(1.05rem, 1rem + 0.35vw, 1.3rem)`.
- **Kachel-Label:** Mono, `0.75rem`, Versalien, `letter-spacing: 0.06em`, Farbe `text-muted`.
- **Kachel-Zahl:** `clamp(2.2rem, 1.6rem + 2vw, 3.2rem)`, Gewicht 750, `letter-spacing: -0.04em`, Farbe `accent`, unten in der Kachel.

## 4. Layout und Raster

- **Spalten:** 2 Spalten mobil, 4 ab `48rem`, 6 ab `80rem`. `gap: 0.9rem`, `grid-auto-flow: dense`.
- **Spannweiten:** Standard 1 Spalte; breite Kacheln `span 2`; Abschlusszeilen so wählen, dass **jede Zeile aufgeht** (Summe der Spannen = Spaltenzahl). Leere Restzellen wirken wie ein Fehler. Notfalls die letzten Kacheln breakpoint-abhängig auf `span 3` setzen.
- **Kein fester Max-Width-Container:** Auf breiten Bildschirmen kommen Spalten hinzu, statt dass links und rechts Leerraum wächst. Seitenabstand `--shell-pad: clamp(1rem, 3vw, 2.5rem)`.
- **Abschnittsabstand:** `clamp(4rem, 8vw, 7rem)`.
- **Abschnitte als Kacheln:** Auch weiter unten dürfen Inhalte (Über, Leistungen, Kontakt) als große Kachel auf dem Grund liegen, statt randlos zu laufen.

## 5. Komponenten

### Kachel (Grundform)

```css
.tile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    min-height: 9rem;
    padding: 1.4rem;
    border: 1px solid var(--line);
    border-radius: 1.4rem;
    background: var(--surface);
    box-shadow: 0 1px 2px rgb(15 23 22 / 0.05), 0 12px 32px -20px rgb(15 23 22 / 0.3);
}
```

### Kacheltypen

| Typ            | Inhalt                          | Gestaltung                                                                                                            |
|----------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Intro          | Begrüßung, Titel, Lead, Buttons | groß, `span 2–4`, zwei Zeilen hoch                                                                                    |
| Porträt / Bild | Foto mit `object-fit: cover`    | Bild füllt die Kachel randlos                                                                                         |
| Status         | „Verfügbar ab …“, Live-Punkt    | grüner Punkt + kurzer Satz                                                                                            |
| Aktuell        | Rolle, Firma                    | `tile-dark`, Text hell, Inhalt unten ausgerichtet                                                                     |
| Zahl           | große Kennzahl + Label          | Zahl in `accent` am unteren Rand                                                                                      |
| Stack          | Werkzeuge als Chips             | Mono-Chips auf `surface-2`                                                                                            |
| Neu            | neuester Artikel, Release       | `lime`, Pfeil-Icon oben rechts, ganze Kachel ist Link                                                                 |
| Ort            | Stadt, Region                   | Punktraster als Hintergrund: `radial-gradient(var(--line) 1.2px, transparent 1.2px)` mit `background-size: 12px 12px` |
| Persönlich     | ein Satz über Hobbys            | Icon + Text, gedämpfte Farbe                                                                                          |
| Erreichbarkeit | Mail, Profile                   | Liste mit Icons, Hover in `accent`                                                                                    |

### Buttons und Links

- Primär: gefüllt `accent`, Text `accent-ink`, Radius `0.6rem` oder Pille.
- Sekundär: Rand `line`, Grund `surface`, Hover-Rand `accent`.
- Ganze Kacheln dürfen Links sein; dann `:hover` mit `border-color: var(--accent)` und `transform: translateY(-2px)`.

### Icons

Tabler Icons, Strichstärke 1.75–2, Größe 18–22 px, Farbe `accent`.

### Theme-Umschalter

Drei Zustände: System → Hell → Dunkel. Wahl in `localStorage` speichern, `data-theme` auf `<html>` setzen. Ein kleines Inline-Skript im `<head>` setzt das Attribut **vor dem ersten Zeichnen**, sonst blitzt der falsche Modus auf. Das Icon des Buttons wird per CSS aus dem aktuellen Zustand gewählt.

## 6. Bewegung

Sparsam: nur Hover-Anheben der Kacheln (0.25 s) und Farbwechsel. Keine Daueranimationen. `prefers-reduced-motion` schaltet `transform` ab.

## 7. Dos und Don'ts

- **Do:** Kacheln mit echten Inhalten füllen; jede Kachel muss ohne Kontext verständlich sein.
- **Do:** Zahlen kurz halten („25+“, „2017“), Label darunter erklärt sie.
- **Do:** Mobil die Reihenfolge prüfen: Intro zuerst, dann Status, dann Zahlen.
- **Don't:** Mehr als eine Lime-Kachel oder mehr als eine dunkle Kachel pro Raster.
- **Don't:** Lange Absätze in Kacheln. Ab drei Sätzen gehört der Text in einen eigenen Abschnitt.
- **Don't:** Lücken im Raster stehen lassen.

## 8. Tokens als CSS

```css
:root {
    --bg: #f3f5f4;
    --surface: #ffffff;
    --surface-2: #e8eeec;
    --text: #0f1716;
    --text-soft: #34413f;
    --text-muted: #63716e;
    --line: #dfe6e4;
    --accent: #0f766e;
    --accent-strong: #0b5e57;
    --accent-soft: #d5efeb;
    --accent-ink: #ffffff;
    --tile-dark: #0f1716;
    --tile-dark-text: #e7f2ef;
    --lime: #c7f25b;
    --radius: 1.4rem;
    --radius-small: 0.6rem;
    --font-sans: 'Geist Variable', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'Geist Mono Variable', ui-monospace, Menlo, monospace;
    color-scheme: light;
}

[data-theme=dark] {
    --bg: #0c1413;
    --surface: #131e1c;
    --surface-2: #1b2826;
    --text: #e7f2ef;
    --text-soft: #b8c8c4;
    --text-muted: #82948f;
    --line: #22312e;
    --accent: #2dd4bf;
    --accent-strong: #5eead4;
    --accent-soft: #123631;
    --accent-ink: #04201c;
    --tile-dark: #e7f2ef;
    --tile-dark-text: #0f1716;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/bento.md` als Gestaltungsreferenz. Das Projekt ist **[Website/Produkt]** für **[Zielgruppe]**. Baue oben eine Bento-Übersicht mit diesen Kacheln: **[Kacheln]**. Übernimm Raster, Kachelform, Typografie und Hell-/Dunkelmodus; ersetze Petrol bei Bedarf durch **[Markenfarbe]** und prüfe dann alle Kontraste neu.
