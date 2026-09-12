# AuthKit reproduction benchmark

Recreate the AuthKit marketing website shown in the supplied 1600×1000 screenshot and DESIGN.md. Match its layout, typography, colors, spacing, lighting and overall feel as closely as possible. This is a local visual reproduction and functional demo, not a production authentication service.

Prioritize the screenshot over contradictory generic style rules. The first viewport must reproduce the sparse WorkOS header, centered symbol, GitHub and Get started controls, Introducing eyebrow, large luminous AuthKit wordmark, two-line subtitle and three overlapping frosted login cards. Preserve the original AuthKit and WorkOS text for a fair comparison.

Continue below the hero with the light/dark switch, six authentication feature icons, the Extensible by design section ('Your users. Your data. Maximum flexibility.'), a dashboard-style illustration, and the Shine bright customization section ('Your brand. Your style.'). Provide local color, radius and theme controls that visibly alter a demo login card. Forms should validate dummy input and show a local success state without sending or storing credentials. Navigation should work locally.

Deliver one index.html with all CSS, SVG and JavaScript inline. No frameworks or dependency installs. System fonts or CSS fallbacks are allowed. Rebuild visual elements with HTML/CSS/SVG; do not embed the reference screenshot as the page or fetch original website HTML/CSS/assets. Do not use generated stock art. This task tests model implementation skill using equal reference material.

Desktop evaluation uses 1600×1000. Mobile evaluation uses 390×844. Avoid horizontal overflow. Respect reduced motion. Give visible controls accessible labels and keyboard focus. The screenshot contains intentionally subdued glass effects; avoid bright rainbow glows or generic SaaS styling.


Design specification from the supplied Refero page:
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


You are a visual critic. Image 1 is the reference. Image 2 is the current rendered website at the same 1600x1000 viewport. Compare them carefully. Return at most 8 concrete fixes ranked by visual impact, specifying current versus target positions, sizes, colors and missing details. Do not assume features work without evidence. Keep the critique under 650 words.

