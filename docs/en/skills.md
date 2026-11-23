---
title: Skills
description: Claude skills for new websites and new MCP servers that combine guidelines, styleguides and website building blocks into a fixed workflow.
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
   legal matters, SEO, technology, operations and, for client sites, business. The usual default comes first as the
   recommended answer.
3. **Get the brief approved:** all decisions as a short project brief. Claude creates no files before that.
4. **Build:** Next.js with TypeScript following the [code guidelines](code-guidelines.md), design following the chosen
   [styleguide](styleguides.md), SEO following a fixed standard, Docker and CI, and on request project docs following
   the [website building blocks](website-building-blocks.md).

### SEO

In a separate round the skill asks what the site should be found for (search terms, region), which structured data
fits, whether old URLs from a relaunch need redirects and what the preview looks like when shared. Everything else it
applies to every site without asking:

| Topic              | Standard                                                                                |
|--------------------|-----------------------------------------------------------------------------------------|
| Canonical address  | one origin from `SITE_URL`, canonical on every page, secondary domains 301 with path    |
| Languages          | hreflang on all language versions plus `x-default` to the same page, language switch via 307 |
| Many languages     | BCP 47 codes (`zh-Hans`), `dir="rtl"`, English URL segments, lengths per script        |
| Title, description | unique per language from the translations, one `h1` per page                            |
| Sharing            | Open Graph and Twitter Card, OG image 1200×630                                          |
| Structured data    | JSON-LD rendered on the server, e.g. `SportsClub`, `LocalBusiness`, `Event`, `BreadcrumbList` |
| `robots.txt`       | from code, open only with `SITE_INDEXABLE=true`, otherwise everything blocked and `noindex` |
| App sites          | Smart App Banner, store links, `MobileApplication` with `offers` and `installUrl`       |
| `sitemap.xml`      | from the route table, indexable pages only, with hreflang pairs                         |
| Legal pages        | imprint and privacy policy `noindex, follow`, not in the sitemap                        |
| Errors             | real 404, old URLs 301 to the matching new page                                         |
| Performance        | Server Components, `next/image`, self-hosted fonts, no layout shifts                    |

Before finishing, the skill checks `robots.txt`, sitemap, canonicals, hreflang, JSON-LD and status codes against the
local build and runs Lighthouse if available.

The skill asks whether the site should go into Google Search Console. If yes, it creates a domain property after
go-live, verifies it via DNS TXT, adds the owner and submits the sitemap. That only happens once the same SEO check
passes without errors on the live site. The Rich Results Test and the business profile come afterwards and only with
explicit approval.

> [!TIP]
> With `SITE_INDEXABLE`, every instance except production stays out of the index automatically. That is why the
> production compose file sets `SITE_INDEXABLE=true`.

### Limits

The skill does not set up infrastructure like DNS, proxy and servers itself; it only delivers proposals. Commits and
pushes happen only with explicit approval.

> [!NOTE]
> The skill is tailored to my environment: my folders, servers, connectors and prices. For your own projects, use it
> as a template and replace those parts.

## new-mcp

[`skills/new-mcp/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/new-mcp/SKILL.md) guides
through building a new MCP server, from the first conversation to the entry in the MCP Registry. It is modelled on my
four servers hetzner-mcp, nginx-proxy-manager-mcp, discord-mcp and backrest-mcp. The skill is written in German.

1. **Gather context:** read guidelines, website building blocks and the reference repository backrest-mcp; check the
   API of the service (what it really offers, whether it returns secrets); look for existing MCP servers as a model;
   find free ports and hosts in the MCP stack.
2. **Ask about the requirements:** in four rounds on service and scope, access and security, operations and
   publishing. The usual default comes first as the recommended answer.
3. **Get the brief approved:** names, tools, security, operations and publishing as a short brief. Claude creates no
   files before that.
4. **Build:** Node.js and TypeScript following the [code guidelines](code-guidelines.md), Dockerfile, CI,
   `server.json` for the registry, docs in two languages following the
   [website building blocks](website-building-blocks.md) and, on request, the project entry on marco-starker.de.
5. **Check and hand over:** tests, build, Docker, docs check and a list of the steps I do myself.

### Standard of an MCP server

| Topic          | Standard                                                                                        |
|----------------|-------------------------------------------------------------------------------------------------|
| Transport      | Streamable HTTP, stateless: one MCP instance per `POST`, `GET` and `DELETE` return `405`        |
| Permissions    | read-only by default, allow and deny lists with `*`, tool hints `readOnlyHint` and `destructiveHint` |
| Access         | optional bearer token compared in constant time, secrets from the API masked                    |
| Configuration  | environment variables only, prefixed `<SERVICE>_MCP_`, all documented in `.env.example`          |
| Container      | `node:26-alpine`, no root, no state, health check on `/healthz`                                  |
| Release        | semantic-release sets the version in `package.json` and `server.json`, image to GHCR            |
| Registry       | entry `io.github.DasRed/<slug>` after every release via GitHub OIDC, no secret                  |
| Docs           | `docs/de` and `docs/en` with overview, installation, configuration, Claude, other clients, tools, security |

### Limits

Once I have created the repository on GitHub, the skill can use `gh` to set the secrets for deploy, Home Assistant and
docs release from `secrets/.env` (without showing the values) and the About with description, docs link and topics. I
set up image visibility, proxy host, stack and connector myself; the skill delivers a list and proposals for that, such
as the compose service. Commits and pushes happen only with explicit approval.

## Install

In Claude Code, store each skill as a personal skill, here using `new-mcp` as an example:

```bash
mkdir -p ~/.claude/skills/new-mcp
cp ./skills/new-mcp/SKILL.md ~/.claude/skills/new-mcp/SKILL.md
```

In the Claude app, upload the `SKILL.md` as a custom skill. The file in the repository stays the source: if you change
it, update the copy in Claude afterwards.

## Invoke

A skill starts when your request matches its description. `neue-webseite` when you want to build a new website:

```text
I want to build a new website for the tennis club.
```

`new-mcp` when you want to build a new MCP server:

```text
I want to build an MCP server for Paperless-ngx.
```
