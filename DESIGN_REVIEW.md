# Design review — 28 October 2026

## Changes
- Rebuilt semantic RTL structure around the requested launch H1 and a single hero action.
- Replaced layered overrides with one responsive stylesheet. Charcoal, ivory and champagne typography, open photographic layouts and an ivory editorial section establish hierarchy without ornamental cards.
- Removed roadmap, repeated launch section, gradients, decorative icons and mobile menu dependency. Three navigation links remain visible at small widths and work without JavaScript.
- Retained exact address, both phone numbers and their international `tel:` destinations, and the exact Neshan URL/icon. No visible coordinates or sales controls.
- Preserved CNAME, robots, sitemap, HTTPS canonical and custom-domain configuration. No dependencies or build tooling added.

## Assets
`assets/editorial.webp`, `assets/gold-study.webp`, and `assets/silver-study.webp` are local optimized derivatives of an image created with the built-in image generation tool. Collection images are editorial detail crops. Visible captions identify them as concepts, not inventory. Previous marked assets are unused and retained for history. Google Fonts remains an external dependency with Tahoma/sans-serif fallback; font failure does not block content.

Generation prompt: “Use case: stylized-concept. Asset: luxury bullion coming-soon editorial website. Create a wide 3:2 still life of two completely blank unmarked metal ingots, one warm gold and one cool silver, on a matte charcoal architectural plinth, sculptural diagonal arrangement, dark studio background, soft large side light, restrained champagne highlights, sophisticated tactile material study. Entire ingots visible with breathing room. No logos, hallmarks, letters, numbers, weights, purity, text or engraving anywhere. This is an abstract conceptual render, not inventory or official product photography.”

## Actual verification
Local Python HTTP server and Codex in-app browser used. Requested viewport widths: 360, 390, 768, 1024, 1440, 1920px, each at 1000px height. Browser measurements found no horizontal overflow and no off-screen heading, navigation, figure or address bounds at any width. Images loaded successfully. Required H1, RTL hierarchy, anchor targets and absence of visible coordinates verified in rendered DOM. Navigation to contact exercised. Phone/Neshan hrefs inspected without placing calls. No console warnings or errors observed.

Viewport screenshots are saved as `review/{width}.jpg`; `review/contact-mobile.jpg` records the mobile branch section. Reviewed the mobile hero, collections and contact and desktop composition. The first hero crop clipped the ingots; changed it to the source 3:2 ratio. Full-page browser captures had stitching artifacts during resize, so final review artifacts use viewport captures after reload. No automated accessibility audit, physical-device testing, live telephone call or external navigation-provider availability test was performed. Keyboard-visible focus, skip link, semantic landmarks, descriptive image alternatives and reduced-motion CSS were inspected.

## Review boundary
Feature branch only. No merge, production deployment, DNS or Cloudflare changes requested or performed.
