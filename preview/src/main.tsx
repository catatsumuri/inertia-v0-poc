import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import WelcomeView from '../../resources/js/components/welcome-view';
import './styles.css';

function PreviewLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return <a href={href} className={className}>{children}</a>;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WelcomeView auth={{ user: null }} urls={{ dashboard: '#dashboard', login: '#login', register: '#register' }} LinkComponent={PreviewLink} />
    </StrictMode>,
);
