import type { ComponentType, ReactNode } from 'react';

export type WelcomeAuth = {
    user: { name?: string | null } | null;
};

export type WelcomeViewProps = {
    auth: WelcomeAuth;
    urls: {
        dashboard: string;
        login: string;
        register: string;
    };
    LinkComponent: ComponentType<{
        href: string;
        className?: string;
        children: ReactNode;
    }>;
};

const features = [
    { number: '01', title: 'Ship with clarity', description: 'Turn scattered ideas into a focused plan your whole team can move on with confidence.', icon: '✦' },
    { number: '02', title: 'Keep momentum', description: 'Bring projects, conversations, and decisions into one calm, connected workspace.', icon: '↗' },
    { number: '03', title: 'See what matters', description: 'Surface the signal with flexible views and instant insights built around your workflow.', icon: '◒' },
];

const metrics = [['32%', 'faster project delivery'], ['4.9/5', 'average team rating'], ['12k+', 'teams building better']];

function ArrowUpRight() {
    return <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4"><path d="M3 13 13 3M5 3h8v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>;
}

export default function WelcomeView({ auth, urls, LinkComponent: Link }: WelcomeViewProps) {
    return (
        <div className="min-h-screen overflow-hidden bg-[#f5f7f2] text-[#10231d] selection:bg-[#c9f45c] selection:text-[#10231d]">
            <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                <a href="#top" className="flex items-center gap-2.5" aria-label="Orbit home"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10231d] text-lg font-semibold text-[#d5ff63]">o</span><span className="text-lg font-semibold tracking-[-0.04em]">orbit<span className="text-[#809e20]">.</span></span></a>
                <nav className="hidden items-center gap-8 text-sm font-medium text-[#587067] md:flex" aria-label="Primary navigation"><a href="#features" className="transition-colors hover:text-[#10231d]">Product</a><a href="#results" className="transition-colors hover:text-[#10231d]">Why Orbit</a><a href="#pricing" className="transition-colors hover:text-[#10231d]">Pricing</a></nav>
                <nav className="flex items-center gap-2 text-sm font-medium" aria-label="Account navigation">
                    {auth.user ? <Link href={urls.dashboard} className="rounded-full bg-[#10231d] px-4 py-2.5 text-[#f5f7f2] transition-transform hover:-translate-y-0.5">Dashboard</Link> : <><Link href={urls.login} className="hidden rounded-full px-4 py-2.5 text-[#365149] transition-colors hover:text-[#10231d] sm:block">Log in</Link><Link href={urls.register} className="rounded-full bg-[#10231d] px-4 py-2.5 text-[#f5f7f2] transition-transform hover:-translate-y-0.5">Start free</Link></>}
                </nav>
            </header>

            <main id="top">
                <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-32 lg:pt-24"><div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#d9f96b]/60 blur-3xl" /><div className="relative grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"><div><p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6f8f1f]"><span className="h-px w-8 bg-[#9dbb3b]" /> The operating system for ambitious teams</p><h1 className="max-w-4xl text-[clamp(3.8rem,9vw,8.7rem)] font-semibold leading-[0.87] tracking-[-0.085em] text-[#10231d]">Make good work<br /><span className="text-[#76961b]">move faster.</span></h1></div><div className="max-w-sm pb-2 lg:justify-self-end"><p className="text-lg leading-8 text-[#587067]">Orbit brings your team&apos;s best thinking into focus, so progress feels less like pushing and more like momentum.</p><a href="#features" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c9f45c] px-5 py-3 text-sm font-semibold text-[#10231d] transition-all hover:-translate-y-1 hover:bg-[#bdf047]">Explore the platform <ArrowUpRight /></a></div></div>
                    <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#132c24] p-3 shadow-2xl shadow-[#19392c]/15 lg:mt-28 lg:p-5"><div className="rounded-[1.35rem] border border-white/10 bg-[#17382c] p-5 lg:p-8"><div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5 text-xs text-[#a9c0b2]"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c9f45c]" /> Weekly command center</div><span className="hidden sm:block">Updated just now · All systems on track</span></div><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-sm text-[#a9c0b2]">Good morning, team</p><h2 className="mt-2 max-w-xl text-3xl font-medium tracking-[-0.05em] text-[#f3f6e9] lg:text-5xl">A clear view of where you&apos;re going.</h2><div className="mt-10 flex flex-wrap gap-3"><span className="rounded-full bg-[#c9f45c] px-3 py-1.5 text-xs font-semibold text-[#17382c]">6 priorities on track</span><span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#c0d1c5]">3 need attention</span></div></div><div className="grid grid-cols-2 gap-3 self-end sm:grid-cols-3 lg:grid-cols-2">{[['84%', 'Team focus'], ['+28%', 'Momentum'], ['12', 'Open loops'], ['4.9', 'Team pulse']].map(([value, label]) => <div key={label} className="rounded-2xl bg-white/[0.06] p-4"><div className="text-2xl font-medium tracking-[-0.06em] text-[#f3f6e9]">{value}</div><div className="mt-2 text-xs text-[#9db7a8]">{label}</div></div>)}</div></div></div></div>
                </section>
                <section id="results" className="border-y border-[#d8e1d7] bg-[#edf2e9] px-6 py-10 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">{metrics.map(([value, label]) => <div key={label} className="flex items-baseline gap-3"><span className="text-3xl font-semibold tracking-[-0.07em] text-[#10231d]">{value}</span><span className="text-sm text-[#678077]">{label}</span></div>)}</div></section>
                <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#76961b]">Everything in sync</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.07em] lg:text-6xl">Less busywork.<br />More <span className="text-[#76961b]">breakthroughs.</span></h2></div><div className="divide-y divide-[#d8e1d7]">{features.map((feature) => <article key={feature.number} className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr_2rem] sm:items-start"><span className="font-mono text-xs text-[#8ba09a]">{feature.number}</span><div><h3 className="text-xl font-semibold tracking-[-0.04em]">{feature.title}</h3><p className="mt-2 max-w-md leading-7 text-[#678077]">{feature.description}</p></div><span className="text-2xl text-[#76961b]" aria-hidden="true">{feature.icon}</span></article>)}</div></div></section>
                <section id="pricing" className="mx-6 mb-10 overflow-hidden rounded-[2rem] bg-[#c9f45c] px-7 py-14 lg:mx-10 lg:px-16 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#56720f]">Ready when you are</p><h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-[#10231d] lg:text-7xl">Put your best work in motion.</h2></div><a href="#top" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#10231d] px-5 py-3 text-sm font-semibold text-[#f5f7f2] transition-transform hover:-translate-y-1">Get started free <ArrowUpRight /></a></div></section>
            </main>
            <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#789087] sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2025 Orbit Systems</span><span>Built for teams that care about the details.</span></footer>
        </div>
    );
}
