# Styleguide „Studio“ – Schweizer Raster, Schwarz und Signalorange

> **Zweck:** Gestaltungsreferenz für Agenturen, Studios, Freelancer und Beratungen, die selbstbewusst und strukturiert auftreten wollen. Der Stil folgt dem Schweizer Grafikdesign: strenges Raster, große Typografie, schwarze Linien, viel Ordnung und eine einzige Signalfarbe. Seine Stärke sind nummerierte Leistungszeilen und ein klarer Fahrplan der Zusammenarbeit.

## Kurzfassung

Gebrochenes Weiß, fast schwarze Schrift und Linien, Signalorange für Aktionen und Hover. Riesige Versal-Überschriften in einer breiten Grotesk (Archivo Expanded), Fließtext in Inter. Leistungen als nummerierte Zeilen 01–07, die beim Überfahren reagieren. „So arbeiten wir zusammen“ als Fahrplan in vier Schritten. Kunden als große typografische Liste. Ein laufendes Band mit dem Werkzeugkasten. Keine Rundungen, keine Schatten.

## 1. Leitidee

- **Struktur ist das Design:** Nummern, Linien und Spalten tragen die Gestaltung. Bilder sind Nebensache.
- **Zeilen statt Karten:** Listen von Leistungen, Kunden, Stationen als volle Zeilen mit Nummer, Titel, Beschreibung – leicht zu scannen.
- **Ein Fahrplan:** Der Ablauf der Zusammenarbeit wird in wenigen nummerierten Schritten gezeigt; das schafft Vertrauen.
- **Eine Signalfarbe:** Orange markiert Aktion und Zustand, nie Fläche um ihrer selbst willen.

**Passt gut für:** Agenturen, Studios, Freelancer, Beratungen, Architektur, Produktdesign. **Passt weniger für:** verspielte oder sehr emotionale Marken.

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                                |
|-----------------|-----------|-------------------------------------------|
| `bg`            | `#F6F5F1` | Seitengrund                               |
| `surface`       | `#FFFFFF` | Formular, Karten                          |
| `surface-2`     | `#ECEBE5` | abgesetzte Abschnitte                     |
| `text`          | `#111111` | Schrift                                   |
| `text-soft`     | `#333330` | Fließtext                                 |
| `text-muted`    | `#6D6C66` | Nummern-Zusätze, Metadaten                |
| `line`          | `#111111` | Raster- und Zeilenlinien (kräftig)        |
| `line-soft`     | `#D8D6CF` | feine Hilfslinien                         |
| `accent`        | `#FF4F00` | Signalorange: Primärbutton, Hover, Marker |
| `accent-strong` | `#D94300` | Hover auf Orange                          |
| `accent-soft`   | `#FFE1D3` | Hervorhebungen                            |
| `accent-ink`    | `#111111` | **schwarzer** Text auf Orange             |

**Kontrast:** `text` auf `bg` 17,3 : 1, `text-muted` 4,8 : 1, Schwarz auf `accent` 5,7 : 1. **Achtung:** Orange als Textfarbe auf Hellgrund hat nur 3,0 : 1 – nur für sehr große Schrift (Display) oder dekorative Elemente (Nummern als Grafik, Pfeile, Unterstreichungen). Buttons immer mit schwarzer Schrift auf Orange, nie weiß.

## 3. Typografie

- **Display:** `Archivo` (Variable mit Breitenachse, `@fontsource-variable/archivo/wdth.css`), `font-stretch: 125%`, Gewicht 900, Versalien, `letter-spacing: -0.035em`. Zwischenüberschriften `font-stretch: 112%`, Gewicht 800.
- **Text:** `Inter` (Variable). Lizenzen: SIL OFL.
- **Größen:** Display `clamp(2.2rem, 0.6rem + 5.6vw, 9rem)`, Überschrift `clamp(2.2rem, 1rem + 4vw, 6rem)`, Lead `clamp(1.1rem, 1rem + 0.45vw, 1.45rem)`.
- **Vorsicht mit der Wucht:** Extrem breite, schwarze Versalien wirken schnell schwer und laut. Für ruhigere Projekte: `font-stretch: 100–112%`, Gewicht 700–800, gemischte Schreibung – die Struktur (Zeilen, Nummern, Fahrplan) trägt den Stil auch ohne Extremschrift.
- **Lange Wörter:** Bei Deutsch Silbentrennung auf Mobilgeräten (`hyphens: auto` nur unter ~40rem) und `overflow-x: clip` am Hero, damit riesige Wörter nicht aus dem Bild laufen.

