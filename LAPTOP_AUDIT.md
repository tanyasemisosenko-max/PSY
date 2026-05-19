# Laptop Audit

Project: Примерочная себя
Branch: mobile-rebuild
Scope: laptop widths
Status: issue confirmed / needs separate laptop layer

## Summary

Laptop issue is confirmed.
The site uses a fixed desktop canvas around 1448px. On laptop widths 1280px and 1366px, the layout is wider than the viewport. Because body has overflow-x hidden, there is no visible horizontal scrollbar, but the right side of the desktop composition can be clipped.
This is not a mobile issue and not caused by current mobile styles for max-width 640px.

## Checked widths

### 1280px

Problems: yes
Issues:
- desktop content is wider than viewport by about 168px
- right side of the layout is clipped
- hero photo/right column can be near edge or partly outside viewport
- header button "Записаться" can be too far right
- second CTA and benefits can be near edge or outside visible area
- similar risk exists for Recognition, Requests and screens 3-10 because of absolute positioning and right columns

### 1366px

Problems: yes, weaker
Issues:
- desktop content is wider than viewport by about 82px
- slight right-edge clipping
- header button, hero/recognition photo and right-side CTA can be close to edge or partly clipped

### 1440px

Problems: yes, minimal
Issues:
- desktop content is wider than viewport by about 8px
- almost fits
- possible slight edge clipping
- hero and buttons are mostly readable

## Cause

The issue comes from fixed desktop canvas logic:
- desktop sections around 1448px
- absolute positioning
- right-side columns and buttons
- overflow-x hidden hides the overflow instead of showing the problem

## Conclusion

This is a laptop issue, not a mobile issue.
A separate laptop layer is needed for approximately:
961px-1447px
Goal:
Show the desktop scenario on laptop without clipping the right side.

## Recommendation

Do not fix laptop inside the mobile Recognition task.
Create a separate task later:
Laptop Layer / 961-1447px
Possible solution direction:
- keep desktop design for 1448px+
- add laptop adaptation for 1280 / 1366 / 1440px
- scale or constrain desktop canvas safely
- prevent right-side clipping
- keep desktop 1448+ unchanged
