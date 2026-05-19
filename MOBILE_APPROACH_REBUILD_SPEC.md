# Mobile Approach Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 7 — Approach
Status: approved structure / ready for implementation

## Core principle

Mobile Approach is not a scaled desktop section.
Mobile Approach is a separate vertical “how I work” scenario.

## Mobile order

1. Title
2. Subtitle
3. Three approach cards
4. Quote with branch
5. CTA
6. Soft transition to Process section

## Keep on mobile

- section heading h2
- .section-sub
- ul.cards-grid.cards-3 with all 3 cards
- card icon
- card title
- card text
- .approach-quote
- .approach-quote-text
- .quote-branch
- .section-cta
- CTA button to #process

## Hide on mobile

- .approach-topbar
- .approach-logo
- .approach-nav
- .approach top button
- #approach::before
- desktop PNG background
- desktop absolute layout

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Cards should be one column × 3 rows
- Cards centered, width 100%, max-width around 340–360px
- Cards should use vertical anatomy: icon, title, text
- Quote after cards
- Quote branch should be in flow, not absolute
- CTA after quote
- Clean transition to #process

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #approach::before desktop background
- absolute positioning of .approach-topbar
- absolute positioning of .section-head, h2, .section-sub
- absolute positioning of .cards-grid
- absolute positioning of .approach-quote
- absolute positioning of .approach-quote-text
- absolute positioning of .quote-branch
- absolute positioning of .section-cta
- fixed card sizes 379×283
- desktop 3-column grid
- transform translateY(-50%) on quote text
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

Approach can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- all 3 cards readable
- quote readable
- branch does not overlap
- CTA visible
- clean transition to #process
- desktop remains unchanged