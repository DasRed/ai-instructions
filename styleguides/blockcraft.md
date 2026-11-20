# Styleguide „Blockcraft“ – Voxel-Welt aus Blöcken und Code

> **Zweck:** Gestaltungsreferenz für verspielte Seiten mit Spiele-Anmutung: Entwickler-Portfolios, Game-Jams, Coding-Kurse für Kinder und Jugendliche, Vereins- oder Community-Seiten rund um Spiele. Der Stil erinnert an Block-Sandbox-Spiele: Himmel, Gras- und Steinblöcke, Pixelschrift, Inventar-Slots und eine Erfahrungsleiste.

## Kurzfassung

Ein Himmel mit Pixelwolken über einer Reihe Grasblöcke, darunter Erde und Stein als Grund für den Inhalt. Pixel-Überschriften mit hartem Schlagschatten, eckige Kästen mit dicken schwarzen Rändern, ein Inventar aus grauen Slots für Fähigkeiten oder Werkzeuge und eine grüne XP-Leiste als Fortschrittsanzeige. Alles ist eckig, nichts ist rund oder weich. Fließtext bleibt in einer normalen, gut lesbaren Sans.

## 1. Leitidee

- **Die Welt ist das Layout:** Oben Himmel (Einstieg), in der Mitte die Grasschicht als Horizont, darunter Erde und Stein (Inhalte). Je tiefer man scrollt, desto „tiefer“ ist man in der Welt.
- **Spielmechaniken als Informationsform:** Fähigkeiten als Inventar, Fortschritt als XP-Leiste, Meilensteine als Erfolge („Achievement unlocked“), kurze Sprüche als gelber Splash-Text.
- **Code statt Erz:** Die Erzblöcke tragen Code-Symbole (`</>`, `{}`, `=>`) statt Edelsteinen. So bekommt das Thema einen eigenen Dreh.
- **Thema als Akzent:** Pixelschrift nur für Überschriften, Labels und Buttons; Fließtext, Formulare und lange Listen bleiben normal lesbar.

**Passt gut für:** Spiele-Projekte, Coding-Workshops, Jugendarbeit, Hackathons, verspielte Entwickler-Portfolios. **Passt nicht für:** seriöse Unternehmensseiten, Kanzleien, Medizin. Und: keine Original-Texturen, Logos, Figuren oder Markennamen aus bestehenden Spielen verwenden – alle Texturen selbst erzeugen.

## 2. Farben und Rollen

| Token                | Wert      | Verwendung                                             |
|----------------------|-----------|--------------------------------------------------------|
| `bg`                 | `#2B2B2B` | Grund unter der Erde („Höhle“)                         |
| `surface`            | `#C6C6C6` | Inventar-Fenster, helle UI-Kästen                      |
| `surface-2` / `slot` | `#8B8B8B` | Slots, sekundäre Kästen                                |
| `slot-dark`          | `#373737` | Slot-Innenschatten, dunkle Kästen                      |
| `text`               | `#F2F2F2` | Haupttext auf dunklem Grund                            |
| `text-soft`          | `#DCDCDC` | Fließtext                                              |
| `text-muted`         | `#A8A8A8` | Metadaten                                              |
| `line`               | `#1B1B1B` | Ränder (dick!)                                         |
| `accent`             | `#5DD35D` | Grasgrün: Primäraktion, XP-Leiste                      |
| `accent-strong`      | `#80E880` | Hover                                                  |
| `accent-soft`        | `#2F5A2F` | Hintergrund von Erfolgsmeldungen                       |
| `accent-ink`         | `#102010` | Text auf `accent`                                      |
| `sky`                | `#7EC0EE` | Himmel (Verlauf `#5AA4E6` → `#7EC0EE` → `#B5DCF7`)     |
| `gold`               | `#FFD84A` | Splash-Text, Taglines, aktive Navigation, Hover-Rahmen |
| `danger`             | `#FF5555` | Fehler                                                 |

**Kontrast:** `text` auf `bg` 12,6 : 1, `accent` auf `bg` 7,4 : 1, `accent-ink` auf `accent` 8,9 : 1, `gold` auf `bg` 10,2 : 1. **Achtung:** Heller Text auf `surface` (`#C6C6C6`) hat nur 1,5 : 1 – auf hellen Kästen immer dunkle Schrift (`#1B1B1B`).

## 3. Typografie

- **Display:** `Pixelify Sans` (Variable), Fallback `Press Start 2P`. Pakete: `@fontsource-variable/pixelify-sans`, `@fontsource/press-start-2p`. Lizenz: SIL OFL.
- **Pixel-Labels:** `Press Start 2P` für sehr kurze Labels, Buttons, Zähler (klein setzen, 0.65–0.8rem; die Schrift läuft sehr breit).
- **Fließtext:** `Inter` (Variable) – bewusst unverspielt.
- **Größen:** Display `clamp(2.4rem, 1.2rem + 4.4vw, 6rem)`, Überschrift `clamp(2rem, 1.3rem + 2.6vw, 4rem)`, Lead `clamp(1.05rem, 1rem + 0.35vw, 1.3rem)`.
- **Schatten:** Pixel-Überschriften mit hartem Versatzschatten ohne Unschärfe, z. B. `text-shadow: 4px 4px 0 #3f3f3f, 6px 6px 0 rgb(0 0 0 / 0.25)`. Kleine Labels `2px 2px 0 #000`.
- `letter-spacing: 0` für Pixelschriften, sonst verschwimmt das Raster.

