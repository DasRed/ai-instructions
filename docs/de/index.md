---
title: Überblick
description: Sammlung von Regeln und Vorlagen für KI-Agenten – Code-Guidelines, IntelliJ-Code-Style, Design-Styleguides, Webseiten-Bausteine und Skills.
order: 0
section: Einstieg
---

`ai-instructions` sammelt die Anweisungen, die ich KI-Agenten wie Claude bei der Arbeit an meinen Projekten mitgebe:
wie Code aussehen soll, wie eine neue Webseite gestaltet und aufgebaut wird und wie Projekte ihre Doku für meine
Webseite ablegen. Alles ist Markdown, damit Menschen es lesen und Agenten es direkt verwenden können.

## Inhalt

| Ordner oder Datei            | Inhalt                                                                  | Doku                                              |
|------------------------------|-------------------------------------------------------------------------|---------------------------------------------------|
| `CodeGuidlines.md`           | Regeln für TypeScript, Node-Projekte, Services, SDKs und Übersetzungen | [Code-Guidelines](code-guidelines.md)             |
| `intellij-code-styles.xml`   | Code-Style-Schema „Marco“ für IntelliJ und WebStorm                     | [IntelliJ-Code-Style](intellij-code-style.md)     |
| `styleguides/`               | 15 Design-Styleguides für Webseiten, von ruhig bis verspielt            | [Styleguides](styleguides.md)                     |
| `website-marco-starker.de/`  | Doku-Vertrag, Projektdaten und Release-Ablauf für Projekt-Doku          | [Webseiten-Bausteine](website-building-blocks.md) |
| `skills/`                    | Claude-Skills, die diese Regeln zu einem Ablauf verbinden               | [Skills](skills.md)                               |

## So nutzt du die Sammlung

Klon das Repository an einen festen Ort und verweise in deinen Projekten darauf, zum Beispiel in einer `CLAUDE.md`
oder `AGENTS.md`:

```bash
git clone https://github.com/DasRed/ai-instructions.git .
```

```markdown
## Coding rules

Follow ./CodeGuidlines.md. Formatting follows ./intellij-code-styles.xml.
```

Der Agent liest die Dateien dann selbst, wenn er sie braucht. Die Styleguides gibst du ihm gezielt mit, wenn eine
Seite gestaltet wird.

> [!NOTE]
> Die Dokumente sind auf Deutsch geschrieben und auf meine Projekte zugeschnitten: Pfade wie `.`, meine
> Server und mein npm-Scope `@dasred` tauchen darin auf. Für eigene Projekte nimm sie als Vorlage und pass diese
> Stellen an.

## Status

Aktiv gepflegt seit November 2026. Die Regeln ändern sich mit meinen Projekten; maßgeblich ist immer der Stand auf
`main`.
