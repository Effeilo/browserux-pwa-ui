# Utilisation avec les frameworks

`<browserux-pwa-ui>` est un Web Component standard et fonctionne dans tout environnement framework. Le composant n'a besoin d'être enregistré qu'une seule fois, il gère tout en interne.

---

## HTML (vanilla)

```html
<script type="module" src="browserux-pwa-ui.esm.js"></script>
<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

---

## React

Importez le package dans un composant côté client. Dans React 18+, les attributs correspondent directement aux attributs HTML.

```jsx
import 'browserux-pwa-ui';

export function PWAProvider() {
  return <browserux-pwa-ui lang="fr" snackbar position="bottom-right" />;
}
```

Rendez ce composant une seule fois au niveau racine (par exemple dans `App.jsx`).

---

## Next.js 13+ (App Router)

Ajoutez `'use client'` pour empêcher le rendu côté serveur du Web Component :

```jsx
'use client';

import { useEffect } from 'react';

export default function PWAProvider() {
  useEffect(() => {
    import('browserux-pwa-ui');
  }, []);

  return <browserux-pwa-ui lang="fr"></browserux-pwa-ui>;
}
```

Ou utilisez un import dynamique avec `ssr: false` dans le Pages Router :

```js
import dynamic from 'next/dynamic';
const PWAProvider = dynamic(() => import('./PWAProvider'), { ssr: false });
```

---

## Vue 3

Indiquez à Vite de traiter `browserux-pwa-ui` comme un élément personnalisé pour éviter les avertissements :

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
  <browserux-pwa-ui lang="fr" />
</template>
```

---

## Nuxt 3

Utilisez `<ClientOnly>` pour éviter le SSR :

```vue
<template>
  <ClientOnly>
    <browserux-pwa-ui lang="fr" />
  </ClientOnly>
</template>

<script setup>
import 'browserux-pwa-ui';
</script>
```

Ou créez un plugin :

```js
// plugins/pwa-ui.client.ts
import 'browserux-pwa-ui';
```

---

## Angular

Ajoutez `CUSTOM_ELEMENTS_SCHEMA` à votre module pour autoriser les éléments inconnus :

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Importez dans votre composant :

```ts
import 'browserux-pwa-ui';
```

```html
<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

---

## Svelte

```svelte
<script>
  import 'browserux-pwa-ui';
</script>

<browserux-pwa-ui lang="fr" />
```

---

## SvelteKit

Importez uniquement côté client :

```svelte
<script>
  import { onMount } from 'svelte';
  onMount(() => { import('browserux-pwa-ui'); });
</script>

<browserux-pwa-ui lang="fr" />
```
