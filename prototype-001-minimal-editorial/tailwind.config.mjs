/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1a3a5c",
          light: "#2a5a8c",
          dark: "#0f2440",
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
        content: "680px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "680px",
          },
        },
      },
    },
  },
  plugins: [],
};