Current HTML:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="dark" />
<title>AuthKit — The world's best login box, powered by WorkOS + Radix</title>
<style>
  /* ============================================================
     TOKENS
     ============================================================ */
  :root{
    --midnight:#05060f;
    --steel:#2f343e;
    --fog:#9da7ba;
    --mist:#c7d3ea;
    --frost:#d1e4fa;
    --ice:#d8ecf8;
    --white:#ffffff;
    --violet:#663af3;
    --blueprint:#b6d9fc;
    --ember:#e46d4c;
    --signal:#027dea;
    --teal:#269684;

    --hairline:rgba(186,215,247,.12);
    --hairline-soft:rgba(186,215,247,.06);
    --hairline-bright:rgba(186,215,247,.24);
    --glass:rgba(186,214,247,.03);
    --fill:rgba(199,211,234,.06);
    --fill-2:rgba(199,211,234,.12);

    --font-ui:"Untitled Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    --font-display:"Aeonik Pro","Space Grotesk",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
    --font-mono:"dotDigital",ui-monospace,SFMono-Regular,"JetBrains Mono",Menlo,Consolas,monospace;

    --page:1200px;
    --radius-cards:16px;
    --radius-inputs:6px;
    --radius-buttons:999px;

    --shadow-feature:
      inset 0 1px 1px rgba(199,211,234,.12),
      inset 0 24px 48px rgba(199,211,234,.05),
      0 24px 32px rgba(6,6,14,.70);

    --demo-accent:#663af3;
    --demo-radius:6px;
    --demo-radius-card:16px;

    --fan-scale:1;
  }

  /* ============================================================
     BASE
     ============================================================ */
  *,*::before,*::after{box-sizing:border-box}
  [hidden]{display:none !important}
  html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
  body{
    margin:0;
    background:var(--midnight);
    color:var(--frost);
    font-family:var(--font-ui);
    font-size:16px;
    line-height:1.5;
    letter-spacing:-.16px;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    overflow-x:hidden;
  }
  img,svg{display:block}
  a{color:inherit}
  button{font-family:inherit}
  :focus-visible{outline:2px solid #b6d9fc;outline-offset:3px;border-radius:6px}
  .skip{
    position:absolute;left:-9999px;top:0;z-index:200;
    background:#0b0e1b;color:#eaf3ff;padding:10px 16px;border-radius:999px;text-decoration:none;font-size:14px;
  }
  .skip:focus{left:16px;top:16px}

  /* ============================================================
     ATMOSPHERE (global, very subtle)
     ============================================================ */
  .bg{
    position:fixed;inset:0;z-index:-2;pointer-events:none;
    background:
      radial-gradient(70% 42% at 50% -6%, rgba(78,102,150,.20), transparent 72%),
      radial-gradient(90% 60% at 50% 106%, rgba(48,66,108,.16), transparent 74%),
      #05060f;
  }
  .bg::after{
    content:"";position:absolute;inset:0;
    background:
      linear-gradient(to right, rgba(186,215,247,.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(186,215,247,.035) 1px, transparent 1px);
    background-size:100px 100px;
    -webkit-mask-image:linear-gradient(to bottom, rgba(0,0,0,.9), transparent 70%);
    mask-image:linear-gradient(to bottom, rgba(0,0,0,.9), transparent 70%);
    opacity:.5;
  }

  /* ============================================================
     HEADER
     ============================================================ */
  .site-header{position:relative;z-index:30;padding:20px 0 14px}
  .nav-inner{
    position:relative;
    max-width:1200px;margin:0 auto;height:36px;
    padding:0 24px;
  }
  .brand{
    position:absolute;top:50%;left:calc(50% - 354px);transform:translateY(-50%);
    font-size:16px;font-weight:500;color:var(--frost);letter-spacing:-.01em;
    text-decoration:none;opacity:.92;white-space:nowrap;
  }
  .brand:hover{opacity:1}
  .mark{
    position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    display:grid;place-items:center;width:36px;height:32px;
    text-decoration:none;
  }
  .nav-right{
    position:absolute;top:50%;right:calc(50% - 388px);transform:translateY(-50%);
    display:flex;align-items:center;gap:10px;
  }

  /* pills */
  .pill{
    display:inline-flex;align-items:center;justify-content:center;gap:8px;
    border:0;border-radius:var(--radius-buttons);
    padding:8px 16px;
    font-size:14px;font-weight:500;line-height:1.2;
    color:#fff;text-decoration:none;cursor:pointer;white-space:nowrap;
    background:linear-gradient(180deg,rgba(199,211,234,.14),rgba(199,211,234,.05));
    box-shadow:inset 0 1px 1px rgba(216,236,248,.14), inset 0 0 0 1px rgba(186,215,247,.12);
    transition:background .18s ease, box-shadow .18s ease, transform .18s ease;
  }
  .pill:hover{background:linear-gradient(180deg,rgba(199,211,234,.22),rgba(199,211,234,.10));}
  .pill:active{transform:translateY(1px)}
  .icon-btn{
    width:34px;height:34px;border-radius:999px;display:grid;place-items:center;
    color:var(--frost);background:transparent;border:0;cursor:pointer;
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.12);
    text-decoration:none;
    transition:background .18s ease, box-shadow .18s ease;
  }
  .icon-btn:hover{background:rgba(186,214,247,.08)}
  .icon-btn:focus-visible{outline-offset:2px}

  /* ============================================================
     HERO
     ============================================================ */
  .hero{position:relative;padding:135px 0 60px;text-align:center}
  .hero-inner{position:relative;z-index:2;max-width:900px;margin:0 auto;padding:0 24px}

  /* --- atmosphere: broad subdued light cone + structural lines --- */
  .hero::before{
    content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
    background:
      radial-gradient(26% 22% at 50% 2%, rgba(150,182,228,.20), transparent 74%),
      radial-gradient(38% 32% at 50% 24%, rgba(120,152,206,.13), transparent 76%),
      radial-gradient(54% 44% at 50% 54%, rgba(102,134,194,.11), transparent 78%),
      radial-gradient(70% 58% at 50% 88%, rgba(88,118,178,.10), transparent 80%);
  }
  .hero::after{
    content:"";position:absolute;inset:0;z-index:1;pointer-events:none;
    background:radial-gradient(120% 78% at 50% 38%, transparent 34%, rgba(3,4,10,.55) 78%, rgba(3,4,10,.86) 100%);
  }
  .hero-atmos{
    position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden;
  }
  .sline{position:absolute;background:rgba(150,182,228,.11)}
  .sline-v{
    top:0;bottom:0;width:1px;
    -webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 10%,#000 74%,transparent 100%);
    mask-image:linear-gradient(180deg,transparent 0%,#000 10%,#000 74%,transparent 100%);
  }
  .sline-h{
    left:0;right:0;height:1px;
    -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 20%,#000 80%,transparent 100%);
    mask-image:linear-gradient(90deg,transparent 0%,#000 20%,#000 80%,transparent 100%);
  }
  .sdot{
    position:absolute;width:3px;height:3px;border-radius:1px;
    background:rgba(172,202,242,.38);
    box-shadow:0 0 5px rgba(150,195,245,.35);
    transform:translate(-1px,-1px);
  }

  /* --- hero type --- */
  .eyebrow{
    position:relative;z-index:2;
    display:flex;align-items:center;justify-content:center;gap:16px;
    font-size:13px;font-weight:400;
    letter-spacing:.005em;color:#a7b4cb;line-height:1.2;
    white-space:nowrap;
  }
  .eyebrow .rule{height:1px;width:clamp(30px,5.5vw,74px);flex:0 0 auto}
  .eyebrow .rule--l{background:linear-gradient(90deg,transparent,rgba(186,215,247,.16))}
  .eyebrow .rule--r{background:linear-gradient(90deg,rgba(186,215,247,.16),transparent)}

  .wordmark{
    position:relative;z-index:2;
    margin:30px 0 0;
    font-family:var(--font-display);
    font-weight:500;
    font-size:clamp(54px,9.15vw,146px);
    line-height:1;
    letter-spacing:.015em;
    background:linear-gradient(180deg,#cfe1f8 0%,#a8c8ee 52%,#93b4e2 100%);
    -webkit-background-clip:text;background-clip:text;
    color:transparent;-webkit-text-fill-color:transparent;
    filter:drop-shadow(0 0 42px rgba(126,166,224,.26));
  }

  .subtitle{
    position:relative;z-index:2;
    margin:2px auto 0;
    max-width:600px;
    font-size:clamp(17px,1.32vw,21px);
    line-height:1.43;
    letter-spacing:.005em;
    color:#8b98ad;
  }
  .subtitle span{display:block}
  .subtitle span:last-child{color:#bac8df}

  /* --- floating auth card fan --- */
  .fan-wrap{
    position:relative;z-index:2;
    display:flex;justify-content:center;
    margin-top:60px;
    height:calc(459px * var(--fan-scale));
  }
  .fan{
    position:relative;
    flex:0 0 1200px;width:1200px;height:459px;
    transform:scale(var(--fan-scale));
    transform-origin:top center;
  }
  .fan::before{
    content:"";position:absolute;left:16%;right:16%;top:22%;bottom:-8%;z-index:0;
    background:radial-gradient(50% 52% at 50% 50%, rgba(104,138,198,.20), transparent 74%);
    filter:blur(34px);pointer-events:none;
  }

  .acard{
    position:absolute;top:0;left:50%;
    width:392px;
    border-radius:var(--radius-cards);
    text-align:center;
    color:var(--frost);
    background:
      radial-gradient(130% 70% at 50% 0%, rgba(126,162,222,.16), transparent 62%),
      linear-gradient(180deg, rgba(22,33,58,.80), rgba(7,10,20,.90));
    box-shadow:
      inset 0 1px 1px rgba(206,232,255,.20),
      inset 0 0 0 1px rgba(152,192,242,.11),
      inset 0 26px 60px rgba(120,162,222,.07),
      0 24px 48px rgba(0,0,0,.46);
  }
  /* tiny corner studs */
  .acard::after{
    content:"";position:absolute;top:17px;left:17px;width:3px;height:3px;border-radius:50%;
    background:rgba(198,224,252,.40);
    box-shadow:
      0 0 5px rgba(160,200,245,.55),
      calc(var(--cw) - 37px) 0 0 rgba(198,224,252,.40),
      0 calc(var(--ch) - 37px) 0 rgba(198,224,252,.40),
      calc(var(--cw) - 37px) calc(var(--ch) - 37px) 0 rgba(198,224,252,.40);
    pointer-events:none;
  }

  .acard--center{
    transform:translateX(-50%);
    z-index:3;
    height:459px;
    padding:38px 36px 42px;
    --cw:392px;--ch:459px;
  }
  .acard--left,.acard--right{
    top:35px;height:378px;width:392px;z-index:1;
    padding:40px 36px 34px;
    --cw:392px;--ch:378px;
    background:
      radial-gradient(130% 70% at 50% 0%, rgba(112,146,205,.12), transparent 62%),
      linear-gradient(180deg, rgba(17,26,47,.80), rgba(6,9,18,.92));
    box-shadow:
      inset 0 1px 1px rgba(190,220,252,.13),
      inset 0 0 0 1px rgba(140,182,238,.09),
      inset 0 24px 56px rgba(108,148,208,.06),
      0 22px 42px rgba(0,0,0,.42);
  }
  .acard--left{transform:translateX(-50%) translateX(-171px)}
  .acard--right{transform:translateX(-50%) translateX(171px)}

  .card-symbol{
    display:grid;place-items:center;height:36px;color:#b9cdea;
  }
  .card-title{
    margin:6px 0 0;
    font-size:16px;font-weight:500;line-height:1.35;color:#e3edfb;letter-spacing:-.01em;
  }
  .card-sub{
    margin:4px 0 0;
    font-size:13px;line-height:1.38;color:#8c99b0;
  }
  .card-body{margin-top:8px;text-align:left}
  .card-label{
    display:block;font-size:13px;line-height:1.2;color:#a9b6cc;margin-bottom:7px;letter-spacing:0;
  }
  .card-field{
    height:34px;border-radius:999px;display:flex;align-items:center;
    padding:0 16px;font-size:13.5px;color:rgba(199,211,234,.48);
    background:rgba(9,13,25,.74);
    box-shadow:inset 0 1px 0 rgba(200,225,255,.08), inset 0 0 0 1px rgba(160,195,240,.14);
  }
  .card-btn{
    margin-top:15px;height:34px;border-radius:999px;
    display:flex;align-items:center;justify-content:center;gap:9px;
    font-size:13.5px;font-weight:500;color:#e8f0fc;
    background:rgba(9,13,25,.74);
    box-shadow:inset 0 1px 0 rgba(200,225,255,.10), inset 0 0 0 1px rgba(160,195,240,.16);
  }
  .card-btn svg{flex:0 0 auto;opacity:.9}
  .card-or{
    display:flex;align-items:center;gap:12px;
    margin-top:42px;height:16px;
    font-size:11.5px;letter-spacing:.1em;color:rgba(199,211,234,.42);
  }
  .card-or .ol{flex:1;height:1px;background:rgba(186,215,247,.10)}
  .card-btn--google{margin-top:12px}
  .card-btn--ms{margin-top:13px}
  .card-foot{
    margin:31px 0 0;font-size:13px;line-height:20px;color:#94a2b9;text-align:center;letter-spacing:0;
  }
  .card-foot strong{color:#dbe8fa;font-weight:500}

  /* side-card extras */
  .acard--left .card-label{margin-top:32px}
  .acard--left .card-field{margin:0}
  .acard--left .card-btn{margin-top:14px}
  .acard--left .card-foot{margin-top:20px}

  .code-row{display:flex;gap:10px;margin-top:50px}
  .code-box{
    flex:1 1 0;min-width:0;height:48px;border-radius:8px;
    background:rgba(9,13,25,.74);
    box-shadow:inset 0 1px 0 rgba(200,225,255,.08), inset 0 0 0 1px rgba(160,195,240,.13);
    display:grid;place-items:center;font-size:17px;color:#dbe8fa;
  }
  .acard--right .card-btn{margin-top:20px}
  .acard--right .card-foot{margin-top:18px}

  /* ============================================================
     SECTIONS
     ============================================================ */
  .section{padding:120px 0 0;position:relative;z-index:5}
  .wrap{max-width:var(--page);margin:0 auto;padding:0 24px}
  .sec-head{display:flex;flex-direction:column;align-items:center;text-align:center}

  .sec-head .eyebrow{
    font-family:var(--font-mono);
    font-size:14px;
    letter-spacing:.10em;
    color:var(--mist);
    gap:20px;
  }
  .sec-head .rule{width:clamp(36px,9vw,92px)}

  .h2{
    margin:22px auto 0;
    max-width:760px;
    font-family:var(--font-display);
    font-weight:500;
    font-size:clamp(28px,3.3vw,48px);
    line-height:1.16;
    letter-spacing:-.015em;
    background:linear-gradient(180deg,#e9f4ff 0%,#a8c8ee 100%);
    -webkit-background-clip:text;background-clip:text;
    color:transparent;-webkit-text-fill-color:transparent;
  }
  .lede{
    margin:16px auto 0;max-width:640px;
    font-size:17px;line-height:1.55;color:var(--mist);letter-spacing:-.01em;
  }

  /* ============================================================
     SEGMENTED CONTROL
     ============================================================ */
  .seg{
    display:inline-flex;gap:2px;padding:3px;margin-top:32px;
    border-radius:999px;background:rgba(199,211,234,.05);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.12);
  }
  .seg-btn{
    display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 16px;
    border:0;border-radius:999px;background:transparent;cursor:pointer;
    font-size:13px;font-weight:500;color:#8f9cb2;
    transition:background .18s ease,color .18s ease;
  }
  .seg-btn:hover{color:#cddcf1}
  .seg-btn[aria-pressed="true"]{
    background:rgba(199,211,234,.12);color:#eaf3ff;
    box-shadow:inset 0 1px 1px rgba(216,236,248,.16), inset 0 0 0 1px rgba(186,215,247,.12);
  }

  /* ============================================================
     DEMO CARD (light/dark preview + shine stage)
     ============================================================ */
  .demo-card{
    width:100%;
    display:flex;flex-direction:column;
    border-radius:var(--demo-radius-card);
    padding:28px;
    background:
      radial-gradient(130% 70% at 50% 0%, rgba(126,162,222,.14), transparent 62%),
      linear-gradient(180deg, rgba(20,30,54,.86), rgba(7,10,20,.92));
    color:var(--frost);
    box-shadow:
      inset 0 1px 1px rgba(206,232,255,.20),
      inset 0 0 0 1px rgba(152,192,242,.11),
      0 16px 32px rgba(0,0,0,.34);
    transition:background .25s ease, box-shadow .25s ease, color .25s ease, border-radius .2s ease;
  }
  .demo-head{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;margin-bottom:22px}
  .demo-logo{
    width:38px;height:38px;border-radius:999px;display:grid;place-items:center;
    color:var(--demo-accent);
    background:radial-gradient(120% 120% at 50% 0%, rgba(186,214,247,.12), rgba(186,214,247,.02));
    box-shadow:inset 0 1px 1px rgba(216,236,248,.18), inset 0 0 0 1px rgba(186,215,247,.10);
  }
  .demo-title{margin:0;font-size:16px;font-weight:500;color:#dfeafb;letter-spacing:-.01em}
  .demo-sub{margin:0;font-size:14px;color:#8e9bb0;line-height:1.45}
  .demo-label{display:block;font-size:13px;color:#aebbd1;margin-bottom:8px}
  .demo-input{
    width:100%;
    border:0;outline:none;
    border-radius:var(--demo-radius);
    padding:11px 14px;
    font:inherit;font-size:14px;
    color:#fff;
    background:rgba(9,13,25,.74);
    box-shadow:inset 0 1px 0 rgba(200,225,255,.08), inset 0 0 0 1px rgba(160,195,240,.14);
    transition:box-shadow .18s ease, background .18s ease;
  }
  .demo-input::placeholder{color:rgba(199,211,234,.48)}
  .demo-input:focus{
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.26), 0 0 0 3px rgba(102,58,243,.22);
  }
  .demo-error{margin:8px 0 0;font-size:12.5px;color:#f0a48f;letter-spacing:0}
  .demo-submit{
    margin-top:14px;width:100%;
    border:0;cursor:pointer;
    border-radius:var(--demo-radius);
    padding:12px 18px;
    font:inherit;font-size:14px;font-weight:500;color:#fff;
    background:var(--demo-accent);
    box-shadow:inset 0 1px 1px rgba(255,255,255,.18);
    transition:filter .18s ease, transform .18s ease, border-radius .2s ease, background .25s ease;
  }
  .demo-submit:hover{filter:brightness(1.10)}
  .demo-submit:active{transform:translateY(1px)}
  .demo-or{
    display:flex;align-items:center;gap:12px;
    margin:18px 0 0;font-size:12px;letter-spacing:.08em;color:rgba(199,211,234,.5);
  }
  .demo-or .ol{flex:1;height:1px;background:rgba(186,215,247,.10)}
  .demo-provider{
    margin-top:10px;width:100%;
    display:flex;align-items:center;justify-content:center;gap:10px;
    border:0;cursor:pointer;
    border-radius:var(--demo-radius);
    padding:12px 16px;
    font:inherit;font-size:14px;color:#e6eefb;
    background:rgba(9,13,25,.74);
    box-shadow:inset 0 1px 0 rgba(200,225,255,.08), inset 0 0 0 1px rgba(160,195,240,.14);
    transition:background .18s ease,border-radius .2s ease;
  }
  .demo-provider:hover{background:rgba(20,29,50,.86)}
  .demo-foot{margin:20px 0 0;font-size:13px;color:#9aa7bc;text-align:center}
  .demo-foot a{color:var(--demo-accent);text-decoration:none;font-weight:500}
  .demo-foot a:hover{text-decoration:underline}
  .demo-note{margin:10px 0 0;font-size:12px;color:#7c8799;text-align:center}

  .demo-done{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px}
  .done-check{
    width:42px;height:42px;border-radius:999px;display:grid;place-items:center;
    color:#fff;background:var(--demo-accent);
    box-shadow:inset 0 1px 1px rgba(255,255,255,.24);
    margin-bottom:6px;
  }
  .demo-card.is-done .demo-body,
  .demo-card.is-done .demo-head{display:none}

  /* light theme for the demo card */
  .demo-card.is-light{
    background:#ffffff;color:#0b1220;
    box-shadow:0 20px 40px rgba(5,6,15,.35), inset 0 0 0 1px rgba(11,18,32,.06);
  }
  .demo-card.is-light .demo-title{color:#0b1220}
  .demo-card.is-light .demo-sub,
  .demo-card.is-light .demo-label,
  .demo-card.is-light .demo-foot{color:#5a6478}
  .demo-card.is-light .demo-note{color:#78829a}
  .demo-card.is-light .demo-input{background:#f3f6fb;color:#0b1220;box-shadow:inset 0 0 0 1px rgba(11,18,32,.10)}
  .demo-card.is-light .demo-input::placeholder{color:#98a2b5}
  .demo-card.is-light .demo-provider{background:#f3f6fb;color:#0b1220;box-shadow:inset 0 0 0 1px rgba(11,18,32,.10)}
  .demo-card.is-light .demo-provider:hover{background:#eaeff7}
  .demo-card.is-light .demo-or{color:#78829a}
  .demo-card.is-light .demo-or .ol{background:rgba(11,18,32,.10)}
  .demo-card.is-light .demo-logo{background:#f3f6fb;box-shadow:inset 0 0 0 1px rgba(11,18,32,.08)}
  .demo-card.is-light .demo-error{color:#c0392b}

  .preview-shell{display:flex;justify-content:center;margin-top:44px}
  .preview-shell .demo-card{width:min(380px,100%)}

  /* ============================================================
     FEATURE ROW
     ============================================================ */
  .feature-row{
    position:relative;
    display:grid;grid-template-columns:repeat(6,1fr);gap:16px;
    margin-top:64px;
  }
  .feature-row::before{
    content:"";position:absolute;left:6%;right:6%;top:28px;height:1px;
    background:linear-gradient(90deg,transparent,rgba(186,215,247,.12) 12%,rgba(186,215,247,.12) 88%,transparent);
  }
  .feature{
    position:relative;z-index:1;
    display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center;
  }
  .tile{
    width:56px;height:56px;border-radius:9999px;display:grid;place-items:center;
    color:var(--frost);
    background:
      radial-gradient(120% 120% at 50% 0%, rgba(186,214,247,.10), rgba(186,214,247,.02)),
      #080b16;
    box-shadow:inset 0 1px 1px rgba(216,236,248,.14), inset 0 0 0 1px rgba(186,215,247,.10);
  }
  .flabel{font-size:14px;color:var(--mist);letter-spacing:-.01em}

  /* ============================================================
     WINDOW MOCK
     ============================================================ */
  .window{
    margin-top:56px;
    border-radius:var(--radius-cards);
    background:rgba(8,10,20,.78);
    box-shadow:var(--shadow-feature);
    overflow:hidden;
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
  }
  .win-bar{
    display:flex;align-items:center;gap:8px;
    padding:12px 16px;
    border-bottom:1px solid rgba(186,215,247,.06);
  }
  .dot{width:9px;height:9px;border-radius:999px;background:rgba(199,211,234,.16)}
  .win-url{
    margin-left:12px;font-size:12px;color:#79859a;letter-spacing:0;
    padding:4px 10px;border-radius:6px;background:rgba(199,211,234,.05);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.06);
  }
  .win-body{display:grid;grid-template-columns:196px 1fr;min-height:400px}
  .win-side{
    padding:16px 12px;display:flex;flex-direction:column;gap:4px;
    border-right:1px solid rgba(186,215,247,.06);
  }
  .side-item{
    display:flex;align-items:center;gap:10px;
    padding:8px 10px;border-radius:8px;font-size:13px;color:#8b97ab;
  }
  .side-item.active{
    color:#dbe8fa;background:rgba(199,211,234,.06);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.10);
  }
  .side-dot{width:6px;height:6px;border-radius:999px;background:currentColor;opacity:.7}
  .win-main{padding:22px 24px;display:flex;flex-direction:column;gap:18px;min-width:0}
  .win-head{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
  .win-title{font-size:15px;color:#dbe8fa;font-weight:500}
  .win-sub{font-size:12.5px;color:#7d8899;margin-top:2px}
  .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .stat{
    border-radius:12px;padding:14px;
    background:rgba(186,214,247,.03);
    box-shadow:inset 0 1px 1px rgba(199,211,234,.10), inset 0 0 0 1px rgba(186,215,247,.06);
  }
  .stat-k{font-size:11.5px;color:#7d8899;letter-spacing:.02em}
  .stat-v{font-size:20px;color:#e6eefb;margin-top:6px;letter-spacing:-.02em}
  .chart-wrap{
    border-radius:12px;padding:16px 16px 0;
    background:rgba(186,214,247,.02);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.06);
  }
  .chart{width:100%;height:120px;display:block}
  .rows{display:flex;flex-direction:column}
  .row{
    display:grid;grid-template-columns:28px 1fr 96px 78px;align-items:center;gap:12px;
    padding:11px 4px;border-top:1px solid rgba(186,215,247,.06);
    font-size:13px;color:#c3cfe2;
  }
  .row:first-child{border-top:0}
  .avatar{width:26px;height:26px;border-radius:999px;background:linear-gradient(160deg,#b6d9fc,#5b6f95)}
  .badge{
    justify-self:start;
    font-size:11.5px;font-weight:500;color:var(--frost);
    padding:4px 8px;border-radius:6px;background:rgba(199,211,234,.12);
    box-shadow:inset 0 1px 1px rgba(216,236,248,.14), inset 0 0 0 1px rgba(186,215,247,.08);
    white-space:nowrap;
  }
  .status{display:flex;align-items:center;gap:7px;font-size:12px;color:#7d8899;justify-self:end}
  .status i{width:6px;height:6px;border-radius:999px;background:#6ee7b7;display:block}
  .status.warn i{background:#f0c674}

  /* ============================================================
     SHINE STAGE
     ============================================================ */
  .stage{
    position:relative;
    margin-top:56px;
    min-height:660px;
    display:grid;place-items:center;
  }
  .stage::before{
    content:"";position:absolute;left:14%;right:14%;top:8%;bottom:8%;
    background:radial-gradient(50% 50% at 50% 50%, rgba(110,142,200,.14), transparent 72%);
    filter:blur(30px);pointer-events:none;
  }
  .stage-window{
    position:relative;z-index:2;
    width:min(660px,100%);
    border-radius:var(--radius-cards);
    background:rgba(8,10,20,.72);
    box-shadow:var(--shadow-feature);
    overflow:hidden;
    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);
  }
  .stage-canvas{
    display:grid;place-items:center;
    padding:40px 24px;
    background:
      radial-gradient(70% 60% at 50% 12%, rgba(124,150,196,.10), transparent 70%),
      linear-gradient(rgba(186,215,247,.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(186,215,247,.045) 1px, transparent 1px);
    background-size:auto, 40px 40px, 40px 40px;
  }
  .stage-canvas .demo-card{width:min(348px,100%)}

  .panel{
    position:absolute;z-index:3;
    width:210px;
    border-radius:12px;
    padding:14px;
    background:rgba(9,12,22,.86);
    box-shadow:inset 0 1px 1px rgba(216,236,248,.14), inset 0 0 0 1px rgba(186,215,247,.10), 0 18px 34px rgba(0,0,0,.45);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
  }
  .panel--tl{top:6px;left:0}
  .panel--tr{top:6px;right:0}
  .panel--bl{bottom:6px;left:0}
  .panel--br{bottom:6px;right:0}
  .panel-label{
    font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;
    color:#8b97ab;margin-bottom:12px;font-family:var(--font-mono);
  }
  .swatches{display:flex;gap:6px}
  .swatch{
    width:26px;height:26px;border-radius:6px;border:0;cursor:pointer;
    box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);
    position:relative;
    transition:transform .15s ease;
  }
  .swatch:hover{transform:translateY(-1px)}
  .swatch[aria-pressed="true"]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.16), 0 0 0 2px rgba(216,236,248,.55)}

  .range{width:100%;-webkit-appearance:none;appearance:none;background:transparent;margin:6px 0 0}
  .range::-webkit-slider-runnable-track{
    height:4px;border-radius:999px;
    background:linear-gradient(90deg,var(--demo-accent) 0%,var(--demo-accent) var(--pct,37.5%),rgba(199,211,234,.14) var(--pct,37.5%));
  }
  .range::-moz-range-track{
    height:4px;border-radius:999px;
    background:linear-gradient(90deg,var(--demo-accent) 0%,var(--demo-accent) var(--pct,37.5%),rgba(199,211,234,.14) var(--pct,37.5%));
  }
  .range::-webkit-slider-thumb{
    -webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:999px;margin-top:-5px;
    background:#eaf3ff;box-shadow:0 1px 3px rgba(0,0,0,.6);cursor:pointer;
  }
  .range::-moz-range-thumb{
    width:14px;height:14px;border:0;border-radius:999px;
    background:#eaf3ff;box-shadow:0 1px 3px rgba(0,0,0,.6);cursor:pointer;
  }
  .range-row{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:#8b97ab;margin-top:10px}
  .range-value{color:#dbe8fa;font-variant-numeric:tabular-nums}

  .logo-row{display:flex;gap:8px;margin-bottom:14px}
  .logo-btn{
    width:38px;height:38px;border-radius:8px;border:0;cursor:pointer;
    display:grid;place-items:center;color:#c8d7ee;
    background:rgba(199,211,234,.06);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.10);
    transition:background .18s ease;
  }
  .logo-btn:hover{background:rgba(199,211,234,.11)}
  .logo-btn[aria-pressed="true"]{background:rgba(199,211,234,.14);color:#fff;box-shadow:inset 0 0 0 1px rgba(186,215,247,.24)}

  .text-field{
    width:100%;border:0;outline:none;
    border-radius:6px;padding:9px 10px;
    font:inherit;font-size:13px;color:#fff;
    background:rgba(199,211,234,.06);
    box-shadow:inset 0 0 0 1px rgba(186,215,247,.12);
  }
  .text-field:focus{box-shadow:inset 0 0 0 1px rgba(186,215,247,.24)}
  .panel-divider{height:1px;background:rgba(186,215,247,.08);margin:14px 0}

  .seg--mini{margin-top:0;padding:2px;width:100%;display:flex}
  .seg--mini .seg-btn{flex:1;height:28px;justify-content:center;font-size:12px;padding:0 8px}

  /* ============================================================
     FOOTER
     ============================================================ */
  .site-footer{
    margin-top:120px;padding:32px 0 56px;
    border-top:1px solid rgba(186,215,247,.06);
  }
  .foot-inner{
    max-width:var(--page);margin:0 auto;padding:0 24px;
    display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;
    font-size:13px;color:#79859a;
  }
  .foot-inner a{color:#a9b7cd;text-decoration:none}
  .foot-inner a:hover{color:#e6eefb}

  /* ============================================================
     RESPONSIVE
     ============================================================ */
  @media (max-width:1320px){:root{--fan-scale:.85}}
  @media (max-width:1120px){:root{--fan-scale:.70}}

  @media (max-width:980px){
    .stage{min-height:0;display:flex;flex-direction:column;align-items:center;gap:20px}
    .stage-window{width:100%}
    .panel{position:static;width:min(520px,100%)}
    .stage::before{display:none}
  }

  @media (max-width:900px){
    :root{--fan-scale:1}
    .hero{padding-top:104px}
    .fan-wrap{
      display:block;height:auto;margin-top:48px;padding:0 16px;
    }
    .fan{
      flex:none;width:100%;height:auto;transform:none;
    }
    .acard--left,.acard--right{display:none}
    .acard--center{
      position:relative;left:auto;top:0;transform:none;
      width:min(392px,100%);height:auto;margin:0 auto;
      padding:34px 24px 38px;
    }
    .fan::before{display:none}
    .win-body{grid-template-columns:1fr}
    .win-side{flex-direction:row;overflow-x:auto;border-right:0;border-bottom:1px solid rgba(186,215,247,.06)}
    .side-item{white-space:nowrap}
    .stats{grid-template-columns:1fr 1fr}
    .row{grid-template-columns:24px 1fr 74px;gap:10px}
    .row .badge{justify-self:end}
    .status{display:none}
  }

  @media (max-width:820px){
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 16px}
    .brand{position:static;transform:none}
    .nav-right{position:static;transform:none}
  }

  @media (max-width:720px){
    .section{padding-top:88px}
    .site-footer{margin-top:88px}
    .feature-row{grid-template-columns:repeat(2,1fr);row-gap:36px}
    .feature-row::before{display:none}
    .stats{grid-template-columns:1fr}
    .sec-head .eyebrow{font-size:12px;gap:10px}
    .wrap{padding:0 16px}
    .hero-inner{padding:0 16px}
    .nav-inner{height:34px}
  }

  @media (max-width:560px){
    .mark{display:none}
    .subtitle{font-size:16px}
  }

  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    *,*::before,*::after{
      animation-duration:.001ms !important;
      animation-iteration-count:1 !important;
      transition-duration:.001ms !important;
    }
  }
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="bg" aria-hidden="true"></div>

<!-- ============================ HEADER ============================ -->
<header class="site-header">
  <nav class="nav-inner" aria-label="Main">
    <a class="brand" href="#top">WorkOS</a>

    <a class="mark" href="#top" aria-label="AuthKit home">
      <svg width="36" height="32" viewBox="0 0 36 32" aria-hidden="true">
        <defs>
          <linearGradient id="hgA" x1="18" y1="1" x2="18" y2="31" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#9db2cf"/>
            <stop offset="1" stop-color="#46536c"/>
          </linearGradient>
          <linearGradient id="hgB" x1="18" y1="1" x2="18" y2="31" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#7b8ca7"/>
            <stop offset="1" stop-color="#2f394c"/>
          </linearGradient>
        </defs>
        <path d="M18 1.6 34.2 16 18 30.4 13.9 26.3 26.1 16 13.9 5.7Z" fill="url(#hgA)"/>
        <path d="M18 1.6 1.8 16 18 30.4 22.1 26.3 9.9 16 22.1 5.7Z" fill="url(#hgB)"/>
      </svg>
    </a>

    <div class="nav-right">
      <a class="icon-btn" href="#top" aria-label="AuthKit on GitHub">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
        </svg>
      </a>
      <a class="pill" href="#shine">Get started</a>
    </div>
  </nav>
</header>

<main id="main">
  <!-- ============================ HERO ============================ -->
  <section class="hero" id="top">

    <div class="hero-atmos" aria-hidden="true">
      <span class="sline sline-v" style="left:29.4%"></span>
      <span class="sline sline-v" style="left:33.9%"></span>
      <span class="sline sline-v" style="left:66%"></span>
      <span class="sline sline-v" style="left:70.5%"></span>

      <span class="sline sline-h" style="top:35px"></span>
      <span class="sline sline-h" style="top:107px"></span>
      <span class="sline sline-h" style="top:178px"></span>
      <span class="sline sline-h" style="top:315px"></span>
      <span class="sline sline-h" style="top:401px"></span>

      <span class="sdot" style="left:29.4%;top:35px"></span>
      <span class="sdot" style="left:66%;top:35px"></span>
      <span class="sdot" style="left:33.9%;top:178px"></span>
      <span class="sdot" style="left:70.5%;top:178px"></span>
      <span class="sdot" style="left:29.4%;top:315px"></span>
      <span class="sdot" style="left:70.5%;top:315px"></span>
      <span class="sdot" style="left:33.9%;top:401px"></span>
      <span class="sdot" style="left:66%;top:401px"></span>
    </div>

    <div class="hero-inner">
      <p class="eyebrow">
        <span class="rule rule--l" aria-hidden="true"></span>
        Introducing
        <span class="rule rule--r" aria-hidden="true"></span>
      </p>

      <h1 class="wordmark">AuthKit</h1>

      <p class="subtitle">
        <span>The world&rsquo;s best login box,</span>
        <span>powered by WorkOS + Radix.</span>
      </p>
    </div>

    <div class="fan-wrap">
      <div class="fan" aria-hidden="true">

        <!-- left glass card -->
        <div class="acard acard--left">
          <span class="card-symbol">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
              <circle cx="16" cy="16" r="11"/>
              <circle cx="16" cy="16" r="4.4"/>
            </svg>
          </span>
          <h2 class="card-title">Welcome back</h2>
          <p class="card-sub">Log in to SuperApp</p>
          <div class="card-body">
            <span class="card-label">Email</span>
            <div class="card-field">Your email address</div>
            <div class="card-btn">Continue</div>
          </div>
          <p class="card-foot">Don&rsquo;t have an account? <strong>Sign up</strong></p>
        </div>

        <!-- right glass card -->
        <div class="acard acard--right">
          <span class="card-symbol">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
              <rect x="5" y="5" width="22" height="22" rx="7"/>
              <path d="m11 16.4 3.2 3.2L21.4 12"/>
            </svg>
          </span>
          <h2 class="card-title">Clamer</h2>
          <p class="card-sub">Enter the passcode from your authenticator app</p>
          <div class="code-row">
            <div class="code-box">4</div>
            <div class="code-box">1</div>
            <div class="code-box">8</div>
            <div class="code-box"></div>
            <div class="code-box"></div>
          </div>
          <div class="card-btn">Continue</div>
          <p class="card-foot">Use a different method to sign in</p>
        </div>

        <!-- center glass card -->
        <div class="acard acard--center">
          <span class="card-symbol">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.35" aria-hidden="true">
              <circle cx="12.3" cy="16" r="8.7"/>
              <circle cx="19.7" cy="16" r="8.7"/>
            </svg>
          </span>
          <h2 class="card-title">Sign in to SuperApp</h2>

          <div class="card-body">
            <span class="card-label">Email</span>
            <div class="card-field">Your email address</div>
            <div class="card-btn">Continue</div>

            <div class="card-or">
              <span class="ol"></span><span>OR</span><span class="ol"></span>
            </div>

            <div class="card-btn card-btn--google">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 10.2v3.9h5.5c-.24 1.44-1.68 4.22-5.5 4.22A6.29 6.29 0 0 1 5.7 12 6.29 6.29 0 0 1 12 5.72c1.79 0 3 .76 3.68 1.42l2.5-2.4C16.6 3.2 14.5 2.2 12 2.2 6.5 2.2 2 6.6 2 12s4.5 9.8 10 9.8c5.77 0 9.6-4.06 9.6-9.78 0-.66-.07-1.16-.16-1.82H12Z"/>
              </svg>
              Continue with Google
            </div>

            <div class="card-btn card-btn--ms">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 3h8.4v8.4H3zM12.6 3H21v8.4h-8.4zM3 12.6h8.4V21H3zM12.6 12.6H21V21h-8.4z"/>
              </svg>
              Continue with Microsoft
            </div>
          </div>

          <p class="card-foot">Don&rsquo;t have an account? <strong>Sign up</strong></p>
        </div>

      </div>
    </div>
  </section>

  <!-- ============================ LIGHT / DARK ============================ -->
  <section class="section" id="modes" aria-labelledby="modes-title">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">
          <span class="rule rule--l" aria-hidden="true"></span>
          Light and dark modes supported
          <span class="rule rule--r" aria-hidden="true"></span>
        </p>
        <h2 class="h2" id="modes-title">One login box, every mode</h2>
        <p class="lede">AuthKit ships with matched light and dark surfaces, so your sign-in flow never breaks character when your users switch themes.</p>

        <div class="seg" role="group" aria-label="Preview theme">
          <button class="seg-btn" type="button" data-theme-btn="dark" aria-pressed="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/>
            </svg>
            Dark
          </button>
          <button class="seg-btn" type="button" data-theme-btn="light" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>
            </svg>
            Light
          </button>
        </div>
      </div>

      <div class="preview-shell">
        <div class="demo-card" data-demo>
          <div class="demo-head">
            <span class="demo-logo" data-logo></span>
            <h3 class="demo-title">Sign in to SuperApp</h3>
            <p class="demo-sub">Pick a theme above — this card follows it.</p>
          </div>
          <div class="demo-body">
            <label class="demo-label" for="previewEmail">Email</label>
            <input class="demo-input" id="previewEmail" type="email" placeholder="you@company.com" autocomplete="off" readonly tabindex="-1" aria-readonly="true" />
            <button class="demo-submit" type="button" tabindex="-1" aria-hidden="true"><span data-submit-label>Continue</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ FEATURES ============================ -->
  <section class="section" id="features" aria-labelledby="features-title">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">
          <span class="rule rule--l" aria-hidden="true"></span>
          Everything included
          <span class="rule rule--r" aria-hidden="true"></span>
        </p>
        <h2 class="h2" id="features-title">Authentication, out of the box</h2>
        <p class="lede">Every method your users expect, behind one consistent, themeable interface.</p>
      </div>

      <div class="feature-row">
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-3.1 6.8-7 9-3.9-2.2-7-4.8-7-9V6l7-3z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </span>
          <span class="flabel">Single Sign-On</span>
        </div>
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="4" y="10" width="16" height="10.5" rx="2.4"/>
              <path d="M8 10V7.2a4 4 0 0 1 8 0V10"/>
              <path d="M12 14.2v2.2"/>
            </svg>
          </span>
          <span class="flabel">Password</span>
        </div>
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="7" y="2.8" width="10" height="18.4" rx="2.6"/>
              <path d="M10.6 18.4h2.8"/>
              <path d="m10 10 1.6 1.6L14.4 9"/>
            </svg>
          </span>
          <span class="flabel">MFA</span>
        </div>
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="9" cy="8.4" r="3.1"/>
              <path d="M3.2 20a5.9 5.9 0 0 1 11.6 0"/>
              <path d="M16.2 5.6a3 3 0 0 1 0 5.6"/>
              <path d="M18.2 20a6 6 0 0 0-2.2-4.6"/>
            </svg>
          </span>
          <span class="flabel">Social Login</span>
        </div>
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="7.4" r="3.1"/>
              <path d="M5.6 20a6.4 6.4 0 0 1 10.2-5.1"/>
              <path d="M15.4 15.6h4.2v4.2"/>
              <path d="M19.6 15.6 15.6 19.6"/>
            </svg>
          </span>
          <span class="flabel">RBAC</span>
        </div>
        <div class="feature">
          <span class="tile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3.2 13.7 8l4.8 1.7-4.8 1.7L12 16.2l-1.7-4.8L5.5 9.7 10.3 8z"/>
              <path d="M18.4 15.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z"/>
            </svg>
          </span>
          <span class="flabel">Magic Auth</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ EXTENSIBLE ============================ -->
  <section class="section" id="extensible" aria-labelledby="extensible-title">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">
          <span class="rule rule--l" aria-hidden="true"></span>
          Extensible by design
          <span class="rule rule--r" aria-hidden="true"></span>
        </p>
        <h2 class="h2" id="extensible-title">Your users. Your data.<br />Maximum flexibility.</h2>
        <p class="lede">Model users, organizations and roles exactly the way your product works — then read and write everything through one clean API.</p>
      </div>

      <div class="window" role="img" aria-label="Illustration of an AuthKit user management dashboard">
        <div class="win-bar" aria-hidden="true">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="win-url">dashboard.workos.com/users</span>
        </div>

        <div class="win-body">
          <aside class="win-side" aria-hidden="true">
            <span class="side-item active"><i class="side-dot"></i>Users</span>
            <span class="side-item"><i class="side-dot"></i>Organizations</span>
            <span class="side-item"><i class="side-dot"></i>Roles &amp; permissions</span>
            <span class="side-item"><i class="side-dot"></i>Connections</span>
            <span class="side-item"><i class="side-dot"></i>Audit logs</span>
            <span class="side-item"><i class="side-dot"></i>Webhooks</span>
          </aside>

          <div class="win-main">
            <div class="win-head">
              <div>
                <div class="win-title">Users</div>
                <div class="win-sub">1,284 active · 42 pending invitations</div>
              </div>
              <span class="badge">Environment: Production</span>
            </div>

            <div class="stats">
              <div class="stat">
                <div class="stat-k">Sign-ins today</div>
                <div class="stat-v">3,912</div>
              </div>
              <div class="stat">
                <div class="stat-k">SSO connections</div>
                <div class="stat-v">18</div>
              </div>
              <div class="stat">
                <div class="stat-k">MFA adoption</div>
                <div class="stat-v">86%</div>
              </div>
            </div>

            <div class="chart-wrap">
              <svg class="chart" viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#b6d9fc" stop-opacity=".30"/>
                    <stop offset="1" stop-color="#b6d9fc" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,96 C50,74 84,104 132,86 C182,67 214,42 268,58 C322,74 356,32 414,44 C470,56 522,26 600,34 L600,120 L0,120 Z" fill="url(#chartFill)"/>
                <path d="M0,96 C50,74 84,104 132,86 C182,67 214,42 268,58 C322,74 356,32 414,44 C470,56 522,26 600,34"
                      fill="none" stroke="#b6d9fc" stroke-opacity=".75" stroke-width="1.5"/>
              </svg>
            </div>

            <div class="rows" aria-hidden="true">
              <div class="row">
                <span class="avatar"></span>
                <span>alex.morgan@acme.com</span>
                <span class="badge">SSO</span>
                <span class="status"><i></i>Active</span>
              </div>
              <div class="row">
                <span class="avatar"></span>
                <span>priya.raman@acme.com</span>
                <span class="badge">MFA</span>
                <span class="status"><i></i>Active</span>
              </div>
              <div class="row">
                <span class="avatar"></span>
                <span>jonas.weber@acme.com</span>
                <span class="badge">Magic Auth</span>
                <span class="status warn"><i></i>Invited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================ SHINE BRIGHT ============================ -->
  <section class="section" id="shine" aria-labelledby="shine-title">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">
          <span class="rule rule--l" aria-hidden="true"></span>
          Shine bright
          <span class="rule rule--r" aria-hidden="true"></span>
        </p>
        <h2 class="h2" id="shine-title">Your brand. Your style.</h2>
        <p class="lede">Change the colour, radius, logo and copy — the login box updates instantly. Try it, then submit the form to see the local success state.</p>
      </div>

      <div class="stage">
        <div class="stage-window">
          <div class="win-bar" aria-hidden="true">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
            <span class="win-url">app.superapp.com/sign-in</span>
          </div>
          <div class="stage-canvas">

            <form class="demo-card" id="demoCard" data-demo novalidate>
              <div class="demo-head">
                <span class="demo-logo" data-logo></span>
                <h3 class="demo-title">Sign in to SuperApp</h3>
                <p class="demo-sub">Use your work email to continue.</p>
              </div>

              <div class="demo-body">
                <label class="demo-label" for="demoEmail">Email</label>
                <input class="demo-input" id="demoEmail" name="email" type="email" inputmode="email"
                       autocomplete="off" placeholder="you@company.com" aria-describedby="demoError" />
                <p class="demo-error" id="demoError" role="alert" hidden></p>

                <button class="demo-submit" type="submit"><span data-submit-label>Continue</span></button>

                <div class="demo-or"><span class="ol"></span>OR<span class="ol"></span></div>

                <button class="demo-provider" type="button">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 10.2v3.9h5.5c-.24 1.44-1.68 4.22-5.5 4.22A6.29 6.29 0 0 1 5.7 12 6.29 6.29 0 0 1 12 5.72c1.79 0 3 .76 3.68 1.42l2.5-2.4C16.6 3.2 14.5 2.2 12 2.2 6.5 2.2 2 6.6 2 12s4.5 9.8 10 9.8c5.77 0 9.6-4.06 9.6-9.78 0-.66-.07-1.16-.16-1.82H12Z"/>
                  </svg>
                  Continue with Google
                </button>

                <button class="demo-provider" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 3h8.4v8.4H3zM12.6 3H21v8.4h-8.4zM3 12.6h8.4V21H3zM12.6 12.6H21V21h-8.4z"/>
                  </svg>
                  Continue with Microsoft
                </button>

                <p class="demo-foot">Don&rsquo;t have an account? <a href="#shine">Sign up</a></p>
              </div>

              <div class="demo-done" id="demoDone" tabindex="-1" hidden>
                <span class="done-check" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m5 12.5 4.5 4.5L19 7.5"/>
                  </svg>
                </span>
                <h3 class="demo-title">Check your inbox</h3>
                <p class="demo-sub">We sent a sign-in link to <strong class="done-email" style="color:inherit"></strong>.</p>
                <p class="demo-note">Local demo only — nothing was sent or stored.</p>
                <button class="demo-submit" type="button" id="demoReset" style="margin-top:18px">Use a different email</button>
              </div>
            </form>

          </div>
        </div>

        <!-- inspector: colour -->
        <div class="panel panel--tl">
          <div class="panel-label" id="colourLabel">Colour</div>
          <div class="swatches" role="group" aria-labelledby="colourLabel">
            <button class="swatch" type="button" data-swatch="#663af3" aria-label="Void violet" aria-pressed="true" style="background:#663af3"></button>
            <button class="swatch" type="button" data-swatch="#027dea" aria-label="Signal blue" aria-pressed="false" style="background:#027dea"></button>
            <button class="swatch" type="button" data-swatch="#269684" aria-label="Deep teal" aria-pressed="false" style="background:#269684"></button>
            <button class="swatch" type="button" data-swatch="#e46d4c" aria-label="Ember glow" aria-pressed="false" style="background:#e46d4c"></button>
          </div>
        </div>

        <!-- inspector: radius -->
        <div class="panel panel--tr">
          <div class="panel-label" id="radiusLabel">Radius</div>
          <input class="range" id="radiusRange" type="range" min="0" max="16" step="1" value="6"
                 aria-labelledby="radiusLabel" aria-valuetext="6 pixels" />
          <div class="range-row">
            <span>0 — 16px</span>
            <span class="range-value" id="radiusValue">6px</span>
          </div>
        </div>

        <!-- inspector: logo -->
        <div class="panel panel--bl">
          <div class="panel-label" id="logoLabel">Logo</div>
          <div class="logo-row" role="group" aria-labelledby="logoLabel">
            <button class="logo-btn" type="button" data-logo-btn="0" aria-label="Diamond logo" aria-pressed="true">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="5" width="14" height="14" rx="4.4" transform="rotate(45 12 12)" fill="currentColor"/>
              </svg>
            </button>
            <button class="logo-btn" type="button" data-logo-btn="1" aria-label="Hexagon logo" aria-pressed="false">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.2l7.6 4.4v8.8L12 20.8l-7.6-4.4V7.6L12 3.2z" fill="none" stroke="currentColor" stroke-width="1.6"/>
              </svg>
            </button>
            <button class="logo-btn" type="button" data-logo-btn="2" aria-label="Ring logo" aria-pressed="false">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <label class="panel-label" for="labelInput" style="margin-bottom:8px">Button label</label>
          <input class="text-field" id="labelInput" type="text" value="Continue" maxlength="22" autocomplete="off" />
        </div>

        <!-- inspector: theme -->
        <div class="panel panel--br">
          <div class="panel-label" id="themeLabel">Theme</div>
          <div class="seg seg--mini" role="group" aria-labelledby="themeLabel">
            <button class="seg-btn" type="button" data-theme-btn="dark" aria-pressed="true">Dark</button>
            <button class="seg-btn" type="button" data-theme-btn="light" aria-pressed="false">Light</button>
          </div>
          <div class="panel-divider"></div>
          <p style="margin:0;font-size:12px;line-height:1.5;color:#8b97ab">
            Form validation runs locally. No credentials are sent or stored.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="foot-inner">
    <span>WorkOS · AuthKit — local visual reproduction</span>
    <span><a href="#top">Back to top</a></span>
  </div>
</footer>

<script>
(function () {
  'use strict';

  var root = document.documentElement;

  var state = {
    accent: '#663af3',
    radius: 6,
    theme: 'dark',
    label: 'Continue',
    logo: 0
  };

  var LOGOS = [
    '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4.4" transform="rotate(45 12 12)" fill="currentColor"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l7.6 4.4v8.8L12 20.8l-7.6-4.4V7.6L12 3.2z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>'
  ];

  var radiusRange = document.getElementById('radiusRange');
  var radiusValue = document.getElementById('radiusValue');
  var labelInput = document.getElementById('labelInput');

  function render() {
    root.style.setProperty('--demo-accent', state.accent);
    root.style.setProperty('--demo-radius', state.radius + 'px');
    root.style.setProperty('--demo-radius-card', (state.radius + 10) + 'px');

    /* theme */
    Array.prototype.forEach.call(document.querySelectorAll('[data-demo]'), function (el) {
      el.classList.toggle('is-light', state.theme === 'light');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-theme-btn]'), function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme-btn') === state.theme));
    });

    /* accent swatches */
    Array.prototype.forEach.call(document.querySelectorAll('[data-swatch]'), function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-swatch') === state.accent));
    });

    /* logo */
    Array.prototype.forEach.call(document.querySelectorAll('[data-logo]'), function (host) {
      host.innerHTML = LOGOS[state.logo];
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-logo-btn]'), function (btn) {
      btn.setAttribute('aria-pressed', String(Number(btn.getAttribute('data-logo-btn')) === state.logo));
    });

    /* button label */
    Array.prototype.forEach.call(document.querySelectorAll('[data-submit-label]'), function (el) {
      el.textContent = state.label;
    });

    /* radius readout */
    if (radiusRange) {
      radiusRange.value = String(state.radius);
      radiusRange.style.setProperty('--pct', ((state.radius / 16) * 100) + '%');
      radiusRange.setAttribute('aria-valuetext', state.radius + ' pixels');
    }
    if (radiusValue) { radiusValue.textContent = state.radius + 'px'; }
  }

  /* ---- control wiring ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-swatch]'), function (btn) {
    btn.addEventListener('click', function () {
      state.accent = btn.getAttribute('data-swatch');
      render();
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-btn]'), function (btn) {
    btn.addEventListener('click', function () {
      state.theme = btn.getAttribute('data-theme-btn');
      render();
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-logo-btn]'), function (btn) {
    btn.addEventListener('click', function () {
      state.logo = Number(btn.getAttribute('data-logo-btn'));
      render();
    });
  });

  if (radiusRange) {
    radiusRange.addEventListener('input', function () {
      state.radius = Number(radiusRange.value);
      render();
    });
  }

  if (labelInput) {
    labelInput.addEventListener('input', function () {
      var v = labelInput.value.trim();
      state.label = v.length ? v : 'Continue';
      Array.prototype.forEach.call(document.querySelectorAll('[data-submit-label]'), function (el) {
        el.textContent = state.label;
      });
    });
  }

  /* ---- demo form validation + local success ---- */
  var card = document.getElementById('demoCard');
  var email = document.getElementById('demoEmail');
  var errorEl = document.getElementById('demoError');
  var done = document.getElementById('demoDone');
  var reset = document.getElementById('demoReset');
  var doneEmail = done ? done.querySelector('.done-email') : null;

  function showError(msg) {
    if (!errorEl) { return; }
    errorEl.textContent = msg;
    errorEl.hidden = false;
    if (email) {
      email.setAttribute('aria-invalid', 'true');
      email.focus();
    }
  }

  function clearError() {
    if (!errorEl) { return; }
    errorEl.hidden = true;
    errorEl.textContent = '';
    if (email) { email.removeAttribute('aria-invalid'); }
  }

  if (card && email) {
    email.addEventListener('input', clearError);

    card.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = email.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

      if (!value) {
        showError('Enter your email address to continue.');
        return;
      }
      if (!valid) {
        showError('That doesn\u2019t look like a valid email address.');
        return;
      }

      clearError();
      if (doneEmail) { doneEmail.textContent = value; }
      card.classList.add('is-done');
      if (done) {
        done.hidden = false;
        done.focus();
      }
      email.value = '';
    });
  }

  if (reset) {
    reset.addEventListener('click', function () {
      if (card) { card.classList.remove('is-done'); }
      if (done) { done.hidden = true; }
      clearError();
      if (email) { email.focus(); }
    });
  }

  render();
})();
</script>
</body>
</html>