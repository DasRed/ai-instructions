# Styleguide „Cosmos“ – Tiefer Weltraum, Violett und Cyan

> **Zweck:** Gestaltungsreferenz für moderne, trendige Dunkel-Seiten: Tech-Startups, Entwickler-Portfolios, KI- und Datenprodukte, Wissenschafts- und Astronomie-Themen, Event-Landingpages. Der Stil zeigt einen ruhigen Sternenhimmel mit farbigen Nebeln, eine Überschrift mit Farbverlauf und Inhalte auf leicht durchscheinenden Glasflächen.

## Kurzfassung

Fast schwarzes Nachtblau als Grund, darüber ein langsam driftendes Sternenfeld und drei weiche Nebel in Violett, Cyan und Pink. Die Hauptüberschrift läuft im Verlauf von Weiß über Hellviolett nach Cyan. Inhalte liegen auf halbtransparenten Glas-Karten mit Unschärfe. Im Hero kreist ein „Planetensystem“ um das Porträt. Der Werdegang ist ein Missions-Logbuch. Schrift: Space Grotesk für Überschriften, Inter für Text. Viel Luft zwischen den Abschnitten.

## 1. Leitidee

- **Weite statt Enge:** Große Abschnittsabstände, großzügiger Seitenrand, wenig Elemente pro Bildschirm.
- **Licht im Dunkel:** Farbe kommt nur über Leuchten – Verläufe, Glühen, Nebel. Flächen bleiben dunkel.
- **Klarer Infoteil:** Unter dem stimmungsvollen Einstieg werden Werdegang und Fakten sehr klar und strukturiert gezeigt (Logbuch, Raster).

**Passt gut für:** Tech, KI, Daten, Raumfahrt, Wissenschaft, Portfolios mit Wow-Effekt. **Passt weniger für:** lokale Dienstleister, Druckerzeugnisse, sehr textlastige Seiten.

## 2. Farben und Rollen

| Token           | Wert                      | Verwendung                                                   |
|-----------------|---------------------------|--------------------------------------------------------------|
| `bg`            | `#070818`                 | Weltraum                                                     |
| `surface`       | `rgb(20 22 52 / 0.72)`    | Glas-Karten (mit `backdrop-filter: blur(8–10px)`)            |
| `surface-2`     | `#1B1D45`                 | Chips, Eingabefelder                                         |
| `text`          | `#ECEAFF`                 | Haupttext                                                    |
| `text-soft`     | `#B9B6E0`                 | Fließtext                                                    |
| `text-muted`    | `#8682B8`                 | Metadaten                                                    |
| `line`          | `rgb(167 139 250 / 0.18)` | Ränder                                                       |
| `accent`        | `#A78BFA`                 | Violett: Links, Akzente, Primärbutton (Verlauf zu `#7C3AED`) |
| `accent-strong` | `#C4B5FD`                 | Hover, Verlaufsmitte                                         |
| `accent-soft`   | `rgb(167 139 250 / 0.14)` | Badges                                                       |
| `accent-ink`    | `#120A2E`                 | Text auf Violett                                             |
| `cyan`          | `#22D3EE`                 | zweiter Lichtton, Verlaufsende                               |
| `pink`          | `#F472B6`                 | dritter Lichtton, nur in Nebel und Monden                    |
| `success`       | `#34D399`                 | Verfügbarkeit, Status                                        |

**Kontrast:** `text` auf `bg` 16,8 : 1, `text-muted` 5,6 : 1, `accent` auf `bg` 7,3 : 1, `cyan` 11,0 : 1, `accent-ink` auf `accent` 7,0 : 1. **Achtung:** Weiß auf `accent` nur 2,7 : 1 – Buttons immer mit dunkler Schrift (`accent-ink`).

## 3. Typografie

- **Display:** `Space Grotesk` (Variable), `@fontsource-variable/space-grotesk`, `letter-spacing: -0.035em`.
- **Text:** `Inter` (Variable). Lizenz beider: SIL OFL.
- **Mono:** System-Mono für Koordinaten, Daten, Logbuch-Zeitstempel.
- **Größen:** Display `clamp(2.6rem, 1.3rem + 4.4vw, 6.5rem)`, Überschrift `clamp(2rem, 1.3rem + 2.4vw, 4rem)`, Lead `clamp(1.1rem, 1rem + 0.45vw, 1.45rem)`.
- **Verlaufsschrift:** `background: linear-gradient(100deg, #fff 10%, var(--accent-strong) 45%, var(--cyan) 90%)` mit `background-clip: text; color: transparent`. Nur für die Hauptüberschrift und einzelne Schlüsselwörter.
- **Labels:** Versalien, `letter-spacing: 0.2em`, klein, `text-muted`.

