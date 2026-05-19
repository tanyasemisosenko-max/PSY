# Mobile Formats Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 4 — Formats
Status: approved structure / ready for implementation

## Core principle

Mobile Formats is not a scaled desktop section.
Mobile Formats is a separate vertical “format choice” scenario.

## Mobile order

1. Title
2. Subtitle
3. Decorative divider
4. Three format cards
5. CTA
6. Note
7. Soft transition to After section

## Keep on mobile

- .formats-title
- .formats-subtitle
- .formats-decor
- .formats-grid with all 3 .format-card items
- format card icon
- format card title
- format card divider
- format card text
- format tags
- .formats-cta
- .formats-note / .format-note

## Hide on mobile

- .formats-topbar
- .formats-logo
- .formats-nav
- .formats-top-button
- .formats-scene and all decorative scene layers
- desktop pseudo-backgrounds #formats.formats::before and #formats.formats::after
- desktop full-screen PNG background

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Divider should be in flow, centered
- Cards should be one column × 3 rows
- Cards should be centered
- Card width: 100%, max-width around 340–360px
- Cards stay clickable
- CTA after cards
- Note under CTA
- Clean transition to #after

## Desktop dependencies to remove on mobile

- fixed desktop canvas width/max-width 1448px
- height/min-height/max-height 1086px
- overflow hidden as layout dependency
- #formats.formats::before and ::after full-bleed PNG layers
- absolute positioning of .formats-decor
- desktop .formats-grid width 960px
- desktop 3-column grid
- fixed card height around 306px
- desktop topbar / nav / top button
- decorative scene layers
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

Formats can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- divider visible and not disruptive
- all 3 cards readable
- cards clickable
- CTA visible
- note readable
- clean transition to #after
- desktop remains unchanged