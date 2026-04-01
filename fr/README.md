[EN](../README.md) | **FR**

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# BrowserUX PWA UI

Un Web Component universel pour afficher une interface d'installation et de mise à jour de Progressive Web App (PWA), indépendant de tout framework ou bundler.

Il permet de proposer une expérience utilisateur claire, cohérente et personnalisable pour l'installation et les mises à jour de votre PWA, tout en restant léger, autonome et facile à intégrer dans n'importe quel projet, du plus simple au plus moderne.

[![npm version](https://img.shields.io/npm/v/browserux-pwa-ui.svg)](https://www.npmjs.com/package/browserux-pwa-ui)

- Le site du projet : [BrowserUX PWA UI](https://browserux.com/fr/pwa-ui/)
- [La documentation](https://browserux.com/fr/pwa-ui/documentation/)
- [À propos de BrowserUX PWA UI](https://browserux.com/fr/blog/articles/a-propos-de-browserux-pwa-ui.html)

## Pourquoi ce Web component ?

Le système d'installation et de mise à jour des Progressive Web Apps (PWA) est aujourd'hui très mal intégré du point de vue de l'utilisateur :

- L'installation repose sur un événement (beforeinstallprompt) peu visible et peu déclenché.
- La mise à jour se fait silencieusement, sans retour visuel, ce qui déstabilise l'utilisateur.
- Il n'existe aucune interface native unifiée ou personnalisable pour guider l'utilisateur à travers ces étapes.

Ce composant a été créé pour combler ces manques UX :

il fournit une interface claire, personnalisable et multilingue, pour encourager l'installation d'une PWA et notifier élégamment les mises à jour, avec un comportement UX cohérent entre les navigateurs.

### Avantages

- Universel : fonctionne partout (HTML natif, React, Vue, etc.)
- Zéro dépendance : pas besoin de Vite, React ou d'autres outils modernes
- Personnalisable : styles via CSS variables, textes via attributs, icônes via slots
- Multilingue : détection automatique de la langue, ou forçage via attribut lang
- Mode léger : Shadow DOM désactivable (no-shadow)
- Complète l'expérience PWA : installation + mise à jour, sans logique métier

## Fonctionnalités

- 📥 Affiche le bouton d'installation lors de l'événement beforeinstallprompt
- ✅ Affiche une bannière de confirmation après installation réussie
- 🛰️ Détecte automatiquement les mises à jour via registration.waiting
- 🔄 Affiche une interface de mise à jour avec bouton "Mettre à jour"
- 📤 Envoie le message SKIP_WAITING au service worker et recharge la page
- 🌐 Fonctionne sans Shadow DOM si l'attribut no-shadow est présent
- 🎨 Personnalisation des icônes via slots
- 🌍 Traductions incluses : Français, Anglais, Espagnol, 🇮🇹 Italien, Allemand, Japonais, Russe, Néerlandais, Portugais
- ♿ Accessible : rôles ARIA, labels localisés, navigation clavier et gestion du focus
- 📡 Émet des événements personnalisés (`pwa-install`, `pwa-installed`, `pwa-update`, `pwa-updated`)
- 🎭 Respecte `prefers-reduced-motion` pour les utilisateurs préférant des animations réduites

## Installation

> Ce composant fournit uniquement l'interface utilisateur pour l'installation et la mise à jour d'une PWA.
Il suppose que votre manifest et service worker sont déjà en place.

```bash
npm install browserux-pwa-ui
```

Ou via CDN:

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js"></script>
```

> Utilisez la version `.esm.js` si vous intégrez ce composant via bundler (React, Vue, etc.), et la version `.min.js` pour une intégration HTML directe via CDN.

## Utilisation

### Projet moderne avec bundler (Vite, Webpack, etc.)

1. Importez le composant dans votre fichier d'entrée :

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
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js"></script>
```

2. Puis la balise :

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

## Paramètres de BrowserUX PWA UI

### Attributs fonctionnels

| Attribut           | Description                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `no-install`       | Masque l'interface d'installation                                                                                    |
| `no-update`        | Masque l'interface de mise à jour                                                                                    |
| `no-shadow`        | Désactive le Shadow DOM (des styles globaux sont alors requis)                                                       |
| `lang="xx"`        | Force la langue affichée (`fr`, `en`, `es`, `de`, etc.). Réactif : modifier cet attribut met à jour les labels en temps réel. |
| `snackbar`         | Le bandeau est en mode snackbar (flottant dans un coin de l'écran) pour les résolutions d'écran > 1024px             |
| `position`         | Positionne le snackbar : `top-left`, `top-right`, `bottom-left`, `bottom-right` (valeur par défaut : `bottom-right`) |
| `loader-duration`  | Durée en millisecondes d'affichage du loader avant la bannière de confirmation (valeur par défaut : `2500`)          |


> Si `lang` n'est pas défini : le composant essaie d'utiliser `document.documentElement.lang`, puis utilise l'anglais par défaut (`en`).

#### Exemple :

```html
<browserux-pwa-ui
  no-update
  no-shadow
  snackbar
  position="top-right"
  lang="fr"
  loader-duration="3000"
></browserux-pwa-ui>
```

### Traduction des textes

Tous les textes affichés sont automatiquement traduits.
Vous pouvez les surcharger via des attributs HTML :

| Attribut               | Par défaut (ex. français)               |
| ---------------------- | --------------------------------------- |
| `text-install-title`   | Installez cette application             |
| `text-install-message` | Téléchargez notre application gratuite… |
| `text-install-button`  | Installer                               |
| `text-installed-title` | Application installée !                 |
| `text-update-title`    | Une mise à jour est disponible          |
| `text-update-button`   | Mettre à jour                           |

#### Exemple :

```html
<browserux-pwa-ui
  text-install-title="Ajoutez ce site sur votre écran d'accueil"
  text-update-button="Redémarrer pour mettre à jour"
></browserux-pwa-ui>
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

### Événements personnalisés

Le composant émet les événements suivants sur l'élément hôte, vous permettant de réagir aux changements du cycle de vie de la PWA :

| Événement       | Émis quand                                                                              |
| --------------- | --------------------------------------------------------------------------------------- |
| `pwa-install`   | La bannière d'installation devient visible                                              |
| `pwa-installed` | L'application a été installée avec succès                                               |
| `pwa-update`    | Une bannière de mise à jour est affichée à l'utilisateur                                |
| `pwa-updated`   | Le service worker a pris le contrôle et la page est sur le point de se recharger        |

Tous les événements remontent (bubbling) et sont composés (ils traversent le Shadow DOM).

#### Exemple :

```html
<browserux-pwa-ui id="pwa-ui"></browserux-pwa-ui>

<script>
  const pwaUi = document.getElementById('pwa-ui');

  pwaUi.addEventListener('pwa-install', () => {
    console.log('Invite d\'installation visible.');
  });

  pwaUi.addEventListener('pwa-installed', () => {
    console.log('PWA installée avec succès !');
  });

  pwaUi.addEventListener('pwa-update', () => {
    console.log('Une mise à jour est disponible.');
  });

  pwaUi.addEventListener('pwa-updated', () => {
    console.log('Mise à jour appliquée, rechargement…');
  });
</script>
```

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
</browserux-pwa-ui>
```

#### CSS custom properties

Vous pouvez modifier les couleurs du composant via des variables CSS définies dans l'attribut `style` du composant, ou via un style global si `no-shadow` est activé.

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
  snackbar
  position="bottom-left"
  style="
    --bux-pwa-banner-bg: #212121;
    --bux-pwa-banner-color: #f1f1f1;
    --bux-pwa-banner-btn-bg: #ffffff;
    --bux-pwa-banner-btn-color: #212121;
    --bux-pwa-snackbar-border-radius: 12px;
  "
></browserux-pwa-ui>
```

## Fonctionnement

Ce composant affiche automatiquement l'interface adaptée en fonction de l'état de votre PWA :

### Installation

- Affiche une bannière si l'événement `beforeinstallprompt` est déclenché par le navigateur.
- Permet à l'utilisateur d'installer la PWA via un bouton "Installer".
- Affiche un message de confirmation une fois l'installation complétée.

### Mise à jour

- Surveille automatiquement si un nouveau service worker est en attente (`registration.waiting`).
- Affiche une bannière avec un bouton "Mettre à jour".
- Une fois cliqué :
  - Le service worker est activé via `skipWaiting`.
  - L'application redémarre avec `window.location.reload()`.

### Langue et personnalisation

- La langue est automatiquement déterminée depuis :
  1. L'attribut `lang` du composant (`<browserux-pwa-ui lang="fr">`)
  2. `document.documentElement.lang`
  3. Sinon, par défaut `en`
- Modifier l'attribut `lang` en cours d'exécution met immédiatement à jour tous les labels visibles.
- Tous les textes sont traduits et personnalisables via attributs HTML.
- Les couleurs peuvent être modifiées avec des variables CSS.
- Les icônes peuvent être remplacées avec des `<slot>`.

### Accessibilité

- Les bannières d'installation et de mise à jour utilisent `role="alert"` avec `aria-live="assertive"` afin que les lecteurs d'écran les annoncent immédiatement.
- La bannière de confirmation utilise `role="status"` avec `aria-live="polite"` pour une annonce moins intrusive.
- Les boutons de fermeture ont `role="button"`, `tabindex="0"` et un `aria-label` localisé, ce qui les rend entièrement utilisables au clavier.
- Le focus est automatiquement déplacé sur le bouton d'action à l'apparition d'une bannière, puis sur le bouton de fermeture après l'installation.
- La media query `prefers-reduced-motion` désactive les transitions CSS pour les utilisateurs préférant des animations réduites.

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

Licence MIT, Libre d'utilisation, de modification et de distribution.
