# Attributes

All configuration is done via HTML attributes. There is no required JavaScript for basic usage.

---

## Behavior attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `no-install` | boolean | — |   Disables the install banner entirely |
| `no-update` | boolean | — |   Disables the update banner entirely |
| `no-shadow` | boolean | — |   Renders into light DOM instead of Shadow DOM |

Boolean attributes are active when present, regardless of value.

```html
<browserux-pwa-ui no-install></browserux-pwa-ui>
<browserux-pwa-ui no-update></browserux-pwa-ui>
<browserux-pwa-ui no-shadow></browserux-pwa-ui>
```

---

## Display attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `snackbar` | boolean | — |   Enables snackbar layout on screens ≥ 1024px |
| `position` | string | `bottom-right` | Snackbar position. Values: `top-left`, `top-right`, `bottom-left`, `bottom-right` |

On mobile (< 1024px), the full-width banner layout is always used, regardless of `snackbar`.

```html
<browserux-pwa-ui snackbar position="top-right"></browserux-pwa-ui>
```

---

## Timing attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `loader-duration` | number | `2500` | Duration (ms) of the loading overlay shown after install |

```html
<browserux-pwa-ui loader-duration="3000"></browserux-pwa-ui>
```

---

## Language attribute

| Attribute | Type | Default | Description |
|---|---|---|---|
| `lang` | string | `en` | Built-in language. Values: `en`, `fr`, `es`, `de`, `it`, `pt`, `nl`, `ja`, `ru` |

The `lang` attribute is reactive, updating it at runtime immediately re-renders all labels.

---

## Text override attributes

Override any built-in label. Text overrides take precedence over `lang`.

| Attribute | Description |
|---|---|
| `text-install-title` | Install banner heading |
| `text-install-message` | Install banner body text |
| `text-install-button` | Install action button label |
| `text-installed-title` | Post-install confirmation heading |
| `text-update-title` | Update banner heading |
| `text-update-button` | Update action button label |
| `text-close-button` | Close button accessible label |

```html
<browserux-pwa-ui
  lang="en"
  text-install-title="Install our app"
  text-install-button="Add to home screen"
></browserux-pwa-ui>
```

Partial overrides are supported, only the specified attributes are replaced.
