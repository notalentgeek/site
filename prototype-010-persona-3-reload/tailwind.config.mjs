/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "p3-blue": "#1269cc",
        "p3-soft": "#6d9ac7",
        "p3-cyan": "#51eefc",
        "p3-dark": "#0d1117",
        "p3-dark-alt": "#141b24",
        "p3-white": "#ffffff",
        "p3-muted": "#5a7a9a",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
