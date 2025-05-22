
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js, jsx, ts,tsx}",
    "./components/**/*.{js, jsx, ts,tsx}",
    "./app/**/*.{js, jsx, ts,tsx}",
    "./src/**/*.{js, jsx, ts,tsx}",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        coral: {
          50: "#fff1f0",
          100: "#ffe4e1",
          200: "#ffccc7",
          300: "#ffa99f",
          400: "#ff7c6e",
          500: "#fa5c4a",
          600: "#e63828",
          700: "#c02a1d",
          800: "#9c261c",
          900: "#7f241d",
          950: "#450e0a",
        },
        skyblue: {
          50: "#f0f8ff",
          100: "#e0f0ff",
          200: "#bae2ff",
          300: "#7dcbff",
          400: "#3aafff",
          500: "#1a91f0",
          600: "#0575d4",
          700: "#045dac",
          800: "#074f8d",
          900: "#0c4274",
          950: "#082a4c",
        },
        peach: {
          50: "#fff5ed",
          100: "#ffe9d8",
          200: "#ffd0b0",
          300: "#ffb182",
          400: "#fe8a4e",
          500: "#fc6424",
          600: "#ed4812",
          700: "#c4340f",
          800: "#9c2b13",
          900: "#7e2612",
          950: "#441008",
        },
        finance: {
          income: "#22c55e", // Green for income
          expense: "#ef4444", // Red for expenses
          saving: "#3b82f6", // Blue for savings
          budget: "#8b5cf6", // Purple for budget
        },
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;