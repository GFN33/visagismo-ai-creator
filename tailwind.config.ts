import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- CORES CHUMBADAS (HARDCODED) PARA O VISUAL BLACK & GOLD ---
        border: "#1e293b", // Borda escura sutil
        input: "#1e293b",
        ring: "#F59E0B",   // Anel de foco Dourado
        
        // FUNDO PRETO LUXO
        background: "#020617", // Slate-950 (Preto profundo, quase azulado)
        foreground: "#f8fafc", // Texto Branco Gelo

        // PRETO ELEGANTE
        primary: {
          DEFAULT: "#f8fafc", 
          foreground: "#020617", 
        },
        secondary: {
          DEFAULT: "#1e293b", 
          foreground: "#f8fafc",
        },
        accent: {
          DEFAULT: "#F59E0B", // Dourado
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#0f172a", 
          foreground: "#94a3b8",
        },
        // COR DOURADA EXTRA
        gold: {
          DEFAULT: "#F59E0B", 
          light: "#FCD34D",
          dark: "#D97706",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#020617",
          foreground: "#f8fafc",
        },
        card: {
          DEFAULT: "#0f172a", 
          foreground: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { top: "0%", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "pulse-green-custom": {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)", transform: "scale(1)" },
          "70%": { boxShadow: "0 0 0 12px rgba(34, 197, 94, 0)", transform: "scale(1.02)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 5s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        "pulse-green": "pulse-green-custom 2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;