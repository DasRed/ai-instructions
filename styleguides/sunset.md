# Styleguide „Sunset“ – Große Verlaufsflächen und ruhige Karten

> **Zweck:** Gestaltungsreferenz für freundliche, moderne Seiten mit einer starken Verlaufsmarke: Agenturen, Startups, Apps, Dienstleister, Events. Der Stil setzt den Markenverlauf als große, körnige Fläche an den Anfang und das Ende jeder Seite; dazwischen bleibt alles weiß und ruhig. Entstanden als Variante 09 der aspect42-Entwürfe; die Werte nutzen den abgedunkelten aspect42-Verlauf (Magenta → Orange).

## Kurzfassung

Der Hero ist ein abgerundetes Panel mit etwas Abstand zum Rand, gefüllt mit einem körnigen Verlaufsbild in den Markenfarben – abgedunkelt, damit weiße Schrift überall AA erreicht. Darauf weiße Headline, weiße Buttons und eine leicht gedrehte Illustration auf heller Karte. Darunter weißer Grund mit weichen Karten (große Rundung, rosa getönter Schatten), Icon-Badges im Verlauf und ein Ablauf als Verlaufslinie mit Punkten. Abschluss und Footer bilden zusammen wieder ein Verlaufs-Panel. Schrift: Plus Jakarta Sans.

## 1. Leitidee

- **Klammer aus Farbe:** Verlauf nur oben und unten, als Panel. Die Mitte bleibt Arbeitsfläche.
- **Weich und freundlich:** große Radien, weiche Schatten, Pillen.
- **Lesbarkeit zuerst:** Den Verlauf so abdunkeln, dass Weiß auf jedem Punkt ≥ 4,5 : 1 hat.
- **Wenig Linien:** Gliederung über Flächen (Weiß, Blush) und Schatten statt über Rahmen.

**Passt gut für:** Agenturen, Startups, Apps, Kurse, Events, Dienstleister mit Verlaufsmarke. **Passt weniger für:** sehr seriöse Branchen (Recht, Medizin), Marken ohne Verlauf.

## 2. Farben und Rollen

| Token           | Wert                                                                     | Verwendung                                       |
|-----------------|--------------------------------------------------------------------------|--------------------------------------------------|
| `bg`            | `#FFFFFF`                                                                | Seitengrund, Karten                              |
| `surface-alt`   | `#FBF6F4`                                                                | Blush-Abschnitte, Eingabefelder                  |
| `text`          | `#1D1B1B`                                                                | Schrift                                          |
| `text-soft`     | `#45403E`                                                                | Fließtext                                        |
| `text-muted`    | `#6B6461`                                                                | Labels, Metadaten                                |
| `line`          | `#EFE7E4`                                                                | seltene Trennlinien                              |
| `accent`        | `#C4104F`                                                                | Primärbutton, aktive Navigation                  |
| `accent-strong` | `#9B1570`                                                                | Hover, Schrift auf weißen Buttons im Panel       |
| `accent-text`   | `#B0124A`                                                                | Links, Eyebrows auf Weiß                         |
| `accent-soft`   | `#FDE6EE`                                                                | aktive Navigationspille                          |
| Panel-Verlauf   | `#9B1570 → #C4104F → #C7381B → #B54D0A`                                  | Hero, Unterseiten-Intro, CTA (als Bild mit Korn) |
| `shadow`        | `0 2px 6px rgb(120 20 60 / .05), 0 24px 48px -24px rgb(120 20 60 / .22)` | Karten                                           |

**Kontrast (WCAG):** `text` auf Weiß 17,2 : 1, `text-muted` 5,8 : 1, `accent-text` 6,9 : 1, Weiß auf `accent` 5,9 : 1. Weiß auf den Panel-Stopps: `#9B1570` 7,7 : 1, `#C4104F` 5,9 : 1, `#C7381B` 5,2 : 1, `#B54D0A` 5,2 : 1. **Achtung:** Der Original-Orange-Stopp `#EC6D01` hat mit Weiß nur 3,1 : 1 – nicht unter Text verwenden.

## 3. Typografie

