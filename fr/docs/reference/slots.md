# Slots

`<browserux-pwa-ui>` fournit quatre slots nommés pour remplacer les icônes SVG par défaut avec un contenu personnalisé.

---

## Slots disponibles

| Nom du slot | Emplacement | Contenu par défaut |
|---|---|---|
| `close-icon-install` | Bouton de fermeture de la bannière d'installation | Icône SVG de fermeture intégrée |
| `close-icon-confirm` | Bouton de fermeture de la confirmation post-installation | Icône SVG de fermeture intégrée |
| `close-icon-update` | Bouton de fermeture de la bannière de mise à jour | Icône SVG de fermeture intégrée |
| `loader-icon` | Overlay de chargement, affiché entre l'installation et la confirmation | Spinner SVG intégré |

---

## Utilisation

Assignez du contenu à un slot en utilisant l'attribut `slot` sur l'élément enfant :

```html
<browserux-pwa-ui>
  <svg slot="close-icon-install" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</browserux-pwa-ui>
```

Plusieurs slots peuvent être définis simultanément :

```html
<browserux-pwa-ui>
  <svg slot="close-icon-install" width="20" height="20" viewBox="0 0 24 24">...</svg>
  <svg slot="close-icon-confirm" width="20" height="20" viewBox="0 0 24 24">...</svg>
  <svg slot="close-icon-update" width="20" height="20" viewBox="0 0 24 24">...</svg>
  <img slot="loader-icon" src="/spinner.gif" alt="" width="48" height="48" />
</browserux-pwa-ui>
```

---

## Notes

- Le slot `loader-icon` remplace l'icône affichée dans l'overlay de chargement qui apparaît entre l'action d'installation et la bannière de confirmation.
- Le contenu des slots hérite des styles du document environnant, pas des styles du Shadow DOM du composant.
- En mode `no-shadow`, les slots ne sont pas utilisés, le composant rend un arbre DOM plat directement.
