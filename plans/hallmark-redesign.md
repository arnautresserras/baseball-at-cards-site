# Home page redesign (Hallmark, full depth)

Lead `index.html` with the five new App Store screenshots (`assets/shot-1..5-*.png`) and recompose
the page around them. Content and wiring stay; the system and the composition change.

## Current state

- `index.html` is hero (trading card holding the `<h1>`) → 6-card base-path zig-zag → 4-up
  "New in 1.2" grid → 220px side-scrolling strip of six old screenshots → footer.
- One shared `css/styles.css` styles all four pages; header/footer markup is duplicated per page.
  Copy is English inline + `data-i18n` keys in `js/i18n.js` (es-MX / ja / ko, ~170 keys per locale).
- Audit before: Floor 93 FAIL, Reflex 35 (`.hallmark/before.txt`). Real bugs: `--font-heading` is
  undefined (`styles.css:526`), no `:focus-visible` outside `.lang-btn`.
- **Conflicts with documented design:** CLAUDE.md § Conventions names the base path, the What's-New
  band, the outfield-wall section and the `◆ … ◆` kickers as the design language. A full redesign
  replaces those; Task 9 rewrites that section.

## Picks

- **Redesign** · full · `/` recomposed; `support`, `privacy`, `credits` brought onto the new type
  scale and chrome (system only, their layout and words stay)
- **Before** · Floor 93 FAIL · Reflex 35 · a themed but template-ordered page; the trading card is
  real and stays
- **Keeps** · all 6 links, the Umami event, `data-lang-switcher`, every `data-i18n` hook still in
  use · the game's palette and four faces (brand) · the trading card · all facts on the page
- **Files** · edit: `index.html`, `css/styles.css`, `js/i18n.js`, `CLAUDE.md`, `support.html`,
  `privacy.html`, `credits.html` (`?v=` bump; markup only if a Floor gate needs it) · create:
  `css/tokens.css`, `css/base.css`, 720px copies of the clean shots · delete:
  `assets/screenshot_01..06*.png` (approved)
