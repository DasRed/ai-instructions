# Styleguide „Noir“ – Tiefes Schwarz, Bodoni und Lichtfelder

> **Zweck:** Gestaltungsreferenz für edle, ruhige Dunkel-Seiten: Agenturen und Studios mit Anspruch, Beratungen, Architektur, Mode, Gastronomie im gehobenen Segment, Kultur. Der Stil wirkt wie ein Hochglanzmagazin bei Nacht: tiefes Schwarz, große kontrastreiche Serifen, Haarlinien und weiche Lichtfelder in den Markenfarben. Entstanden als Variante 08 der aspect42-Entwürfe; die Werte unten nutzen die aspect42-Farben (Magenta → Orange) und lassen sich durch eine andere Markenfarbe ersetzen.

## Kurzfassung

Fast schwarzer Grund, darauf eine zentrierte, sehr große Bodoni-Überschrift, deren zweite Zeile kursiv steht. Hinter dem Hero liegt ein weiches, körniges Lichtfeld in den Markenfarben (generiertes Bild, kein CSS-Verlauf über Text). Eine kurze Haarlinie im Markenverlauf trennt Titel und Lead. Inhalte stehen in Haarlinien-Rahmen ohne Füllung, die beim Überfahren leicht in der Akzentfarbe glühen. Abschnitte tragen römische Ziffern in kursiver Serif. Fließtext in Manrope, Navigation und Buttons in Versalien mit weiter Laufweite.

## 1. Leitidee

- **Ruhe durch Dunkelheit:** Viel Schwarz und viel Abstand. Farbe erscheint als Licht, nicht als Fläche.
- **Typografie trägt:** Die Serif ist das Bild. Groß, zentriert, mit kursiver Gegenstimme.
- **Haarlinien statt Kästen:** 1 px in 12 % Weiß gliedert alles; Karten haben keine Füllung.
- **Licht als Markenmoment:** Genau zwei Lichtfelder pro Seite – oben im Hero und unten im Abschluss.

**Passt gut für:** Agenturen, Studios, Architektur, Beratung, hochwertige Produkte, Kultur und Events am Abend. **Passt weniger für:** Behörden, lange Arbeitsflächen (Formulare, Tabellen), Zielgruppen mit Sehschwäche bei sehr dünnen Serifen.

## 2. Farben und Rollen

| Token         | Wert                     | Verwendung                                            |
|---------------|--------------------------|-------------------------------------------------------|
| `bg`          | `#0B0A0B`                | Seitengrund                                           |
| `surface`     | `#121012`                | abgesetzte Flächen                                    |
| `surface-alt` | `#0F0D0F`                | Wechselabschnitte (mit Haarlinie oben und unten)      |
| `text`        | `#F4EFEA`                | Schrift, Überschriften                                |
| `text-soft`   | `#CFC7C0`                | Fließtext                                             |
| `text-muted`  | `#A39B94`                | Labels, Metadaten, Navigation                         |
| `line`        | `rgb(244 239 234 / .12)` | Haarlinien, Kartenränder                              |
| `line-strong` | `rgb(244 239 234 / .28)` | Formularlinien, sekundäre Buttons                     |
| `accent`      | `#E0338F`                | Primärbutton (dunkle Schrift), Glühen                 |
| `accent-text` | `#F06BA0`                | Links, Ziffern, Rollen auf Schwarz                    |
| `accent-ink`  | `#0B0A0B`                | Schrift auf `accent`                                  |
| Markenverlauf | `#AB1E7E → #EC6D01`      | nur Haarlinie unter dem Titel und in den Lichtfeldern |

**Kontrast (WCAG):** `text` auf `bg` 17,3 : 1, `text-soft` 11,8 : 1, `text-muted` 7,2 : 1, `accent-text` auf `bg` 6,9 : 1, `accent-ink` auf `accent` 4,7 : 1. Helle Schrift auf `accent` nicht verwenden.

## 3. Typografie

- **Display:** `Bodoni Moda` (Variable mit `opsz`), Gewicht 450–500, `font-variation-settings: 'opsz' 40`. Zweite Zeile oder ein Schlüsselwort kursiv. Pakete `@fontsource-variable/bodoni-moda/opsz.css` und `opsz-italic.css`.
- **Text und UI:** `Manrope` (Variable), `@fontsource-variable/manrope`. Lizenzen: SIL OFL.
- **Größen:** Hero `clamp(2.8rem, 1rem + 6vw, 8.5rem)`, Zeilenhöhe 0.98; Überschrift `clamp(2.4rem, 1.2rem + 3.6vw, 5.2rem)`; Lead `clamp(1.125rem, 1.4vw, 1.3rem)`.
- **Labels, Navigation, Buttons:** Manrope, Versalien, `letter-spacing: 0.14–0.24em`, 0.75–0.8125rem.
- **Ziffern:** römische Abschnittsnummern (I, II, III …) und Kennzahlen in kursiver Bodoni.
- **Achtung:** Bodoni hat sehr feine Haarstriche – nie unter etwa 1.4rem setzen. Großbuchstaben wie „W“ haben breite Vorbreiten; bei sehr großen Titeln Kerning prüfen.

