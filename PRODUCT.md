# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS. Preview with `python3 -m http.server 8080`. Hosted on GitHub Pages at https://iamroger.space (custom domain via Namecheap).

## Users

People who want to know who Roger Wei is, then look at the two projects he ships: Marvin and Lithium.

## Product Purpose

A personal site. The About page is the person. Marvin and Lithium are the work. Success is a visitor who remembers the name and can open a project page in one click.

## Positioning

Three tabs only: About me on the left, Marvin and Lithium on the right. Not a blog, not a CMS, not an app.

## Operating Context

Static files in this repo. Live site: https://iamroger.space. Marvin also has a separate product site at https://marvin.sarl. Lithium is a macOS menu bar app, not a web product.

## Capabilities and Constraints

- About page: name, portrait slot (`assets/portrait.jpg`), bio, three hobby cards.
- Project pages: title, one-paragraph teaser, room for later copy and a demo.
- Portrait, bio, hobby names, and fuller project write-ups are still empty on purpose.
- No backend, no contact form, no analytics in this pass.
- A live in-browser Marvin demo is out of scope for this static host.

## Brand Commitments

- Name: Roger Wei
- Domain: iamroger.space
- Project names: Marvin (local voice AI agent), Lithium (macOS site time-limiter)
- Incumbent visual world (already shipped, do not treat as undecided): cream paper `#F6F1E8`, stone `#EFE8DC`, ink `#2C241C`, terracotta `#B85C38`; Fraunces headlines and Source Sans 3 body. Warm-minimal, not dark-tech.

## Evidence on Hand

- Site markup: `index.html`, `marvin/index.html`, `lithium/index.html`, `css/styles.css`
- No portrait file yet
- No recorded demo clips yet
- Do not invent testimonials, metrics, or download numbers

## Product Principles

- Person first, then projects.
- Leave labeled empty slots rather than fake content.
- Keep the site static and hostable from the repo root.
- Match the shipped warm-minimal world unless a redesign is explicitly requested.

## Accessibility & Inclusion

Target WCAG 2.2 AA on future UI work. Semantic HTML, visible focus, readable contrast.
