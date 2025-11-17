import defaultConfig from './vite.config'
import { defineConfig } from "vite";


export default defineConfig({
    ...defaultConfig,
    root: 'build-root',
    build: {
        outDir: '../../public/pms-ui',
        rollupOptions: {
            output: {
                entryFileNames: '[name].bundle.js',
                chunkFileNames: '[name]-[hash].js',
                assetFileNames: '[name].[ext]',
            },
        },
        emptyOutDir: true,
        target: 'es2015',
    },
})
