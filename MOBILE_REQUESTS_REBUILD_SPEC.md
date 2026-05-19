# Mobile Requests Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 3 — Requests
Status: approved structure / ready for implementation

## Core principle

Mobile Requests is not a scaled desktop section.
Mobile Requests is a separate vertical “work topics” scenario.

## Mobile order

1. Title
2. Subtitle
3. Six request cards
4. Foot text
5. CTA
6. Soft transition to Formats section

## Keep on mobile

- .requests-title
- .requests-subtitle
- .requests-grid with all 6 .requests-card items
- .requests-card-icon
- .requests-card-icon-img
- .requests-card-title
- .requests-card-text
- .requests-foot
- .requests-cta
- .requests-button
- request-letter-overlay logic

## Hide on mobile

- .requests-topbar
- .requests-logo
- .requests-nav
- .requests-top-button
- .requests-left-decor
- .requests-right-decor
- desktop decorative background layer

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px section height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Cards should be a 2-column × 3-row mobile grid
- Cards should use vertical anatomy: icon, title, text
- Icons should be compact and centered
- CTA should be after foot text
- CTA width: 100% or max-width around 340px
- Clean transition to Formats section

## Request cards

Cards remain clickable.
Do not change HTML or JS logic.
Do not change data-request-letter behavior.

Mobile card structure:

- icon centered on top
- title below icon
- text below title
- readable spacing
- no horizontal desktop card layout

## Request letter overlay

Do not change HTML or JS in this task.
Overlay remains global after the section.

Later mobile CSS should make the modal:

- full-screen or almost full-screen
- with safe inner padding
- with internal scroll for long letter text
- with close button easy to reach
- without desktop absolute positioning dependency

## Desktop dependencies to remove on mobile

- min-height: 1086px
- desktop 1448×1086 canvas logic
- overflow hidden as layout dependency
- 3-column desktop grid
- grid-template-columns: repeat(3, minmax(330px, 1fr))
- horizontal card grid with 96px icon column
- desktop title size 82px
- fixed 370px button width
- desktop topbar / nav
- decorative absolute layers

## Acceptance criteria

Requests can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- all 6 cards readable
- cards clickable
- overlay opens
- overlay closes
- foot text readable
- CTA visible
- clean transition to Formats
- desktop remains unchanged