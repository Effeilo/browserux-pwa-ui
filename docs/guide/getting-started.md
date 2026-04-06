# Getting started

## Installation

```bash
npm install browserux-pwa-ui
```

---

## Register the component

### Option 1, ES module import

```js
import 'browserux-pwa-ui';
```

### Option 2, `defineBrowseruxComponents()` helper

```js
import { defineBrowseruxComponents } from 'browserux-pwa-ui';
defineBrowseruxComponents();
```

### Option 3, CDN (no build step)

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.esm.js"></script>
```

---

## Minimal usage

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

This single element handles both install and update prompts. The component is silent until the browser fires `beforeinstallprompt` or a Service Worker update is detected.

---

## Recommended setup

Place the element near the end of `<body>` and specify a language:

```html
<body>
  <!-- your app content -->

  <browserux-pwa-ui lang="en"></browserux-pwa-ui>

  <script type="module" src="browserux-pwa-ui.esm.js"></script>
</body>
```

---

## Disable install or update UI

```html
<!-- Show update notifications only -->
<browserux-pwa-ui no-install></browserux-pwa-ui>

<!-- Show install prompt only -->
<browserux-pwa-ui no-update></browserux-pwa-ui>
```

---

## Desktop snackbar mode

On screens ≥ 1024px, enable the snackbar layout instead of the full-width banner:

```html
<browserux-pwa-ui snackbar position="bottom-right"></browserux-pwa-ui>
```

Available positions: `top-left`, `top-right`, `bottom-left`, `bottom-right`.

---

## Prerequisites

The install flow requires:
- A valid `manifest.json` linked in `<head>`
- HTTPS (or `localhost`)
- A browser that supports `beforeinstallprompt` (Chrome, Edge)

The update flow requires:
- A registered Service Worker
- The Service Worker must handle `SKIP_WAITING` (either via Workbox or manually)
