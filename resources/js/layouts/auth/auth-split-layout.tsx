import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid min-h-svh grid-cols-1 bg-slate-100 lg:grid-cols-2">
            <div className="relative hidden flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-10 text-white lg:flex">
                <div className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 right-0 size-[30rem] rounded-full bg-blue-500/20 blur-3xl" />
                <Link
                    href={home()}
                    className="relative z-10 flex items-center gap-2 text-lg font-semibold tracking-tight"
                >
                    <AppLogoIcon className="size-8 fill-current text-cyan-300" />
                    {name}
                </Link>
            </div>
            <div className="flex w-full items-center justify-center px-6 py-12 sm:px-10">
                <div className="flex w-full max-w-sm flex-col gap-8">
                    <Link
                        href={home()}
                        className="flex items-center justify-center lg:hidden"
                    >
                        <AppLogoIcon className="h-10 fill-current text-slate-900" />
                    </Link>
                    <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h1>
                        <p className="text-sm text-pretty text-slate-500">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
