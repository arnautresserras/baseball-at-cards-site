# Baseball at Cards — Website

The public marketing and legal site for the **Baseball at Cards** iOS game,
hosted for free on GitHub Pages.

**Live URL (once published):** https://arnautresserras.github.io/baseball-at-cards-site/

## Contents

| File | Page |
|---|---|
| `index.html` | Home / promo page |
| `privacy.html` | Privacy Policy (required for App Store submission) |
| `support.html` | Support & FAQ (required for App Store submission) |
| `css/styles.css` | Shared styles (mirrors the game's theme) |
| `assets/` | App icon + favicon |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (no Jekyll build) |

## Publishing to GitHub Pages

From inside this folder:

```bash
git init -b main
git add .
git commit -m "Initial site: home, privacy, support"
gh repo create baseball-at-cards-site --public --source=. --remote=origin --push
```

(Or create an empty `baseball-at-cards-site` repo on github.com and
`git remote add origin …` + `git push -u origin main`.)

Then enable Pages:

1. On GitHub: **Settings → Pages**.
2. **Source:** Deploy from a branch.
3. **Branch:** `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. The site goes live at the URL above.

## App Store submission URLs

Paste these into App Store Connect:

- **Privacy Policy URL:** `https://arnautresserras.github.io/baseball-at-cards-site/privacy.html`
- **Support URL:** `https://arnautresserras.github.io/baseball-at-cards-site/support.html`
- **Marketing URL (optional):** `https://arnautresserras.github.io/baseball-at-cards-site/`

## Still to do before launch

- [ ] Replace the screenshot placeholders on the home page with real captures.
- [ ] Add the App Store download badge/link once the app is live.
- [ ] (Optional) Point a custom domain via a `CNAME` file + DNS, then enable
      "Enforce HTTPS" in Settings → Pages.
