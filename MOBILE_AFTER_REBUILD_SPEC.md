# Mobile After Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 5 — After
Status: approved structure / ready for implementation

## Core principle

Mobile After is not a scaled desktop section.
Mobile After is a separate vertical “what happens after the request” scenario.

## Mobile order

1. Title
2. Subtitle
3. Four steps
4. Quote
5. Photo
6. CTA
7. Hero micro text
8. Soft transition to About section

## Keep on mobile

- section heading h2
- .section-sub
- ol.steps-grid with all 4 li.step items
- .step-icon
- step title h4
- step text p
- .quote-soft
- .after-image with photos/5.png
- .after-cta
- .btn.btn-primary
- .hero-micro

## Hide on mobile

- .after-topbar
- .after-logo
- .after-nav
- .after top button
- #after::before
- #after::after
- desktop background PNG and gradient
- desktop two-column layout

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Steps should be one column
- Step icon must be in normal flow, not absolute
- Step text should not depend on margin-left 96px
- Quote after steps
- Photo after quote, before CTA
- Photo centered, width 100%, max-width around 320–340px
- CTA after photo
- Hero micro text under CTA
- Clean transition to #about

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #after::before and #after::after desktop backgrounds
- .after-grid two-column layout
- .step-icon position absolute
- .step > div margin-left 96px
- .after-text transform translateY(32px)
- desktop topbar / nav / top button
- hiding .after-image on mobile
- reliance on general max-width 960px styles instead of mobile rebuild

## Acceptance criteria

After can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle readable
- all 4 steps readable
- quote readable
- photo visible and centered
- CTA visible
- hero micro readable
- clean transition to #about
- desktop remains unchanged