# Styleguide „Superhero“ – Klassischer Comic-Held in Himmelblau, Rot und Sonnengelb

> **Zweck:** Gestaltungsreferenz für selbstbewusste, optimistische Seiten mit einem Augenzwinkern: Freelancer und Berater („Ich rette dein Projekt“), Retter-Services (Notfall-IT, Hotlines), Kinder- und Sportevents, Kampagnen. Der Stil erinnert an klassische Superhelden-Comics der Silver Age: blauer Himmel, Sonnenstrahlen, ein Emblem auf der Brust, rote Schatten unter großen Versalien.

## Kurzfassung

Ein tiefblauer Himmel, der oben hell wird, mit Sonnenschein, langsam rotierenden Strahlen und ziehenden Wolken. In der Mitte ein eigenes Emblem (Sechseck mit Symbol) über dem Namen in Anton, die Buchstaben mit gestaffeltem rotem Schatten. Das Porträt „fliegt“ mit Speed-Lines ins Bild. Sonnengelb ist die Aktionsfarbe, Rot die Heldenfarbe für Flächen und Schatten. Abschnitte bekommen Helden-Namen („Superkräfte“, „Einsätze“, „Notruf“) – aber nur als Überschrift-Würze.

## 1. Leitidee

- **Optimismus und Tatkraft:** Große Gesten im Hero, klare Ansagen, starke Kontraste.
- **Eigenes Emblem:** Ein Zeichen, das zum Projekt gehört (Initialen, Symbol, Code-Klammern) – **niemals** ein bestehendes Helden-Wappen nachbauen.
- **Helden-Vokabular als Akzent:** Kräfte = Fähigkeiten, Einsätze = Projekte, Schwäche = sympathische Eigenheit, Notruf = Kontakt. Inhalte darunter bleiben sachlich.
- **Comic-Physik:** Strahlen, Speed-Lines, schwebende Bewegung.

**Passt gut für:** Freelancer, Notfall-Services, Kinder- und Sportevents, Kampagnen, Hackathons. **Passt nicht für:** leise, seriöse Branchen. Keine Figuren, Logos, Kostüme oder Namen aus bestehenden Comics und Filmen.

## 2. Farben und Rollen

| Token           | Wert                      | Verwendung                                           |
|-----------------|---------------------------|------------------------------------------------------|
| `bg`            | `#06265F`                 | Nachthimmel / Seitengrund                            |
| `surface`       | `#0B3379`                 | Karten                                               |
| `surface-2`     | `#0F3F93`                 | Chips, Kartenverlauf                                 |
| `sky`           | `#2A6FD6`                 | Himmel; Hero-Verlauf `#3B8CF0` → `#1F5FC8` → `bg`    |
| `text`          | `#F4F7FF`                 | Schrift                                              |
| `text-soft`     | `#CFDBF7`                 | Fließtext                                            |
| `text-muted`    | `#97ACD9`                 | Metadaten                                            |
| `line`          | `rgb(255 255 255 / 0.16)` | Ränder                                               |
| `accent`        | `#FFCC00`                 | Sonnengelb: Primärbutton, Emblem-Rand, Links, Badges |
| `accent-strong` | `#FFE066`                 | Hover                                                |
| `accent-ink`    | `#06265F`                 | Text auf Gelb                                        |
| `red`           | `#D7262E`                 | Heldenrot: Flächen, Umhang-Akzente, Schatten         |
| `red-dark`      | `#9E1219`                 | zweite Schattenstufe                                 |

**Kontrast:** `text` auf `bg` 13,5 : 1, `text-muted` 6,4 : 1, `accent` auf `bg` 9,6 : 1, `accent-ink` auf `accent` 9,6 : 1, Weiß auf `red` 5,0 : 1. **Achtung:** `red` als Schrift auf `bg` hat nur 2,9 : 1 – Rot ist Flächen-, Schatten- und Dekorfarbe, keine Textfarbe auf Blau.

## 3. Typografie

- **Display:** `Anton` (`@fontsource/anton`), Fallback `Impact`; Versalien, `letter-spacing: 0.01–0.05em`.
- **Text:** `Inter` (Variable). Lizenzen: SIL OFL.
- **Heldenschatten:** `text-shadow: 0 4px 0 var(--red), 0 8px 0 var(--red-dark), 0 18px 30px rgb(0 0 0 / 0.45)` für den Namen; Abschnittsüberschriften `0 3px 0 var(--red)`.
- **Größen:** Display `clamp(2.8rem, 1.4rem + 5vw, 7.5rem)`, Überschrift `clamp(2.4rem, 1.4rem + 3.2vw, 5rem)`, Lead `clamp(1.1rem, 1rem + 0.45vw, 1.45rem)`.
- **Labels:** Versalien, `letter-spacing: 0.08em`.

