# Surface: About (index.html)

Mode: Experience. Audience: someone meeting Roger Wei, then opening Marvin, Lithium, or Group Four.
Job: remember the name; one click to a project.
Direction: HyperCard Stack (approved `.impeccable/mocks/decision/challenger-hypercard.webp`, seed `f1b3ddc6`). Plaza Beds is git-only on branch `plaza-beds` / tag `plaza-beds-backup`.
Memorable moment: a Macintosh desk; STACK CONTENTS sticky on the left; Photo / Bio / Contact in the first viewport; painted invert buttons to Marvin, Lithium, and Group Four.

Unresolved: real portrait, bio, hobbies, photos, contact, resume copy — labeled empty slots. An unplanted bed is the honest empty state; do not fill it with invented biography.

## Look-only alternative (now shipping on main)

Seed `f1b3ddc6`, Experience direction round. Locked card: **HyperCard Stack** (`challenger-hypercard`). Comp: `.impeccable/mocks/decision/challenger-hypercard.webp`. Plaza Beds remains on git branch `plaza-beds` and tag `plaza-beds-backup`.

## Comp inventory (sampled from beds.webp pixels, 1536x1024)

| Region | Sampled hex | Medium |
|---|---|---|
| Page ground concrete | `#949387` | raster `assets/concrete-plaza.webp` |
| Bed face concrete | `#928e84` | raster `assets/concrete-panel.webp` |
| Directory monolith | `#383735` | raster `assets/concrete-monolith.webp` (board-formed) |
| Bed lip / soil band | `#352e23` | raster `assets/soil.webp` |
| Bare soil interior | `#271f14` | raster `assets/soil.webp`, darkened |
| Cast lettering | `#d9d5cd` | CSS type + paired text-shadow relief |
| Inactive nav key | `#b4b1a7` | CSS type (lifted from the comp's dimmer grey to clear 4.5:1) |
| Body ink on panel | `#1c1e1b` | CSS type (5.1:1 on `#928e84`) |
| Plant green | `#344b35` | raster, transparent (see plants) |
| Vine green (lighter) | `#445840` | raster, transparent |
| Joint / hairline rule | `#6f6c66` | CSS 1px |

Texture is raster by rule, not preference: a CSS gradient is not a texture medium. Every concrete surface carries a real photographic tile; CSS supplies only what the world *draws* — joints, lip geometry, cast relief, empty-bed hatch.

### Plants (flat vector character, transparent raster at 2x)

| Asset | Placement |
|---|---|
| `assets/plant-monstera.webp` | About, over the PORTRAIT bed's lower right |
| `assets/plant-fern.webp` | About, spilling over the BIO bed's top edge |
| `assets/plant-vine.webp` | directory monolith, trailing full height, all four pages |
| `assets/plant-agave.webp` | Marvin |
| `assets/plant-aloe.webp` | Lithium |
| `assets/plant-fiddle.webp` | Group Four |

## Design system read from the comp

- **Corner language:** hard 90 degrees everywhere. Zero border-radius in the entire build.
- **Line weights:** 1px hairline joints between beds; the lip is a solid 12–20px soil band, not a border.
- **Elevation:** real cast shadows with offset plus soft blur. No zero-blur block shadows — this world is poured concrete, not neobrutalism.
- **Cast relief:** paired text-shadow, light above-left and dark below-right, on the label colour. Never an image, never an outline font.
- **Type ramp:** Archivo variable, self-hosted. Display is `font-stretch: 125%` at weight 800–900, caps only, tracking 0.01em–0.06em. Name `clamp(2.4rem, 5vw, 4rem)`; hero bed label `clamp(1.6rem, 3vw, 2.2rem)`; bed labels `1.25rem`; keys `1.05rem`; body 400 at normal width, measure 68ch; meta 0.85rem caps tracked 0.14em.
- **Density:** beds are deliberately unequal. PORTRAIT dominates at roughly half the field width and two thirds its height; nothing else competes with it at that scale.

## Compositional commitments

- Nav: four keys cast into the directory monolith with `ROGER WEI` above them, not a text bar. Active key carries a cast bar; that bar is a block element, never a `border-left`.
- First viewport: monolith at left with the cast name; the dominant empty PORTRAIT bed with its label cast into the front face over bare soil; BIO and NOW planted beside it.
- Signature geometry: the bed — a textured face, a cast label at top-left, a soil lip along the bottom. Empty beds show raked soil and a diagonal hatch. No vinyl, no roll, no cutter, no registration brackets.
- Motion: one authored moment. Planting grows in from the lip on intersection, staggered, exponential ease-out, content visible by default. Reduced motion renders fully grown.
- CTA: outbound links are cast plaques — dark recessed plate, off-white cast lettering, engraved rule. The comp's off-white-on-grey link text measures 2.2:1 and is not shippable as drawn; the plaque keeps the character and reaches 8:1.
