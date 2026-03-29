/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#ffffff",
          dark: "#111111",
        },
        text: {
          light: "#1a1a1a",
          dark: "#e5e5e5",
        },
        link: {
          decoration: "#737373",
          hover: "#525252",
          "hover-dark": "#a3a3a3",
        },
        muted: {
          light: "#737373",
          dark: "#a3a3a3",
        },
      },
      fontFamily: {
        serif: [
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
      },
      maxWidth: {
        prose: "580px",
      },
      lineHeight: {
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};
