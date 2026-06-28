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

This site is **already published and live**. It's a public repo
(`arnautresserras/baseball-at-cards-site`) deploying from the `master` branch /
root via GitHub Pages, with both submission URLs returning 200.

**To deploy a change:** commit and push to `master` — Pages rebuilds
automatically and the change is live in ~1 minute.

```bash
git add .
git commit -m "…"
git push
```

<details>
<summary>Original one-time setup (for reference)</summary>

```bash
git init
git add .
git commit -m "Initial site: home, privacy, support"
gh repo create baseball-at-cards-site --public --source=. --remote=origin --push
```

Then on GitHub: **Settings → Pages → Source:** Deploy from a branch →
**Branch:** `master`, folder `/ (root)`.
</details>

## App Store submission URLs

Paste these into App Store Connect:

- **Privacy Policy URL:** `https://arnautresserras.github.io/baseball-at-cards-site/privacy.html`
- **Support URL:** `https://arnautresserras.github.io/baseball-at-cards-site/support.html`
- **Marketing URL (optional):** `https://arnautresserras.github.io/baseball-at-cards-site/`

## Still to do before launch

- [x] Replace the screenshot placeholders on the home page with real captures.
- [ ] Add the App Store download badge/link once the app is live.
- [ ] (Optional) Point a custom domain via a `CNAME` file + DNS, then enable
      "Enforce HTTPS" in Settings → Pages.
