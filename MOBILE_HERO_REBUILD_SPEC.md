# Mobile Hero Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 1 — Hero
Status: approved structure / ready for implementation

## Core principle

Mobile hero is not a scaled desktop hero.
Mobile hero is a separate vertical first screen with the same meaning and style.

## Mobile order

1. Logo
2. H1
3. Subtitle
4. Primary CTA
5. Hero note
6. Photo
7. Soft transition to recognition section

## Keep on mobile

- Text logo «Примерочная себя»
- H1
- Hero description
- Primary CTA «Записаться на первую встречу»
- Hero note
- Photo photos/Таня1.1.png

## Hide on mobile

- hero-left-composition decorative image
- main navigation
- header button
- secondary CTA
- desktop absolute hero-benefits
- desktop decorative photo gradient if it hurts readability

## Mobile layout rules

- One column
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No desktop grid 775px + 633px
- No transform positioning for title or subtitle
- No absolute positioning for meaningful content
- Use padding, gap, flex/grid
- Photo should be in normal flow, centered, width 100%, max-width around 340px
- Primary CTA should be full-width or max-width around 340px

## Hero-benefits decision

On mobile ≤640px hide hero-benefits for now.
If benefits are needed later, rebuild them as a separate compact block below the photo, not as an absolute desktop plaque.

## Acceptance criteria

Hero can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- H1 readable
- subtitle readable
- CTA visible
- photo does not break layout
- no overlaps
- desktop remains unchanged
