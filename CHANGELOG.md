**EN** | [FR](./fr/CHANGELOG.md)

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# 📦 CHANGELOG

All notable changes to this project will be documented in this file.

This changelog follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning (SemVer)](https://semver.org/).

---

<br>

## [1.1.0] – 2026-03-29

### ♿ Accessibility

- Added `role="alert"` and `aria-live="assertive"` on install and update banners
- Added `role="status"` and `aria-live="polite"` on the installation confirmation banner
- Added `role="button"`, `tabindex="0"`, and localized `aria-label` on close buttons (translated in all 9 supported languages via the new `closeButton` i18n key)
- Added `aria-hidden="true"` and `focusable="false"` on decorative SVG icons
- Added keyboard navigation: close buttons now respond to `Enter` and `Space` keys
- Added focus management: focus is automatically moved to the action button when a banner appears, and to the close button after installation

### ✨ New features

- **Custom events**: the component now dispatches `pwa-install`, `pwa-installed`, `pwa-update`, and `pwa-updated` events on the host element (bubbling, composed — cross Shadow DOM)
- **`loader-duration` attribute**: configures the loader display duration in milliseconds before showing the confirmation banner (default: `2500`)
- **Reactive `lang` attribute**: updating the `lang` attribute after render now live-updates all visible text and `aria-label` values without re-mounting the component
- **`prefers-reduced-motion`**: CSS transitions on banners are disabled for users who prefer reduced motion

### 🐛 Bug fixes

- **Memory leak**: added `disconnectedCallback()` — global event listeners (`beforeinstallprompt`, `appinstalled`, `controllerchange`, `updatefound`) are now properly removed when the component is disconnected from the DOM
- **Service Worker error handling**: wrapped all `navigator.serviceWorker` calls in `try/catch` with a `'serviceWorker' in navigator` guard; the component now gracefully degrades in non-HTTPS or unsupported environments

### 🎨 Styles

- Added `:focus-visible` outline on close buttons for keyboard users

<br>

---

<br>

## [1.0.0] – 2025-07-18

### 🚀 Initial stable release

#### ✨ Core features

- Universal Web Component for PWA: install and update interface
- Multilingual support (auto-detect or force with `lang` attribute)
- Install banner triggered by `beforeinstallprompt` event
- Update banner triggered by `registration.waiting` (service worker)
- Action button triggers `skipWaiting()` + `window.location.reload()`
- No external dependencies (works with or without a bundler)
- Shadow DOM support (can be disabled with `no-shadow`)
- Easy integration in React, Vue, Angular, or plain HTML

#### 🎨 Customization

- Override texts via HTML attributes (`text-*`)
- Fully themeable using CSS variables (`--bux-pwa-*`)
- Icon replacement via slots (`close-icon-*`, `loader-icon`)

#### 🧩 Additional options

- `snackbar` mode: display banner as a floating toast in a screen corner
- `position` attribute: place the snackbar at `top-left`, `top-right`, `bottom-left`, or `bottom-right`
- Responsive behavior: snackbar mode activates automatically on screens wider than 1024px
- Additional CSS variables specific to snackbar styling (`--bux-pwa-snackbar-padding`, `--bux-pwa-snackbar-border-radius`, etc.)

<br>

---

<br>
