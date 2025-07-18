import { styles } from './style';
import { initInstallPrompt } from './installPrompt';
import { initUpdatePrompt } from './updatePrompt';

/**
 * Supported keys for localized labels used in the PWA UI.
 * 
 * These represent the various messages shown in install and update banners.
 */

type LocaleKey =
  | 'installTitle'     // Title shown in the install prompt
  | 'installMessage'   // Message shown under the title in the install prompt
  | 'installButton'    // Label for the install button
  | 'installedTitle'   // Confirmation message shown after successful install
  | 'updateTitle'      // Title shown in the update prompt
  | 'updateButton';    // Label for the update button

/**
 * Internationalization (i18n) map containing translations of UI strings
 * for each supported locale.
 * 
 * Keys are ISO 639-1 language codes (e.g., 'en', 'fr', 'ja'), and each maps
 * to a set of labels defined by `LocaleKey`.
 * 
 * This is used to dynamically translate the PWA UI components based on the
 * `lang` attribute or fallback logic.
 */

const I18N_LABELS: Record<string, Record<LocaleKey, string>> = {
  en: { installTitle: 'Install this application', installMessage: 'Download our free app. It takes no space on your phone.', installButton: 'Install', installedTitle: 'Application installed!', updateTitle: 'An update is available', updateButton: 'Update', },
  fr: { installTitle: 'Installez cette application', installMessage: 'Téléchargez notre application gratuite. Elle ne prendra pas de place sur votre téléphone.', installButton: 'Installer', installedTitle: 'Application installée !', updateTitle: 'Une mise à jour est disponible', updateButton: 'Mettre à jour', },
  es: { installTitle: 'Instala esta aplicación', installMessage: 'Descarga nuestra app gratuita. No ocupa espacio en tu teléfono.', installButton: 'Instalar', installedTitle: '¡Aplicación instalada!', updateTitle: 'Hay una actualización disponible', updateButton: 'Actualizar', },
  de: { installTitle: 'Installiere diese App', installMessage: 'Lade unsere kostenlose App herunter. Sie benötigt keinen Speicherplatz auf deinem Handy.', installButton: 'Installieren', installedTitle: 'App installiert!', updateTitle: 'Ein Update ist verfügbar', updateButton: 'Aktualisieren', },
  it: { installTitle: 'Installa questa applicazione', installMessage: 'Scarica la nostra app gratuita. Non occupa spazio sul tuo telefono.', installButton: 'Installa', installedTitle: 'Applicazione installata!', updateTitle: 'È disponibile un aggiornamento', updateButton: 'Aggiorna', },
  pt: { installTitle: 'Instale este aplicativo', installMessage: 'Baixe nosso app gratuito. Ele não ocupa espaço no seu celular.', installButton: 'Instalar', installedTitle: 'Aplicativo instalado!', updateTitle: 'Uma atualização está disponível', updateButton: 'Atualizar', },
  nl: { installTitle: 'Installeer deze app', installMessage: 'Download onze gratis app. Neemt geen ruimte in op je telefoon.', installButton: 'Installeren', installedTitle: 'App geïnstalleerd!', updateTitle: 'Er is een update beschikbaar', updateButton: 'Bijwerken', },
  ja: { installTitle: 'このアプリをインストール', installMessage: '無料アプリをダウンロード。スマホの容量を使いません。', installButton: 'インストール', installedTitle: 'アプリがインストールされました！', updateTitle: 'アップデートがあります', updateButton: '更新', },
  ru: { installTitle: 'Установить это приложение', installMessage: 'Скачайте наше бесплатное приложение. Оно не займет места на вашем телефоне.', installButton: 'Установить', installedTitle: 'Приложение установлено!', updateTitle: 'Доступно обновление', updateButton: 'Обновить', },
};

/**
 * Custom Web Component providing UI for Progressive Web App (PWA) install and update prompts.
 * 
 * This component supports internationalization, shadow DOM encapsulation, and dynamic UI rendering
 * for prompting users to install or update the PWA.
 * 
 * It integrates install and update logic via the `initInstallPrompt` and `initUpdatePrompt` modules.
 */

export class BrowserUXPWAUI extends HTMLElement {

  /**
   * Whether to use Shadow DOM. If the attribute `no-shadow` is present, it will render in light DOM instead.
   */

  private useShadow = true;

  constructor() {
    super();
    this.useShadow = !this.hasAttribute('no-shadow');
    if (this.useShadow) this.attachShadow({ mode: 'open' });
  }

  /**
   * Lifecycle hook called when the Web Component is added to the DOM.
   *
   * This method:
   * - Injects the component's HTML structure and styles into the DOM
   * - Renders install and update banners (unless disabled via `no-install` / `no-update`)
   * - Initializes logic for handling PWA install and update prompts
   * - Applies snackbar styling and positioning if the `snackbar` attribute is present
   *
   * Uses Shadow DOM if `useShadow` is enabled, otherwise injects into the light DOM.
   */

  connectedCallback() {
    const root = this.useShadow ? this.shadowRoot! : this;

    root.innerHTML = `
      <style>${styles}</style>
      ${this.hasAttribute('no-install') ? '' : this.renderInstall()}
      ${this.hasAttribute('no-update') ? '' : this.renderUpdate()}
      ${this.renderLoader()}
    `;

    // Initialize install prompt logic if enabled
    if (!this.hasAttribute('no-install')) {
      initInstallPrompt(root);
    }

    // Initialize update prompt logic if enabled
    if (!this.hasAttribute('no-update')) {
      initUpdatePrompt(root);
    }

    // Apply snackbar mode if the attribute is set
    if (this.hasAttribute('snackbar')) {
      this.applySnackbarMode();
    }
  }

