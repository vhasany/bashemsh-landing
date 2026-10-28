# BASHEMSH — black & gold cinematic direction

## Art direction
The full-bleed campaign replaces the framed image/text split. Large, unmarked metal forms, directional gold light, black stone and near-black negative space make physical material the focal point. Champagne display type sits in the dark field. One compact, subtly outlined and tinted hero action stays discreet. Mobile uses its own image source, crop, scale, fade and lower-field placement; tablet positions the metal below the text. No section numbering, English campaign captions, light portfolio panels or repeated launch sections remain.

Estedad was selected after rendering it against Vazirmatn at equal weight and size in `review/type-comparison.html`, at desktop and mobile widths. Its more compact, angular heavy forms gave the exact Persian headline and brand name stronger presence. Hero weight is 800; headings 700; body 400; wordmark 900. Persian letter spacing remains normal, line height leaves dots and ascenders clear, and headings consistently align to RTL start. Estedad is locally hosted and preloaded. Both comparison fonts are SIL OFL 1.1; original licenses accompany the files in `assets/fonts/`. Production loads only Estedad. Sources: [Estedad](https://github.com/aminabedi68/Estedad), [Vazirmatn](https://github.com/rastikerdar/vazirmatn).

The identity combines the heavy Persian wordmark, a restrained Latin brand signature and a custom vector cast-ingot silhouette with side/base planes. The same symbol is used in header, about section, footer and favicon. It is a design proposal within this page, not a claim of registered trademark status.

Collections use large material details with gold/silver category titles on shaded lower areas. About and branch remain short and dark, with readable contact details rather than decorative metadata. The exact address, both telephone numbers and Neshan URL are retained. No visible coordinates, commercial inventory claims, certifications or investment promises were introduced.

## Visual review and corrections before commit
Rendered in the Codex in-app browser through a local Python HTTP server at 390×844, 768×1024 and 1440×950; also checked 360px. Screenshots were inspected for type weight, alignment, dominant metal scale, contrast and composition—not just overflow.

- Initial mobile cover crop cut the ingot silhouettes. Changed to a dedicated source with full silhouettes and a fade on the image itself.
- Initial tablet cover image competed with the supporting copy. Lowered and scaled its placement to preserve a dark text field.
- Initial geometric symbol appeared gemstone-like. Replaced the pointed base with a cast-ingot silhouette and simple depth planes.
- Removed decorative numbers, tiny English microcopy and the extra header contact action. Body and supporting text are now 12–16px, with a limited Latin identity signature.

Final hero screenshots: `review/prestige-390.jpg`, `review/prestige-768.jpg`, `review/prestige-1440.jpg`; additional small-screen capture at `review/prestige-360.jpg`. Collection and contact captures and font comparisons are also in `review/`. Earlier numbered screenshots were removed to avoid confusing the superseded direction with the current result.

## Technical verification
Browser measurements at 390, 768 and 1440px found no horizontal overflow; heading/navigation bounds remained on screen. All images and local Estedad loaded. Verified the exact H1, working internal anchor targets, correct phone and Neshan hrefs, exact rendered address and absence of coordinates in visible text. Navigated to collections/about/contact. No console warnings/errors on the healthy preview page. The preview server was restarted after a local connection failure; final captures use the restored server. Calls were not placed and Neshan service availability was not tested.

Static HTML/CSS/vanilla JavaScript retained. No framework or build step added. CNAME, robots, sitemap and custom-domain/HTTPS settings preserved. Keyboard focus, skip link, landmarks, image alternatives and reduced-motion styles retained. No automated accessibility audit or physical-device testing is claimed. No merge, deploy, DNS or Cloudflare change performed.

## Generated asset provenance
Built-in image generation tool used for `assets/campaign.webp` and its optimized mobile derivative `assets/campaign-mobile.webp`. No product marks, weights or purity claims appear. Collection details retain the previous unmarked concept image; the visible concept/coming-soon note is preserved.

Prompt: “Use case: stylized-concept. Asset: full-bleed cinematic luxury bullion campaign hero, landscape 16:9. Deep almost black studio scene with two monumental completely blank unmarked ingots, warm rich gold standing at an angle and a lower cool silver bar, entirely in the LEFT 50 percent of frame, resting on a dark polished stone plinth. Dramatic narrow directional light from upper left grazes the gold with luminous warm edges, silver cool reflections, realistic brushed metal microtexture, luxurious high contrast and rich tangible weight, subtle reflection. RIGHT 50 percent is near-black clean negative space for Persian headline added in HTML, no objects there. Lower right dark. Sophisticated high-end watch campaign lighting, no busy rocks, no glitter. No text, engraving, logos, stamps, purity, weights or numbers. Clearly an artistic material concept, not official products or inventory.”

## Focused final polish
The final pass changes only header/hero presentation and the shared ingot symbol. At 390px the header is 80px tall and keeps all three links in a single row with 44px-tall targets; a two-row fallback serves narrower screens. Mobile hero height drops from 780px to 700px and copy starts 35px earlier, bringing the bullion closer to the action and more fully into the first screen. The symbol has cleaner cast-ingot side/base proportions and a slightly stronger stroke; the Persian wordmark is unchanged. The CTA gains a restrained champagne outline, low-opacity tint and medium weight, with a 46px mobile target.

New real-browser captures: `review/polish-390.jpg` (390×844), `review/polish-768.jpg` (768×1024), `review/polish-1440.jpg` (1440×950). Inspected the first visible mobile screen and the tablet/desktop balance. No horizontal overflow; local images and Estedad load; no console warnings/errors. Exercised the CTA and keyboard Enter navigation from the compact mobile header to the branch. Compared parsed HTML text and every anchor destination against the previous commit: identical. Font/image files, CNAME and unrelated section layouts are unchanged. These polish captures supersede the corresponding prestige hero captures above.
