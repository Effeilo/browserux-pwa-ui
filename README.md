**EN** | [FR](./fr/README.md)

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# browserux-pwa-ui

**A universal Web Component to display an installation and update interface for Progressive Web Apps (PWA), independent of any framework or bundler.**

BrowserUX PWA UI provides a clear, consistent, and customizable user experience for installing and updating your PWA, while remaining lightweight, self-contained, and easy to integrate into any project, from simple HTML pages to modern JavaScript applications.

- [Project website](https://browserux.com/pwa-ui/)
- [Demo](https://browserux.com/pwa-ui/demo/)
- [Documentation](./docs/index.md)
- [Changelog](./CHANGELOG.md)

<br>

[![npm version](https://img.shields.io/npm/v/browserux-pwa-ui.svg)](https://www.npmjs.com/package/browserux-pwa-ui)
[![unpkg](https://img.shields.io/badge/CDN-unpkg-brightgreen)](https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js)

## Features

- 📲 Intercepts `beforeinstallprompt`, suppresses the default browser badge and shows a custom banner
- ✅ Post-install confirmation with configurable loader duration
- 🔄 Service Worker update detection via `registration.waiting` and `updatefound`
- ⚡ `SKIP_WAITING` → `controllerchange` → automatic page reload
- 🖥 Snackbar mode for desktop (≥ 1024px), positioned banner for mobile
- 🌍 9 built-in languages: `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru`
- ✏️ Full text override via `text-*` attributes
- 🎛 Named slots for icon replacement
- 🎨 CSS custom properties for theming
- 🧩 `no-shadow` mode for global stylesheet access
- ♿ `prefers-reduced-motion` support

## Installation

```bash
npm install browserux-pwa-ui
```

Or via CDN:

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.esm.js"></script>
```

## Usage

```js
import 'browserux-pwa-ui';
```

```html
<browserux-pwa-ui lang="en"></browserux-pwa-ui>
```

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `lang` | Attribute | `en` | Built-in language: `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru` |
| `no-install` | Attribute | — |   Disable the install banner |
| `no-update` | Attribute | — |   Disable the update banner |
| `no-shadow` | Attribute | — |   Render into light DOM |
| `snackbar` | Attribute | — |   Enable snackbar layout on desktop (≥ 1024px) |
| `position` | Attribute | `bottom-right` | Snackbar position: `top-left`, `top-right`, `bottom-left`, `bottom-right` |
| `loader-duration` | Attribute | `2500` | Loading overlay duration in ms after install |
| `text-install-title` | Attribute | — |   Override install banner heading |
| `text-install-message` | Attribute | — |   Override install banner body text |
| `text-install-button` | Attribute | — |   Override install button label |
| `text-installed-title` | Attribute | — |   Override post-install confirmation heading |
| `text-update-title` | Attribute | — |   Override update banner heading |
| `text-update-button` | Attribute | — |   Override update button label |
| `text-close-button` | Attribute | — |   Override close button aria-label |
| `close-icon-install` | Slot | — |   Close icon in the install banner |
| `close-icon-confirm` | Slot | — |   Close icon in the post-install confirmation |
| `close-icon-update` | Slot | — |   Close icon in the update banner |
| `loader-icon` | Slot | — |   Icon in the loading overlay |
| `pwa-install` | Event | — |   `beforeinstallprompt` captured, install banner shown |
| `pwa-installed` | Event | — |   App installed, confirmation shown |
| `pwa-update` | Event | — |   Update banner shown |
| `pwa-updated` | Event | — |   New SW active, before page reload |

## Documentation

For detailed documentation, see [docs/index.md](docs/index.md).

### Guide

- [Introduction](docs/guide/introduction.md) : what it does, when to use it, features overview
- [Getting started](docs/guide/getting-started.md) : installation via npm or CDN, basic setup
- [How it works](docs/guide/how-it-works.md) : install flow, update flow, `no-shadow` mode
- [Framework usage](docs/guide/framework-usage.md) : React, Vue, Angular, Svelte, Next.js, Nuxt
- [Customization](docs/guide/customization.md) : CSS custom properties, text overrides, slots

### Reference

- [Attributes](docs/reference/attributes.md) : all HTML attributes with defaults and descriptions
- [Events](docs/reference/events.md) : `pwa-install`, `pwa-installed`, `pwa-update`, `pwa-updated`
- [Slots](docs/reference/slots.md) : named slots for replacing close and loader icons

### Additional reference

- [Compatibility](docs/compatibility.md) : browser support, framework compatibility, build formats
- [Contributing](docs/contributing.md) : report a bug, suggest an improvement, submit a PR

## License

MIT © 2026 [Effeilo](https://github.com/Effeilo)
