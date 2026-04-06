# Contributing

Contributions are welcome. Whether you want to report a bug, suggest an improvement, or submit a pull request, feel free to participate.

---

## Reporting an issue

Open an issue on the GitHub repository to:

- Report a bug or unexpected behavior.
- Suggest an improvement or new feature.
- Discuss an idea before submitting a pull request.

When reporting a bug, include:

- Your browser and version
- Your Node.js version (`node -v`) if applicable
- The framework or environment used (React, Vue, vanilla HTML, etc.)
- Whether the issue affects the install flow, the update flow, or both
- Whether you are using `no-shadow` mode
- The error message and console output if applicable
- A minimal reproduction (CodePen, StackBlitz, or a minimal HTML file)

---

## Submitting a pull request

1. Fork the repository.
2. Create a dedicated branch:

```bash
git checkout -b my-change
```

3. Make your changes.
4. Build the package to verify output:

```bash
npm run build
```

5. Commit with a clear message:

```bash
git commit -m "Fix: description of the change"
```

6. Push the branch and open a pull request on GitHub.

---

## Running locally

```bash
# Install dependencies
npm install

# Build all output formats
npm run build
```

---

## Good practices

- Stay within the focused scope of the component: PWA install and update UI.
- Only change what is necessary. Targeted changes are easier to review.
- Test in Chrome and Edge, `beforeinstallprompt` behavior differs from other browsers.
- Verify keyboard navigation (Tab, Escape, close buttons) still works after any banner changes.
- Confirm that `no-shadow` mode continues to function after any template or lifecycle changes.
- Confirm that the reactive `lang` attribute updates labels correctly at runtime.
- Confirm that `disconnectedCallback` cleans up all Service Worker event listeners.
- Consult the [changelog](../CHANGELOG.md) to understand the history of past decisions.

---

## Project structure

```
├── dist/                       compiled output
│   ├── browserux-pwa-ui.esm.js
│   ├── browserux-pwa-ui.umd.js
│   ├── browserux-pwa-ui.min.js
│   └── browserux-pwa-ui.d.ts
├── src/
│   └── browserux-pwa-ui/
│       ├── BrowserUXPWAUI.ts   main Web Component class
│       ├── installPrompt.ts    beforeinstallprompt logic
│       ├── updatePrompt.ts     Service Worker update logic
│       └── style.ts            CSS (custom properties, layout, themes)
├── docs/                       English documentation
├── fr/docs/                    French documentation
├── rollup.config.mjs
├── tsconfig.json
└── package.json
```

---

## Acknowledgements

`browserux-pwa-ui` is built with:

- [TypeScript](https://www.typescriptlang.org/), typed language and compiler
- [Rollup](https://rollupjs.org/), module bundler
- The [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) standard, Custom Elements and Shadow DOM
- The [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), update detection and `SKIP_WAITING`
- The [`beforeinstallprompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event) event, deferred install prompt
