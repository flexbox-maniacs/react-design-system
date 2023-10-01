import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scripts": path.resolve(__dirname, "./node_modules/scripts/scripts.ts"),
      "@mixins": path.resolve(__dirname, "./node_modules/theme-default/scss/mixins"),
      "@size": path.resolve(__dirname, "./node_modules/theme-default/scss/functions/_size.scss"),
      "@theme": path.resolve(__dirname, "./node_modules/theme-default/scss/main.scss"),
      "@ds": path.resolve(__dirname, "./src/components/index.ts"),
      "@dom-types": path.resolve(__dirname, "./src/components/dom-types.ts"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
})
