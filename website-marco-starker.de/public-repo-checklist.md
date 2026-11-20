# Checkliste: Repo öffentlich machen

Public werden nur Repos, die andere selbst nutzen können (Tools, MCP-Server, Pakete, Workflows, Mods). Produkte,
Kunden-, Vereins- und private Seiten bleiben privat und tauchen auf der Webseite höchstens als Referenz auf.

## Vor dem Umschalten

- [ ] **Historie prüfen:** `gitleaks detect --source . --log-opts="--all"`. Gibt es Funde, das Repo mit neuer Historie
      anlegen statt nur die Datei zu löschen, und betroffene Zugangsdaten tauschen.
- [ ] **Persönliche Daten:** keine Namen, Adressen, Fotos oder Daten Dritter (Kinder, Kunden, Mannschaft) in Code,
      Testdaten oder Historie.
- [ ] **Code Dritter:** kein Code eines Arbeitgebers oder Kunden. Übernommenes Open Source mit Lizenz und Quelle nennen.
- [ ] **Konfiguration:** nur `.env.example` mit Platzhaltern; `.env`, Schlüssel und lokale Pfade in `.gitignore`.
- [ ] **LICENSE** (Standard MIT) und `license` in `package.json`.
- [ ] **README** auf Englisch: was, Schnellstart, Link auf die Doku der Webseite.
- [ ] **Doku** nach `docs-contract.md` in `docs/de` und `docs/en`.
- [ ] **Workflow** `docs.yml` und Secret `WEBSITE_RELEASE_TOKEN` (`docs-release.md`).
- [ ] **Status klar:** Bei nicht gepflegten Projekten steht in README und `index.md`, mit welcher Version es getestet
      ist und dass es nicht aktiv weiterentwickelt wird.

## Beim Umschalten

- [ ] Sichtbarkeit auf public (archivierte Repos vorher entarchivieren).
- [ ] Mit sichtbar werden: Issues, Actions-Logs, Releases. Alte Logs mit Ausgaben prüfen und bei Bedarf löschen.
- [ ] GHCR-Images haben eine eigene Sichtbarkeit: Paket auf public stellen, wenn andere es ziehen sollen.
- [ ] Beschreibung, Topics und Website-Link (Projektseite) im Repo setzen.

## Danach

- [ ] Eintrag auf der Webseite nach `project-schema.md`.
- [ ] Im GitHub-Profil anpinnen, falls es zu den wichtigsten Projekten gehört.
