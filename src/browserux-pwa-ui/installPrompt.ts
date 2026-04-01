/**
 * Initializes the Progressive Web App (PWA) install prompt behavior.
 *
 * This function sets up event listeners for handling the PWA installation process
 * including showing and hiding UI elements during the install prompt lifecycle.
 *
 * @param {ShadowRoot | HTMLElement} root - The root element (either Shadow DOM or regular DOM)
 * where the PWA install UI components are located.
 * @param {HTMLElement} host - The host Web Component element, used to dispatch custom events.
 * @param {number} loaderDuration - Duration in ms to show the loader before the confirmation banner.
 * @returns {() => void} Cleanup function that removes global window event listeners.
 */

export function initInstallPrompt(root: ShadowRoot | HTMLElement, host: HTMLElement, loaderDuration: number): () => void {
  // Store the deferred install prompt event
  let deferredPrompt: any = null;

  /**
   * Handle the 'beforeinstallprompt' event to intercept and defer the prompt.
   * Display install promotion UI when the event is triggered.
   *
   * Dispatches a `pwa-install` event on the host element.
   */

  const onBeforeInstallPrompt = (e: Event) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install promotion banner and button
    root.querySelector('.pwa-install-promotion')?.classList.add('is-visible');
    root.querySelector('.pwa-install-btn')?.classList.add('is-visible');

    // Notify listeners that the install prompt is available
    host.dispatchEvent(new CustomEvent('pwa-install', { bubbles: true, composed: true }));

    // Move focus to the install button for keyboard users
    (root.querySelector('.pwa-install-btn') as HTMLElement | null)?.focus();
  };

  /**
   * Handle the 'appinstalled' event triggered after successful installation.
   * Show a confirmation message and loader animation.
   *
   * Dispatches a `pwa-installed` event on the host element.
   */

  const onAppInstalled = () => {
    // Hide install promotion banner
    root.querySelector('.pwa-install-promotion')?.classList.remove('is-visible');

    const loader = root.querySelector('.pwa-loader');
    loader?.classList.add('is-visible');

    // After the configured delay, show the install confirmation message
    setTimeout(() => {
      loader?.classList.remove('is-visible');

      const confirm = root.querySelector('.pwa-install-confirm');
      confirm?.classList.add('is-visible');

      // Notify listeners that the installation is complete
      host.dispatchEvent(new CustomEvent('pwa-installed', { bubbles: true, composed: true }));

      // Move focus to the confirmation close button
      (root.querySelector('.pwa-install-confirm-close') as HTMLElement | null)?.focus();
    }, loaderDuration);
  };

  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  window.addEventListener('appinstalled', onAppInstalled);

  /**
   * Handle click on the install button to trigger the deferred install prompt.
   * If the user accepts, hide the install button.
   */

  root.querySelector('.pwa-install-btn')?.addEventListener('click', async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for user choice
    const { outcome } = await deferredPrompt.userChoice;

    // Reset the prompt
    deferredPrompt = null;

    if (outcome === 'accepted') {
      // Hide install button on acceptance
      root.querySelector('.pwa-install-btn')?.classList.remove('is-visible');
    }
  });

  /**
   * Handle closing the install promotion banner via click or keyboard (Enter / Space).
   */

  const installPromotionClose = root.querySelector('.pwa-install-promotion-close');

  const onInstallPromotionClose = () => {
    root.querySelector('.pwa-install-promotion')?.classList.remove('is-visible');
  };

  installPromotionClose?.addEventListener('click', onInstallPromotionClose);
  installPromotionClose?.addEventListener('keydown', (e: Event) => {
    const ke = e as KeyboardEvent;
    if (ke.key === 'Enter' || ke.key === ' ') {
      ke.preventDefault();
      onInstallPromotionClose();
    }
  });

  /**
   * Handle closing the install confirmation message via click or keyboard (Enter / Space).
   */

  const installConfirmClose = root.querySelector('.pwa-install-confirm-close');

  const onInstallConfirmClose = () => {
    root.querySelector('.pwa-install-confirm')?.classList.remove('is-visible');
  };

  installConfirmClose?.addEventListener('click', onInstallConfirmClose);
  installConfirmClose?.addEventListener('keydown', (e: Event) => {
    const ke = e as KeyboardEvent;
    if (ke.key === 'Enter' || ke.key === ' ') {
      ke.preventDefault();
      onInstallConfirmClose();
    }
  });

  // Return cleanup function to remove global window listeners
  return () => {
    window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.removeEventListener('appinstalled', onAppInstalled);
  };
}
