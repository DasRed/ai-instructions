# Styleguide „Blueprint“ – Zeichenpapier, Blaupause und Bleistiftgelb

> **Zweck:** Gestaltungsreferenz für technische Dienstleister, Architektur- und Ingenieurbüros, Software-Architekten, Beratungen und Produktseiten, die Planung, Präzision und Handwerk zeigen wollen. Der Stil sieht aus wie ein Plansatz: helles Millimeterpapier, tiefblaue Blaupausen-Bögen, Maßlinien, Schriftfelder und gelbe Bleistiftmarkierungen.

## Kurzfassung

Hellblaues Rasterpapier als Seitengrund, darauf einzelne Abschnitte als tiefblaue Blaupausen mit feinem Doppelraster. Karten sehen aus wie Zeichnungsblätter mit Schriftfeld unten rechts. Eine SVG-Zeichnung im Hero baut sich wie von Hand gezeichnet auf. Typografie in IBM Plex Sans und Mono, Labels in Versalien mit weiter Laufweite. Ultramarin für Aktionen, Bleistiftgelb nur für Markierungen auf Blau.

## 1. Leitidee

- **Planen sichtbar machen:** Inhalte werden wie technische Zeichnungen präsentiert – mit Blattnummer, Maßstab, Datum, Revision.
- **Zwei Papiere:** Helles Zeichenpapier für Lesestrecken, dunkle Blaupausen für Identitätsflächen (Hero, Leistungsübersicht, Kontakt).
- **Präzision statt Dekoration:** Linien sind 1 px, Ecken fast eckig, keine Schatten. Ordnung entsteht durch Raster und Beschriftung.
- **Eine Zeichnung als Herzstück:** Ein schematisches Diagramm (Architektur, Grundriss, Ablauf) erklärt das Angebot im Hero.

**Passt gut für:** Architektur, Ingenieurwesen, Software-Architektur, Freelancer mit technischem Fokus, Handwerksbetriebe mit Planungsleistung. **Passt weniger für:** verspielte Marken, Mode, Gastronomie.

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                                 |
|-----------------|-----------|--------------------------------------------|
| `bg`            | `#F3F6FB` | Zeichenpapier                              |
| `surface`       | `#FFFFFF` | Karten, Zeichnungsblätter                  |
| `surface-2`     | `#E6EDF8` | Schriftfelder, abgesetzte Flächen          |
| `text`          | `#0D1B36` | Haupttext                                  |
| `text-soft`     | `#2C3D5F` | Fließtext                                  |
| `text-muted`    | `#5D6D8C` | Maßangaben, Metadaten                      |
| `line`          | `#C9D5EA` | Raster und Kartenränder                    |
| `accent`        | `#1D4ED8` | Ultramarin: Links, Primärbutton, Maßlinien |
| `accent-strong` | `#1E3FAE` | Hover                                      |
| `accent-soft`   | `#DBE6FF` | Badges                                     |
| `accent-ink`    | `#FFFFFF` | Text auf `accent`                          |
| `blue-1`        | `#0B2C6B` | Blaupause, dunkel                          |
| `blue-2`        | `#0E3A8A` | Blaupause, Lichthof im Verlauf             |
| `blue-text`     | `#E8F0FF` | Text auf Blaupause                         |
| `blue-soft`     | `#A9C3F2` | gedämpfter Text auf Blaupause              |
| `pencil`        | `#F5B700` | Bleistiftmarkierung, Hervorhebung auf Blau |

**Kontrast:** `text` auf `bg` 15,8 : 1, `text-muted` 4,8 : 1, `accent` auf `bg` 6,2 : 1, Weiß auf `accent` 6,7 : 1, `blue-text` auf `blue-1` 11,6 : 1, `blue-soft` auf `blue-1` 7,4 : 1, `pencil` auf `blue-1` 7,4 : 1. **Achtung:** `pencil` auf hellem Papier nur 1,7 : 1 – Gelb gehört ausschließlich auf die Blaupause oder dient als Unterstreichung.

## 3. Typografie