## 4. Layout und Flächen

- **Himmel:** Seitengrund `linear-gradient(180deg, #0D4BB3 0, var(--bg) 70rem)`.
- **Sonne:** radialer Schein `rgb(255 244 200 / 0.95)` → `rgb(255 204 0 / 0)`; dahinter Strahlen `repeating-conic-gradient(rgb(255 236 150 / 0.16) 0 4deg, transparent 4deg 14deg)` mit radialer Maske, dreht in 60 s.
- **Wolken:** weiche weiße Formen, ziehen in 70 s.
- **Emblem:** `clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`, 8 px gelber Rand, innen Rot, Symbol in Weiß/Gelb.
- **Karten:** Verlauf `surface-2` → `surface`, Radius `0.5rem`, Schatten `0 18px 40px -20px rgb(0 0 0 / 0.7)`.
- **Trennstreifen:** `linear-gradient(90deg, var(--red) 50%, var(--accent) 50%)` als 6–8 px Balken.
- Hero als zweispaltiges Raster (Text | Porträt), mobil gestapelt.

## 5. Komponenten

| Element             | Gestaltung                                                                                                                                                                                                                                             |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**            | Himmel mit Sonne, Strahlen, Wolken; Emblem über dem Namen, darunter Untertitel („alias …“); Lead, Buttons; rechts Porträt mit Speed-Lines (`repeating-linear-gradient` weiße Streifen, horizontal maskiert), schwebt (`hover 5s ease-in-out infinite`) |
| **Badge**           | gelber Rand, gelbe Schrift, leicht gedreht (−6°), z. B. „Bereit zum Einsatz“                                                                                                                                                                           |
| **Alarm-Box**       | roter Kasten mit weißem Text für Verfügbarkeit oder Dringendes                                                                                                                                                                                         |
| **Schwäche**        | kleine humorvolle Zeile („Schwäche: schlechter Kaffee“)                                                                                                                                                                                                |
| **Buttons**         | Primär gelb mit Navy-Text, Versalien, 2 px Rand; Sekundär Outline weiß                                                                                                                                                                                 |
| **Abschnittsköpfe** | Anton, roter Schatten, Label in Gelb                                                                                                                                                                                                                   |

## 6. Bewegung

Strahlen drehen, Wolken ziehen, Porträt schwebt – alles langsam. `prefers-reduced-motion`: alles statisch.

## 7. Dos und Don'ts

- **Do:** Ein eigenes Emblem entwerfen, das zur Marke passt.
- **Do:** Helden-Begriffe nur in Überschriften und Mikrotexten.
- **Don't:** Bekannte Wappen (z. B. ein „S“ im Rautenschild), Figuren, Kostüme oder Filmtitel.
- **Don't:** Rote Schrift auf Blau.
- **Don't:** Den ganzen Text in Versalien.

## 8. Tokens als CSS

```css
:root {
    --bg: #06265f;
    --surface: #0b3379;
    --surface-2: #0f3f93;
    --text: #f4f7ff;
    --text-soft: #cfdbf7;
    --text-muted: #97acd9;
    --line: rgb(255 255 255 / 0.16);
    --accent: #ffcc00;
    --accent-strong: #ffe066;
    --accent-soft: rgb(255 204 0 / 0.16);
    --accent-ink: #06265f;
    --red: #d7262e;
    --red-dark: #9e1219;
    --sky: #2a6fd6;
    --radius: 0.5rem;
    --shadow: 0 18px 40px -20px rgb(0 0 0 / 0.7);
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Anton', 'Impact', sans-serif;
    color-scheme: dark;
}
```

Eine Rot-Gold-Variante desselben Stils beschreibt `dasred.md`.

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/superhero.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Helden-Hero mit eigenem Emblem **[Symbol]** über **[Name]**, Porträt mit Speed-Lines. Abschnitte: Superkräfte = **[Fähigkeiten]**, Einsätze = **[Projekte]**, Notruf = Kontakt. Keine bestehenden Helden-Motive.
