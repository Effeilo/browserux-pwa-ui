# browserux-pwa-ui

`<browserux-pwa-ui>` est un Web Component sans dépendance qui gère les invitations d'installation et de mise à jour des PWA. Il intercepte l'événement `beforeinstallprompt` pour afficher une bannière d'installation personnalisable, et surveille le cycle de vie du Service Worker pour afficher une notification de mise à jour lorsqu'une nouvelle version est disponible.

---

## Documentation

### Guide

- [Introduction](guide/introduction.md), ce que fait le composant et quand l'utiliser
- [Démarrage](guide/getting-started.md), installation et configuration minimale
- [Fonctionnement](guide/how-it-works.md), cycle de vie de l'installation et des mises à jour
- [Utilisation avec les frameworks](guide/framework-usage.md), React, Vue, Angular, Svelte, Next.js, Nuxt
- [Personnalisation](guide/customization.md), propriétés CSS, textes, slots

### Référence

- [Attributs](reference/attributes.md), tous les attributs HTML
- [Événements](reference/events.md), tous les événements personnalisés
- [Slots](reference/slots.md), slots nommés pour remplacer les icônes

### Autres

- [Compatibilité](compatibility.md), matrice de support navigateurs et frameworks
- [Contribuer](contributing.md), signaler des problèmes et soumettre des pull requests
- [Changelog](../../CHANGELOG.md)

---

## Exemple rapide

```html
<script type="module" src="browserux-pwa-ui.esm.js"></script>

<browserux-pwa-ui lang="fr"></browserux-pwa-ui>
```

Placez le composant une seule fois dans votre HTML, il gère automatiquement les flux d'installation et de mise à jour. Aucun JavaScript requis pour une utilisation basique.
