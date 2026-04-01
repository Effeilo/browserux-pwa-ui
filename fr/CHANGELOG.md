[EN](../CHANGELOG.md) | **FR**

<div>
  <img src="https://browserux.com/img/logos/logo-browserux-pwa-ui-300.png" alt="BrowserUX PWA UI logo"/>
</div>

# 📦 CHANGELOG

Toutes les modifications notables de ce projet sont listées ici.

Le format suit les bonnes pratiques de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/)
et utilise le versionnage sémantique [SemVer](https://semver.org/lang/fr/).

---

<br>

## [1.1.0] – 2026-03-29

### ♿ Accessibilité

- Ajout de `role="alert"` et `aria-live="assertive"` sur les bannières d'installation et de mise à jour
- Ajout de `role="status"` et `aria-live="polite"` sur la bannière de confirmation d'installation
- Ajout de `role="button"`, `tabindex="0"` et `aria-label` localisé sur les boutons de fermeture (traduit dans les 9 langues via la nouvelle clé i18n `closeButton`)
- Ajout de `aria-hidden="true"` et `focusable="false"` sur les icônes SVG décoratives
- Navigation clavier : les boutons de fermeture répondent désormais aux touches `Entrée` et `Espace`
- Gestion du focus : le focus est automatiquement déplacé sur le bouton d'action à l'apparition d'une bannière, puis sur le bouton de fermeture après l'installation

### ✨ Nouvelles fonctionnalités

- **Événements personnalisés** : le composant émet désormais `pwa-install`, `pwa-installed`, `pwa-update` et `pwa-updated` sur l'élément hôte (bubbling, composed — traversent le Shadow DOM)
- **Attribut `loader-duration`** : configure la durée d'affichage du loader en millisecondes avant l'apparition de la bannière de confirmation (valeur par défaut : `2500`)
- **Attribut `lang` réactif** : modifier l'attribut `lang` après le rendu met désormais à jour en temps réel tous les textes visibles et les `aria-label`, sans remonter le composant
- **`prefers-reduced-motion`** : les transitions CSS des bannières sont désactivées pour les utilisateurs qui préfèrent les animations réduites

### 🐛 Corrections de bugs

- **Fuite mémoire** : ajout du `disconnectedCallback()` — les écouteurs d'événements globaux (`beforeinstallprompt`, `appinstalled`, `controllerchange`, `updatefound`) sont désormais correctement supprimés lorsque le composant est retiré du DOM
- **Gestion d'erreur Service Worker** : les appels à `navigator.serviceWorker` sont désormais enveloppés dans un `try/catch` avec une vérification `'serviceWorker' in navigator` ; le composant se dégrade gracieusement dans les environnements non-HTTPS ou non compatibles

### 🎨 Styles

- Ajout d'un contour `:focus-visible` sur les boutons de fermeture pour les utilisateurs au clavier

<br>

---

<br>

## [1.0.0] - 18-07-2025

### 🚀 Première version stable

#### ✨ Fonctionnalités principales

- Web Component universel pour PWA : installation et mise à jour
- Interface multilingue (détection auto ou forçage via `lang`)
- Bannière d'installation déclenchée par `beforeinstallprompt`
- Interface de mise à jour déclenchée par `registration.waiting`
- Bouton d'action pour `skipWaiting()` + `window.location.reload()`
- Composant sans dépendances externes (fonctionne avec ou sans bundler)
- Support du Shadow DOM (désactivable via `no-shadow`)
- Intégration facile dans React, Vue, Angular ou HTML natif

#### 🎨 Personnalisation

- Textes personnalisables via attributs HTML (`text-*`)
- Couleurs et styles adaptables via variables CSS (`--bux-pwa-*`)
- Slots pour les icônes (`close-icon-*`, `loader-icon`)

#### 🧩 Options supplémentaires

- Mode `snackbar` via l'attribut `snackbar` : bannière flottante dans un coin de l'écran
- Position du snackbar configurable via l'attribut `position` (`top-left`, `top-right`, `bottom-left`, `bottom-right`)
- Comportement adaptatif : le mode snackbar s'active automatiquement sur les écrans > `1024px`
- Variables CSS spécifiques au mode snackbar (`--bux-pwa-snackbar-padding`, `--bux-pwa-snackbar-border-radius`, etc.)

<br>

---

<br>
