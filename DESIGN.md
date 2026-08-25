---
name: Roger Wei
description: Vinyl Plot — black shop, unprinted grey vinyl, cutter-red path, roll-edge keys.
colors:
  shop: "#0a0a0a"
  void: "#010101"
  vinyl: "#a0a0a2"
  ink: "#121212"
  ink-soft: "#2c2c2e"
  cut: "#c41e1e"
  edge: "#c5c7cc"
  roll-lit: "#6b696a"
typography:
  display:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: "0"
  headline:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Saira, Avenir Next Condensed, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  sheet: "0"
  roll: "2.4rem 0.2rem 0.2rem 2.4rem"
  core: "99px"
spacing:
  grid: "0.65rem"
  feed: "1.15rem"
  roll: "1.35rem"
  inset: "clamp(1rem, 4vw, 2.5rem)"
components:
  skip:
    backgroundColor: "{colors.cut}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    padding: "0.4rem 0.7rem"
  roll-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.35rem 0.15rem"
  roll-link-on:
    backgroundColor: "transparent"
    textColor: "{colors.cut}"
    typography: "{typography.label}"
  vinyl:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
  vinyl-copy:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.sheet}"
    padding: "1.6rem 1.7rem 1.8rem"
  vinyl-tile:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.sheet}"
    height: "7.5rem"
  job:
    backgroundColor: "{colors.void}"
    textColor: "{colors.edge}"
    typography: "{typography.display}"
---

# Design System: Roger Wei

## Overview

**Creative North Star: "Vinyl Plot"**

The site is a wrap plotter in a black shop. Unprinted grey vinyl feeds past a cutter. A visitor reads ROGER WEI on the sticky rail, sees a huge empty portrait sheet, then opens Marvin or Lithium from the roll. The world is a working bed, not a letter and not a parked car.

Personality is job-ticket and industrial: condensed uppercase on the machine, quieter sentences on the vinyl. Density is a vertical feed of large rectangles. The shop stays dark; the material that carries content is grey film, stroked by the cutter.

Confirmed refusals: a centered cream editorial page, a vehicle or wrap livery as identity, serif display type, aluminum decks, and amber lamps.

**Key Characteristics:**
- Black shop ground with a near-black cutter rail
- Unprinted grey vinyl (flat fill + tiled film) on both the roll and every sheet
- Cutter-red used only as path: stroke, laser, focus, selection, lit key
- Saira Extra Condensed job lettering; Saira for sentences
- Three primary keys printed vertically on the roll edge
- Square sheets with opposite-corner registration marks
- Labeled empty slots stay empty until real content exists

## Colors

A dark shop with one material (grey vinyl) and one tool color (cutter red). Ink sits on vinyl; edge type sits on the shop.

### Primary
- **Cutter Red** (`cut`): The tool path. 1px sheet borders, the 2px laser, `:focus-visible` rings, text selection, skip-link fill, and the lit roll key. Never a page fill or a sheet fill.

### Neutral
- **Shop** (`shop`): Full-page ground. The room around the bed.
- **Void** (`void`): Sticky cutter rail. Darker than the shop so the job lockup reads as machine, not page chrome.
- **Vinyl** (`vinyl`): Unprinted sheet and roll field. Always paired with the vinyl film tile (`assets/vinyl.png` at 420px).
- **Ink** (`ink`): Job type on vinyl — roll keys at rest, “Portrait” on the hero sheet.
- **Ink Soft** (`ink-soft`): Sentences and empty-tile marks on vinyl. Softer than ink so unfilled slots stay quiet.
- **Edge** (`edge`): Type on the shop — body default and the ROGER WEI lockup.
- **Roll Lit** (`roll-lit`): Dim plot status: rail meta, section marks, empty-slot notes.

### Named Rules
**The Cutter-Red Rule.** Cut is the path, not the paint. It outlines sheets, draws the laser, lights the current key, and marks focus. It does not fill the shop or a vinyl field.

