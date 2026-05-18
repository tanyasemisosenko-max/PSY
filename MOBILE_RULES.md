# Mobile Rules

Project: Примерочная себя
Branch: mobile-rebuild
Desktop: frozen, do not touch
Main: do not touch

## Core principle

Mobile is not a scaled desktop.
Mobile is a separate vertical version of the same website.

## Layout rules

- Do not change desktop sections 1–10.
- Do not change published main.
- Do not use desktop fixed canvas logic for mobile.
- Do not rely on 1448×1086 layout.
- Do not use position: absolute for meaningful mobile content.
- position: absolute is allowed only for decorative elements.
- Text, buttons, cards and forms must stay in normal document flow.
- Use flex/grid, padding and gap instead of exact x/y coordinates.
- Backgrounds are decorative and must not contain critical meaning.

## Target mobile widths

- 360px
- 375px
- 390px
- 414px
- 430px

## Acceptance criteria

A mobile screen is accepted only if:

- no horizontal scroll;
- title is readable;
- text is not clipped;
- CTA is visible or logically placed;
- no overlaps;
- spacing is balanced;
- form and popups still work;
- desktop remains unchanged.
