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
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AuthKit — The world’s best login box, powered by WorkOS + Radix.</title>
<meta name="description" content="AuthKit — the world’s best login box, powered by WorkOS + Radix.">
<style>
/* ============================================================
   TOKENS
   ============================================================ */
:root{
  --canvas:#05060f;
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
  --hairline-strong:rgba(186,215,247,.24);
  --glass:rgba(186,214,247,.03);
  --font-sans:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --font-display:"Space Grotesk","Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --font-mono:ui-monospace,"JetBrains Mono","SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
  --ease:cubic-bezier(.22,.61,.36,1);
  --section-gap:120px;
}

*,*::before,*::after{box-sizing:border-box}
[hidden]{display:none !important}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{
  margin:0;
  background:var(--canvas);
  color:var(--frost);
  font-family:var(--font-sans);
  font-size:16px;
  line-height:1.5;
  letter-spacing:-.01em;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}
img,svg{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
input{font:inherit}
:focus-visible{outline:2px solid rgba(160,200,250,.85);outline-offset:2px;border-radius:6px}

.sr-only{
  position:absolute;width:1px;height:1px;padding:0;margin:-1px;
  overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0;
}

/* ============================================================
   BACKGROUND ATMOSPHERE
   ============================================================ */
.bg-layer{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.bg-layer::before{
  content:"";position:absolute;inset:-15% -5% 0 -5%;
  background-image:
    linear-gradient(to right, rgba(186,215,247,.055) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(186,215,247,.055) 1px, transparent 1px);
  background-size:72px 72px;
  background-position:center top;
  -webkit-mask-image:radial-gradient(ellipse 1150px 1050px at 50% 400px, #000 0%, rgba(0,0,0,.55) 58%, transparent 88%);
  mask-image:radial-gradient(ellipse 1150px 1050px at 50% 400px, #000 0%, rgba(0,0,0,.55) 58%, transparent 88%);
}
.bg-layer::after{
  content:"";position:absolute;inset:0;
  background:
    radial-gradient(ellipse 700px 560px at 50% 560px, rgba(124,145,182,.13), transparent 72%),
    radial-gradient(ellipse 460px 300px at 50% 300px, rgba(140,168,214,.10), transparent 70%);
}
.hero-shaft{
  position:absolute;left:50%;top:60px;transform:translateX(-50%);
  width:760px;height:640px;
  background:linear-gradient(180deg, rgba(180,205,240,.20) 0%, rgba(150,180,225,.09) 38%, rgba(120,150,200,.03) 68%, transparent 100%);
  clip-path:polygon(47% 0, 53% 0, 100% 100%, 0 100%);
  filter:blur(26px);
  opacity:.55;
}

/* ============================================================
   HEADER
   ============================================================ */
.site-header{
  position:relative;z-index:6;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;
  height:38px;max-width:760px;margin:35px auto 0;padding:0 4px;
}
.brand{
  justify-self:start;font-size:17px;font-weight:500;letter-spacing:-.01em;
  color:#b8c4d8;transition:color .2s var(--ease);
}
.brand:hover{color:#e6eefb}
.header-symbol{justify-self:center;display:flex;align-items:center;justify-content:center}
.header-actions{justify-self:end;display:flex;align-items:center;gap:10px}

.icon-btn{
  width:36px;height:36px;border-radius:999px;display:grid;place-items:center;
  color:var(--frost);
  box-shadow:inset 0 0 0 1px var(--hairline);
  transition:background .2s var(--ease),color .2s var(--ease);
}
.icon-btn:hover{background:rgba(186,214,247,.08);color:#fff}

.btn-ghost{
  display:inline-flex;align-items:center;justify-content:center;
  height:36px;padding:0 16px;border-radius:999px;
  font-size:14px;font-weight:500;color:#fff;
  background:rgba(186,214,247,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
  transition:background .2s var(--ease);
}
.btn-ghost:hover{background:rgba(186,214,247,.13)}

/* ============================================================
   HERO
   ============================================================ */
.hero{position:relative;z-index:2;padding:0 20px}
.hero-inner{position:relative;max-width:1100px;margin:0 auto;text-align:center}

.eyebrow-row{
  display:flex;align-items:center;justify-content:center;gap:18px;
}
.eyebrow-row .rule{
  height:1px;width:58px;flex:none;
  background:linear-gradient(90deg, rgba(186,215,247,0) 0%, rgba(186,215,247,.14) 50%, rgba(186,215,247,0) 100%);
}
.eyebrow{
  font-size:14px;font-weight:400;color:#9aa5b8;letter-spacing:.01em;white-space:nowrap;
}
.eyebrow.caps{
  font-family:var(--font-mono);font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#a8b4c8;
}

.hero .eyebrow-row{margin-top:132px}

.wordmark{
  position:relative;
  margin:25px 0 0;
  font-family:var(--font-display);
  font-size:clamp(88px, 8.75vw, 140px);
  font-weight:500;
  line-height:1;
  letter-spacing:-.045em;
  background:linear-gradient(180deg,#e2eefc 0%,#b9d3f3 46%,#93bdec 100%);
  -webkit-background-clip:text;background-clip:text;
  color:transparent;
  -webkit-text-fill-color:transparent;
  user-select:none;
}
.wordmark::before{
  content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:130%;height:190%;z-index:-1;
  background:radial-gradient(ellipse at center, rgba(150,185,230,.16), rgba(150,185,230,.05) 46%, transparent 72%);
  filter:blur(26px);
}

.subtitle{
  margin:14px auto 0;
  font-size:clamp(19px, 1.5vw, 24px);
  line-height:1.34;
  font-weight:400;
  color:#c3cfe4;
  letter-spacing:-.012em;
}

/* registration crosshair marks */
.crosshair{
  position:absolute;width:9px;height:9px;pointer-events:none;
  background:
    linear-gradient(rgba(186,215,247,.4),rgba(186,215,247,.4)) center/1px 9px no-repeat,
    linear-gradient(rgba(186,215,247,.4),rgba(186,215,247,.4)) center/9px 1px no-repeat;
  opacity:.5;
}
.crosshair.tl{left:6%;top:300px}
.crosshair.tr{right:6%;top:300px}
.crosshair.bl{left:6%;top:520px}
.crosshair.br{right:6%;top:520px}

/* ============================================================
   AUTH CARDS
   ============================================================ */
.cards-stage{
  position:relative;width:740px;height:470px;margin:55px auto 0;
}
.auth-card{
  position:absolute;
  border-radius:16px;
  background-color:rgba(5,6,15,.96);
  background-image:linear-gradient(180deg, rgba(24,34,58,.5) 0%, rgba(8,11,20,.2) 34%, rgba(5,6,15,0) 70%);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.2),
    inset 0 24px 48px rgba(168,216,245,.06),
    inset 0 0 0 1px rgba(199,211,234,.07),
    0 16px 32px rgba(0,0,0,.32);
  backdrop-filter:blur(8px);
  -webkit-backdrop-filter:blur(8px);
  overflow:hidden;
  text-align:center;
}
.auth-card::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(circle, rgba(216,236,248,.5) 1.1px, transparent 1.5px);
  background-repeat:no-repeat;
  background-size:6px 6px;
  background-position:7px 7px, calc(100% - 13px) 7px, 7px calc(100% - 13px), calc(100% - 13px) calc(100% - 13px);
}
.auth-card.center{
  left:174px;top:0;width:392px;min-height:459px;height:459px;z-index:3;
  padding:43px 36px 26px;
}
.auth-card.side{
  width:334px;height:380px;top:34px;z-index:2;
  padding:36px 36px 22px;
  background-color:rgba(11,16,29,.88);
  filter:brightness(.86);
}
.auth-card.left{left:0;transform:rotate(-1.2deg)}
.auth-card.right{left:403px;transform:rotate(1.2deg)}

.card-logo{
  width:30px;height:30px;margin:0 auto;color:#cfe0f8;opacity:.9;
}
.card-title{
  margin:17px 0 0;font-size:16px;font-weight:500;color:#eaf1fc;letter-spacing:-.01em;
  font-family:var(--font-display);
}
.card-sub{
  margin:6px 0 0;font-size:13px;color:#8f9bb0;line-height:1.4;
}
.card-field{margin-top:22px;text-align:left}
.card-field label{
  display:block;font-size:14px;color:#c7d3ea;margin-bottom:5px;
}
.card-input{
  width:100%;height:34px;padding:0 12px;border-radius:6px;border:0;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
  color:#fff;font-size:14px;outline:none;
  transition:box-shadow .18s var(--ease);
}
.card-input::placeholder{color:rgba(199,211,234,.42)}
.card-input:focus{box-shadow:inset 0 0 0 1px rgba(186,215,247,.36)}
.card-input[aria-invalid="true"]{box-shadow:inset 0 0 0 1px rgba(228,109,76,.6)}
.card-input:focus-visible{outline:none}

.btn-continue{
  width:100%;height:36px;margin-top:12px;border-radius:6px;
  background:rgba(199,211,234,.075);
  box-shadow:inset 0 0 0 1px var(--hairline);
  color:#e6eefb;font-size:14px;font-weight:500;
  transition:background .18s var(--ease);
}
.btn-continue:hover{background:rgba(199,211,234,.13)}
.btn-continue:active{transform:translateY(1px)}

.or-divider{
  display:flex;align-items:center;gap:12px;margin-top:18px;
  font-size:11px;letter-spacing:.12em;color:rgba(199,211,234,.5);
}
.or-divider::before,.or-divider::after{
  content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(186,215,247,.16),transparent);
}

.provider{
  width:100%;height:40px;margin-top:9px;border-radius:999px;
  display:flex;align-items:center;justify-content:center;gap:10px;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
  color:#fff;font-size:14px;font-weight:500;
  transition:background .18s var(--ease);
}
.provider:hover{background:rgba(199,211,234,.12)}
.provider svg{flex:none}

.card-foot{
  margin:19px 0 0;font-size:14px;color:rgba(199,211,234,.68);
}
.card-foot a{color:#fff;font-weight:600}
.card-foot a:hover{text-decoration:underline}

.form-msg{
  margin:8px 0 0;font-size:12.5px;line-height:1.4;color:#e0eaF9;text-align:left;min-height:0;
}
.form-msg.error{color:#f0a08a}

/* code boxes on the right card */
.code-row{display:flex;gap:6px;justify-content:center;margin-top:22px}
.code-row span{
  width:36px;height:40px;border-radius:6px;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
}

/* success panel */
.card-success{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:14px;height:100%;padding:20px 0;
}
.success-mark{
  width:44px;height:44px;border-radius:999px;display:grid;place-items:center;
  background:rgba(186,214,247,.08);
  box-shadow:inset 0 0 0 1px var(--hairline),inset 0 1px 1px rgba(216,236,248,.2);
  color:#cfe4ff;font-size:20px;
}
.success-mark svg{width:20px;height:20px}
.card-success p{margin:0;font-size:14px;color:#c7d3ea;max-width:250px}
.card-success .muted{font-size:12.5px;color:#8f9bb0}
.link-btn{
  font-size:14px;font-weight:600;color:#fff;
  border-bottom:1px solid rgba(186,215,247,.28);padding:0 0 2px;
}
.link-btn:hover{border-bottom-color:rgba(186,215,247,.6)}

/* ============================================================
   GENERIC SECTION SCAFFOLD
   ============================================================ */
.section{
  position:relative;z-index:2;
  padding:var(--section-gap) 20px 0;
  scroll-margin-top:40px;
}
.section-head{max-width:760px;margin:0 auto;text-align:center}
.section-head .eyebrow-row{margin-bottom:26px}
.h2{
  margin:0;
  font-family:var(--font-display);
  font-size:clamp(30px, 3.4vw, 48px);
  font-weight:500;
  line-height:1.16;
  letter-spacing:-.02em;
  background:linear-gradient(180deg,#dceafb 0%,#c2d7f4 55%,#9dc2ee 100%);
  -webkit-background-clip:text;background-clip:text;
  color:transparent;-webkit-text-fill-color:transparent;
}
.lede{
  margin:20px auto 0;max-width:620px;
  font-size:17px;line-height:1.55;color:#a3aec3;
}

/* ============================================================
   MODES / THEME TOGGLE
   ============================================================ */
.modes{padding-top:96px}
.modes .eyebrow-row{margin-bottom:22px}
.segmented{
  display:inline-flex;padding:4px;border-radius:999px;
  background:rgba(186,214,247,.045);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.1);
}
.seg{
  display:inline-flex;align-items:center;gap:8px;
  height:32px;padding:0 16px;border-radius:999px;
  font-size:14px;font-weight:500;color:#93a0b6;
  transition:background .2s var(--ease),color .2s var(--ease);
}
.seg[aria-pressed="true"]{
  background:rgba(186,214,247,.12);color:#fff;
  box-shadow:inset 0 1px 1px rgba(216,236,248,.18);
}
.seg:hover{color:#dbe6f6}

/* ============================================================
   FEATURE ROW
   ============================================================ */
.features{padding:88px 20px 0;position:relative;z-index:2}
.feature-row{
  position:relative;display:flex;justify-content:space-between;gap:8px;
  max-width:1000px;margin:0 auto;padding:0;list-style:none;
}
.feature-row::before{
  content:"";position:absolute;left:34px;right:34px;top:29px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(186,215,247,.14) 10%,rgba(186,215,247,.14) 90%,transparent);
}
.feature-row li{
  position:relative;flex:1;display:flex;flex-direction:column;align-items:center;gap:14px;
}
.icon-tile{
  width:58px;height:58px;border-radius:9999px;display:grid;place-items:center;
  background:linear-gradient(180deg,#0c111f 0%,#080b15 100%);
  box-shadow:
    inset 0 0 0 1px rgba(186,215,247,.1),
    inset 0 1px 1px rgba(199,211,234,.14),
    inset 0 0 26px rgba(168,216,245,.05);
  color:var(--frost);
  transition:box-shadow .25s var(--ease),color .25s var(--ease);
}
.feature-row li:hover .icon-tile{
  color:#fff;
  box-shadow:
    inset 0 0 0 1px rgba(186,215,247,.22),
    inset 0 1px 1px rgba(216,236,248,.22),
    inset 0 0 30px rgba(168,216,245,.09);
}
.feature-label{
  font-size:14px;color:#a9b4c8;text-align:center;line-height:1.35;
}

/* ============================================================
   DASHBOARD ILLUSTRATION
   ============================================================ */
.illustration-wrap{
  margin:64px auto 0;max-width:1080px;
}
.panel{
  border-radius:16px;
  background-color:rgba(7,10,20,.88);
  background-image:linear-gradient(180deg, rgba(22,32,54,.55) 0%, rgba(8,11,20,.15) 38%, rgba(5,6,15,0) 75%);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.18),
    inset 0 24px 48px rgba(168,216,245,.05),
    inset 0 0 0 1px rgba(199,211,234,.06),
    0 24px 48px rgba(0,0,0,.5);
  overflow:hidden;
}
.dash{display:grid;grid-template-columns:212px 1fr;min-height:420px}
.dash-side{
  padding:22px 16px;border-right:1px solid rgba(186,215,247,.07);
  background:rgba(10,14,26,.5);
}
.dash-brand{
  display:flex;align-items:center;gap:9px;font-size:14px;font-weight:600;color:#e3ecfa;
  margin-bottom:22px;letter-spacing:-.01em;
}
.dash-brand .diamond{
  width:16px;height:16px;border-radius:4px;
  background:linear-gradient(180deg,#dceafb,#8fb8e8);
  transform:rotate(45deg);flex:none;
}
.dash-nav{display:flex;flex-direction:column;gap:3px}
.dash-nav span{
  font-size:13.5px;color:#8b97ac;padding:8px 10px;border-radius:8px;
}
.dash-nav span.active{
  color:#eaf1fc;background:rgba(186,214,247,.08);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.09);
}
.dash-main{padding:22px 24px}
.dash-top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:20px}
.search{
  flex:1;max-width:280px;height:32px;border-radius:999px;
  background:rgba(199,211,234,.05);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.09);
}
.avatar{
  width:30px;height:30px;border-radius:999px;flex:none;
  background:linear-gradient(180deg,rgba(199,211,234,.22),rgba(199,211,234,.07));
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.12);
}
.dash-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px}
.stat{
  padding:14px 16px;border-radius:12px;
  background:rgba(186,214,247,.035);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.08),inset 0 1px 1px rgba(199,211,234,.09);
}
.stat span{display:block;font-size:11.5px;letter-spacing:.07em;text-transform:uppercase;color:#8b97ac}
.stat strong{display:block;margin-top:8px;font-size:22px;font-weight:500;color:#e7eefa;letter-spacing:-.02em}
.dash-rows{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
.dash-rows li{
  display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:10px;
  transition:background .2s var(--ease);
}
.dash-rows li:hover{background:rgba(186,214,247,.045)}
.u-avatar{
  width:28px;height:28px;border-radius:999px;flex:none;
  background:linear-gradient(180deg,rgba(199,211,234,.24),rgba(199,211,234,.07));
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.12);
}
.u-meta{flex:1;min-width:0}
.u-meta b{display:block;font-size:14px;font-weight:500;color:#dfe8f6;letter-spacing:-.005em}
.u-meta i{display:block;font-style:normal;font-size:12.5px;color:#8b97ac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.badge{
  font-size:11.5px;font-weight:500;color:#cfe0f8;padding:4px 9px;border-radius:6px;
  background:rgba(199,211,234,.1);
  box-shadow:inset 0 1px 1px rgba(216,236,248,.13),inset 0 0 0 1px rgba(186,215,247,.07);
  white-space:nowrap;
}
.state-dot{width:7px;height:7px;border-radius:999px;background:#5f8fd0;box-shadow:0 0 8px rgba(120,170,240,.6);flex:none}

/* ============================================================
   CUSTOMIZE
   ============================================================ */
.customize-stage{
  position:relative;max-width:1180px;margin:64px auto 0;min-height:600px;
}
.browser{
  width:min(720px,100%);margin:0 auto;border-radius:16px;overflow:hidden;
  background:rgba(7,10,20,.94);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.2),
    inset 0 24px 48px rgba(168,216,245,.05),
    inset 0 0 0 1px rgba(199,211,234,.07),
    0 24px 48px rgba(0,0,0,.5);
}
.browser-bar{
  display:flex;align-items:center;gap:10px;height:40px;padding:0 16px;
  border-bottom:1px solid rgba(186,215,247,.07);
  background:rgba(12,17,30,.7);
}
.bdot{width:9px;height:9px;border-radius:999px;background:rgba(199,211,234,.16);flex:none}
.browser-url{
  flex:1;height:22px;border-radius:999px;margin-left:8px;
  background:rgba(199,211,234,.05);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.07);
}
.browser-body{
  padding:44px 24px;
  background:var(--d-bg,#070a14);
  transition:background .35s var(--ease);
  display:flex;justify-content:center;
}

.demo-card{
  width:320px;max-width:100%;
  border-radius:var(--d-radius,16px);
  padding:28px 26px 24px;
  text-align:center;
  background:var(--d-card,#0b1020);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.18),
    inset 0 0 0 1px rgba(199,211,234,.08),
    0 18px 36px rgba(0,0,0,.35);
  transition:border-radius .3s var(--ease),background .35s var(--ease);
}
.demo-logo{
  display:block;width:28px;height:28px;margin:0 auto 16px;
  background:var(--d-accent,#663af3);
  box-shadow:0 0 20px rgba(102,58,243,.35);
  transition:border-radius .25s var(--ease),background .25s var(--ease),transform .25s var(--ease);
}
.demo-logo[data-shape="circle"]{border-radius:999px}
.demo-logo[data-shape="diamond"]{border-radius:6px;transform:rotate(45deg)}
.demo-logo[data-shape="square"]{border-radius:8px}
.demo-title{
  margin:0 0 20px;font-size:17px;font-weight:600;letter-spacing:-.015em;
  color:var(--d-text,#fff);
  font-family:var(--font-display);
}
.demo-field{text-align:left;margin-bottom:12px}
.demo-field label{display:block;font-size:13px;margin-bottom:5px;color:var(--d-muted,#9da7ba)}
.demo-input{
  width:100%;height:36px;padding:0 12px;border:0;outline:none;
  border-radius:var(--d-input-radius,6px);
  background:var(--d-input,rgba(199,211,234,.06));
  box-shadow:inset 0 0 0 1px var(--d-line,rgba(186,215,247,.14));
  color:var(--d-text,#fff);font-size:14px;
  transition:border-radius .3s var(--ease),box-shadow .18s var(--ease);
}
.demo-input::placeholder{color:var(--d-muted,#9da7ba);opacity:.65}
.demo-input:focus{box-shadow:inset 0 0 0 1px var(--d-accent,#663af3)}
.demo-input[aria-invalid="true"]{box-shadow:inset 0 0 0 1px rgba(228,109,76,.75)}
.demo-msg{margin:6px 0 0;font-size:12.5px;line-height:1.4;text-align:left;color:#f0a08a}
.demo-cta{
  width:100%;height:40px;margin-top:6px;
  border-radius:var(--d-input-radius,6px);
  background:var(--d-accent,#663af3);
  color:#fff;font-size:14px;font-weight:600;letter-spacing:-.005em;
  box-shadow:inset 0 1px 1px rgba(255,255,255,.22);
  transition:filter .18s var(--ease),border-radius .3s var(--ease),background .25s var(--ease);
}
.demo-cta:hover{filter:brightness(1.1)}
.demo-or{
  display:flex;align-items:center;gap:10px;margin:16px 0 4px;
  font-size:10.5px;letter-spacing:.14em;color:var(--d-muted,#9da7ba);
}
.demo-or::before,.demo-or::after{
  content:"";flex:1;height:1px;background:var(--d-line,rgba(186,215,247,.14));
}
.demo-provider{
  width:100%;height:38px;margin-top:8px;border-radius:999px;
  display:flex;align-items:center;justify-content:center;gap:9px;
  background:var(--d-prov,rgba(199,211,234,.06));
  box-shadow:inset 0 0 0 1px var(--d-line,rgba(186,215,247,.14));
  color:var(--d-text,#fff);font-size:13.5px;font-weight:500;
  transition:filter .18s var(--ease);
}
.demo-provider:hover{filter:brightness(1.12)}
.demo-success{
  display:flex;flex-direction:column;align-items:center;gap:12px;padding:26px 0 8px;
  color:var(--d-text,#fff);
}
.demo-success .success-mark{
  background:color-mix(in srgb, var(--d-accent,#663af3) 26%, transparent);
  box-shadow:inset 0 0 0 1px var(--d-line,rgba(186,215,247,.14));
  color:#fff;
}
.demo-success p{margin:0;font-size:13.5px;line-height:1.5;color:var(--d-muted,#9da7ba)}
.demo-success strong{color:var(--d-text,#fff);font-weight:600}
.demo-reset{
  margin-top:4px;font-size:13px;font-weight:600;color:var(--d-accent,#663af3);
  border-bottom:1px solid currentColor;padding-bottom:1px;
}

/* inspector panels */
.inspector{
  position:absolute;width:212px;padding:16px;border-radius:14px;
  background:rgba(9,13,24,.93);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.18),
    inset 0 0 0 1px rgba(199,211,234,.08),
    0 18px 36px rgba(0,0,0,.45);
  backdrop-filter:blur(10px);
}
.inspector h3{
  margin:0 0 12px;font-size:11px;font-weight:500;letter-spacing:.14em;
  text-transform:uppercase;color:#8b97ac;font-family:var(--font-mono);
}
.inspector .value{
  float:right;font-family:var(--font-mono);font-size:11px;color:#7f8ca1;letter-spacing:0;
  text-transform:none;
}
.insp-1{left:0;top:26px}
.insp-2{right:0;top:-6px}
.insp-3{left:0;bottom:56px}
.insp-4{right:0;bottom:22px}

.swatches{display:flex;gap:8px}
.swatch{
  width:24px;height:24px;border-radius:6px;padding:0;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);
  transition:transform .16s var(--ease);
}
.swatch:hover{transform:translateY(-2px)}
.swatch[aria-pressed="true"]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),0 0 0 2px rgba(216,236,248,.5)}
.swatch.s-violet{background:#663af3}
.swatch.s-blue{background:#027dea}
.swatch.s-teal{background:#269684}
.swatch.s-ember{background:#e46d4c}

.logo-picker{display:flex;gap:8px}
.logo-opt{
  width:32px;height:32px;border-radius:8px;display:grid;place-items:center;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.1);
  transition:box-shadow .18s var(--ease);
}
.logo-opt[aria-pressed="true"]{box-shadow:inset 0 0 0 1px rgba(186,215,247,.4)}
.logo-opt i{display:block;width:14px;height:14px;background:#cfe0f8;border-radius:999px}
.logo-opt[data-shape="diamond"] i{border-radius:3px;transform:rotate(45deg)}
.logo-opt[data-shape="square"] i{border-radius:3px}

.range{
  -webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:999px;
  background:rgba(199,211,234,.14);outline:none;margin:6px 0 0;
}
.range::-webkit-slider-thumb{
  -webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:999px;
  background:#dbe8fa;box-shadow:0 0 0 1px rgba(5,6,15,.6),0 0 10px rgba(160,200,250,.5);
  cursor:pointer;
}
.range::-moz-range-thumb{
  width:16px;height:16px;border:0;border-radius:999px;background:#dbe8fa;cursor:pointer;
}
.text-control{
  width:100%;height:32px;padding:0 10px;border:0;outline:none;border-radius:6px;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px rgba(186,215,247,.1);
  color:#e7eefa;font-size:13px;
}
.text-control:focus{box-shadow:inset 0 0 0 1px rgba(186,215,247,.36)}
.text-control[aria-invalid="true"]{box-shadow:inset 0 0 0 1px rgba(228,109,76,.6)}
.field-label{display:block;font-size:12px;color:#8b97ac;margin-bottom:6px}

/* ============================================================
   FOOTER
   ============================================================ */
.site-footer{
  position:relative;z-index:2;
  margin-top:var(--section-gap);padding:36px 20px 56px;
  border-top:1px solid rgba(186,215,247,.07);
}
.footer-inner{
  max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;
  gap:20px;flex-wrap:wrap;font-size:13.5px;color:#7f8ca1;
}
.footer-inner a:hover{color:#dbe6f6}
.footer-links{display:flex;gap:22px;flex-wrap:wrap}

/* ============================================================
   DIALOG
   ============================================================ */
dialog.gh-dialog{
  border:0;padding:0;background:transparent;color:var(--frost);
  max-width:min(460px,calc(100vw - 40px));width:100%;
  border-radius:16px;
}
dialog.gh-dialog::backdrop{
  background:rgba(3,4,10,.72);
  backdrop-filter:blur(5px);
}
.dialog-panel{
  border-radius:16px;padding:28px;
  background:rgba(9,12,22,.98);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.2),
    inset 0 24px 48px rgba(168,216,245,.06),
    inset 0 0 0 1px rgba(199,211,234,.08),
    0 24px 48px rgba(0,0,0,.6);
}
.dialog-panel h2{margin:0 0 10px;font-size:20px;font-weight:600;color:#eaf1fc;font-family:var(--font-display)}
.dialog-panel p{margin:0 0 14px;font-size:14px;line-height:1.6;color:#a3aec3}
.dialog-panel code{
  font-family:var(--font-mono);font-size:12.5px;color:#cfe0f8;
  background:rgba(199,211,234,.08);padding:1px 6px;border-radius:5px;
}
.dialog-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:22px}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width:1180px){
  .customize-stage{display:flex;flex-direction:column;gap:24px;min-height:0}
  .browser{order:-1}
  .inspector{position:static;width:100%}
  .customize-stage .inspector{display:block}
  .inspector-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
}
@media (max-width:1180px){
  .customize-stage{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start}
  .browser{grid-column:1 / -1;order:0}
  .inspector{position:static;width:auto;float:none}
  .insp-1,.insp-2,.insp-3,.insp-4{left:auto;right:auto;top:auto;bottom:auto}
}

@media (max-width:900px){
  .crosshair{display:none}
  .hero-shaft{width:520px;opacity:.4}
  .hero .eyebrow-row{margin-top:88px}
  .wordmark{margin-top:18px}
  .cards-stage{margin-top:44px}
  .dash{grid-template-columns:1fr}
  .dash-side{border-right:0;border-bottom:1px solid rgba(186,215,247,.07);display:flex;align-items:center;gap:18px;overflow-x:auto;padding:14px 16px}
  .dash-brand{margin-bottom:0;flex:none}
  .dash-nav{flex-direction:row;gap:2px}
  .dash-stats{grid-template-columns:1fr 1fr}
}

@media (max-width:820px){
  .feature-row{display:grid;grid-template-columns:repeat(3,1fr);gap:26px 12px}
  .feature-row::before{display:none}
  .feature-row li{flex:none}
}

@media (max-width:760px){
  :root{--section-gap:88px}

  .site-header{max-width:none;padding:0 8px;gap:6px}
  .brand{font-size:15px}
  .header-actions{gap:6px}
  .btn-ghost{padding:0 12px;font-size:13px;height:34px}
  .icon-btn{width:34px;height:34px}

  .hero{padding:0 20px}
  .hero .eyebrow-row{margin-top:72px}
  .eyebrow-row .rule{width:32px}
  .eyebrow{font-size:13px}

  .cards-stage{
    width:100%;height:auto;margin:40px auto 0;
  }
  .auth-card.center{
    position:relative;left:0;top:0;width:310px;max-width:100%;
    height:auto;min-height:0;margin:0 auto;padding:32px 24px 24px;
    transform:none;
  }
  .auth-card.side{
    display:block;position:absolute;top:28px;width:270px;
    height:calc(100% - 42px);padding:28px 22px;
    opacity:.45;pointer-events:none;
  }
  .auth-card.left{left:-232px;transform:rotate(-2.5deg)}
  .auth-card.right{right:-232px;left:auto;transform:rotate(2.5deg)}
  .card-title{font-size:15px}
  .card-field{margin-top:18px}
  .provider{height:38px;font-size:13.5px}
  .btn-continue{height:38px}
  .card-foot{font-size:13px}

  .section{padding-left:20px;padding-right:20px}
  .lede{font-size:15.5px}

  .customize-stage{display:flex;flex-direction:column;gap:16px;margin-top:40px}
  .inspector{position:static;width:100%}
  .insp-1,.insp-2,.insp-3,.insp-4{position:static}
  .browser-body{padding:28px 16px}

  .dash-stats{grid-template-columns:1fr;gap:10px}
  .dash-main{padding:18px 16px}

  .footer-inner{flex-direction:column;align-items:flex-start;gap:14px}
}

@media (max-width:420px){
  .feature-row{grid-template-columns:repeat(3,1fr);gap:22px 8px}
  .icon-tile{width:52px;height:52px}
  .feature-label{font-size:12.5px}
  .seg{padding:0 12px;font-size:13px}
}

/* ============================================================
   REDUCED MOTION
   ============================================================ */
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
    scroll-behavior:auto !important;
  }
}
</style>
</head>
<body>
<div id="top"></div>

<!-- ============================================================
     BACKGROUND LAYERS
     ============================================================ -->
<div class="bg-layer" aria-hidden="true">
  <div class="hero-shaft"></div>
</div>

<!-- ============================================================
     HERO
     ============================================================ -->
<header class="site-header">
  <a class="brand" href="#top">WorkOS</a>

  <div class="header-symbol">
    <svg width="30" height="30" viewBox="0 0 32 32" role="img" aria-label="AuthKit">
      <defs>
        <linearGradient id="symGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e8f2fd"/>
          <stop offset="1" stop-color="#8fb6e6"/>
        </linearGradient>
      </defs>
      <path d="M16 1.6 30.4 16 16 30.4 1.6 16Z" fill="#0a0e1b" stroke="rgba(186,215,247,.22)" stroke-width="1"/>
      <path d="M16 7.6 24.4 16 16 24.4 7.6 16Z" fill="url(#symGrad)"/>
      <path d="M16 11.4 20.6 16 16 20.6 11.4 16Z" fill="#0a0e1b"/>
    </svg>
  </div>

  <div class="header-actions">
    <button class="icon-btn" id="ghBtn" type="button" aria-label="Open local project information">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-2.91-.88-2.91-2.68 0-.65.23-1.29.61-1.74-.06-.14-.27-.83.06-1.72 0 0 .5-.16 1.64.61a5.6 5.6 0 0 1 1.5-.2c.51 0 1.02.07 1.5.2 1.14-.78 1.64-.61 1.64-.61.33.89.12 1.58.06 1.72.38.45.61 1.09.61 1.74 0 1.81-1.14 2.48-2.92 2.68.29.25.55.73.55 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
      </svg>
    </button>
    <a class="btn-ghost" href="#customize">Get started</a>
  </div>
</header>

<main>
<section class="hero">
  <div class="hero-inner">
    <span class="crosshair tl" aria-hidden="true"></span>
    <span class="crosshair tr" aria-hidden="true"></span>
    <span class="crosshair bl" aria-hidden="true"></span>
    <span class="crosshair br" aria-hidden="true"></span>

    <div class="eyebrow-row">
      <span class="rule" aria-hidden="true"></span>
      <span class="eyebrow">Introducing</span>
      <span class="rule" aria-hidden="true"></span>
    </div>

    <h1 class="wordmark">AuthKit</h1>

    <p class="subtitle">
      The world’s best login box,<br>
      powered by WorkOS + Radix.
    </p>
  </div>

  <!-- ============================ CARD FAN ============================ -->
  <div class="cards-stage">

    <!-- LEFT: email sign-in -->
    <div class="auth-card side left" aria-hidden="true">
      <div class="card-logo">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="16" cy="16" r="12"/>
          <circle cx="16" cy="16" r="5"/>
          <path d="M16 4v6M16 22v6M4 16h6M22 16h6"/>
        </svg>
      </div>
      <h3 class="card-title">Welcome to SuperApp</h3>
      <p class="card-sub">Log in to your account</p>
      <div class="card-field" style="margin-top:26px">
        <label>Email</label>
        <input class="card-input" type="email" placeholder="Your email address" tabindex="-1">
      </div>
      <button class="btn-continue" type="button" tabindex="-1">Continue</button>
      <p class="card-foot">Don’t have an account? Sign up</p>
    </div>

    <!-- CENTER: primary card -->
    <div class="auth-card center" id="heroCard">
      <div class="card-inner" id="heroInner">
        <div class="card-logo">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <circle cx="16" cy="16" r="12"/>
            <circle cx="16" cy="16" r="5"/>
            <path d="M16 4v6M16 22v6M4 16h6M22 16h6"/>
          </svg>
        </div>
        <h2 class="card-title">Sign in to SuperApp</h2>

        <form id="heroForm" novalidate>
          <div class="card-field">
            <label for="heroEmail">Email</label>
            <input class="card-input" id="heroEmail" name="heroEmail" type="email"
                   placeholder="Your email address" autocomplete="off" spellcheck="false"
                   aria-describedby="heroMsg">
          </div>
          <button class="btn-continue" type="submit">Continue</button>
          <p class="form-msg" id="heroMsg" role="status" aria-live="polite"></p>
        </form>

        <div id="heroExtras">
          <div class="or-divider"><span>OR</span></div>
          <button class="provider" type="button" data-provider="Google">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1S8.7 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.6 12 2.6 6.9 2.6 2.8 6.7 2.8 11.9S6.9 21.3 12 21.3c5.4 0 8.9-3.8 8.9-9.1 0-.6-.06-1.1-.15-1.6H12Z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button class="provider" type="button" data-provider="Microsoft">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z"/>
            </svg>
            <span>Continue with Microsoft</span>
          </button>
          <p class="card-foot">Don’t have an account? <a href="#customize">Sign up</a></p>
        </div>
      </div>

      <div class="card-success" id="heroSuccess" hidden>
        <span class="success-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
        </span>
        <p id="heroSuccessText">Check your inbox — we simulated a sign-in link.</p>
        <p class="muted">Demo only. Nothing was sent or stored.</p>
        <button class="link-btn" type="button" id="heroReset">Start over</button>
      </div>
    </div>

    <!-- RIGHT: passcode flow -->
    <div class="auth-card side right" aria-hidden="true">
      <div class="card-logo">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="6" y="12" width="20" height="14" rx="3"/>
          <path d="M11 12V9a5 5 0 0 1 10 0v3"/>
        </svg>
      </div>
      <h3 class="card-title">Enter your code</h3>
      <p class="card-sub">Enter the passcode from your authenticator app.</p>
      <div class="code-row"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <button class="btn-continue" type="button" tabindex="-1">Continue</button>
      <p class="card-foot">Back to sign in</p>
    </div>

  </div>
</section>

<!-- ============================================================
     THEME SWITCH
     ============================================================ -->
<section class="modes" aria-labelledby="modesTitle">
  <div style="text-align:center;max-width:1180px;margin:0 auto">
    <div class="eyebrow-row">
      <span class="rule" aria-hidden="true"></span>
      <span class="eyebrow caps" id="modesTitle">Light and dark modes supported</span>
      <span class="rule" aria-hidden="true"></span>
    </div>
    <div class="segmented" role="group" aria-label="Preview theme for the login card demo">
      <button class="seg" type="button" data-theme-set="dark" aria-pressed="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/>
        </svg>
        Dark
      </button>
      <button class="seg" type="button" data-theme-set="light" aria-pressed="false">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2"/>
          <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/>
        </svg>
        Light
      </button>
    </div>
  </div>
</section>

<!-- ============================================================
     FEATURE ICONS
     ============================================================ -->
<section class="features" aria-label="Authentication features">
  <ul class="feature-row">
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v3M15 12v2.5"/>
        </svg>
      </span>
      <span class="feature-label">Single Sign-On</span>
    </li>
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="10" width="16" height="10" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>
        </svg>
      </span>
      <span class="feature-label">Password</span>
    </li>
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3 5 6v5.5c0 4.2 2.9 7.9 7 9.5 4.1-1.6 7-5.3 7-9.5V6l-7-3Z"/>
          <path d="m9.3 12 1.9 1.9 3.5-3.6"/>
        </svg>
      </span>
      <span class="feature-label">MFA</span>
    </li>
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="9" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/>
          <path d="M16.5 8.2a3 3 0 0 1 0 5.6M18.5 19a5.5 5.5 0 0 0-2.4-4.5"/>
        </svg>
      </span>
      <span class="feature-label">Social Login</span>
    </li>
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8.5" r="3.2"/><path d="M6 19.5a6 6 0 0 1 12 0"/>
          <path d="m16.5 4.5 1 2 2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2L13.5 6.8l2-.3 1-2Z"/>
        </svg>
      </span>
      <span class="feature-label">RBAC</span>
    </li>
    <li>
      <span class="icon-tile" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 19 14 10"/><path d="m16.5 3 .9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z"/>
          <path d="m6.5 4 .5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3L4.7 5.8l1.3-.5.5-1.3Z"/>
        </svg>
      </span>
      <span class="feature-label">Magic Auth</span>
    </li>
  </ul>
</section>

<!-- ============================================================
     EXTENSIBLE BY DESIGN
     ============================================================ -->
<section class="section" id="extensible" aria-labelledby="extTitle">
  <div class="section-head">
    <div class="eyebrow-row">
      <span class="rule" aria-hidden="true"></span>
      <span class="eyebrow caps">Extensible by design</span>
      <span class="rule" aria-hidden="true"></span>
    </div>
    <h2 class="h2" id="extTitle">Your users. Your data.<br>Maximum flexibility.</h2>
    <p class="lede">
      AuthKit drops into your app and hands you the whole auth surface — users, organizations,
      roles and sessions — behind a clean, composable API you can shape however you need.
    </p>
  </div>

  <div class="illustration-wrap">
    <div class="panel">
      <div class="dash">
        <div class="dash-side">
          <div class="dash-brand"><span class="diamond"></span> AuthKit</div>
          <nav class="dash-nav" aria-hidden="true">
            <span class="active">Users</span>
            <span>Organizations</span>
            <span>Sessions</span>
            <span>Roles</span>
            <span>Audit log</span>
          </nav>
        </div>
        <div class="dash-main">
          <div class="dash-top">
            <div class="search" aria-hidden="true"></div>
            <div class="avatar" aria-hidden="true"></div>
          </div>
          <div class="dash-stats">
            <div class="stat"><span>Total users</span><strong>12,480</strong></div>
            <div class="stat"><span>Active sessions</span><strong>3,192</strong></div>
            <div class="stat"><span>MFA enrolled</span><strong>86%</strong></div>
          </div>
          <ul class="dash-rows">
            <li>
              <span class="u-avatar" aria-hidden="true"></span>
              <span class="u-meta"><b>Ada Lovelace</b><i>ada@superapp.com</i></span>
              <span class="badge">SSO</span><span class="badge">MFA</span><span class="state-dot" aria-hidden="true"></span>
            </li>
            <li>
              <span class="u-avatar" aria-hidden="true"></span>
              <span class="u-meta"><b>Grace Hopper</b><i>grace@superapp.com</i></span>
              <span class="badge">Email &amp; Password</span><span class="badge">RBAC</span><span class="state-dot" aria-hidden="true"></span>
            </li>
            <li>
              <span class="u-avatar" aria-hidden="true"></span>
              <span class="u-meta"><b>Alan Turing</b><i>alan@superapp.com</i></span>
              <span class="badge">Social Login</span><span class="badge">MFA</span><span class="state-dot" aria-hidden="true"></span>
            </li>
            <li>
              <span class="u-avatar" aria-hidden="true"></span>
              <span class="u-meta"><b>Katherine Johnson</b><i>katherine@superapp.com</i></span>
              <span class="badge">Magic Auth</span><span class="state-dot" aria-hidden="true"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SHINE BRIGHT — CUSTOMIZATION
     ============================================================ -->
<section class="section" id="customize" aria-labelledby="cusTitle">
  <div class="section-head">
    <div class="eyebrow-row">
      <span class="rule" aria-hidden="true"></span>
      <span class="eyebrow caps">Shine bright</span>
      <span class="rule" aria-hidden="true"></span>
    </div>
    <h2 class="h2" id="cusTitle">Your brand. Your style.</h2>
    <p class="lede">
      Every surface is themeable — colour, radius, logo and copy. Change the controls below and
      watch the login card update instantly.
    </p>
  </div>

  <div class="customize-stage" id="customizeStage">

    <!-- Browser frame with demo card -->
    <div class="browser">
      <div class="browser-bar" aria-hidden="true">
        <span class="bdot"></span><span class="bdot"></span><span class="bdot"></span>
        <span class="browser-url"></span>
      </div>
      <div class="browser-body" id="demoSurface" data-demo-theme="dark">
        <div class="demo-card" id="demoCard">
          <div class="demo-body" id="demoBody">
            <span class="demo-logo" id="demoLogo" data-shape="circle" aria-hidden="true"></span>
            <h3 class="demo-title">Sign in to SuperApp</h3>

            <form id="demoForm" novalidate>
              <div class="demo-field">
                <label for="demoEmail">Email</label>
                <input class="demo-input" id="demoEmail" type="email" placeholder="you@example.com"
                       autocomplete="off" spellcheck="false">
              </div>
              <div class="demo-field">
                <label for="demoPass">Password</label>
                <input class="demo-input" id="demoPass" type="password" placeholder="••••••••"
                       autocomplete="off">
              </div>
              <p class="demo-msg" id="demoMsg" role="status" aria-live="polite"></p>
              <button class="demo-cta" type="submit" id="demoCta">Continue</button>
            </form>

            <div class="demo-or"><span>OR</span></div>

            <button class="demo-provider" type="button" data-provider="Google">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1S8.7 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.6 12 2.6 6.9 2.6 2.8 6.7 2.8 11.9S6.9 21.3 12 21.3c5.4 0 8.9-3.8 8.9-9.1 0-.6-.06-1.1-.15-1.6H12Z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            <button class="demo-provider" type="button" data-provider="Microsoft">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M0 0h7.5v7.5H0zM8.5 0H16v7.5H8.5zM0 8.5h7.5V16H0zM8.5 8.5H16V16H8.5z"/>
              </svg>
              <span>Continue with Microsoft</span>
            </button>
          </div>

          <div class="demo-success" id="demoSuccess" hidden>
            <span class="success-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>
            </span>
            <p id="demoSuccessText"><strong>You’re in.</strong><br>This is a local demo — nothing was sent.</p>
            <button class="demo-reset" type="button" id="demoReset">Start over</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspector: colour -->
    <div class="inspector insp-1">
      <h3>Colour <span class="value" id="colourValue">#663af3</span></h3>
      <div class="swatches" role="group" aria-label="Accent colour">
        <button class="swatch s-violet" type="button" data-colour="#663af3" aria-pressed="true" aria-label="Violet accent"></button>
        <button class="swatch s-blue"   type="button" data-colour="#027dea" aria-pressed="false" aria-label="Signal blue accent"></button>
        <button class="swatch s-teal"   type="button" data-colour="#269684" aria-pressed="false" aria-label="Deep teal accent"></button>
        <button class="swatch s-ember"  type="button" data-colour="#e46d4c" aria-pressed="false" aria-label="Ember accent"></button>
      </div>
    </div>

    <!-- Inspector: radius -->
    <div class="inspector insp-2">
      <h3>Radius <span class="value" id="radiusValue">16px</span></h3>
      <label class="sr-only" for="radiusRange">Card corner radius</label>
      <input class="range" id="radiusRange" type="range" min="0" max="24" step="2" value="16">
    </div>

    <!-- Inspector: logo -->
    <div class="inspector insp-3">
      <h3>Logo</h3>
      <div class="logo-picker" role="group" aria-label="Logo shape">
        <button class="logo-opt" type="button" data-shape="circle" aria-pressed="true" aria-label="Circle logo"><i></i></button>
        <button class="logo-opt" type="button" data-shape="diamond" aria-pressed="false" aria-label="Diamond logo"><i></i></button>
        <button class="logo-opt" type="button" data-shape="square" aria-pressed="false" aria-label="Square logo"><i></i></button>
      </div>
    </div>

    <!-- Inspector: copy + background -->
    <div class="inspector insp-4">
      <h3>Button text</h3>
      <label class="sr-only" for="ctaText">Primary button label</label>
      <input class="text-control" id="ctaText" type="text" value="Continue" maxlength="20" autocomplete="off" style="margin-bottom:14px">
      <label class="field-label" for="bgText">Page background</label>
      <input class="text-control" id="bgText" type="text" value="#070a14" maxlength="7" autocomplete="off" spellcheck="false">
    </div>

  </div>
</section>
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <p style="margin:0">AuthKit — a local visual reproduction. No data leaves this page.</p>
    <nav class="footer-links" aria-label="Footer">
      <a href="#extensible">Extensible by design</a>
      <a href="#customize">Customization</a>
      <a href="#top">Back to top</a>
    </nav>
  </div>
</footer>

<!-- ============================================================
     DIALOG
     ============================================================ -->
<dialog class="gh-dialog" id="ghDialog" aria-labelledby="ghTitle">
  <div class="dialog-panel">
    <h2 id="ghTitle">Project information</h2>
    <p>
      This is a single-file, offline reproduction of the AuthKit marketing page.
      All styling, SVG artwork and behaviour are local — there are no network requests,
      no analytics and no stored credentials.
    </p>
    <p>
      Forms validate dummy input locally and show a simulated success state.
      Nothing is transmitted. Press <code>Esc</code> to close.
    </p>
    <div class="dialog-actions">
      <button class="btn-ghost" type="button" id="ghClose">Close</button>
    </div>
  </div>
</dialog>

<p class="sr-only" id="liveRegion" role="status" aria-live="polite"></p>

<script>
(function () {
  'use strict';

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var live = $('#liveRegion');
  var announceTimer = null;
  function announce(msg) {
    if (!live) return;
    live.textContent = '';
    window.clearTimeout(announceTimer);
    announceTimer = window.setTimeout(function () { live.textContent = msg; }, 60);
  }

  /* ------------------------------------------------------------
     Dialog
     ------------------------------------------------------------ */
  var dialog = $('#ghDialog');
  var ghBtn = $('#ghBtn');
  var ghClose = $('#ghClose');
  var lastFocused = null;

  function openDialog() {
    lastFocused = document.activeElement;
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else if (dialog) {
      dialog.setAttribute('open', '');
    }
    if (ghClose) ghClose.focus();
  }
  function closeDialog() {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  if (ghBtn) ghBtn.addEventListener('click', openDialog);
  if (ghClose) ghClose.addEventListener('click', closeDialog);
  if (dialog) {
    dialog.addEventListener('cancel', function () {
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });
  }

  /* ------------------------------------------------------------
     Validation helpers
     ------------------------------------------------------------ */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function validEmail(v) { return EMAIL_RE.test(String(v || '').trim()); }

  function setInvalid(input, on) {
    if (!input) return;
    if (on) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  }

  /* ------------------------------------------------------------
     Shared card success handling
     ------------------------------------------------------------ */
  function wireSuccess(resetBtn, bodyEl, successEl, innerEl, extrasEl, successTextEl) {
    resetBtn.addEventListener('click', function () {
      if (successEl) successEl.hidden = true;
      if (innerEl) innerEl.hidden = false;
      if (extrasEl) extrasEl.hidden = false;
      if (bodyEl) bodyEl.hidden = false;
      var first = (innerEl || bodyEl || document).querySelector('input, button');
      if (first) first.focus();
      announce('Form reset. You can try again.');
    });
    return successTextEl;
  }

  /* ------------------------------------------------------------
     HERO CARD FORM
     ------------------------------------------------------------ */
  var heroForm    = $('#heroForm');
  var heroEmail   = $('#heroEmail');
  var heroMsg     = $('#heroMsg');
  var heroInner   = $('#heroInner');
  var heroExtras  = $('#heroExtras');
  var heroSuccess = $('#heroSuccess');
  var heroSuccessText = $('#heroSuccessText');
  var heroReset   = $('#heroReset');

  function heroShowSuccess(text) {
    if (heroSuccessText && text) heroSuccessText.textContent = text;
    if (heroInner) heroInner.hidden = true;
    if (heroSuccess) heroSuccess.hidden = false;
    if (heroReset) heroReset.focus();
  }

  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = heroEmail ? heroEmail.value : '';
      if (!validEmail(value)) {
        setInvalid(heroEmail, true);
        if (heroMsg) { heroMsg.textContent = 'Enter a valid email address to continue.'; heroMsg.classList.add('error'); }
        if (heroEmail) heroEmail.focus();
        announce('Enter a valid email address to continue.');
        return;
      }
      setInvalid(heroEmail, false);
      if (heroMsg) { heroMsg.textContent = ''; heroMsg.classList.remove('error'); }
      heroForm.reset();
      heroShowSuccess('Check your inbox — we simulated a sign-in link.');
      announce('Demo submitted. A sign-in link was simulated locally. Nothing was sent.');
    });
    if (heroEmail) {
      heroEmail.addEventListener('input', function () {
        if (heroEmail.getAttribute('aria-invalid') === 'true' && validEmail(heroEmail.value)) {
          setInvalid(heroEmail, false);
          if (heroMsg) heroMsg.textContent = '';
        }
      });
    }
  }

  if (heroReset) {
    heroReset.addEventListener('click', function () {
      if (heroSuccess) heroSuccess.hidden = true;
      if (heroInner) heroInner.hidden = false;
      if (heroExtras) heroExtras.hidden = false;
      if (heroEmail) { heroEmail.value = ''; heroEmail.focus(); }
      if (heroMsg) { heroMsg.textContent = ''; heroMsg.classList.remove('error'); }
      announce('Form reset.');
    });
  }

  $$('#heroCard .provider').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var name = btn.getAttribute('data-provider') || 'provider';
      heroShowSuccess('Signed in with ' + name + ' (simulated).');
      announce('Simulated sign-in with ' + name + '. No request was made.');
    });
  });

  /* ------------------------------------------------------------
     DEMO CARD FORM (customization section)
     ------------------------------------------------------------ */
  var demoForm    = $('#demoForm');
  var demoEmail   = $('#demoEmail');
  var demoPass    = $('#demoPass');
  var demoMsg     = $('#demoMsg');
  var demoBody    = $('#demoBody');
  var demoSuccess = $('#demoSuccess');
  var demoSuccessText = $('#demoSuccessText');
  var demoReset   = $('#demoReset');
  var demoCta     = $('#demoCta');

  function demoShowSuccess(html) {
    if (demoSuccessText && html) demoSuccessText.innerHTML = html;
    if (demoBody) demoBody.hidden = true;
    if (demoSuccess) demoSuccess.hidden = false;
    if (demoReset) demoReset.focus();
  }

  if (demoForm) {
    demoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailVal = demoEmail ? demoEmail.value : '';
      var passVal  = demoPass ? demoPass.value : '';
      var problems = [];

      if (!validEmail(emailVal)) { setInvalid(demoEmail, true); problems.push('a valid email address'); }
      else setInvalid(demoEmail, false);

      if (String(passVal).length < 6) { setInvalid(demoPass, true); problems.push('a password of at least 6 characters'); }
      else setInvalid(demoPass, false);

      if (problems.length) {
        if (demoMsg) demoMsg.textContent = 'Please enter ' + problems.join(' and ') + '.';
        var target = (!validEmail(emailVal) ? demoEmail : demoPass);
        if (target) target.focus();
        announce('Validation failed. Please enter ' + problems.join(' and ') + '.');
        return;
      }

      if (demoMsg) demoMsg.textContent = '';
      demoForm.reset();
      demoShowSuccess('<strong>You’re in.</strong><br>This is a local demo — nothing was sent or stored.');
      announce('Demo form submitted successfully. No credentials were sent.');
    });

    [demoEmail, demoPass].forEach(function (input) {
      if (!input) return;
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') {
          var ok = input === demoEmail ? validEmail(input.value) : String(input.value).length >= 6;
          if (ok) {
            setInvalid(input, false);
            if (demoMsg) demoMsg.textContent = '';
          }
        }
      });
    });
  }

  if (demoReset) {
    demoReset.addEventListener('click', function () {
      if (demoSuccess) demoSuccess.hidden = true;
      if (demoBody) demoBody.hidden = false;
      if (demoEmail) { demoEmail.value = ''; demoEmail.focus(); }
      if (demoPass) demoPass.value = '';
      if (demoMsg) demoMsg.textContent = '';
      announce('Demo card reset.');
    });
  }

  $$('#demoCard .demo-provider').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var name = btn.getAttribute('data-provider') || 'provider';
      demoShowSuccess('<strong>Signed in with ' + name + '.</strong><br>Simulated locally — no OAuth request was made.');
      announce('Simulated sign-in with ' + name + '.');
    });
  });

  /* ------------------------------------------------------------
     CUSTOMIZATION CONTROLS
     ------------------------------------------------------------ */
  var demoSurface = $('#demoSurface');
  var demoLogo    = $('#demoLogo');
  var colourValue = $('#colourValue');
  var radiusRange = $('#radiusRange');
  var radiusValue = $('#radiusValue');
  var ctaText     = $('#ctaText');
  var bgText      = $('#bgText');

  /* --- theme segmented control (affects the demo card only) --- */
  var themeButtons = $$('[data-theme-set]');
  themeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = btn.getAttribute('data-theme-set');
      themeButtons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      if (demoSurface) demoSurface.setAttribute('data-demo-theme', theme);
      if (theme === 'light' && bgText) {
        bgText.value = '#eef2f9';
        demoSurface.style.setProperty('--d-bg', '#eef2f9');
      } else if (theme === 'dark' && bgText) {
        bgText.value = '#070a14';
        demoSurface.style.setProperty('--d-bg', '#070a14');
      }
      announce('Demo card theme set to ' + theme + ' mode.');
    });
  });

  /* --- accent colour swatches --- */
  var swatches = $$('.swatch');
  swatches.forEach(function (sw) {
    sw.addEventListener('click', function () {
      var colour = sw.getAttribute('data-colour');
      swatches.forEach(function (s) { s.setAttribute('aria-pressed', String(s === sw)); });
      if (demoSurface) demoSurface.style.setProperty('--d-accent', colour);
      if (colourValue) colourValue.textContent = colour;
      announce('Accent colour set to ' + colour + '.');
    });
  });

  /* --- radius --- */
  function applyRadius(v) {
    var r = Number(v);
    if (demoSurface) {
      demoSurface.style.setProperty('--d-radius', r + 'px');
      demoSurface.style.setProperty('--d-input-radius', Math.round(r * 0.4) + 'px');
    }
    if (radiusValue) radiusValue.textContent = r + 'px';
  }
  if (radiusRange) {
    applyRadius(radiusRange.value);
    radiusRange.addEventListener('input', function () {
      applyRadius(radiusRange.value);
    });
    radiusRange.addEventListener('change', function () {
      announce('Corner radius set to ' + radiusRange.value + ' pixels.');
    });
  }

  /* --- logo shape --- */
  var logoOpts = $$('.logo-opt');
  logoOpts.forEach(function (opt) {
    opt.addEventListener('click', function () {
      var shape = opt.getAttribute('data-shape');
      logoOpts.forEach(function (o) { o.setAttribute('aria-pressed', String(o === opt)); });
      if (demoLogo) demoLogo.setAttribute('data-shape', shape);
      announce('Logo shape set to ' + shape + '.');
    });
  });

  /* --- CTA label --- */
  if (ctaText && demoCta) {
    ctaText.addEventListener('input', function () {
      var v = ctaText.value.trim();
      demoCta.textContent = v.length ? v : 'Continue';
    });
  }

  /* --- page background field --- */
  if (bgText && demoSurface) {
    bgText.addEventListener('input', function () {
      var v = bgText.value.trim();
      if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) {
        setInvalid(bgText, false);
        demoSurface.style.setProperty('--d-bg', v);
      } else {
        setInvalid(bgText, true);
      }
    });
    bgText.addEventListener('blur', function () {
      var v = bgText.value.trim();
      if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) {
        bgText.value = '#070a14';
        setInvalid(bgText, false);
        demoSurface.style.setProperty('--d-bg', '#070a14');
      }
    });
  }

  /* ------------------------------------------------------------
     Smooth in-page navigation fallback (for older engines)
     ------------------------------------------------------------ */
  $$('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) history.replaceState(null, '', href);
    });
  });
})();
</script>
</body>
</html>