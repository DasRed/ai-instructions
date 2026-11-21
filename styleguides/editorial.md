# Styleguide „Editorial“ – Magazin auf warmem Papier

> **Zweck:** Gestaltungsreferenz für Seiten, die wie eine hochwertige Zeitschrift wirken sollen: Persönlichkeiten und Experten, Autoren, Beratungen, Agenturen, Kultur, Blogs mit langen Texten. Der Stil hat einen Zeitschriftenkopf, eine Titelgeschichte, Faktenkästen, Spalten und Inhaltsverzeichnisse.

## Kurzfassung

Warmes, leicht körniges Papier, tiefschwarze Druckfarbe und ein Rostrot als einzige Akzentfarbe. Ein großer Zeitschriftenkopf mit Ausgabe, Datum und Leitspruch. Die Startseite ist eine Titelgeschichte: Überschrift über die volle Breite, Vorspann mit Initiale, Porträt mit Bildunterschrift. Überschriften in Fraunces (weich, mit Charakter), Fließtext in Source Serif, Labels in Inter. Keine Schatten, kaum Rundungen, feine Linien.

## 1. Leitidee

- **Lesen ist die Hauptsache:** Serifen-Fließtext, angenehme Zeilenlänge, großzügiger Satzspiegel.
- **Zeitschriftenlogik:** Kopf (Masthead), Titelgeschichte, Rubriken mit Kicker, Faktenkästen („Gesucht“, „Auf einen Blick“), Inhaltsverzeichnis als nummerierte Liste.
- **Linien statt Kästen:** Abschnitte werden mit 1 px Linien in Textfarbe getrennt, nicht mit Hintergrundflächen.
- **Eine Akzentfarbe:** Rost für Kicker, Links, Initiale und Buttons.

**Passt gut für:** Personal Branding, Autoren, Berater, Kanzleien mit Stil, Kultur, Magazine, Blogs. **Passt weniger für:** App-Landingpages, Dashboards, verspielte Marken.

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                                  |
|-----------------|-----------|---------------------------------------------|
| `bg`            | `#F4EFE6` | Papier (plus Rauschen, siehe unten)         |
| `surface`       | `#FBF8F2` | Faktenkästen, Formular                      |
| `surface-2`     | `#EBE4D6` | abgesetzte Flächen                          |
| `text`          | `#1D1A16` | Druckfarbe, Linien im Kopf                  |
| `text-soft`     | `#3D372F` | Fließtext                                   |
| `text-muted`    | `#776D60` | Bildunterschriften, Metadaten               |
| `line`          | `#D9CFBE` | feine Trennlinien                           |
| `accent`        | `#B4432A` | Rost: Kicker, Links, Initiale, Primärbutton |
| `accent-strong` | `#8F321D` | Hover                                       |
| `accent-soft`   | `#F2DCCF` | Markierungen                                |
| `accent-ink`    | `#FBF8F2` | Text auf Rost                               |

**Kontrast:** `text` auf `bg` 15,1 : 1, `accent` auf `bg` 4,9 : 1, Papier auf `accent` 5,2 : 1 (Weiß 5,6 : 1). **Achtung:** `text-muted` hat nur 4,4 : 1 – für kleine Bildunterschriften knapp unter AA. Wer sicher gehen will, nimmt `#6B6156` (5,3 : 1).

## 3. Typografie

- **Display:** `Fraunces` (Variable) mit Achsen `SOFT`, `WONK`, `opsz`. Überschriften `font-variation-settings: 'SOFT' 50, 'WONK' 0`, Gewicht 600; Zeitschriftentitel `'SOFT' 100, 'WONK' 1, 'opsz' 144`, Gewicht 800.
- **Fließtext:** `Source Serif 4` (Variable), Grundgröße `1.125rem`.
- **Labels und UI:** `Inter` (Variable), Versalien, `letter-spacing: 0.12–0.16em`, 0.75–0.8rem.
- Pakete: `@fontsource-variable/fraunces`, `@fontsource-variable/source-serif-4`, `@fontsource-variable/inter`. Lizenz: SIL OFL.
- **Größen:** Zeitschriftentitel `clamp(3rem, 1rem + 9vw, 10rem)`, Display `clamp(2.8rem, 1.2rem + 5.4vw, 8rem)`, Überschrift `clamp(2.2rem, 1.4rem + 2.8vw, 4.6rem)`, Lead `clamp(1.15rem, 1rem + 0.5vw, 1.55rem)`.
- **Initiale:** `::first-letter` des Vorspanns in Fraunces, 3–4 Zeilen hoch, Rost.
- **Leitspruch** im Kopf kursiv in Source Serif.

