# Contribuer

Les contributions sont les bienvenues. Que vous souhaitiez signaler un bug, suggérer une amélioration ou soumettre une pull request, n'hésitez pas à participer.

---

## Signaler un problème

Ouvrez une issue sur le dépôt GitHub pour :

- Signaler un bug ou un comportement inattendu.
- Suggérer une amélioration ou une nouvelle fonctionnalité.
- Discuter d'une idée avant de soumettre une pull request.

Lors du signalement d'un bug, précisez :

- Votre navigateur et sa version
- Votre version de Node.js (`node -v`) si applicable
- Le framework ou l'environnement utilisé (React, Vue, HTML vanilla, etc.)
- Si le problème concerne le flux d'installation, le flux de mise à jour, ou les deux
- Si vous utilisez le mode `no-shadow`
- Le message d'erreur et la sortie console si applicable
- Une reproduction minimale (CodePen, StackBlitz ou un fichier HTML minimal)

---

## Soumettre une pull request

1. Forkez le dépôt.
2. Créez une branche dédiée :

```bash
git checkout -b ma-proposition
```

3. Effectuez vos modifications.
4. Compilez le package pour vérifier la sortie :

```bash
npm run build
```

5. Committez avec un message clair :

```bash
git commit -m "Fix: description de la modification"
```

6. Poussez la branche et ouvrez une pull request sur GitHub.

---

## Exécuter en local

```bash
# Installer les dépendances
npm install

# Compiler tous les formats de sortie
npm run build
```

---

## Bonnes pratiques

- Restez fidèle au périmètre focalisé du composant : interface d'installation et de mise à jour des PWA.
- Ne modifiez que ce qui est nécessaire. Les changements ciblés sont plus faciles à relire.
- Testez dans Chrome et Edge, le comportement de `beforeinstallprompt` diffère des autres navigateurs.
- Vérifiez que la navigation au clavier (Tab, Échap, boutons de fermeture) fonctionne toujours après tout changement des bannières.
- Assurez-vous que le mode `no-shadow` continue de fonctionner après tout changement de template ou de cycle de vie.
- Confirmez que l'attribut `lang` réactif met bien à jour les labels à l'exécution.
- Confirmez que `disconnectedCallback` nettoie bien tous les écouteurs d'événements du Service Worker.
- Consultez le [changelog](../../CHANGELOG.md) pour comprendre l'historique des décisions.

---

## Structure du projet

```
├── dist/                       sortie compilée
│   ├── browserux-pwa-ui.esm.js
│   ├── browserux-pwa-ui.umd.js
│   ├── browserux-pwa-ui.min.js
│   └── browserux-pwa-ui.d.ts
├── src/
│   └── browserux-pwa-ui/
│       ├── BrowserUXPWAUI.ts   classe principale du Web Component
│       ├── installPrompt.ts    logique beforeinstallprompt
│       ├── updatePrompt.ts     logique de mise à jour du Service Worker
│       └── style.ts            CSS (propriétés personnalisées, mise en page, thèmes)
├── docs/                       documentation en anglais
├── fr/docs/                    documentation en français
├── rollup.config.mjs
├── tsconfig.json
└── package.json
```

---

## Remerciements

`browserux-pwa-ui` est construit avec :

- [TypeScript](https://www.typescriptlang.org/), langage typé et compilateur
- [Rollup](https://rollupjs.org/), bundler de modules
- Le standard [Web Components](https://developer.mozilla.org/fr/docs/Web/API/Web_components), Custom Elements et Shadow DOM
- L'[API Service Worker](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API), détection des mises à jour et `SKIP_WAITING`
- L'événement [`beforeinstallprompt`](https://developer.mozilla.org/fr/docs/Web/API/Window/beforeinstallprompt_event), invite d'installation différée
