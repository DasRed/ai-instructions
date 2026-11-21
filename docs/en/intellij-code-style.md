---
title: IntelliJ code style
description: Import the code style scheme "Marco" into IntelliJ IDEA and WebStorm, and what it defines.
order: 20
slug: intellij-code-style
section: Documents
---

[`intellij-code-styles.xml`](https://github.com/DasRed/ai-instructions/blob/main/intellij-code-styles.xml) is an
exported code style scheme named "Marco". It applies to IntelliJ IDEA, WebStorm and the other JetBrains IDEs and is
the binding source for formatting. The [code guidelines](code-guidelines.md) refer to it.

## Import

1. Open **Settings → Editor → Code Style** in the IDE.
2. Click the gear next to "Scheme" and choose **Import Scheme → IntelliJ IDEA code style XML**.
3. Select `intellij-code-styles.xml` and apply the scheme "Marco".

From then on **Code → Reformat Code** (`⌥⌘L` or `Ctrl+Alt+L`) formats every file according to these rules.

## What it defines

For TypeScript and JavaScript, in short:

| Rule                       | Setting                                                               |
|----------------------------|-----------------------------------------------------------------------|
| Indentation                | 4 spaces, no tabs                                                     |
| Quotes                     | single, template literals allowed                                     |
| Semicolon                  | always                                                                |
| Trailing comma             | for multi-line objects, arrays and parameter lists                    |
| `else`, `catch`, `finally` | on a new line after `}`                                               |
| Braces                     | always for `if`, `for`, `while`; no inner spaces: `{url, token}`      |
| Alignment                  | assignments at `=`, object values after `:`, method chains at `.`     |
| Line length                | no fixed limit                                                        |

The scheme also contains settings for JSON, PHP, Python, SCSS/LESS/SASS, Vue, Dart, Prisma and SQL.

> [!NOTE]
> For the SQL dialects (PostgreSQL, MySQL, SQLite and others) automatic formatting is turned off in the scheme. SQL is
> formatted by hand following the "Datenbank" (database) section of the code guidelines.
