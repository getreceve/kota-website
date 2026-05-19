import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import LenisProvider from "@/components/LenisProvider";
import { getVerticalConfig } from "@/config/verticals";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const cfg = getVerticalConfig();

export const metadata: Metadata = {
  title: cfg.meta.title,
  description: cfg.meta.description,
  metadataBase: new URL(cfg.meta.metadataBase),
  icons: {
    icon: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
    apple: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
  },
  openGraph: {
    title: cfg.meta.title,
    description: cfg.meta.description,
    url: cfg.meta.metadataBase,
    siteName: "Kota",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cfg.meta.title,
    description: cfg.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" style={{ background: "#0D0B09" }}>
        <LenisProvider />
        <AnnouncementBanner />
        {children}
      </body>
    </html>
  );
}
