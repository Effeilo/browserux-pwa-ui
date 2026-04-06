# How it works

## Install flow

### 1. Capturing `beforeinstallprompt`

The component listens for the `beforeinstallprompt` event on `window`. When it fires, the component:

1. Calls `event.preventDefault()` to suppress the browser's default install badge.
2. Stores the deferred prompt reference internally.
3. Shows the install banner.
4. Dispatches the `pwa-install` custom event.
5. Moves focus to the install button (accessibility).

### 2. User interaction

When the user clicks the install button:

1. `deferredPrompt.prompt()` is called to trigger the native browser dialog.
2. The component waits for `userChoice`.
3. If the user dismisses the dialog, the banner remains visible.

### 3. Post-install confirmation

When the browser fires `appinstalled`:

1. The install banner is hidden.
2. A loading overlay is shown for `loader-duration` milliseconds (default: 2500ms).
3. An installation confirmation banner is displayed.
4. The `pwa-installed` custom event is dispatched.

### 4. Close buttons

Close buttons on all banners respond to click, `Enter`, and `Space` keyboard events.

---

## Update flow

### 1. Detecting a waiting Service Worker

On component connection, the update logic calls `navigator.serviceWorker.getRegistration()`. Two paths:

- **Already waiting**, if `registration.waiting` exists and a controller is active, the update banner is shown immediately.
- **Future update**, the component listens for `updatefound` on the registration, then monitors `statechange` on the new worker until it reaches `installed` while a controller is active.

### 2. User interaction

When the user clicks the update button:

1. The update banner is hidden.
2. A loading overlay is shown.
3. `SKIP_WAITING` is posted to the waiting Service Worker.

### 3. Page reload

When the browser fires `controllerchange` (the new SW takes over):

1. The `pwa-updated` custom event is dispatched.
2. `window.location.reload()` is called to apply the update.

### 4. Cleanup

When the component disconnects from the DOM (`disconnectedCallback`), all Service Worker event listeners are removed to prevent memory leaks.

---

## No-shadow mode

By default, the component uses Shadow DOM. Adding `no-shadow` disables this:

```html
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

In this mode:
- The component renders into the light DOM.
- Your global stylesheets can target banner elements directly.
- CSS custom properties still work from `:root`.
- The `no-shadow` attribute must be set before the element connects to the DOM.
