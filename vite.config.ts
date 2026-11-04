import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';
import { fileURLToPath } from 'node:url';

const file = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [
            { find: '@inertiajs/react', replacement: file('./mock/inertia.tsx') },
            { find: '@/routes', replacement: file('./mock/routes.ts') },
            { find: /^@\//, replacement: file('./resources/js/') },
        ],
    },
    server: { host: '0.0.0.0' },
});
