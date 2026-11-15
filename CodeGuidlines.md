# Code Guidlines

- code und kommentar sind in englisch
- dokumentation ist immer in englisch

## Format
Es müssen die Formatierungsrichtlinien in /Users/mstarker/Web/ai/intellij-code-styles.xml eingehalten werden

Kurzfassung für Agenten, die den IntelliJ-Formatter nicht ausführen können:
- 4 Leerzeichen Einrückung, keine Tabs
- einfache Anführungszeichen, Template-Literals sind erlaubt
- Semikolon immer
- Trailing Comma bei mehrzeiligen Objekten, Arrays und Parameterlisten
- `else`, `catch` und `finally` stehen auf einer neuen Zeile nach der schließenden `}`
- `if`, `for`, `while` immer mit geschweiften Klammern
- keine Leerzeichen innerhalb geschweifter Klammern: `import {DateTime} from 'luxon';`, `{url, token}`, `{error: 'Unauthorized.'}`
- aufeinanderfolgende Zuweisungen werden am `=` ausgerichtet
- Werte in mehrzeiligen Objekt-Literalen und Enums werden nach dem `:` bzw. `=` ausgerichtet (gilt nicht für Properties in Interfaces und Typen)
- verkettete Methodenaufrufe werden untereinander am `.` ausgerichtet
- keine feste maximale Zeilenlänge, Methodensignaturen bleiben auf einer Zeile

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

## TypeScript & JavaScript
- es wird nur ESM verwendet
- es darf nur ein export pro Datei genutzt werden
- es darf nur default Exports verwendet werden
- der Name des Default-Exports entspricht exakt dem Dateinamen (`APIClient.ts` → `export default class APIClient`)
- es wird nur TypeScript verwendet, keine `.js`-Dateien in `src/` und `test/`; `.tsx` nur, wenn die Datei JSX enthält
- eine Klasse pro Datei, maximal 500 Zeilen pro Datei
- Interfaces: `export default interface XyzInterface {}`
- Enums und Typ-Aliase werden erst deklariert und danach exportiert:
  ```typescript
  enum TelematicServiceProviderEnum {
      DIGITAL_MATTER_DEVICE = 'Digital Matter Device',
  }

  export default TelematicServiceProviderEnum;
  ```
- Hilfs-Interfaces, die nur innerhalb einer Datei gebraucht werden (z. B. Options eines Konstruktors), dürfen nicht exportiert in derselben Datei stehen
- Properties in Interfaces werden alphabetisch sortiert
- jede Funktion und Methode hat einen expliziten Rückgabetyp
- `strict` ist aktiv; kein `any`, stattdessen `unknown` und ein gezielter Cast
- `@ts-expect-error` nur mit kurzer Begründung; `@ts-ignore` und `@ts-nocheck` sind verboten

### Imports
- Imports ohne Dateiendung (`./service/FileHandler`), Index-Dateien explizit (`./route/index`)
- alle Imports alphabetisch nach Modulpfad sortiert (Groß-/Kleinschreibung ignorieren), externe Pakete, `node:`-Module und lokale Pfade nicht gruppieren
- keine Leerzeilen zwischen den Imports, genau eine Leerzeile nach dem letzten Import
- Node-Built-ins immer mit `node:`-Präfix (`node:path`, `node:stream`)

### Benennung
- Klassen, Interfaces, Enums und Typen: PascalCase
- Interfaces enden auf `Interface`, Enums auf `Enum`, Typ-Aliase auf `Type`
- Enum-Member in UPPER_SNAKE_CASE und immer mit String-Wert
- Konstanten auf Modulebene in UPPER_SNAKE_CASE (`DATE_FIELDS`)
- Variablen, Funktionen, Methoden und Properties in camelCase
- Abkürzungen komplett groß: `API`, `CDN`, `HTTP`, `JWT`, `UUID`, `GPS`, `ISO` (`APIV2Client`, `JWTAuthHandler`, `generateUUIDRouteParameter`)
- Namen werden vom Allgemeinen zum Speziellen gebildet: `APIExceptionAccessDenied`, `APIBookingSmallModelInterface`, `RepositoryDeviceCreateInterface`
- in SDKs bekommt jede Datei ein Paket-Präfix (`API…`, `CDN…`, `TelematicService…`), weil alles flach über einen gemeinsamen Index exportiert wird
- Options-Objekte: `<Klasse>ConstructorOptionInterface` bzw. `<Klasse>OptionInterface`
- Generics: `T` oder sprechend mit `T`-Präfix (`TModel`, `TSortFieldNames`)
- Methoden für Datenzugriff: `create`, `get`, `find`, `update`, `delete`, `createOrUpdate`, `getByXAndY`; Listen im Plural (`getDevices`)

