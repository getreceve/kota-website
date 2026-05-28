import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kota — Sales Intelligence That Actually Coaches",
  description:
    "Score every sales call against your own playbook. Surface where deals are won and lost. Coach reps in minutes, not hours.",
  metadataBase: new URL("https://www.getkota.ai"),
  icons: {
    icon: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
    apple: "/brand logos/KOTA-LOGO-RGB_01-ICON.svg",
  },
  openGraph: {
    title: "Kota — Sales Intelligence That Actually Coaches",
    description:
      "Score every sales call against your own playbook. Surface where deals are won and lost. Coach reps in minutes, not hours.",
    url: "https://www.getkota.ai",
    siteName: "Kota",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-light.png",
        width: 1200,
        height: 630,
        alt: "Kota — Sales Intelligence That Actually Coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota — Sales Intelligence That Actually Coaches",
    description:
      "Score every sales call against your own playbook. Surface where deals are won and lost. Coach reps in minutes, not hours.",
    images: ["/og-image-light.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" style={{ background: "#FAFAF7" }}>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
