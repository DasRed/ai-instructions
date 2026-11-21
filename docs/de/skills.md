---
title: Skills
description: Claude-Skills, die Guidelines, Styleguides und Webseiten-Bausteine zu einem festen Ablauf verbinden, und wie du sie installierst.
order: 50
slug: skills
section: Dokumente
---

Im Ordner [`skills/`](https://github.com/DasRed/ai-instructions/tree/main/skills) liegen Skills für Claude. Ein Skill
ist eine `SKILL.md` mit Name, Beschreibung und Anweisungen. Claude lädt ihn, wenn eine Anfrage zur Beschreibung passt,
und arbeitet den Ablauf dann Schritt für Schritt ab.

## neue-webseite

[`skills/neue-webseite/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/neue-webseite/SKILL.md)
führt durch den Bau einer neuen Webseite, von der ersten Frage bis zum fertigen Repo:

1. **Kontext sammeln:** Guidelines, Styleguides, Webseiten-Bausteine und ein Referenz-Repo lesen, Domains, freie Ports
   und Proxy-Hosts über die verbundenen Connectoren prüfen.
2. **Rahmenbedingungen abfragen:** in mehreren Runden zu Projekt und Ziel, Design und Styleguide, Domain, Sprachen und
   Rechtlichem, Technik, Betrieb und bei Kundenseiten zum Geschäftlichen. Der übliche Standard steht jeweils als
   empfohlene Antwort zuerst.
3. **Steckbrief freigeben lassen:** Alle Entscheidungen als kurzer Projektsteckbrief. Vorher legt Claude keine Datei an.
4. **Umsetzen:** Next.js mit TypeScript nach den [Code-Guidelines](code-guidelines.md), Design nach dem gewählten
   [Styleguide](styleguides.md), Docker und CI, auf Wunsch Projekt-Doku nach den
   [Webseiten-Bausteinen](website-building-blocks.md).

Infrastruktur wie DNS, Proxy und Server richtet der Skill nicht selbst ein, er liefert nur Vorschläge. Commits und
Pushes gibt es nur mit ausdrücklichem OK.

> [!NOTE]
> Der Skill ist auf meine Umgebung zugeschnitten: meine Ordner, Server, Connectoren und Preise. Für eigene Projekte
> nimm ihn als Vorlage und ersetze diese Stellen.

## Installieren

In Claude Code legst du den Skill als persönlichen Skill ab:

```bash
mkdir -p ~/.claude/skills/neue-webseite
cp ./skills/neue-webseite/SKILL.md ~/.claude/skills/neue-webseite/SKILL.md
```

In der Claude-App lädst du die `SKILL.md` als eigenen Skill hoch. Die Datei im Repository bleibt die Quelle: Änderst
du sie, aktualisierst du danach die Kopie in Claude.

## Aufrufen

Der Skill startet, wenn du Claude sagst, dass du eine neue Webseite bauen willst, etwa:

```text
Ich möchte eine neue Webseite für den Tennisverein bauen.
```
