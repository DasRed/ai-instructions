---
title: Skills nutzen
description: Welche Claude-Skills es in ai-instructions gibt und wie du sie in Claude Code oder der Claude-App installierst und aufrufst.
order: 50
slug: skills
section: Skills
---

Im Ordner [`skills/`](https://github.com/DasRed/ai-instructions/tree/main/skills) liegen Skills für Claude. Ein Skill
ist eine `SKILL.md` mit Name, Beschreibung und Anweisungen. Claude lädt ihn, wenn eine Anfrage zur Beschreibung passt,
und arbeitet den Ablauf dann Schritt für Schritt ab.

## Vorhandene Skills

| Skill | Wofür |
|-------|-------|
| [new-website](new-website.md) | neue Webseite von den Rahmenbedingungen bis zum fertigen Repo |
| [new-mcp](new-mcp.md) | neuer MCP-Server mit Docker, CI, MCP Registry und Doku |

## Installieren

In Claude Code legst du jeden Skill als persönlichen Skill ab, hier am Beispiel `new-mcp`:

```bash
mkdir -p ~/.claude/skills/new-mcp
cp ./skills/new-mcp/SKILL.md ~/.claude/skills/new-mcp/SKILL.md
```

In der Claude-App lädst du die `SKILL.md` als eigenen Skill hoch. Die Datei im Repository bleibt die Quelle: Änderst
du sie, aktualisierst du danach die Kopie in Claude.

## Aufrufen

Ein Skill startet, wenn deine Anfrage zu seiner Beschreibung passt. Beispiele für passende Anfragen stehen auf
der Seite des jeweiligen Skills.
