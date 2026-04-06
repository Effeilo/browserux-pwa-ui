# Fonctionnement

## Flux d'installation

### 1. Capture de `beforeinstallprompt`

Le composant écoute l'événement `beforeinstallprompt` sur `window`. Quand il se déclenche, le composant :

1. Appelle `event.preventDefault()` pour supprimer le badge d'installation par défaut du navigateur.
2. Stocke la référence à l'invite différée en interne.
3. Affiche la bannière d'installation.
4. Dispatche l'événement personnalisé `pwa-install`.
5. Déplace le focus sur le bouton d'installation (accessibilité).

### 2. Interaction utilisateur

Quand l'utilisateur clique sur le bouton d'installation :

1. `deferredPrompt.prompt()` est appelé pour déclencher la boîte de dialogue native du navigateur.
2. Le composant attend `userChoice`.
3. Si l'utilisateur rejette la boîte de dialogue, la bannière reste visible.

### 3. Confirmation post-installation

Quand le navigateur émet l'événement `appinstalled` :

1. La bannière d'installation est masquée.
2. Un overlay de chargement est affiché pendant `loader-duration` millisecondes (défaut : 2500ms).
3. Une bannière de confirmation d'installation est affichée.
4. L'événement personnalisé `pwa-installed` est dispatché.

### 4. Boutons de fermeture

Les boutons de fermeture de toutes les bannières répondent aux événements clic, `Enter` et `Espace`.

---

## Flux de mise à jour

### 1. Détection d'un Service Worker en attente

À la connexion du composant, la logique de mise à jour appelle `navigator.serviceWorker.getRegistration()`. Deux chemins possibles :

- **Déjà en attente**, si `registration.waiting` existe et qu'un contrôleur est actif, la bannière de mise à jour est affichée immédiatement.
- **Mise à jour future**, le composant écoute `updatefound` sur la registration, puis surveille `statechange` sur le nouveau worker jusqu'à ce qu'il atteigne `installed` avec un contrôleur actif.

### 2. Interaction utilisateur

Quand l'utilisateur clique sur le bouton de mise à jour :

1. La bannière de mise à jour est masquée.
2. Un overlay de chargement est affiché.
3. `SKIP_WAITING` est posté au Service Worker en attente.

### 3. Rechargement de la page

Quand le navigateur émet `controllerchange` (le nouveau SW prend le contrôle) :

1. L'événement personnalisé `pwa-updated` est dispatché.
2. `window.location.reload()` est appelé pour appliquer la mise à jour.

### 4. Nettoyage

Quand le composant se déconnecte du DOM (`disconnectedCallback`), tous les écouteurs d'événements du Service Worker sont supprimés pour éviter les fuites mémoire.

---

## Mode no-shadow

Par défaut, le composant utilise le Shadow DOM. L'ajout de `no-shadow` le désactive :

```html
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

Dans ce mode :
- Le composant se rend dans le light DOM.
- Vos feuilles de style globales peuvent cibler directement les éléments des bannières.
- Les propriétés CSS personnalisées fonctionnent toujours depuis `:root`.
- L'attribut `no-shadow` doit être défini avant que l'élément ne se connecte au DOM.
