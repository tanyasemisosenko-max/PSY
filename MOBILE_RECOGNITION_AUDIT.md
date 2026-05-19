# Mobile Recognition Audit

Project: Примерочная себя  
Branch: mobile-rebuild  
Screen: 2 — Recognition  
Status: passed / ready for commit

## Summary

Mobile Recognition was rebuilt as a separate vertical “self-recognition” flow according to MOBILE_RECOGNITION_REBUILD_SPEC.md.

Mobile order:

1. Title
2. Subtitle
3. Photo
4. Recognition cards
5. Quote
6. CTA
7. Transition to requests section

## Checked widths

### 360px

window.innerWidth: 360  
Horizontal scroll: no  
Title readable: yes  
Subtitle readable: yes  
Photo visible and centered: yes  
Cards 2×3 readable: yes  
Quote readable: yes  
CTA visible: yes  
Overlaps or clipping: no  
Transition to #requests: clean  
Issues: none critical

### 375px

window.innerWidth: 375  
Horizontal scroll: no  
Title readable: yes  
Subtitle readable: yes  
Photo visible and centered: yes  
Cards 2×3 readable: yes  
Quote readable: yes  
CTA visible: yes  
Overlaps or clipping: no  
Transition to #requests: clean  
Issues: none critical

### 390px

window.innerWidth: 390  
Horizontal scroll: no  
Title readable: yes  
Subtitle readable: yes  
Photo visible and centered: yes  
Cards 2×3 readable: yes  
Quote readable: yes  
CTA visible: yes  
Overlaps or clipping: no  
Transition to #requests: clean  
Issues: none critical

### 414px

window.innerWidth: 414  
Horizontal scroll: no  
Title readable: yes  
Subtitle readable: yes  
Photo visible and centered: yes  
Cards 2×3 readable: yes  
Quote readable: yes  
CTA visible: yes  
Overlaps or clipping: no  
Transition to #requests: clean  
Issues: none critical

### 430px

window.innerWidth: 430  
Horizontal scroll: no  
Title readable: yes  
Subtitle readable: yes  
Photo visible and centered: yes  
Cards 2×3 readable: yes  
Quote readable: yes  
CTA visible: yes  
Overlaps or clipping: no  
Transition to #requests: clean  
Issues: none critical

## Note

When scrolling directly to quote or CTA, the upper card row can move above the viewport. This is expected scroll behavior and not a layout issue. The full cards grid is visible when scrolling to .recognition-cards.

## Result

Recognition passed mobile validation on:

- 360px
- 375px
- 390px
- 414px
- 430px

No horizontal scroll.  
No text clipping.  
No layout breaking.  
Clean transition to #requests.  
Desktop was not touched.

## Separate issue

Tablet/laptop range 641–960px has a separate layout issue caused by desktop absolute positioning and should not be fixed inside this mobile Recognition task.

## Next step

Commit mobile Recognition CSS changes and this audit report after final git status check.