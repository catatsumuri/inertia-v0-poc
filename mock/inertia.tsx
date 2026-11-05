// Preview-only stand-ins for Inertia. The Laravel app never imports this file.
import { useEffect, useState, type AnchorHTMLAttributes, type FormEvent, type ReactNode } from 'react';

export function Head({ title }: { title?: string }) {
    useEffect(() => {
        if (title) document.title = title + ' | UI Mock';
    }, [title]);
    return null;
}

export function Link({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
    return <a href={href} {...props}>{children}</a>;
}

export function usePage() {
    const signedIn = new URLSearchParams(window.location.search).get('auth') === '1';
    return {
        props: {
            auth: { user: signedIn ? { id: 1, name: 'Preview User' } : null },
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
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (processing) return;
        // The browser handles native required/email input checks.
        // Simulate a server validation response without sending credentials.
        setProcessing(true);
        window.setTimeout(() => {
            setErrors({
                email: 'Demo only: no authentication server is connected.',
                password: 'Use the Laravel Cloud application to test real login.',
            });
            setProcessing(false);
        }, 350);
    };

    return (
        <form action={action} method={method} className={className} onSubmit={onSubmit}>
            {typeof children === 'function'
                ? children({ processing, errors })
                : children}
        </form>
    );
}

export const router = {
    visit: (url: string) => { window.location.assign(url); },
};