- **Sans:** `IBM Plex Sans` (Variable) für Überschriften und Text. Paket `@fontsource-variable/ibm-plex-sans`.
- **Mono:** `IBM Plex Mono` 400/600 für Labels, Blattnummern, Maße, Code. Pakete `@fontsource/ibm-plex-mono/400.css`, `/600.css`. Lizenz: SIL OFL.
- **Größen:** Display `clamp(2.4rem, 1.3rem + 3.6vw, 5.4rem)`, `letter-spacing: -0.03em`; Überschrift `clamp(1.9rem, 1.3rem + 2vw, 3.4rem)`; Lead `clamp(1.1rem, 1rem + 0.4vw, 1.4rem)`.
- **Labels:** Mono, Versalien, `letter-spacing: 0.14em`, klein (0.72–0.8rem), z. B. `BLATT 03 / LEISTUNGEN`.

## 4. Layout und Flächen

- **Papierraster:** `linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)` mit `background-size: 32px 32px`, sehr dezent.
- **Blaupause:** Doppelraster (grob 128 px, fein 16 px) in hellem Blau mit niedriger Deckkraft über einem radialen Verlauf `blue-2` → `blue-1`.
- **Ecken:** `--radius: 0.25rem`. Keine Schatten.
- **Seitenabstand:** `clamp(1.25rem, 4vw, 4rem)`; Abschnittsabstand `clamp(4.5rem, 9vw, 8rem)`.
- **Kein fester Max-Width-Container:** Raster bekommen auf breiten Bildschirmen mehr Spalten.

## 5. Komponenten

| Element                       | Gestaltung                                                                                                                                                                                                    |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**                      | Blaupause; links Kennung (`PROJ-001 · REV A`), Titel, Lead, Buttons, kleines Porträt mit Maßlinien; rechts eine SVG-Systemzeichnung (Boxen, Pfeile, Beschriftungen), die sich per `stroke-dashoffset` aufbaut |
| **Abschnittsüberschrift**     | Mono-Label mit Blattnummer über der Überschrift, darunter eine feine Linie mit Maßpfeilen                                                                                                                     |
| **Karte als Zeichnungsblatt** | weißes Blatt mit 1 px Rand; unten ein Schriftfeld (Tabelle mit Titel, Maßstab, Datum, Kategorie) auf `surface-2`; Hover-Rand `accent`                                                                         |
| **Bleistiftmarkierung**       | 2 px Rahmen oder Unterstreichung in `pencil` um die eine wichtigste Aussage auf Blau                                                                                                                          |
| **Buttons**                   | Primär ultramarin gefüllt, eckig; Sekundär Outline 1 px `accent`; auf Blaupause invertiert (heller Grund, dunkler Text)                                                                                       |
| **Gestrichelte Linien**       | `border-style: dashed` für Hilfslinien, Platzhalter, Verbindungen in Listen                                                                                                                                   |

## 6. Bewegung

- Die Hero-Zeichnung zeichnet sich nacheinander: Rahmen 1.6 s, Verbindungen 1.2 s mit 0.9 s Verzögerung, Beschriftungen 1 s mit 1.8 s Verzögerung (`@keyframes draw` über `stroke-dashoffset`).
- Sonst keine Daueranimation. `prefers-reduced-motion`: Zeichnung sofort vollständig.

## 7. Dos und Don'ts

- **Do:** Echte Information in die Zeichnung legen (z. B. wie die Bausteine eines Angebots zusammenhängen).
- **Do:** Beschriftungen kurz und technisch halten.
- **Don't:** Gelb als Textfarbe auf hellem Grund.
- **Don't:** Weiche Schatten, große Rundungen oder Verläufe auf hellem Papier.
- **Don't:** Das Raster so kräftig machen, dass es mit Text konkurriert.

## 8. Tokens als CSS

```css
:root {
    --bg: #f3f6fb;
    --surface: #ffffff;
    --surface-2: #e6edf8;
    --text: #0d1b36;
    --text-soft: #2c3d5f;
    --text-muted: #5d6d8c;
    --line: #c9d5ea;
    --accent: #1d4ed8;
    --accent-strong: #1e3fae;
    --accent-soft: #dbe6ff;
    --accent-ink: #ffffff;
    --pencil: #f5b700;
    --blue-1: #0b2c6b;
    --blue-2: #0e3a8a;
    --blue-line: rgb(173 204 255 / 0.22);
    --blue-text: #e8f0ff;
    --blue-soft: #a9c3f2;
    --radius: 0.25rem;
    --shadow: none;
    --font-sans: 'IBM Plex Sans Variable', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/blueprint.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Setze Hero und Leistungsübersicht als Blaupause um, den Rest auf Zeichenpapier. Die Hero-Zeichnung zeigt **[System/Ablauf/Grundriss]**. Karten als Zeichnungsblätter mit Schriftfeld.
