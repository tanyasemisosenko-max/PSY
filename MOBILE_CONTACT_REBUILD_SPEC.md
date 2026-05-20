# Mobile Contact Rebuild Spec

Project: Примерочная себя
Branch: mobile-rebuild
Screen: 10 — Contact/Form
Status: approved structure / ready for implementation

## Core principle

Mobile Contact is not a scaled desktop section.
Mobile Contact is a separate vertical “first step / booking” scenario.
The form and modal logic must remain functionally intact.
Only layout can be changed in CSS.

## Mobile order

1. Title
2. Subtitle
3. Photo
4. Form head
5. Form fields
6. Checkbox and privacy link
7. Submit button
8. Form micro text
9. Direct contacts
10. Footer transition

## Keep on mobile

- #contact / .contact
- h2 inside .contact-text
- .section-sub inside .contact-text
- .contact-image-wrap
- .contact-image with photos/4.png
- form.contact-form[data-form]
- .contact-form-head
- .contact-form-title
- .contact-form-lead
- all 3 .form-row items
- input[name="name"]
- input[name="contact"]
- textarea[name="message"]
- checkbox input[required]
- .contact-privacy-link[data-privacy-open]
- button[type="submit"]
- .contact-form-micro
- .contact-direct.contact-direct--form
- success modal
- privacy modal

## Hide on mobile

- .contact-topbar
- .contact-logo
- .contact-nav
- .contact top button
- #contact::before
- desktop PNG background
- desktop absolute layout
- mobile sticky CTA if it conflicts with the form

## Mobile layout rules

- One vertical section
- Content in normal document flow
- No desktop 1448×1086 canvas logic
- No fixed 1086px height
- No desktop topbar on mobile
- Use padding, gap, flex/grid
- Contact grid should become one column
- Contact text should be in flow
- Subtitle should be visible on mobile
- Photo should be visible after subtitle
- Photo centered, width 100%, max-width around 320–340px
- Form after photo
- Form width 100%, max-width around 340–360px, centered
- Form fields full width
- Checkbox and privacy link readable and clickable
- Submit button full width
- Micro text after submit
- Direct contacts after micro text
- Clean transition to footer

## Form safety rules

Do not change:

- form[data-form]
- input name attributes
- input id attributes
- textarea name/id attributes
- required attributes
- checkbox type
- submit button type
- data-privacy-open
- data-contact-modal
- hidden attributes
- script.js
- Google Sheets URL
- submit logic
- success modal logic
- privacy modal logic

CSS must not:

- hide form fields
- block pointer events on fields or buttons
- overlay invisible elements over the form
- make submit button inaccessible
- break focus visibility
- break modal z-index or fixed overlay behavior

## Modal rules

Do not move modals into the section.
Do not change modal HTML or JS.
Keep:

- #contact-success-modal
- #contact-privacy-modal
- [data-contact-modal]
- .dressing-modal-overlay
- .dressing-modal
- .dressing-modal-close

## Direct contacts

Keep direct contacts inside the form after micro text.
Telegram and email links must stay clickable.
Do not duplicate footer contacts inside the section.

## Desktop dependencies to remove on mobile

- fixed desktop canvas 1448×1086
- overflow hidden as layout dependency
- #contact::before desktop background
- absolute positioning of .contact-topbar
- absolute positioning of .contact-text h2
- absolute positioning of .contact-form
- .contact-grid desktop two-column/block logic
- hiding .contact-image-wrap on mobile
- globally hidden contact subtitle
- reliance on general max-width 960px styles instead of mobile rebuild
- fixed desktop form dimensions

## Acceptance criteria

Contact can be accepted only after testing on:

- 360px
- 375px
- 390px
- 414px
- 430px

Checks:

- no horizontal scroll
- title readable
- subtitle visible and readable
- photo visible and centered
- form visible
- all fields usable
- checkbox usable
- privacy link opens modal
- submit button visible
- success modal still opens after submit test
- direct contacts clickable
- clean transition to footer
- desktop remains unchanged