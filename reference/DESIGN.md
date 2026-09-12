# Authkit — Style Reference
> Frosted glass cathedral at midnight

**Theme:** dark

AuthKit renders a midnight product-launch aesthetic: a near-black canvas with frosted-glass surfaces, a grid of faint blueprint lines, and luminous text that appears lit from behind a glass layer. Type is almost entirely white-on-dark with one vivid violet as the single functional accent — every interactive surface wears a soft inset hairline of cool blue-white rather than a hard border. Components sit on translucent layers stacked above ambient glows, with cards that look like glass plates lit from below rather than paper panels. Spacing is generous and rhythmic; the hero is a single full-bleed illuminated wordmark surrounded by floating glass cards rather than a conventional split layout.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Canvas | `#05060f` | `--color-midnight-canvas` | Page background, deepest card surface, badge fills — the near-black base everything else floats on |
| Steel Plate | `#2f343e` | `--color-steel-plate` | Elevated surface, button fills for ghost/secondary actions, subtle panel backing |
| Fog Veil | `#9da7ba` | `--color-fog-veil` | Muted body copy, card text — readable but stepped back from headlines |
| Moon Mist | `#c7d3ea` | `--color-moon-mist` | Body text, secondary labels, muted helper copy |
| Frost Glow | `#d1e4fa` | `--color-frost-glow` | Primary text fill for body and links, badge text, icon fills — the default luminous foreground |
| Ice Highlight | `linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)` | `--color-ice-highlight` | Light text on dark surfaces, inverse labels, and high-contrast captions. Do not promote it to the primary CTA color; Headline gradient — top-to-bottom fade from Ice Highlight to soft blue, used on the AuthKit wordmark and key headings |
| Pure White | `#ffffff` | `--color-pure-white` | Button text, input text, maximum-emphasis foreground |
| Void Violet | `#663af3` | `--color-void-violet` | Primary CTA fill — the only chromatic accent, used exclusively for the Continue/Submit button inside auth forms; vivid violet against near-black creates focused urgency without breaking the monochromatic mood |
| Blueprint Blue | `#b6d9fc` | `--color-blueprint-blue` | Decorative icon accent, soft highlight wash on feature illustrations |
| Ember Glow | `#e46d4c` | `--color-ember-glow` | Secondary accent — appears in demo/showcase contexts (logo recoloring swatches) for brand-color customization display |
| Signal Blue | `#027dea` | `--color-signal-blue` | Secondary accent — appears in customization swatch grids to demonstrate brand-color options |
| Deep Teal | `#269684` | `--color-deep-teal` | Secondary accent — appears in customization swatch grids |
| Gridline Blue | `#3f4959` | `--color-gridline-blue` | Shadow color for outer card drop-shadows — cool dark blue-grey gives elevation a tinted, on-brand feel rather than neutral black |
| Glass Edge | `#bad7f71f` | `--color-glass-edge` | Hairline borders on buttons, inputs, and links — inset 1px stroke of frosted blue-white that defines edges without hard lines |
| Luminous Fill | `#c7d3ea1f` | `--color-luminous-fill` | Badge fill and soft surface tint — translucent cool white for tag backgrounds and subtle UI washes |

## Tokens — Typography

### Untitled Sans — Body, UI, buttons, inputs, badges, small headings — the working typeface for everything functional · `--font-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 24px
- **Line height:** 1.17, 1.20, 1.33, 1.43, 1.50, 2.29, 2.57
- **Letter spacing:** -0.0100em
- **Role:** Body, UI, buttons, inputs, badges, small headings — the working typeface for everything functional

### aeonikPro — Display headings only — the wordmark 'AuthKit', section headings, hero copy; weight 500 at 44-48px gives the wordmark a wide, calm presence rather than a bold shout · `--font-aeonikpro`
- **Substitute:** Space Grotesk
- **Weights:** 400, 500
- **Sizes:** 28px, 44px, 48px
- **Line height:** 1.14, 1.16, 1.17, 1.20
- **Letter spacing:** normal
- **Role:** Display headings only — the wordmark 'AuthKit', section headings, hero copy; weight 500 at 44-48px gives the wordmark a wide, calm presence rather than a bold shout

