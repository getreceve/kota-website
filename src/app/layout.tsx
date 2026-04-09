import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kota — Your Sales Team's Unfair Advantage",
  description:
    "Kota analyzes every call, indexes every objection and rebuttal, and gives your entire debt settlement team access to what your best rep already knows. Stop leaving enrollable accounts on the table.",
  metadataBase: new URL("https://getkota.ai"),
  icons: {
    icon: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
    apple: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
  },
  openGraph: {
    title: "Kota — Your Sales Team's Unfair Advantage",
    description:
      "Stop leaving enrollable accounts on the table. Kota turns every call into competitive intelligence for your whole team.",
    url: "https://getkota.ai",
    siteName: "Kota",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota — Your Sales Team's Unfair Advantage",
    description: "Stop leaving enrollable accounts on the table.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
