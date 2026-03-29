import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://notalentgeek.github.io",
  base: "/site",
  integrations: [tailwind()],
});
