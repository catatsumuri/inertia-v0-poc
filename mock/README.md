# v0 Welcome UI mock

This is a **root-level Vite preview on a dedicated PoC branch**, not a separate
Next.js application. The original `resources/js/pages/welcome.tsx` is imported
and rendered directly: there is no duplicated UI component to maintain.

## What is mocked?

- `@inertiajs/react`: `Head`, `Link`, and `usePage`
- `@/routes`: `dashboard()`, `login()`, `register()`

These aliases are configured **only** in `vite.config.ts` on this PoC branch.
Laravel files, controllers and the actual `welcome.tsx` are untouched.

## Run / validate

From the **repository root** (not `mock/`):

```bash
npm install
npm run dev
```

Open the root preview (Vite's default entry is `/index.html`). Use the
bottom-right switch or `/?auth=0` and `/?auth=1` to test both auth states.

For a static build: `npm run build:mock`.

To start the original Laravel Vite integration on this branch, use
`npm run dev:laravel` (requires PHP, Composer dependencies and Wayfinder).

This branch deliberately uses the mock config as the top-level
`vite.config.ts` so v0's normal Preview can discover a PHP-free app even if
it invokes `vp dev` directly. The original config is saved as
`vite.laravel.config.ts`. Do not merge the config switch to main without
deciding how to separate production and mock workflows.
