[EN](../README.md) | **FR**

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# BrowserUX PWA UI

Un Web Component universel pour afficher une interface d'installation et de mise à jour de Progressive Web App (PWA), indépendant de tout framework ou bundler.

Il permet de proposer une expérience utilisateur claire, cohérente et personnalisable pour l'installation et les mises à jour de votre PWA, tout en restant léger, autonome et facile à intégrer dans n’importe quel projet, du plus simple au plus moderne.

[![npm version](https://img.shields.io/npm/v/browserux-pwa-ui.svg)](https://www.npmjs.com/package/browserux-pwa-ui)

- Le site du projet : [BrowserUX PWA UI](https://browserux.com/fr/pwa-ui/)
- [La documentation](https://browserux.com/fr/pwa-ui/documentation/)
- [À propos de BrowserUX PWA UI](https://browserux.com/fr/blog/articles/a-propos-de-browserux-pwa-ui.html)

## Pourquoi ce Web component ?

Le système d’installation et de mise à jour des Progressive Web Apps (PWA) est aujourd’hui très mal intégré du point de vue de l’utilisateur :

- L’installation repose sur un événement (beforeinstallprompt) peu visible et peu déclenché.
- La mise à jour se fait silencieusement, sans retour visuel, ce qui déstabilise l'utilisateur.
- Il n’existe aucune interface native unifiée ou personnalisable pour guider l’utilisateur à travers ces étapes.

Ce composant a été créé pour combler ces manques UX :

il fournit une interface claire, personnalisable et multilingue, pour encourager l’installation d’une PWA et notifier élégamment les mises à jour, avec un comportement UX cohérent entre les navigateurs.

### Avantages

- Universel : fonctionne partout (HTML natif, React, Vue, etc.)
- Zéro dépendance : pas besoin de Vite, React ou d'autres outils modernes
- Personnalisable : styles via CSS variables, textes via attributs, icônes via slots
- Multilingue : détection automatique de la langue, ou forçage via attribut lang
- Mode léger : Shadow DOM désactivable (no-shadow)
- Complète l’expérience PWA : installation + mise à jour, sans logique métier

## Fonctionnalités

- 📥 Affiche le bouton d’installation lors de l’événement beforeinstallprompt
- ✅ Affiche une bannière de confirmation après installation réussie
- 🛰️ Détecte automatiquement les mises à jour via registration.waiting
- 🔄 Affiche une interface de mise à jour avec bouton "Mettre à jour"
- 📤 Envoie le message SKIP_WAITING au service worker et recharge la page
- 🌐 Fonctionne sans Shadow DOM si l’attribut no-shadow est présent
- 🎨 Personnalisation des icônes via slots
- 🌍 Traductions incluses : Français, Anglais, Espagnol, 🇮🇹 Italien, Allemand, Japonais, Russe, Néerlandais, Portugais

## Installation

> Ce composant fournit uniquement l’interface utilisateur pour l’installation et la mise à jour d’une PWA.
Il suppose que votre manifest et service worker sont déjà en place.

```bash
npm install browserux-pwa-ui
```

Ou via CDN:

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js"></script>
```

>  Utilisez la version .esm.js si vous intégrez ce composant via bundler (React, Vue, etc.), et la version .min.js pour une intégration HTML directe via CDN.

## Utilisation

### Projet moderne avec bundler (Vite, Webpack, etc.)

1. Importez le composant dans votre fichier d’entrée :

```js
import 'browserux-pwa-ui';
```

2. Puis utilisez-le dans votre HTML :

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

### React / Next.js

1. Dans votre composant, chargez-le dynamiquement :

```jsx
import { useEffect } from 'react';

useEffect(() => {
    import('browserux-pwa-ui');
}, []);
```

2. Puis dans le JSX :

```jsx
<browserux-pwa-ui></browserux-pwa-ui>
```

### Vue 3

1. Dans `main.js` ou `main.ts` :

```js
import 'browserux-pwa-ui';
```

2. Utilisez-le comme une balise HTML personnalisée :

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

### Angular

1. Dans `main.ts` :

```ts
import 'browserux-pwa-ui';
```

2. Ajoutez le `CUSTOM_ELEMENTS_SCHEMA` dans `AppModule` :

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

### Intégration sans bundler / script global

1. Ajoutez directement le composant via un CDN :

```html
<script type="module" src="https://unpkg.com/browserux-theme-switcher/dist/browserux-pwa-ui.min.js"></script>
```

2. Puis la balise :

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

## Paramètres de BrowserUX PWA UI

### Attributs fonctionnels

| Attribut     | Description                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `no-install` | Masque l’interface d’installation                                                                                    |
| `no-update`  | Masque l’interface de mise à jour                                                                                    |
| `no-shadow`  | Désactive le Shadow DOM (des styles globaux sont alors requis)                                                       |
| `lang="xx"`  | Force la langue affichée (`fr`, `en`, `es`, `de`, etc.)                                                              |
| `snackbar`   | Le bandeau est en mode en mode snackbar (flottant dans un coin de l’écran) pour les résolutions d'écran > 1024px                                 |
| `position`   | Positionne le snackbar : `top-left`, `top-right`, `bottom-left`, `bottom-right` (valeur par défaut : `bottom-right`) |


> Si `lang` n’est pas défini : le composant essaie d’utiliser document.`documentElement.lang`, puis utilise l’anglais par défaut (`en`).

#### Exemple : 

```html
<browserux-pwa-ui
  no-update
  no-shadow
  lang="fr"
></browserux-pwa-ui>         |
```

### Traduction des textes

Tous les textes affichés sont automatiquement traduits.
Vous pouvez les surcharger via des attributs HTML :

| Attribut               | Par défaut (ex. français)               |
| ---------------------- | --------------------------------------- |
| `text-install-title`   | Installez cette application             |
| `text-install-message` | Téléchargez notre application gratuite... |
| `text-install-button`  | Installer                               |
| `text-installed-title` | Application installée !                 |
| `text-update-title`    | Une mise à jour est disponible          |
| `text-update-button`   | Mettre à jour                           |

#### Exemple : 

```html
<browserux-pwa-ui
  text-install-title="Ajoutez ce site sur votre écran d'accueil"
  text-update-button="Redémarrer pour mettre à jour"
></browserux-pwa-ui>        |
```

#### Langues intégrées

Le composant prend en charge les langues suivantes :

- 🇬🇧 en – English (par défaut)
- 🇫🇷 fr – Français
- 🇪🇸 es – Español
- 🇩🇪 de – Deutsch
- 🇯🇵 ja – 日本語 (Japonais)
- 🇷🇺 ru – Русский (Russe)
- 🇵🇹 pt – Português
- 🇮🇹 it – Italiano
- 🇳🇱 nl – Nederlands

### Personnalisation visuelle

#### Slots icônes

| Slot name            | Utilisation par défaut       |
| -------------------- | ---------------------------- |
| `close-icon-install` | Icône de fermeture (install) |
| `close-icon-confirm` | Icône de fermeture (confirm) |
| `close-icon-update`  | Icône de fermeture (update)  |
| `loader-icon`        | Animation de chargement      |

##### Exemple : 

```html
<browserux-pwa-ui>
  <svg slot="close-icon-update" viewBox="0 0 24 24" width="24"><path d="M6 6L18 18M6 18L18 6"/></svg>
  <svg slot="loader-icon" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10" stroke="orange" fill="none"/></svg>
</browserux-pwa-ui>       |
```

#### CSS custom properties

Vous pouvez modifier les couleurs du composant via des variables CSS définies dans l’attribut style du composant, ou via un style global si no-shadow est activé.

| Variable CSS                         | Valeur par défaut     | Description                                           |
| ------------------------------------ | --------------------- | ----------------------------------------------------- |
| `--bux-pwa-banner-bg`                | `#0e93f0`             | Couleur de fond de la bannière                        |
| `--bux-pwa-banner-color`             | `#fff`                | Couleur du texte de la bannière                       |
| `--bux-pwa-banner-padding`           | `1rem`                | Espacement intérieur de la bannière                   |
| `--bux-pwa-banner-btn-bg`            | `#fff`                | Couleur de fond du bouton                             |
| `--bux-pwa-banner-btn-color`         | `#000`                | Couleur du texte du bouton                            |
| `--bux-pwa-banner-btn-hover-bg`      | `#000`                | Couleur de fond au survol du bouton                   |
| `--bux-pwa-banner-btn-hover-color`   | `#fff`                | Couleur du texte au survol du bouton                  |
| `--bux-pwa-banner-btn-padding`       | `0.8rem 2rem`         | Espacement intérieur du bouton                        |
| `--bux-pwa-banner-btn-border-radius` | `2rem`                | Rayon de bordure du bouton                            |
| `--bux-pwa-snackbar-padding`         | `2rem 2rem 2rem 1rem` | Espacement intérieur du mode snackbar                 |
| `--bux-pwa-snackbar-border-radius`   | `1rem`                | Rayon de bordure en mode snackbar                     |
| `--bux-pwa-loader-bg`                | `rgba(0, 0, 0, 0.7)`  | Couleur de fond du loader                             |
| `--bux-pwa-z-index`                  | `1000`                | Z-index utilisé pour le composant (bannière / loader) |


##### Exemple : 

```html
<browserux-pwa-ui
  style="
    --bux-pwa-color-primary: #007bff;
    --bux-pwa-color-light: #f8f9fa;
    --bux-pwa-color-primary-opacity: rgba(0, 123, 255, 0.8);
  "
></browserux-pwa-ui>         |
```

## Fonctionnement

Ce composant affiche automatiquement l’interface adaptée en fonction de l’état de votre PWA :

### Installation

- Affiche une bannière si l’événement `beforeinstallprompt` est déclenché par le navigateur.
- Permet à l’utilisateur d’installer la PWA via un bouton "Installer".
- Affiche un message de confirmation une fois l’installation complétée.

### Mise à jour

- Surveille automatiquement si un nouveau service worker est en attente (`registration.waiting`).
- Affiche une bannière avec un bouton "Mettre à jour".
- Une fois cliqué :
  - Le service worker est activé via `skipWaiting`.
  - L’application redémarre avec `window.location.reload()`.

### Langue et personnalisation

- La langue est automatiquement déterminée depuis :
  1. L’attribut `lang` du composant (`<browserux-pwa-ui lang="fr">`)
  2. `document.documentElement.lang`
  3. Sinon, par défaut `en`
- Tous les textes sont traduits et personnalisables via attributs HTML.
- Les couleurs peuvent être modifiées avec des variables CSS.
- Les icônes peuvent être remplacées avec des `<slot>`.

## Build & Développement

```bash
npm install
npm run build
```

Utilisez TypeScript + Rollup pour build :
- `dist/browserux-pwa-ui.esm.js`
- `dist/browserux-pwa-ui.umd.js`
- `dist/browserux-pwa-ui.d.ts`

## License

Licence MIT, Libre d’utilisation, de modification et de distribution.