### Klassenaufbau
- Reihenfolge: Felder (alphabetisch) → Getter/Setter (alphabetisch) → Konstruktor → Methoden (alphabetisch); Sichtbarkeit und `static` ändern die Reihenfolge nicht
- Felder werden explizit deklariert und im Konstruktor zugewiesen, keine Constructor Parameter Properties
- übergebene Abhängigkeiten sind `readonly`
- `protected` ist der Standard für interne Member, damit Klassen erweiterbar bleiben; `private` nur bei bewusster Kapselung; keine `#private`-Felder
- ab mehr als drei Parametern ein Options-Objekt mit Interface und Destructuring inklusive Default-Werten in der Signatur
- Setter- und Konfigurationsmethoden geben `this` zurück (Rückgabetyp `this`)
- gemeinsames Verhalten über `abstract` Basisklassen mit `protected abstract` Hook-Methoden (z. B. `AuthHandler.validate`, `Provider.handleData`)
- zustandslose Helfer als Klasse mit `static`-Methoden (`DateConverter`, `ResponseGenerator`)

```typescript
interface DateFormatterConstructorOptionsInterface {
    formatDate?: string;
    locale?: string;
    timeZone?: string;
}

export default class DateFormatter {
    protected readonly formatDate: string;

    constructor({locale = 'de-DE', timeZone = 'Europe/Berlin', formatDate = 'dd.LL.yyyy'}: DateFormatterConstructorOptionsInterface = {}) {
        Settings.defaultLocale = locale;
        Settings.defaultZone   = timeZone;

        this.formatDate = formatDate;
    }

    asDate(date: DateInputType): string | null {
        return DateConverter.toDateTime(date)?.toFormat(this.formatDate) ?? null;
    }
}
```

### Kontrollfluss und Ausdrücke
- Guard Clauses und frühe Returns statt Verschachtelung
- explizite Vergleiche statt Truthiness: `=== false` statt `!`, `=== null`, `=== undefined`
- für „null oder undefined“ ist `== null` bzw. `!= null` erlaubt, sonst immer `===`/`!==`
- `??` und `?.` für Defaults und optionale Zugriffe
- keine verschachtelten Ternaries, kein `return await`
- `const` bevorzugen, `let` nur bei Neuzuweisung, nie `var`
- Leerzeile zwischen logischen Blöcken und vor einem `return`, dem mehrere Anweisungen vorausgehen
- Plattform-APIs vor Libraries: `fetch`, `structuredClone`, `crypto.randomUUID()`
- `catch {` ohne Variable, wenn der Fehler nicht gebraucht wird
- Operationen, die einen Boolean liefern und fehlschlagen dürfen (`delete`, `restore`), fangen den Fehler ab und geben `false` zurück

### Fehlerbehandlung
- jedes Paket hat eine eigene Exception-Basisklasse (`<Präfix>Exception extends Error` bzw. `Exception`), spezielle Exceptions erben davon
- Exceptions tragen ihren Kontext als `public readonly` Properties (`response`, `error`, `data`)
- Fehlercodes der API werden über `public static readonly identifier` einer Exception-Klasse zugeordnet und über eine Factory erzeugt
- eigene Exceptions werden unverändert weitergeworfen; fremde `Error` werden in `…ExceptionUnknownError` gewrappt, alles andere in `…ExceptionUnknown`
- Fehlermeldungen aus `unknown`: `error instanceof Error ? error.message : String(error)`

### Kommentare
- sparsam, der Code soll selbsterklärend sein
- nur für Nicht-Offensichtliches: Abweichungen von externer Doku, Einheiten-Umrechnungen, Begründungen (`// from cm/s in km/h`)
- JSDoc nur für `@deprecated` (mit Hinweis auf den Ersatz) und für erklärungsbedürftige Properties in Interfaces

### Datum und Zeit
- `luxon` für Datumslogik
- APIs liefern ISO-Strings in UTC, SDK-Modelle verwenden `Date`; die Umwandlung passiert im Converter bzw. Client
- Standardwerte: Locale `de-DE`, Zeitzone `Europe/Berlin`

## Node-Projekte

