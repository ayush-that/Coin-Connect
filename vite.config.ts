import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "rollup/parseAst": path.resolve(
        __dirname,
        "node_modules/rollup/dist/parseAst.js"
      ),
    },
  },
});
