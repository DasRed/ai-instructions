---
title: new-mcp
description: The Claude skill new-mcp guides through building an MCP server up to the MCP Registry: question rounds, brief, build, the server standard and limits.
order: 70
slug: new-mcp
section: Skills
---

[`skills/new-mcp/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/new-mcp/SKILL.md) guides
through building a new MCP server, from the first conversation to the entry in the MCP Registry. It is modelled on my
four servers hetzner-mcp, nginx-proxy-manager-mcp, discord-mcp and backrest-mcp. The skill is written in German.

## Workflow

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

## Standard of an MCP server

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

## Limits

Once I have created the repository on GitHub, the skill can use `gh` to set the secrets for deploy, Home Assistant and
docs release from `secrets/.env` (without showing the values) and the About with description, docs link and topics. I
set up image visibility, proxy host, stack and connector myself; the skill delivers a list and proposals for that, such
as the compose service. Commits and pushes happen only with explicit approval.

> [!NOTE]
> The skill is tailored to my environment: my folders, servers, connectors and workflows. For your own projects, use
> it as a template and replace those parts.

## Invoke

The skill starts when you tell Claude you want to build a new MCP server, for example:

```text
I want to build an MCP server for Paperless-ngx.
```

How to install the skill is described in [Using skills](skills.md).