## 4. Layout und Raster

- **Spalten:** 12er-Raster; Zeilen typischerweise Nummer (1) · Titel (5) · Beschreibung (6).
- **Linien:** 1 px `line` zwischen Zeilen, 2 px über Abschnittsköpfen.
- **Seitenrand:** `clamp(1rem, 3vw, 3rem)`; Abschnittsabstand `clamp(4rem, 9vw, 9rem)`.
- **Ecken:** `0`. **Schatten:** keine.
- **Kein fester Max-Width-Container:** Das Raster wächst mit.

## 5. Komponenten

| Element                   | Gestaltung                                                                                                                                                                                                            |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Header**                | Name links, Navigation, rechts ein orangener CTA-Button („Projekt anfragen“)                                                                                                                                          |
| **Hero**                  | riesiger Claim über die volle Breite; darunter eine Zeile mit drei Spalten (Index-Nummer, kurzer Text + Button, Porträt); darunter ein laufendes Band (Marquee) mit Werkzeugen oder Leistungen, `40s linear infinite` |
| **Abschnittskopf**        | links Nummer und Label in Versalien, rechts große Überschrift; 2 px Linie darüber                                                                                                                                     |
| **Leistungszeilen 01–07** | volle Breite, Nummer in Mono/Orange, Titel groß, Beschreibung rechts; Hover: Hintergrund `accent` oder Titel rückt ein und wird orange, Pfeil erscheint                                                               |
| **Fahrplan**              | „So arbeiten wir zusammen“: 4 Schritte nebeneinander (mobil untereinander), jede Spalte mit großer Nummer, Titel, zwei Sätzen; verbunden durch eine Linie                                                             |
| **Kundenliste**           | große typografische Zeilen: Name (Display), Branche, Jahr, Pfeil; Hover orange                                                                                                                                        |
| **CTA-Block**             | schwarze Fläche, riesige weiße Frage („Lass uns reden?“), orangener Button                                                                                                                                            |
| **Karten**                | weiß, 1 px schwarzer Rand, keine Rundung                                                                                                                                                                              |

## 6. Bewegung

- Marquee-Band, Zeilen-Hover (Einrücken, Farbe), Pfeile schieben sich nach rechts.
- `prefers-reduced-motion`: Marquee steht still.

## 7. Dos und Don'ts

- **Do:** Leistungen und Ablauf nummerieren – das ist der Kern des Stils.
- **Do:** Viel Luft zwischen den Zeilen; Linien statt Kästen.
- **Don't:** Weißer Text auf Orange.
- **Don't:** Mehr als eine Extremschrift-Überschrift pro Bildschirm.
- **Don't:** Rundungen, Schatten, Verläufe.

## 8. Tokens als CSS

```css
:root {
    --bg: #f6f5f1;
    --surface: #ffffff;
    --surface-2: #ecebe5;
    --text: #111111;
    --text-soft: #333330;
    --text-muted: #6d6c66;
    --line: #111111;
    --line-soft: #d8d6cf;
    --accent: #ff4f00;
    --accent-strong: #d94300;
    --accent-soft: #ffe1d3;
    --accent-ink: #111111;
    --radius: 0;
    --shadow: none;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Archivo Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/studio.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Leistungen als nummerierte Zeilen: **[Leistungen]**. Fahrplan der Zusammenarbeit in **[Schritte]**. Kunden als typografische Liste. Signalfarbe **[Farbe]** nur für Aktion und Hover; Display-Schrift **[breit/normal]**.
