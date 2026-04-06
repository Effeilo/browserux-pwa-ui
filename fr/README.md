[EN](../README.md) | **FR**

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# BrowserUX PWA UI

**Un Web Component universel pour afficher une interface d'installation et de mise à jour pour les Progressive Web Apps (PWA), indépendant de tout framework ou bundler.**

BrowserUX PWA UI offre une expérience utilisateur claire, cohérente et personnalisable pour l'installation et la mise à jour de votre PWA, tout en restant léger, autonome et facile à intégrer dans n'importe quel projet, des simples pages HTML aux applications JavaScript modernes.

- [Site du projet](https://browserux.com/fr/pwa-ui/)
- [Démo](https://browserux.com/fr/pwa-ui/demo/)
- [Documentation](./docs/index.md)
- [Changelog](./CHANGELOG.md)

<br>

[![npm version](https://img.shields.io/npm/v/browserux-pwa-ui.svg)](https://www.npmjs.com/package/browserux-pwa-ui)
[![unpkg](https://img.shields.io/badge/CDN-unpkg-brightgreen)](https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.min.js)

## Fonctionnalités

- 📲 Intercepte `beforeinstallprompt`, supprime le badge navigateur par défaut et affiche une bannière personnalisée
- ✅ Confirmation post-installation avec durée de chargement configurable
- 🔄 Détection des mises à jour du Service Worker via `registration.waiting` et `updatefound`
- ⚡ `SKIP_WAITING` → `controllerchange` → rechargement automatique de la page
- 🖥 Mode snackbar pour le desktop (≥ 1024px), bannière positionnée pour le mobile
- 🌍 9 langues intégrées : `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru`
- ✏️ Remplacement de texte complet via les attributs `text-*`
- 🎛 Slots nommés pour remplacer les icônes
- 🎨 Propriétés CSS personnalisées pour le thème
- 🧩 Mode `no-shadow` pour l'accès aux feuilles de style globales
- ♿ Support de `prefers-reduced-motion`

## Installation

```bash
npm install browserux-pwa-ui
```

Ou via CDN :

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.esm.js"></script>
```

## Utilisation

```js
import 'browserux-pwa-ui';
```

```html
<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

## Paramètres

| Paramètre | Type | Défaut | Description |
|---|---|---|---|
| `lang` | Attribut | `en` | Langue intégrée : `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru` |
| `no-install` | Attribut | — |   Désactive la bannière d'installation |
| `no-update` | Attribut | — |   Désactive la bannière de mise à jour |
| `no-shadow` | Attribut | — |   Rend dans le light DOM |
| `snackbar` | Attribut | — |   Active le mode snackbar sur desktop (≥ 1024px) |
| `position` | Attribut | `bottom-right` | Position du snackbar : `top-left`, `top-right`, `bottom-left`, `bottom-right` |
| `loader-duration` | Attribut | `2500` | Durée de l'overlay de chargement en ms après l'installation |
| `text-install-title` | Attribut | — |   Remplace le titre de la bannière d'installation |
| `text-install-message` | Attribut | — |   Remplace le texte du corps de la bannière d'installation |
| `text-install-button` | Attribut | — |   Remplace le label du bouton d'installation |
| `text-installed-title` | Attribut | — |   Remplace le titre de la confirmation post-installation |
| `text-update-title` | Attribut | — |   Remplace le titre de la bannière de mise à jour |
| `text-update-button` | Attribut | — |   Remplace le label du bouton de mise à jour |
| `text-close-button` | Attribut | — |   Remplace le label aria du bouton de fermeture |
| `close-icon-install` | Slot | — |   Icône de fermeture de la bannière d'installation |
| `close-icon-confirm` | Slot | — |   Icône de fermeture de la confirmation post-installation |
| `close-icon-update` | Slot | — |   Icône de fermeture de la bannière de mise à jour |
| `loader-icon` | Slot | — |   Icône dans l'overlay de chargement |
| `pwa-install` | Événement | — |   `beforeinstallprompt` capturé, bannière d'installation affichée |
| `pwa-installed` | Événement | — |   Application installée, confirmation affichée |
| `pwa-update` | Événement | — |   Bannière de mise à jour affichée |
| `pwa-updated` | Événement | — |   Nouveau SW actif, avant rechargement de la page |

## Documentation

Pour la documentation complète, voir [docs/index.md](docs/index.md).

### Guide

- [Introduction](docs/guide/introduction.md) : ce que fait le composant, quand l'utiliser, fonctionnalités
- [Démarrage](docs/guide/getting-started.md) : installation via npm ou CDN, configuration de base
- [Fonctionnement](docs/guide/how-it-works.md) : flux d'installation, flux de mise à jour, mode `no-shadow`
- [Utilisation avec les frameworks](docs/guide/framework-usage.md) : React, Vue, Angular, Svelte, Next.js, Nuxt
- [Personnalisation](docs/guide/customization.md) : propriétés CSS, remplacement de textes, slots

### Référence

- [Attributs](docs/reference/attributes.md) : tous les attributs HTML avec valeurs par défaut et descriptions
- [Événements](docs/reference/events.md) : `pwa-install`, `pwa-installed`, `pwa-update`, `pwa-updated`
- [Slots](docs/reference/slots.md) : slots nommés pour remplacer les icônes de fermeture et de chargement

### Référence complémentaire

- [Compatibilité](docs/compatibility.md) : support navigateur, compatibilité frameworks, formats de build
- [Contribuer](docs/contributing.md) : signaler un bug, suggérer une amélioration, soumettre une PR

## Licence

MIT © 2026 [Effeilo](https://github.com/Effeilo)
