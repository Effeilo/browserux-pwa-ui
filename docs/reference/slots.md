# Slots

`<browserux-pwa-ui>` provides four named slots to replace default SVG icons with custom content.

---

## Available slots

| Slot name | Location | Default content |
|---|---|---|
| `close-icon-install` | Close button in the install banner | Built-in SVG close icon |
| `close-icon-confirm` | Close button in the post-install confirmation | Built-in SVG close icon |
| `close-icon-update` | Close button in the update banner | Built-in SVG close icon |
| `loader-icon` | Loading overlay, shown between install and confirmation | Built-in SVG spinner |

---

## Usage

Assign content to a slot using the `slot` attribute on the child element:

```html
<browserux-pwa-ui>
  <svg slot="close-icon-install" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</browserux-pwa-ui>
```

Multiple slots can be set at once:

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

- The `loader-icon` slot replaces the icon shown in the loading overlay that appears between the install action and the confirmation banner.
- Slot content inherits the surrounding document's styles, not the component's Shadow DOM styles.
- In `no-shadow` mode, slots are not used, the component renders a flat DOM tree directly.
