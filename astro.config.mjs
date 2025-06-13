// astro.config.mjs (FIXED VERSION)
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://my-linktree.vercel.app", // Ganti dengan domain Anda nanti
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // Removed experimental.viewTransitions - it's now stable
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
});
