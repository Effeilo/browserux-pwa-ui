/**
 * Initializes the Progressive Web App (PWA) install prompt behavior.
 * 
 * This function sets up event listeners for handling the PWA installation process
 * including showing and hiding UI elements during the install prompt lifecycle.
 *
 * @param {ShadowRoot | HTMLElement} root - The root element (either Shadow DOM or regular DOM)
 * where the PWA install UI components are located.
 */

export function initInstallPrompt(root: ShadowRoot | HTMLElement) {
  // Store the deferred install prompt event
  let deferredPrompt: any = null;

  /**
   * Handle the 'beforeinstallprompt' event to intercept and defer the prompt.
   * Display install promotion UI when the event is triggered.
   */

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install promotion banner and button
    root.querySelector('.pwa-install-promotion')?.classList.add('is-visible');
    root.querySelector('.pwa-install-btn')?.classList.add('is-visible');
  });

  /**
   * Handle the 'appinstalled' event triggered after successful installation.
   * Show a confirmation message and loader animation.
   */

  window.addEventListener('appinstalled', () => {
    // Hide install promotion banner
    root.querySelector('.pwa-install-promotion')?.classList.remove('is-visible');

    const loader = root.querySelector('.pwa-loader');
    loader?.classList.add('is-visible');

    // After a delay, show the install confirmation message
    setTimeout(() => {
      loader?.classList.remove('is-visible');
      root.querySelector('.pwa-install-confirm')?.classList.add('is-visible');
    }, 2500);
  });

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
   * Handle closing the install promotion banner.
   */

  root.querySelector('.pwa-install-promotion-close')?.addEventListener('click', () => {
    root.querySelector('.pwa-install-promotion')?.classList.remove('is-visible');
  });

  /**
   * Handle closing the install confirmation message.
   */

  root.querySelector('.pwa-install-confirm-close')?.addEventListener('click', () => {
    root.querySelector('.pwa-install-confirm')?.classList.remove('is-visible');
  });
}