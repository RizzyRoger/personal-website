---
name: Roger Wei
description: HyperCard Stack — one-bit shoebox, painted invert buttons, pixel chrome.
colors:
  paper: "#ffffff"
  ink: "#000000"
  desk: "#d4d4d4"
  chrome: "#ececec"
  dim: "#5a5a5a"
typography:
  display:
    fontFamily: "Silkscreen, ChiKareGo, Krungthep, monaco, monospace"
    fontSize: "clamp(1.05rem, 2.4vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Silkscreen, ChiKareGo, Krungthep, monaco, monospace"
    fontSize: "clamp(0.85rem, 2vw, 1.05rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Silkscreen, ChiKareGo, Krungthep, monaco, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, Geneva, Lucida Grande, Tahoma, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "Silkscreen, ChiKareGo, Krungthep, monaco, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  card: "1.1rem 1.25rem 1.4rem"
  key: "0.32rem 0.4rem"
  paint: "0.4rem 0.7rem"
  window: "1.1rem"
components:
  paint-fill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "{spacing.paint}"
  paint:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "{spacing.paint}"
  paint-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "{spacing.paint}"
  key:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.key}"
  key-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.key}"
  menu:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.45rem"
  menu-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.45rem"
---

# Design System: Roger Wei

## Overview

**Creative North Star: "The HyperCard Shoebox"**

The site is one HyperCard field sitting on a grey desk. A visitor reads **Roger Wei** in the menu bar, walks Photo / Bio / Contact, then paints a button to Marvin, Lithium, or Group Four. Skip-keys jump to a window; they do not leave the desk.

The world is one-bit: black ink on white paper, hard 2px rules, painted invert for the live control. Chrome is Chicago-like pixel type (Silkscreen). Sentences are Geneva-like (Source Sans 3). Photos that belong on a card are either a Floyd–Steinberg 1-bit plate or a grayscale contrast punch — never a color car-hero.

Plaza Beds, Vinyl Plot, and the cream site are retired on `main`. Restore Plaza Beds from git branch `plaza-beds` or tag `plaza-beds-backup`.

**Key Characteristics:**

- One scrolling field. Ten skip-keys. Many small stack windows.
- Painted invert buttons, not pills or ghosts.
- Fixed card rectangles in the Plaza Beds grouping; hashes jump, scroll-spy lights the rail.
- Empty photo beds stay labeled empty until a file lands at the `data-src` path.

## Colors

The palette is a 1-bit Macintosh desk: paper, ink, and two greys for chrome.

### Primary
- **Ink** (`#000000`): rules, type, invert fills, the live skip-key.

### Neutral
- **Paper** (`#ffffff`): cards, menu bar, invert text.
- **Desk** (`#d4d4d4`): page ground, with a 4px scanline hatch.
- **Chrome** (`#ececec`): stack-contents rail.
- **Dim** (`#5a5a5a`): field stamp and empty-bed notes only.

### Named Rules
**The One-Bit Rule.** Do not add a brand color. Invert is the only emphasis.

## Typography

**Display Font:** Silkscreen (ChiKareGo, Krungthep, monaco)
**Body Font:** Source Sans 3 at variation weight 500 (Geneva, Lucida Grande, Tahoma)

**Character:** Pixel chrome names the stack; a humanist sans reads the card. Not Archivo, not Inter, not Space Grotesk.

### Hierarchy
- **Display** (Silkscreen, `clamp(1.05rem, 2.4vw, 1.45rem)`): card titles.
- **Headline** (Silkscreen 700): **Roger Wei** in the menu bar.
- **Title** (Silkscreen 0.68rem): window titles, menus, painted buttons.
- **Body** (Source Sans 3, 1.05rem / 1.45, max ~68ch): biography and project copy, including the author's own spelling.
- **Label** (Silkscreen 0.62rem, uppercase on rail headings): STACK CONTENTS, field stamp, skip-keys.

### Named Rules
**The Two-Face Rule.** Pixel type for chrome. Source Sans for sentences. Do not set body copy in Silkscreen.

## Layout

A full-bleed desk. Sticky menu bar. Sticky 12.5rem STACK CONTENTS rail. A 12-column field of small stack windows with Plaza Beds grouping: Photo `1/1/3/9`, Bio `1/9/2/13`, Contact `2/9/3/13`, Marvin full-bleed, Lithium | Group Four, Spotify + Future beside Dogs pic + Dogs copy, E30 | Ideal Setup, Quote, Books | Album, Civic | Civic rundown. Gap is `--joint` (0.7rem).

Below 900px the rail sticks under the menu bar with a two-column key grid, and the beds stack in document order.

Hashes `#bio` / `#now` / `#dogs-copy` / `#mods` / `#album` / `#civic-plan` land on those windows. `/marvin`, `/lithium`, `/group-four` still redirect to the matching hash.

## Elevation & Depth

Depth is a hard Macintosh window, not a soft card stack.

### Shadow Vocabulary
- **Window drop** (`box-shadow: 6px 8px 10px rgb(0 0 0 / 0.28)`): the STACK CONTENTS rail.
- **Bed drop** (`box-shadow: 6px 8px 10px rgb(0 0 0 / 0.18)`): each field window.

### Named Rules
**The Window Rule.** Only stack windows cast a shadow. Buttons and keys stay flat.

## Shapes

Every control is a rectangle. Radius is 0. Borders are 2px solid ink. The title-bar close box is an 0.85rem square. The menu-bar mark is a 5-point ink polygon, not a real Apple logo.

Photo frames (`.plate`, `.bare`) are the same 2px ink rectangle. Book covers use a 3 / 4 frame.

## Components

### Painted buttons
- **Shape:** 2px ink rectangle, no radius.
- **Primary (`.paint.is-fill`):** ink fill, paper type.
- **Rest (`.paint`, `.gate`, `.step`):** paper fill, ink type.
- **Hover / focus:** invert. Focus ring is a 2px ink outline, offset 3px.

### Skip-keys
- **Style:** Silkscreen labels in the left rail.
- **On:** ink fill, paper type, `aria-current="true"`.
- **Hover (off):** desk grey wash.

### Cards
- **Corner:** 0. Each bed is a small stack window in the scrolling field.
- **Background:** paper, striped title bar, 2px ink rule.
- **Motion:** native hash scroll; `prefers-reduced-motion` snaps (`scroll-behavior: auto`).

### Photo beds
- **Filled:** grayscale + contrast 1.8, or the Welcome 1-bit PNG with `image-rendering: pixelated`.
- **Empty:** labeled note naming the expected `assets/…` path. Never a fake photograph.

### Navigation
Menu bar is decorative Stack / Card plus Find (focuses the first key). The rail is the real directory. Mobile keeps the same keys; it does not invent a hamburger.

## Do's and Don'ts

### Do:
- **Do** jump skip-keys to a window in the one field.
- **Do** invert a painted button to mark the primary action on a card.
- **Do** keep empty photo beds empty and labeled.
- **Do** keep Roger's copy, including the spellings he wrote.

### Don't:
- **Don't** introduce a second accent color or a color hero.
- **Don't** use Inter, Space Grotesk, Archivo, or another AI-default face.
- **Don't** add a `/plaza` route or a live-site backup of Plaza Beds.
- **Don't** invent biography, metrics, or testimonials.
