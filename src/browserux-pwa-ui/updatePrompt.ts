/**
 * Initializes the update prompt logic for a Progressive Web App (PWA).
 * 
 * This function manages UI behavior when a new service worker is available and ready to be applied.
 * It handles user interactions for accepting or dismissing the update, and applies the update upon confirmation.
 *
 * @param {ShadowRoot | HTMLElement} root - The root element (either Shadow DOM or regular DOM)
 * where the PWA update UI components are located.
 */

export async function initUpdatePrompt(root: ShadowRoot | HTMLElement) {
  // Get the current service worker registration
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) return;

  // If there's already a waiting service worker, show the update banner
  if (registration.waiting) {
    root.querySelector('.pwa-update')?.classList.add('is-visible');
  }

  /**
   * Listen for new updates being found. This is triggered when a new service worker is detected.
   */

  registration.addEventListener('updatefound', () => {
    const installing = registration.installing;
    if (installing) {
      /**
       * Monitor the state changes of the installing service worker.
       * When it reaches the 'installed' state and there's already a controller,
       * it means an update is ready to be applied.
       */

      installing.addEventListener('statechange', () => {
        if (registration.waiting && navigator.serviceWorker.controller) {
          root.querySelector('.pwa-update')?.classList.add('is-visible');
        }
      });
    }
  });

  /**
   * Handle user click on the "Update" button.
   * Sends a message to the waiting service worker to skip waiting and take control.
   */

  root.querySelector('.pwa-update-btn')?.addEventListener('click', () => {
    // Hide update banner and show loading indicator
    root.querySelector('.pwa-update')?.classList.remove('is-visible');
    root.querySelector('.pwa-loader')?.classList.add('is-visible');

    // Tell the service worker to skip waiting
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
  });

  /**
   * Handle user click on the close button of the update banner.
   * Simply hides the update prompt.
   */

  root.querySelector('.pwa-update-close')?.addEventListener('click', () => {
    root.querySelector('.pwa-update')?.classList.remove('is-visible');
  });

  /**
   * When the service worker has taken control, reload the page to apply the update.
   */

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}