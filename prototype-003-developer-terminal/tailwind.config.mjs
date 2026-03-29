/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0d1117",
          "bg-light": "#161b22",
          green: "#00ff41",
          "green-dim": "#00cc33",
          blue: "#58a6ff",
          amber: "#ffa657",
          red: "#ff7b72",
          gray: "#8b949e",
          border: "#30363d",
          white: "#c9d1d9",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
