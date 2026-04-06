# Introduction

## Ce que fait le composant

`<browserux-pwa-ui>` est un Web Component qui fournit une interface prête à l'emploi pour deux flux PWA distincts :

**Invitation à l'installation**, lorsque le navigateur émet l'événement `beforeinstallprompt`, le composant affiche une bannière invitant l'utilisateur à installer l'application. Il intercepte l'invite par défaut du navigateur, la diffère, et la déclenche lors de l'interaction de l'utilisateur. Après l'installation, un message de confirmation est affiché brièvement avant que la bannière disparaisse.

**Notification de mise à jour**, lorsqu'une nouvelle version du Service Worker est en attente d'activation, le composant affiche une bannière de mise à jour. Quand l'utilisateur confirme, il envoie `SKIP_WAITING` au worker en attente et recharge la page une fois que le nouveau contrôleur prend le relais.

Les deux flux sont entièrement optionnels et peuvent être désactivés indépendamment.

---

## Quand l'utiliser

- Vous avez une PWA avec un fichier `manifest.json` et un Service Worker.
- Vous souhaitez une interface d'installation et de mise à jour sans écrire de gestion d'événements personnalisée.
- Vous souhaitez un composant clé en main qui fonctionne avec n'importe quel framework ou du HTML simple.

---

## Ce qu'il ne fait pas

- Il n'enregistre pas et ne gère pas votre Service Worker, vous vous en chargez dans votre application.
- Il ne génère pas de fichier `manifest.json`.
- Il ne stocke pas l'état d'installation dans le localStorage ou les cookies.

---

## Fonctionnalités

- Intercepte `beforeinstallprompt`, aucun badge navigateur par défaut requis
- Confirmation post-installation avec une durée de chargement configurable
- Détection des mises à jour du Service Worker via `registration.waiting` et `updatefound`
- `SKIP_WAITING` → `controllerchange` → rechargement automatique de la page
- Mode snackbar pour le desktop (≥ 1024px), bannière pleine largeur pour le mobile
- 9 langues intégrées : `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru`
- Remplacement de texte complet via les attributs `text-*`
- Slots nommés pour remplacer les icônes de fermeture et de chargement
- Propriétés CSS personnalisées pour le thème
- Mode `no-shadow` pour l'accès aux feuilles de style globales
- Support de `prefers-reduced-motion`
- Aucune dépendance à l'exécution
