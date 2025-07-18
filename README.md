**EN** | [FR](./fr/README.md)

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# BrowserUX PWA UI

A universal Web Component to display an installation and update interface for Progressive Web Apps (PWA), independent of any framework or bundler.

It provides a clear, consistent, and customizable user experience for installing and updating your PWA, while remaining lightweight, self-contained, and easy to integrate into any project, from simple HTML pages to modern JavaScript applications.

[![npm version](https://img.shields.io/npm/v/browserux-pwa-ui.svg)](https://www.npmjs.com/package/browserux-pwa-ui)

- Project website: [BrowserUX PWA UI](https://browserux.com/pwa-ui/)
- [Documentation](https://browserux.com/pwa-ui/documentation/)
- [About BrowserUX PWA UI](https://browserux.com/blog/articles/about-browserux-pwa-ui.html)

## Why this Web Component?

The installation and update flows of Progressive Web Apps (PWA) are currently poorly integrated from a user experience perspective:

- Installation relies on the `beforeinstallprompt` event, which is discreet and rarely triggered.
- Updates happen silently in the background, without any visual feedback, which can confuse users.
- There’s no native, unified, or customizable interface to guide users through these key steps.

This component was created to fill those UX gaps:

It provides a clear, customizable, and multilingual interface to encourage PWA installation and elegantly notify users of updates — with consistent UX behavior across browsers.

### Benefits

- Universal: works everywhere (native HTML, React, Vue, etc.)
- Zero dependency: no need for Vite, React, or modern tools
- Customizable: styles via CSS variables, texts via attributes, icons via slots
- Multilingual: auto-detects language or allows manual override via `lang`
- Lightweight mode: Shadow DOM can be disabled (`no-shadow`)
- Complements the PWA experience: install + update (UI only, no logic)

## Features

- 📥 Displays the install button when the `beforeinstallprompt` event is triggered
- ✅ Shows a confirmation banner after successful installation
- 🛰️ Automatically detects updates via `registration.waiting`
- 🔄 Shows an update interface with a “Update” button
- 📤 Sends the `SKIP_WAITING` message to the service worker and reloads the app
- 🌐 Works without Shadow DOM when the `no-shadow` attribute is used
- 🎨 Icon customization via slots
- 🌍 Built-in translations: French, English, Spanish, 🇮🇹 Italian, German, Japanese, Russian, Dutch, Portuguese

## Installation

> This component provides only the user interface for the installation and update flows of a PWA.  
It assumes your manifest and service worker are already properly configured.

```bash
npm install browserux-pwa-ui
```

Or via CDN:

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js"></script>
```

> Use the `.esm.js` version if you're integrating this component with a bundler (React, Vue, etc.),  
and the `.min.js` version for direct HTML integration via CDN.

## Usage

### Modern project with a bundler (Vite, Webpack, etc.)

1. Import the component in your entry file:

```js
import 'browserux-pwa-ui';
```

2. Then use it in your HTML:

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

### React / Next.js

1. In your component, load it dynamically:

```jsx
import { useEffect } from 'react';

useEffect(() => {
    import('browserux-pwa-ui');
}, []);
```

2. Then in your JSX:

```jsx
<browserux-pwa-ui></browserux-pwa-ui>
```

### Vue 3

1. In `main.js` or `main.ts`:

```js
import 'browserux-pwa-ui';
```

2. Use it as a custom HTML tag:

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

### Angular

1. In `main.ts`:

```ts
import 'browserux-pwa-ui';
```

2. Add `CUSTOM_ELEMENTS_SCHEMA` to your `AppModule`:

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

### Integration without bundler / global script

1. Directly include the component via a CDN:

```html
<script type="module" src="https://unpkg.com/browserux-theme-switcher/dist/browserux-pwa-ui.min.js"></script>
```

2. Then add the tag:

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

## BrowserUX PWA UI Parameters

### Functional Attributes

| Attribute    | Description                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| `no-install` | Hides the installation interface                                                                         |
| `no-update`  | Hides the update interface                                                                               |
| `no-shadow`  | Disables Shadow DOM (global styles required)                                                             |
| `lang="xx"`  | Forces the displayed language (`fr`, `en`, `es`, `de`, etc.)                                             |
| `snackbar`   | The banner is displayed in snackbar mode (floating in a screen corner) for screen resolutions greater than 1024px.                                    |
| `position`   | Positions the snackbar: `top-left`, `top-right`, `bottom-left`, `bottom-right` (default: `bottom-right`) |


> If `lang` is not defined, the component will try to use `document.documentElement.lang`, and fallback to English (`en`) if none is found.

#### Example:

```html
<browserux-pwa-ui
  no-update
  no-shadow
  snackbar
  position="top-right"
  lang="en"
></browserux-pwa-ui>         |
```

### Text Translation

All displayed texts are automatically translated.  
You can override them using HTML attributes:

| Attribute              | Default (example: English)                  |
| ---------------------- | ------------------------------------------- |
| `text-install-title`   | Install this application                    |
| `text-install-message` | Download our free app. It takes no space…   |
| `text-install-button`  | Install                                     |
| `text-installed-title` | Application installed!                      |
| `text-update-title`    | An update is available                      |
| `text-update-button`   | Update                                      |

#### Example : 

```html
<browserux-pwa-ui
  text-install-title="Ajoutez ce site sur votre écran d'accueil"
  text-update-button="Redémarrer pour mettre à jour"
></browserux-pwa-ui>        |
```

#### Supported Languages

The component supports the following languages:

- 🇬🇧 en – English (default)
- 🇫🇷 fr – French
- 🇪🇸 es – Spanish
- 🇩🇪 de – German
- 🇯🇵 ja – Japanese
- 🇷🇺 ru – Russian
- 🇵🇹 pt – Portuguese
- 🇮🇹 it – Italian
- 🇳🇱 nl – Dutch

### Visual Customization

#### Icon Slots

| Slot name            | Default usage                  |
| -------------------- | ------------------------------ |
| `close-icon-install` | Close icon (install prompt)    |
| `close-icon-confirm` | Close icon (confirmation)      |
| `close-icon-update`  | Close icon (update prompt)     |
| `loader-icon`        | Loading animation              |

##### Example : 

```html
<browserux-pwa-ui>
  <svg slot="close-icon-update" viewBox="0 0 24 24" width="24"><path d="M6 6L18 18M6 18L18 6"/></svg>
  <svg slot="loader-icon" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10" stroke="orange" fill="none"/></svg>
</browserux-pwa-ui>       |
```

#### CSS Custom Properties

You can customize the component’s colors using CSS variables, either directly in the component’s `style` attribute or globally if `no-shadow` is enabled.

| CSS Variable                         | Default value         | Description                           |
| ------------------------------------ | --------------------- | ------------------------------------- |
| `--bux-pwa-banner-bg`                | `#0e93f0`             | Background color of the banner        |
| `--bux-pwa-banner-color`             | `#fff`                | Text color of the banner              |
| `--bux-pwa-banner-padding`           | `1rem`                | Padding inside the banner             |
| `--bux-pwa-banner-btn-bg`            | `#fff`                | Button background                     |
| `--bux-pwa-banner-btn-color`         | `#000`                | Button text color                     |
| `--bux-pwa-banner-btn-hover-bg`      | `#000`                | Button background on hover            |
| `--bux-pwa-banner-btn-hover-color`   | `#fff`                | Button text color on hover            |
| `--bux-pwa-banner-btn-padding`       | `0.8rem 2rem`         | Padding for the install/update button |
| `--bux-pwa-banner-btn-border-radius` | `2rem`                | Button border radius                  |
| `--bux-pwa-snackbar-padding`         | `2rem 2rem 2rem 1rem` | Inner padding for snackbar layout     |
| `--bux-pwa-snackbar-border-radius`   | `1rem`                | Border radius when in snackbar mode   |
| `--bux-pwa-loader-bg`                | `rgba(0, 0, 0, 0.7)`  | Loader background color               |
| `--bux-pwa-z-index`                  | `1000`                | Z-index for banner/loader             |

    
##### Example : 

```html
<browserux-pwa-ui
  snackbar
  position="bottom-left"
  style="
    --bux-pwa-banner-bg: #212121;
    --bux-pwa-banner-color: #f1f1f1;
    --bux-pwa-banner-btn-bg: #ffffff;
    --bux-pwa-banner-btn-color: #212121;
    --bux-pwa-snackbar-border-radius: 12px;
  "
></browserux-pwa-ui>         |
```

## How It Works

This component automatically displays the appropriate interface based on the state of your PWA:

### Installation

- Displays a banner when the `beforeinstallprompt` event is triggered by the browser.
- Allows the user to install the PWA via an "Install" button.
- Shows a confirmation message once the installation is complete.

### Update

- Automatically detects when a new service worker is waiting (`registration.waiting`).
- Displays a banner with an "Update" button.
- Once clicked:
  - The service worker is activated using `skipWaiting`.
  - The application reloads via `window.location.reload()`.

### Language & Customization

- The language is determined automatically from:
  1. The `lang` attribute on the component (`<browserux-pwa-ui lang="en">`)
  2. `document.documentElement.lang`
  3. Defaults to `en`
- All texts are translated and can be overridden via HTML attributes.
- Colors can be customized using CSS variables.
- Icons can be replaced using `<slot>` elements.

## Build & Development

```bash
npm install
npm run build
```

Uses TypeScript + Rollup to build:
- `dist/browserux-pwa-ui.esm.js`
- `dist/browserux-pwa-ui.umd.js`
- `dist/browserux-pwa-ui.d.ts`

## License

MIT License, Free to use, modify and distribute.