## 4. Layout und Flächen

- **Hintergrund:** Drei radiale Nebel (`40rem × 26rem` Violett oben rechts, Cyan links, Pink unten, Deckkraft 0.1–0.22) über `bg`.
- **Sternenfeld:** zwei bis drei Ebenen kleiner Punkte, die unterschiedlich schnell driften (80 s, 120 s, 180 s) – Parallaxe ohne Scroll-Skript.
- **Glas:** Karten mit `surface`, Rand `line`, Radius `1.1rem`, Schatten `0 0 0 1px var(--line), 0 30px 60px -30px rgb(0 0 0 / 0.8)`.
- **Abstände:** Seitenrand `clamp(1.25rem, 5vw, 5rem)`, Abschnittsabstand `clamp(5rem, 11vw, 10rem)` – bewusst groß.
- **Kein fester Max-Width-Container:** breite Bildschirme bekommen mehr Spalten.

## 5. Komponenten

| Element              | Gestaltung                                                                                                                                                                                                                                                                                                                   |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**             | links Begrüßung, Verlaufsüberschrift, Lead, Buttons; rechts das Porträt als runder „Planet“ mit violettem Glühen (`box-shadow` mit 6 px Ring + 80 px Schein), zwei Umlaufbahnen (gestrichelte Kreise, die sich gegenläufig in 46 s drehen) und drei kleinen Monden (Violett, Pink, Cyan als radiale Kugeln) mit Beschriftung |
| **Missions-Logbuch** | Werdegang als vertikale Linie mit Verlauf (Violett → Cyan), Punkte als leuchtende Ringe, Datum in Mono, Stationen als Glas-Karten                                                                                                                                                                                            |
| **Primärbutton**     | Verlauf `#A78BFA` → `#7C3AED`, Text `accent-ink`, Pille; Hover heller                                                                                                                                                                                                                                                        |
| **Sekundärbutton**   | Glas mit Rand `line`                                                                                                                                                                                                                                                                                                         |
| **Status-Badge**     | Rand `rgb(52 211 153 / 0.3)`, grüner Punkt                                                                                                                                                                                                                                                                                   |
| **Info-Raster**      | unter dem Hero klare Karten für Fakten, Leistungen, Werkzeuge                                                                                                                                                                                                                                                                |

## 6. Bewegung

- Sterne driften langsam und funkeln (`twinkle`, 4 s, `alternate`).
- Umlaufbahnen drehen sich sehr langsam.
- Keine schnellen oder scroll-gebundenen Effekte.
- `prefers-reduced-motion`: alles statisch.

## 7. Dos und Don'ts

- **Do:** Den Verlauf nur auf wenige große Wörter legen.
- **Do:** Unter dem Hero sehr klar und ruhig strukturieren – der Effekt lebt vom Kontrast zwischen Stimmung und Ordnung.
- **Don't:** Weißen Text auf Violett.
- **Don't:** Zu viele leuchtende Elemente gleichzeitig; ein Glühen pro Bildschirm.
- **Don't:** Glas auf Glas stapeln – Unschärfe wird teuer und matschig.

## 8. Tokens als CSS

```css
:root {
    --bg: #070818;
    --surface: rgb(20 22 52 / 0.72);
    --surface-2: #1b1d45;
    --text: #eceaff;
    --text-soft: #b9b6e0;
    --text-muted: #8682b8;
    --line: rgb(167 139 250 / 0.18);
    --accent: #a78bfa;
    --accent-strong: #c4b5fd;
    --accent-soft: rgb(167 139 250 / 0.14);
    --accent-ink: #120a2e;
    --cyan: #22d3ee;
    --pink: #f472b6;
    --success: #34d399;
    --danger: #fb7185;
    --radius: 1.1rem;
    --radius-small: 0.55rem;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Space Grotesk Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `./styleguides/cosmos.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Stimmungsvoller Weltraum-Hero mit Verlaufsüberschrift **[Claim]** und Planetensystem um **[Bild/Produkt]**; darunter sehr klare Glas-Karten für **[Inhalte]** und ein Logbuch für **[Chronik]**.
