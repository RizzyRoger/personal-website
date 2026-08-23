# Roger Wei

Static personal site: About me, plus pages for Marvin and Lithium.

Live: [https://iamroger.space](https://iamroger.space)

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080

## Content to fill in later

- Portrait: drop a square-ish photo at `assets/portrait.jpg`
- Bio paragraph on `index.html`
- Hobby titles and one-line notes on the three cards
- Fuller Marvin / Lithium write-ups on their subpages

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
