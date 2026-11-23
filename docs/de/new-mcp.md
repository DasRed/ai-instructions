---
title: new-mcp
description: Der Claude-Skill new-mcp führt durch den Bau eines MCP-Servers bis zur MCP Registry: Fragerunden, Steckbrief, Umsetzung, Standard eines Servers und Grenzen.
order: 70
slug: new-mcp
section: Skills
---

[`skills/new-mcp/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/new-mcp/SKILL.md) führt durch
den Bau eines neuen MCP-Servers, vom ersten Gespräch bis zum Eintrag in der MCP Registry. Vorbild sind meine vier
Server hetzner-mcp, nginx-proxy-manager-mcp, discord-mcp und backrest-mcp.

## Ablauf

1. **Kontext sammeln:** Guidelines, Webseiten-Bausteine und das Referenz-Repo backrest-mcp lesen, die API des Dienstes
   prüfen (was sie wirklich kann, ob sie Geheimnisse zurückgibt), vorhandene MCP-Server als Vorbild suchen, freie Ports
   und Hosts im MCP-Stack ermitteln.
2. **Rahmenbedingungen abfragen:** in vier Runden zu Dienst und Umfang, Zugang und Sicherheit, Betrieb und
   Veröffentlichung. Der übliche Standard steht jeweils als empfohlene Antwort zuerst.
3. **Steckbrief freigeben lassen:** Namen, Tools, Sicherheit, Betrieb und Veröffentlichung als kurzer Steckbrief.
   Vorher legt Claude keine Datei an.
4. **Umsetzen:** Node.js und TypeScript nach den [Code-Guidelines](code-guidelines.md), Dockerfile, CI,
   `server.json` für die Registry, Doku in zwei Sprachen nach den [Webseiten-Bausteinen](website-building-blocks.md)
   und auf Wunsch der Projekteintrag auf marco-starker.de.
5. **Prüfen und übergeben:** Tests, Build, Docker, Doku-Check und eine Liste der Schritte, die ich selbst mache.

## Standard eines MCP-Servers

| Thema          | Standard                                                                                        |
|----------------|-------------------------------------------------------------------------------------------------|
| Transport      | Streamable HTTP, zustandslos: eine MCP-Instanz je `POST`, `GET` und `DELETE` liefern `405`      |
| Rechte         | standardmäßig nur lesend, Allow- und Deny-Listen mit `*`, Tool-Hinweise `readOnlyHint` und `destructiveHint` |
| Zugang         | optionaler Bearer-Token, in konstanter Zeit verglichen, Geheimnisse aus der API maskiert         |
| Konfiguration  | nur Umgebungsvariablen mit Präfix `<DIENST>_MCP_`, alle in `.env.example` dokumentiert           |
| Container      | `node:26-alpine`, ohne Root, ohne Zustand, Health-Check auf `/healthz`                           |
| Release        | semantic-release setzt die Version in `package.json` und `server.json`, Image nach GHCR          |
| Registry       | Eintrag `io.github.DasRed/<slug>` nach jedem Release per GitHub OIDC, ohne Secret                 |
| Doku           | `docs/de` und `docs/en` mit Überblick, Installation, Konfiguration, Claude, andere Clients, Tools, Sicherheit |

## Grenzen

Sobald ich das Repo auf GitHub angelegt habe, setzt der Skill auf Wunsch per `gh` die Secrets für Deploy, Home
Assistant und Doku-Release aus `secrets/.env` (ohne die Werte anzuzeigen) und das About mit Beschreibung, Doku-Link und
Topics. Sichtbarkeit des Images, Proxy-Host, Stack und Connector richte ich selbst ein; dafür liefert der Skill eine
Liste und Vorschläge, etwa den Compose-Service. Commits und Pushes gibt es nur mit ausdrücklichem OK.

> [!NOTE]
> Der Skill ist auf meine Umgebung zugeschnitten: meine Ordner, Server, Connectoren und Workflows. Für eigene
> Projekte nimm ihn als Vorlage und ersetze diese Stellen.

## Aufrufen

Der Skill startet, wenn du Claude sagst, dass du einen neuen MCP-Server bauen willst, etwa:

```text
Ich möchte einen MCP-Server für Paperless-ngx bauen.
```

Wie du den Skill installierst, steht unter [Skills nutzen](skills.md).
