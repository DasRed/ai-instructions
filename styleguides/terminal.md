# Styleguide „Terminal“ – Dunkle Shell, Phosphorgrün und Bernstein

> **Zweck:** Gestaltungsreferenz für Seiten mit klarer Entwickler-Zielgruppe: Dev-Tools, CLIs, Open-Source-Projekte, DevOps- und Security-Dienstleister, Entwickler-Portfolios, Hackathons. Der Stil sieht aus wie ein Terminal bzw. eine IDE im Dunkelmodus: Fenster mit Titelleiste, Prompt, getippte Befehle, Syntax-Highlighting und eine Statuszeile.

## Kurzfassung

Fast schwarzer Grund mit einem Hauch Grün, Text in hellem Grau-Grün, Akzente in Phosphorgrün, Bernstein für Zeitangaben und Links, Cyan und Magenta für Syntax. Der Hero ist ein Terminalfenster: Befehle werden getippt, die Antworten erscheinen darunter, am Ende blinkt der Cursor. Fähigkeiten stehen als JSON-Datei mit Syntax-Highlighting da. Unten eine Statuszeile wie in einem Editor. Überschriften in JetBrains Mono, Fließtext in IBM Plex Sans.

## 1. Leitidee

- **Befehl → Antwort:** Jede Aussage ist die Ausgabe eines Befehls (`whoami`, `cat about.md`, `ls projects/`). Das erzählt die Seite in der Sprache der Zielgruppe.
- **Code als Grafik:** Kleine, echte Code-Schnipsel und blinkende Cursor sind die stärksten Gestaltungsmittel – sie funktionieren auch außerhalb des dunklen Looks als Akzent in hellen Stilen.
- **Lesbarkeit zuerst:** Fließtext in einer Proportionalschrift; Mono nur für Überschriften, Befehle, Code, Labels.
- **Ehrliche Befehle:** Befehle und Syntax müssen korrekt sein.

**Passt gut für:** Dev-Tools, CLIs, Open Source, DevOps, Security, technische Portfolios. **Passt weniger für:** Zielgruppen ohne Technikbezug. Die Farbwelt (Grün auf Schwarz) ist Geschmackssache und wirkt schnell klischeehaft – wer nur Cursor und Code-Schnipsel möchte, nimmt `hello-world.md` oder `philipp.md`.

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                                          |
|-----------------|-----------|-----------------------------------------------------|
| `bg`            | `#0A0E0C` | Grund (mit grünlichem Lichtschein oben rechts)      |
| `surface`       | `#101613` | Fenster, Karten                                     |
| `surface-2`     | `#17201B` | Titelleisten, Chips                                 |
| `text`          | `#DBE7DF` | Schrift                                             |
| `text-soft`     | `#A9BCB0` | Fließtext                                           |
| `text-muted`    | `#6F8478` | Kommentare, Metadaten                               |
| `line`          | `#223029` | Ränder                                              |
| `accent`        | `#4ADE80` | Phosphorgrün: Prompt, Cursor, Primärbutton, Strings |
| `accent-strong` | `#86EFAC` | Hover                                               |
| `accent-soft`   | `#12301F` | Hinterlegung von Erfolgsmeldungen                   |
| `accent-ink`    | `#04140B` | Text auf Grün                                       |
| `amber`         | `#FBBF24` | Zeiträume, Links, Icons, „OK“-Zeilen                |
| `cyan`          | `#67E8F9` | Syntax: Zahlen, Typen                               |
| `magenta`       | `#F0ABFC` | Syntax: JSON-Schlüssel                              |
| `danger`        | `#F87171` | Fehler, roter Fensterpunkt                          |

**Kontrast:** `text` auf `bg` 15,3 : 1, `text-muted` 4,9 : 1, `accent` 11,1 : 1, `amber` 11,6 : 1, `cyan` 13,4 : 1, `accent-ink` auf `accent` 10,9 : 1. Alle Paare bestehen AA.

## 3. Typografie

- **Mono:** `JetBrains Mono` (Variable), `@fontsource-variable/jetbrains-mono` – Überschriften, Befehle, Code, Labels.
- **Text:** `IBM Plex Sans` (Variable), `@fontsource-variable/ibm-plex-sans`. Lizenzen: SIL OFL.
- **Größen:** Display `clamp(2rem, 1.2rem + 3vw, 4.5rem)`, Überschrift `clamp(1.6rem, 1.2rem + 1.6vw, 2.8rem)`, Lead `clamp(1.05rem, 1rem + 0.3vw, 1.3rem)`. Mono läuft breit – Größen eine Stufe kleiner als bei Sans-Stilen.
- **Leuchten:** große Überschriften optional `text-shadow: 0 0 28px rgb(74 222 128 / 0.25)`.
- **Abschnittsköpfe** als Befehl: `$ ls ./projects` in Grün, darunter die Überschrift.

