# Introduction

## What it does

`<browserux-pwa-ui>` is a Web Component that provides ready-to-use UI for two distinct PWA flows:

**Install prompt**, when the browser fires `beforeinstallprompt`, the component shows a banner inviting the user to install the app. It intercepts the browser's default prompt, defers it, and triggers it on user interaction. After installation, a confirmation message is shown briefly before the banner disappears.

**Update notification**, when a new Service Worker version is waiting to activate, the component shows an update banner. When the user confirms, it sends `SKIP_WAITING` to the waiting worker and reloads the page once the new controller takes over.

Both flows are fully optional and can be disabled independently.

---

## When to use it

- You have a PWA with a `manifest.json` and a Service Worker.
- You want install and update UI without writing custom event handling.
- You want a drop-in component that works with any framework or plain HTML.

---

## What it does not do

- It does not register or manage your Service Worker, you handle that in your app.
- It does not generate a `manifest.json`.
- It does not store installation state in localStorage or cookies.

---

## Features

- Intercepts `beforeinstallprompt`, no default browser badge needed
- Post-install confirmation with a configurable loader duration
- Service Worker update detection via `registration.waiting` and `updatefound`
- `SKIP_WAITING` → `controllerchange` → automatic page reload
- Snackbar mode for desktop (≥ 1024px), positioned banner for mobile
- 9 built-in languages: `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru`
- Full text override via `text-*` attributes
- Named slots for replacing close and loader icons
- CSS custom properties for theming
- `no-shadow` mode for global stylesheet access
- `prefers-reduced-motion` support
- No runtime dependencies
