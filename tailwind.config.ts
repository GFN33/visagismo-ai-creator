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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // PALETA LUXO "BLACK & GOLD" (Hardcoded para não falhar)
        primary: {
          DEFAULT: "#0f172a", // Preto Azulado Profundo (Slate-900)
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f1f5f9", // Cinza Gelo (Slate-100)
          foreground: "#0f172a",
        },
        muted: {
          DEFAULT: "#f8fafc", // Slate-50
          foreground: "#64748b", // Slate-500
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber-500 (Dourado Base)
          foreground: "#0f172a",
        },
        // COR DOURADA ESPECÍFICA (A COR "PIZZA" QUE VOCÊ GOSTOU)
        gold: {
          DEFAULT: "#F59E0B", // Amber-500
          light: "#FCD34D",   // Amber-300
          dark: "#D97706",    // Amber-600
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
      // ANIMAÇÕES PERSONALIZADAS
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
        // ANIMAÇÃO DO BOTÃO VERDE PULSANTE
        "pulse-green-custom": {
          "0%": { boxShadow: "0 0 0 0 rgba(22, 163, 74, 0.7)", transform: "scale(1)" },
          "70%": { boxShadow: "0 0 0 12px rgba(22, 163, 74, 0)", transform: "scale(1.02)" },
          "100%": { boxShadow: "0 0 0 0 rgba(22, 163, 74, 0)", transform: "scale(1)" },
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