/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "p5-red": "#FF0000",
        "p5-red-dark": "#CC0000",
        "p5-black": "#0D0D0D",
        "p5-white": "#FFFFFF",
        "p5-yellow": "#F2E852",
        "p5-gray": "#2a2a2a",
        "p5-muted": "#888888",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
    },
  },
  plugins: [],
};
