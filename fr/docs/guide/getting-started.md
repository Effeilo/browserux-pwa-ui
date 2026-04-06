# Démarrage

## Installation

```bash
npm install browserux-pwa-ui
```

---

## Enregistrer le composant

### Option 1, Import ES module

```js
import 'browserux-pwa-ui';
```

### Option 2, Helper `defineBrowseruxComponents()`

```js
import { defineBrowseruxComponents } from 'browserux-pwa-ui';
defineBrowseruxComponents();
```

### Option 3, CDN (sans étape de build)

```html
<script type="module" src="https://unpkg.com/browserux-pwa-ui/dist/browserux-pwa-ui.esm.js"></script>
```

---

## Utilisation minimale

```html
<browserux-pwa-ui></browserux-pwa-ui>
```

Cet unique élément gère les invitations d'installation et de mise à jour. Le composant est silencieux jusqu'à ce que le navigateur émette `beforeinstallprompt` ou qu'une mise à jour du Service Worker soit détectée.

---

## Configuration recommandée

Placez l'élément près de la fin de `<body>` et précisez une langue :

```html
<body>
  <!-- contenu de votre application -->

  <browserux-pwa-ui lang="fr"></browserux-pwa-ui>

  <script type="module" src="browserux-pwa-ui.esm.js"></script>
</body>
```

---

## Désactiver l'installation ou la mise à jour

```html
<!-- Afficher uniquement les notifications de mise à jour -->
<browserux-pwa-ui no-install></browserux-pwa-ui>

<!-- Afficher uniquement l'invitation à l'installation -->
<browserux-pwa-ui no-update></browserux-pwa-ui>
```

---

## Mode snackbar desktop

Sur les écrans ≥ 1024px, activez le mode snackbar plutôt que la bannière pleine largeur :

```html
<browserux-pwa-ui snackbar position="bottom-right"></browserux-pwa-ui>
```

Positions disponibles : `top-left`, `top-right`, `bottom-left`, `bottom-right`.

---

## Prérequis

Le flux d'installation nécessite :
- Un fichier `manifest.json` valide lié dans `<head>`
- HTTPS (ou `localhost`)
- Un navigateur supportant `beforeinstallprompt` (Chrome, Edge)

Le flux de mise à jour nécessite :
- Un Service Worker enregistré
- Que le Service Worker gère `SKIP_WAITING` (via Workbox ou manuellement)
