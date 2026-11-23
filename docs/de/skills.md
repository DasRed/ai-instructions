---
title: Skills
description: Claude-Skills, die Guidelines, Styleguides und Webseiten-Bausteine zu einem festen Ablauf verbinden, und wie du sie installierst.
order: 50
slug: skills
section: Dokumente
---

Im Ordner [`skills/`](https://github.com/DasRed/ai-instructions/tree/main/skills) liegen Skills für Claude. Ein Skill
ist eine `SKILL.md` mit Name, Beschreibung und Anweisungen. Claude lädt ihn, wenn eine Anfrage zur Beschreibung passt,
und arbeitet den Ablauf dann Schritt für Schritt ab.

## neue-webseite

[`skills/neue-webseite/SKILL.md`](https://github.com/DasRed/ai-instructions/blob/main/skills/neue-webseite/SKILL.md)
führt durch den Bau einer neuen Webseite, von der ersten Frage bis zum fertigen Repo:

1. **Kontext sammeln:** Guidelines, Styleguides, Webseiten-Bausteine und ein Referenz-Repo lesen, Domains, freie Ports
   und Proxy-Hosts über die verbundenen Connectoren prüfen.
2. **Rahmenbedingungen abfragen:** in mehreren Runden zu Projekt und Ziel, Design und Styleguide, Domain, Sprachen und
   Rechtlichem, SEO, Technik, Betrieb und bei Kundenseiten zum Geschäftlichen. Der übliche Standard steht jeweils als
   empfohlene Antwort zuerst.
3. **Steckbrief freigeben lassen:** Alle Entscheidungen als kurzer Projektsteckbrief. Vorher legt Claude keine Datei an.
4. **Umsetzen:** Next.js mit TypeScript nach den [Code-Guidelines](code-guidelines.md), Design nach dem gewählten
   [Styleguide](styleguides.md), SEO nach festem Standard, Docker und CI, auf Wunsch Projekt-Doku nach den
   [Webseiten-Bausteinen](website-building-blocks.md).

### SEO

In einer eigenen Runde fragt der Skill, wofür die Seite gefunden werden soll (Suchbegriffe, Region), welche
strukturierten Daten passen, ob alte URLs aus einem Relaunch umgeleitet werden müssen und wie die Vorschau beim Teilen
aussieht. Den Rest setzt er ohne Frage auf jeder Seite um:

| Thema                | Standard                                                                                   |
|----------------------|--------------------------------------------------------------------------------------------|
| Kanonische Adresse   | eine Origin aus `SITE_URL`, Canonical auf jeder Seite, Neben-Domains per 301 mit Pfad      |
| Sprachen             | hreflang auf allen Sprachfassungen plus `x-default` auf dieselbe Seite, Sprachweiche per 307 |
| Viele Sprachen       | BCP-47-Codes (`zh-Hans`), `dir="rtl"`, englische URL-Segmente, Längen je Schrift           |
| Titel, Description   | je Sprache eindeutig aus den Übersetzungen, eine `h1` je Seite                             |
| Teilen               | Open Graph und Twitter Card, OG-Bild 1200×630                                              |
| Strukturierte Daten  | JSON-LD serverseitig, z. B. `SportsClub`, `LocalBusiness`, `Event`, `BreadcrumbList`       |
| `robots.txt`         | aus dem Code, nur mit `SITE_INDEXABLE=true` freigegeben, sonst alles gesperrt und `noindex` |
| App-Seiten           | Smart App Banner, Store-Links, `MobileApplication` mit `offers` und `installUrl`           |
| `sitemap.xml`        | aus der Routentabelle, nur indexierbare Seiten, mit hreflang-Paaren                        |
| Rechtsseiten         | Impressum und Datenschutz `noindex, follow`, nicht in der Sitemap                          |
| Fehler               | echte 404, alte URLs per 301 auf die passende neue Seite                                   |
| Leistung             | Server Components, `next/image`, selbst gehostete Schriften, keine Layout-Shifts           |

Vor dem Abschluss prüft der Skill `robots.txt`, Sitemap, Canonicals, hreflang, JSON-LD und Statuscodes am lokalen
Build und lässt, falls verfügbar, Lighthouse laufen.

Ob die Seite in die Google Search Console kommt, fragt der Skill ab. Bei Ja legt er sie nach dem Go-live als
Domain-Property an, verifiziert sie per DNS-TXT, trägt den Inhaber ein und reicht die Sitemap ein. Das passiert erst,
wenn dieselbe SEO-Prüfung auch auf der Live-Seite ohne Fehler durchläuft. Rich-Results-Test und Unternehmensprofil
kommen danach und nur mit ausdrücklichem OK.

> [!TIP]
> Mit `SITE_INDEXABLE` bleibt jede Instanz außer der Produktion automatisch aus dem Index. Im Compose der Produktion
> steht deshalb `SITE_INDEXABLE=true`.

### Grenzen

Infrastruktur wie DNS, Proxy und Server richtet der Skill nicht selbst ein, er liefert nur Vorschläge. Commits und
Pushes gibt es nur mit ausdrücklichem OK.

> [!NOTE]
> Der Skill ist auf meine Umgebung zugeschnitten: meine Ordner, Server, Connectoren und Preise. Für eigene Projekte
> nimm ihn als Vorlage und ersetze diese Stellen.

## Installieren

In Claude Code legst du den Skill als persönlichen Skill ab:

```bash
mkdir -p ~/.claude/skills/neue-webseite
cp ./skills/neue-webseite/SKILL.md ~/.claude/skills/neue-webseite/SKILL.md
```

In der Claude-App lädst du die `SKILL.md` als eigenen Skill hoch. Die Datei im Repository bleibt die Quelle: Änderst
du sie, aktualisierst du danach die Kopie in Claude.

## Aufrufen

Der Skill startet, wenn du Claude sagst, dass du eine neue Webseite bauen willst, etwa:

```text
Ich möchte eine neue Webseite für den Tennisverein bauen.
```
