# Styleguide „Contour“ – Alles in Linien: Topografie und Verlaufsränder

> **Zweck:** Gestaltungsreferenz für helle, leichte und markante Seiten, deren Logo eine Kontur- oder Outline-Version hat oder deren Marke einen Verlauf trägt: Agenturen, Designstudios, Software, Beratung, Architektur. Alles wird mit Linien gezeichnet: topografische Höhenlinien, 1 px Verlaufsränder an Karten und Buttons, Ziffern als Kontur. Farbe ist nie Fläche, nur Linie. Entstanden als Variante 12 der aspect42-Entwürfe, abgeleitet von Philipps Outline-Entwurf des Logos.

## Kurzfassung

Weißer Grund, eine dünne Verlaufslinie unter dem Header. Im Hero rechts ein Feld aus topografischen Höhenlinien im Markenverlauf, die um das runde Logo-Zeichen kreisen und zum Rand ausblenden. Links die Headline in Unbounded, die zweite Zeile im Markenverlauf. Karten mit hellgrauem 1-px-Rand, der beim Überfahren zum Verlaufsrand wird. Kennzahlen und Schrittnummern als Konturziffern. Primärbutton anthrazit gefüllt, Sekundärbutton mit Verlaufsrand. Fließtext in Manrope.

## 1. Leitidee

- **Linie statt Fläche:** Markenfarbe erscheint nur als Strich – Höhenlinien, Ränder, Unterstreichung.
- **Leichtigkeit:** viel Weiß, dünne Linien, keine Schatten.
- **Geometrie aus dem Logo:** Unbounded greift die runden, breiten Formen der Wortmarke auf.
- **Ein Bild:** die Höhenlinien im Hero; sonst nur dezente Illustrationen.

**Passt gut für:** Agenturen, Designstudios, Software, Beratung, Architektur, Marken mit Verlauf oder Outline-Logo. **Passt weniger für:** sehr verspielte Marken, dunkle Auftritte, Seiten mit viel Fotografie.

## 2. Farben und Rollen

| Token         | Wert                | Verwendung                                         |
|---------------|---------------------|----------------------------------------------------|
| `bg`          | `#FFFFFF`           | Seitengrund, Karten                                |
| `surface-alt` | `#FAF8F8`           | Wechselabschnitte                                  |
| `text`        | `#232222`           | Schrift                                            |
| `text-soft`   | `#4A4747`           | Fließtext                                          |
| `text-muted`  | `#6B6767`           | Metadaten                                          |
| `line`        | `#EBE7E6`           | feine Linien                                       |
| `line-strong` | `#D6D0CE`           | Kartenränder im Ruhezustand                        |
| `ink`         | `#393838`           | Primärbutton, CTA-Fläche (Logo-Anthrazit)          |
| `accent-text` | `#B0124A`           | Eyebrows, Links, Icons                             |
| Markenverlauf | `#AB1E7E → #EC6D01` | Höhenlinien, Ränder (Hover), zweite Headline-Zeile |

**Kontrast (WCAG):** `text` auf Weiß 15,9 : 1, `text-muted` 5,6 : 1, `accent-text` 6,9 : 1, Weiß auf `ink` 11,7 : 1. Die Verlaufszeile der Headline ist großer Text; ihr hellster Stopp (Orange) hat auf Weiß 3,1 : 1 und erfüllt damit AA nur für große Schrift – nie für Fließtext.

## 3. Typografie

- **Display:** `Unbounded` (Variable), Gewicht 500, `letter-spacing: -0.03em`, Zeilenhöhe 1.08, `@fontsource-variable/unbounded`.
- **Text:** `Manrope` (Variable), `@fontsource-variable/manrope`. Lizenzen: SIL OFL.
- **Größen:** Hero `clamp(2.4rem, 4.8vw, 5rem)`, Überschrift `clamp(1.8rem, 3.2vw, 3rem)`, Kartentitel 1.2rem (Unbounded läuft breit).
- **Konturziffern:** `color: transparent; -webkit-text-stroke: 1–1.2px` – nur für Ziffern; bei Buchstaben einer variablen Schrift erzeugt die Kontur Artefakte an überlappenden Formen, daher die zweite Headline-Zeile als Verlauf statt als Kontur.

## 4. Layout und Flächen

- **Höhenlinien:** 14–16 verzerrte Ringe (Sinus-Wobble, deterministisch berechnet) um das Logo-Zeichen als SVG, Strich im Markenverlauf, jede vierte Linie 2 px, Deckkraft nach außen abnehmend; `mask-image: radial-gradient(closest-side, #000 70%, transparent)`.
- **Verlaufsrand:** `border: 1px solid transparent; background: linear-gradient(#fff, #fff) padding-box, <verlauf> border-box;`.
- **Ecken:** Karten 18px, Hero-Elemente 26px, Buttons Pille. **Schatten:** keine.
- **Header:** 1 px Linie im Markenverlauf (60 % Deckkraft) statt grauer Linie.
- **Kein fester Max-Width-Container.**

## 5. Komponenten

| Element        | Gestaltung                                                              |
|----------------|-------------------------------------------------------------------------|
| **Hero**       | Text links (2. Zeile Verlauf), Höhenlinien rechts                       |
| **Karten**     | Rand `line-strong`; Hover: Rand wird zum Verlauf (250 ms), kein Anheben |
| **Kennzahlen** | Karten mit Konturziffer                                                 |
| **Ablauf**     | Karten nebeneinander, Schrittnummer als Konturziffer in `accent-text`   |
| **Basispaket** | 1,5 px Verlaufsrand dauerhaft                                           |
| **Buttons**    | Primär `ink` gefüllt, Sekundär 1,5 px Verlaufsrand auf Weiß             |
| **CTA**        | Anthrazit-Fläche mit großen, sehr feinen Kreislinien oben rechts        |
| **Porträts**   | im Rahmen mit Innenabstand 0.5rem, Radius 26px                          |

## 6. Bewegung

- Randwechsel beim Überfahren. Keine Daueranimation, die Höhenlinien stehen.

## 7. Dos und Don'ts

- **Do:** Farbe nur als Linie – sobald eine Fläche farbig wird, verliert der Stil seine Leichtigkeit.
- **Do:** Höhenlinien mit echtem Bezug (Logo-Zeichen, Standort, Produkt) im Zentrum.
- **Don't:** Konturschrift für ganze Wörter einer variablen Schrift.
- **Don't:** Schatten oder gefüllte Verlaufsflächen.
- **Don't:** Verlauf als Fließtextfarbe.

## 8. Tokens als CSS

```css
:root {
    --bg: #ffffff;
    --surface: #ffffff;
    --surface-alt: #faf8f8;
    --text: #232222;
    --text-soft: #4a4747;
    --text-muted: #6b6767;
    --line: #ebe7e6;
    --line-strong: #d6d0ce;
    --accent: #393838;
    --accent-ink: #ffffff;
    --accent-text: #b0124a;
    --brand-gradient: linear-gradient(90deg, #ab1e7e, #c5106c 27%, #e50058 53%, #e94222 81%, #ec6d01);
    --radius: 18px;
    --radius-lg: 26px;
    --font-display: 'Unbounded Variable', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Manrope Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/contour.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Alles in Linien auf Weiß: topografische Höhenlinien im **[Markenverlauf]** um **[Logo-Zeichen]**, 1-px-Verlaufsränder an Karten (Hover) und Sekundärbuttons, Konturziffern, Primärbutton in **[dunkle Markenfarbe]**. Unbounded und Manrope.
