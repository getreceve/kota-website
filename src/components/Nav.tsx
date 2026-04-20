"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DEMO_URL } from "@/lib/constants";

/* ─── Logo ─────────────────────────────────────────── */
const Logo = () => (
  <a href="/" className="flex items-center flex-shrink-0">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/brand logos/KOTA-LOGO-RGB_01-HORIZONTAL-INV.svg"
      alt="Kota"
      style={{ height: 30, width: "auto" }}
    />
  </a>
);

/* ─── Dropdown item icons ───────────────────────────── */
const IconPipeline = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const IconSalesOS = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);
const IconEnrollment = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
const IconRamp = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const IconBlindSpots = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const IconReactivate = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
const IconRetention = () => (
  <svg width="20" height="20" fill="none" stroke="#10B981" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

/* ─── Data ──────────────────────────────────────────── */
const platformItems = [
  {
    Icon: IconPipeline,
    label: "Kota Pipeline Intelligence",
    subtitle: "AI powered call analysis, objection intelligence, and rep performance",
    href: "/",
  },
  {
    Icon: IconSalesOS,
    label: "Sales OS",
    subtitle: "The complete four system AI operating system for debt settlement sales",
    href: "/sales-os",
  },
];

const useCaseItems = [
  {
    Icon: IconEnrollment,
    label: "Increase Enrollment Rate",
    subtitle: "Turn every call into a coaching opportunity",
    href: "/use-cases/increase-enrollment-rate",
  },
  {
    Icon: IconRamp,
    label: "Reduce Rep Ramp Time",
    subtitle: "New reps performing in weeks not months",
    href: "/use-cases/reduce-ramp-time",
  },
  {
    Icon: IconBlindSpots,
    label: "Eliminate Call Blind Spots",
    subtitle: "Full visibility into every call without listening to recordings",
    href: "/use-cases/eliminate-blind-spots",
  },
  {
    Icon: IconReactivate,
    label: "Reactivate Dead Leads",
    subtitle: "Monetize leads you already paid for",
    href: "/use-cases/reactivate-dead-leads",
  },
  {
    Icon: IconRetention,
    label: "Reduce Client Dropout",
    subtitle: "Keep enrolled clients through program completion",
    href: "/use-cases/reduce-client-dropout",
  },
];

/* ─── Chevron ───────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Desktop dropdown item ─────────────────────────── */
function DropdownItem({
  Icon, label, subtitle, href, onClick,
}: {
  Icon: React.ComponentType;
  label: string;
  subtitle: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150"
      style={{ textDecoration: "none" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
    >
      <div
        style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <Icon />
      </div>
      <div>
        <p className="text-white text-[13px] font-semibold mb-0.5 leading-snug">{label}</p>
        <p className="text-[11px] leading-relaxed" style={{ color: "#666" }}>{subtitle}</p>
      </div>
    </a>
  );
}

/* ─── Desktop dropdown wrapper ──────────────────────── */
function NavDropdown({
  label,
  items,
  width,
  align = "center",
}: {
  label: string;
  items: typeof platformItems;
  width: number;
  align?: "center" | "left";
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = items.some((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 80);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
        style={{ color: isActive ? "#ffffff" : "#A0A0A0", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
      >
        {label}
        <Chevron open={open} />
      </button>

      {/* Active dot */}
      {isActive && (
        <span
          className="absolute -bottom-1.5 left-1/2"
          style={{
            width: 4, height: 4, borderRadius: "50%",
            background: "#10B981",
            transform: "translateX(-50%)",
          }}
        />
      )}

      {/* Panel */}
      {open && (
        <div
          className="nav-dropdown-animate absolute z-[200]"
          style={{
            top: "calc(100% + 14px)",
            left: align === "center" ? "50%" : "0",
            transform: align === "center" ? "translateX(-50%)" : "none",
            width,
          }}
        >
          {/* Triangle pointer */}
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2"
            style={{
              width: 12, height: 7,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              background: "rgba(12,12,12,0.97)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 14,
              padding: 8,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {items.map((item) => (
              <DropdownItem key={item.href} Icon={item.Icon} label={item.label} subtitle={item.subtitle} href={item.href} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Simple nav link with active indicator ─────────── */
function NavLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="relative">
      <a
        href={href}
        className="text-sm font-medium transition-colors duration-200"
        style={{ color: isActive ? "#ffffff" : "#A0A0A0", textDecoration: "none" }}
      >
        {label}
      </a>
      {isActive && (
        <span
          className="absolute -bottom-1.5 left-1/2"
          style={{
            width: 4, height: 4, borderRadius: "50%",
            background: "#10B981",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </div>
  );
}

/* ─── Mobile accordion section ──────────────────────── */
function MobileSection({
  label,
  items,
  expanded,
  onToggle,
  onClose,
}: {
  label: string;
  items: typeof platformItems;
  expanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-[#A0A0A0] text-base font-medium transition-colors"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; (e.currentTarget as HTMLElement).style.background = ""; }}
      >
        {label}
        <Chevron open={expanded} />
      </button>

      <div
        style={{
          maxHeight: expanded ? `${items.length * 72}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="pl-2 pb-1 flex flex-col gap-0.5">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <div
                style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginTop: 1,
                }}
              >
                <item.Icon />
              </div>
              <div>
                <p className="text-white text-sm font-medium leading-snug">{item.label}</p>
                <p className="text-[11px] mt-0.5 leading-snug" style={{ color: "#555" }}>{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ────────────────────────────────── */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<null | "platform" | "use-cases">(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [overlayOpen]);

  const closeOverlay = () => { setOverlayOpen(false); setMobileExpanded(null); };

  const toggleMobile = (section: "platform" | "use-cases") => {
    setMobileExpanded((prev) => (prev === section ? null : section));
  };

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
            <Logo />

            {/* Center nav — desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="Platform" items={platformItems} width={360} />
              <NavDropdown label="Use Cases" items={useCaseItems} width={390} />
              <NavLink label="About" href="/about" />
              <NavLink label="Pricing" href="/pricing" />
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 !text-xs sm:!py-2.5 sm:!px-5 sm:!text-sm"
              >
                Book a Demo
              </a>
              {/* Hamburger */}
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

      {/* ── Mobile overlay ── */}
      {overlayOpen && (
        <>
          <div
            className="mobile-overlay-bg fixed inset-0 z-[60] bg-black/60 lg:hidden"
            onClick={closeOverlay}
          />
          <div
            className="mobile-overlay fixed top-0 right-0 bottom-0 z-[70] w-[82vw] max-w-[340px] flex flex-col lg:hidden"
            style={{ background: "#0F0F0F", borderLeft: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-[64px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <Logo />
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

            {/* Nav content */}
            <nav className="flex flex-col gap-0.5 px-3 pt-4 flex-1 overflow-y-auto">
              <MobileSection
                label="Platform"
                items={platformItems}
                expanded={mobileExpanded === "platform"}
                onToggle={() => toggleMobile("platform")}
                onClose={closeOverlay}
              />
              <MobileSection
                label="Use Cases"
                items={useCaseItems}
                expanded={mobileExpanded === "use-cases"}
                onToggle={() => toggleMobile("use-cases")}
                onClose={closeOverlay}
              />
              {/* Flat links */}
              {[
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={closeOverlay}
                  className="flex items-center px-3 py-3.5 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-white/5 text-base font-medium transition-all"
                  style={{ textDecoration: "none" }}
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
