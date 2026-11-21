---
title: Styleguides
description: Fünfzehn Design-Styleguides für Webseiten, von ruhig bis verspielt, und wie du sie einem Agenten mitgibst.
order: 30
slug: styleguides
section: Dokumente
---

Im Ordner [`styleguides/`](https://github.com/DasRed/ai-instructions/tree/main/styleguides) liegt je Gestaltungsstil
eine Datei. Ein Styleguide beschreibt Farben und ihre Rollen, Typografie, Layout, Komponenten, Bewegung und eine
Prüfliste – so genau, dass ein Agent daraus eine Seite bauen kann, ohne ein Vorbild sehen zu müssen.

## Übersicht

| Styleguide    | Datei            | Stil                                                    | Passt zu                                                   |
|---------------|------------------|---------------------------------------------------------|------------------------------------------------------------|
| Civic         | `civic.md`       | warme Cremeflächen, Serifenschlagzeilen, ein Akzent     | serviceorientierte Seiten, Standard für neue Seiten        |
| Bento         | `bento.md`       | Kachelraster in Petrol, hell und dunkel                 | Portfolios, Produktseiten, Dashboards                      |
| Blockcraft    | `blockcraft.md`  | Voxel-Welt aus Blöcken, Pixelschrift                    | Game-Jams, Coding-Kurse, Spiele-Communities                |
| Blueprint     | `blueprint.md`   | Zeichenpapier, Blaupausen, Bleistiftgelb                | Ingenieurbüros, Architektur, technische Beratung           |
| Comic         | `comic.md`       | Zeitungspapier, Tusche, Rasterpunkte                    | Events, Kinder- und Jugendangebote, Produktlaunches        |
| Cosmos        | `cosmos.md`      | tiefer Weltraum, Violett und Cyan, Glasflächen          | Tech-Startups, KI-Produkte, Astronomie                     |
| DasRed        | `dasred.md`      | roter Himmel, Purpurnacht, Gold                         | Marken, Teams, Streamer mit roter Identität                |
| Editorial     | `editorial.md`   | Magazin auf warmem Papier                               | Autoren, Beratungen, Kultur, lange Texte                   |
| Hello World   | `hello-world.md` | weißes Papier, blinkender Cursor, Code als Schmuck      | Entwickler-Portfolios, Dev-Tools, technische Blogs         |
| Narf          | `narf.md`        | Laborbuch, Kuli-Blau, Textmarker                        | Maker-Portfolios, Hackspaces, Side-Projects                |
| Philipp       | `philipp.md`     | Code-Bento in Signalrot                                 | Freelancer, Agenturen, Dev-Tools mit kräftiger Markenfarbe |
| Retro 90s     | `retro90s.md`    | Homepage von 1996                                       | Jubiläen, Retro-Events, Spaßseiten                         |
| Studio        | `studio.md`      | Schweizer Raster, Schwarz und Signalorange              | Agenturen, Studios, Beratungen                             |
| Superhero     | `superhero.md`   | Comic-Held in Himmelblau, Rot und Sonnengelb            | Freelancer, Notfall-Services, Kampagnen                    |
| Terminal      | `terminal.md`    | dunkle Shell, Phosphorgrün und Bernstein                | Dev-Tools, CLIs, Open Source, DevOps                       |

## Aufbau eines Styleguides

Die meisten Styleguides folgen demselben Gerüst:

| Abschnitt          | Inhalt                                                              |
|--------------------|---------------------------------------------------------------------|
| Zweck, Kurzfassung | wofür der Stil gedacht ist und wie er in einem Absatz aussieht      |
| Leitidee           | die Grundgedanken, an denen sich jede Entscheidung orientiert       |
| Farben und Rollen  | jede Farbe mit Wert und Aufgabe (Fläche, Text, Aktion, Status …)    |
| Typografie         | Schriften, Größen, Gewichte                                         |
| Layout, Komponenten, Bewegung | Raster, Flächen, typische Bausteine, Animationen         |
| Dos und Don'ts     | Prüfliste für das fertige Ergebnis                                  |
| Tokens als CSS     | Farbrollen als CSS-Variablen zum Übernehmen                         |
| Kompakter Prompt   | der Stil in wenigen Sätzen, direkt für einen Agenten                |

Civic weicht davon ab: Statt Tokens und kompaktem Prompt hat es einen Abschnitt „Anwendung auf ein anderes Projekt“
mit eigener Prüfliste.

## Verwenden

Gib dem Agenten den ganzen Styleguide und sag, was vom Projekt kommt:

```markdown
Design the landing page following ./styleguides/bento.md.
Keep layout, typography and components, but replace the petrol accent with our brand colour #1F6FEB.
Check the result against section "Dos und Don'ts" before you finish.
```

Für einen schnellen Entwurf reicht oft der Abschnitt „Kompakter Prompt“ am Ende der Datei.

> [!IMPORTANT]
> Einige Styleguides lehnen sich an bekannte Motive an (Comics, Block-Spiele, Superhelden). Übernommen werden nur
> Prinzipien und Stimmung, nie Figuren, Logos, Wappen oder andere geschützte Motive.
