"use client";

import { useEffect, useState } from "react";
import { DEMO_URL } from "@/lib/constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DiamondLogo = ({ id }: { id: string }) => (
  <a href="/" className="flex items-center flex-shrink-0">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/brand logos/KOTA-LOGO-RGB_01-HORIZONTAL-INV.svg"
      alt="Kota"
      style={{ height: 32, width: "auto" }}
    />
  </a>
);

const centerLinks = [
  { label: "Product",  href: "/" },
  { label: "Sales OS", href: "/sales-os" },
  { label: "Pricing",  href: "/pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Frosted glass on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [overlayOpen]);

  const closeOverlay = () => setOverlayOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || overlayOpen ? "nav-glass" : "nav-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px] lg:h-[68px]">

            {/* Logo */}
            <DiamondLogo id="nav-diamond" />

            {/* Center links — desktop only */}
            <nav className="hidden lg:flex items-center gap-7">
              {centerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[#A0A0A0] hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Book a Demo — always visible */}
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 !text-xs sm:!py-2.5 sm:!px-5 sm:!text-sm"
              >
                Book a Demo
              </a>

              {/* Hamburger — mobile only */}
              <button
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-all ml-1"
                onClick={() => setOverlayOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ── */}
      {overlayOpen && (
        <>
          {/* Backdrop */}
          <div
            className="mobile-overlay-bg fixed inset-0 z-[60] bg-black/60 lg:hidden"
            onClick={closeOverlay}
          />

          {/* Panel — slides in from right */}
          <div
            className="mobile-overlay fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-sm flex flex-col lg:hidden"
            style={{ background: "#111111", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 h-[64px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <DiamondLogo id="overlay-diamond" />
              <button
                onClick={closeOverlay}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
              {centerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={closeOverlay}
                  className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-white/5 text-base font-medium transition-all"
                >
                  {l.label}
                </a>
              ))}

            </nav>

            {/* Bottom CTA */}
            <div className="px-4 pb-8 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeOverlay}
                className="btn-primary !justify-center w-full !text-sm"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