## 4. Layout und Flächen

- **Papierkorn:** SVG-Rauschen (`feTurbulence`, `baseFrequency 0.9`, Deckkraft ~0.035) als Hintergrundbild über `bg`.
- **Masthead:** oben eine Metazeile (Ausgabe, Datum, Leitspruch, Sprache) mit 1 px Linie in Textfarbe, darunter der riesige, zentrierte Titel (Zeilenhöhe 0.9, `letter-spacing: -0.04em`), darunter die Navigation zwischen zwei Linien.
- **Satzspiegel:** großzügiger Seitenrand `clamp(1.25rem, 5vw, 6rem)`; Fließtext auf ~65 Zeichen begrenzen, Raster daneben für Bild und Kästen.
- **Ecken:** `0.15–0.2rem`. **Schatten:** keine.
- **Zweispaltig:** Profile und Über-Abschnitte zweispaltig (Text + Kasten/Bild), mobil einspaltig.

## 5. Komponenten

| Element                    | Gestaltung                                                                                                                                                                           |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Titelgeschichte (Hero)** | Kicker (Rost, Versalien) → Überschrift über die volle Breite → Byline („Von … · Lesezeit“) → zweispaltig: Vorspann mit Initiale + Buttons links, Porträt mit Bildunterschrift rechts |
| **Faktenkasten**           | Rahmen 1 px in Textfarbe, oben Titel in Versalien, Liste mit Kriterien (z. B. „Gesucht: …“)                                                                                          |
| **Rubrik-Kopf**            | Nummer + Kicker in Rost, Überschrift in Fraunces, feine Linie darunter                                                                                                               |
| **Index-Liste**            | Projekte, Artikel, Stationen als nummerierte Zeilen mit Jahr rechts, getrennt durch feine Linien                                                                                     |
| **Zitat**                  | groß in Fraunces kursiv, Rost-Anführungszeichen                                                                                                                                      |
| **Buttons**                | eckig, Primär Rost gefüllt, Sekundär Outline in Textfarbe; Beschriftung in Inter Versalien                                                                                           |

## 6. Bewegung

Keine. Nur Farbwechsel bei Hover. Magazine bewegen sich nicht.

## 7. Dos und Don'ts

- **Do:** Echte Texte mit Haltung; der Stil braucht Inhalt.
- **Do:** Bildunterschriften zu jedem Bild.
- **Don't:** Hintergrundflächen und Kartenschatten – Gliederung läuft über Linien und Weißraum.
- **Don't:** Mehr als eine Akzentfarbe.
- **Don't:** Fraunces mit `WONK` im Fließtext.

## 8. Tokens als CSS

```css
:root {
    --bg: #f4efe6;
    --surface: #fbf8f2;
    --surface-2: #ebe4d6;
    --text: #1d1a16;
    --text-soft: #3d372f;
    --text-muted: #776d60;
    --line: #d9cfbe;
    --accent: #b4432a;
    --accent-strong: #8f321d;
    --accent-soft: #f2dccf;
    --accent-ink: #fbf8f2;
    --radius: 0.2rem;
    --shadow: none;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-serif: 'Source Serif 4 Variable', Georgia, serif;
    --font-display: 'Fraunces Variable', Georgia, serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/editorial.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Zeitschriftenkopf mit Titel **[Name]** und Leitspruch **[Leitspruch]**, Startseite als Titelgeschichte über **[Thema]**, Faktenkasten für **[Kernaussagen]**, Inhalte als Rubriken und Index-Listen.
