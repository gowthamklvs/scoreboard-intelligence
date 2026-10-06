"use client";

import Script from "next/script";

/**
 * Privacy-first Plausible Analytics integration
 * for ScoreBoard Intelligence™.
 *
 * Analytics is enabled only when
 * NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC is configured.
 *
 * This component is safe to render when analytics
 * is not configured.
 */
export function PlausibleAnalytics() {
  const scriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC;

  // Analytics disabled when no script URL is configured.
  if (!scriptSrc) {
    return null;
  }

  return (
    <Script
      src={scriptSrc}
      strategy="afterInteractive"
      async
      onLoad={() => {
        const plausible = window.plausible;

        // The external Plausible script should create
        // window.plausible. Fail gracefully if it doesn't.
        if (!plausible) {
          return;
        }

        plausible.q = plausible.q ?? [];

        plausible.init = plausible.init ?? (() => {});

        plausible.init();
      }}
      onError={(error) => {
        // Analytics failure must never affect the website.
        if (process.env.NODE_ENV === "development") {
          console.warn("Plausible Analytics failed to load:", error);
        }
      }}
    />
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