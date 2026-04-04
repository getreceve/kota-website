import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kota: {
          bg: "#0A0A0A",
          card: "#141414",
          cardAlt: "#1A1A1A",
          green: "#10B981",
          greenDark: "#065F46",
          text: "#FFFFFF",
          muted: "#A0A0A0",
          border: "#222222",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #10B981, #065F46)",
        "green-gradient-h": "linear-gradient(90deg, #10B981, #065F46)",
        "hero-noise": "url('/noise.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