**The Unprinted-Vinyl Rule.** Sheets and the roll are the same grey film. Copy and labels sit in ink on vinyl. Do not introduce a second paper.

## Typography

**Display Font:** Saira Extra Condensed (Arial Narrow fallback)
**Body Font:** Saira (Avenir Next Condensed fallback)

**Character:** Extra Condensed is the plotter’s job lettering — tight, uppercase, heavy. Saira carries sentences on the sheets. The pairing is shop-ticket plus readable copy, not editorial serif.

### Hierarchy
- **Display** (700, `clamp(2rem, 6vw, 3.4rem)`, line-height 0.85, tracking 0, uppercase): ROGER WEI on the cutter rail. At 720px and below, size drops to `clamp(1.5rem, 8vw, 2.2rem)`.
- **Headline** (700, `clamp(1.5rem, 3vw, 2.1rem)`, tracking 0.02em, uppercase): Type printed on a hero sheet (Portrait) and the hero section mark.
- **Title** (700, 1.35rem, tracking 0.02em, uppercase): Feed marks — Bio, Now, Photos, and the rest.
- **Body** (400, 1.05rem, line-height 1.45): Sentences on vinyl. Max useful width on copy sheets is 42rem.
- **Label** (600, 1.15rem, tracking 0.06em, uppercase): Roll keys. Smaller tracked Extra Condensed (0.92rem / 0.12em, or 0.95rem / 0.06em) is for slot notes and rail plot status, not a second family.

### Named Rules
**The Job-Lettering Rule.** Names, marks, and keys are Saira Extra Condensed in uppercase. Sentences on vinyl are Saira. Do not bring a serif into the shop.

## Layout

The spatial model is a plotter bed: sticky cutter rail on top, a tall vinyl roll of keys on the left, a single-column feed of sheets on the right.

The bed is a two-column grid — 4.5rem roll + fluid feed — with `spacing.inset` on the right and 1.25rem / 4rem vertical padding. Below 720px the roll column is 2.7rem; page padding tightens to 0.7rem. The roll stays sticky (`top: 4.6rem` desktop, `3.8rem` mobile) and fills the viewport height under the rail. The feed stacks sheets with `spacing.feed`.

Photo and year windows use a 4-column grid (`spacing.grid`); hobby uses 3. Both collapse to 2 columns at 720px. The portrait sheet is square, `width: min(100%, 36rem)`, and the hero vinyl is at least `min(68vh, 38rem)` (70vw on small screens).

The cutter head is a decorative overlay on the bed. It translates to the sheet whose midpoint crosses ~38% of the viewport; `prefers-reduced-motion: reduce` freezes it.

### Named Rules
**The Feed-and-Roll Rule.** Primary navigation lives as vertical keys on the roll. Content is a stack of vinyl sheets to the right. Do not move the three keys into a horizontal text bar.

## Elevation & Depth

Depth is shop shadow: dark, soft, directional. There are no inset metal wells and no glowing lamps. The roll casts to the right; sheets sit slightly off the bed; the sheet under the cutter lifts a step; the carriage drops a tight shadow; the laser has a short red bloom.

### Shadow Vocabulary
- **Roll falloff** (`box-shadow: 10px 0 24px rgb(0 0 0 / 0.55)`): The standing vinyl roll.
- **Sheet rest** (`box-shadow: 0 8px 18px rgb(0 0 0 / 0.35)`): Every vinyl sheet at rest.
- **Sheet under cutter** (`box-shadow: 0 10px 28px rgb(0 0 0 / 0.45)`): The feed sheet currently in the beam.
- **Carriage** (`filter: drop-shadow(0 6px 10px rgb(0 0 0 / 0.55))`): The cutter-head raster.
- **Laser bloom** (`box-shadow: 1px 2px 6px rgb(196 30 30 / 0.45)`): The 2px cut path under the head.

