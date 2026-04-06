# Events

`<browserux-pwa-ui>` dispatches four custom events during the install and update lifecycles. All events bubble and are composed (they cross Shadow DOM boundaries).

---

## `pwa-install`

Dispatched when the `beforeinstallprompt` event is captured and the install banner is shown, before the native browser prompt appears.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-install', () => {
  console.log('Install prompt ready');
});
```

**Use case:** analytics tracking when an install opportunity is presented to the user.

---

## `pwa-installed`

Dispatched after the app is installed and the post-install confirmation has been shown. This fires after `appinstalled` is received from the browser and the loader delay has elapsed.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-installed', () => {
  console.log('App successfully installed');
});
```

**Use case:** analytics tracking, triggering onboarding flows after install.

---

## `pwa-update`

Dispatched when an update is detected and the update banner is shown to the user.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-update', () => {
  console.log('Update available');
});
```

**Use case:** analytics tracking, custom logging.

---

## `pwa-updated`

Dispatched after the new Service Worker has taken control of the page, immediately before `window.location.reload()` is called.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-updated', () => {
  console.log('App updated, reloading');
});
```

**Use case:** saving state before the page reloads, analytics.

---

## Event summary

| Event | Fired when | Bubbles | Composed |
|---|---|---|---|
| `pwa-install` | `beforeinstallprompt` captured, install banner shown | Yes | Yes |
| `pwa-installed` | App installed, confirmation shown | Yes | Yes |
| `pwa-update` | Update banner shown | Yes | Yes |
| `pwa-updated` | New SW active, before page reload | Yes | Yes |

---

## Listening from a parent

Because events are composed, they can be caught on any ancestor element, including `document`:

```js
document.addEventListener('pwa-installed', (event) => {
  analytics.track('pwa_installed');
});
```
