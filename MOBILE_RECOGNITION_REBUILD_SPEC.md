# Mobile Recognition Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 2 — Recognition
Status: approved structure / ready for implementation

## Core principle

Mobile recognition is not a scaled desktop section.
Mobile recognition is a separate vertical "self-recognition" scenario.

## Mobile order

1. Title
2. Subtitle
3. Photo
4. Recognition cards
5. Quote
6. CTA
7. Soft transition to requests section

## Keep on mobile

- h2.recognition-title
- p.recognition-subtitle
- .recognition-photo with photos/Таня 2.2.png
- ul.recognition-cards with all 6 cards
- p.recognition-quote
- a.recognition-button

## Hide on mobile

- .recognition-left-decor-wrap
- decorative left image
- header.site-header inside recognition section
- nav inside recognition header
- header button inside recognition header
- .recognition-divider

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No absolute positioning for meaningful content
- Use padding, gap, flex/grid
- Photo centered, width 100%, max-width around 340px
- Cards as mobile grid 2 columns × 3 rows
- Cards should not rely on fixed desktop 176×196px sizes
- Quote after cards, full width, readable
- CTA after quote, width 100% or max-width around 340px
- Clean transition to #requests

## Desktop dependencies to remove on mobile

- Fixed section height / canvas
- position: absolute for content and photo
- desktop left/top/right coordinates
- fixed desktop content width 580px
- fixed desktop photo size
- desktop 3-column card grid
- duplicated desktop header inside section
- decorative absolute left layer
- permanent reliance on display: contents + order as a workaround

## Acceptance criteria

Recognition can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- photo centered
- cards readable
- quote readable
- CTA visible
- no overlaps
- clean transition to #requests
- desktop remains unchanged