## 4. Layout und Flächen

- **Hintergrund:** `radial-gradient(60rem 30rem at 85% -10%, rgb(74 222 128 / 0.07), transparent 60%)` über `bg`.
- **Fenster:** `surface`, Radius `0.5rem`, Schatten `0 0 0 1px var(--line), 0 20px 50px -30px rgb(0 0 0 / 0.9)`; Titelleiste mit drei Punkten (Rot, Bernstein, Grün) und Dateiname.
- **Scanlines** (optional, nur auf Bildern): `repeating-linear-gradient(to bottom, rgb(0 0 0 / 0.18) 0 1px, transparent 1px 3px)`.
- **Header:** niedrig (`3.25rem`), wie eine Tab-Leiste.
- **Abstände:** Seitenrand `clamp(1.25rem, 4vw, 4rem)`, Abschnittsabstand `clamp(4.5rem, 9vw, 8rem)`.

## 5. Komponenten

| Element                  | Gestaltung                                                                                                                                                                                                                 |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero-Terminal**        | Fenster mit Titelleiste; Zeilen: Prompt + Befehl (grün), Ausgabe (Text), Kommentar (`# …`, gedämpft), Erfolgszeile (bernstein); Titel und Lead sind Ausgaben; Buttons als letzte Zeile; Porträt in eigenem kleinen Fenster |
| **Cursor**               | grüner Block, `blink 1.1s steps(1) infinite`                                                                                                                                                                               |
| **Skill-JSON**           | Code-Fenster `skills.json`; Schlüssel Magenta, Strings Grün, Satzzeichen gedämpft; Schlüssel bleiben Englisch (es ist Code)                                                                                                |
| **Karten**               | Fenster ohne Titelleiste, Hover-Rand Grün                                                                                                                                                                                  |
| **Werdegang**            | wie `git log`: Zeitraum in Bernstein, Rolle, Firma, Stichpunkte                                                                                                                                                            |
| **Buttons**              | Primär grün gefüllt mit dunkler Schrift; Sekundär 2 px grüner Rand                                                                                                                                                         |
| **Statuszeile (Footer)** | Leiste wie in einem Editor: Modus, Branch, Sprache, Zeile/Spalte, Links rechts                                                                                                                                             |

## 6. Bewegung

- Zeilen erscheinen nacheinander wie getippt (`clip-path: inset(0 100% 0 0)` → `inset(0)`, `steps(12)`, 0.45 s, gestaffelt).
- Cursor blinkt.
- `prefers-reduced-motion`: alles sofort sichtbar, Cursor statisch.

## 7. Dos und Don'ts

- **Do:** Echte, korrekte Befehle und gültiges JSON.
- **Do:** Fließtext in Plex Sans – reine Mono-Seiten ermüden.
- **Don't:** „Matrix“-Regen, Hacker-Klischees, grüne Schrift für lange Absätze.
- **Don't:** Mehr als ein getipptes Fenster pro Seite.

## 8. Tokens als CSS

```css
:root {
    --bg: #0a0e0c;
    --surface: #101613;
    --surface-2: #17201b;
    --text: #dbe7df;
    --text-soft: #a9bcb0;
    --text-muted: #6f8478;
    --line: #223029;
    --accent: #4ade80;
    --accent-strong: #86efac;
    --accent-soft: #12301f;
    --accent-ink: #04140b;
    --amber: #fbbf24;
    --cyan: #67e8f9;
    --magenta: #f0abfc;
    --danger: #f87171;
    --radius: 0.5rem;
    --font-sans: 'IBM Plex Sans Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'JetBrains Mono Variable', ui-monospace, monospace;
    --font-mono: 'JetBrains Mono Variable', ui-monospace, 'SF Mono', Menlo, monospace;
    color-scheme: dark;
}
```

## Kompakter Prompt

> Verwende `./styleguides/terminal.md` als Gestaltungsreferenz. Das Projekt ist **[Website/Tool]** für **[Zielgruppe]**. Hero als Terminal mit den Befehlen **[Befehle]** und ihren Ausgaben, Fähigkeiten als `skills.json`, Footer als Statuszeile.
