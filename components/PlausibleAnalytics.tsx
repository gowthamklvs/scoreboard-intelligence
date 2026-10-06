"use client";

import Script from "next/script";

/**
 * Privacy-first analytics integration for ScoreBoard Intelligence™.
 *
 * The exact Plausible script URL is intentionally supplied through an
 * environment variable because Plausible now provides a site-specific
 * installation snippet. Analytics remains disabled until the production
 * domain/account is configured.
 */
export function PlausibleAnalytics() {
  const scriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC;

  if (!scriptSrc) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={scriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          window.plausible = window.plausible || function (...args: unknown[]) {
            window.plausible.q = window.plausible.q || [];
            window.plausible.q.push(args);
          };

          window.plausible.init = window.plausible.init || function () {};
          window.plausible.init();
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    plausible?: {
      (...args: unknown[]): void;
      q?: unknown[][];
      init?: (...args: unknown[]) => void;
    };
  }
}
