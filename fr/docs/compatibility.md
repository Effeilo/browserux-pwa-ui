# Compatibilité

---

## Prérequis d'environnement

| Environnement | Version minimale | Raison |
|---|---|---|
| Node.js | 18+ | Requis pour les projets basés sur npm |
| Navigateur | Voir tableau ci-dessous | Custom Elements v1, Shadow DOM, beforeinstallprompt |

---

## Support navigateur

`<browserux-pwa-ui>` utilise les APIs Web Components standards et l'amélioration progressive pour les fonctionnalités navigateur spécifiques aux PWA.

| Fonctionnalité | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Custom Elements v1 | 67+ | 63+ | 10.1+ | 79+ |
| Shadow DOM v1 | 53+ | 63+ | 10+ | 79+ |
| `beforeinstallprompt` | 44+ | Non supporté | Non supporté | 17+ |
| Service Worker | 45+ | 44+ | 11.1+ | 17+ |

### Notes sur `beforeinstallprompt`

- La bannière d'installation n'apparaît que dans les navigateurs supportant `beforeinstallprompt`, principalement Chrome et Edge sur Android et desktop.
- Safari n'émet pas cet événement. Le flux d'installation est silencieusement ignoré ; aucune bannière n'est affichée.
- Firefox ne supporte pas les invites d'installation PWA.
- Dans les navigateurs non supportés, `no-install` est effectivement appliqué automatiquement, le composant ne fait simplement rien pour le flux d'installation.

### Notes sur le flux de mise à jour

- Le flux de mise à jour nécessite le support des Service Workers, largement disponible.
- La détection de mise à jour et le mécanisme `SKIP_WAITING` fonctionnent dans tous les navigateurs supportant les Service Workers.
- Safari supporte les Service Workers depuis iOS 11.1 / macOS Safari 11.1.

---

## Compatibilité frameworks

| Framework | Statut | Notes |
|---|---|---|
| HTML vanilla | Supporté | `<script type="module">` direct ou CDN |
| React 17+ | Supporté | Importer dans les composants client uniquement |
| Next.js 13+ | Supporté | Utiliser `'use client'` ou import dynamique avec `ssr: false` |
| Vue 3 | Supporté | Ajouter à `isCustomElement` dans la config Vite |
| Nuxt 3 | Supporté | Utiliser `<ClientOnly>` ou plugin côté client |
| Angular 14+ | Supporté | Ajouter `CUSTOM_ELEMENTS_SCHEMA` au module |
| Svelte | Supporté | Importer dans le script du composant |
| SvelteKit | Supporté | Importer dans `onMount` uniquement |

Voir [Utilisation avec les frameworks](guide/framework-usage.md) pour les détails d'implémentation.

---

## Formats de build disponibles

| Fichier | Format | Cas d'usage |
|---|---|---|
| `browserux-pwa-ui.esm.js` | ES Module | Projets avec bundler (Vite, Webpack, Rollup) |
| `browserux-pwa-ui.umd.js` | UMD | Balises script legacy, environnements CommonJS |
| `browserux-pwa-ui.min.js` | UMD minifié | Usage CDN, production sans bundler |
| `browserux-pwa-ui.d.ts` | TypeScript | Projets avec vérification de types |

Le bundle ESM est l'export par défaut (champ `"module"` dans `package.json`).

---

## Dépendances

`browserux-pwa-ui` n'a aucune dépendance à l'exécution. C'est un Web Component autonome compilé depuis TypeScript.

Dépendances de compilation :

| Package | Rôle |
|---|---|
| [typescript](https://www.typescriptlang.org/) | Compilateur TypeScript |
| [rollup](https://rollupjs.org/) | Bundler de modules |
| [@rollup/plugin-typescript](https://github.com/rollup/plugins) | Plugin TypeScript pour Rollup |
| [@rollup/plugin-node-resolve](https://github.com/rollup/plugins) | Résolution des modules Node |
| [@rollup/plugin-terser](https://github.com/rollup/plugins) | Minification |
| [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts) | Bundling des déclarations TypeScript |
