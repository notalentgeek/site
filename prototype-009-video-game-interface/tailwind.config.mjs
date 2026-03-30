/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hud: {
          green: "#00ff88",
          red: "#ff3366",
          blue: "#00bbff",
          dark: "#0a0a1a",
          panel: "#111122",
          text: "#e0e0e0",
          muted: "#666666",
        },
      },
      fontFamily: {
        display: ['"Press Start 2P"', "monospace"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      maxWidth: {
        content: "700px",
      },
    },
  },
  plugins: [],
};
