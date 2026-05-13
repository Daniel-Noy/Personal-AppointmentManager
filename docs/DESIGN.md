---
name: ScheduleManager
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#464740'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#777870'
  outline-variant: '#c7c7be'
  surface-tint: '#5d6053'
  primary: '#24271d'
  on-primary: '#ffffff'
  primary-container: '#3a3d32'
  on-primary-container: '#a5a899'
  inverse-primary: '#c6c8b9'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f4dfcb'
  on-secondary-container: '#716252'
  tertiary: '#242626'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a3c3c'
  on-tertiary-container: '#a5a6a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e4d4'
  primary-fixed-dim: '#c6c8b9'
  on-primary-fixed: '#1a1d13'
  on-primary-fixed-variant: '#45483d'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0e'
  on-secondary-fixed-variant: '#524436'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is an intersection of hospitality and precision. This design system aims to evoke a sense of calm, high-end service, and organized professionalism. It targets a clientele that values both the artisanal craft of grooming and the seamless efficiency of modern technology.

The visual style is **Minimalist with Tactile Warmth**. It avoids the clinical coldness often found in SaaS products by utilizing organic tones and soft transitions. The interface prioritizes generous whitespace, intentional alignment, and a high-contrast relationship between deep brand colors and off-white surfaces to ensure an premium, editorial feel.

## Colors

The palette is rooted in organic, earth-inspired tones to provide a grounded and welcoming experience.

- **Primary Olive (#3A3D32):** Used for primary actions, navigation headers, and formal brand elements. It provides the "anchor" for the design's elegance.
- **Secondary Sand & Wood (#D9C5B2, #A68966):** These are used for secondary UI elements, decorative accents, and to highlight selection states. They introduce the "warmth" of a high-end physical salon.
- **Charcoal Text (#2F3131):** Used for maximum legibility in body copy and headings, softer than true black to maintain the warm aesthetic.
- **Off-White Background (#F9F8F6):** A gentle, non-reflective base that reduces eye strain and reinforces the "clean" salon environment.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition and modernity.

- **Headings:** **Playfair Display** provides an editorial, luxurious feel. It should be used for page titles and significant section headers.
- **Body & UI:** **Manrope** provides a highly legible, modern sans-serif experience. Its geometric yet friendly terminals maintain the professional tone required for scheduling and management tasks.
- **Labels:** Use Manrope with increased letter spacing and uppercase styling for small metadata or section labels to ensure they are distinct from body text.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain a boutique, curated feel, transitioning to a fluid model for mobile.

- **Grid:** 12-column system on desktop with a 24px gutter.
- **Rhythm:** An 8px linear scale is used for all internal component spacing (padding/margins).
- **Desktop:** Generous 48px margins to allow the content to "breathe," reflecting the spaciousness of a luxury salon.
- **Mobile:** Scale margins down to 16px. Use a single-column vertical stack for cards and forms.

## Elevation & Depth

Visual hierarchy is achieved through **Ambient Shadows** and **Tonal Layers**.

- **Surface Tiers:** The base layer is the Off-White background. Primary content containers (Cards, Modals) use a pure White (#FFFFFF) surface to lift them visually.
- **Shadows:** Use extremely soft, long-range shadows with a slight warm tint (`rgba(58, 61, 50, 0.05)`) to mimic natural interior lighting.
- **Depth Levels:**
  - **Level 0:** Background surfaces.
  - **Level 1:** Standard cards and input fields (subtle 2px blur).
  - **Level 2:** Hover states and dropdown menus (8px blur).
  - **Level 3:** Modals and floating action buttons (16px+ blur).

## Shapes

The shape language is **Soft**. It avoids harsh 90-degree angles to remain approachable, but avoids overly round "bubble" aesthetics to maintain professional elegance.

- **Buttons & Inputs:** Use a consistent 0.25rem (4px) radius.
- **Cards:** Use 0.5rem (8px) for a more pronounced but still refined corner.
- **Iconography:** Use line-based icons with a 1.5pt or 2pt stroke weight and slightly rounded caps to match the typography.

## Components

### Buttons
- **Primary:** Deep Olive (#3A3D32) background with White text. Smooth 200ms background-color transition on hover.
- **Secondary:** Sand (#D9C5B2) background with Charcoal text. 
- **Ghost:** Transparent background with Charcoal text and a thin 1px Sand border.

### Cards
- Pure White background, 8px corner radius, and the Level 1 ambient shadow. Padding should be a minimum of 24px (stack-lg) to maintain an airy feel.

### Input Fields
- Off-white background with a subtle 1px border in Sand (#D9C5B2). On focus, the border shifts to Deep Olive with a soft glow effect.

### Chips & Badges
- Used for "Service Type" or "Staff Member." Use the Warm Beige (#F2E8DF) background with Charcoal text for a soft, low-impact visual.

### Appointment Calendar
- The core of the product. Use high-contrast "Olive" blocks for occupied time and "Sand" for pending or suggested slots. Ensure plenty of padding between time rows to prevent a cluttered appearance.