  /**
   * Defines the list of attributes to observe for changes.
   *
   * When one of these attributes is added, removed, or changed,
   * `attributeChangedCallback()` is triggered automatically.
   *
   * - `snackbar`: enables snackbar-style display
   * - `position`: controls the banner's placement (e.g., `top-right`)
   *
   * @returns {string[]} Array of attribute names to observe.
   */

  static get observedAttributes() {
    return ['snackbar', 'position'];
  }

  /**
   * Reacts to changes in observed attributes on the Web Component.
   *
   * Specifically watches for changes to:
   * - `snackbar`: toggles the snackbar mode on or off
   * - `position`: updates the banner position (e.g., `top-left`, `bottom-right`, etc.)
   *
   * Triggers `applySnackbarMode()` to update the banner display accordingly.
   *
   * @param {string} name - The name of the attribute that changed.
   * @param {string | null} oldValue - The previous value of the attribute.
   * @param {string | null} newValue - The new value of the attribute.
   */

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'snackbar' || name === 'position') {
      this.applySnackbarMode();
    }
  }

  /**
   * Applies snackbar display mode to all elements with the `.pwa-banner` class.
   * 
   * If the `snackbar` attribute is present on the component, this method:
   * - Adds `snackbar` and `to-pwa-snackbar` classes to `.pwa-banner` elements
   * - Removes any previous position classes (`top-left`, `top-right`, etc.)
   * - Adds a new position class based on the `position` attribute (defaults to `bottom-right`)
   *
   * This allows the snackbar banner to be dynamically positioned via CSS.
   */

  private applySnackbarMode() {
    // Determine the root context (shadow DOM or light DOM, depending on usage)
    const root = this.shadowRoot || this;

    // Select all banners within the component
    const banners = root.querySelectorAll('.pwa-banner');

    // Get the desired position (e.g. "top-left", "bottom-right") or fallback to default
    const position = this.getAttribute('position') || 'bottom-right';

    // Apply classes to each banner
    banners.forEach(el => {
      // Ensure base snackbar styling is applied
      el.classList.add('snackbar', 'to-pwa-snackbar');

      // Remove any previous position class
      el.classList.remove('top-left', 'top-right', 'bottom-left', 'bottom-right');

      // Apply the new position class
      el.classList.add(position);
    });
  }

  /**
   * Retrieves a localized label for a given key.
   * Priority order: attribute override → element lang → document lang → default to English.
   *
   * @param {LocaleKey} key - The i18n key to retrieve the label for.
   * @returns {string} The localized string.
   */

  private getLabel(key: LocaleKey): string {
    // 1. If attribute override is set, use it
    const attrValue = this.getAttribute(`text-${key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`);
    if (attrValue) return attrValue;

    // 2. Determine language: from this.lang, then documentElement, else 'en'
    const lang = this.getAttribute('lang') || document.documentElement.lang || 'en';

    // 3. Fallback chain
    return I18N_LABELS[lang]?.[key] || I18N_LABELS['en'][key] || key;
  }

  /**
   * Renders the close (X) icon SVG used in prompts.
   *
   * @returns {string} SVG markup.
   */

  private renderCloseIcon(): string {
    return `
      <svg width="32" height="32" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
      </svg>
    `;
  }

  /**
   * Renders the loader icon SVG shown during update/install transitions.
   *
   * @returns {string} SVG markup.
   */

  private renderLoaderIcon(): string {
    return `
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="white" stop-opacity="0" offset="0%"/>
            <stop stop-color="white" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="white" offset="100%"/>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
    `;
  }

  /**
   * Renders the install prompt and confirmation banner.
   * Includes close buttons and action button, using localized labels.
   *
   * @returns {string} HTML markup for install UI.
   */

  private renderInstall(): string {
    return `
      <div class="pwa-banner pwa-install-promotion">
        <span class="pwa-install-promotion-close pwa-banner-close-btn">
          <slot name="close-icon-install">${this.renderCloseIcon()}</slot>
        </span>
        <div class="pwa-banner-content">
          <span class="pwa-banner-title">${this.getLabel('installTitle')}</span>
          ${this.getLabel('installMessage')}
        </div>
        <button class="pwa-install-btn pwa-btn">${this.getLabel('installButton')}</button>
      </div>

      <div class="pwa-install-confirm pwa-banner">
        <div class="pwa-banner-content">
          <span class="pwa-banner-title">${this.getLabel('installedTitle')}</span>
        </div>
        <span class="pwa-install-confirm-close pwa-banner-close-btn">
          <slot name="close-icon-confirm">${this.renderCloseIcon()}</slot>
        </span>
      </div>
    `;
  }

  /**
   * Renders the update prompt banner, with a close icon and update button.
   *
   * @returns {string} HTML markup for update UI.
   */

  private renderUpdate(): string {
    return `
      <div class="pwa-update pwa-banner">
        <span class="pwa-update-close pwa-banner-close-btn">
          <slot name="close-icon-update">${this.renderCloseIcon()}</slot>
        </span>
        <div class="pwa-banner-content">
          <span class="pwa-banner-title">${this.getLabel('updateTitle')}</span>
        </div>
        <button class="pwa-update-btn pwa-btn">${this.getLabel('updateButton')}</button>
      </div>
    `;
  }

  /**
   * Renders the loader element shown during transitions (install/update).
   *
   * @returns {string} HTML markup for loader.
   */

  private renderLoader(): string {
    return `
      <div class="pwa-loader" aria-hidden="true">
        <slot name="loader-icon">${this.renderLoaderIcon()}</slot>
      </div>
      `;
  }
}

customElements.define('browserux-pwa-ui', BrowserUXPWAUI);