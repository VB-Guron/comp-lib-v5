import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    // Ignore SCSS imports in components (they're built separately)
    options.loader = {
      ...options.loader,
      ".scss": "empty",
    };
  },
});
