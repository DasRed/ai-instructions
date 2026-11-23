---
title: Code-Guidelines
description: Was CodeGuidlines.md für TypeScript, Node-Projekte, Fastify-Services, SDKs und Übersetzungen festlegt, mit den wichtigsten Regeln und Beispielen.
order: 10
slug: code-guidelines
section: Dokumente
---

[`CodeGuidlines.md`](https://github.com/DasRed/ai-instructions/blob/main/CodeGuidlines.md) beschreibt, wie Code in
meinen Projekten aussieht und aufgebaut ist. Die Datei ist für Agenten geschrieben: knappe Regeln, jeweils mit einem
kurzen Beispiel. Code, Kommentare und Projekt-Doku sind auf Englisch.

## Abschnitte

| Abschnitt               | Worum es geht                                                                     |
|-------------------------|-----------------------------------------------------------------------------------|
| Format                  | Kurzfassung des [IntelliJ-Code-Styles](intellij-code-style.md) für Agenten ohne Formatter |
| TypeScript & JavaScript | Exporte, Imports, Benennung, Klassenaufbau, Kontrollfluss, Fehler, Kommentare, Datum |
| Node-Projekte           | `package.json`, `tsconfig.json`, Tests, einheitliche Script-Namen, Release         |
| Services (Fastify)      | Ordnerstruktur, Konfiguration aus der Umgebung, Routen, Datenbank und Migrationen |
| SDKs (API-Clients)      | Client-Klasse, `fetch`-Methode, Modelle, Exceptions                               |
| Übersetzungen (i18n)    | Aufbau der Übersetzungsdateien und Verwendung mit next-intl                       |
| README                  | Aufbau einer README                                                               |

## Die wichtigsten Regeln

- **Nur TypeScript und ESM.** Keine `.js`-Dateien in `src/` und `test/`.
- **Ein Default-Export pro Datei**, benannt wie die Datei. Eine Klasse pro Datei, höchstens 500 Zeilen.
- **Imports über den Alias `@/`** statt relativer Pfade, alphabetisch sortiert, Node-Module mit `node:`-Präfix.
- **Suffixe im Namen:** `…Interface`, `…Enum`, `…Type`. Abkürzungen komplett groß (`APIClient`, `JWTAuthHandler`).
- **Explizit statt implizit:** Rückgabetypen an jeder Funktion, `strict`, kein `any`, Vergleiche wie `=== false`
  statt `!`.
- **Klassen erweiterbar halten:** `protected` als Standard, keine `#private`-Felder, ab drei Parametern ein
  Options-Objekt.
- **Plattform vor Library:** `fetch`, `structuredClone`, `crypto.randomUUID()`; so wenige Abhängigkeiten wie möglich.
- **Konfiguration nur aus Umgebungsvariablen**, jede Variable dokumentiert in `.env.example`.
- **Releases nur per semantic-release** mit Conventional Commits.

Ein typisches Beispiel aus der Datei:

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

## Verwenden

Verweise in der `CLAUDE.md` oder `AGENTS.md` eines Projekts auf die Datei. Gilt für ein Projekt etwas anderes, schreib
die Abweichung dort dazu, statt die Guidelines zu ändern:

```markdown
## Coding rules

Follow ./CodeGuidlines.md.
Exception for this project: plain JavaScript, no TypeScript.
```

> [!TIP]
> Die Regeln zur Formatierung lassen sich am zuverlässigsten mit dem IntelliJ-Formatter durchsetzen. Die Kurzfassung
> im Abschnitt „Format“ ist für Agenten gedacht, die ihn nicht ausführen können.
