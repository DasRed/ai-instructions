---
title: Using skills
description: Which Claude skills ai-instructions contains and how to install and invoke them as personal skills in Claude Code or in the Claude app.
order: 50
slug: skills
section: Skills
---

The folder [`skills/`](https://github.com/DasRed/ai-instructions/tree/main/skills) holds skills for Claude. A skill is
a `SKILL.md` with a name, a description and instructions. Claude loads it when a request matches the description and
then works through the steps.

## Available skills

| Skill | Purpose |
|-------|---------|
| [new-website](new-website.md) | new website from the requirements to the finished repository |
| [new-mcp](new-mcp.md) | new MCP server with Docker, CI, MCP Registry and docs |

## Install

In Claude Code, store each skill as a personal skill, here using `new-mcp` as an example:

```bash
mkdir -p ~/.claude/skills/new-mcp
cp ./skills/new-mcp/SKILL.md ~/.claude/skills/new-mcp/SKILL.md
```

In the Claude app, upload the `SKILL.md` as a custom skill. The file in the repository stays the source: if you change
it, update the copy in Claude afterwards.

## Invoke

A skill starts when your request matches its description. Example requests are on the page of each skill.
