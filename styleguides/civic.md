# Styleguide „Civic“ – Warme Cremeflächen, Serifenschlagzeilen und ein kräftiger Akzent

> **Zweck:** Gestaltungsreferenz für neue Websites und Webanwendungen. Dieser Guide beschreibt die **visuelle Sprache, Informationsarchitektur und Interaktionsmuster** eines serviceorientierten Website-Konzepts (im Folgenden „Vorbild“). Stand der Sichtprüfung: 31. Oktober 2026.

## Kurzfassung für neue Projekte

Gestalte eine ruhige, hochwertige und gut zugängliche Website: warme Cremeflächen, dunkle Serifenschlagzeilen, sehr lesbare serifenlose UI-Texte, ein klarer kräftiger Aktionsfarbton, großzügige Abstände, lokale bzw. thematisch passende Fotografie und schnell erfassbare Service-Karten. Setze ausdrucksstarke Markenmomente gezielt in Hero, Themenaufmachern und Footer ein; halte Suche, Formulare, Übersichten und andere Arbeitsflächen sachlich und übersichtlich. Übernimm **Struktur und Gestaltungsprinzipien**, aber ersetze Wappen, Rose, Ortsbilder, Ortsnamen und Inhalte des Vorbilds und gegebenenfalls die Farbsemantik durch die Identität des neuen Projekts.

## 1. Leitidee und Informationsarchitektur

- **Eine Marke, zwei Gestaltungsdichten:** Identitätsflächen dürfen mit großer Serifentypografie, einem handschriftlichen Akzent und einer mehrfarbigen Markengeste auffallen. Serviceflächen bleiben auf hellen, warmen Hintergründen ruhig; kräftige Farben markieren dort vor allem Aktionen und Zustände.
- **Aufgaben zuerst:** Nutzer sollen häufige Anliegen schnell erreichen. Prominente Suche, direkte Einstiegskarten, kurze Beschriftungen und eine leicht auffindbare Rückfallebene wie A–Z oder Themenindex gehören zum Muster.
- **Zwei Zugänge zum Inhalt:** Wenige klare Hauptbereiche plus querschnittliche Wege nach Anlass, Lebenslage oder Aufgabe. Die vier Rubriken und zwölf Lebenslagen des Vorbilds sind Beispiele, keine festen Vorgaben für andere Projekte.
- **Vom Überblick zur Handlung:** Eyebrow → prägnante Überschrift → kurze Einordnung → Karten/Listen/Flow → sichtbarer nächster Schritt. Detailseiten bieten Brotkrumen, einen klaren Einstieg und verwandte Inhalte oder Kontaktmöglichkeiten im Kontext.
- **Redaktionelle Freiheit auf gemeinsamer Basis:** Themenseiten dürfen individuell komponiert sein, nutzen aber dieselben Farb-, Typografie-, Fokus- und Kontrastregeln.

## 2. Farben und Rollen

Die folgenden Hexwerte wurden aus den CSS-Farbvariablen der gerenderten Website abgelesen. Token-Namen beziehen sich auf das Vorbild; in einem anderen Projekt können sie semantisch umbenannt werden.

| Token        | Wert      | Verwendung                                                           |
|--------------|-----------|----------------------------------------------------------------------|
| `cream`      | `#FAF7F2` | Primärer Seiten- und Servicehintergrund                              |
| `cream-dark` | `#F1ECE1` | Abgesetzte Flächen, Karten, Abschnittswechsel                        |
| `gold-100`   | `#F6ECD5` | Sehr helle Hervorhebung, Hinweisband                                 |
| `ink`        | `#1C1C1C` | Haupttext, dunkle Identitätsfläche                                   |
| `ink-soft`   | `#555555` | Sekundärer Fließtext                                                 |
| `ink-muted`  | `#6F6B63` | Metadaten und zurückhaltende Labels; Kontrast prüfen                 |
| `ink-line`   | `#E4E0D7` | Feine Trennlinien und Kartenränder                                   |
| `red-500`    | `#C8102E` | Primäre Aktion, Markenakzent                                         |
| `red-600`    | `#B00E28` | Kräftige Aktionsfläche                                               |
| `red-700`    | `#A50D24` | Links, Eyebrows und Akzente auf hellen Flächen                       |
| `red-900`    | `#6D0818` | Tiefe Markenfläche, Hero, Footer                                     |
| `gold-200`   | `#E8D5A3` | Heller Akzent auf dunklen Flächen                                    |
| `gold-500`   | `#B8964E` | Dekor und Illustration, **nicht** für normalen Text auf hellem Grund |
| `gold-700`   | `#6E5A30` | Dunklere Goldakzente, Text auf hellen Karten                         |

