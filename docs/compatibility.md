# Compatibility

---

## Environment requirements

| Environment | Minimum version | Reason |
|---|---|---|
| Node.js | 18+ | Required for npm-based projects |
| Browser | See table below | Custom Elements v1, Shadow DOM, beforeinstallprompt |

---

## Browser support

`<browserux-pwa-ui>` uses standard Web Components APIs and progressive enhancement for PWA-specific browser features.

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Custom Elements v1 | 67+ | 63+ | 10.1+ | 79+ |
| Shadow DOM v1 | 53+ | 63+ | 10+ | 79+ |
| `beforeinstallprompt` | 44+ | Not supported | Not supported | 17+ |
| Service Worker | 45+ | 44+ | 11.1+ | 17+ |

### Notes on `beforeinstallprompt`

- The install banner only appears in browsers that support `beforeinstallprompt`, primarily Chrome and Edge on Android and desktop.
- Safari does not fire this event. The install flow is silently skipped; no banner is shown.
- Firefox does not support PWA install prompts.
- In unsupported browsers, `no-install` is effectively applied automatically, the component simply does nothing for the install flow.

### Notes on the update flow

- The update flow requires Service Worker support, which is broadly available.
- The update detection and `SKIP_WAITING` mechanism works in all browsers that support Service Workers.
- Safari supports Service Workers since iOS 11.1 / macOS Safari 11.1.

---

## Framework compatibility

| Framework | Status | Notes |
|---|---|---|
| HTML vanilla | Supported | Direct `<script type="module">` or CDN |
| React 17+ | Supported | Import in client components only |
| Next.js 13+ | Supported | Use `'use client'` or dynamic import with `ssr: false` |
| Vue 3 | Supported | Add to `isCustomElement` in Vite config |
| Nuxt 3 | Supported | Use `<ClientOnly>` or client-side plugin |
| Angular 14+ | Supported | Add `CUSTOM_ELEMENTS_SCHEMA` to module |
| Svelte | Supported | Import in component script |
| SvelteKit | Supported | Import in `onMount` only |

See [Framework usage](guide/framework-usage.md) for implementation details.

---

## Build output formats

| File | Format | Use case |
|---|---|---|
| `browserux-pwa-ui.esm.js` | ES Module | Bundler projects (Vite, Webpack, Rollup) |
| `browserux-pwa-ui.umd.js` | UMD | Legacy script tags, CommonJS environments |
| `browserux-pwa-ui.min.js` | UMD minified | CDN usage, production without bundler |
| `browserux-pwa-ui.d.ts` | TypeScript | Type-checked projects |

The ESM bundle is the default export (the `"module"` field in `package.json`).

---

## Dependencies

`browserux-pwa-ui` has no runtime dependencies. It is a self-contained Web Component compiled from TypeScript.

Build dependencies:

| Package | Role |
|---|---|
| [typescript](https://www.typescriptlang.org/) | TypeScript compiler |
| [rollup](https://rollupjs.org/) | Module bundler |
| [@rollup/plugin-typescript](https://github.com/rollup/plugins) | TypeScript plugin for Rollup |
| [@rollup/plugin-node-resolve](https://github.com/rollup/plugins) | Node module resolution |
| [@rollup/plugin-terser](https://github.com/rollup/plugins) | Minification |
| [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts) | TypeScript declaration bundling |
