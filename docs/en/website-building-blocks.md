---
title: Website building blocks
description: Docs contract, page sets, project data and release flow that let project repositories bring their docs onto a website.
order: 40
slug: website-building-blocks
section: Documents
---

The folder
[`website-marco-starker.de/`](https://github.com/DasRed/ai-instructions/tree/main/website-marco-starker.de) defines how
project repositories store their documentation and how a website includes it. The model is marco-starker.de; the same
rules apply to every product site that shows documentation from repositories. The documentation you are reading
follows them as well.

## Files

| File                       | Contents                                                              | For          |
|----------------------------|-----------------------------------------------------------------------|--------------|
| `docs-contract.md`         | Docs contract: location, front matter, Markdown rules, README         | project repo |
| `docs-templates.md`        | Default pages per project type, page outline in German and English    | project repo |
| `public-repo-checklist.md` | What to check before and when making a repository public              | project repo |
| `project-schema.md`        | Data model of the projects on the website, adding a project           | website      |
| `docs-integration.md`      | Loading docs at build time, paths, rendering, SEO, configuration, tests | website    |
| `docs-release.md`          | Docs change → empty `docs` commit → website release                   | both         |

## The principle

1. Every public repository stores its docs under `docs/de` and `docs/en`: identical file names in both languages,
   front matter with `title`, `description` and `order`, GitHub Markdown without HTML.
2. A push to `main` that changes `docs/**` starts the `docs.yml` workflow. It checks the docs and creates an empty
   commit `docs(<slug>): sync documentation` in the website repository.
3. That commit triggers a patch release of the website via semantic-release. The build fetches the docs of all
   projects from GitHub, checks them and bakes them into the Docker image.
4. At runtime the website reads nothing from GitHub. Every image is a complete, reproducible state.

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

## Page sets per project type

`docs-templates.md` defines which pages a project gets, so all projects feel the same:

| Project type                 | Pages                                                               |
|------------------------------|---------------------------------------------------------------------|
| MCP server                   | Overview, Installation, Configuration, Connect to Claude, Tools, Security |
| npm package                  | Overview, Installation, Usage, Options, Migration                   |
| GitHub workflows and actions | Overview, one page per workflow or action                           |
| Minecraft mod                | Overview, Installation, Configuration, Usage                        |
| Collection, guidelines       | Overview, one page per document                                     |
| Experiment                   | Overview only: idea, approach, result                               |

## Usage

New repositories get their docs most easily through the [skill "neue-webseite"](skills.md) or with a direct request
to the agent:

```markdown
Add documentation to this repository following ./website-marco-starker.de/docs-contract.md
and the page set for "npm-Paket" in docs-templates.md. Add docs.yml as described in docs-release.md.
```
