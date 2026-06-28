# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the
code in this repository.

## What this is

The **public marketing and legal website** for *Baseball at Cards*, a
single-player baseball roguelike card game (iOS, built with Expo / React
Native). This repo is **not** the game — the game lives in a separate private
repo, `baseball-at-cards`. This is a standalone static site hosted for free on
**GitHub Pages**.

- **Live URL (once published):** https://arnautresserras.github.io/baseball-at-cards-site/
- **Developer / owner:** Arnau Tresserras (solo, individual developer)
- **Public contact:** arnautresserras@gmail.com

## Why this site exists — the goal

The site exists primarily to **unblock App Store submission**. Apple requires a
publicly reachable HTTPS **Privacy Policy URL** and **Support URL** before an app
can be submitted; this site provides both, plus a promotional home page. It is
intentionally a **zero-cost static site** (GitHub Pages, no backend, no build
step).

The two submission URLs that must stay live and accurate:

- **Privacy Policy:** `…/baseball-at-cards-site/privacy.html`
- **Support:** `…/baseball-at-cards-site/support.html`
- Marketing URL (optional): the site root.

## The app it describes (context for accurate copy)

- **Free to download.** A free **Sample Game** (one fixed boss fight, preset
  roster) is always available.
- **Full game** = unlimited **Survival Runs** (the roguelike mode: defeat every
  boss, recruit players, build a roster), unlocked via a **single one-time
  non-consumable in-app purchase**. No subscriptions, no recurring charges.
- Purchases use **RevenueCat** (`react-native-purchases`) over Apple's App
  Store; a **Restore Purchase** button on the main menu satisfies Apple's
  restore requirement.
- **iOS only** at launch (iPhone + iPad). Android (Google Play) is possible
  later — if that happens, the privacy/support copy must be updated to
  reference Google as well as Apple.

### Data collection (must match the Privacy Policy and the App Store privacy label)

The privacy policy is written to match exactly what the app does. If the app's
data practices change, update `privacy.html` to match:

- **Mixpanel** analytics — anonymous device ID + gameplay-only events (runs,
  boss fights, cards played, swings, outcomes) and device/OS/app-version
  properties. Processed on Mixpanel's **EU servers** (`api-eu.mixpanel.com`).
- **RevenueCat + Apple** — anonymous app-user ID, purchase/receipt data, basic
  device info. **Apple processes payment; no card data reaches the app.**
- **On-device only** — a local flag remembering the unlock status.
- **No accounts, no login, no name/email, no location, no contacts/photos.**

## Structure

Plain static HTML/CSS. **No framework, no build step, no package manager.**

| File | Purpose |
|---|---|
| `index.html` | Home / promo page (hero, "how it plays", screenshot placeholders) |
| `privacy.html` | Privacy Policy — App Store blocker; must mirror real data practices |
| `support.html` | Support & FAQ — App Store blocker; purchases, restore, refunds, bugs |
| `css/styles.css` | Single shared stylesheet for every page |
| `assets/icon.png`, `assets/favicon.png` | Copied from the game's `assets/` |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (skip Jekyll) |
| `README.md` | Human-facing publish instructions + submission URLs |

The canonical **markdown source** for the legal/support text also lives in the
game repo (`baseball-at-cards/docs/legal/PRIVACY_POLICY.md` and
`docs/site/SUPPORT.md`). The HTML here is the published form; keep the two in
sync when editing wording.

## Conventions

- **Match the game's look.** Colours and fonts mirror the game's theme
  (`baseball-at-cards/src/theme/index.ts`): navy `#0D1B2E` background, gold
  `#F5C518` accent, ruby `#CC2936`; fonts Bowlby One (titles), Bungee
  (headings/nav), Nunito (body), Press Start 2P (small captions). These are
  defined as CSS variables at the top of `css/styles.css`.
- **Self-contained and cheap.** No CDN JS, no analytics on the site itself, no
  trackers. Google Fonts via `<link>` is the only external dependency (allowed
  — this is a normal public site, not a sandboxed environment).
- **Relative links only** between pages (`privacy.html`, `support.html`,
  `index.html`) so it works under the `/baseball-at-cards-site/` Pages subpath.
- **Responsive, mobile-first.** The page body must never scroll horizontally;
  wide content (e.g. the third-party table) scrolls inside its own container.
- **Preview locally** with `python -m http.server 8000` from the repo root.

## Outstanding work before launch

- [x] Replace the four screenshot placeholders on `index.html` with real
      captures (home, boss intro, in-game, settings; downscaled to 720px wide).
- [ ] Add an App Store download badge/link once the app is live.
- [ ] (Optional) Custom domain via a `CNAME` file + DNS, then enable "Enforce
      HTTPS" in Settings → Pages.
- [x] Draft the App Store Connect privacy "nutrition label" answers (must match
      `privacy.html`): declare *Purchases* (linked, app functionality) and
      *Usage Data / Product Interaction* + *Identifiers* (Mixpanel anonymous ID,
      analytics).

## Publishing

This repo is published and live. It is a public GitHub repo
(`arnautresserras/baseball-at-cards-site`) deploying from the `master` branch /
root via GitHub Pages; both submission URLs return 200. See `README.md` for the
publish history and submission URLs. To deploy changes, just commit and push to
`master` — Pages rebuilds automatically.

## Background

This site and its content were scaffolded in a Claude Code session focused on
App Store publishing for *Baseball at Cards*. Key decisions made there: keep the
game repo's name unchanged, use a separate public `baseball-at-cards-site` repo
on the default `github.io` domain (custom domain deferred), publish as an
individual developer under the name Arnau Tresserras, and — because the app uses
a one-time purchase with no subscriptions — rely on Apple's standard licensed-app
agreement instead of a custom EULA (so no Terms/EULA page is required for now).
