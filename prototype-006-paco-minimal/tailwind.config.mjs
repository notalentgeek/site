/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fafafa",
          dark: "#111111",
        },
        ink: {
          DEFAULT: "#171717",
          muted: "#6b6b6b",
          faint: "#a0a0a0",
          dark: "#ededed",
          "dark-muted": "#999999",
          "dark-faint": "#666666",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "520px",
      },
    },
  },
  plugins: [],
};
