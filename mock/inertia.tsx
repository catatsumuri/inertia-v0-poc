// Preview-only stand-ins for the three Inertia exports used by welcome.tsx.
// Vite aliases @inertiajs/react to this module. Production imports are unchanged.
import { useEffect, type AnchorHTMLAttributes } from 'react';

export function Head({ title }: { title?: string }) {
    useEffect(() => {
        if (title) document.title = title + ' | UI Mock';
    }, [title]);
    return null;
}

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
    return <a {...props} />;
}

export function usePage() {
    const signedIn = new URLSearchParams(window.location.search).get('auth') === '1';
    return {
        props: {
            auth: {
                user: signedIn ? { id: 1, name: 'Preview User' } : null,
            },
        },
    };
}
