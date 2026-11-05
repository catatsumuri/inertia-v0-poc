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
            { find: '@/routes/login', replacement: file('./mock/route-login.ts') },
            { find: '@/routes/password', replacement: file('./mock/route-password.ts') },
            { find: '@/routes/profile', replacement: file('./mock/route-profile.ts') },
            { find: '@/routes', replacement: file('./mock/routes.ts') },
            { find: '@laravel/passkeys/react', replacement: file('./mock/passkeys.ts') },
            { find: /^@\//, replacement: file('./resources/js/') },
        ],
    },
    server: {
        host: '0.0.0.0',
        // v0's isolated preview uses ephemeral sb-*.vercel.run hostnames.
        allowedHosts: ['.vercel.run'],
    },
});