### Named Rules
**The Shop-Shadow Rule.** Shadows are dark falloffs off the roll and under sheets. Do not add inset deck wells or amber glows.

## Shapes

Vinyl sheets are sharp rectangles (`rounded.sheet` = 0) with a 1px Cut stroke. Opposite corners carry 10px L-shaped registration marks, inset 6px — top-left and bottom-right. The roll is the only rounded mass: fat left radius, almost-square right (`2.4rem 0.2rem 0.2rem 2.4rem`; `1.4rem / 0.15rem` under 720px). The roll core is a 0.45rem pill.

### Named Rules
**The Registration Rule.** Sheets stay square-cornered, stroked in Cut, with L-marks at opposite corners. Only the roll gets the fat-left radius.

## Components

### Buttons
The only filled control is the skip link: Cut field, white Extra Condensed uppercase, padding 0.4rem 0.7rem, no radius. Hover is unused; `:focus` slides it into view. There is no primary marketing button.

- **Shape:** square (0)
- **Primary (skip):** Cut fill, white type
- **Hover / Focus:** 2px Cut outline, 3px offset (global `:focus-visible`)

### Cards / Containers
Vinyl sheets are the only content surface.

- **Corner Style:** square, plus registration L-marks on `::before` / `::after`
- **Background:** Vinyl fill + film tile at 420px
- **Shadow Strategy:** sheet rest; under-cutter lift when in the beam
- **Border:** 1px Cut
- **Internal Padding:** copy sheets 1.6rem 1.7rem 1.8rem; portrait and tiles have no copy inset
- **Copy:** Ink Soft, max-width 42rem
- **Tiles:** 7.5rem min-height, Extra Condensed centered uppercase; year windows 4.5rem min-height at 1.6rem

### Navigation
Roll keys are Extra Condensed uppercase, vertical (`writing-mode: vertical-rl` + 180° rotate), Ink at rest. Hover and current page are Cut; current page also gets a 2px Cut hair on the left (the side that reads as the key’s baseline after rotation). No pills, no aluminum keys.

### Signature: Cutter rail
Sticky Void bar. ROGER WEI in Display next to the handwritten RW raster (`assets/rw-script.png`, 2.4rem; 1.7rem on small screens). Opposite: plot status in Extra Condensed, Roll Lit, uppercase (“Plot · unprinted”, “Plot · Marvin”). 1px seam `#1c1c1c` under the rail.

### Signature: Cutter head
Decorative carriage raster (`assets/cutter-head.png`) plus a full-width 2px Cut laser. Tracks the in-view sheet. Hidden from assistive tech. Pointer-events none.

### Signature: Empty slot note
Extra Condensed, 0.92rem, tracking 0.12em, uppercase, Roll Lit. Sits under an unfilled sheet. When a portrait image loads, the on-sheet label may flip to mix-blend difference — that is a filled-state exception, not a second type style to reuse empty.

## Do's and Don'ts

### Do:
- **Do** keep the shop black and put all content on unprinted grey vinyl with the film tile.
- **Do** stroke sheets in Cut at 1px and mark opposite corners with registration L’s.
- **Do** letter the name, marks, and keys in Saira Extra Condensed uppercase.
- **Do** keep About me / Marvin / Lithium as vertical keys on the roll; light the current key in Cut.
- **Do** leave labeled empty vinyl when portrait, bio, hobbies, photos, contact, resume, or demos are missing.
- **Do** use a 2px Cut focus ring with 3px offset.

### Don't:
- **Don't** set the page as a centered cream letter or any serif-editorial column.
- **Don't** use a parked car, wrap livery, or vehicle silhouette as identity.
- **Don't** fill empty sheets with invented bio, metrics, quotes, or hobby names.
- **Don't** fill large surfaces with Cut — it is the path only.
- **Don't** round vinyl sheets into cards or restyle the roll keys as a horizontal text bar.
- **Don't** revive aluminum decks, amber lamps, or cream/serif type from the discarded rack world.