## 4. Layout und Flächen

- **Blockmaß:** `--block: 64px`. Texturen kacheln in diesem Maß (`background-size: var(--block)`), auf kleinen Flächen 48 px.
- **Schichten:** Himmel (Hero) → eine Reihe Grasblöcke (Seitenansicht) → Erde → Stein/Höhle für die Inhaltsabschnitte. Abschnitte können auf Holzplanken- oder Steintextur liegen.
- **Ecken:** `border-radius: 0` überall. Ränder 3–4 px in Schwarz.
- **Keine weichen Schatten:** `box-shadow: none` oder harte Innenkanten (heller Rand oben links, dunkler unten rechts) für den 3D-Effekt der Slots.
- **Texturen:** selbst als kleine PNGs erzeugen (z. B. 16 × 16 Pixel, hochskaliert mit `image-rendering: pixelated`): Gras-Seite, Erde, Stein, Planken, Erze mit Code-Symbolen.

## 5. Komponenten

| Element        | Gestaltung                                                                                                                                                                                             |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**       | Himmel mit Pixelsonne und zwei langsam ziehenden Pixelwolken, Titel mit gelbem Splash-Text schräg daneben (`rotate(-16deg)`, pulsierend), Porträt in einem Bilderrahmen-Kasten, darunter die Grasreihe |
| **Buttons**    | eckig, 3 px schwarzer Rand, Innenkante hell/dunkel, Primär grasgrün, Sekundär steingrau; Pixelschrift; beim Drücken 2 px nach unten                                                                    |
| **Inventar**   | helles Fenster (`surface`), pro Gruppe eine Reihe Slots (`slot` mit dunkler Innenkante), in jedem Slot ein Item aus zwei Buchstaben in Pixelschrift, Tooltip/Name darunter                             |
| **XP-Leiste**  | grüner Verlauf `#B6FF5A` → `#5FC219` in schwarzem Rahmen, darüber eine Level-Zahl in Gold; zeigt echten Fortschritt (z. B. Jahresfortschritt, Erfahrungsjahre)                                         |
| **Erfolge**    | dunkle Toast-Kästen mit Icon-Slot, Titel in Gold („Erfolg erzielt!“) und einer Zeile Text                                                                                                              |
| **Karten**     | dunkle Steinkästen mit 3 px Rand, Hover-Rand in `gold`                                                                                                                                                 |
| **Navigation** | dunkle Leiste, Links weiß mit Pixelschatten, Hover und aktive Sprache in `gold`                                                                                                                        |

## 6. Bewegung

- Wolken ziehen sehr langsam (`90s linear infinite`).
- Splash-Text pulsiert leicht (`scale`, 0.6 s, `alternate`).
- Buttons „drücken“ sich beim Klick ein.
- `prefers-reduced-motion`: alle Animationen aus.

## 7. Mobil

Splash-Text auf kleinen Bildschirmen ausblenden oder unter den Titel setzen; Inventar-Slots umbrechen lassen (feste Slotgröße, `flex-wrap`); Grasreihe bleibt als Horizont.

## 8. Dos und Don'ts

- **Do:** Die Spielmechanik muss eine echte Information tragen (Inventar = Werkzeuge, XP = Fortschritt).
- **Do:** Fließtext in normaler Schrift und auf ruhigem Grund.
- **Don't:** Ganze Absätze in Pixelschrift.
- **Don't:** Fremde Spieltexturen, Logos, Figuren oder den Namen eines bestehenden Spiels übernehmen.
- **Don't:** Runde Ecken oder weiche Schatten – das bricht die Welt.

## 9. Tokens als CSS

```css
:root {
    --bg: #2b2b2b;
    --surface: #c6c6c6;
    --surface-2: #8b8b8b;
    --text: #f2f2f2;
    --text-soft: #dcdcdc;
    --text-muted: #a8a8a8;
    --line: #1b1b1b;
    --accent: #5dd35d;
    --accent-strong: #80e880;
    --accent-soft: #2f5a2f;
    --accent-ink: #102010;
    --sky: #7ec0ee;
    --gold: #ffd84a;
    --slot: #8b8b8b;
    --slot-dark: #373737;
    --danger: #ff5555;
    --radius: 0;
    --block: 64px;
    --shadow: none;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Pixelify Sans Variable', 'Press Start 2P', monospace;
    --font-pixel: 'Press Start 2P', monospace;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/blockcraft.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Baue die Seite als Voxel-Welt: Himmel-Hero, Grasreihe als Horizont, Inhalte in Stein- und Planken-Abschnitten. Zeige **[Fähigkeiten/Angebote]** als Inventar und **[Fortschritt]** als XP-Leiste. Erzeuge alle Texturen selbst; keine fremden Spiel-Assets.
