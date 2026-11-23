---
title: new-website
description: The Claude skill new-website guides from the first question to the finished website repository: question rounds, brief, build, SEO standard and limits.
order: 60
slug: new-website
section: Skills
---

[`skills/new-website/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/new-website/SKILL.md)
guides through building a new website, from the first question to the finished repository. The skill
is written in German.

## Workflow

1. **Gather context:** read guidelines, styleguides, website building blocks and a reference repository; check
   domains, free ports and proxy hosts through the connected connectors.
2. **Ask about the requirements:** in several rounds on project and goal, design and styleguide, domain, languages and
   legal matters, SEO, technology, operations and, for client sites, business. The usual default comes first as the
   recommended answer.
3. **Get the brief approved:** all decisions as a short project brief. Claude creates no files before that.
4. **Build:** Next.js with TypeScript following the [code guidelines](code-guidelines.md), design following the chosen
   [styleguide](styleguides.md), SEO following a fixed standard, Docker and CI, and on request project docs following
   the [website building blocks](website-building-blocks.md).

## SEO

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

## Limits

The skill does not set up infrastructure like DNS, proxy and servers itself; it only delivers proposals. Once the
repository exists on GitHub, it can use `gh` to set the secrets for deploy, Home Assistant and docs release from
`secrets/.env` (without showing the values) and the About with description, site address and topics. Commits and
pushes happen only with explicit approval.

> [!NOTE]
> The skill is tailored to my environment: my folders, servers, connectors and prices. For your own projects, use it
> as a template and replace those parts.

## Invoke

The skill starts when you tell Claude you want to build a new website, for example:

```text
I want to build a new website for the tennis club.
```

How to install the skill is described in [Using skills](skills.md).
