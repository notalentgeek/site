/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#fafafa",
          dark: "#141414",
        },
        ink: {
          light: "#1a1a1a",
          dark: "#e5e5e5",
        },
        muted: {
          light: "#6b6b6b",
          dark: "#999999",
        },
        rule: {
          light: "#e0e0e0",
          dark: "#2a2a2a",
        },
      },
      fontFamily: {
        serif: [
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "550px",
      },
    },
  },
  plugins: [],
};
