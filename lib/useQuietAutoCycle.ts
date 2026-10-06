"use client";

import { useEffect, useRef, useState } from "react";

type UseQuietAutoCycleOptions = {
  length: number;
  intervalMs: number;
  resumeAfterMs?: number;
  initialIndex?: number;
};

export function useQuietAutoCycle({
  length,
  intervalMs,
  resumeAfterMs = 12000,
  initialIndex = 0,
}: UseQuietAutoCycleOptions) {
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, Math.min(initialIndex, Math.max(length - 1, 0)))
  );
  const [autoPaused, setAutoPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(media.matches);
    };

    updatePreference();

    media.addEventListener?.("change", updatePreference);

    return () => {
      media.removeEventListener?.("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || autoPaused || length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [autoPaused, intervalMs, length, reducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const selectIndex = (index: number) => {
    setActiveIndex(index);

    if (reducedMotion) {
      return;
    }

    setAutoPaused(true);

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setAutoPaused(false);
    }, resumeAfterMs);
  };

  return {
    activeIndex,
    setActiveIndex,
    selectIndex,
    isAutoCycling: !reducedMotion && !autoPaused,
  };
}
