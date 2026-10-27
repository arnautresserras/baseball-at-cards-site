# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the
code in this repository.

## What this is

The **public marketing and legal website** for *Baseball at Cards*, a
single-player baseball roguelike card game (iOS, built with Expo / React
Native). This repo is **not** the game — the game lives in a separate private
repo, `baseball-at-cards`. This is a standalone static site hosted for free on
**GitHub Pages**.

- **Live URL:** https://arnautresserras.github.io/baseball-at-cards-site/
- **App Store (live):** https://apps.apple.com/us/app/id6779787824
  (`es` storefront path; Apple auto-redirects visitors to their own region)
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
- **Sentry** — anonymous crash reporting + stability (release-health) session
  tracking + structured diagnostic logs; error/stack traces, device/OS/app
  version, and the Expo release/update channel. Randomly-generated grouping ID;
  no name/email attached. (Wired in the game's `App.tsx` via `Sentry.wrap`.)
- **On-device only** — a local flag remembering the unlock status.
- **No accounts, no login, no name/email, no location, no contacts/photos.**

## Structure

Plain static HTML/CSS. **No framework, no build step, no package manager.**

| File | Purpose |
|---|---|
| `index.html` | Home / promo page (trading-card hero, "how it plays" base path, real screenshots, App Store download button) |
| `privacy.html` | Privacy Policy — App Store blocker; must mirror real data practices (app §2.2–2.5 + website analytics §2.6) |
| `support.html` | Support & FAQ — App Store blocker; purchases, restore, refunds, bugs |
| `credits.html` | Credits — solo dev + AI-generated art/audio note (linked in footer only; not in the header nav) |
| `css/styles.css` | Single shared stylesheet for every page |
| `js/i18n.js` | Build-free runtime translation. Holds the `TRANSLATIONS` table (es-MX / ja / ko) **inline at the top**, then detects the visitor's language, swaps `data-i18n` nodes, and renders the header language switcher |
| `assets/icon.png`, `assets/favicon.png` | Copied from the game's `assets/` |
| `assets/screenshot_0*.png` | Real in-game captures shown in the home-page screenshot strip |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (skip Jekyll) |
| `README.md` | Public-facing intro to the game + site (written for players/visitors, not the owner) |

The canonical **markdown source** for the legal/support text also lives in the
game repo (`baseball-at-cards/docs/legal/PRIVACY_POLICY.md` and
`docs/site/SUPPORT.md`). The HTML here is the published form; keep the two in
sync when editing wording.

## Localization

The site ships in **English (authoritative), Spanish (es-MX), Japanese, and
Korean** — matching the App Store listing locales. There is no build step, so
translation happens **at runtime in the browser**:

- **English is authored inline** in the HTML and is the source of truth. With
  JavaScript off — a crawler, a blocked CDN, an App Store reviewer with a
  flaky connection — every page still renders complete and valid in English.
  `js/i18n.js` only *replaces* that copy when a non-English locale is active.
- **Translations are embedded in `js/i18n.js`, never fetched.** This is
  deliberate and matches the `canibreathe-site` setup: a `fetch()` of a local
  JSON file is blocked under `file://`, so a fetching version silently shows
  English forever when the page is opened straight from disk instead of
  through a server. No network, no async, no silent failure. The file is
  ~83 KB, and that is the price of it always working.
- Every translatable node carries **`data-i18n="key"`** (swapped via
  `innerHTML`, so a value may contain inline `<strong>`/`<a>`/`<li>` markup).
  Attributes use **`data-i18n-content="key"`** (meta descriptions) and
  **`data-i18n-alt="key"`** (image alt text).
- Keys shared across pages (`nav.*`, `foot.*`) live in one namespace; per-page
  keys are prefixed (`priv.*`, `sup.*`, `cred.*`) and page-specific `<title>` /
  meta description keys are suffixed (`meta.title.privacy`) so the single
  dictionary per locale never collides.
- **Language selection order:** `?lang=` in the URL → `localStorage`
  (`bac-lang`) → `navigator.languages` → English. Any `es-*` tag resolves to
  `es-MX`. The choice is written back to the URL and carried across internal
  links, so a localized page is shareable.
- The header **language switcher is rendered by JS**, so it never appears when
  switching wouldn't work. Each page also declares static `hreflang` alternates
  pointing at its `?lang=` URLs.
- **CJK type:** Noto Sans JP/KR are appended to every font stack in
  `styles.css` (Bowlby One, Bungee, and Press Start 2P have no CJK glyphs) and
  the webfont is injected only when a CJK locale activates. `html[data-lang]`
  rules drop uppercasing and letter-spacing, which are meaningless on Japanese
  and Korean text.
- **In-app button names stay in English** in translated support copy
  (`Play Survival Run`, `Restore Purchase`), with a gloss in parentheses — the
  game's UI is not localized, so players must be able to match the words on
  screen. Same for brand names (App Store, Apple ID, Mixpanel, RevenueCat,
  Sentry, Umami).
- `privacy.html` carries a **language notice** (`priv.langnote`) stating that
  the English version prevails over any translation. Translations are a
  convenience; the English text is what Apple was given and what governs.
- **When editing copy:** change the English in the HTML *and* the matching key
  in all three locale blocks of the `TRANSLATIONS` table. A missing key falls
  back to English, so omissions are safe but invisible — check for them. Bump
  the `?v=` on the `<script src="js/i18n.js?v=N">` tag in all four pages when
  the script changes, so browsers don't serve a stale copy.

## Conventions

- **Match the game's look.** Colours and fonts mirror the game's theme
  (`baseball-at-cards/src/theme/index.ts`): navy `#0D1B2E` background, gold
  `#F5C518` accent, ruby `#CC2936`; fonts Bowlby One (titles), Bungee
  (headings/nav), Nunito (body), Press Start 2P (small captions). These are
  defined as CSS variables at the top of `css/styles.css`.
- **Design language: night-ballpark + trading cards.** The home page is
  deliberately themed (not a generic dark-hero template) — keep new work
  consistent with it:
  - **Trading-card hero** (`.tradingcard` / `.tc-*`): the app presented as a
    gold-foil "rookie card" — ruby banner, app-icon photo window, name plate
    (holds the page's single `<h1>`), and a back-of-card stat line. It sits in
    an asymmetric two-column hero (`.hero-grid`): pitch copy left
    (`.hero-copy`: `.hero-eyebrow` + `.hero-lead` + `.tagline` + `.hero-cta`),
    card right. No tilt (it made the title render as a jagged staircase) — just
    a hover lift. On mobile the card stacks **above** the copy.
  - **Base-path features** (`.basepath` + `.feature.feature-l/-r`): the "how it
    plays" cards zig-zag down a dashed chalk baseline, each pinned to a rotated
    diamond base marker (`.pos`) numbered like a batting order.
  - **What's-New band** (`.newband` + `.newgrid`/`.newcard`): a dated
    release-highlight strip between the base path and the screenshots,
    currently v1.2 (Daily Run, Run Rules, Game Center, packs & All-Stars). Kept separate from the base path on purpose — that list is
    the evergreen "how it plays" pitch and stays at six; this band can be
    retired or re-pointed at the next release on its own. Keys are `new.*`
    and `n1..n4.*`.
  - **Outfield-wall section** (`.section-field`): green grass gradient, gold
    home-run line on top, faint painted "408" distance marker. Section eyebrows
    use `.section-kicker` (Press Start 2P, e.g. "◆ PLAY BALL ◆").
  - **Extra ballpark palette vars** live alongside the game palette in
    `:root`: `--grass`, `--grass-dk`, `--dirt`, `--chalk`, `--chalk-ink`,
    `--chalk-line`.
- **App Store button** (`.btn-appstore`): black official-style badge with an
  inline Apple-logo SVG (self-contained, no external image), linking to the App
  Store URL above. Carries `data-umami-event="download-appstore"`.
- **Self-contained and cheap.** The only first-party script is local
  (`js/i18n.js`); there is no CDN JS beyond the two allowed external
  dependencies: Google Fonts via `<link>` (including the Noto Sans JP/KR faces
  injected on demand for CJK locales), and **Umami** (cookieless,
  privacy-first site analytics) via a `<script>` in each page's `<head>`. The
  Umami snippet carries the `data-website-id`
  `12c9abd3-8a6e-4fe9-ac52-c77f7ca075a4` (same value in all four pages; from the
  Umami Cloud dashboard) and tracks page views + referrers (so App Store traffic
  is visible) plus a `download-appstore` custom event on the App Store button
  (`data-umami-event`). Because it is cookieless and anonymous, no cookie-consent
  banner is required. Site analytics is disclosed in `privacy.html` §2.6. The
  domain registered in Umami is `arnautresserras.github.io` (shared across any
  Pages projects on that domain — filter by path if others are added).
- **Relative links only** between pages (`privacy.html`, `support.html`,
  `index.html`) so it works under the `/baseball-at-cards-site/` Pages subpath.
- **Responsive, mobile-first.** The page body must never scroll horizontally;
  wide content (e.g. the third-party table) scrolls inside its own container.
- **Preview locally** with `python -m http.server 8000` from the repo root.

## Outstanding work before launch

- [x] Replace the four screenshot placeholders on `index.html` with real
      captures (home, boss intro, in-game, settings; downscaled to 720px wide).
- [x] Add an App Store download badge/link once the app is live.
      (Live: https://apps.apple.com/us/app/id6779787824)
- [ ] (Optional) Custom domain via a `CNAME` file + DNS, then enable "Enforce
      HTTPS" in Settings → Pages.
- [x] Draft the App Store Connect privacy "nutrition label" answers (must match
      `privacy.html`): declare *Purchases* (linked, app functionality) and
      *Usage Data / Product Interaction* + *Identifiers* (Mixpanel anonymous ID,
      analytics).

## Publishing

This repo is published and live. It is a public GitHub repo
(`arnautresserras/baseball-at-cards-site`) deploying from the `master` branch /
root via GitHub Pages; both submission URLs return 200 (the two URLs to paste
into App Store Connect are the `privacy.html` and `support.html` links listed
above). To deploy changes, just commit and push to `master` — Pages rebuilds
automatically. (`README.md` is public/player-facing, not a deploy runbook.)

## Background

This site and its content were scaffolded in a Claude Code session focused on
App Store publishing for *Baseball at Cards*. Key decisions made there: keep the
game repo's name unchanged, use a separate public `baseball-at-cards-site` repo
on the default `github.io` domain (custom domain deferred), publish as an
individual developer under the name Arnau Tresserras, and — because the app uses
a one-time purchase with no subscriptions — rely on Apple's standard licensed-app
agreement instead of a custom EULA (so no Terms/EULA page is required for now).