- **Theme** · brand (the game's navy/gold/ruby, Bowlby One/Bungee/Nunito/Press Start 2P), not dealt
- **Shape** · Narrative Workflow, from draw `7a5624`. A run really is a sequence: chart the map →
  draft the pack → face the boss → walk it off. Stages numbered like a batting order.
- **Swaps from the draw** · hero Corridor → **Counter** (the material is screens; a text-only hero
  wastes them) · footer index columns → **mast** (4 pages is not a hub) · nav slab kept
- **Chrome** · nav: slab (solid navy bar, no blur), wordmark left, links + language switch right ·
  footer: mast (wordmark large over the links)
- **Hero** · Counter: head + one sentence + App Store badge on columns 1–5; `shot-1-at-bat` as a
  portrait screen on 7–12 at ~75% of the viewport tall, no drawn device frame
- **Signature** · the trading card, moved to the close as the offer: its back-of-card line
  (∞ runs · 1× unlock · 0 subs · iOS) *is* the price story, set beside the walk-off
- **Sections** · Hero (at-bat) · 1 Chart your season (map + node types as rows) · 2 Draft your
  lineup (pack + archetypes) · 3 Every boss cheats (boss + Run Rules) · Daily Run band (Rows: Daily
  Run, Game Center; no screenshot) · Close (walk-off shot + trading card + badge) · Footer
- **Material** · real: 5 new screens, the facts already on the page · pictures: user's screenshots
  only, no library photos · absent: quotes, ratings, press
- **Sweep** · after build; render tier needs puppeteer-core (Q5)

### Content mapping (nothing dropped)

| Old block | New home |
|---|---|
| f1 Tap or drag to play | Hero sentence + at-bat shot |
| f2 Choose your path, f5 Earn & spend | Stage 1 (map; Shop node is where Peanuts are spent) |
| f3 Draft your lineup, n4 Packs & All-Stars | Stage 2 (pack) |
| f4 Bosses with a trick, n2 Run Rules | Stage 3 (boss) |
| n1 Daily Run, n3 Game Center | Daily Run band |
| f6 Free to start, trading card stats | Close |
| Old 6-screenshot strip | Replaced by the 5 new shots across hero, stages, close |

### Copy that changes (before → after; final wording reviewed in Task 3/4)

- Hero head `A baseball roguelike, dealt one card at a time.` (8 words, over the 7 limit) →
  `Baseball, dealt one card at a time.`, promoted to the `<h1>`
- Hero sentence (30 words) → `A roguelike run: chart your route, draft your lineup, beat every boss.`
- Kickers `◆ OUT NOW ON iOS ◆`, `◆ PLAY BALL ◆`, `◆ NEW IN 1.2 ◆`, `◆ INSTANT REPLAY ◆` → removed
  (Floor 54); stage numbers ride inside the `h2`
- `Learn More` second hero button → removed; the badge is the one action, repeated at the close
- Em dashes in body copy → commas/full stops (Floor 19)
- `SINGLE-PLAYER · ROGUELIKE`, `iPhone·iPad` → `Single-player roguelike`, `iPhone and iPad`
- `© 2026 Arnau Tresserras. All rights reserved.` → `© 2026 Arnau Tresserras` (approved; all
  four pages share `foot.copy`)
- Stage `h2`s carry the screenshot captions as live text (Chart your season, Draft All-Stars,
  Every one cheats; hero/close echo A hand of cards / Walk it off), translated like any other key

## Tasks

### 0. Prerequisites (you)

- [x] Commit the pending `CLAUDE.md` edit and the five captioned shots (`c5ad68e`).
- [x] Answer the open questions (resolved below).
- [x] `puppeteer-core` installed globally; render tier runs with
      `CHROME_PATH="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"`. Before record
      re-taken with screenshots in `.hallmark/before/`.
- [x] Clean (caption-free) captures supplied, replacing `assets/shot-*.png` in place (uncommitted;
      the captioned versions survive in `c5ad68e`).

### 1. Web-sized screenshots ✅ done

**Outcome:** five 720px-wide copies of the clean shots that the page references.

**Context files:** `assets/shot-*.png`

- Downscaled with PowerShell `System.Drawing` (HighQualityBicubic) to 720×1558.
- **Changed from plan: JPEG q85, not PNG.** 720px PNGs came out at 0.6–1.7 MB (pixel-art
  noise and gradients); JPEG q85 is 107–171 KB with no visible artefacts on text or sprites.
  Files: `assets/shot-1-at-bat-720.jpg`, `shot-2-walk-off-720.jpg`, `shot-3-boss-720.jpg`,
  `shot-4-map-720.jpg`, `shot-5-pack-720.jpg`. Originals untouched.
- Each image gets `width="720" height="1558"` in markup (Task 3/4) so nothing shifts on load.

**Check (passed):** all five 720×1558, 107–171 KB, ~710 KB total vs ~6.8 MB for the old strip.

### 2. Tokens ✅ done

**Outcome:** every colour and font on the page comes from a variable (Floor 48).

**Done:** `css/tokens.css` = scaffold scale + the old `:root` palette (moved, not renamed, so
`var(--navy)` etc. and the inline `var(--navy-mid)` in `index.html` still work) + semantic
`--color-*` aliases + new named tokens for the foil stops, photo spot, `--shade`/`--sheen` (only
ever used through `color-mix(…, transparent)`) and `--badge-*`. `--display-weight: 400` (Bowlby
One has no bold), `--tracking-display: 0`, `--radius-card: 14px` (the old `--radius`). `css/base.css`
is the scaffold output unchanged. Dropped from `styles.css`: `:root`, `*` box-sizing, `body`, `img`,
`.container`, the 560px `body` font-size; nav now uses `--container`/`--gutter` (`--maxw` is gone).
**Check (passed):** 0 gate-48 findings; total 93 → 42 FAIL.

**Context files:** `css/styles.css`, Hallmark `scripts/theme.mjs`

- Run `theme.mjs scaffold --brand --redesign full --dir css`, take its scale tokens (type sizes,
  spacing, container), and fill the `--color-*`/`--font-*` names from the current `:root`.
- Add `--font-display`, `--font-heading`, `--font-body`, `--font-label` stacks (with the Noto CJK
  fallbacks). That also fixes the undefined `--font-heading` bug.
- Replace every literal colour/font stack in `styles.css` with a variable. This includes the
  `.btn-appstore` black/white, kept as named badge tokens because Apple's badge rules require black.
- Import `tokens.css` and `base.css` at the top of `styles.css` (approved: all four pages take the
  new scale). Remove the rules in `styles.css` that `base.css` now owns.

**Check:** `sloplint.mjs index.html support.html privacy.html credits.html` reports zero gate-48
FAILs. The other pages will change size here; Task 5b settles them.

### 3. Nav and hero (hero stage) ✅ done

**Outcome:** a first screen that shows the at-bat screen beside the head, sentence and badge.

**Done:** slab nav (solid `--dark`, no blur, Bungee at `--text-md`, untracked; `.nav-right` wraps
≤560px). Counter hero on a 12-col `minmax(0, 1fr)` grid: `<h1>` (`hero.lead`) + `.lead`
(`hero.tagline`) + badge on 1–5, `shot-1-at-bat-720.jpg` on 7–12 at `clamp(420px, 80svh, 860px)`
(80, not 75: at 1440×900 75svh left 190px empty below) with a `hero.shot.caption` figcaption
"A hand of cards". Eyebrow, Learn More, floodlights, `.btn*`, `.hero-cta` removed. The card is
**parked** at the end of `<main>` (name plate `<h1>` → `p.tc-title`) for Task 5. `:focus-visible`,
`overflow-x: clip` and reduced motion come from `base.css`. New/changed keys in all three locales:
`hero.lead`, `hero.tagline`, `hero.shot.caption`, `hero.shot.alt`.
**Check:** at 1280×800 head, sentence, badge and the whole screen incl. the hand of cards are
visible; no element past the right edge at 320/375 in en/es-MX/ja/ko. Render lint still reports
REFLEX 44c/79 at 1440 (it measures the copy column ending at 732px; the screen fills to ~850px),
and FAIL 40 on the parked card's `★ 2026` (Task 5). Remaining FAILs are in later sections.

**Context files:** `index.html`, `css/styles.css`, `js/i18n.js` (hero keys only)

- Slab nav (CSS only, shared markup unchanged): solid bar, links in Bungee at body size, sentence
  case, untracked (Floor 67). `:focus-visible` on every link and button (Floor 6).
- Counter hero per the Picks. `<h1>` moves from the card's name plate to the head. The card itself
  moves to the close in Task 5.
- `overflow-x: clip` on `html` and `body`; `minmax(0, 1fr)` hero tracks; `text-wrap: balance` on
  heads; `prefers-reduced-motion` block.
- New/changed hero keys added to all three locales.

**Check:** `sloplint.mjs index.html --render --stage hero` clean; at 1280×800 the head, sentence,
badge and the shot's focal point (the hand of cards) are all visible without scrolling; at 375px
wide no horizontal scroll.

### 4. Stages 1–3 ✅ done

**Outcome:** the run told in three numbered stages, each carrying its screen.

**Done:** `.section-field` + base path replaced by `section.run > ol.stages`; screen fixed on the
left (cols 1–5, `clamp(360px, 70svh, 720px)`), copy on 7–12, copy first in the DOM so phones read
the head before the screen. `.pos` diamond is now a standalone class inside each `h2`. Second
objects: Stage 1 `dl.nodes` rows (Game/Boss/Shop/Event/Train, names left in English as in-game
words); Stage 2 `ul.archetypes` line + deck sentence; Stage 3 `aside.rule-card` (Run Rules).
Node-row facts not on the old page were taken from the game source (`src/data/economy.ts`,
`trainingBuffs.ts`, `types/runEvent.ts`): game wins pay Peanuts with no recruit, boss wins pay
Peanuts + recruit, events resolve to Peanuts / a gamble / a recruit / a reworked card, training is a
run-long Swing/Ball/Strike upgrade chance. New keys `stage1.*`, `stage2.*`, `stage3.*` in all three
locales (drafted, need review). Old `play.*`, `f1..f6.*`, `n2.*`, `n4.*` keys are now unused by
markup except where Task 5 still needs `f6`; Task 6 deletes the dead ones.
**Check (passed):** no 30a/54/67 FAIL in the stages; each shot 630px tall at 1440; no overflow at
320/375 in any locale.

**Context files:** `index.html`, `css/styles.css`, `js/i18n.js`

- An `<ol>` of stages; the number sits inside a ruby diamond base marker within each `h2` (the old
  `.pos` motif, kept). Screens stay on one fixed side, never a zigzag.
- The second object varies per stage, so three alike stages don't read as a feature list (gate 8):
  map → node types as Rows (Game, Boss, Shop, Event, Train, as shown in the shot); pack → the
  archetypes line; boss → the Run Rules paragraph.
- Emoji icons removed (Floor 30a); no icon replaces them, since the screens carry the meaning.

**Check:** sloplint shows no 30a/54/67 FAILs in these sections; each shot renders ≥360px tall at 1440.

### 5. Daily Run band, close, footer ✅ done

**Outcome:** the 1.2 story kept as one band, and the page ends on the download.

**Done:** `section.daily` (head + `new.sub` on 1–5, Daily Run / Game Center rows on 7–12, kicker
and emoji gone); `section.close` (`close.title` "Walk it off" + `close.body` (f6 merged into one
sentence) + badge on 1–5, walk-off shot beside the card on 7–12); the old screenshot strip and
the `.section-*`, `.newband`, `.shots` and generic `section {}` rules are removed. Card restyled on
tokens: labels in the body face at ≥11px, sentence case, untracked; `★ 2026` now cream on ruby (was
4.34:1). Copy: `tc.sub` "Single-player roguelike", `tc.stat.ios` "iPhone and iPad",
`tc.stat.unlock` English "Unlock" → "Payment" (the translations already said payment; FAIL 19
buzzword), `n1.body` "one-time unlock" → "one-time purchase" (es-MX updated to match),
`foot.copy` → `© 2026 Arnau Tresserras` in all locales.
**Changed from plan:** the mast wordmark is real markup (`p.mast-mark` inside a `.container`), not
CSS-generated text, so the footer was rewritten in **all four pages** (identical, checked by hash).
`assets/screenshot_01..06*.png` removed with `git rm`.
**Check (passed):** badge appears twice, both with `data-umami-event="download-appstore"`; footers
identical on all four pages; no overflow at 320/375 in any locale (privacy table scrolls in its
wrapper). Open for Task 7: FAIL 58 (138 words on one screen at 1440, the Daily Run band; cutting
needs copy decisions, all facts are kept today) and REFLEX 77 (band has no visual mass, by choice).

**Context files:** `index.html`, `css/styles.css`, `js/i18n.js`

- Daily Run band: Rows composition (Daily Run, Game Center), no screenshot (photo/screen balance,
  gate 83).
- Close: `shot-2-walk-off` + the trading card (stats line, f6 "Free to start" copy) + the App Store
  badge again with the same `data-umami-event`.
- Mast footer: wordmark large over the existing five links. Restyled via CSS so the other pages
  match.

**Check:** the badge appears exactly twice, both with `data-umami-event="download-appstore"`; the
footer links are identical on all four pages.

- Delete `assets/screenshot_01..06*.png` (`git rm`) once nothing references them.

### 5b. Support, Privacy, Credits on the new system ✅ done

**Your call (after the first pass):** remove the em dashes, keep the support "2–3" en dash, waive
the rest. Done: privacy list-item leads ` — ` → `: ` (", such as" on the one that reads "such as"),
the §2.6 aside and support's `sup.unlock.p2` aside → parentheses, `sup.locked.p1` → comma,
`meta.desc.privacy` → colon; the same keys changed in es-MX/ja/ko (ja `——` → `：` / `（…）`).
No em dash is left in any HTML page. **Waived (record in Task 7):** FAIL 19 en dash support `:48`;
FAIL 19 "unlock" privacy `:113` and support `:53`; FAIL 58 words per screen on all three
documents. Static lint now: only those plus FAIL 20 (stamp, Task 7).

**Outcome:** the three article pages read well on the new scale with their layout and words unchanged.

**Done:** `.article` rebuilt on tokens: 46rem measure, `--text-display-s` h1, Bungee h2 at
`--text-xl`, `p` regains `margin-bottom` (fixes the Task 2 spacing regression), lists/code on the
scale. Table: hairline cells, heads in the label face (Press Start 2P, `--text-xs`, sentence case,
ja/ko bumped to `--text-sm`), `min-width: 36rem` so it scrolls in `.table-wrap` instead of breaking
URLs mid-word. Callout: hairline gold box, no side stripe. Separator-only markup changes for Floor
gates: `<title>` " — " → " | " on all four pages + every `meta.title.*` key; `priv.meta` middle dots
→ `<br />` (English + 3 locales, words untouched). `.nav-right` / `.lang-switch` spacing tokenized.
**Check:** table scrolls in its wrapper at 320/375 (576px inside 288/343), page width unchanged;
no overflow on any article page. **Not met: "no Floor FAIL".** What remains is copy this task
must not change, so it needs waivers (or your edits) in Task 7:

- FAIL 19 dash: privacy `:75` em dashes in the legal list items; support `:48` "2–3 business
  days" (an en dash in a numeric range, correct typography, a false positive).
- FAIL 19 "unlock": privacy `:113` ("purchase/unlock status", legal text); support `:53` ("How
  do I unlock the full game?", the term players search for).
- FAIL 58 words per screen on all three: they are documents.
- FAIL 20 stamp: Task 7.

**Context files:** `support.html`, `privacy.html`, `credits.html`, `css/styles.css` (`.article`,
table, `.callout` rules)

- Restyle `.article` heads, the third-party table and `.callout` on the tokens (the callout's
  4px side stripe becomes a hairline box, WARN 3); table heads in the label face, sentence case
  (Floor 67).
- No wording changes: the privacy text and its language notice are legal copy and stay verbatim.

**Check:** `sloplint.mjs support.html privacy.html credits.html --render` with no Floor FAIL; the
privacy table scrolls inside its wrapper at 375px with no page scroll.

### 6. i18n completeness ✅ done

**Outcome:** every visible string on the new page translates; dead keys removed.

**Done:** 31 dead keys removed from each locale (`hero.eyebrow`, `cta.learn`, `play.*`, `f1..f6.*`,
`new.kicker`, `n2.*`, `n4.*`, `shots.*`, `shot1..6.alt`; none is looked up by name in the script).
Each locale now holds exactly the 156 keys the four pages use. `i18n.js` 99 KB → 90 KB (Task 9
updates the "~83 KB" note). `?v=4` → `?v=5` on all four pages.
**Check (passed):** key diff of markup vs each locale: nothing missing, nothing unused. Rendered
every page in ja/ko/es-MX and listed Latin text outside `data-i18n` nodes: only brand names, the
privacy table's URLs, `iOS`, and the Game/Boss/Shop/Event/Train node names (English by design).
Translations of the new `hero.*`/`stage*.*`/`close.*` keys still await your review (Open question 1).

**Context files:** `js/i18n.js`, `index.html`, the four HTML pages' `<script src>` lines

- Diff the `data-i18n` keys in `index.html` against each locale block; add missing ones and delete
  keys no page uses anymore (`hero.eyebrow`, `play.kicker`, `shots.*`, `cta.learn`, …).
- Bump `js/i18n.js?v=4` → `?v=5` on all four pages.

**Check:** a one-line script lists `data-i18n` keys missing from any locale; output empty. Load
`?lang=ja` and `?lang=ko` and confirm no English is left except brand names and button names.

### 7. Sweep ✅ done (7b left open by decision: Apple's black badge kept as is)

**Outcome:** a verified page, compared against the before.

**Done:** stamp + critique + waivers at the top of `styles.css` (FAIL 20 closed). Fixes: badge
56 → 52px tall and lang buttons on the 4px scale (39b, 24b); Daily Run band copy cut to fit the
screen budget, all facts kept (FAIL 58: 138 → 123 words, now a NOTE because `redesign: full`
makes 58 informational; "Requires Game Center" moved into the Game Center row, the packs line
dropped from `new.sub` since Stage 2 says it; es-MX/ja/ko redrafted, need review). Finish review
(subagent, `fix`): hero screen pulled to ~77px from the copy, stage screens 630 → 720px tall and
~72px from their copy; archetypes as a 2×2 list, no separators (63); Run Rules moved from Stage 3
into the band as its third row (keys `stage3.rules.*` → `n2.*`), which also clears 77 without a
waiver; the card leads the close at 340px with the walk-off behind it, and `.tc-stats` is no longer
`aria-hidden`. Answered: no stage 3 crop (shared frame), 58 note, Gold Glove echo.
**Waived on record:** 37 (brand faces), 44c + 79 (render tier measures `.hero-copy`, not
`section.hero`; screen fills to 849/900px). `copy: verbatim` covers your 5b keeps (support en
dash, "unlock" ×2). **Open: REFLEX 7b** (badge `#000`/`#fff`). Its waiver needs the stamp to declare
`surface: absolute`, which would be false (paper is navy); either keep Apple's black badge and
accept the open REFLEX, or tint `--badge-bg` toward navy.
**Check:** `sloplint index.html --genre playful --render --kept`: 0 FAIL, 3 REFLEX (all 7b), links
6/6, hooks 3/3, figures 2/2; before 108 FAIL / 41 REFLEX. `.hallmark/compare.html` written.

**Context files:** `index.html`, `css/styles.css`, `.hallmark/before.json`

- `sloplint.mjs index.html --genre playful --render --kept`. Fix every FAIL. Waive on the record:
  37 (four faces = the game's brand).
- Hallmark finish review in a fresh-context subagent; act on its verdict.

**Check:** sloplint `Floor 0 FAIL`; `--kept` reports no lost link, hook or script; the comparison
page `.hallmark/compare.html` exists.

### 8. Log ✅ done

**Outcome:** the build is recorded so later Hallmark runs rotate away from it.

**Done:** `.hallmark/log.json` created with one entry: `mode: redesign`, `depth: full`, shape
Narrative Workflow, theme brand, hero Counter, nav slab, footer mast, imagery = real screenshots,
the seven sections, signature, draw `7a5624`, waived 37/44c/79, fingerprint
`Numbered by structure|Two-column asymmetric|Bleed-colour block|Solid|Tightly cropped to the grid|None`.
**Check (passed):** `theme.mjs log` reported no missing fields; the file parses and holds the entry.
`.hallmark/.gitignore` does not exclude `log.json`, so it will be committed with the rest.

- `theme.mjs log --entry '…'` with mode `redesign`, depth `full`, the shape, hero, nav, footer
  and sections.

**Check:** `.hallmark/log.json` has the entry.

### 9. Docs ✅ done

**Outcome:** CLAUDE.md describes the page that exists.

**Done:** Structure table: new `index.html` summary, rows for `css/tokens.css`, `css/base.css`, the
shot PNG sources and their `-720.jpg` copies, `.hallmark/`; `screenshot_0*` row removed. Localization:
size note ~83 → ~89 KB; CJK bullet now points at `tokens.css` and describes the current
`html[data-lang]` rules (the uppercase ones are gone). Conventions: tokens live in `tokens.css`;
"Design language" rewritten (Counter hero, the three-stage run, Daily Run band, trading-card close,
mast footer, house rules incl. the open badge finding); badge noted as appearing twice. README
untouched (it names no screenshots).
**Check (passed):** no `.basepath`, `.newband`, `.section-kicker`, `.section-field`,
`hero-eyebrow`, `n1..n4` or "83 KB" left in CLAUDE.md.

**Context files:** `CLAUDE.md`, `README.md`

- Rewrite § Conventions "Design language" (base path, What's-New band and outfield wall become the
  stage run, Daily Run band and close); update the Structure table (`css/tokens.css`, new shots);
  update the "~83 KB" size note if it changes; README only if it names the old screenshots.

**Check:** no mention of `.basepath`, `.newband`, `.section-kicker` or `.section-field` remains in
CLAUDE.md, unless the class still exists.

## Resolved

1. **Captions:** you'll supply clean, caption-free captures; captions become live `h2` text,
   translated. One image set for all locales, so `i18n.js` needs no image swapping.
2. **Duplicate headings:** gone with 1; the `h2` *is* the caption.
3. **Old screenshots:** delete (Task 5).
4. **Scale scope:** all four pages (Task 2 imports `base.css`; Task 5b).
5. **Render tier:** `puppeteer-core` installed globally; Chrome found at the x86 path.
6. **Rights line:** cut to `© 2026 Arnau Tresserras`.
7. **Facts:** all confirmed true; carried over as-is.

## Open questions

1. **Translations:** not asked yet. Default unless you say otherwise: I draft es-MX/ja/ko for the
   new strings in the same register as the existing ones, and list them for review.

## Found while working

Still open (each needs you; nothing left that I can fix in this repo):

- **Translations to review** (Open question 1): the es-MX/ja/ko drafts for `hero.*`, `stage1..3.*`,
  `close.*`, `new.sub`, `n1.body`, `n3.body` in `js/i18n.js`.
- **Game repo, uncommitted:** the 5b em-dash edits in `docs/site/SUPPORT.md` and the full re-sync of
  `docs/legal/PRIVACY_POLICY.md` from `privacy.html` (117 sentences, identical). The curly quotes
  added here in the cleanup were not mirrored there: typography, not wording.
- **Price above the fold** (finish review): the old page showed free / one-time / no subs / iPhone
  and iPad on the first screen; now it first appears at the close. Moving it up adds hero copy past
  the Floor's headline + one sentence. Content decision.
- **sloplint (the skill, not this repo):** a `*` inside a waiver's guard text makes the waiver
  silently ignored, with no "malformed" warning.

Resolved during cleanup (2026-10-27):

- Unused tokens deleted from `tokens.css`: `--grass`, `--grass-dk`, `--grass-line`, `--dirt`,
  `--chalk`, `--chalk-edge`, `--chalk-ink`, `--chalk-ink-2`, `--chalk-line`, `--scoreboard-bg`,
  `--frame` (no `var()` reference anywhere).
- 49b: privacy table URLs no longer wrap (`td a { white-space: nowrap }`; the wrapper scrolls).
- F1: 27 straight quotes → typographic in the English prose of support (12), privacy (13),
  credits (2); prose only, no attribute, URL or code touched.
- 78 and 77 on the three document pages waived in the stamp (documents, not landing strips; the
  home page passes both unwaived).
- **Lint, all four pages:** 0 FAIL; the only REFLEX is 7b, the App Store badge, kept by your
  decision.

Resolved earlier and pruned from this list: old screenshots never downscaled (deleted, replaced by
`-720.jpg`), the 320px sideways scroll (gone with the redesign; live until deployed), the 4.34:1
contrast, Task 2's interim regressions (5b), FAIL 20 stamp (Task 7), `.lang-btn` padding (Task 7).
