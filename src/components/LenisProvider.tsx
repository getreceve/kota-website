"use client";

import { useEffect, useRef } from "react";

export default function LenisProvider() {
  const lenisRef = useRef<{ raf: (t: number) => void; destroy: () => void } | null>(null);

  useEffect(() => {
    let rafId: number;

    // Dev-only escape hatch: ?nolenis disables smooth scroll (used for screenshot capture)
    if (typeof window !== "undefined" && window.location.search.includes("nolenis")) {
      return;
    }

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 2),
        smoothWheel: true,
        wheelMultiplier: 0.8,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
    };
  }, []);

  return null;
}
