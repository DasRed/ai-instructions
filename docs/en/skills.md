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
| Languages          | hreflang on all language versions plus `x-default`, language switch only on `/` via 307 |
| Title, description | unique per page from the translations, one `h1` per page                                |
| Sharing            | Open Graph and Twitter Card, OG image 1200×630                                          |
| Structured data    | JSON-LD rendered on the server, e.g. `SportsClub`, `LocalBusiness`, `Event`, `BreadcrumbList` |
| `robots.txt`       | from code, open only with `SITE_INDEXABLE=true`, otherwise everything blocked and `noindex` |
| `sitemap.xml`      | from the route table, indexable pages only, with hreflang pairs                         |
| Legal pages        | imprint and privacy policy `noindex, follow`, not in the sitemap                        |
| Errors             | real 404, old URLs 301 to the matching new page                                         |
| Performance        | Server Components, `next/image`, self-hosted fonts, no layout shifts                    |

Before finishing, the skill checks `robots.txt`, sitemap, canonicals, hreflang, JSON-LD and status codes against the
local build and runs Lighthouse if available. Search Console, the Rich Results Test and the business profile come after
go-live and only with explicit approval.

> [!TIP]
> With `SITE_INDEXABLE`, every instance except production stays out of the index automatically. That is why the
> production compose file sets `SITE_INDEXABLE=true`.

### Limits

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
