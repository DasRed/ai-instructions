# Webseiten-Bausteine

Regeln und Vorlagen für Webseiten, die Projekte zeigen und deren Doku aus den Projekt-Repos einbinden
(Vorbild: marco-starker.de). Der Skill `neue-webseite` (`../skills/neue-webseite/SKILL.md`) fragt ab, ob eine neue
Seite oder ein neues Repo diese Bausteine braucht, und liest dann die passenden Dateien.
Der Skill `new-mcp` (`../skills/new-mcp/SKILL.md`) nutzt bei jedem neuen MCP-Server alle Dateien mit „Repo“ oder
„beide“ und `project-schema.md` für den Eintrag auf marco-starker.de.

| Datei                      | Inhalt                                                            | Seite      |
|----------------------------|-------------------------------------------------------------------|------------|
| `docs-contract.md`         | Doku-Vertrag: Ablage, Frontmatter, Markdown-Regeln, README        | Repo       |
| `docs-templates.md`        | Standardseiten je Projektart, Gerüst einer Seite DE/EN             | Repo       |
| `public-repo-checklist.md` | Was vor und beim Öffentlichmachen eines Repos zu prüfen ist         | Repo       |
| `project-schema.md`        | Datenmodell der Projekte auf der Webseite, Projekt aufnehmen        | Webseite   |
| `docs-integration.md`      | Doku laden, Pfade, Darstellung, SEO, Konfiguration, Tests           | Webseite   |
| `docs-release.md`          | Doku-Änderung → leerer `docs`-Commit → Release der Webseite         | beide      |

## Verwendung im Skill `neue-webseite`

| Frage im Skill                                         | Antwort | Dateien lesen                                                                 |
|--------------------------------------------------------|---------|-------------------------------------------------------------------------------|
| Soll die Seite Projekt-Doku aus Repos zeigen?            | ja      | `docs-contract.md`, `project-schema.md`, `docs-integration.md`, `docs-release.md` |
| Wird das Repo öffentlich?                               | ja      | `public-repo-checklist.md`                                                    |
| Soll das Repo selbst Doku nach dem Vertrag bekommen?     | ja      | `docs-contract.md`, `docs-templates.md`, `docs-release.md`                     |
| Soll das Projekt auf marco-starker.de erscheinen?        | ja      | `project-schema.md` (Abschnitt 4)                                              |
