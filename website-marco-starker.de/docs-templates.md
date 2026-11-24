# Doku-Gerüste je Projektart

Ergänzt `docs-contract.md`. Jede Projektart hat einen Standardsatz an Seiten. Dateinamen und `order` sind fest,
damit sich alle Projekte gleich anfühlen. Seiten, die für ein Projekt nichts hergeben, fallen weg.

## MCP-Server

| Datei               | order | Titel DE / EN                               | Inhalt                                                        |
|---------------------|-------|---------------------------------------------|---------------------------------------------------------------|
| `index.md`          | 0     | Überblick / Overview                         | Was, wofür, welche Tools grob, Basis-Projekt, Status          |
| `installation.md`   | 10    | Installation / Installation                  | Docker-Image (GHCR), Compose-Beispiel, Ports                   |
| `configuration.md`  | 20    | Konfiguration / Configuration                | Umgebungsvariablen als Tabelle, Zugangsdaten beschaffen        |
| `claude.md`         | 30    | In Claude einbinden / Connect to Claude      | Custom Connector, URL, Authentifizierung, Test                 |
| `clients.md`        | 35    | Andere MCP-Clients / Other MCP clients       | JSON-Eintrag per HTTP, mcp-remote für stdio-Clients, Test      |
| `tools.md`          | 40    | Tools / Tools                                | Referenz aller Tools: Name, Zweck, Parameter, Beispiel         |
| `security.md`       | 50    | Sicherheit / Security                        | Rechte, Token-Umfang, was der Server darf und was nicht        |

## npm-Paket

| Datei             | order | Titel DE / EN                   | Inhalt                                            |
|-------------------|-------|---------------------------------|---------------------------------------------------|
| `index.md`        | 0     | Überblick / Overview             | Problem, Lösung, Kurzbeispiel, verwandte Pakete    |
| `installation.md` | 10    | Installation / Installation      | npm-Befehl, Voraussetzungen (Node, esbuild …)      |
| `usage.md`        | 20    | Verwendung / Usage               | typische Einsätze mit Beispielen                   |
| `options.md`      | 30    | Optionen / Options               | jede Option als Tabelle: Name, Typ, Standard       |
| `migration.md`    | 40    | Migration / Migration            | nur falls es Breaking Changes gab                  |

## GitHub Workflows und Actions

| Datei                 | order | Titel DE / EN                  | Inhalt                                             |
|-----------------------|-------|--------------------------------|----------------------------------------------------|
| `index.md`            | 0     | Überblick / Overview            | Inhalt des Repos, Versionierung (`@v2`)            |
| `<workflow-name>.md`  | 10+   | Name des Workflows              | Ablauf, Inputs, Secrets, Beispiel-Aufruf            |
| `<action-name>.md`    | 50+   | Name der Action                 | Inputs, Outputs, Beispiel                          |

## Minecraft-Mod / Spiel-Erweiterung

| Datei               | order | Titel DE / EN                   | Inhalt                                                    |
|---------------------|-------|---------------------------------|-----------------------------------------------------------|
| `index.md`          | 0     | Überblick / Overview             | Was, Kompatibilität (Spielversion, Loader), Status         |
| `installation.md`   | 10    | Installation / Installation      | Server/Client, Abhängigkeiten (z. B. minecraft-api)        |
| `configuration.md`  | 20    | Konfiguration / Configuration    | Einstellungen und Standardwerte                            |
| `usage.md`          | 30    | Verwendung / Usage               | Bedienung, Screenshots/GIF                                 |

## Sammlung, Guidelines, Tools ohne Installation

`index.md` plus eine Seite je Dokument oder Werkzeug (`order` in 10er-Schritten).

## Experiment

Nur `index.md`: Idee, Vorgehen, Ergebnis (ehrlich, auch wenn es nicht geklappt hat), was man daraus lernt.

## Gerüst einer Seite

`docs/de/configuration.md`:

```markdown
---
title: Konfiguration
description: Alle Umgebungsvariablen von <projekt> mit Standardwerten: Ports, Zugangsdaten, Protokollierung und was du für den Betrieb hinter einem Proxy einstellen musst.
order: 20
slug: konfiguration
section: Einrichtung
---

Kurzer Einleitungssatz, was hier konfiguriert wird.

## Variablen

| Name        | Standard | Beschreibung              |
|-------------|----------|---------------------------|
| `PORT`      | `50100`  | Port des HTTP-Servers     |

> [!WARNING]
> Zugangsdaten nie ins Image backen, nur per Umgebungsvariable übergeben.
```

`docs/en/configuration.md`:

```markdown
---
title: Configuration
description: All environment variables of <project> with their defaults: ports, credentials, logging and what to set when you run it behind a reverse proxy.
order: 20
slug: configuration
section: Setup
---

One sentence on what is configured here.

## Variables

| Name   | Default | Description            |
|--------|---------|------------------------|
| `PORT` | `50100` | Port of the HTTP server |
```