### Basis-Konfiguration
- `package.json`: `"type": "module"`, `engines` auf die aktuelle Node- und npm-Version (derzeit `node >=26.12.1`, `npm >=11.20.0`)
- Pakete liegen in GitHub Packages unter `@dasred/*` (`publishConfig.registry`, `access: restricted`)
- `tsconfig.json`: `target` ES2024, `module` ESNext, `moduleResolution` Bundler, `strict`, `outDir` dist, `skipLibCheck`, `lib` dom/dom.iterable/esnext; `include` nur `src/**/*.ts`, `test`, `dist`, `coverage` und `vitest.config.ts` ausgeschlossen; path alias mit @/* auf `./src/*
- SDK: `exports` mit `types`/`import`/`require`, `files: ["dist/*"]`
- Tests mit `vitest`, Testdateien unter `./test/` mit derselben Struktur wie `src/`, `environment` `node` (Browser-SDKs `jsdom`), `watch: false`, Coverage über `@vitest/coverage-v8`

### Scripts
Die Script-Namen sind in allen Projekten gleich:

| Script             | Zweck                                                         |
|--------------------|---------------------------------------------------------------|
| `build`            | Build ausführen                                               |
| `test`             | `vitest run`                                                  |
| `coverage`         | `vitest run --coverage`, JUnit nach `coverage/reports/unittest.xml` |
| `publish:check`    | semantic-release Dry-Run                                      |
| `prepublishOnly`   | `npm run semantic-release`                                    |
| `semantic-release` | Release                                                       |
| `start`            | Service: `node ./dist/index.js` (ggf. vorher Migrationen)     |
| `dev`              | Service: `tsx watch ./src/index.ts`                           |
| `preview`          | Service: `node --watch-path=./dist ./dist/index.js`           |

### Abhängigkeiten
- so wenige wie möglich, Plattform-APIs vor zusätzlichen Paketen
- Services: `fastify` (+ `@fastify/cors`, `@fastify/multipart`), `postgres`, `dbmate`, `dotenv`, `jsonwebtoken`, `luxon`
- SDKs: nur zwingend benötigte Runtime-Abhängigkeiten (z. B. `qs`, `luxon`, `jwt-decode`); Framework-Typen als `peerDependencies`
- Versionen mit `^`, `package-lock.json` wird committet

### Release
- Commits nach Conventional Commits (`feat:`, `fix:`, `chore:`)
- Releases ausschließlich über semantic-release (Changelog, npm-Publish, GitHub-Release, Backmerge `main` → `develop`)
- Branches: `develop` → `staging` → `main`, Feature-Branches als `feat/…`

## Services (Fastify)

### Ordnerstruktur
```
src/
    index.ts      bootstrap: plugins, hooks, routes, listen (top-level await)
    config.ts     typed configuration from env
    env.ts        env<T>(name, defaultValue) helper
    enum/
    lib/          singleton instances (app, sql, jwtAuthHandler, repository/repositoryDevice, ...)
    route/        one route per file, index.ts per folder
    service/      classes (handlers, repositories, providers, ResponseGenerator)
db/
    migrations/   dbmate migrations
```
- Klassen in `service/` kennen keine Konfiguration; die Instanzen werden in `lib/` mit der Konfiguration erzeugt und als Singleton exportiert
- Dateien in `lib/` heißen wie die exportierte Instanz in camelCase (`lib/repository/repositoryDevice.ts` → `repositoryDevice`)

### Konfiguration
- `config.ts` exportiert ein über `ConfigInterface` typisiertes Objekt, gruppiert nach Bereichen (`server`, `auth`, `cors`, `database`, …)
- Werte ausschließlich über `env<T>('PREFIX_NAME', defaultValue)`; ohne Default ist die Variable Pflicht und der Prozess beendet sich mit einer Fehlermeldung
- Umgebungsvariablen in UPPER_SNAKE_CASE mit Service-Präfix (`CDN_`, `TELEMATIC_`)
- jede Variable wird in `.env.example` dokumentiert: Beschreibung, `optional, default=…` bzw. `required`, auskommentierter Beispielwert; `.env` ist in `.gitignore`

### Routen
- API URLs sind versioniert (`/api/v1/…`), UUID-Parameter mit Regex-Constraint (`generateUUIDRouteParameter`)

### Datenbank
- `postgres`
- SQL-Keywords groß, Tabellen und Spalten in snake_case, Rückgabespalten mit `AS "camelCase"` aliasen
- Migrationen mit dbmate unter `db/migrations/<timestamp>_<name>.sql` mit `-- migrate:up` / `-- migrate:down`
- Tabellen im Singular in snake_case, `id uuid DEFAULT gen_random_uuid()`, `created_at` / `updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL`
- Constraints benennen: `pk_<table>`, `fk_<table>_<referenced>`, `uq_<table>_<columns>`; Spaltendefinitionen ausrichten

## SDKs (API-Clients)
- eine Client-Klasse `<Präfix>APIClient`; der Konstruktor bekommt `url` (Trailing Slash wird entfernt), Token und ggf. `clientId`
- HTTP über natives `fetch` in einer `protected async fetch<T>(method, url, body?)`-Methode mit `cache: 'no-cache'` und `authorization: Bearer …`; `content-type: application/json` nur mit Body (axios ist Legacy, `APIV1Client` ist deprecated)
- HTTP-Methoden als Enum (`<Präfix>HTTPMethod`)
- die Antwort-Hülle `{data}` wird im Client entpackt (`…ModelAPIStructureInterface<T>`)
- eine öffentliche Methode pro Endpoint (`createDevice`, `getDevices`, `deleteDevice`, …); Pfadparameter mit `encodeURIComponent`, Query-Strings über `qs`
- Datumsfelder werden im SDK in `Date` umgewandelt, Werte werden normalisiert (z. B. Prozent / 100)
- Modelle als Interfaces unter `Model/` bzw. `model/<bereich>/`, Exceptions unter `Exception/` bzw. `exception/`, Enums unter `enum/`; innerhalb eines Repositories einheitlich bleiben
- Modell-Varianten werden im Namen unterschieden: `Small`, `Find`, `Create`, `Update` (`APIBookingSmallModelInterface`)

## README
- auf Englisch, Aufbau: Titel, Requirements, Installation bzw. Local development, Nutzung (Quick Start bzw. Routes mit Beispielen), Environment variables, Docker
