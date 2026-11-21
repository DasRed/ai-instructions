---
title: Styleguides
description: Fifteen design styleguides for websites, from calm to playful, and how to hand them to an agent.
order: 30
slug: styleguides
section: Documents
---

The folder [`styleguides/`](https://github.com/DasRed/ai-instructions/tree/main/styleguides) holds one file per design
style. A styleguide describes colours and their roles, typography, layout, components, motion and a checklist – precise
enough for an agent to build a page from it without seeing a reference. The styleguides are written in German.

## Overview

| Styleguide  | File             | Style                                              | Suits                                                  |
|-------------|------------------|----------------------------------------------------|--------------------------------------------------------|
| Civic       | `civic.md`       | warm cream surfaces, serif headlines, one accent   | service-oriented sites, default for new sites          |
| Bento       | `bento.md`       | tile grid in petrol, light and dark                | portfolios, product pages, dashboards                  |
| Blockcraft  | `blockcraft.md`  | voxel world of blocks, pixel font                  | game jams, coding courses, gaming communities          |
| Blueprint   | `blueprint.md`   | drafting paper, blueprints, pencil yellow          | engineering offices, architecture, technical consulting |
| Comic       | `comic.md`       | newsprint, ink, halftone dots                      | events, offers for kids and teens, product launches    |
| Cosmos      | `cosmos.md`      | deep space, violet and cyan, glass surfaces        | tech start-ups, AI products, astronomy                 |
| DasRed      | `dasred.md`      | red sky, purple night, gold                        | brands, teams, streamers with a red identity           |
| Editorial   | `editorial.md`   | magazine on warm paper                             | authors, consultancies, culture, long reads            |
| Hello World | `hello-world.md` | white paper, blinking cursor, code as decoration   | developer portfolios, dev tools, tech blogs            |
| Narf        | `narf.md`        | lab notebook, ballpoint blue, highlighter          | maker portfolios, hackspaces, side projects            |
| Philipp     | `philipp.md`     | code bento in signal red                           | freelancers, agencies, dev tools with a strong brand colour |
| Retro 90s   | `retro90s.md`    | homepage from 1996                                 | anniversaries, retro events, fun pages                 |
| Studio      | `studio.md`      | Swiss grid, black and signal orange                | agencies, studios, consultancies                       |
| Superhero   | `superhero.md`   | comic hero in sky blue, red and sun yellow         | freelancers, emergency services, campaigns             |
| Terminal    | `terminal.md`    | dark shell, phosphor green and amber               | dev tools, CLIs, open source, DevOps                   |

## Structure of a styleguide

Most styleguides follow the same outline:

| Section                       | Contents                                                       |
|-------------------------------|----------------------------------------------------------------|
| Purpose, summary              | what the style is for and what it looks like in one paragraph  |
| Guiding idea                  | the principles every decision follows                          |
| Colours and roles             | every colour with value and job (surface, text, action, state …) |
| Typography                    | fonts, sizes, weights                                          |
| Layout, components, motion    | grid, surfaces, typical building blocks, animations            |
| Dos and don'ts                | checklist for the finished result                              |
| Tokens as CSS                 | colour roles as CSS variables to copy                          |
| Compact prompt                | the style in a few sentences, ready for an agent               |

Civic differs: instead of tokens and a compact prompt it has a section on applying it to another project, with its own
checklist.

## Usage

Give the agent the whole styleguide and say what comes from the project:

```markdown
Design the landing page following ./styleguides/bento.md.
Keep layout, typography and components, but replace the petrol accent with our brand colour #1F6FEB.
Check the result against section "Dos und Don'ts" before you finish.
```

For a quick draft the "Kompakter Prompt" (compact prompt) section at the end of the file is often enough.

> [!IMPORTANT]
> Some styleguides draw on well-known motifs (comics, block games, superheroes). Only principles and mood are taken
> over, never characters, logos, crests or other protected motifs.