- **Schrift:** `Plus Jakarta Sans` (Variable) für alles, `@fontsource-variable/plus-jakarta-sans`. Lizenz: SIL OFL.
- **Display:** `clamp(2.6rem, 5.4vw, 5.6rem)`, Gewicht 750, `letter-spacing: -0.035em`, Zeilenhöhe ~1.0. Zweite Zeile in heller Tönung (`#F4DDE3` auf dem Panel).
- **Überschrift:** `clamp(1.9rem, 3.6vw, 3.2rem)`.
- **Kennzahlen:** Verlauf als Textfarbe (`background-clip: text`) – nur hier und auf der 404-Zahl.
- **Hinweis:** Die Schrift setzt Punkte mit großer Vorbreite; bei riesigen Titeln wirkt „Betriebe .“ gesperrt. Bei Bedarf `letter-spacing` am letzten Zeichen reduzieren oder auf den Punkt verzichten.

## 4. Layout und Flächen

- **Panels:** Hero, Unterseiten-Intro und CTA+Footer sind abgerundete Flächen (`border-radius: 28px`) mit `margin-inline: clamp(1rem, 3.5vw, 3.5rem)`; CTA oben rund, Footer unten rund, zusammen ein Block.
- **Verlaufsbild:** per Skript erzeugtes „Mesh“ aus 5–7 Farbpunkten, weichgezeichnet, mit Filmkorn, als WebP (~400–700 KB). Fallback-Hintergrundfarbe `#9B1570`.
- **Blush-Abschnitte:** `surface-alt` ebenfalls als abgerundete Fläche mit Seitenabstand.
- **Karten:** ohne Rahmen, Radius 20px, weicher Schatten; Hover hebt um 4 px.
- **Kein fester Max-Width-Container:** Raster bekommen mehr Spalten.

## 5. Komponenten

| Element          | Gestaltung                                                                                           |
|------------------|------------------------------------------------------------------------------------------------------|
| **Header**       | weiß, leicht transparent; Navigation als Pillen, aktive Seite `accent-soft` mit `accent-text`        |
| **Hero-Panel**   | Eyebrow, weiße Headline, Lead, weißer Primärbutton (Schrift `accent-strong`) und Outline-Button weiß |
| **Illustration** | auf weißer Karte (92 % Deckkraft) mit großem Schatten, `rotate(-1.5deg)`                             |
| **Kennzahlen**   | Pillenflächen in Blush, Zahl im Verlauf                                                              |
| **Icon-Badges**  | 14px-Rundung, Verlauf als Fläche, weißes Icon                                                        |
| **Ablauf**       | waagerechte Verlaufslinie (2px), darauf Punkte in `accent` mit weißem Ring                           |
| **Basispaket**   | 3px Verlaufsrahmen (`padding-box`/`border-box`-Trick)                                                |
| **Formular**     | Felder in Blush, Radius 12px; gewähltes Thema als `accent`-Pille                                     |

## 6. Bewegung

- Karten heben sich beim Überfahren (200 ms). Keine Daueranimation.
- `prefers-reduced-motion`: kein Anheben.

## 7. Dos und Don'ts

- **Do:** Verlauf immer abdunkeln und alle Stopps gegen Weiß prüfen.
- **Do:** Panels und weiße Flächen deutlich trennen – der Kontrast macht den Stil.
- **Don't:** Verlauf auf Karten, Buttons oder Fließtext im weißen Bereich.
- **Don't:** Mehr als zwei Verlaufs-Panels pro Seite (Intro oben, Abschluss unten).
- **Don't:** Harte Rahmen und eckige Kanten – das passt nicht zur Weichheit.

## 8. Tokens als CSS

```css
:root {
    --bg: #ffffff;
    --surface: #ffffff;
    --surface-alt: #fbf6f4;
    --text: #1d1b1b;
    --text-soft: #45403e;
    --text-muted: #6b6461;
    --line: #efe7e4;
    --accent: #c4104f;
    --accent-strong: #9b1570;
    --accent-soft: #fde6ee;
    --accent-ink: #ffffff;
    --accent-text: #b0124a;
    --brand-gradient: linear-gradient(90deg, #ab1e7e, #c5106c 27%, #e50058 53%, #e94222 81%, #ec6d01);
    --panel: #9b1570 url('/images/sunset-hero.webp') center / cover no-repeat;
    --radius: 20px;
    --radius-lg: 28px;
    --shadow: 0 2px 6px rgb(120 20 60 / 0.05), 0 24px 48px -24px rgb(120 20 60 / 0.22);
    --font-sans: 'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/sunset.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Hero und Abschluss als abgerundete Panels mit körnigem Verlaufsbild in **[Markenfarben]** (abgedunkelt, Weiß ≥ 4,5 : 1), dazwischen weiße, weiche Karten mit Verlaufs-Badges. Schrift Plus Jakarta Sans.
