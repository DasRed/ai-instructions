---
title: Code guidelines
description: What CodeGuidlines.md defines for TypeScript, Node projects, Fastify services, SDKs and translations, with the key rules and short examples.
order: 10
slug: code-guidelines
section: Documents
---

[`CodeGuidlines.md`](https://github.com/DasRed/ai-instructions/blob/main/CodeGuidlines.md) describes what code in my
projects looks like and how it is structured. The file is written for agents: short rules, each with a brief example.
Code, comments and project documentation are in English; the guidelines themselves are in German.

## Sections

| Section                 | What it covers                                                                     |
|-------------------------|------------------------------------------------------------------------------------|
| Format                  | Summary of the [IntelliJ code style](intellij-code-style.md) for agents without a formatter |
| TypeScript & JavaScript | Exports, imports, naming, class layout, control flow, errors, comments, dates      |
| Node projects           | `package.json`, `tsconfig.json`, tests, uniform script names, releases             |
| Services (Fastify)      | Folder structure, configuration from the environment, routes, database, migrations |
| SDKs (API clients)      | Client class, `fetch` method, models, exceptions                                   |
| Translations (i18n)     | Structure of the translation files and usage with next-intl                        |
| README                  | Structure of a README                                                              |

## The key rules

- **TypeScript and ESM only.** No `.js` files in `src/` and `test/`.
- **One default export per file**, named like the file. One class per file, at most 500 lines.
- **Imports via the `@/` alias** instead of relative paths, sorted alphabetically, Node modules with the `node:` prefix.
- **Suffixes in names:** `…Interface`, `…Enum`, `…Type`. Abbreviations fully upper case (`APIClient`,
  `JWTAuthHandler`).
- **Explicit over implicit:** return types on every function, `strict`, no `any`, comparisons like `=== false`
  instead of `!`.
- **Keep classes extensible:** `protected` by default, no `#private` fields, an options object from three parameters
  on.
- **Platform before library:** `fetch`, `structuredClone`, `crypto.randomUUID()`; as few dependencies as possible.
- **Configuration from environment variables only**, every variable documented in `.env.example`.
- **Releases only via semantic-release** with Conventional Commits. Projects bring nothing for it, semantic-release runs
  in the `node-npm.yml` and `node-docker.yml` workflows.

A typical example from the file:

```typescript
export default class FileHandler {
    private disk: Disk;
    private mimeTypeDetector: MimeTypeDetector;

    constructor(disk: Disk, mimeTypeDetector: MimeTypeDetector) {
        this.disk             = disk;
        this.mimeTypeDetector = mimeTypeDetector;
    }

    async delete(key: string): Promise<boolean> {
        try {
            await this.disk.delete(FileHandler.getPath(key));
        }
        catch {
            return false;
        }

        return true;
    }
}
```

## Usage

Reference the file in a project's `CLAUDE.md` or `AGENTS.md`. If something differs for a project, write the exception
there instead of changing the guidelines:

```markdown
## Coding rules

Follow ./CodeGuidlines.md.
Exception for this project: plain JavaScript, no TypeScript.
```

> [!TIP]
> The formatting rules are enforced most reliably with the IntelliJ formatter. The summary in the "Format" section is
> meant for agents that cannot run it.