### dotDigital — All-caps eyebrow labels ('Introducing', 'Extensible by design', 'Shine bright') — 0.10em tracked monospace-flavored caps act as quiet section markers between the display type and body copy · `--font-dotdigital`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 15px
- **Line height:** 1.20
- **Letter spacing:** 0.1000em
- **OpenType features:** `"tnum" on`
- **Role:** All-caps eyebrow labels ('Introducing', 'Extensible by design', 'Shine bright') — 0.10em tracked monospace-flavored caps act as quiet section markers between the display type and body copy

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 18px | 1.33 | — | `--text-subheading` |
| heading-sm | 24px | 1.17 | -0.24px | `--text-heading-sm` |
| heading | 28px | 1.14 | — | `--text-heading` |
| heading-lg | 44px | 1.16 | — | `--text-heading-lg` |
| display | 48px | 1.17 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 100 | 100px | `--spacing-100` |
| 120 | 120px | `--spacing-120` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| badges | 6px |
| inputs | 6px |
| modals | 16px |
| buttons | 999px |
| iconContainers | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px` | `--shadow-sm` |
| md | `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px` | `--shadow-md` |
| subtle | `rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset` | `--shadow-subtle` |
| subtle-2 | `rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgb...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199...` | `--shadow-subtle-4` |
| subtle-5 | `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset` | `--shadow-subtle-5` |
| subtle-6 | `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168,...` | `--shadow-subtle-6` |
| subtle-7 | `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168,...` | `--shadow-subtle-7` |
| subtle-8 | `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168,...` | `--shadow-subtle-8` |
| subtle-9 | `rgba(186, 214, 247, 0.24) 0px 0px 0px 1px inset` | `--shadow-subtle-9` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Pill Button (Primary Ghost)
**Role:** Default button — used for 'Get started', 'Continue with Google/Microsoft', 'Learn more' links

999px radius, padding 8px 16px, background rgba(186,214,247,0.06) (faint frost wash), text #ffffff, 1px inset border rgba(186,215,247,0.12) of frosted blue-white. Weight 500, 14px Untitled Sans. Hover lightens the frost wash to rgba(186,214,247,0.12).

### Pill Button (Outlined)
**Role:** Secondary navigation button — header GitHub icon, secondary CTAs

999px radius, padding 8px 16px, transparent background, text #d1e4fa, 1px inset border rgba(186,215,247,0.12). Same geometry as primary ghost; only the fill differs.

### Violet CTA Button
**Role:** Sole chromatic CTA — appears only inside auth-form mockups as the 'Continue' submit button

Solid fill #663af3, white text, 6px radius, padding 12px 24px, weight 500. The only place a non-monochrome button appears; its vivid violet punches against the midnight palette.

### Glass Card (Feature)
**Role:** Feature cards, icon containers, section panels

16px radius, background rgba(186,214,247,0.03) (nearly invisible frost tint), padding 24px, no hard border. Elevation built from inset frost highlight + soft outer halo — reads as a glass plate lit from behind.

### Auth-Form Modal Card
**Role:** The headline product — floating login/signup cards in the hero

16px radius, background rgba(5,6,15,0.97), padding 24-32px. Three-layer shadow stack: top inset frost (#d8ecf8 20%), mid inset glow (#a8d8f5 6%), bottom drop (#000 30%). Floats above the hero with the central card scaled larger than its siblings.

### Text Input
**Role:** Email, password, and text fields inside auth forms

6px radius, background rgba(199,211,234,0.06), text #ffffff, placeholder #c7d3ea at ~60% opacity, 1px inset border rgba(186,215,247,0.12). Padding 10px horizontal. Focus state increases the border opacity to 0.24.

### Provider Button (Social Login)
**Role:** Continue with Google / Microsoft / SSO buttons

Full-width pill (999px or 6px radius variant), padding 12px 16px, background rgba(199,211,234,0.06), white text, provider icon left-aligned. Divider 'OR' sits between email submit and social options in 12px muted caps.

### Section Eyebrow Label
**Role:** All-caps section markers ('Introducing', 'Extensible by design', 'Shine bright', 'Light and dark modes supported')

15px dotDigital, weight 400, letter-spacing 0.10em, color #c7d3ea, centered. Flanked by thin horizontal lines that fade from transparent to rgba(186,215,247,0.12) and back.

### Feature Icon Tile
**Role:** Icon containers in the feature row (Single Sign-On, Password, MFA, Social Login, RBAC, Magic Auth)

9999px radius (perfect circle), ~56-64px square, background frosted tint, outlined glyph icon in #d1e4fa. Icons are line-art (1.5px stroke), mono — no fill, no color variation between tiles.

### Badge / Tag
**Role:** Category tags on integration cards (Email & Password, Social Login, MFA, SSO)

6px radius, background rgba(199,211,234,0.12), text #d1e4fa, padding 4px 8px, 12px Untitled Sans weight 500. Multi-layer inset shadow gives a faint inner glow.

### Logo Mark (WorkOS / AuthKit)
**Role:** Wordmark in header and hero

WorkOS wordmark is Untitled Sans weight 500 at 16px in #d1e4fa. The AuthKit hero wordmark is aeonikPro weight 500 at ~140-180px (display size extrapolated), filled with the Skywash vertical gradient (#d8ecf8 → #98c0ef).

### Background Grid Layer
**Role:** Ambient page atmosphere — blueprint grid behind all sections

Full-bleed SVG/div layer with 1px lines at rgba(186,215,247,0.06), ~80-100px cell spacing, masked to fade at edges. A conic gradient halo sits at the top center creating a spotlight effect.

### Theme Toggle (Light/Dark)
**Role:** Demonstrates the product's light/dark mode support

Pill-shaped segmented control, 999px radius, two segments (moon icon / sun icon), 32px tall. Active segment has a slightly brighter frost background; inactive is transparent.

### Customization Swatch
**Role:** Color picker tiles in the 'Your brand. Your style.' section

Small 20-24px squares, 4-6px radius, filled with the brand color (violet, blue, teal, orange). Arranged in a row with 4px gaps. Labeled 'Colour' in 12px muted text.

## Do's and Don'ts

### Do
- Use 999px radius for all interactive elements (buttons, social-login buttons, tag toggles); reserve 16px radius exclusively for cards and modals, 6px for badges and inputs, and 9999px for circular icon containers.
- Build elevation from inset frost highlights + soft outer halos rather than conventional drop-shadows: pair inset rgba(216,236,248,0.2) 1px top edge with a 24-48px inset glow and a dark cool drop.
- Use Void Violet (#663af3) exclusively for the auth-form Continue/submit CTA — never as a decorative accent or non-auth button background.
- Set headline text in aeonikPro weight 500 at 44-48px with the Skywash vertical gradient (#d8ecf8 → #98c0ef); body and UI in Untitled Sans 400-500.
- Place all-caps eyebrow labels (dotDigital, 15px, 0.10em tracking, #c7d3ea) centered and flanked by fading horizontal lines at rgba(186,215,247,0.12) to mark every section opening.
- Use rgba(186,215,247,0.12) as the universal hairline border — never solid strokes; the frosted-inset edge is the system's border language.
- Set section gaps at 120px and card padding at 24px; rhythm should feel cathedral-like rather than dense SaaS.
- Render text in the Ice Highlight → Frost Glow → Moon Mist → Fog Veil progression (#d8ecf8 → #d1e4fa → #c7d3ea → #9da7ba) for heading → body → muted body → helper copy.
- Use the conic-gradient spotlight halo (rgba(124,145,182,0.5) at center, fading outward) at the top of every full-bleed hero to anchor the composition.

### Don't
- Do not introduce additional chromatic accents — the palette is monochromatic with one violet CTA; any extra hue breaks the system.
- Do not use solid colored borders; replace them with 1px inset rgba(186,215,247,0.12) strokes to preserve the glass aesthetic.
- Do not use bold weights (600+) on aeonikPro display headings — the wordmark's authority comes from weight 500 at large size, not volume.
- Do not apply conventional drop-shadows; the system reads elevation through inset glow + dark halo.
- Do not mix radius families on the same component type — every button is pill, every card is 16px, every badge is 6px.
- Do not place white (#ffffff) on background tints brighter than rgba(186,214,247,0.12) — the contrast floor collapses.
- Do not use the Skywash gradient on body text or buttons; reserve it for the display wordmark and the largest headings only.
- Do not introduce light-theme colors into core tokens even though the product supports light mode; the marketing site is dark-first, and light-mode demos are a product feature, not a design-system palette.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Midnight Canvas | `#05060f` | Full-bleed page background, deepest layer |
| 1 | Steel Plate | `#2f343` | Elevated panels, ghost-button fills |
| 2 | Frosted Glass | `#bad6f708` | Translucent card surface — barely-visible tint that reads as glass above the canvas |
| 3 | Deep Glass | `#05060ff7` | Auth-form modal surface — nearly opaque midnight with frosted-edge shadow stack |

