# Styleguide „Hello World“ – Das erste Programm, weißes Papier, ein blinkender Cursor

> **Zweck:** Gestaltungsreferenz für ruhige, klare Seiten mit Entwickler-Bezug: Portfolios von Entwicklern, Coding-Schulen, Dev-Tools, technische Blogs, Konferenzen. Der Stil greift das „Hello, World!“ auf – das erste Programm in jeder Sprache – und nutzt Code als leises grafisches Element auf viel Weißraum.

## Kurzfassung

Fast weißes Papier, schwarze Schrift, eine einzige Akzentfarbe für den blinkenden Cursor und Links. Der Hero zeigt ein kleines Programm, das sich in wechselnden Sprachen abtippt (`print("Hello, World!")`, `echo 'Hello, World!';` …), darunter die „Ausgabe“: die eigentliche Begrüßung. Überschriften in einer eleganten Serif (Instrument Serif, gern kursiv), Code in Space Mono, Fließtext in Inter. Sehr viel Luft, keine Schatten, dezente Bewegung.

## 1. Leitidee

- **Leise Technik:** Code ist Dekoration und Inhalt zugleich – kurze Schnipsel, nie ganze Codeblöcke als Schmuck.
- **Programm → Ausgabe:** Erst der Befehl in Mono, dann das Ergebnis in großer Serif. Dieses Muster kann sich in Abschnittsköpfen wiederholen (`// über mich` → Überschrift).
- **Klarheit durch Weißraum:** Wenige Elemente, großer Seitenrand, große Abschnittsabstände.
- **Eine Farbe:** Der Cursor ist das Markenzeichen. Alles andere ist Schwarz, Grau, Weiß.

**Passt gut für:** Entwickler-Portfolios, Bootcamps, Dev-Tools, Tech-Blogs, Konferenzen. **Passt weniger für:** Zielgruppen ohne Technikbezug (das Code-Motiv wird dann nicht verstanden).

## 2. Farben und Rollen

| Token           | Wert      | Verwendung                     |
|-----------------|-----------|--------------------------------|
| `bg`            | `#FBFBF9` | Papier                         |
| `surface`       | `#FFFFFF` | Karten, Formular               |
| `surface-2`     | `#F1F1ED` | Codezeilen-Hintergrund, Chips  |
| `text`          | `#151515` | Haupttext, Code                |
| `text-soft`     | `#3A3A3A` | Fließtext                      |
| `text-muted`    | `#7A7A76` | Kommentare (`// …`), Metadaten |
| `line`          | `#E4E4DE` | Trennlinien                    |
| `accent`        | `#0A6CFF` | Cursor, Links, Primärbutton    |
| `accent-strong` | `#0050C8` | Hover                          |
| `accent-soft`   | `#E6EFFF` | Markierung, Auswahl            |
| `accent-ink`    | `#FFFFFF` | Text auf `accent`              |

**Kontrast:** `text` auf `bg` 17,6 : 1, Weiß auf `accent` 4,6 : 1. **Achtung:** `accent` als Linkfarbe auf `bg` hat 4,4 : 1 und `text-muted` 4,2 : 1 – beide knapp unter AA für kleinen Text. Empfehlung: Links in `#0A62E6` (5,2 : 1), gedämpfter Text in `#6C6C68` (5,1 : 1). Der Cursor selbst ist Dekoration und darf `#0A6CFF` bleiben.

**Variante:** Die Akzentfarbe ist frei wählbar (z. B. Signalrot für eine Marke) – dann Cursor, Links und Hover-Zustände gemeinsam umstellen und Kontraste neu prüfen.

## 3. Typografie

- **Display:** `Instrument Serif` 400 und 400 kursiv (`@fontsource/instrument-serif`). Große Wörter gern kursiv; `letter-spacing: -0.01em`.
- **Code:** `Space Mono` 400/700 (`@fontsource/space-mono`) für Programmzeilen, Kommentare, Labels.
- **Text:** `Inter` (Variable). Lizenzen: SIL OFL.
- **Größen:** Display `clamp(2.4rem, 1.2rem + 4.4vw, 6.2rem)`, Überschrift `clamp(2.4rem, 1.4rem + 3.2vw, 5rem)`, Lead `clamp(1.1rem, 1rem + 0.45vw, 1.4rem)`.
- **Achtung Lesbarkeit:** Eine dünne Display-Serif ist bei langen Überschriften schwer lesbar. Für Rollen- oder Nutzentitel (eine Zeile, die gelesen werden *muss*) lieber eine kräftige Sans verwenden und die Serif für kurze, schmückende Wörter aufheben.