**Erprobte Kombinationen aus der Konzeptseite:**

| Fläche                  | Text und Eyebrow                  | Aktion                     |
|-------------------------|-----------------------------------|----------------------------|
| Service: `cream`        | Titel `ink`, Akzent `red-700`     | Roter Primärbutton         |
| Karte: `cream-dark`     | Titel `ink`, Eyebrow `gold-700`   | Roter Primärbutton         |
| Identität: `ink`        | Titel `cream`, Eyebrow `gold-200` | Heller invertierter Button |
| Aktion: `red-600`       | Text `cream`, Eyebrow `gold-200`  | Heller invertierter Button |
| Goldfläche: `gold-700`  | Text `cream`                      | Heller invertierter Button |
| Tiefe Fläche: `red-900` | Heller Text                       | Heller invertierter Button |

Die Konzeptseite nennt für Text auf `gold-500` nur **2,6:1** Kontrast und schließt diese Paarung aus. Prüfe Text, Bedienelemente, Fokus und Statusfarben im konkreten Projekt gegen die geltenden WCAG-Anforderungen; eine ähnliche Optik allein belegt keine Barrierefreiheit.

### Mehrfarbiger Akzent

Das Vorbild verwendet **neun feste Farbsegmente statt eines Verlaufs**, beispielsweise als dünne obere Farbleiste. Die Segmente sind `rb-1` `#E91E8C`, `rb-2` `#E5202E`, `rb-3` `#F4830A`, `rb-4` `#F5D400`, `rb-5` `#0A9E4C`, `rb-6` `#009AC7`, `rb-7` `#3B3F9A`, `rb-8` `#8B4A2A`, `rb-9` `#1A1A1A`. Das Konzept setzt Grün (`rb-5`) für Bestätigungen, Blau (`rb-6`) für Information und Orange (`rb-3`) für Baustellen ein; Türkis (`#18ADA4`) markiert profilbezogene Hinweise. In einem neuen Produkt dürfen diese Bedeutungen nur übernommen werden, wenn sie dort verständlich und konsistent sind. Die Farbleiste ist ein optionaler **Markenakzent**, keine Pflicht für jede Seite.

## 3. Typografie

**Aktuell gerenderte Website:**

- Display und Überschriften: `Source Serif 4 Variable`, Fallback `Source Serif 4`, `Georgia`, `serif`. Kräftig, redaktionell, auf großen Identitätsflächen auch versal.
- Fließtext und UI: `Atkinson Hyperlegible Next Variable`, Fallback `Atkinson Hyperlegible Next`, System-Sans. Klar und sehr gut lesbar für Navigation, Formulare, Karten und Tabellen.
- Handschriftlicher Akzent: `Madelon Script`, mit Serif-Fallback. Maximal **ein bewusster Einsatz pro Layout**, nicht als Fließtext oder für Bedienelemente.
- Beobachtete Desktop-Beispiele: Hero-H1 etwa `5.5rem` bei `0.95` Zeilenhöhe; normales Seiten-H1 `3rem` / `1.05`; Abschnitts-H2 `1.875–2.25rem`; Fließtext im Seitenintro `1.125rem` mit großzügiger Zeilenhöhe. Diese Werte sind Beispiele aus der gerenderten Seite, keine vollständige Typoskala.

**Quellenabweichung:** Die redaktionelle Konzeptseite bezeichnet Display als „Playfair“ und Body/UI als „Inter“, während die technisch gerenderte Seite die oben genannten Font-Familien verwendet. Für eine visuelle Annäherung an den **aktuellen Auftritt** gelten Source Serif 4 und Atkinson Hyperlegible Next. Wer ausdrücklich der älteren textlichen Designbeschreibung folgen möchte, kann Playfair/Inter einsetzen. Diese Wahl im neuen Projekt einmal festlegen und konsistent halten.

