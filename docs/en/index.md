---
title: Overview
description: Collection of rules and templates for AI agents – code guidelines, IntelliJ code style, design styleguides, website building blocks and skills.
order: 0
section: Getting started
---

`ai-instructions` collects the instructions I give AI agents like Claude when they work on my projects: what code
should look like, how a new website is designed and built, and how projects store their documentation for my website.
Everything is Markdown, so people can read it and agents can use it directly.

## Contents

| Folder or file              | Contents                                                                 | Docs                                              |
|-----------------------------|--------------------------------------------------------------------------|---------------------------------------------------|
| `CodeGuidlines.md`          | Rules for TypeScript, Node projects, services, SDKs and translations    | [Code guidelines](code-guidelines.md)             |
| `intellij-code-styles.xml`  | Code style scheme "Marco" for IntelliJ and WebStorm                      | [IntelliJ code style](intellij-code-style.md)     |
| `styleguides/`              | 15 design styleguides for websites, from calm to playful                 | [Styleguides](styleguides.md)                     |
| `website-marco-starker.de/` | Docs contract, project data and release flow for project documentation   | [Website building blocks](website-building-blocks.md) |
| `skills/`                   | Claude skills that combine these rules into a workflow                   | [Skills](skills.md)                               |

## How to use the collection

Clone the repository to a fixed location and reference it in your projects, e.g. in a `CLAUDE.md` or `AGENTS.md`:

```bash
git clone https://github.com/DasRed/ai-instructions.git .
```

```markdown
## Coding rules

Follow ./CodeGuidlines.md. Formatting follows ./intellij-code-styles.xml.
```

The agent then reads the files itself when it needs them. Hand it a styleguide specifically when a page is being
designed.

> [!NOTE]
> The documents are written in German and tailored to my projects: paths like `.`, my servers and my npm scope
> `@dasred` appear in them. For your own projects, use them as a template and adjust those parts.

## Status

Actively maintained since November 2026. The rules evolve with my projects; the state on `main` is always the one that
counts.
