# Styleguide „Narf“ – Laborbuch, Kuli-Blau, Textmarker und ein Masterplan

> **Zweck:** Gestaltungsreferenz für humorvolle, persönliche Seiten mit Nerd-Charme: Entwickler- und Maker-Portfolios, Hackspaces, Side-Projects, Spiele-Communities, Workshop- und Event-Seiten. Der Stil sieht aus wie ein Laborbuch voller Pläne: Karopapier, Kugelschreiber-Blau, roter Filzstift, gelber Textmarker, Klebezettel und Klebeband. Würze kommt aus Internet-Slang der frühen Netzkultur (*narf*, *nuff*, *rofl*, *lol*) – sparsam, als Augenzwinkern.

## Kurzfassung

Kariertes Papier, Fließtext in Kuli-Dunkelblau, handschriftliche Überschriften in Caveat. Die wichtigste Aussage ist gelb angestrichen, ein Wort ist rot eingekreist. Das Foto ist mit Klebeband eingeklebt, daneben kleben schräg zwei Zettel. Ein „Masterplan“ in nummerierten Schritten erklärt das Angebot. Ein verstecktes Gimmick (z. B. ein Knopf, der einen kleinen Hubschrauber über die Seite fliegen lässt) belohnt Neugierige. Der eigentliche Inhalt bleibt sachlich und gut lesbar.

## 1. Leitidee

- **Ein Plan, der funktioniert:** Die Seite inszeniert einen augenzwinkernden „Plan für heute“ – und liefert dann sehr konkret, was angeboten wird.
- **Handschrift als Akzent:** Handschrift nur für Überschriften, Randnotizen und Zettel. Fließtext, Listen und Formulare in einer runden, gut lesbaren Sans.
- **Slang als Gewürz:** Ein Ausruf im Hero, einer im Ladezustand des Formulars, einer auf der 404-Seite, ein kleines Glossar im Footer. Nicht mehr.
- **Keine Figuren:** Die Wörter stammen aus Cartoons und Chats der 90er; die Seite zeigt aber keine Figuren, Logos oder Szenen daraus.

**Passt gut für:** persönliche Seiten, Maker, Hackspaces, Spiele, Events mit Humor. **Passt nicht für:** konservative Branchen, ernste Themen, Bewerbungen in sehr formellen Umfeldern.

## 2. Farben und Rollen

| Token                                          | Wert                                          | Verwendung                                               |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------|
| `bg`                                           | `#FDFCF6`                                     | Papier                                                   |
| `surface`                                      | `#FFFFFF`                                     | Karten, Formular                                         |
| `surface-2`                                    | `#F3F1E6`                                     | abgesetzte Flächen                                       |
| `text`                                         | `#1D2B4F`                                     | Kuli-Blau: Haupttext                                     |
| `text-soft`                                    | `#34406A`                                     | Fließtext                                                |
| `text-muted`                                   | `#6A7394`                                     | Randnotizen, Metadaten                                   |
| `line`                                         | `#C9D6EE`                                     | Karolinien, Ränder                                       |
| `accent`                                       | `#E63946`                                     | roter Filzstift: Kreise, Unterstreichungen, Primärbutton |
| `accent-strong`                                | `#C22834`                                     | Hover                                                    |
| `accent-soft`                                  | `#FDE2E4`                                     | Hinweise                                                 |
| `marker`                                       | `#FFF176`                                     | Textmarker                                               |
| `sticky-yellow` / `-pink` / `-green` / `-blue` | `#FFF59D` / `#F8BBD0` / `#C5E1A5` / `#B3E5FC` | Klebezettel                                              |
| `tape`                                         | `rgb(255 255 255 / 0.55)`                     | Klebeband                                                |

**Kontrast:** `text` auf `bg` 13,5 : 1, `text-muted` 4,5 : 1, `text` auf `marker` 12,0 : 1. **Achtung:** `accent` als Textfarbe auf Papier hat 4,1 : 1, Weiß auf `accent` 4,2 : 1 – beides knapp unter AA für kleinen Text. Für Buttons und rote Links `#D62839` verwenden (Weiß darauf 5,0 : 1, auf Papier 4,8 : 1); das hellere Rot bleibt für Kreise, Pfeile und Unterstreichungen.

## 3. Typografie

- **Handschrift:** `Caveat` (Variable), `@fontsource-variable/caveat`, Fallback `Comic Sans MS`, `cursive`. Groß setzen: Display `clamp(3rem, 1.6rem + 5vw, 7.5rem)`, Überschrift `clamp(2.8rem, 1.8rem + 3.4vw, 5.5rem)`, Gewicht 600–700.
- **Text:** `Nunito` (Variable), rund und freundlich; Lead `clamp(1.1rem, 1rem + 0.45vw, 1.4rem)`. Lizenzen: SIL OFL.
- **Textmarker:** `background: linear-gradient(180deg, transparent 55%, var(--marker) 55%, var(--marker) 90%, transparent 90%)` auf einem `<span>` (nicht auf Blockelementen, sonst wird die ganze Zeile breit markiert; ggf. `width: fit-content`).
- **Kreis:** ein Wort mit `border: 3px solid var(--accent)`, `border-radius: 50%`, leicht gedreht.
- **Wellenlinie:** `text-decoration: underline wavy var(--accent)` für Ausrufe.

