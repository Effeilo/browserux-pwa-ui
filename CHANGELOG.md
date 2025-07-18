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
