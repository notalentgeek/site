/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          light: "#141414",
          medium: "#1e1e1e",
          border: "#2a2a2a",
        },
        accent: {
          purple: "#8b5cf6",
          "purple-light": "#a78bfa",
          "purple-dark": "#7c3aed",
          cyan: "#22d3ee",
          "cyan-light": "#67e8f9",
          "cyan-dark": "#06b6d4",
        },
      },
      fontFamily: {
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
