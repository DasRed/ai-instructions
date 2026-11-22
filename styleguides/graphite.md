# Styleguide „Graphite“ – Anthrazit, Outline-Wortmarke und orange Eckmarken

> **Zweck:** Gestaltungsreferenz für technische, präzise Dunkel-Seiten mit grauer Markenfarbe: Agenturen mit Entwicklungsschwerpunkt, Software-Dienstleister, Werkstätten und Handwerk mit Technikbezug, Produktseiten. Die Seite selbst ist ein mittleres Anthrazit (kein Schwarz); die Kontur-Version der Wortmarke wird zum großen Schlüsselbild, Orange zeichnet nur Linien und Eckmarken. Entstanden als Variante 10 der aspect42-Entwürfe (Anthrazit `#393838` und Orange `#EC6D01` aus dem Logo).

## Kurzfassung

Anthrazitgrund, helle Grotesk-Headline mit orangefarbener zweiter Zeile, daneben eine Illustration in einem Rahmen mit orangen Eckwinkeln. Unter dem Hero läuft die Outline-Wortmarke über die volle Breite und wird vom nächsten Abschnitt angeschnitten. Karten sind leere Rahmen mit Eckmarken oben links und unten rechts; beim Überfahren wachsen die Ecken zu einem vollen orangen Rahmen. Labels in Mono, Zähler in eckigen Klammern (`[02]`), Navigation mit Schrägstrich-Präfix (`/Leistungen`). Buttons eckig, mit Pfeil.

## 1. Leitidee

- **Die Marke als Fläche:** Das Logo-Anthrazit ist der Seitengrund – dunkel, aber nicht schwarz, dadurch weicher.
- **Linien zeichnen, nicht Flächen:** Orange nur als 1–2 px Linie, Ecke oder Rahmen. Für Text ein helleres Orange.
- **Präzision:** eckig, Mono-Details, Klammern und Schrägstriche wie in technischen Zeichnungen und Code.
- **Ein Schlüsselbild:** die Kontur der Wortmarke, riesig und angeschnitten.

**Passt gut für:** Entwickler-Agenturen, IT-Dienstleister, Produktseiten, Werkstätten, Ingenieurbüros mit dunklem Auftritt. **Passt weniger für:** warme, emotionale Marken, Gesundheit, Kinder.

## 2. Farben und Rollen

| Token          | Wert                     | Verwendung                                   |
|----------------|--------------------------|----------------------------------------------|
| `bg`           | `#393838`                | Seitengrund (Logo-Anthrazit)                 |
| `surface-alt`  | `#2F2E2E`                | Wechselabschnitte, Eingabefelder             |
| `surface-deep` | `#262525`                | Kennzahlen-Band, CTA, Footer                 |
| `text`         | `#F5F3F1`                | Schrift                                      |
| `text-soft`    | `#DCD7D3`                | Fließtext                                    |
| `text-muted`   | `#C9C4C0`                | Labels, Navigation                           |
| `line`         | `rgb(245 243 241 / .16)` | Rahmen                                       |
| `line-strong`  | `rgb(245 243 241 / .32)` | gestrichelte Linien, Chips                   |
| `accent-line`  | `#EC6D01`                | Eckmarken, Rahmen, Linien – **nie für Text** |
| `accent`       | `#F79A4D`                | Text-Akzente, Primärbutton                   |
| `accent-ink`   | `#262525`                | Schrift auf `accent`                         |
| `accent-soft`  | `rgb(236 109 1 / .16)`   | Hinweise, Labels                             |
| `accent-pink`  | `#FF7AA8`                | sparsamer Zweitakzent (Rollen im Team)       |

**Kontrast (WCAG):** `text` auf `bg` 10,6 : 1, `text-muted` 6,8 : 1, `accent` auf `bg` 5,4 : 1, `accent-ink` auf `accent` 7,1 : 1, `accent-pink` 4,8 : 1. **Achtung:** `accent-line` (`#EC6D01`) auf `bg` nur 3,8 : 1 – reicht für Linien und große Grafik, nicht für Text.

## 3. Typografie

