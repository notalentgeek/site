/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#faf9f6",
          text: "#1a1a1a",
          muted: "#6b6b6b",
          border: "#e8e6e1",
          card: "#ffffff",
        },
        accent: {
          DEFAULT: "#f97316",
          light: "#fed7aa",
          dark: "#ea580c",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
