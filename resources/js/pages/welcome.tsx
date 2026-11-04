import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import WelcomeView from '@/components/welcome-view';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Build better, together" />
            <WelcomeView
                auth={auth}
                urls={{ dashboard: dashboard(), login: login(), register: register() }}
                LinkComponent={Link}
            />
        </>
    );
}
