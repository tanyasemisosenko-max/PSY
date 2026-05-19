# Mobile About Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 6 — About
Status: approved structure / ready for implementation

## Core principle

Mobile About is not a scaled desktop section.
Mobile About is a separate vertical “meeting Tatiana” scenario.

## Mobile order

1. Title
2. Subtitle
3. Photo
4. Divider
5. Body text
6. Quote
7. CTA
8. Soft transition to Approach section

## Keep on mobile

- section heading h2
- .section-sub.accent
- .about-image with photos/2.png
- .about-divider
- .about-body with all 4 paragraphs
- .about-quote
- .quote-mark
- .btn.btn-primary

## Hide on mobile

- .about-topbar
- .about-logo
- .about-nav
- .about top button
- #about::before
- desktop PNG background
- desktop absolute topbar
- trust markers if they appear and are not part of mobile flow

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Photo should be visible on mobile
- Photo centered, width 100%, max-width around 320–340px
- Body text after divider
- Body paragraphs as vertical stack
- Quote after body text
- Quote mark must not overlap content
- CTA after quote
- Clean transition to #approach

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #about::before desktop background
- .about-topbar absolute layout
- .about-text absolute positioning
- .about-body / .about-quote desktop coordinates
- .about-grid desktop two-column logic
- desktop hiding of .about-image
- desktop hiding of .about-divider
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

About can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- photo visible and centered
- divider visible
- body text readable
- quote readable
- CTA visible
- clean transition to #approach
- desktop remains unchanged