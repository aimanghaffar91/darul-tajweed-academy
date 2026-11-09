/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#073B2A", // Deep Emerald
          foreground: "#FAF8F0",
        },
        secondary: {
          DEFAULT: "#B89545", // Antique Gold
          foreground: "#073B2A",
        },
        accent: {
          DEFAULT: "#0B3024", // Forest Green
          foreground: "#FAF8F0",
        },
        // Dedicated Academy Luxury Palette
        academy: {
          emerald: "#073B2A",
          forest: "#0B3024",
          "emerald-deep": "#042318",
          "emerald-light": "#0E523B",
          gold: "#B89545",
          "gold-light": "#D8BD74",
          "gold-bright": "#D4AF37",
          "gold-muted": "#967A38",
          ivory: "#FAF8F0",
          beige: "#EDE5D4",
          "beige-light": "#F5EFE3",
          charcoal: "#242820",
          "charcoal-muted": "#4A4E46",
        },
        dt: {
          gold: "#B89545",
          "gold-light": "#D8BD74",
          sage: "#0B3024",
          "sage-light": "#073B2A",
          cream: "#FAF8F0",
          dark: "#242820",
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(135deg, #073B2A 0%, #0B3024 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B89545 50%, #967A38 100%)',
        'overlay-gradient': 'linear-gradient(to bottom, rgba(7, 59, 42, 0.9) 0%, rgba(11, 48, 36, 0.75) 50%, rgba(7, 59, 42, 0.95) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(184, 149, 69, 0.25)',
        'emerald-glow': '0 10px 30px rgba(7, 59, 42, 0.2)',
        'card-lux': '0 10px 30px -5px rgba(36, 40, 32, 0.08), 0 0 0 1px rgba(184, 149, 69, 0.15)',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
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
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
