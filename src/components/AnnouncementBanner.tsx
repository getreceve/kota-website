"use client";

import { useEffect, useState } from "react";
import { DEMO_URL } from "@/lib/constants";

const STORAGE_KEY = "kota-banner-dismissed-v1";
const BANNER_H = 44;
const INTERVAL_MS = 5000;

const MESSAGES = [
  {
    text: "Built by debt settlement sales veterans.",
    cta: "See how Kota works →",
    href: DEMO_URL,
    external: true,
  },
  {
    text: "See how much revenue your team is leaving on the table.",
    cta: "Calculate now →",
    href: "/roi-calculator",
    external: false,
  },
] as const;

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
      document.documentElement.style.setProperty("--banner-h", `${BANNER_H}px`);
    }
  }, []);

  // Alternate messages every INTERVAL_MS with a fade transition
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setMsgIdx((i) => (i + 1) % MESSAGES.length);
        setFading(false);
      }, 350); // fade out duration
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [visible]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
    document.documentElement.style.setProperty("--banner-h", "0px");
  }

  if (!visible) return null;

  const msg = MESSAGES[msgIdx];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 61,
        height: BANNER_H,
        background: "#111110",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Green left accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: "#10B981",
        }}
      />

      {/* Message — fades on transition */}
      <p
        style={{
          fontSize: "clamp(11px, 2vw, 13px)",
          color: "#B0B0A8",
          lineHeight: 1,
          margin: 0,
          paddingLeft: 16,
          paddingRight: 40,
          opacity: fading ? 0 : 1,
          transition: "opacity 0.35s ease",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "calc(100vw - 80px)",
          textAlign: "center",
        }}
      >
        {msg.text}{" "}
        <a
          href={msg.href}
          target={msg.external ? "_blank" : undefined}
          rel={msg.external ? "noopener noreferrer" : undefined}
          style={{
            color: "#10B981",
            textDecoration: "underline",
            textUnderlineOffset: 3,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {msg.cta}
        </a>
      </p>

      {/* Dismiss button */}
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: 6,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#505050",
          padding: 10,
          lineHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
