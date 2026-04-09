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
  title: "Kota | Sales Intelligence for Debt Settlement Teams",
  description:
    "Kota analyzes every call, indexes every objection, and gives your entire debt settlement sales team access to what your top closer already knows. Stop leaving enrollable accounts on the table.",
  metadataBase: new URL("https://getkota.ai"),
  icons: {
    icon: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
    apple: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
  },
  openGraph: {
    title: "Kota | Sales Intelligence for Debt Settlement Teams",
    description:
      "Kota analyzes every call, indexes every objection, and gives your entire debt settlement sales team access to what your top closer already knows. Stop leaving enrollable accounts on the table.",
    url: "https://getkota.ai",
    siteName: "Kota",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota | Sales Intelligence for Debt Settlement Teams",
    description:
      "Kota analyzes every call, indexes every objection, and gives your entire debt settlement sales team access to what your top closer already knows. Stop leaving enrollable accounts on the table.",
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
