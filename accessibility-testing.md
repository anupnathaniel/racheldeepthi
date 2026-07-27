# Accessibility and Responsive Testing Notes

Target: WCAG 2.2 Level AA. Do not claim full conformance until manual assistive-technology testing is complete.

## Completed in this build

- Lint, TypeScript checking, the production build and server-render route tests passed.
- Home, Contact and Videos were inspected through the in-app browser.
- 320px and 390px phone layouts, an 820px tablet layout and a 1440px desktop layout showed no horizontal overflow.
- The responsive navigation switched correctly between mobile and desktop modes.
- The mobile menu exposed `aria-expanded`, closed with Escape, unlocked body scrolling and returned focus to the menu button.
- Home, Contact and Videos each exposed one `h1` in the inspected DOM.
- The contact form focused the first invalid field, displayed an error summary and preserved the official safe fallback when delivery credentials were absent.
- Video filtering produced a clear empty state.
- No YouTube iframe loaded while external-media consent was rejected.
- A fresh browser load produced no console errors or warnings.

Pending before public/custom-domain launch: a formal Axe scan, Lighthouse mobile/desktop audit and manual testing with at least one production screen reader.

## Automated checks

- Run `pnpm run lint`.
- Run `pnpm run typecheck`.
- Run `pnpm run build`.
- Run Axe on Home, Programs, a program detail, Videos, Contact and each policy template.
- Run Lighthouse mobile and desktop after deployment.

## Manual keyboard checks

- Tab to the skip link and confirm it moves focus to main content.
- Operate desktop and mobile navigation without a pointer.
- Open the mobile menu, close it with Escape and verify focus returns to the menu button.
- Verify every link, button, filter, form control, details element and cookie control has a visible focus indicator.
- Reject optional services, play a video, change external-media consent and reopen Cookie Preferences from the footer.
- Submit each form empty and verify the first invalid field receives focus while entered values remain.

## Responsive checks

Test at 320, 360, 375, 390, 412, 768, 820 and 1024 CSS pixels, plus laptop and large desktop widths. Test phone and tablet portrait and landscape orientations.

- No horizontal overflow at 320px.
- Hero actions stack naturally on narrow screens.
- Text remains readable at 200% and usable at 400% zoom.
- Cards reflow to one, two or three columns as space permits.
- Filters, video players and cookie controls remain inside the viewport.
- Forms use one field per row on phones and appropriate input types.
- Footer links remain comfortably spaced.
- Placeholder galleries preserve full award and event context.

## Screen reader and media checks

- Verify landmarks, headings, lists, form labels, descriptions and live status messages.
- Confirm decorative styling is not announced.
- Confirm approved images receive meaningful, factual alt text.
- Confirm YouTube does not load before external-media consent and user activation.
- Record caption availability per video; do not infer or promise captions.
