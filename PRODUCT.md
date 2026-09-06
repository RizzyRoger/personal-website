# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS. Preview with `python3 -m http.server 8080`. Hosted on GitHub Pages at https://iamroger.space (custom domain via Namecheap).

## Users

People who want to know who Roger Wei is, then look at the projects he ships: Marvin, Lithium, and Group Four.

## Product Purpose

A personal site as one HyperCard field. The person is first, then the work, then the rest of the field. Success is a visitor who remembers the name and can skip to a project or a later window in one click.

## Positioning

One scrolling field. A sticky directory of skip keys: About, Marvin, Lithium, Group Four, Future, Dogs, Dream car, Quote, Books, Civic. Not a blog, not a CMS, not an app. `/marvin`, `/lithium`, and `/group-four` redirect to the matching hash.

## Operating Context

Static files in this repo. Live site: https://iamroger.space. Marvin also has a separate product site at https://marvin.sarl. Lithium is a macOS menu bar app, source at https://github.com/RizzyRoger/lithium. Group Four is a Chrome tab-grouping extension, source at https://github.com/RizzyRoger/Group-4.

## Capabilities and Constraints

- One scrolling field of HyperCard windows: Photo (1-bit plate), Bio, Contact with painted project buttons, Marvin, Lithium, Group Four, Spotify, future plan, dogs, dream car, quote, books, album, Civic.
- Image beds stay empty until a file is dropped at the `data-src` path on that bed.
- Body copy that is not a real project teaser is lorem ipsum, meant to be replaced.
- No backend, no contact form, no analytics in this pass.
- A live in-browser Marvin demo is out of scope for this static host.

## Brand Commitments

- Name: Roger Wei
- Domain: iamroger.space
- Project names: Marvin (local voice AI agent), Lithium (macOS site time-limiter), Group Four (Chrome tab manager)
- Incumbent visual world: HyperCard Stack (seed f1b3ddc6). One-bit black on white, painted invert buttons, Chicago-like pixel chrome, Geneva-like body, fixed card rectangles. Plaza Beds is kept on the `plaza-beds` git branch only.

## Evidence on Hand

- Site markup: `index.html`, redirect pages at `marvin/index.html`, `lithium/index.html`, `group-four/index.html`, `css/styles.css`
- Welcome plate is `assets/portrait-1bit.png` (dithered from `assets/portrait.jpg`). Later photos (`dogs.jpg`, `e30.jpg`, `album.jpg`, `civic.jpg`, books) are the same drop-in pattern.
- No recorded demo clips yet
- Do not invent testimonials, metrics, or download numbers

## Product Principles

- Person first, then projects, then the rest of the field.
- Leave labeled empty slots rather than fake photographs.
- Keep the site static and hostable from the repo root.
- Match the shipped HyperCard stack unless a redesign is explicitly requested.

## Accessibility & Inclusion

Target WCAG 2.2 AA on future UI work. Semantic HTML, visible focus, readable contrast.
