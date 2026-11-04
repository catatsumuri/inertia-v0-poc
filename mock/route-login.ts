// Wayfinder substitute for the login form. Used only by the mock Vite config.
export const store = {
    form: () => ({ action: '/login', method: 'post' as const }),
};