## 4. Layout und Flächen

- **Karopapier:** `linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)` mit `background-size: 24px 24px`.
- **Verdrehungen:** Zettel −6° bis +7°, Foto ±3°, Karten ±0.5–1°.
- **Klebeband:** halbtransparente Streifen (`tape`) schräg über Fotoecken, leicht unscharf (`backdrop-filter: blur(1px)`).
- **Schatten:** weich und klein `2px 3px 10px rgb(29 43 79 / 0.12)` – wie Papier auf Papier.
- **Ecken:** `0.2–0.3rem`.

## 5. Komponenten

| Element                      | Gestaltung                                                                                                                                                                                            |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Hero als Notizbuchseite**  | Label oben („Laborbuch · Seite 1“), handschriftlicher Titel mit Textmarker auf dem Kernsatz, ein Wort rot eingekreist; rechts eingeklebtes Foto mit Klebeband und zwei schräge Zettel                 |
| **Masterplan**               | Kasten mit Titel „Der Plan“ und nummerierten Schritten 1–6 in Handschrift, der letzte Schritt mit Augenzwinkern                                                                                       |
| **Randnotiz**                | kleine Handschrift in `text-muted` mit Pfeil (SVG, Strich in `accent`)                                                                                                                                |
| **Karten**                   | weiß, 2 px Rand in Kuli-Blau, leicht gedreht, Hover gerade                                                                                                                                            |
| **Buttons**                  | 2 px Rand in Kuli-Blau, Primär rot gefüllt (`#D62839`), leicht gedreht                                                                                                                                |
| **Easter Egg**               | ein unauffälliger Knopf (z. B. „ROFL“) startet eine kleine Animation über die Seite (Hubschrauber mit Rotor in `steps(1)`, Flug 7 s); per Custom Event entkoppelt; mehrere Flüge gleichzeitig möglich |
| **Footer-Glossar**           | kleine Wortliste mit Bedeutungen (*narf* – Ausruf; *nuff* – genug gesagt; *rofl*; *lol*)                                                                                                              |
| **Leer- und Fehlerzustände** | kurze Slang-Zeile („nuff.“ auf der 404, „Narf …“ beim Senden)                                                                                                                                         |

## 6. Bewegung

- Rotor (`0.16s steps(1) infinite`) und Flug (`7s linear forwards`) nur nach Klick.
- Zettel heben sich beim Hover etwas an.
- `prefers-reduced-motion`: Easter Egg zeigt eine statische Meldung statt Flug.

## 7. Dos und Don'ts

- **Do:** Humor in Mikrotexten, Inhalt sachlich.
- **Do:** Textmarker nur auf einen Kernsatz pro Abschnitt.
- **Don't:** Absätze in Handschrift.
- **Don't:** Cartoonfiguren, Logos oder Zitate aus Serien.
- **Don't:** Slang in jeder Überschrift – dann wird es anstrengend.

## 8. Tokens als CSS

```css
:root {
    --bg: #fdfcf6;
    --surface: #ffffff;
    --surface-2: #f3f1e6;
    --text: #1d2b4f;
    --text-soft: #34406a;
    --text-muted: #6a7394;
    --line: #c9d6ee;
    --accent: #e63946;
    --accent-button: #d62839;
    --accent-strong: #c22834;
    --accent-soft: #fde2e4;
    --accent-ink: #ffffff;
    --marker: #fff176;
    --sticky-yellow: #fff59d;
    --sticky-pink: #f8bbd0;
    --sticky-green: #c5e1a5;
    --sticky-blue: #b3e5fc;
    --tape: rgb(255 255 255 / 0.55);
    --radius: 0.3rem;
    --shadow: 2px 3px 10px rgb(29 43 79 / 0.12);
    --font-sans: 'Nunito Variable', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Caveat Variable', 'Comic Sans MS', cursive;
    color-scheme: light;
}
```

## Kompakter Prompt

> Verwende `/Users/mstarker/Web/ai/styleguides/narf.md` als Gestaltungsreferenz. Das Projekt ist **[Website]** für **[Zielgruppe]**. Hero als Laborbuchseite mit Masterplan in **[Schritte]**, Textmarker auf **[Kernsatz]**, Foto eingeklebt. Humor nur in Mikrotexten; keine Cartoonfiguren.
