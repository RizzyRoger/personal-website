# Roger Wei

Static personal site: one scrolling plaza with skip keys for About, Marvin, Lithium, Group Four, and the rest of the field.

Live: [https://iamroger.space](https://iamroger.space)

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080

## Impeccable

Design skill for Cursor is installed in `.cursor/skills/impeccable`. Reload the window if `/impeccable` does not appear.

```
/impeccable polish      # final pass on a page
/impeccable critique    # UX review
/impeccable live        # iterate on a page in the browser
```

Product truth is in `PRODUCT.md`. Visual tokens are in `DESIGN.md`. Do not invent portrait, bio, hobbies, or demo footage.

Reload Cursor once so `/impeccable` is picked up.

## Content to fill in later

- Portrait: drop a photo at `assets/portrait.jpg`
- Replace lorem ipsum in `index.html`
- Later photos: `assets/dogs.jpg`, `assets/e30.jpg`, `assets/album.jpg`, `assets/civic.jpg`, `assets/book-1.jpg` … `book-5.jpg`

## Host on GitHub Pages + Namecheap

Repo: [RizzyRoger/personal-website](https://github.com/RizzyRoger/personal-website)

GitHub Pages deploys from `main` at the repo root. `CNAME` is set to `iamroger.space`. After DNS works, turn on **Enforce HTTPS** in GitHub **Settings → Pages**.

### Namecheap DNS

**Domain List → `iamroger.space` → Manage → Advanced DNS.** Remove parking, URL redirects, or conflicting `A` / `CNAME` records for `@` and `www`, then add:

| Type  | Host | Value                  | TTL       |
|-------|------|------------------------|-----------|
| A     | `@`  | `185.199.108.153`      | Automatic |
| A     | `@`  | `185.199.109.153`      | Automatic |
| A     | `@`  | `185.199.110.153`      | Automatic |
| A     | `@`  | `185.199.111.153`      | Automatic |
| CNAME | `www`| `RizzyRoger.github.io` | Automatic |

Wait for propagation (often 5–60 minutes), then:

```bash
dig iamroger.space +short
dig www.iamroger.space +short
```

Apex should be the four GitHub A addresses. `www` should CNAME to `RizzyRoger.github.io`.
