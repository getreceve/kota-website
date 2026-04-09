"use client";

import { DEMO_URL } from "@/lib/constants";

const Logo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/brand logos/KOTA-LOGO-RGB_01-HORIZONTAL-INV.svg"
    alt="Kota"
    style={{ height: 28, width: "auto" }}
  />
);

const columns = [
  {
    heading: "Why Kota",
    links: [
      { label: "Features",     href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing",      href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "#" },
      { label: "Contact", href: "mailto:info@getkota.ai" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/privacy" },
      { label: "Cookie Policy",    href: "/cookies" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "LinkedIn",   href: "https://linkedin.com/company/getkota", external: true },
      { label: "Twitter / X", href: "https://twitter.com/getkota",          external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">

        {/* Top section: brand + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/"><Logo /></a>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "#555", maxWidth: 200 }}>
              Your Sales Team&apos;s Unfair Advantage
            </p>
            <div className="mt-5">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs font-medium px-3.5 py-2 rounded-lg text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #10B981, #065F46)" }}
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Link columns:
              mobile  → 2 columns (2×2)
              sm      → 4 columns
              lg      → 4 columns (inside col-span-4) */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#444" }}
                >
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "#555" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <p className="text-xs" style={{ color: "#444" }}>
            &copy; 2026 Kota. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#333" }}>
            Built for debt settlement sales teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
