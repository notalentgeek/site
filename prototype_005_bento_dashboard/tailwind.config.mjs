/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          bg: "#f5f5f5",
          card: "rgba(255, 255, 255, 0.6)",
          "card-hover": "rgba(255, 255, 255, 0.8)",
          border: "rgba(255, 255, 255, 0.3)",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backdropBlur: {
        glass: "16px",
      },
      borderRadius: {
        bento: "1.25rem",
      },
      boxShadow: {
        bento: "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "bento-hover":
          "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
