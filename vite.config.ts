import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [react()],
});
