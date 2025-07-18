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

## [1.0.0] - 18-07-2025

### 🚀 Première version stable

#### ✨ Fonctionnalités principales

- Web Component universel pour PWA : installation et mise à jour
- Interface multilingue (détection auto ou forçage via `lang`)
- Bannière d’installation déclenchée par `beforeinstallprompt`
- Interface de mise à jour déclenchée par `registration.waiting`
- Bouton d’action pour `skipWaiting()` + `window.location.reload()`
- Composant sans dépendances externes (fonctionne avec ou sans bundler)
- Support du Shadow DOM (désactivable via `no-shadow`)
- Intégration facile dans React, Vue, Angular ou HTML natif

#### 🎨 Personnalisation

- Textes personnalisables via attributs HTML (`text-*`)
- Couleurs et styles adaptables via variables CSS (`--bux-pwa-*`)
- Slots pour les icônes (`close-icon-*`, `loader-icon`)

#### 🧩 Options supplémentaires

- Mode `snackbar` via l’attribut `snackbar` : bannière flottante dans un coin de l’écran
- Position du snackbar configurable via l’attribut `position` (`top-left`, `top-right`, `bottom-left`, `bottom-right`)
- Comportement adaptatif : le mode snackbar s’active automatiquement sur les écrans > `1024px`
- Variables CSS spécifiques au mode snackbar (`--bux-pwa-snackbar-padding`, `--bux-pwa-snackbar-border-radius`, etc.)

<br>

---

<br>