"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGlow — renders two radial-gradient orbs that follow the cursor
 * with different lerp speeds for a layered depth effect.
 *
 * On touch/mobile devices (no hover capability) the orbs animate via
 * CSS keyframes instead (class "orb-mobile-mode" triggers the CSS).
 *
 * Place this as a direct child of a `position: relative; overflow: hidden`
 * section. It fills the section via `position: absolute; inset: 0`.
 */
export default function CursorGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect pointer devices (mouse vs touch)
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!hasMouse) {
      container.classList.add("orb-mobile-mode");
      return;
    }

    // Desktop: RAF lerp tracking
    let x1 = 50, y1 = 50; // large orb current position (% of viewport)
    let x2 = 50, y2 = 50; // small orb current position
    let targetX = 50, targetY = 50;
    let rafId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      // Large orb: smoothing 0.05 (slower, more trailing)
      x1 = lerp(x1, targetX, 0.05);
      y1 = lerp(y1, targetY, 0.05);
      // Small orb: smoothing 0.08 (slightly snappier)
      x2 = lerp(x2, targetX, 0.08);
      y2 = lerp(y2, targetY, 0.08);

      if (orb1Ref.current) {
        orb1Ref.current.style.left = `${x1}%`;
        orb1Ref.current.style.top = `${y1}%`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.left = `${x2}%`;
        orb2Ref.current.style.top = `${y2}%`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large slow orb — ~12–13 % opacity, 70 vw */}
      <div
        ref={orb1Ref}
        className="cursor-orb-1 absolute"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(16,185,129,0.13) 0%, transparent 65%)",
          filter: "blur(72px)",
          left: "50%",
          top: "50%",
          willChange: "left, top",
        }}
      />
      {/* Small faster orb — ~8 % opacity, 30 vw */}
      <div
        ref={orb2Ref}
        className="cursor-orb-2 absolute"
        style={{
          width: "30vw",
          height: "30vw",
          maxWidth: 480,
          maxHeight: 480,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(40px)",
          left: "50%",
          top: "50%",
          willChange: "left, top",
        }}
      />
    </div>
  );
}