**Satzregeln:** Deutliche Hierarchie, kurze Überschriften, maximal eine H1 pro Seite, ausreichend Zeilenhöhe im Fließtext. Versalien vor allem in großen Marken-Headlines oder kleinen Eyebrows; UI-Beschriftungen und längere Inhalte in normaler Schreibweise. Script nie als einzige Informationsquelle.

## 4. Layout, Abstände und Bildsprache

- **Ruhiger Rhythmus:** Breite Cremeflächen, großzügiger Weißraum, feine Linien und gezielte Wechsel zu `cream-dark`, `gold-100` oder dunklen Markenflächen. Kräftige farbige Abschnitte sparsam einsetzen.
- **Inhaltsbreite:** Die Startseite nutzt beispielsweise `max-w-7xl` (etwa `80rem`), `1rem` horizontalen Innenabstand und auf größeren Viewports `2rem`. Typische Abschnittsabstände: `4rem` vertikal, einzelne Bereiche `5rem`. Das sind beobachtete Implementierungswerte, die je nach Inhalt angepasst werden können.
- **Raster:** Auf breiten Screens mehrere gleichartige Karten nebeneinander; mobil in eine sinnvolle, lesbare Reihenfolge umstellen. Karten besitzen leichte Ränder, wenig oder keine dekorative Rundung und klar voneinander getrennte Inhalte.
- **Hero:** Große Serifenschlagzeile und ein sehr kurzer Nutzen-/Handlungstext; auf der Startseite daneben ein großformatiges lokales Foto und eine dominante Suche. Auf Unterseiten Brotkrumen, Eyebrow, H1 und kompakter Beschreibung; ein dezentes lokales Motiv kann die Fläche begleiten.
- **Fotografie:** Echte, zum Thema passende Menschen, Orte und Situationen statt austauschbarer Stockbilder. Das Vorbild nutzt breite Bildausschnitte, `object-cover`, sichtbare Bildnachweise und teilweise Illustration/Wasserzeichen. Bildrechte und Herkunft für jedes neue Projekt eigenständig klären.
- **Dekor:** Die Rose des Vorbilds ist ein lokales Markenzeichen und erscheint dort als Bullet, Loader oder Wasserzeichen. In anderen Projekten durch ein eigenes, geeignetes Motiv ersetzen oder weglassen.

## 5. Komponenten und Interaktion

### Navigation und Suche

- Kompakter, oben haftender Header auf heller Fläche; schmale mehrfarbige Leiste als optionaler Markeneinstieg.
- Wenige klar benannte Hauptbereiche, sichtbarer aktiver Zustand, Suchfeld schon im Header. Auf der Startseite eine größere Suche mit Beispiel- bzw. häufig gesuchten Begriffen.
- Brotkrumen auf Unterseiten, ein erkennbarer Zurückweg und verständliche Linktexte.
- Suchergebnisse nach Relevanz und Aufgabe aufbereiten; A–Z/Index als alternative Auffindbarkeit. Die Suche des Konzepts ist eine **Produktidee** und kein Beleg für eine fertig angebundene Suchinfrastruktur.

### Buttons, Links und Karten

- Primärbutton: gefüllter kräftiger Akzent, gut lesbare helle Schrift; im Konzept häufig pillenförmig. Sekundärbutton: Outline. Auf dunklen Flächen heller, invertierter Button. Textlink mit eindeutiger Beschriftung und optionalem Pfeil.
- Ein Aktionsziel pro Karte klar hervorheben. Häufig genutzte Services als kompakte Tiles mit Icon, Titel und kurzer Ergänzung; redaktionelle Karten dürfen Bild, Kategorie, Datum und Kurztext zeigen.
- Nebenbereiche und Formulare visuell ruhiger halten als Hero- und Kampagnenflächen. Hinweise und Statusmeldungen mit Text **und** Symbol, nie nur mit Farbe kodieren.
- Kontextkarten nur dort anzeigen, wo sie die aktuelle Aufgabe unterstützen; Profildaten und personalisierte Hinweise brauchen eine nachvollziehbare Datenquelle und eigene Datenschutzentscheidung.

### Ikonografie

