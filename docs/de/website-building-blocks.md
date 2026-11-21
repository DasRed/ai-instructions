---
title: Webseiten-Bausteine
description: Doku-Vertrag, Seitengerüste, Projektdaten und Release-Ablauf, mit denen Projekt-Repos ihre Doku auf eine Webseite bringen.
order: 40
slug: webseiten-bausteine
section: Dokumente
---

Der Ordner
[`website-marco-starker.de/`](https://github.com/DasRed/ai-instructions/tree/main/website-marco-starker.de) regelt,
wie Projekt-Repos ihre Doku ablegen und wie eine Webseite sie einbindet. Vorbild ist marco-starker.de; dieselben Regeln
gelten für jede Produktseite, die Doku aus Repos zeigen soll. Auch die Doku, die du gerade liest, folgt ihnen.

## Dateien

| Datei                      | Inhalt                                                                  | Für          |
|----------------------------|-------------------------------------------------------------------------|--------------|
| `docs-contract.md`         | Doku-Vertrag: Ablage, Frontmatter, Markdown-Regeln, README              | Projekt-Repo |
| `docs-templates.md`        | Standardseiten je Projektart, Gerüst einer Seite in DE und EN           | Projekt-Repo |
| `public-repo-checklist.md` | Was vor und beim Öffentlichmachen eines Repos zu prüfen ist             | Projekt-Repo |
| `project-schema.md`        | Datenmodell der Projekte auf der Webseite, ein Projekt aufnehmen        | Webseite     |
| `docs-integration.md`      | Doku beim Build laden, Pfade, Darstellung, SEO, Konfiguration, Tests    | Webseite     |
| `docs-release.md`          | Doku-Änderung → leerer `docs`-Commit → Release der Webseite             | beide        |

## Das Prinzip

1. Jedes öffentliche Repo legt seine Doku unter `docs/de` und `docs/en` ab: gleiche Dateinamen in beiden Sprachen,
   Frontmatter mit `title`, `description` und `order`, GitHub-Markdown ohne HTML.
2. Ein Push auf `main`, der `docs/**` ändert, startet den Workflow `docs.yml`. Er prüft die Doku und legt im Repo der
   Webseite einen leeren Commit `docs(<slug>): sync documentation` an.
3. Dieser Commit löst per semantic-release ein Patch-Release der Webseite aus. Der Build holt die Doku aller Projekte
   von GitHub, prüft sie und baut sie ins Docker-Image.
4. Zur Laufzeit liest die Webseite nichts mehr von GitHub. Jedes Image ist ein vollständiger, reproduzierbarer Stand.

```text
docs/
    de/
        index.md
        installation.md
    en/
        index.md
        installation.md
    assets/
        screenshot.webp
```

## Seitensätze je Projektart

`docs-templates.md` legt fest, welche Seiten ein Projekt bekommt, damit sich alle Projekte gleich anfühlen:

| Projektart                    | Seiten                                                          |
|-------------------------------|-----------------------------------------------------------------|
| MCP-Server                    | Überblick, Installation, Konfiguration, In Claude einbinden, Tools, Sicherheit |
| npm-Paket                     | Überblick, Installation, Verwendung, Optionen, Migration        |
| GitHub Workflows und Actions  | Überblick, eine Seite je Workflow oder Action                   |
| Minecraft-Mod                 | Überblick, Installation, Konfiguration, Verwendung              |
| Sammlung, Guidelines          | Überblick, eine Seite je Dokument                               |
| Experiment                    | nur Überblick: Idee, Vorgehen, Ergebnis                         |

## Verwenden

Neue Repos bekommen die Doku am einfachsten über den [Skill „neue-webseite“](skills.md) oder mit einem direkten
Auftrag an den Agenten:

```markdown
Add documentation to this repository following ./website-marco-starker.de/docs-contract.md
and the page set for "npm-Paket" in docs-templates.md. Add docs.yml as described in docs-release.md.
```