## Elevation

- **Auth-form modal card:** `inset 0 1px 1px rgba(216, 236, 248, 0.2), inset 0 24px 48px rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)`
- **Feature card:** `inset 0 1px 1px rgba(199, 211, 234, 0.12), inset 0 24px 48px rgba(199, 211, 234, 0.05), 0 24px 32px rgba(6, 6, 14, 0.7)`
- **Floating auth-card (hero):** `inset 0 1px 1px rgba(216, 236, 248, 0.2), inset 0 24px 48px rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)`
- **Glow halo (behind hero wordmark):** `0 0 6px rgba(186, 207, 247, 0.32), 0 0 12px rgba(238, 186, 247, 0.24)`

## Imagery

Visuals are dominated by glass-morphism auth-form mockups (email/password inputs, social-login buttons, passwordless code-entry) rendered as floating translucent cards against the midnight canvas. Feature icons are line-art mono glyphs in #d1e4fa inside circular frosted tiles. A faint blueprint grid (1px lines at rgba(186,215,247,0.06)) covers the full page as ambient atmosphere, and a conic-gradient spotlight halo glows at the top of the hero. No photography, no lifestyle imagery, no product screenshots — the product IS the visual: login boxes arranged like glass prototypes in a dark studio.

## Layout

Full-bleed dark canvas, max-width 1200px content container centered. Hero is a single centered illuminated wordmark ('AuthKit' in gradient display type) under a small eyebrow label, with three floating glass auth-form cards layered behind/below in an overlapping fan (left card tilted left, center card scaled largest, right card tilted right). Below the hero, a light/dark theme toggle sits centered. Feature row is a horizontal 6-icon timeline with thin connecting lines between circular icon tiles. Section rhythm: every section opens with a centered eyebrow label flanked by fading horizontal lines, then a large centered heading (44-48px), then a single line of muted body copy (16-18px), max ~640px width. Customization section features a mock browser-window frame with the auth card centered, surrounded by floating UI inspector panels (color swatches, radius sliders, logo icon picker, button text field, page background field) positioned at the corners of the canvas like a design-tool workspace.

