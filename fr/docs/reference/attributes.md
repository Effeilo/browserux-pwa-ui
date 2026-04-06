# Attributs

Toute la configuration se fait via des attributs HTML. Aucun JavaScript n'est requis pour une utilisation basique.

---

## Attributs de comportement

| Attribut | Type | Défaut | Description |
|---|---|---|---|
| `no-install` | booléen | — |   Désactive entièrement la bannière d'installation |
| `no-update` | booléen | — |   Désactive entièrement la bannière de mise à jour |
| `no-shadow` | booléen | — |   Rend dans le light DOM au lieu du Shadow DOM |

Les attributs booléens sont actifs dès qu'ils sont présents, quelle que soit leur valeur.

```html
<browserux-pwa-ui no-install></browserux-pwa-ui>
<browserux-pwa-ui no-update></browserux-pwa-ui>
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

---

## Attributs d'affichage

| Attribut | Type | Défaut | Description |
|---|---|---|---|
| `snackbar` | booléen | — |   Active le mode snackbar sur les écrans ≥ 1024px |
| `position` | string | `bottom-right` | Position du snackbar. Valeurs : `top-left`, `top-right`, `bottom-left`, `bottom-right` |

Sur mobile (< 1024px), la bannière pleine largeur est toujours utilisée, quelle que soit la valeur de `snackbar`.

```html
<browserux-pwa-ui snackbar position="top-right"></browserux-pwa-ui>
```

---

## Attributs de timing

| Attribut | Type | Défaut | Description |
|---|---|---|---|
| `loader-duration` | nombre | `2500` | Durée (ms) de l'overlay de chargement affiché après l'installation |

```html
<browserux-pwa-ui loader-duration="3000"></browserux-pwa-ui>
```

---

## Attribut de langue

| Attribut | Type | Défaut | Description |
|---|---|---|---|
| `lang` | string | `en` | Langue intégrée. Valeurs : `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru` |

L'attribut `lang` est réactif, le modifier à l'exécution met immédiatement à jour tous les labels.

---

## Attributs de remplacement de texte

Remplacez n'importe quel label intégré. Les remplacements de texte prennent la priorité sur `lang`.

| Attribut | Description |
|---|---|
| `text-install-title` | Titre de la bannière d'installation |
| `text-install-message` | Texte du corps de la bannière d'installation |
| `text-install-button` | Label du bouton d'action d'installation |
| `text-installed-title` | Titre de la confirmation post-installation |
| `text-update-title` | Titre de la bannière de mise à jour |
| `text-update-button` | Label du bouton d'action de mise à jour |
| `text-close-button` | Label accessible du bouton de fermeture |

```html
<browserux-pwa-ui
  lang="fr"
  text-install-title="Installer notre application"
  text-install-button="Ajouter à l'écran d'accueil"
></browserux-pwa-ui>
```

Les remplacements partiels sont supportés, seuls les attributs spécifiés sont remplacés.
