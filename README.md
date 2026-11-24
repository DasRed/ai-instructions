# ai-instructions

Rules and templates I give AI agents like Claude when they work on my projects: code guidelines, an IntelliJ code
style, design styleguides for websites, building blocks for project documentation and Claude skills.

Documentation: https://www.marco-starker.de/en/projects/ai-instructions/docs
(Deutsch: https://www.marco-starker.de/de/projekte/ai-instructions/doku)

> [!NOTE]
> The documents are written in German and tailored to my projects. Use them as a template for your own.

## Quick start

```bash
git clone https://github.com/DasRed/ai-instructions.git .
```

Then reference the files from a project's `CLAUDE.md` or `AGENTS.md`:

```markdown
## Coding rules

Follow ./CodeGuidlines.md. Formatting follows ./intellij-code-styles.xml.
```

| Path                        | Contents                                                     |
|-----------------------------|--------------------------------------------------------------|
| `CodeGuidlines.md`          | Code guidelines for TypeScript, Node, services, SDKs, i18n   |
| `intellij-code-styles.xml`  | IntelliJ / WebStorm code style scheme                        |
| `styleguides/`              | Design styleguides for websites                              |
| `website-marco-starker.de/` | Docs contract, project data and release flow                 |
| `skills/`                   | Claude skills                                                |
| `tools/`                    | Helper scripts, e.g. setting missing GitHub secrets in repos |

## License

[MIT](LICENSE)
