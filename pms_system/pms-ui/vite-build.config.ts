import defaultConfig from "./vite.config";
import { defineConfig } from "vite";

export default defineConfig({
    ...defaultConfig,
    root: "build-root",
    build: {
        outDir: "../../public/pms-ui",
        rollupOptions: {
            output: {
                format: 'iife',
                inlineDynamicImports: true, // bundle EVERYTHING into a single file
                manualChunks: undefined,    // no chunk splitting
                entryFileNames: "index.bundle.js",
                assetFileNames: "[name][extname]",
            },
        },

        emptyOutDir: true,
        target: "es2017", // better compatibility for Frappe Cloud
        minify: true,     // reduces size, prevents 502
    },
});
