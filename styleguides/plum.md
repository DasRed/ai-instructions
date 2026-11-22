# Styleguide „Plum“ – Pflaume und Blush im Wechsel, Koralle als Aktion

> **Zweck:** Gestaltungsreferenz für warme, selbstbewusste Seiten mit einer dunklen Markenfarbe: Agenturen, Coaching und Beratung, Praxen mit Persönlichkeit, Kultur, Kosmetik und Lifestyle. Abschnitte wechseln zwischen einer tiefen Pflaume (Identität) und einem hellen Blush (Arbeitsfläche); Koralle ist die Aktionsfarbe auf dunklem Grund. Entstanden als Variante 11 der aspect42-Entwürfe: die Pflaume stammt vom Magenta-Ende, die Koralle vom Orange-Ende des Logoverlaufs.

## Kurzfassung

Header und Hero in tiefer Pflaume mit zwei weichen radialen Lichtern (Pink oben rechts, Orange unten links). Große Newsreader-Serif, die zweite Zeile kursiv in Koralle. Koralle-Pillen mit dunkler Schrift als Hauptaktion. Danach wechseln die Abschnitte: Blush mit weißen, abgerundeten Karten, dann wieder Pflaume mit halbtransparenten Karten und Koralle-Akzenten. Porträts in Bogenform. Fließtext in Figtree.

## 1. Leitidee

- **Zwei Dichten:** Pflaume ist Bühne (Hero, Leistungen, Ablauf, CTA), Blush ist Arbeitsfläche (Pakete, Referenzen, Formulare) – wie Identitäts- und Serviceflächen in `civic.md`.
- **Wärme durch Serif:** kursive Gegenstimmen in Überschriften und Ziffern.
- **Eine Aktionsfarbe je Fläche:** Koralle auf Pflaume, Pflaume-Magenta auf Blush.
- **Weich, aber nicht verspielt:** Rundungen 16–24 px, Schatten dezent getönt.

**Passt gut für:** Coaching, Beratung, Agenturen, Praxen mit eigener Note, Kultur, Lifestyle. **Passt weniger für:** technische Produkte, Behörden, sehr nüchterne Marken.

## 2. Farben und Rollen

| Token                | Wert      | Verwendung                            |
|----------------------|-----------|---------------------------------------|
| `plum`               | `#3A0D2E` | Header, Hero, dunkle Abschnitte, CTA  |
| `plum-deep`          | `#24081C` | Footer                                |
| `blush`              | `#FBF6F8` | Seitengrund hell                      |
| `blush-2`            | `#F6ECF1` | abgesetzte helle Abschnitte           |
| `text`               | `#2A1022` | Schrift auf hell                      |
| `text-soft`          | `#4F3A47` | Fließtext hell                        |
| `text-muted`         | `#6E5A66` | Metadaten hell                        |
| `text-inverse`       | `#FBF3F7` | Schrift auf Pflaume                   |
| `text-inverse-muted` | `#F2C4DC` | Fließtext auf Pflaume                 |
| `accent`             | `#8A1665` | Primärbutton und Links auf hell       |
| `coral`              | `#FF8A65` | Aktion, Eyebrows, Ziffern auf Pflaume |
| `line`               | `#ECDDE5` | Rahmen auf hell                       |

**Kontrast (WCAG):** `text-inverse` auf `plum` 15,1 : 1, `text-inverse-muted` 10,7 : 1, `coral` auf `plum` 7,1 : 1 (ebenso `plum` auf `coral`), `text` auf `blush` 16,4 : 1, `text-muted` 5,9 : 1, `accent` auf `blush` 8,2 : 1, Weiß auf `accent` 8,8 : 1.

## 3. Typografie

- **Display:** `Newsreader` (Variable mit `opsz`), Gewicht 450–500, `font-variation-settings: 'opsz' 72`; zweite Zeile, Seitentitel und CTA kursiv. Pakete `@fontsource-variable/newsreader/opsz.css` und `opsz-italic.css`.
- **Text und UI:** `Figtree` (Variable), `@fontsource-variable/figtree`. Lizenzen: SIL OFL.
- **Größen:** Hero `clamp(2.8rem, 6vw, 6.2rem)`, Überschrift `clamp(1.9rem, 3.6vw, 3.2rem)`.
- **Eyebrows:** Figtree 700, Versalien, `letter-spacing: 0.12em`, auf Pflaume in Koralle.
- **Ziffern:** kursive Newsreader in Koralle bzw. `accent`.

