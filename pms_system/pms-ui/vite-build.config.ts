import defaultConfig from "./vite.config";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
    ...defaultConfig,
    root: "build-root",
    build: {
        outDir: "../../public/pms-ui",
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.tsx'), // Use entry.tsx logic
            },
            output: {
                format: 'iife',
                inlineDynamicImports: true,
                manualChunks: undefined,
                entryFileNames: "index.bundle.js",
                assetFileNames: "[name][extname]",
            },
        },
        emptyOutDir: true,
        target: "es2017",
        minify: true,
    },
});