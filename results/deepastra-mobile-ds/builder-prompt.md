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


Current complete HTML:
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
  --font-sans:"Inter","Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --font-display:"Space Grotesk","aeonikPro","Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
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

/* --- blueprint grid: sparse, very dim, falls off toward the edges --- */
.bg-grid{
  position:absolute;inset:-10% -5%;
  background-image:
    linear-gradient(to right, rgba(186,215,247,.042) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(186,215,247,.042) 1px, transparent 1px);
  background-size:96px 96px;
  background-position:center top;
  -webkit-mask-image:radial-gradient(ellipse 720px 860px at 50% 400px, #000 0%, rgba(0,0,0,.5) 46%, rgba(0,0,0,0) 90%);
  mask-image:radial-gradient(ellipse 720px 860px at 50% 400px, #000 0%, rgba(0,0,0,.5) 46%, rgba(0,0,0,0) 90%);
}

/* --- soft ambient halo behind the hero --- */
.bg-halo{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 780px 620px at 50% 560px, rgba(124,145,182,.10), transparent 72%),
    radial-gradient(ellipse 540px 360px at 50% 320px, rgba(140,168,214,.075), transparent 70%);
}

/* --- broad, diffuse spotlight column: warmer, wider, reaches the cards --- */
.hero-haze{
  position:absolute;left:50%;top:86px;transform:translateX(-50%);
  width:1010px;height:720px;
  background:linear-gradient(180deg,
    rgba(204,222,248,.28) 0%,
    rgba(190,212,244,.16) 26%,
    rgba(168,196,236,.07) 56%,
    rgba(146,176,224,.02) 78%,
    transparent 100%);
  filter:blur(70px);
  opacity:.5;
}

/* --- corner vignette so the centred composition reads as lit --- */
.bg-vignette{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 1200px 900px at 50% 42%, rgba(3,4,10,0) 45%, rgba(3,4,10,.55) 100%);
}

/* ============================================================
   HEADER
   ============================================================ */
