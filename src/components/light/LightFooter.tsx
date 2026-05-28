import Image from "next/image";
import Link from "next/link";

export default function LightFooter() {
  return (
    <footer
      style={{
        background: "#0D0B09",
        borderTop: "1px solid #1F1E1B",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Kota home">
          <Image
            src="/brand logos/KOTA-LOGO-RGB_01-HORIZONTAL-INV.svg"
            alt="Kota"
            width={88}
            height={25}
          />
        </Link>

        {/* Right side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "13px", color: "#8F8F8A" }}>
            &copy; 2026 Kota Holdings LLC
          </span>
          <Link
            href="/archive/privacy"
            style={{
              fontSize: "13px",
              color: "#8F8F8A",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
