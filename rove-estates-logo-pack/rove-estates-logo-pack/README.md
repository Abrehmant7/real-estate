# Rove Estates website logo pack

Use `logos/rove-estates-on-light.svg` on white or pale backgrounds and
`logos/rove-estates-on-dark.svg` on dark backgrounds. Each logo has a
transparent background. The SVGs scale without losing sharpness. PNG
exports are 1280 pixels wide, and lossless WebP exports are 640 pixels wide.

The icons use the stylized R from the wordmark. `favicon.ico` contains
16, 32, and 48 pixel versions. The Apple touch icon is 180 × 180 pixels.

Copy the `logos` and `icons` folders into your site's public directory.
If the site serves these folders at its root, add these links to the
page head.

```html
<link rel="icon" href="/icons/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" sizes="any">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
```

Use the appropriate logo in your header.

```html
<img src="/logos/rove-estates-on-light.svg" alt="Rove Estates">
```
