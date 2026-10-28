# Royal Luxury visual review

## Baseline and implementation
Audited `origin/main` at `2c04974` before branching to `design/royal-luxury`. Main was a working static RTL landing page with local Estedad, valid contact links and preserved GitHub Pages configuration; its ingot logo, plain studio imagery and open collections did not match the supplied Royal Luxury reference. The working tree was clean.

The supplied desktop-left/mobile-right image is the design authority. This implementation follows its architectural lion/arch atmosphere, black marble and velvet, large bullion foreground, metallic gold typography, outlined CTA, ornamental collection frames, compact information panels and crown identity. Mobile uses its own photograph and image-first/centered-copy composition. Typography and controls remain HTML; photography contains no UI or product markings.

`assets/royal-logo.svg` is reusable vector artwork: shaped Estedad Persian glyph outlines preserve every original dot; one separately drawn crown is centered over the meem glyph. The header and footer use the same asset; the favicon uses its crown. Font license remains in `assets/fonts/Estedad-OFL.txt`. Asset origins and generation prompts are in [ROYAL_ASSETS.md](assets/ROYAL_ASSETS.md).

## Actual checks and corrections
Real-browser local HTTP review at **360, 390, 768, 1024, 1440 and 1920px**. All passed overflow, clipped text/container, local image/font loading, internal anchor and visible-coordinate checks; results: [checks.json](review/royal/checks.json). Exact address, both telephone numbers and `tel:` links, and the exact Neshan URL were checked in the rendered DOM. No warnings/errors on the final fresh browser tab. Native mobile disclosure was exercised by keyboard; Escape closes it and returns focus, and selecting contact closes it and navigates correctly. No calls were placed or provider availability claimed.

Compared actual browser captures beside the supplied reference: [desktop comparison](review/royal/comparison-desktop-hero.jpg), [mobile comparison](review/royal/comparison-mobile-hero.jpg). Increased headline/CTA scale, cropped excess foreground marble, corrected tablet bullion clipping and text/image interference, enlarged small collection labels, and aligned the lower map/introduction panels to the reference. Every requested width has a screenshot in `review/royal/`; additional mobile/desktop detail captures cover contacts and lower panels. Browser full-page capture produced stitching defects, so evidence uses viewport captures and explicitly labeled comparison crops, not synthetic page renders.

## Remaining differences for visual approval
- Regenerated, unmarked concept photography closely follows the scene but is not pixel-identical: statue pose, sky, fabric folds, metal texture and collection backgrounds differ. Engravings, purity/weight claims and inventory implications are intentionally absent.
- The logo is clean vector Estedad lettering, not raster lettering from the concept. The crown and corner ornaments are purpose-built vectors rather than exact traced artwork. Small type/spacing differences remain across browser sizes.
- The supplied mobile device bezel is presentation framing and is not part of the webpage. Tablet composition interpolates between the approved layouts with a dedicated image/text balance.
- Copy avoids the concept's investment/specification implications. Collection links introduce the brand rather than implying available inventory; Coming Soon and the concept-image notice remain visible in the footer. The map is schematic, with navigation opening the real supplied Neshan destination.
- The reference cuts off the lower page; contact details and footer are completed in the same palette and frame treatment. Footer concept disclosure is additional accuracy information.

CNAME remains `bashemsh.ir`; robots, sitemap and custom-domain/HTTPS configuration are unchanged. No framework, frontend dependency, build pipeline, commerce flow, DNS/Cloudflare action, merge or deployment. Automated accessibility auditing and physical-device testing were not performed. **Implementation awaits visual approval.**
