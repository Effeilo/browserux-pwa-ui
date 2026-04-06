# Framework usage

`<browserux-pwa-ui>` is a standard Web Component and works in any framework environment. The component only needs to be registered once, it handles everything internally.

---

## HTML (vanilla)

```html
<script type="module" src="browserux-pwa-ui.esm.js"></script>
<browserux-pwa-ui lang="en"></browserux-pwa-ui>
```

---

## React

Import the package in a client-side component. In React 18+, attributes map directly to HTML attributes.

```jsx
import 'browserux-pwa-ui';

export function PWAProvider() {
  return <browserux-pwa-ui lang="en" snackbar position="bottom-right" />;
}
```

Render this component once at the root level (e.g., in `App.jsx`).

---

## Next.js 13+ (App Router)

Add `'use client'` to prevent server-side rendering of the Web Component:

```jsx
'use client';

import { useEffect } from 'react';

export default function PWAProvider() {
  useEffect(() => {
    import('browserux-pwa-ui');
  }, []);

  return <browserux-pwa-ui lang="en"></browserux-pwa-ui>;
}
```

Or use dynamic import with `ssr: false` in the Pages Router:

```js
import dynamic from 'next/dynamic';
const PWAProvider = dynamic(() => import('./PWAProvider'), { ssr: false });
```

---

## Vue 3

Tell Vite to treat `browserux-pwa-ui` as a custom element to suppress warnings:

```js
// vite.config.ts
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'browserux-pwa-ui',
        },
      },
    }),
  ],
});
```

```vue
<script setup>
import 'browserux-pwa-ui';
</script>

<template>
  <browserux-pwa-ui lang="en" />
</template>
```

---

## Nuxt 3

Use `<ClientOnly>` to prevent SSR:

```vue
<template>
  <ClientOnly>
    <browserux-pwa-ui lang="en" />
  </ClientOnly>
</template>

<script setup>
import 'browserux-pwa-ui';
</script>
```

Or create a plugin:

```js
// plugins/pwa-ui.client.ts
import 'browserux-pwa-ui';
```

---

## Angular

Add `CUSTOM_ELEMENTS_SCHEMA` to your module to allow unknown elements:

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Import in your component:

```ts
import 'browserux-pwa-ui';
```

```html
<browserux-pwa-ui lang="en"></browserux-pwa-ui>
```

---

## Svelte

```svelte
<script>
  import 'browserux-pwa-ui';
</script>

<browserux-pwa-ui lang="en" />
```

---

## SvelteKit

Import only on the client side:

```svelte
<script>
  import { onMount } from 'svelte';
  onMount(() => { import('browserux-pwa-ui'); });
</script>

<browserux-pwa-ui lang="en" />
```
