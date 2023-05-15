import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@mixins": path.resolve(__dirname, "node_modules/@flex/theme-default/scss/mixins"),
      "@scripts": path.resolve(__dirname, "node_modules/@flex/scripts/scripts.ts"),
      "@sections": path.resolve(__dirname, "src/components/sections/index.ts"),
      "@size": path.resolve(__dirname, "node_modules/@flex/theme-default/scss/functions/_size.scss"),
      "@theme": path.resolve(__dirname, "node_modules/@flex/theme-default/scss/main.scss"),
      "@ui": path.resolve(__dirname, "src/components/ui/index.ts"),
    },
  },
})
