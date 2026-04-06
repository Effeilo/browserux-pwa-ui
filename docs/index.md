# browserux-pwa-ui

`<browserux-pwa-ui>` is a zero-dependency Web Component that handles PWA install and update prompts. It intercepts the `beforeinstallprompt` event to display a customizable install banner, and monitors the Service Worker lifecycle to show an update notification when a new version is available.

---

## Documentation

### Guide

- [Introduction](guide/introduction.md), what the component does and when to use it
- [Getting started](guide/getting-started.md), installation and minimal setup
- [How it works](guide/how-it-works.md), install and update lifecycle in detail
- [Framework usage](guide/framework-usage.md), React, Vue, Angular, Svelte, Next.js, Nuxt
- [Customization](guide/customization.md), CSS custom properties, text overrides, slots

### Reference

- [Attributes](reference/attributes.md), all HTML attributes
- [Events](reference/events.md), all custom events
- [Slots](reference/slots.md), named slots for icon replacement

### Other

- [Compatibility](compatibility.md), browser and framework support matrix
- [Contributing](contributing.md), how to report issues and submit pull requests
- [Changelog](../CHANGELOG.md)

---

## Quick example

```html
<script type="module" src="browserux-pwa-ui.esm.js"></script>

<browserux-pwa-ui lang="en"></browserux-pwa-ui>
```

Drop the component in your HTML once and it handles both install and update flows automatically. No JavaScript required for basic usage.
