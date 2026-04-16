/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          off: "#f7f7f5",
          dark: "#1a1a1a",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#999999",
          light: "#cccccc",
        },
        accent: {
          DEFAULT: "#c8a96e",
          light: "#e5d5b0",
        },
        rule: "#e5e5e5",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      fontSize: {
        hero: "clamp(2.5rem, 6vw, 5rem)",
      },
    },
  },
  plugins: [],
};
