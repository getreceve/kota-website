"use client";

import { useEffect, useState } from "react";
import { DEMO_URL, APP_URL } from "@/lib/constants";

const Logo = () => (
  <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="url(#nav-diamond)" />
      <defs>
        <linearGradient id="nav-diamond" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
      </defs>
    </svg>
    <span className="text-white font-bold text-[18px] tracking-tight">Kota</span>
  </a>
);

const centerLinks = [
  { label: "Why Kota", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "nav-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Logo />

          {/* Center links — desktop */}
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

          {/* Right CTAs — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200"
            >
              Log In
            </a>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 !text-sm">
              Book a Demo
            </a>
          </div>

          {/* Burger — mobile */}
          <button
            className="lg:hidden text-[#A0A0A0] hover:text-white p-1 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden nav-glass border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
            {centerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#A0A0A0] hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors text-center"
            >
              Log In
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !justify-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
