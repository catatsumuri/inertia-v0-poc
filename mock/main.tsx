import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Welcome from './welcome';
import Login from '../resources/js/pages/auth/login';
import Dashboard from '../resources/js/pages/dashboard';
import AuthLayout from '../resources/js/layouts/auth-layout';
import AppLayout from '../resources/js/layouts/app-layout';
import { TooltipProvider } from '../resources/js/components/ui/tooltip';
import '../resources/css/app.css';

function MockApp() {
    const pathname = window.location.pathname;
    if (pathname === '/dashboard') {
        // Render the real Inertia page inside the real Laravel application layout.
        return (
            <AppLayout breadcrumbs={Dashboard.layout.breadcrumbs}>
                <Dashboard />
            </AppLayout>
        );
    }
    if (pathname === '/login') {
        return (
            <AuthLayout title={Login.layout.title} description={Login.layout.description}>
                <Login canResetPassword={true} />
            </AuthLayout>
        );
    }
    if (pathname === '/register' || pathname === '/forgot-password') {
        return (
            <main className="flex min-h-svh flex-col items-center justify-center gap-5 bg-background p-8 text-center">
                <h1 className="text-2xl font-semibold">{pathname === '/register' ? 'Registration' : 'Password reset'}</h1>
                <p className="max-w-md text-sm text-muted-foreground">This route is a UI mock placeholder. No account data is processed.</p>
                <a className="underline" href="/login">Return to log in</a>
            </main>
        );
    }
    return <Welcome />;
}

function PreviewControls() {
    const pathname = window.location.pathname;
    const signedIn = pathname === '/dashboard' || new URLSearchParams(window.location.search).get('auth') === '1';
    return (
        <aside
            aria-label="Mock preview controls"
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/95 px-3 py-2 text-xs text-neutral-700 shadow-lg backdrop-blur"
        >
            <span className="font-semibold">UI MOCK</span>
            <a className={!signedIn ? 'font-bold underline' : 'hover:underline'} href="/?auth=0">Guest</a>
            <span aria-hidden="true">/</span>
            <a className={signedIn ? 'font-bold underline' : 'hover:underline'} href="/dashboard">Dashboard (demo)</a>
        </aside>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TooltipProvider delayDuration={0}>
            <MockApp />
        </TooltipProvider>
        <PreviewControls />
    </StrictMode>,
);