## 4. Layout und Flächen

- **Pflaume-Flächen:** `background: radial-gradient(ellipse 60% 70% at 100% 0%, rgb(229 0 88 / .22), transparent 70%), radial-gradient(ellipse 50% 60% at 0% 100%, rgb(236 109 1 / .12), transparent 70%), #3A0D2E`.
- **Reihenfolge Startseite (Beispiel):** Hero Pflaume → Kennzahlen hell → Zwei Wege hell → Leistungen Pflaume → Branchen hell → Referenzen Blush → Ablauf Pflaume → Team hell → CTA Pflaume → Footer tief. Nie zwei Pflaume-Abschnitte direkt nacheinander.
- **Karten hell:** weiß, 1 px `line`, Radius 16px, getönter Schatten. **Karten auf Pflaume:** `rgb(255 255 255 / .04)`, Rand 12 % Weiß.
- **Kein fester Max-Width-Container.**

## 5. Komponenten

| Element               | Gestaltung                                                                       |
|-----------------------|----------------------------------------------------------------------------------|
| **Header**            | Pflaume, Navigation hell, aktiver Punkt mit Koralle-Unterstreichung, CTA Koralle |
| **Hero**              | Text links, Illustration auf heller Karte (Radius 24px) rechts                   |
| **Leistungen**        | auf Pflaume: Karten halbtransparent, Ziffern und Icons in Koralle                |
| **Ablauf**            | auf Pflaume: Karten mit 3 px Koralle-Kante oben                                  |
| **Porträts**          | Bogenform (`border-radius: 200px 200px 24px 24px`)                               |
| **Unser Vorschlag**   | Pflaume-Kasten, Titel in Koralle                                                 |
| **Buttons**           | Pillen; auf Pflaume Koralle mit Pflaume-Schrift, auf hell `accent` mit Weiß      |
| **Unterseiten-Intro** | Pflaume mit radialem Licht, kursiver Seitentitel                                 |

## 6. Bewegung

- Nur Hover-Übergänge. Keine Daueranimation.

## 7. Dos und Don'ts

- **Do:** Pflaume und hell konsequent abwechseln – das ist der Rhythmus des Stils.
- **Do:** Koralle nur auf Pflaume für Aktionen; auf hell die dunklere Markenfarbe.
- **Don't:** Koralle als Textfarbe auf hellem Grund (zu wenig Kontrast).
- **Don't:** Weiße Schrift auf Koralle.
- **Don't:** Mehr als ein radiales Licht pro Ecke – sonst wirkt es neblig.

## 8. Tokens als CSS

```css
:root {
    --bg: #fbf6f8;
    --surface: #ffffff;
    --surface-alt: #f6ecf1;
    --surface-inverse: #3a0d2e;
    --surface-deep: #24081c;
    --text: #2a1022;
    --text-soft: #4f3a47;
    --text-muted: #6e5a66;
    --text-inverse: #fbf3f7;
    --text-inverse-muted: #f2c4dc;
    --line: #ecdde5;
    --accent: #8a1665;
    --accent-strong: #6e1150;
    --accent-soft: #f6e0ec;
    --accent-ink: #ffffff;
    --coral: #ff8a65;
    --radius: 16px;
    --radius-lg: 24px;
    --font-display: 'Newsreader Variable', Georgia, serif;
    --font-body: 'Figtree Variable', ui-sans-serif, system-ui, sans-serif;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `./styleguides/plum.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Abschnitte wechseln zwischen tiefer **[dunkle Markenfarbe]** und hellem Blush; auf dunkel ist **[warme Aktionsfarbe]** die Aktion mit dunkler Schrift. Newsreader mit kursiven Akzenten, Figtree für Text, Bogen-Porträts.
