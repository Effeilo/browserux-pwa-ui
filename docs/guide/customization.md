# Customization

## CSS custom properties

All visual aspects of the banners are controlled via CSS custom properties. Set them on `:root` or on the `browserux-pwa-ui` element directly.

### Banner

| Property | Default | Description |
|---|---|---|
| `--bux-pwa-banner-bg` | `#0e93f0` | Banner background color |
| `--bux-pwa-banner-color` | `#fff` | Banner text color |
| `--bux-pwa-banner-padding` | `1rem` | Banner padding |

### Button

| Property | Default | Description |
|---|---|---|
| `--bux-pwa-banner-btn-bg` | `#fff` | Button background color |
| `--bux-pwa-banner-btn-color` | `#000` | Button text color |
| `--bux-pwa-banner-btn-hover-bg` | `#000` | Button hover background color |
| `--bux-pwa-banner-btn-hover-color` | `#fff` | Button hover text color |
| `--bux-pwa-banner-btn-padding` | `0.8rem 2rem` | Button padding |
| `--bux-pwa-banner-btn-border-radius` | `2rem` | Button border radius |

### Snackbar

| Property | Default | Description |
|---|---|---|
| `--bux-pwa-snackbar-padding` | `2rem 2rem 2rem 1rem` | Snackbar padding |
| `--bux-pwa-snackbar-border-radius` | `1rem` | Snackbar border radius |

### Overlay

| Property | Default | Description |
|---|---|---|
| `--bux-pwa-loader-bg` | `rgba(0,0,0,0.7)` | Loading overlay background |
| `--bux-pwa-z-index` | `1000` | Z-index for all banners and overlay |

### Example

```css
browserux-pwa-ui {
  --bux-pwa-banner-bg: #1a1a2e;
  --bux-pwa-banner-color: #e0e0e0;
  --bux-pwa-banner-btn-bg: #e94560;
  --bux-pwa-banner-btn-color: #fff;
  --bux-pwa-banner-btn-hover-bg: #fff;
  --bux-pwa-banner-btn-hover-color: #e94560;
  --bux-pwa-snackbar-border-radius: 0.5rem;
}
```

---

## Text overrides

Override any built-in label with a `text-*` attribute. This takes precedence over the `lang` attribute.

| Attribute | Description |
|---|---|
| `text-install-title` | Install banner heading |
| `text-install-message` | Install banner body text |
| `text-install-button` | Install button label |
| `text-installed-title` | Post-install confirmation heading |
| `text-update-title` | Update banner heading |
| `text-update-button` | Update button label |
| `text-close-button` | Close button aria-label |

```html
<browserux-pwa-ui
  text-install-title="Install our app"
  text-install-message="Fast, offline-ready, and always up to date."
  text-install-button="Install"
  text-installed-title="Installation complete!"
  text-update-title="A new version is available"
  text-update-button="Update now"
  text-close-button="Close"
></browserux-pwa-ui>
```

---

## Built-in languages

Set the `lang` attribute to use a built-in translation. Supported values:

| Code | Language |
|---|---|
| `en` | English (default) |
| `fr` | French |
| `es` | Spanish |
| `de` | German |
| `it` | Italian |
| `pt` | Portuguese |
| `nl` | Dutch |
| `ja` | Japanese |
| `ru` | Russian |

```html
<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

The `lang` attribute is reactive, changing it at runtime updates all labels immediately.

---

## Named slots

Replace the default SVG icons with custom content using named slots.

| Slot | Description |
|---|---|
| `close-icon-install` | Close icon in the install banner |
| `close-icon-confirm` | Close icon in the post-install confirmation |
| `close-icon-update` | Close icon in the update banner |
| `loader-icon` | Icon shown in the loading overlay |

```html
<browserux-pwa-ui>
  <svg slot="close-icon-install" width="24" height="24" viewBox="0 0 24 24">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
  </svg>
  <img slot="loader-icon" src="/spinner.gif" alt="" width="48" height="48" />
</browserux-pwa-ui>
```

---

## Loader duration

Control how long the loading overlay is shown after install before the confirmation message appears:

```html
<browserux-pwa-ui loader-duration="3000"></browserux-pwa-ui>
```

Default: `2500` (milliseconds). Set to `0` to skip the loader entirely.

---

## No-shadow mode

Disable Shadow DOM to allow global stylesheets to target banner internals:

```html
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

Must be set before the element connects to the DOM. CSS custom properties still work from `:root`.
