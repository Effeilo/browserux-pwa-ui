export const styles = `
  :host {
    --bux-pwa-banner-bg: #0e93f0;
    --bux-pwa-banner-color: #fff;
    --bux-pwa-banner-padding: 1rem;
    --bux-pwa-banner-btn-bg: #fff; 
    --bux-pwa-banner-btn-color: #000; 
    --bux-pwa-banner-btn-hover-bg: #000; 
    --bux-pwa-banner-btn-hover-color: #fff; 
    --bux-pwa-banner-btn-padding: 0.8rem 2rem;
    --bux-pwa-banner-btn-border-radius: 2rem;
    --bux-pwa-snackbar-padding: 2rem 2rem 2rem 1rem;
    --bux-pwa-snackbar-border-radius: 1rem;
    --bux-pwa-loader-bg: rgba(0, 0, 0, 0.7);
    --bux-pwa-z-index: 1000;
  }

  svg {
    fill: var(--bux-pwa-banner-color); 
  }

  .pwa-btn {
    background: var(--bux-pwa-banner-btn-bg);
    border: none;
    border-radius: var(--bux-pwa-banner-btn-border-radius);
    color: var(--bux-pwa-banner-btn-color);
    cursor: pointer;
    font-weight: bold;
    padding: var(--bux-pwa-banner-btn-padding);
  }

  .pwa-btn:hover {
    background: var(--bux-pwa-banner-btn-hover-bg);
    color: var(--bux-pwa-banner-btn-hover-color);
  }

  .pwa-banner {
    align-items: center;
    background: var(--bux-pwa-banner-bg);
    color: var(--bux-pwa-banner-color);
    display: flex;
    justify-content: space-between;
    left: 0;
    opacity: 0;
    padding: var(--bux-pwa-banner-padding);
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(-100%);
    transition: all 0.2s ease-in-out;
    z-index: var(--bux-pwa-z-index);
  }

  .pwa-banner.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .pwa-banner-title {
    display: block;
    font-weight: bold;
  }

  .pwa-banner-content {
    flex-grow: 1;
    padding: 0 var(--bux-pwa-banner-padding);
  }

  .pwa-banner-close-btn {
    cursor: pointer;
    font-size: 20px;
    height: 32px;
    width: 32px;
  }

  @media only screen and (min-width : 1024px) {

    .pwa-banner.to-pwa-snackbar {
      border-radius: var(--bux-pwa-snackbar-border-radius);
      bottom: 2rem;
      left: 2rem;
      max-width: 400px;
      padding: var(--bux-pwa-snackbar-padding);
      right: auto;
      top: auto;
      transform: translate(calc(-100% - 2rem), 0);
    }

    .pwa-banner.to-pwa-snackbar.top-left {
      bottom: auto;
      left: 2rem;
      right: auto;
      top: 2rem;
    }

    .pwa-banner.to-pwa-snackbar.top-right {
      bottom: auto;
      left: auto;
      right: 2rem;
      top: 2rem;
      transform: translate(0, calc(-100% - 2rem));
    }

    .pwa-banner.to-pwa-snackbar.bottom-left {
      bottom: 2rem;
      left: 2rem;
      right: auto;
      top: auto;
    }

    .pwa-banner.to-pwa-snackbar.bottom-right {
      bottom: 2rem;
      left: auto;
      right: 2rem;
      top: auto;
      transform: translate(0, calc(100% + 2rem));
    }

    .pwa-banner.to-pwa-snackbar.is-visible {
      opacity: 1;
      transform: translate(0, 0);
    }

  }

  .pwa-loader {
    align-items: center;
    background-color: var(--bux-pwa-loader-bg);
    display: none;
    inset: 0;
    justify-content: center;
    padding: 20px;
    position: fixed;
    z-index: var(--bux-pwa-z-index);
  }

  .pwa-loader.is-visible {
    display: flex;
  }

  .pwa-install-btn {
    display: none;
  }

  .pwa-install-btn.is-visible {
    display: inline-block;
  }
`;