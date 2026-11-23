---
title: IntelliJ-Code-Style
description: Das Code-Style-Schema „Marco“ in IntelliJ IDEA und WebStorm importieren und was es für Einrückung, Anführungszeichen, Klammern und Ausrichtung festlegt.
order: 20
slug: intellij-code-style
section: Dokumente
---

[`intellij-code-styles.xml`](https://github.com/DasRed/ai-instructions/blob/main/intellij-code-styles.xml) ist ein
exportiertes Code-Style-Schema mit dem Namen „Marco“. Es gilt für IntelliJ IDEA, WebStorm und die anderen
JetBrains-IDEs und ist die verbindliche Quelle für die Formatierung. Die
[Code-Guidelines](code-guidelines.md) verweisen darauf.

## Importieren

1. In der IDE **Settings → Editor → Code Style** öffnen.
2. Neben „Scheme“ auf das Zahnrad klicken, **Import Scheme → IntelliJ IDEA code style XML** wählen.
3. `intellij-code-styles.xml` auswählen und das Schema „Marco“ übernehmen.

Danach formatiert **Code → Reformat Code** (`⌥⌘L` bzw. `Strg+Alt+L`) jede Datei nach diesen Regeln.

## Was es festlegt

Für TypeScript und JavaScript, als Kurzfassung:

| Regel                    | Einstellung                                                        |
|--------------------------|--------------------------------------------------------------------|
| Einrückung               | 4 Leerzeichen, keine Tabs                                          |
| Anführungszeichen        | einfache, Template-Literals erlaubt                                |
| Semikolon                | immer                                                              |
| Trailing Comma           | bei mehrzeiligen Objekten, Arrays und Parameterlisten              |
| `else`, `catch`, `finally` | auf neuer Zeile nach `}`                                         |
| Geschweifte Klammern     | immer bei `if`, `for`, `while`; innen ohne Leerzeichen: `{url, token}` |
| Ausrichtung              | Zuweisungen am `=`, Objektwerte nach dem `:`, Methodenketten am `.` |
| Zeilenlänge              | keine feste Grenze                                                 |

Daneben enthält das Schema Einstellungen für JSON, PHP, Python, SCSS/LESS/SASS, Vue, Dart, Prisma und SQL.

> [!NOTE]
> Für die SQL-Dialekte (PostgreSQL, MySQL, SQLite und weitere) ist die automatische Formatierung im Schema
> abgeschaltet. SQL wird von Hand nach den Regeln im Abschnitt „Datenbank“ der Code-Guidelines formatiert.
