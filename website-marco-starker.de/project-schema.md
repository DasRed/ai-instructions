# Projektdaten der Webseite

Wie eine Webseite ihre Projekte beschreibt: Referenzen, Produkte, Job-Projekte, Open Source und Experimente.
Vorbild ist marco-starker.de (`src/data/projects.ts`, `src/model/*`). Die Daten sind sprachneutral, Texte kommen aus
den Übersetzungen (`project.<slug>.tagline`, `project.<slug>.summary`) und lange Texte aus
`src/content/projects/{de,en}/<slug>.md`.

## 1. Modell

Eine Datei je Interface und Enum, nur `export default` (siehe CodeGuidlines).

```ts
// src/model/ProjectInterface.ts
export default interface ProjectInterface {
    category: ProjectCategoryEnum;
    /** Eine Detailseite unter /projects/<slug> existiert (Fallstudie aus src/content/projects). */
    detail: boolean;
    /** Doku aus dem Repo nach docs-contract.md, sonst null. */
    docs: ProjectDocsInterface | null;
    /** Auf der Startseite als Teaser zeigen. */
    featured: boolean;
    image: string | null;
    links: LinkInterface[];
    name: string;
    /** npm-Paketname für Downloadzahlen, sonst null. */
    npm: string | null;
    /** Slugs verwandter Projekte, werden gegenseitig verlinkt. */
    related: string[];
    /** Repo-Name oder Produktname, in allen Sprachen gleich. */
    slug: string;
    stack: string[];
    status: ProjectStatusEnum;
    /** Kurze stumme Bildschirmaufnahme auf der Projektseite, sonst null. */
    video: ProjectVideoInterface | null;
    year: string;
}
```

```ts
// src/model/ProjectVideoInterface.ts – Dateien unter public/videos/
export default interface ProjectVideoInterface {
    /** H.264 als Rückfall, '/videos/<slug>.mp4' */
    mp4: string;
    /** Standbild vor dem Abspielen, '/videos/<slug>-poster.webp' */
    poster: string;
    /** VP9, wird bevorzugt, '/videos/<slug>.webm' */
    webm: string;
}
```

```ts
// src/model/ProjectDocsInterface.ts
export default interface ProjectDocsInterface {
    /** Standard-Branch, von dem gelesen wird. */
    branch: string;
    /** Ordner im Repo, Standard 'docs'. */
    path: string;
    /** 'DasRed/hetzner-mcp' */
    repo: string;
}
```

```ts
// src/model/ProjectCategoryEnum.ts – Filter auf der Projektseite
enum ProjectCategoryEnum {
    CLIENT      = 'client',
    EXPERIMENT  = 'experiment',
    OPEN_SOURCE = 'openSource',
    PRODUCT     = 'product',
    WORK        = 'work',
}
```

```ts
// src/model/ProjectStatusEnum.ts – Badge auf Karte und Projektseite
enum ProjectStatusEnum {
    ACTIVE       = 'active',
    EXPERIMENT   = 'experiment',
    UNMAINTAINED = 'unmaintained',
}
```

`LinkKindEnum` bekommt `NPM` und `DOCS` dazu (bestehend: `APP_STORE`, `ARTICLE`, `DEMO`, `DEV_TO`, `GITHUB`,
`MEDIUM`, `WEBSITE`).

## 2. Regeln

- **Slug:** Repo-Name bei Open Source, Produktname bei Produkten, Kunden- oder Projektname bei Referenzen. Kleinbuchstaben,
  kebab-case, in allen Sprachen gleich. Ändert sich ein Slug, braucht der alte Pfad eine 301-Weiterleitung.
- **Kategorie vs. Status:** Die Kategorie sagt, was es ist (Filter), der Status, wie es gepflegt wird (Badge).
  Beispiel: discord-mcp ist `OPEN_SOURCE` mit Status `EXPERIMENT`; ai-digit ist `EXPERIMENT` mit Status
  `UNMAINTAINED`.
- **docs** nur bei öffentlichen Repos mit Doku nach `docs-contract.md`. Private Repos haben `docs: null` und höchstens
  eine Fallstudie (`detail: true`).
- **links:** GitHub-Link nur bei öffentlichen Repos. Bei Kundenseiten nur mit Einverständnis des Kunden zeigen.
- **related** immer gegenseitig pflegen (z. B. die drei esbuild-Plugins untereinander, entity-view ↔ minecraft-api).
- **npm:** Downloadzahlen werden zur Laufzeit einmal am Tag serverseitig von
  `https://api.npmjs.org/downloads/point/last-month/<paket>` geholt (alles andere ist beim Build eingebaut). Sie sind nur ein Anhaltspunkt (Bots, Mirrors) und werden als „ca. X/Monat“ gezeigt.

## 3. Beispiel

```ts
{
    category: ProjectCategoryEnum.OPEN_SOURCE,
    detail:   false,
    docs:     {branch: 'main', path: 'docs', repo: 'DasRed/hetzner-mcp'},
    featured: true,
    image:    null,
    links:    [
        {href: 'https://github.com/DasRed/hetzner-mcp', kind: LinkKindEnum.GITHUB},
    ],
    name:     'hetzner-mcp',
    npm:      null,
    related:  ['nginx-proxy-manager-mcp', 'discord-mcp'],
    slug:     'hetzner-mcp',
    stack:    ['TypeScript', 'Node.js', 'MCP', 'Docker'],
    status:   ProjectStatusEnum.ACTIVE,
    video:    null,
    year:     '2026',
},
```

## 4. Neues Projekt auf marco-starker.de aufnehmen

1. Eintrag in `src/data/projects.ts` nach diesem Schema.
2. Übersetzungen `project.<slug>.tagline` und `project.<slug>.summary` in `src/translations/de` und `en`.
3. Bei `detail: true`: `src/content/projects/de/<slug>.md` und `en/<slug>.md`.
4. Bei `docs`: Repo erfüllt `docs-contract.md`, hat `docs.yml` und das Secret `WEBSITE_RELEASE_TOKEN`
   (`docs-release.md`). Danach einmal ein Release der Webseite auslösen.
5. Bild unter `public/images/projects/`.
6. Video (optional) unter `public/videos/`: 1280 px breit, 30 fps, ohne Ton, unter einer Minute und wenige MB –
   als MP4 (H.264, `+faststart`) und WebM (VP9) plus Poster als WebP. Die Projektseite spielt es stumm in Schleife
   mit Bedienelementen ab.
