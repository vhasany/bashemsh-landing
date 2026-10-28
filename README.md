# باشمش — Bashemsh landing page

Responsive, static, RTL Persian coming-soon landing page for **bashemsh.ir**.

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080.

## Deploy with GitHub Pages

1. Create a **public** GitHub repository (for example `bashemsh-landing`).
2. Upload the contents of this directory to repository root on `main`.
3. Repository **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
4. Repository **Settings → Pages → Custom domain**: `bashemsh.ir`. The included `CNAME` also contains this name.
5. In Cloudflare DNS (after moving domain nameservers to Cloudflare in nic.ir), point the zone apex (`@`) to GitHub Pages via A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   Optionally add `www` CNAME to `<GITHUB_USERNAME>.github.io`. Use **DNS only** while verifying GitHub Pages and TLS; consider proxy behavior only after fully working.
6. In GitHub Pages, wait for DNS verification / certificate and enable **Enforce HTTPS**. On Cloudflare use **Full (strict)** after origin certificate works; avoid Flexible SSL.
7. Test `https://bashemsh.ir` (and if using `www`, test redirects). Verify DNS records before enabling proxy.

## Notes

- No commerce flow, contact form, backend or analytics yet.
- Text avoids claims of currently operating sales, permissions or warranties.
- Hero/product imagery is an original concept preview and **must not be interpreted as verified real product photos or guaranteed specifications**. Replace with actual product photography before live sales.
- Google Fonts is an external dependency; for full self-hosting, host appropriately licensed font files separately.


## شعبه مرکزی
- آدرس: شهرقدس، خیابان شهید سلیمانی، چهارراه طالقانی، پاساژ رزگلد
- تلفن: ۰۹۱۲۴۴۷۵۳۱۰ / ۰۹۱۹۳۶۹۹۵۹۲
- موقعیت در نشان: https://neshan.org/maps/places/0443068cf4ef48f489b83c52f0473526#c35.718-51.113-17z-0p
- مختصات: 35.71796340555912, 51.111848177689666
