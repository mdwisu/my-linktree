// astro.config.mjs - Updated for static deployment
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mdwisu.vercel.app", // Replace with your actual domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
});

// Alternative config if you want server-side features later
// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel/serverless';

// export default defineConfig({
//   site: 'https://yoursite.vercel.app',
//   integrations: [
//     tailwind({
//       applyBaseStyles: false,
//     }),
//   ],
//   output: 'server',
//   adapter: vercel(),
// });
