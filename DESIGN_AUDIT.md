# Design audit — 28 October 2026

1. **Conflicting design systems:** three CSS layers redefine tokens, layout and breakpoints; appended overrides conceal rather than resolve structural problems.
2. **Misplaced hierarchy:** the required launch heading appears near the footer while the hero uses a different slogan. Duplicate launch messages and competing actions weaken the campaign.
3. **Over-decoration:** gradients, glows, inset borders, ornamental icons and repeated bordered cards compete with the metal imagery.
4. **Unbalanced composition:** text overlays obscure imagery; the mobile hero inherits a desktop background treatment with a fixed 700–750px height. Product copy covers much of each photograph.
5. **Unverified visual claims and excess copy:** concept images carry branded purity/weight markings, while roadmap and generic value statements distract from the actual coming-soon offer.

## Technical inspection
Semantic RTL markup, canonical/OG metadata, local WebP assets and a skip link exist. All images are 1200×800 (53–108 KB). Google Fonts is remote; no local font fallback asset exists. Navigation closes after selection but does not reset its accessible label or support Escape. Existing CSS hides horizontal overflow, masking potential defects. No build pipeline is required. CNAME is `bashemsh.ir`; robots and sitemap use HTTPS. The redesign preserves deployment configuration and business contact destinations.
