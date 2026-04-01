/**
 * Initializes the update prompt logic for a Progressive Web App (PWA).
 *
 * This function manages UI behavior when a new service worker is available and ready to be applied.
 * It handles user interactions for accepting or dismissing the update, and applies the update upon confirmation.
 *
 * @param {ShadowRoot | HTMLElement} root - The root element (either Shadow DOM or regular DOM)
 * where the PWA update UI components are located.
 * @param {HTMLElement} host - The host Web Component element, used to dispatch custom events.
 * @returns {() => void} Cleanup function that removes service worker event listeners.
 */

export function initUpdatePrompt(root: ShadowRoot | HTMLElement, host: HTMLElement): () => void {
  let registration: ServiceWorkerRegistration | undefined;
  let onUpdateFound: (() => void) | undefined;

  /**
   * Shows the update banner, dispatches a `pwa-update` event, and moves focus
   * to the update button for keyboard users.
   */

  const showUpdateBanner = () => {
    root.querySelector('.pwa-update')?.classList.add('is-visible');
    host.dispatchEvent(new CustomEvent('pwa-update', { bubbles: true, composed: true }));
    (root.querySelector('.pwa-update-btn') as HTMLElement | null)?.focus();
  };

  /**
   * Called when the service worker takes control after SKIP_WAITING.
   * Dispatches a `pwa-updated` event and reloads the page to apply the update.
   */

  const onControllerChange = () => {
    host.dispatchEvent(new CustomEvent('pwa-updated', { bubbles: true, composed: true }));
    window.location.reload();
  };

  /**
   * Handle user click on the "Update" button.
   * Sends a message to the waiting service worker to skip waiting and take control.
   */

  root.querySelector('.pwa-update-btn')?.addEventListener('click', () => {
    // Hide update banner and show loading indicator
    root.querySelector('.pwa-update')?.classList.remove('is-visible');
    root.querySelector('.pwa-loader')?.classList.add('is-visible');

    // Tell the service worker to skip waiting
    registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
  });

  /**
   * Handle closing the update banner via click or keyboard (Enter / Space).
   */

  const updateClose = root.querySelector('.pwa-update-close');

  const onUpdateClose = () => {
    root.querySelector('.pwa-update')?.classList.remove('is-visible');
  };

  updateClose?.addEventListener('click', onUpdateClose);
  updateClose?.addEventListener('keydown', (e: Event) => {
    const ke = e as KeyboardEvent;
    if (ke.key === 'Enter' || ke.key === ' ') {
      ke.preventDefault();
      onUpdateClose();
    }
  });

  // Asynchronously set up service worker detection
  (async () => {
    try {
      if (!('serviceWorker' in navigator)) return;

      // Get the current service worker registration
      registration = await navigator.serviceWorker.getRegistration();
      if (!registration) return;

      // If there's already a waiting service worker, show the update banner immediately
      if (registration.waiting) {
        showUpdateBanner();
      }

      /**
       * Listen for new updates being found. This is triggered when a new service worker is detected.
       */

      onUpdateFound = () => {
        const installing = registration!.installing;
        if (installing) {
          /**
           * Monitor the state changes of the installing service worker.
           * When it reaches the 'installed' state and there's already a controller,
           * it means an update is ready to be applied.
           */

          installing.addEventListener('statechange', () => {
            if (registration!.waiting && navigator.serviceWorker.controller) {
              showUpdateBanner();
            }
          });
        }
      };

      registration.addEventListener('updatefound', onUpdateFound);

      /**
       * When the service worker has taken control, reload the page to apply the update.
       */

      navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);

    } catch (err) {
      console.warn('[browserux-pwa-ui] Service Worker not available:', err);
    }
  })();

  // Return cleanup function to remove service worker event listeners
  return () => {
    if (onUpdateFound && registration) {
      registration.removeEventListener('updatefound', onUpdateFound);
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    }
  };
}
