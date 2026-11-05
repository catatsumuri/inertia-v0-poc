// UI preview only: Inertia-like adapters. No network authentication or credentials storage.
import { useEffect, useState, type AnchorHTMLAttributes, type FormEvent, type ReactNode } from 'react';

const demoUser = {
    id: 1,
    name: 'Demo User',
    email: 'demo@example.test',
    avatar: undefined,
    email_verified_at: '2026-01-01T00:00:00.000Z',
    created_at: '2026-01-01T00:00:00.000Z',
    updated_at: '2026-01-01T00:00:00.000Z',
};

export function Head({ title }: { title?: string }) {
    useEffect(() => {
        if (title) document.title = title + ' | UI Mock';
    }, [title]);
    return null;
}

type MockLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    prefetch?: boolean;
    as?: string;
    method?: string;
};

export function Link({ href, children, prefetch: _prefetch, as: _as, method: _method, ...props }: MockLinkProps) {
    return <a href={href} {...props}>{children}</a>;
}

export function usePage() {
    const pathname = window.location.pathname;
    const signedIn = pathname === '/dashboard' || new URLSearchParams(window.location.search).get('auth') === '1';
    return {
        url: pathname + window.location.search,
        props: {
            name: 'Northstar',
            sidebarOpen: true,
            auth: { user: signedIn ? demoUser : null },
        },
    };
}

type FormState = { processing: boolean; errors: Record<string, string> };
type FormProps = {
    children: ReactNode | ((state: FormState) => ReactNode);
    action?: string;
    method?: string;
    className?: string;
    resetOnSuccess?: string[];
    disableWhileProcessing?: boolean;
};

export function Form({ children, action, method = 'post', className }: FormProps) {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (processing) return;
        // Browser-native required/email validation still applies.
        // No values from inputs are read, stored, sent, or logged.
        setProcessing(true);
        window.setTimeout(() => {
            if (new URLSearchParams(window.location.search).has('validationError')) {
                setErrors({ email: 'Demo validation error (not from Laravel).' });
                setProcessing(false);
            } else {
                window.location.assign('/dashboard');
            }
        }, 200);
    };

    return (
        <form action={action} method={method} className={className} onSubmit={onSubmit}>
            {typeof children === 'function' ? children({ processing, errors }) : children}
        </form>
    );
}

export const router = {
    visit: (url: string) => { window.location.assign(url); },
    flushAll: () => {},
};
