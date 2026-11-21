---
title: Skills
description: Claude skills that combine guidelines, styleguides and website building blocks into a fixed workflow, and how to install them.
order: 50
slug: skills
section: Documents
---

The folder [`skills/`](https://github.com/DasRed/ai-instructions/tree/main/skills) holds skills for Claude. A skill is
a `SKILL.md` with a name, a description and instructions. Claude loads it when a request matches the description and
then works through the steps.

## neue-webseite

[`skills/neue-webseite/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/neue-webseite/SKILL.md)
("new website") guides through building a new website, from the first question to the finished repository. The skill
is written in German.

1. **Gather context:** read guidelines, styleguides, website building blocks and a reference repository; check
   domains, free ports and proxy hosts through the connected connectors.
2. **Ask about the requirements:** in several rounds on project and goal, design and styleguide, domain, languages and
   legal matters, technology, operations and, for client sites, business. The usual default comes first as the
   recommended answer.
3. **Get the brief approved:** all decisions as a short project brief. Claude creates no files before that.
4. **Build:** Next.js with TypeScript following the [code guidelines](code-guidelines.md), design following the chosen
   [styleguide](styleguides.md), Docker and CI, and on request project docs following the
   [website building blocks](website-building-blocks.md).

The skill does not set up infrastructure like DNS, proxy and servers itself; it only delivers proposals. Commits and
pushes happen only with explicit approval.

> [!NOTE]
> The skill is tailored to my environment: my folders, servers, connectors and prices. For your own projects, use it
> as a template and replace those parts.

## Install

In Claude Code, store the skill as a personal skill:

```bash
mkdir -p ~/.claude/skills/neue-webseite
cp ./skills/neue-webseite/SKILL.md ~/.claude/skills/neue-webseite/SKILL.md
```

In the Claude app, upload the `SKILL.md` as a custom skill. The file in the repository stays the source: if you change
it, update the copy in Claude afterwards.

## Invoke

The skill starts when you tell Claude you want to build a new website, for example:

```text
I want to build a new website for the tennis club.
```
