import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false, // Disable for now due to asset import issues
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    // Ignore SCSS imports in components (they're built separately)
    // Handle image files as file imports
    options.loader = {
      ...options.loader,
      ".scss": "empty",
      ".png": "file",
      ".jpg": "file",
      ".jpeg": "file",
      ".gif": "file",
      ".svg": "file",
      ".webp": "file",
    };
  },
  rollupOptions: {
    external: [/\.(png|jpe?g|gif|svg|webp)$/],
  },
});
