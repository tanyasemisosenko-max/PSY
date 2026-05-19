# Mobile Reviews Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 9 — Reviews
Status: approved structure / ready for implementation

## Core principle

Mobile Reviews is not a scaled desktop section.
Mobile Reviews is a separate vertical “voices from the fitting room” scenario.

## Mobile order

1. Title
2. Subtitle
3. Four review cards
4. Confidentiality note
5. CTA
6. Soft transition to Contact section

## Keep on mobile

- section heading h2
- .section-sub
- ul.reviews-grid with all 4 reviews
- .review-quote
- .review-text
- .review-divider
- review footer with author and meta
- .reviews-note
- .section-cta
- CTA button to #contact

## Hide on mobile

- .reviews-topbar
- .reviews-logo
- .reviews-nav
- .reviews top button
- #reviews::before
- desktop PNG background
- desktop absolute layout

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Reviews should be one column × 4 rows
- Review cards centered, width 100%, max-width around 340–360px
- Review card height auto
- Review quote must be in normal flow, not absolute
- Review divider should be visible on mobile
- Reviews note after all cards
- CTA after note
- Clean transition to #contact

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #reviews::before desktop background
- absolute positioning of .section-head, h2, .section-sub
- absolute positioning of .reviews-grid
- absolute positioning of .reviews-note
- absolute positioning of .section-cta
- desktop 4-column review grid
- fixed 205×150 review cards
- hiding .review-quote on desktop
- hiding .review-divider on desktop
- base absolute positioning of .review-quote
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

Reviews can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- all 4 review cards readable
- quote mark does not overlap review text
- review divider visible
- reviews note readable
- CTA visible
- clean transition to #contact
- desktop remains unchanged