## Agent Prompt Guide

Quick Color Reference:
- canvas: #05060f
- surface (frosted glass card): rgba(186,214,247,0.03)
- surface (elevated modal): rgba(5,6,15,0.97)
- text (headline): #d8ecf8
- text (body): #d1e4fa
- text (muted): #c7d3ea
- text (helper): #9da7ba
- border (hairline): rgba(186,215,247,0.12)
- accent / primary action: #663af3 (filled action)

Example Component Prompts:

1. Create a Primary Action Button: #663af3 background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. Section eyebrow + heading stack: eyebrow is 15px dotDigital weight 400 letter-spacing 0.10em #c7d3ea, centered, flanked by fading horizontal lines (gradient from transparent to rgba(186,215,247,0.12) to transparent). Below, heading is 44px aeonikPro weight 500 in #d8ecf8, centered. Body below is 16px Untitled Sans 400 in #c7d3ea, max-width 640px centered.

3. Feature icon tile row: six circular tiles (9999px radius, 56px), background rgba(186,214,247,0.06), outlined line-art icon centered in #d1e4fa, label below in 14px Untitled Sans #c7d3ea. Tiles connected by 1px horizontal line at rgba(186,215,247,0.12).

4. Ghost pill button: 999px radius, padding 8px 16px, background rgba(186,214,247,0.06), 1px inset border rgba(186,215,247,0.12), text #ffffff, 14px Untitled Sans weight 500.

5. Background canvas with grid: #05060f base, 1px grid lines at rgba(186,215,247,0.06) at 80px intervals, full-bleed, masked to fade at edges. Conic-gradient spotlight at top center: conic-gradient(at 50% -5%, transparent 45%, rgba(124,145,182,0.3) 49%, rgba(124,145,182,0.5) 50%, rgba(124,145,182,0.3) 51%, transparent 55%).

## Gradient System