## 4. Layout und Flächen

- **Hero:** volle Bildschirmhöhe minus Header, alles zentriert; Hintergrund ein generiertes Lichtfeld (dunkler Grund, zwei bis drei weiche Farbwolken in den Markenfarben, Vignette, Filmkorn), als WebP.
- **Abschluss:** ein zweites Lichtfeld als diagonaler Lichtstreifen hinter dem zentrierten CTA.
- **Unterseiten:** statt Bild ein sehr dezenter radialer Schein oben links (`radial-gradient` mit 28 % Markenfarbe).
- **Seitenrand:** `clamp(1.25rem, 6vw, 7rem)`; Abschnittsabstand `clamp(5rem, 11vw, 10rem)`.
- **Ecken:** 2 px für Karten, Pillen für Buttons. **Schatten:** keine, nur Glühen.
- **Kein fester Max-Width-Container:** Raster bekommen auf breiten Screens mehr Spalten.

## 5. Komponenten

| Element            | Gestaltung                                                                                                   |
|--------------------|--------------------------------------------------------------------------------------------------------------|
| **Header**         | halbtransparent schwarz mit Blur, Haarlinie unten; Navigation in Versalien, aktiver Punkt fein unterstrichen |
| **Hero**           | Eyebrow → Bodoni-Titel (2. Zeile kursiv) → Verlaufs-Haarlinie 7rem → Lead → Pillen-Buttons, alles zentriert  |
| **Karten**         | transparent, 1 px `line`; Hover: Rand 60 % `accent` und `box-shadow: 0 0 60px -20px` in `accent`             |
| **Abschnittskopf** | kursive römische Ziffer in `accent-text` + Label in Versalien, darunter Bodoni-Überschrift                   |
| **Kennzahlen**     | große kursive Bodoni-Zahlen, Label klein darunter                                                            |
| **Porträts**       | Bogenform (`border-radius: 999px 999px 2px 2px`)                                                             |
| **Formular**       | nur Unterlinien, Fokus färbt die Linie in `accent-text`                                                      |
| **Buttons**        | Primär `accent` mit dunkler Schrift, Sekundär 1 px `line-strong`, Hover invertiert                           |

## 6. Bewegung

- Nur Übergänge: Glühen und Randfarbe der Karten (250 ms). Keine Daueranimation.
- `prefers-reduced-motion`: Übergänge aus.

## 7. Dos und Don'ts

- **Do:** Lichtfelder als Bild erzeugen (Rauschen, Unschärfe) – sie wirken weicher als CSS-Verläufe.
- **Do:** Viel Abstand; lieber weniger Inhalte pro Bildschirm.
- **Don't:** Farbverläufe auf Text oder Glasflächen – das kippt in den Weltraum-Stil (`cosmos.md`).
- **Don't:** Weiße Schrift auf dem Akzent-Pink.
- **Don't:** Mehr als zwei Lichtfelder pro Seite.

## 8. Tokens als CSS

```css
:root {
    --bg: #0b0a0b;
    --surface: #121012;
    --surface-alt: #0f0d0f;
    --text: #f4efea;
    --text-soft: #cfc7c0;
    --text-muted: #a39b94;
    --line: rgb(244 239 234 / 0.12);
    --line-strong: rgb(244 239 234 / 0.28);
    --accent: #e0338f;
    --accent-strong: #f06ba0;
    --accent-soft: rgb(224 51 143 / 0.14);
    --accent-ink: #0b0a0b;
    --accent-text: #f06ba0;
    --brand-gradient: linear-gradient(90deg, #ab1e7e, #c5106c 27%, #e50058 53%, #e94222 81%, #ec6d01);
    --radius: 2px;
    --font-display: 'Bodoni Moda Variable', 'Didot', Georgia, serif;
    --font-body: 'Manrope Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `./styleguides/noir.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Tiefes Schwarz, zentrierter Bodoni-Hero mit kursiver zweiter Zeile, generiertes Lichtfeld in **[Markenfarben]** hinter Hero und Abschluss, Haarlinien-Karten mit Glühen, römische Abschnittsnummern. Akzent **[Farbe]** mit dunkler Schrift; Kontraste neu prüfen.
