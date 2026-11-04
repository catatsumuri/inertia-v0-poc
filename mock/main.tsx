import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MockWelcome from './welcome';
import '../resources/css/app.css';

function PreviewControls() {
    const signedIn = new URLSearchParams(window.location.search).get('auth') === '1';
    return (
        <aside
            aria-label="Mock preview controls"
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-neutral-200 bg-white/95 px-3 py-2 text-xs text-neutral-700 shadow-lg backdrop-blur"
        >
            <span className="font-semibold">UI MOCK</span>
            <a className={!signedIn ? 'font-bold underline' : 'hover:underline'} href="/?auth=0">
                Guest
            </a>
            <span aria-hidden="true">/</span>
            <a className={signedIn ? 'font-bold underline' : 'hover:underline'} href="/?auth=1">
                Signed in
            </a>
        </aside>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MockWelcome />
        <PreviewControls />
    </StrictMode>,
);
