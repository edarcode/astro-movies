// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  output: "hybrid",
  adapter: cloudflare(),
});