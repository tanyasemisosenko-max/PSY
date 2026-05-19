# Mobile Process Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 8 — Process
Status: approved structure / ready for implementation

## Core principle

Mobile Process is not a scaled desktop section.
Mobile Process is a separate vertical “how the work goes” scenario.

## Mobile order

1. Title
2. Subtitle
3. Four process cards
4. Photo
5. Hero micro text
6. CTA
7. Soft transition to Reviews section

## Keep on mobile

- section heading h2
- .section-sub
- ul.cards-grid.cards-2.cards-process with all 4 cards
- card icon
- card title
- card text
- .process-image with photos/3.png
- .hero-micro
- CTA button to #formats

## Hide on mobile

- .process-topbar
- .process-logo
- .process-nav
- .process top button
- #process::before
- desktop PNG background
- desktop absolute layout

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Cards should be one column × 4 rows
- Cards centered, width 100%, max-width around 340–360px
- Cards should use vertical anatomy: icon, title, text
- Photo after cards
- Photo centered, width 100%, max-width around 320–340px
- Hero micro visible after photo
- CTA after hero micro
- Clean transition to #reviews

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #process::before desktop background
- absolute positioning of .process-text
- absolute positioning of .section-head, h2, .section-sub
- absolute positioning of .cards-grid
- absolute positioning of CTA
- .process-grid desktop two-column/block logic
- hiding .process-image on mobile
- hiding .hero-micro on mobile
- fixed process card height around 219px
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

Process can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- all 4 cards readable
- photo visible and centered
- hero micro readable
- CTA visible
- clean transition to #reviews
- desktop remains unchanged