- **Sans:** `Space Grotesk` (Variable) für Überschriften und Text, `@fontsource-variable/space-grotesk`.
- **Mono:** `JetBrains Mono` (Variable) für Labels, Navigation, Buttons, Zähler, Chips, `@fontsource-variable/jetbrains-mono`. Lizenzen: SIL OFL.
- **Größen:** Display `clamp(2.6rem, 5.4vw, 5.8rem)`, Gewicht 600, `letter-spacing: -0.035em`; Überschrift `clamp(2rem, 4vw, 3.6rem)`.
- **Labels:** Mono, Versalien, `letter-spacing: 0.1em`, 0.75rem; Zähler als `[01]` in `accent`.
- **Kennzahlen:** Mono, Gewicht 500, mit 2 px orangem Strich links.

## 4. Layout und Flächen

- **Rahmen statt Flächen:** Karten transparent, 1 px `line`. Eckmarken per `::before` mit vier Hintergrund-Verläufen (14 × 2 px und 2 × 14 px oben links und unten rechts).
- **Schlüsselbild:** Outline-Wortmarke mit `width: 100%`, Strich in Markenverlauf und Hellgrau, darunter negativer Abstand, damit der nächste Abschnitt sie anschneidet.
- **Ecken:** 0. **Schatten:** keine.
- **Abstände:** Seitenrand `clamp(1.25rem, 4.5vw, 5rem)`, Abschnittsabstand `clamp(4.5rem, 9vw, 9rem)`.
- **Kein fester Max-Width-Container.**

## 5. Komponenten

| Element          | Gestaltung                                                                                             |
|------------------|--------------------------------------------------------------------------------------------------------|
| **Header**       | Anthrazit, leicht transparent; Navigation in Mono mit orangem `/` vor jedem Punkt                      |
| **Hero**         | Text links (2. Zeile in `accent`), Illustration rechts im Eckmarken-Rahmen, darunter Outline-Wortmarke |
| **Karten**       | Rahmen mit Eckmarken; Hover: Ecken wachsen zu vollem Rahmen (`background-size` 250 ms)                 |
| **Listenpunkte** | Mono, Präfix `>` in `accent`, gestrichelte Linie darüber                                               |
| **Meta-Angaben** | in eckigen Klammern, Klammern in `accent-line`                                                         |
| **Ablauf**       | waagerechte Linie mit kleinen orangen Ticks über jedem Schritt                                         |
| **Buttons**      | eckig, Mono; Primär `accent` gefüllt, Sekundär 1 px `accent-line`; beide mit `→`                       |
| **404**          | Zahl nur als Kontur (`-webkit-text-stroke`) in `accent-line`                                           |

## 6. Bewegung

- Eckmarken wachsen beim Überfahren zu einem Rahmen. Sonst keine Animation.
- `prefers-reduced-motion`: ohne Übergang.

## 7. Dos und Don'ts

- **Do:** Orange als Linie, helleres Orange als Text – beide Rollen getrennt halten.
- **Do:** Die Outline-Wortmarke nur einmal pro Seite, groß und angeschnitten.
- **Don't:** Echtes Schwarz als Grund – der Stil lebt vom Logo-Anthrazit.
- **Don't:** Rundungen, Schatten oder Verläufe als Flächen.
- **Don't:** `-webkit-text-stroke` auf variablen Schriften mit überlappenden Konturen (Artefakte) – Konturschrift nur für Ziffern oder echte Outline-Grafiken.

## 8. Tokens als CSS

```css
:root {
    --bg: #393838;
    --surface: #333232;
    --surface-alt: #2f2e2e;
    --surface-deep: #262525;
    --text: #f5f3f1;
    --text-soft: #dcd7d3;
    --text-muted: #c9c4c0;
    --line: rgb(245 243 241 / 0.16);
    --line-strong: rgb(245 243 241 / 0.32);
    --accent: #f79a4d;
    --accent-strong: #ffb070;
    --accent-soft: rgb(236 109 1 / 0.16);
    --accent-ink: #262525;
    --accent-line: #ec6d01;
    --accent-pink: #ff7aa8;
    --radius: 0;
    --font-sans: 'Space Grotesk Variable', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `./styleguides/graphite.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Anthrazit **[Markengrau]** als Seitengrund, Karten als Rahmen mit Eckmarken in **[Linienfarbe]**, Mono-Labels in Klammern, die Kontur des Logos als großes angeschnittenes Schlüsselbild. Linienfarbe nie als Textfarbe.
