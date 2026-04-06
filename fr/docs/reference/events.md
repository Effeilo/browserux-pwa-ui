# Événements

`<browserux-pwa-ui>` dispatche quatre événements personnalisés lors des cycles de vie de l'installation et de la mise à jour. Tous les événements remontent (bubble) et sont composés (ils traversent les frontières du Shadow DOM).

---

## `pwa-install`

Dispatché lorsque l'événement `beforeinstallprompt` est capturé et que la bannière d'installation est affichée, avant l'apparition de l'invite native du navigateur.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-install', () => {
  console.log('Invite d\'installation prête');
});
```

**Cas d'usage :** suivi analytique lorsqu'une opportunité d'installation est présentée à l'utilisateur.

---

## `pwa-installed`

Dispatché après l'installation de l'application et l'affichage de la confirmation post-installation. Cet événement se déclenche après la réception de `appinstalled` par le navigateur et l'écoulement du délai du loader.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-installed', () => {
  console.log('Application installée avec succès');
});
```

**Cas d'usage :** suivi analytique, déclenchement de flux d'onboarding après l'installation.

---

## `pwa-update`

Dispatché lorsqu'une mise à jour est détectée et que la bannière de mise à jour est affichée à l'utilisateur.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-update', () => {
  console.log('Mise à jour disponible');
});
```

**Cas d'usage :** suivi analytique, journalisation personnalisée.

---

## `pwa-updated`

Dispatché après que le nouveau Service Worker a pris le contrôle de la page, immédiatement avant l'appel de `window.location.reload()`.

```js
document.querySelector('browserux-pwa-ui').addEventListener('pwa-updated', () => {
  console.log('Application mise à jour, rechargement');
});
```

**Cas d'usage :** sauvegarde d'état avant le rechargement de la page, analytics.

---

## Récapitulatif des événements

| Événement | Déclenché quand | Remonte | Composé |
|---|---|---|---|
| `pwa-install` | `beforeinstallprompt` capturé, bannière affichée | Oui | Oui |
| `pwa-installed` | Application installée, confirmation affichée | Oui | Oui |
| `pwa-update` | Bannière de mise à jour affichée | Oui | Oui |
| `pwa-updated` | Nouveau SW actif, avant rechargement | Oui | Oui |

---

## Écoute depuis un ancêtre

Comme les événements sont composés, ils peuvent être capturés sur n'importe quel élément ancêtre, y compris `document` :

```js
document.addEventListener('pwa-installed', (event) => {
  analytics.track('pwa_installed');
});
```
