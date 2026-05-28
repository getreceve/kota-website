"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, DEMO_URL } from "@/content/landing";

export default function LightNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setIsDesktop(mq.matches);
      if (mq.matches) setMobileOpen(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        background: scrolled || mobileOpen ? "rgba(250,250,247,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid #E8E6E0" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(13,11,9,0.06)" : "none",
        backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Kota home" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/brand logos/KOTA-LOGO-RGB_01-dark.svg"
            alt="Kota"
            width={96}
            height={27}
            priority
          />
        </Link>

        {/* Desktop anchor links */}
        {isDesktop && (
          <ul
            style={{
              display: "flex",
              gap: "32px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  style={{
                    color: "#6B6B66",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0D0B09")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B66")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* CTA + Mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {isDesktop ? (
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                background: "#10B981",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#065F46")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#10B981")}
            >
              Book a demo
            </a>
          ) : (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "22px",
                    height: "2px",
                    background: "#0D0B09",
                    borderRadius: "1px",
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    transform:
                      mobileOpen && i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : mobileOpen && i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "none",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {!isDesktop && mobileOpen && (
        <div
          style={{
            background: "rgba(250,250,247,0.97)",
            borderTop: "1px solid #E8E6E0",
            padding: "20px 24px 28px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "#0D0B09",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid #E8E6E0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "20px",
              background: "#10B981",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 22px",
              borderRadius: "6px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Book a demo
          </a>
        </div>
      )}
    </header>
  );
}
