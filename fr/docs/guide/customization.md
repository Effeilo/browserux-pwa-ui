# Personnalisation

## Propriétés CSS personnalisées

Tous les aspects visuels des bannières sont contrôlés via des propriétés CSS personnalisées. Définissez-les sur `:root` ou directement sur l'élément `browserux-pwa-ui`.

### Bannière

| Propriété | Défaut | Description |
|---|---|---|
| `--bux-pwa-banner-bg` | `#0e93f0` | Couleur de fond de la bannière |
| `--bux-pwa-banner-color` | `#fff` | Couleur du texte de la bannière |
| `--bux-pwa-banner-padding` | `1rem` | Espacement interne de la bannière |

### Bouton

| Propriété | Défaut | Description |
|---|---|---|
| `--bux-pwa-banner-btn-bg` | `#fff` | Couleur de fond du bouton |
| `--bux-pwa-banner-btn-color` | `#000` | Couleur du texte du bouton |
| `--bux-pwa-banner-btn-hover-bg` | `#000` | Couleur de fond du bouton au survol |
| `--bux-pwa-banner-btn-hover-color` | `#fff` | Couleur du texte du bouton au survol |
| `--bux-pwa-banner-btn-padding` | `0.8rem 2rem` | Espacement interne du bouton |
| `--bux-pwa-banner-btn-border-radius` | `2rem` | Rayon de bordure du bouton |

### Snackbar

| Propriété | Défaut | Description |
|---|---|---|
| `--bux-pwa-snackbar-padding` | `2rem 2rem 2rem 1rem` | Espacement interne du snackbar |
| `--bux-pwa-snackbar-border-radius` | `1rem` | Rayon de bordure du snackbar |

### Overlay

| Propriété | Défaut | Description |
|---|---|---|
| `--bux-pwa-loader-bg` | `rgba(0,0,0,0.7)` | Fond de l'overlay de chargement |
| `--bux-pwa-z-index` | `1000` | Z-index de toutes les bannières et overlay |

### Exemple

```css
browserux-pwa-ui {
  --bux-pwa-banner-bg: #1a1a2e;
  --bux-pwa-banner-color: #e0e0e0;
  --bux-pwa-banner-btn-bg: #e94560;
  --bux-pwa-banner-btn-color: #fff;
  --bux-pwa-banner-btn-hover-bg: #fff;
  --bux-pwa-banner-btn-hover-color: #e94560;
  --bux-pwa-snackbar-border-radius: 0.5rem;
}
```

---

## Remplacement des textes

Remplacez n'importe quel label intégré avec un attribut `text-*`. Cela prend la priorité sur l'attribut `lang`.

| Attribut | Description |
|---|---|
| `text-install-title` | Titre de la bannière d'installation |
| `text-install-message` | Texte du corps de la bannière d'installation |
| `text-install-button` | Label du bouton d'installation |
| `text-installed-title` | Titre de la confirmation post-installation |
| `text-update-title` | Titre de la bannière de mise à jour |
| `text-update-button` | Label du bouton de mise à jour |
| `text-close-button` | Label aria du bouton de fermeture |

```html
<browserux-pwa-ui
  text-install-title="Installer notre application"
  text-install-message="Rapide, disponible hors ligne et toujours à jour."
  text-install-button="Installer"
  text-installed-title="Installation terminée !"
  text-update-title="Une nouvelle version est disponible"
  text-update-button="Mettre à jour"
  text-close-button="Fermer"
></browserux-pwa-ui>
```

---

## Langues intégrées

Définissez l'attribut `lang` pour utiliser une traduction intégrée. Valeurs supportées :

| Code | Langue |
|---|---|
| `en` | Anglais (défaut) |
| `fr` | Français |
| `es` | Espagnol |
| `de` | Allemand |
| `it` | Italien |
| `pt` | Portugais |
| `nl` | Néerlandais |
| `ja` | Japonais |
| `ru` | Russe |

```html
<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

L'attribut `lang` est réactif, le modifier à l'exécution met immédiatement à jour tous les labels.

---

## Slots nommés

Remplacez les icônes SVG par défaut avec un contenu personnalisé via des slots nommés.

| Slot | Description |
|---|---|
| `close-icon-install` | Icône de fermeture de la bannière d'installation |
| `close-icon-confirm` | Icône de fermeture de la confirmation post-installation |
| `close-icon-update` | Icône de fermeture de la bannière de mise à jour |
| `loader-icon` | Icône affichée dans l'overlay de chargement |

```html
<browserux-pwa-ui>
  <svg slot="close-icon-install" width="24" height="24" viewBox="0 0 24 24">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
  </svg>
  <img slot="loader-icon" src="/spinner.gif" alt="" width="48" height="48" />
</browserux-pwa-ui>
```

---

## Durée du loader

Contrôlez la durée d'affichage de l'overlay de chargement après l'installation, avant l'apparition du message de confirmation :

```html
<browserux-pwa-ui loader-duration="3000"></browserux-pwa-ui>
```

Défaut : `2500` (millisecondes). Définissez à `0` pour ignorer le loader.

---

## Mode no-shadow

Désactivez le Shadow DOM pour permettre aux feuilles de style globales de cibler les éléments internes des bannières :

```html
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

Doit être défini avant que l'élément ne se connecte au DOM. Les propriétés CSS personnalisées fonctionnent toujours depuis `:root`.
