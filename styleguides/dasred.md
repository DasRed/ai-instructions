# Styleguide „DasRed“ – Roter Held: roter Himmel, Purpurnacht und Gold

> **Zweck:** Gestaltungsreferenz für kraftvolle Dunkel-Seiten mit Rot als Markenfarbe: Marken, Gamer-Tags, Teams, Clans, Streamer, Freelancer oder Events, deren Identität rot ist. Der Stil ist die rot-goldene Variante des Superhelden-Stils (`superhero.md`): Statt blauem Himmel glüht der Himmel rot, die Nacht ist tiefes Purpur, Gold ersetzt Sonnengelb als Aktions- und Emblemfarbe.

## Kurzfassung

Ein roter Himmel, der nach unten in eine fast schwarze Purpurnacht übergeht. Goldene Sonnenstrahlen drehen sich langsam, dunkle Wolken ziehen. Ein goldenes Emblem mit dunklem Innenfeld steht über dem Namen in Anton; die Buchstaben tragen einen gestaffelten Schatten in Dunkelrot. Ein goldenes Abzeichen zeigt den Alias oder Spitznamen. Gold ist die einzige Aktionsfarbe; Rot ist Atmosphäre und Fläche.

## 1. Leitidee

- **Rot als Identität:** Die Markenfarbe füllt den Einstieg (Himmel) und kehrt in Flächen, Linien und Schatten wieder.
- **Gold als Würde und Aktion:** Buttons, Emblem, Abzeichen, Links. Gold auf Purpur liest sich edel und sehr kontrastreich.
- **Dunkel als Ruhe:** Unterhalb des Heros wird es dunkel und ruhig, damit Inhalte lesbar bleiben.
- **Helden-Vokabular als Akzent**, wie beim Superhelden-Stil: Kräfte, Einsätze, Notruf – nur in Überschriften.
- **Alias sichtbar:** Ein Spitzname oder Handle („aka …“) steht als Abzeichen beim Namen.

**Passt gut für:** rote Marken, Gaming-Identitäten, Teams und Clans, Streamer, selbstbewusste Freelancer. **Passt nicht für:** Kontexte, in denen Rot Warnung oder Gefahr bedeutet (Medizin, Finanzen). Keine bestehenden Helden-Wappen oder Figuren.

## 2. Farben und Rollen

| Token           | Wert                      | Verwendung                                   |
|-----------------|---------------------------|----------------------------------------------|
| `bg`            | `#24060A`                 | Purpurnacht / Seitengrund                    |
| `surface`       | `#3D0B11`                 | Karten                                       |
| `surface-2`     | `#561018`                 | Chips, Kartenverlauf                         |
| `red` / `sky`   | `#E3202F`                 | roter Himmel, Flächen, Emblem-Umfeld         |
| `red-dark`      | `#7D0C15`                 | Schatten erste Stufe, tiefe Flächen          |
| `shadow-deep`   | `#3D070C`                 | Schatten zweite Stufe                        |
| `text`          | `#FFF4F2`                 | Schrift                                      |
| `text-soft`     | `#F3D3D1`                 | Fließtext                                    |
| `text-muted`    | `#C99C9D`                 | Metadaten                                    |
| `line`          | `rgb(255 255 255 / 0.16)` | Ränder                                       |
| `accent`        | `#FFCC00`                 | Gold: Primärbutton, Emblem, Abzeichen, Links |
| `accent-strong` | `#FFE066`                 | Hover                                        |
| `accent-ink`    | `#24060A`                 | Text auf Gold                                |

**Kontrast:** `text` auf `bg` 17,6 : 1, `text-muted` 7,9 : 1, `accent` auf `bg` 12,6 : 1, `accent-ink` auf `accent` 12,6 : 1, Weiß auf `red` 4,7 : 1, Weiß auf `surface-2` 14,2 : 1. **Achtung:** `red` als Schrift auf `bg` hat 4,1 : 1 – nur für große Überschriften; Fließtext nie rot.

## 3. Typografie

Wie im Superhelden-Stil:

- **Display:** `Anton` (`@fontsource/anton`), Versalien.
- **Text:** `Inter` (Variable). Lizenzen: SIL OFL.
- **Namensschatten:** `text-shadow: 0 4px 0 var(--red-dark), 0 8px 0 #3d070c, 0 18px 30px rgb(0 0 0 / 0.45)`; Abschnittsüberschriften `0 3px 0 var(--red-dark)`.
- **Größen:** Display `clamp(2.8rem, 1.4rem + 5vw, 7.5rem)`, Überschrift `clamp(2.4rem, 1.4rem + 3.2vw, 5rem)`.
- **Abzeichen-Text:** Versalien, `letter-spacing: 0.06–0.08em`.

## 4. Layout und Flächen

- **Himmel im Hero:** Verlauf von hellem Rot oben über `red` zu `bg`; goldener Sonnenschein mit drehenden Strahlen (`repeating-conic-gradient`, 60 s), dunkelrote Wolken.
- **Emblem:** Sechseck (`clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`) mit 8 px Goldrand und dunklem Innenfeld (`bg`), Symbol in Gold.
- **Karten:** Verlauf `surface-2` → `surface`, Radius `0.5rem`, Schatten `0 18px 40px -20px rgb(0 0 0 / 0.7)`.
- **Trennstreifen:** Rot/Gold je zur Hälfte.

## 5. Komponenten

| Element             | Gestaltung                                                                                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| **Hero**            | roter Himmel, Emblem, Name, goldenes Alias-Abzeichen („aka …“), Lead, Buttons; Porträt mit Speed-Lines, schwebend |
| **Abzeichen**       | Goldrand, Goldschrift auf dunklem Grund, leicht gedreht                                                           |
| **Buttons**         | Primär Gold mit `accent-ink`, Versalien; Sekundär Outline weiß                                                    |
| **Alarm-Box**       | `red` mit weißem Text (große Schrift) für Verfügbarkeit                                                           |
| **Abschnittsköpfe** | Anton mit dunkelrotem Schatten, Label in Gold                                                                     |

## 6. Bewegung

Wie Superhero: Strahlen, Wolken, Schweben – langsam; `prefers-reduced-motion` stoppt alles.

## 7. Dos und Don'ts

- **Do:** Gold sparsam – es ist die Aktionsfarbe und verliert sonst Wert.
- **Do:** Unterhalb des Heros die Rotanteile zurücknehmen; dunkle, ruhige Flächen für Text.
- **Don't:** Rot für Fließtext oder kleine Links.
- **Don't:** Rot und Gold zu gleichen Teilen großflächig mischen (wirkt schnell billig).
- **Don't:** Bestehende Helden-Embleme oder Figuren.

## 8. Tokens als CSS

```css
:root {
    --bg: #24060a;
    --surface: #3d0b11;
    --surface-2: #561018;
    --text: #fff4f2;
    --text-soft: #f3d3d1;
    --text-muted: #c99c9d;
    --line: rgb(255 255 255 / 0.16);
    --accent: #ffcc00;
    --accent-strong: #ffe066;
    --accent-soft: rgb(255 204 0 / 0.16);
    --accent-ink: #24060a;
    --red: #e3202f;
    --red-dark: #7d0c15;
    --sky: #e3202f;
    --radius: 0.5rem;
    --shadow: 0 18px 40px -20px rgb(0 0 0 / 0.7);
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Anton', 'Impact', sans-serif;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/dasred.md` (und für Details `superhero.md`) als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**, Markenfarbe Rot. Roter Himmel im Hero, goldenes Emblem **[Symbol]**, Name **[Name]** mit Alias **[Alias]**. Gold nur für Aktionen.