## 4. Layout und Flächen

- **Seitenrand:** `clamp(1.25rem, 6vw, 8rem)` – bewusst groß.
- **Abschnittsabstand:** `clamp(5rem, 11vw, 10rem)`.
- **Ecken:** `0.2–0.25rem`. **Schatten:** keine. Gliederung durch Linien und Weißraum.
- **Kein fester Max-Width-Container:** Listen und Raster bekommen auf breiten Bildschirmen mehr Spalten; Fließtext selbst bleibt auf ~65 Zeichen.

## 5. Komponenten

| Element                 | Gestaltung                                                                                                                                                                                                                             |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero**                | oben eine Codezeile in Mono mit Kommentar darüber (`// Sprache · Jahr`), die sich Zeichen für Zeichen aufbaut, dann die nächste Sprache; am Ende der Zeile der blinkende Cursor; darunter die Ausgabe: Begrüßung, Titel, Lead, Buttons |
| **Cursor**              | schmaler Balken (`0.55ch × 1.1em`) in `accent`, `animation: caret 1.1s steps(1) infinite`                                                                                                                                              |
| **Abschnittskopf**      | Mono-Kommentar (`// 02 leistungen`) in `text-muted`, darunter Überschrift in Instrument Serif                                                                                                                                          |
| **Sprachen-Zeitleiste** | Liste: Jahr (Mono) · Sprache (Serif) · Ort · die passende „Hello, World!“-Zeile in Mono; Zeilen durch feine Linien getrennt                                                                                                            |
| **Buttons**             | Primär `accent` gefüllt, eckig; Sekundär Textlink mit Pfeil                                                                                                                                                                            |
| **Karten**              | weiß, 1 px Rand, keine Schatten; Hover nur Randfarbe                                                                                                                                                                                   |

## 6. Bewegung

- Der Schreibeffekt: jede Zeile per `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` mit `steps()` aufdecken; die Zeilen wechseln reihum (`animation: hello calc(var(--count) * 3s) infinite`, jede Zeile mit eigenem `animation-delay`).
- Cursor blinkt.
- Mehr nicht. `prefers-reduced-motion`: erste Zeile statisch, kein Blinken.

## 7. Dos und Don'ts

- **Do:** Echte, korrekte „Hello, World!“-Zeilen je Sprache verwenden – Entwickler merken Fehler sofort.
- **Do:** Code als Akzent; die Seite bleibt eine normale, gut lesbare Seite.
- **Don't:** Ganze Abschnitte als Terminal oder IDE verkleiden.
- **Don't:** Zweite Akzentfarbe einführen.
- **Don't:** Lange Überschriften in dünner Serif.

## 8. Tokens als CSS

```css
:root {
    --bg: #fbfbf9;
    --surface: #ffffff;
    --surface-2: #f1f1ed;
    --text: #151515;
    --text-soft: #3a3a3a;
    --text-muted: #6c6c68;
    --line: #e4e4de;
    --accent: #0a6cff;
    --accent-link: #0a62e6;
    --accent-strong: #0050c8;
    --accent-soft: #e6efff;
    --accent-ink: #ffffff;
    --radius: 0.25rem;
    --shadow: none;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Instrument Serif', Georgia, serif;
    --font-mono: 'Space Mono', ui-monospace, Menlo, monospace;
    color-scheme: light;
}
```

(`--text-muted` und `--accent-link` sind gegenüber dem ursprünglichen Entwurf für AA abgedunkelt.)

## Kompakter Prompt

> Verwende `./styleguides/hello-world.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Hero mit sich abtippenden „Hello, World!“-Zeilen in **[Sprachen]** und der Begrüßung **[Claim]** als Ausgabe. Viel Weißraum, eine Akzentfarbe **[Farbe]** für Cursor und Links.