The system uses three gradient layers stacked vertically: (1) Skywash linear gradient (#d8ecf8 → #98c0ef, 0deg) fills the display wordmark and largest headings; (2) Fading hairline gradients (transparent → rgba(186,215,247,0.12) → transparent) create the section divider lines flanking every eyebrow label; (3) Conic-gradient spotlight halos (transparent → rgba(124,145,182,0.5) → transparent) sit at the top of full-bleed sections as ambient illumination. All gradients are cool-tinted; never introduce warm gradients — the palette stays in the blue-violet spectrum.

## Similar Brands

- **Linear** — Same near-black canvas, monochromatic blue-white text, single vivid violet as the only chromatic accent, and floating glass-morphism product cards
- **Vercel** — Dark-first marketing surfaces with gradient-filled display type, frosted glass UI mockups, and minimal hairline borders at low opacity
- **Clerk** — Devtools auth-product landing with dark canvas, glass-card auth-form mockups as the hero visual, and monochrome-with-one-accent palette
- **Radix** — Companion brand — shares the WorkOS/Radix visual lineage with blueprint-grid backgrounds, frosted surfaces, and dot-tracked all-caps eyebrow labels
- **Stripe** — Gradient-filled display headings on dark backgrounds, translucent glass cards as product showcases, and restrained palette with one signature accent

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-midnight-canvas: #05060f;
  --color-steel-plate: #2f343e;
  --color-fog-veil: #9da7ba;
  --color-moon-mist: #c7d3ea;
  --color-frost-glow: #d1e4fa;
  --color-ice-highlight: #d8ecf8;
  --gradient-ice-highlight: linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%);
  --color-pure-white: #ffffff;
  --color-void-violet: #663af3;
  --color-blueprint-blue: #b6d9fc;
  --color-ember-glow: #e46d4c;
  --color-signal-blue: #027dea;
  --color-deep-teal: #269684;
  --color-gridline-blue: #3f4959;
  --color-glass-edge: #bad7f71f;
  --color-luminous-fill: #c7d3ea1f;

  /* Typography — Font Families */
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-aeonikpro: 'aeonikPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dotdigital: 'dotDigital', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.17;
  --tracking-heading-sm: -0.24px;
  --text-heading: 28px;
  --leading-heading: 1.14;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.16;
  --text-display: 48px;
  --leading-display: 1.17;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-200: 200px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 120px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 44px;
  --radius-full: 999px;
  --radius-full-2: 4999.5px;
  --radius-full-3: 9999px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-badges: 6px;
  --radius-inputs: 6px;
  --radius-modals: 16px;
  --radius-buttons: 999px;
  --radius-iconcontainers: 9999px;

  /* Shadows */
  --shadow-sm: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-md: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-subtle: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-subtle-3: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-subtle-4: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-subtle-5: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-6: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-subtle-7: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;
  --shadow-subtle-8: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(199, 211, 234, 0.08) 0px 0px 0px 1px inset;
  --shadow-subtle-9: rgba(186, 214, 247, 0.24) 0px 0px 0px 1px inset;

  /* Surfaces */
  --surface-midnight-canvas: #05060f;
  --surface-steel-plate: #2f343;
  --surface-frosted-glass: #bad6f708;
  --surface-deep-glass: #05060ff7;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-midnight-canvas: #05060f;
  --color-steel-plate: #2f343e;
  --color-fog-veil: #9da7ba;
  --color-moon-mist: #c7d3ea;
  --color-frost-glow: #d1e4fa;
  --color-ice-highlight: #d8ecf8;
  --color-pure-white: #ffffff;
  --color-void-violet: #663af3;
  --color-blueprint-blue: #b6d9fc;
  --color-ember-glow: #e46d4c;
  --color-signal-blue: #027dea;
  --color-deep-teal: #269684;
  --color-gridline-blue: #3f4959;
  --color-glass-edge: #bad7f71f;
  --color-luminous-fill: #c7d3ea1f;

  /* Typography */
  --font-untitled-sans: 'Untitled Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-aeonikpro: 'aeonikPro', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-dotdigital: 'dotDigital', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.17;
  --tracking-heading-sm: -0.24px;
  --text-heading: 28px;
  --leading-heading: 1.14;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.16;
  --text-display: 48px;
  --leading-display: 1.17;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-200: 200px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 44px;
  --radius-full: 999px;
  --radius-full-2: 4999.5px;
  --radius-full-3: 9999px;

  /* Shadows */
  --shadow-sm: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-md: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-subtle: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-subtle-2: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-subtle-3: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-subtle-4: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-subtle-5: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-6: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-subtle-7: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;
  --shadow-subtle-8: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(199, 211, 234, 0.08) 0px 0px 0px 1px inset;
  --shadow-subtle-9: rgba(186, 214, 247, 0.24) 0px 0px 0px 1px inset;
}
```