.site-header{
  position:relative;z-index:6;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;
  height:38px;max-width:730px;margin:35px auto 0;padding:0 4px;
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

.eyebrow-row{display:flex;align-items:center;justify-content:center;gap:18px}
.eyebrow-row .rule{
  height:1px;width:46px;flex:none;
  background:linear-gradient(90deg, rgba(186,215,247,0) 0%, rgba(186,215,247,.14) 50%, rgba(186,215,247,0) 100%);
}
.eyebrow{
  font-size:14px;font-weight:400;color:#98a3b6;letter-spacing:.01em;white-space:nowrap;
}
.eyebrow.caps{
  font-family:var(--font-mono);font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#a8b4c8;
}

.hero .eyebrow-row{margin-top:131px}

.wordmark{
  position:relative;
  margin:22px 0 0;
  font-family:var(--font-display);
  font-size:clamp(104px, 11.4vw, 190px);
  font-weight:500;
  line-height:.92;
  letter-spacing:-.025em;
  background:linear-gradient(180deg,#eef6ff 0%,#cfe0f7 42%,#8ab4e6 100%);
  -webkit-background-clip:text;background-clip:text;
  color:transparent;
  -webkit-text-fill-color:transparent;
  user-select:none;
}
.wordmark::before{
  content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:140%;height:200%;z-index:-1;
  background:radial-gradient(ellipse at center, rgba(150,185,230,.18), rgba(150,185,230,.06) 46%, transparent 74%);
  filter:blur(34px);
}

.subtitle{
  margin:4px auto 0;
  font-size:clamp(18px, 1.5vw, 24px);
  line-height:1.3;
  font-weight:400;
  color:#c3cfe4;
  letter-spacing:-.012em;
}

/* registration crosshair marks — two ladders framing the wordmark */
.crosshair{
  position:absolute;left:50%;width:9px;height:9px;pointer-events:none;
  transform:translate(-50%,-50%);
  background:
    linear-gradient(rgba(186,215,247,.42),rgba(186,215,247,.42)) center/1px 9px no-repeat,
    linear-gradient(rgba(186,215,247,.42),rgba(186,215,247,.42)) center/9px 1px no-repeat;
  opacity:.55;
}
.crosshair.l{margin-left:-278px}
.crosshair.r{margin-left:278px}
.crosshair.r1{top:27px}
.crosshair.r2{top:115px}
.crosshair.r3{top:203px}

/* ============================================================
   AUTH CARDS
   ============================================================ */
.cards-stage{
  position:relative;width:734px;height:478px;margin:50px auto 0;
}
.auth-card{
  position:absolute;
  border-radius:16px;
  background-color:rgba(5,6,15,.95);
  background-image:linear-gradient(180deg,
    rgba(38,54,86,.62) 0%,
    rgba(22,33,56,.30) 28%,
    rgba(8,11,20,.06) 46%,
    rgba(5,6,15,0) 62%);
  box-shadow:
    inset 0 1px 1px rgba(216,236,248,.20),
    inset 0 24px 48px rgba(168,216,245,.06),
    inset 0 0 0 1px rgba(199,211,234,.075),
    inset 0 -1px 0 rgba(186,215,247,.06),
    0 16px 32px rgba(0,0,0,.34);
  overflow:hidden;
  text-align:center;
}
.auth-card::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:
    radial-gradient(circle, rgba(216,236,248,.32) 1.2px, transparent 1.8px),
    radial-gradient(circle, rgba(216,236,248,.32) 1.2px, transparent 1.8px),
    radial-gradient(circle, rgba(216,236,248,.32) 1.2px, transparent 1.8px),
    radial-gradient(circle, rgba(216,236,248,.32) 1.2px, transparent 1.8px);
  background-size:6px 6px;
  background-repeat:no-repeat;
  background-position:12px 12px,
                      calc(100% - 14px) 12px,
                      12px calc(100% - 14px),
                      calc(100% - 14px) calc(100% - 14px);
}
.auth-card.center{
  left:171px;top:0;width:392px;height:455px;z-index:3;
  padding:42px 34px 24px;
}
.auth-card.side{
  width:334px;height:380px;top:30px;z-index:2;
  padding:36px 36px 22px;
  background-color:rgba(9,13,24,.9);
  filter:brightness(.92);
}
.auth-card.left{left:0;transform:rotate(-1deg)}
.auth-card.right{left:400px;transform:rotate(1deg)}

.card-logo{width:30px;height:30px;margin:0 auto;color:#cfe0f8;opacity:.9}
.card-title{
  margin:17px 0 0;font-size:16px;font-weight:500;color:#eaf1fc;letter-spacing:-.01em;
  font-family:var(--font-display);
}
.auth-card.side .card-title{color:#eef4fd}
.card-sub{margin:6px 0 0;font-size:13px;color:#8f9bb0;line-height:1.4}
.card-field{margin-top:16px;text-align:left}
.card-field label{display:block;font-size:14px;color:#c7d3ea;margin-bottom:5px}
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
  box-shadow:inset 0 0 0 1px var(--hairline), inset 0 1px 1px rgba(216,236,248,.08);
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
  content:"";flex:1;height:1px;
  background:linear-gradient(90deg,transparent,rgba(186,215,247,.16),transparent);
}

.provider{
  width:100%;height:42px;margin-top:10px;border-radius:999px;
  display:flex;align-items:center;justify-content:center;gap:10px;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
  color:#fff;font-size:14px;font-weight:500;
  transition:background .18s var(--ease);
}
.provider:hover{background:rgba(199,211,234,.12)}
.provider svg{flex:none}

.card-foot{margin:19px 0 0;font-size:14px;color:rgba(199,211,234,.68)}
.card-foot a{color:#fff;font-weight:600}
.card-foot a:hover{text-decoration:underline}

.form-msg{margin:8px 0 0;font-size:12.5px;line-height:1.4;color:#e0eaf9;text-align:left;min-height:0}
.form-msg.error{color:#f0a08a}

.code-row{display:flex;gap:6px;justify-content:center;margin-top:22px}
.code-row span{
  width:36px;height:40px;border-radius:6px;
  background:rgba(199,211,234,.06);
  box-shadow:inset 0 0 0 1px var(--hairline);
}

.card-success{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:14px;min-height:100%;padding:20px 0;
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
.modes{padding:96px 20px 0;position:relative;z-index:2}
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
.feature-row li{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;gap:14px}
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
.feature-label{font-size:14px;color:#a9b4c8;text-align:center;line-height:1.35}

/* ============================================================
   DASHBOARD ILLUSTRATION
   ============================================================ */
.illustration-wrap{margin:64px auto 0;max-width:1080px}
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
.dash-nav span{font-size:13.5px;color:#8b97ac;padding:8px 10px;border-radius:8px}
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
.u-meta i{
  display:block;font-style:normal;font-size:12.5px;color:#8b97ac;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.badge{
  font-size:11.5px;font-weight:500;color:#cfe0f8;padding:4px 9px;border-radius:6px;
  background:rgba(199,211,234,.1);
  box-shadow:inset 0 1px 1px rgba(216,236,248,.13),inset 0 0 0 1px rgba(186,215,247,.07);
  white-space:nowrap;
}
.state-dot{
  width:7px;height:7px;border-radius:999px;background:#5f8fd0;
  box-shadow:0 0 8px rgba(120,170,240,.6);flex:none;
}

/* ============================================================
   CUSTOMIZE
   ============================================================ */
.customize-stage{position:relative;max-width:1180px;margin:64px auto 0;min-height:600px}
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
.browser-body[data-demo-theme="light"]{
  --d-card:#ffffff;
  --d-text:#0c1424;
  --d-muted:#5d6880;
  --d-input:rgba(15,23,42,.045);
  --d-line:rgba(15,23,42,.14);
  --d-prov:rgba(15,23,42,.05);
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
  transition:border-radius .3s var(--ease),background .35s var(--ease),box-shadow .35s var(--ease);
}
.browser-body[data-demo-theme="light"] .demo-card{
  box-shadow:0 12px 28px rgba(20,30,55,.14),0 0 0 1px rgba(15,23,42,.07);
}
.demo-logo{
  display:block;width:28px;height:28px;margin:0 auto 16px;
  background:var(--d-accent,#663af3);
  box-shadow:0 0 20px color-mix(in srgb, var(--d-accent,#663af3) 45%, transparent);
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
  -webkit-backdrop-filter:blur(10px);
}
.inspector h3{
  margin:0 0 12px;font-size:11px;font-weight:500;letter-spacing:.14em;
  text-transform:uppercase;color:#8b97ac;font-family:var(--font-mono);
}
.inspector .value{
  float:right;font-family:var(--font-mono);font-size:11px;color:#7f8ca1;
  letter-spacing:0;text-transform:none;
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
.range::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:999px;background:#dbe8fa;cursor:pointer}
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
dialog.gh-dialog::backdrop{background:rgba(3,4,10,.72);backdrop-filter:blur(5px)}
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
  .customize-stage{
    display:grid;grid-template-columns:1fr 1fr;gap:16px;
    align-items:start;min-height:0;
  }
  .browser{grid-column:1 / -1;width:100%}
  .inspector{position:static;width:auto;float:none}
  .insp-1,.insp-2,.insp-3,.insp-4{left:auto;right:auto;top:auto;bottom:auto}
}

@media (max-width:900px){
  .crosshair{display:none}
  .hero-haze{width:640px;opacity:.36;filter:blur(56px)}
  .hero .eyebrow-row{margin-top:92px}
  .wordmark{margin-top:18px}
  .cards-stage{margin-top:44px}
  .dash{grid-template-columns:1fr}
  .dash-side{
    border-right:0;border-bottom:1px solid rgba(186,215,247,.07);
    display:flex;align-items:center;gap:18px;overflow-x:auto;padding:14px 16px;
  }
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

  .cards-stage{width:100%;height:auto;margin:40px auto 0}
  .auth-card.center{
    position:relative;left:0;top:0;width:310px;max-width:100%;
    height:auto;margin:0 auto;padding:32px 24px 24px;
    transform:none;
  }
  .auth-card.side{
    display:block;position:absolute;top:28px;width:270px;
    height:calc(100% - 42px);padding:28px 22px;
    opacity:.42;pointer-events:none;
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
  <div class="bg-grid"></div>
  <div class="bg-halo"></div>
  <div class="hero-haze"></div>
  <div class="bg-vignette"></div>
</div>

<!-- ============================================================
     HEADER
     ============================================================ -->
<header class="site-header">
  <a class="brand" href="#top">WorkOS</a>

  <div class="header-symbol">
    <svg width="26" height="26" viewBox="0 0 32 32" role="img" aria-label="AuthKit">
      <path d="M16 3 29 16 16 29 3 16Z" fill="#cfe0f8" stroke="#cfe0f8"
            stroke-width="2.4" stroke-linejoin="round" opacity=".92"/>
      <path d="M16 9.2 22.8 16 16 22.8 9.2 16Z" fill="#080b16"/>
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
<!-- ============================================================
     HERO
     ============================================================ -->
<section class="hero">
  <div class="hero-inner">
    <span class="crosshair l r1" aria-hidden="true"></span>
    <span class="crosshair r r1" aria-hidden="true"></span>
    <span class="crosshair l r2" aria-hidden="true"></span>
    <span class="crosshair r r2" aria-hidden="true"></span>
    <span class="crosshair l r3" aria-hidden="true"></span>
    <span class="crosshair r r3" aria-hidden="true"></span>

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
      <div class="card-field" style="margin-top:20px">
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
     Shared success handling
     ------------------------------------------------------------ */
  function showSuccess(config, htmlOrText, isHtml) {
    var body = config.body, success = config.success, textEl = config.text, focusEl = config.focus;
    if (textEl && htmlOrText) {
      if (isHtml) textEl.innerHTML = htmlOrText;
      else textEl.textContent = htmlOrText;
    }
    if (body) body.hidden = true;
    if (success) success.hidden = false;
    if (focusEl) focusEl.focus();
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

  var heroConfig = { body: heroInner, success: heroSuccess, text: heroSuccessText, focus: heroReset };

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
      showSuccess(heroConfig, 'Check your inbox — we simulated a sign-in link.', false);
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
      showSuccess(heroConfig, 'Signed in with ' + name + ' (simulated).', false);
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

  var demoConfig = { body: demoBody, success: demoSuccess, text: demoSuccessText, focus: demoReset };

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
      showSuccess(demoConfig, '<strong>You’re in.</strong><br>This is a local demo — nothing was sent or stored.', true);
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
      showSuccess(demoConfig, '<strong>Signed in with ' + name + '.</strong><br>Simulated locally — no OAuth request was made.', true);
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
    radiusRange.addEventListener('input', function () { applyRadius(radiusRange.value); });
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
  var demoCta = $('#demoCta');
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
     Smooth in-page navigation fallback
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

Visual critique to implement:
# Visual critique — AuthKit hero (1600×1000, plus 390×844 mobile)

**1. Mobile horizontal overflow (scrollWidth 610 vs 390).** `.auth-card.side` is absolutely positioned at `left:-232px` / `right:-232px` with a 270px width, so the right card's far edge lands at x≈622 on a 390px viewport. Body `overflow-x:hidden` isn't clipping document scrollWidth. Fix: add `html{overflow-x:clip}` and, inside `@media (max-width:760px)`, `.cards-stage{overflow:hidden}`. Target scrollWidth = 390 with side cards peeking ~30px.

**2. Wordmark oversized.** At 1600px `.wordmark` resolves to 182px (11.4vw) → glyph span 552px (x 523–1075), cap height ≈126px (y 272–398). Reference: span ≈467px (x 568–1035), cap height ≈110px (y 265–375), i.e. ~157px. Set `font-size:clamp(104px, 9.8vw, 162px)` — 390px mobile stays at the current 104px, so mobile is untouched.

**3. Hero rhythm then breaks.** Shrinking the wordmark moves the subtitle baseline from y≈470 up to ≈447 (reference 448 — correct), but `.cards-stage` would then start at y≈505 vs the reference card top of 525. Raise `.cards-stage{margin-top:50px}` → `70px`.

**4. Centre card content sits ~11px low.** Reference "Sign in to SuperApp" is at y≈618 from a card top of 525 (93px inset); current is 632 from 528 (104px). Reduce `.auth-card.center` top padding 42px → 32px.

**5. Side cards render as black plates.** `background-color:rgba(9,13,24,.9)` + `filter:brightness(.92)` pushes "Welcome to SuperApp"/"Log in to your account" to ~#5a6478 — effectively invisible. Reference side cards are legible frosted glass (title ≈#eef4fd, sub ≈#9aa6bb, body ≈rgb(18,24,42), lighter top gradient stop ≈rgba(52,70,104,.5)). Drop the brightness filter and raise the base to `rgba(17,23,40,.92)`.

**6. Missing vertical light column.** Reference shows a narrow bright cone from under the header (y≈60) descending through the wordmark to the cards, ~260px wide at its base. Current `.hero-haze` (1010×720 at `top:86px`, blur 70px, opacity .5) reads as a wide diffuse blob that leaves the area above the eyebrow dark. Narrow it to ~420px, raise it to `top:40px`, and add a second brighter core layer.

**7. Card surfaces and controls dimmer than reference.** Centre card body reads ≈rgb(12,15,26) vs reference ≈rgb(18,22,38); inputs and the Continue button sit at `.06`/.075 fill and read flush with the card. Raise the card's top gradient stop to rgba(52,70,110,.62), input fill to `rgba(199,211,234,.09)`, Continue fill to `.10`.

**8. Background grid too fine and over-masked.** `background-size:96px` with a radial mask centred at y=400 makes cells invisible behind the header (y<200) and below the card fan. Reference shows ≈200px cells with crosshair intersections visible across the whole hero. Set `background-size:200px 200px` and widen the mask ellipse/falloff.

Items 1–3 are the highest impact; 5 materially changes how the hero reads against the reference.

Architect plan:
## Implementation plan

### 1. File and visual priorities
Deliver one self-contained `index.html`: semantic HTML, inline CSS, inline SVG symbols and vanilla JavaScript. No external assets, fonts, dependencies or network requests.

Treat the screenshot as authoritative: this is a subdued, nearly monochromatic composition, not a bright glassmorphism landing page. In particular, **hero Continue buttons appear dark and outlined**, despite the generic violet-button rule. Reserve violet for the lower interactive customization demo.

### 2. Desktop first viewport: 1600 × 1000
Use a near-black `#05060f` canvas. Center the composition at **x=800**. Although lower sections can reach 1200px wide, the visible header and hero cards occupy approximately 760px.

- **Header:** top around 35px; height 38px. WorkOS starts at x≈447, vertically centered at y≈54, in muted blue-gray, 18px medium. Center an angular, mirrored-bracket AuthKit symbol at x=800, approximately 36×34px. Place the circular GitHub control at x≈1041, 36px square, then a 106×36px Get started pill at x≈1093. Use faint inset edges and minimal fills.
- **Introducing:** centered at y≈214, 14px, sentence case as pictured. Add short, barely visible fading rules on either side.
- **AuthKit:** target visible letter bounds approximately **x=561–1039, y=265–370**. Start with a 144–150px medium sans-serif and adjust font size/tracking to achieve that silhouette. Keep the heading’s line box around y=247–385. Use a restrained pale steel-blue gradient, not white neon.
- **Subtitle:** centered, 24px regular, approximately 30px line height. Preserve exactly:
  “The world’s best login box,”
  “powered by WorkOS + Radix.”
  Its visible bounds should run approximately y=404–455.
- Start the card arrangement at y≈521. Do not add a separate hero CTA or extra explanatory copy.

### 3. Auth-card composition
The **central card is x≈604, y≈521, width≈392px, height≈459px**, ending near the viewport bottom. Use 16px corners and 35–36px horizontal inner padding.

Inside, place a faint circular geometric logo at y≈578, “Sign in to SuperApp” around y≈619, then:
- Email label and a 320×34px rounded input around y≈670.
- Dark outlined Continue button around y≈718.
- Quiet OR divider around y≈787.
- Google and Microsoft buttons around y≈822 and 870.
- Muted signup sentence around y≈929.

Use 14px form text, 16px title, monochrome provider symbols, and low-contrast blue-white edges.

Behind it, place two approximately **334×380px** cards:
- Left: x≈433, top≈555.
- Right: x≈833, top≈555.

Their outer edges end near y≈935. Apply only a very slight opposing perspective/skew: these are almost upright plates, not an exaggerated rotating fan. The center card fully occludes their inner content. Left shows an email login; right shows an authenticator-code flow. Add tiny frost-colored corner registration dots matching the screenshot. Keep side cards dimmer than the center.

### 4. Lighting and typography
Construct the atmosphere with layered CSS gradients:
1. Near-black base.
2. Broad, extremely faint cool haze behind the hero.
3. A blurred spotlight beginning beneath the centered header symbol, widening toward the subtitle and cards.
4. A subtle local glow behind the wordmark.

Avoid saturated purple, rainbow blooms or luminous card outlines.

Grid lines should be nearly subliminal and fade toward all outer edges. Emphasize vertical guides near **x=471, 543, 1055 and 1127**, with horizontal guides near **y=105, 177, 249, 385 and 471**. Add tiny intersection marks on the inner guides.

Cards use dark navy translucent fills, a delicate top inset highlight, broad faint inner illumination and restrained black depth shadows. No heavy blur of foreground text.

Use system sans-serif fallbacks resembling Untitled Sans/Aeonik; regular or medium display weights. Lower eyebrows use 15px tracked monospace capitals.

### 5. Below-hero rhythm
Place the centered moon/sun segmented switch after the cards, followed by six connected circular feature icons: Single Sign-On, Password, MFA, Social Login, RBAC and Magic Auth.

Maintain approximately 120px between major sections:
- **EXTENSIBLE BY DESIGN:** “Your users. Your data. Maximum flexibility.” Use a 44–48px centered heading, concise muted supporting copy and a frosted dashboard illustration containing sidebar navigation, user rows and authentication badges.
- **SHINE BRIGHT:** “Your brand. Your style.” Follow with a browser-frame illustration containing a usable login card and floating inspector panels.

Include color swatches, radius control and dark/light selection. Keep desktop illustrations within 1000–1100px.

### 6. Responsive and local behavior
At 390px, use 20px page gutters, retain the centered header symbol, reduce AuthKit to approximately 88px and subtitle to 19px. Center a 310px-wide primary card around y=400; show narrow, dim side-card glimpses behind it. Clip only decorative overflow and disable obscured side-card interactions. Stack feature icons in a 3×2 grid and customization controls below their preview.

Get started scrolls to customization; WorkOS returns to top; GitHub opens an accessible local project-information dialog. Theme controls alter demo surfaces only. Swatches change the demo CTA/logo, and radius controls visibly update card/input geometry.

Forms prevent submission, validate email and six-digit dummy codes where applicable, clear entered values and show a local success/reset state. Provider buttons simulate success without OAuth. Never send or persist credentials. Provide visible keyboard focus, accessible labels, live status announcements, dialog Escape/focus handling and reduced-motion support.

Implement the visual fixes. Preserve functional controls. Return a complete replacement index.html only, all CSS and JavaScript inline.

Browser diagnostics to repair:
{"qa-mobile.json": {"height": 844, "scrollWidth": 610, "width": 390}, "qa-form.json": {"feedback": ["Check your inbox \u2014 we simulated a sign-in link.", "Demo only. Nothing was sent or stored.", "ubmitted. A sign-in link was simulated locally. Nothing was sent."], "url": "http://127.0.0.1:8765/results/deepastra-loop-2/index.html"}}