/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0D",
        foreground: "#EDEDED",
        primary: {
          DEFAULT: "#FF7A00",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#121214",
          foreground: "#EDEDED",
        },
        popover: {
          DEFAULT: "#161618",
          foreground: "#EDEDED",
        },
        muted: {
          DEFAULT: "#27272A",
          foreground: "#71717A",
        },
        accent: {
          DEFAULT: "#FF7A00",
          foreground: "#FFFFFF",
        },
        surface: "rgba(255, 255, 255, 0.08)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 122, 0, 0.3)',
        'glow-hover': '0 0 30px rgba(255, 122, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(180deg, rgba(28, 28, 31, 0.6) 0%, rgba(18, 18, 20, 0.8) 100%)',
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Keeping existing if used or adding just in case
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