- Im Konzept: **Tabler Icons**, Strichstärke **1.75**.
- Drei Badge-Formen: rotes Quadrat für Service-Tiles, goldener Kreis für illustrative Icons, dezent getönte Rundung für Inline-Hinweise und Querverweise.
- Icons unterstützen die Beschriftung; sie ersetzen sie nicht. Einheitliche Größe, Linienstärke, Ausrichtung und genügend Kontrast.

## 6. Inhalt und Zugänglichkeit

- Nutzerfragen und Handlungen in den Vordergrund stellen: „Was möchten Sie erledigen?“ ist das Muster, nicht die amtliche Organisationsstruktur.
- Kurze Sätze, verständliche Begriffe, konkrete nächste Schritte und sichtbare Ansprechpartner. Aktuelles mit Kategorie und Datum, Veranstaltungen mit Datum/Ort, Dienste mit Voraussetzungen und Handlungsziel.
- Semantische Überschriften, Tastaturbedienung, sichtbarer Fokus, beschriftete Formularfelder, Fehlertexte am Feld, Alternativtexte für informative Bilder, leere Alt-Texte für reine Dekoration.
- Layout und Bedienung mobil zuerst entwerfen. Keine Information ausschließlich durch Hover, Farbe, Animation oder ein dekoratives Motiv vermitteln. Bewegung auf das Nötige begrenzen und reduzierte Bewegung berücksichtigen.
- Das Vorbild ist ausdrücklich eine **statische Gestaltungs- und Strukturstudie**: Termine, Formulare, Konto und einige Dienste sind Demo. Für ein echtes Produkt müssen Inhalte, Datenquellen und Funktionen fachlich geprüft und angeschlossen werden.

## 7. Anwendung auf ein anderes Projekt

Vor der Umsetzung diese Entscheidungen treffen:

1. **Kontext:** Zielgruppe, wichtigste drei bis sechs Aufgaben, Tonalität, rechtliche und fachliche Anforderungen.
2. **Marke:** Name, Logo/Motiv, Bildwelt und Akzentfarbe. Die warmen neutralen Flächen und der Kontrastgedanke können bleiben; die Identität des Vorbilds wird ersetzt.
3. **Informationsstruktur:** Passende Hauptbereiche und querschnittliche Einstiege nach Aufgabe oder Anlass definieren. Keine Rubrik des Vorbilds nur aus optischen Gründen übernehmen.
4. **Gestaltungsdichte:** Festlegen, welche Seiten Identitätsflächen sein dürfen und welche als ruhige Arbeitsflächen funktionieren müssen.
5. **Komponenten:** Suche, Buttons, Service-Tiles, redaktionelle Karten, Hinweise, Formulare und Detailseiten mit denselben Tokens gestalten.
6. **Qualität:** Desktop und Mobilgerät, Tastatur, Fokus, Kontrast, Textlängen, echte Inhalte sowie Lade- und Fehlerzustände prüfen.

### Kompakter Prompt zum Wiederverwenden

> Verwende `./styleguides/civic.md` als Gestaltungsreferenz. Das Projekt ist **[Produkt/Website]** für **[Zielgruppe]** mit den Hauptaufgaben **[Aufgaben]**. Übertrage die Prinzipien für Typografie, warme Flächen, klare Service-Karten, Suche und gezielte Markenmomente. Passe **[Farben/Logo/Bildwelt/Ton]** an die Marke **[Name]** an. Die wichtigsten Seiten/Funktionen sind **[Seiten/Funktionen]**. Setze responsive und barrierearm um.

### Prüfliste für das Ergebnis

- Ist die wichtigste Aufgabe ohne Umwege auffindbar?
- Bleiben Arbeitsflächen ruhig und gut lesbar, während Markenmomente bewusst gesetzt sind?
- Sind Farben, Schriftwahl und Komponenten konsistent und kontrastreich?
- Funktionieren Navigation, Karten, Suche und Formulare mit Tastatur und auf schmalen Bildschirmen?
- Sind Motive, Texte, Daten und Funktionen tatsächlich passend zum neuen Projekt?

## Abgrenzung

- Die Hexwerte, Font-Familien und einige Größen/Abstände wurden an der am 31. Oktober 2026 gerenderten Website abgelesen. Diese Datei ist eine **abgeleitete Arbeitsreferenz** für andere Projekte und keine Kopie aller Implementierungsdetails oder eine Lizenz für Bilder, Logo und Texte.
