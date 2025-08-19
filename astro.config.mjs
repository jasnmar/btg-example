// @ts-check
import { defineConfig } from "astro/config"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide"
      })
    ]
  },
  output: "server",
  adapter: node({ mode: "standalone" })
})
