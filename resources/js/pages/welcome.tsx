import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, BarChart3, Check, ChevronRight, CirclePlay, Layers3, Menu, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { dashboard, login } from '@/routes';
/* @chisel-registration */
import { register } from '@/routes';
/* @end-chisel-registration */

const metrics = [
    { value: '42%', label: 'faster launch cycles' },
    { value: '2.4×', label: 'more work shipped' },
    { value: '99.9%', label: 'platform uptime' },
];

const capabilities = [
    {
        icon: Workflow,
        eyebrow: 'Orchestrate',
        title: 'Turn scattered work into momentum.',
        description: 'Keep projects, people, and priorities aligned in one calm workspace built for focus.',
    },
    {
        icon: BarChart3,
        eyebrow: 'Understand',
        title: 'See what moves the needle.',
        description: 'Make confident decisions with live signals, thoughtful reporting, and less busywork.',
    },
    {
        icon: ShieldCheck,
        eyebrow: 'Scale safely',
        title: 'Built for your next chapter.',
        description: 'Enterprise-ready permissions, reliable infrastructure, and a system that grows with you.',
    },
];

function ProductPreview() {
    return (
        <div className="relative mx-auto w-full max-w-[720px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.24),transparent_66%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_35px_90px_-35px_rgba(15,23,42,0.36)]">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2.5">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <Layers3 className="size-3.5" />
                        </div>
                        <span className="text-xs font-semibold tracking-tight text-slate-800">Northstar / Growth</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-medium text-slate-400">Live workspace</span>
                    </div>
                </div>
                <div className="grid gap-5 p-4 sm:grid-cols-[1fr_200px] sm:p-6">
                    <div className="space-y-5">
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-[11px] font-medium text-slate-400">Weekly overview</p>
                                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">+18.4%</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-4xl">$84,290</span>
                                <span className="pb-1 text-[10px] text-slate-400">revenue</span>
                            </div>
                        </div>
                        <div className="flex h-36 items-end gap-2 border-b border-l border-slate-100 px-3 pb-0 pt-4 sm:h-44">
                            {[32, 46, 40, 64, 58, 78, 68, 94, 82, 100, 86, 112].map((height, index) => (
                                <div key={index} className="group flex h-full flex-1 items-end">
                                    <div className="w-full rounded-t-md bg-indigo-100 transition-colors group-hover:bg-indigo-500" style={{ height: `${height}%` }} />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                        </div>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                        <div className="mb-5 flex items-center justify-between">
                            <p className="text-[11px] font-semibold text-slate-700">Focus today</p>
                            <ChevronRight className="size-3.5 text-slate-400" />
                        </div>
                        <div className="space-y-4">
                            {['Review launch brief', 'Sync with design', 'Ship onboarding v2'].map((item, index) => (
                                <div key={item} className="flex items-center gap-2.5">
                                    <span className={`flex size-4 items-center justify-center rounded-full border ${index === 0 ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300'}`}>
                                        {index === 0 && <Check className="size-2.5" />}
                                    </span>
                                    <span className={`text-[10px] ${index === 0 ? 'text-slate-400 line-through' : 'font-medium text-slate-600'}`}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-7 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-100">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-[10px] font-medium text-slate-500">Team progress</span>
                                <span className="text-[10px] font-semibold text-indigo-600">78%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100"><div className="h-full w-[78%] rounded-full bg-indigo-500" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Northstar — Work with clarity" />
            <div className="min-h-screen overflow-hidden bg-[#fbfcff] text-slate-950 selection:bg-indigo-100 selection:text-indigo-950">
                <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
                    <a href="#top" className="flex items-center gap-2.5" aria-label="Northstar home">
                        <span className="flex size-8 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
                            <Sparkles className="size-4" />
                        </span>
                        <span className="text-[15px] font-bold tracking-[-0.04em]">northstar<span className="text-indigo-600">.</span></span>
                    </a>
                    <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex" aria-label="Main navigation">
                        <a href="#product" className="transition-colors hover:text-slate-950">Product</a>
                        <a href="#why-northstar" className="transition-colors hover:text-slate-950">Why Northstar</a>
                        <a href="#customers" className="transition-colors hover:text-slate-950">Customers</a>
                    </nav>
                    <div className="flex items-center gap-2">
                        {auth.user ? (
                            <Link href={dashboard()} className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex">Dashboard</Link>
                        ) : (
                            <Link href={login()} className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex">Log in</Link>
                        )}
                        {/* @chisel-registration */}
                        {!auth.user && <Link href={register()} className="hidden rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-indigo-700 sm:inline-flex">Start free</Link>}
                        {/* @end-chisel-registration */}
                        <button type="button" className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 md:hidden" aria-label="Open navigation menu">
                            <Menu className="size-4" />
                        </button>
                    </div>
                </header>

                <main id="top">
                    <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
                        <div className="pointer-events-none absolute -right-24 -top-28 size-[420px] rounded-full bg-indigo-100/60 blur-3xl" />
                        <div className="pointer-events-none absolute left-1/3 top-24 h-48 w-48 rounded-full bg-violet-100/60 blur-3xl" />
                        <div className="relative grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
                            <div className="max-w-xl">
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-indigo-700 shadow-sm">
                                    <span className="size-1.5 rounded-full bg-indigo-500" /> Built for ambitious teams
                                    <ArrowRight className="size-3" />
                                </div>
                                <h1 className="max-w-[680px] text-5xl font-semibold leading-[0.98] tracking-[-0.075em] text-slate-950 sm:text-6xl lg:text-[4.8rem]">Make space for your best work.</h1>
                                <p className="mt-7 max-w-lg text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">Northstar gives growing teams the clarity to move faster, make smarter calls, and build what matters next.</p>
                                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                                    {/* @chisel-registration */}
                                    <Link href={auth.user ? dashboard() : register()} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(79,70,229,0.75)] transition-all hover:-translate-y-0.5 hover:bg-indigo-700">{auth.user ? 'Open dashboard' : 'Start building free'} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></Link>
                                    {/* @end-chisel-registration */}
                                    <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-white hover:text-slate-950"><CirclePlay className="size-4 text-indigo-500" /> See how it works</a>
                                </div>
                                <div className="mt-8 flex items-center gap-3 text-xs text-slate-400"><div className="flex -space-x-2"><span className="size-7 rounded-full border-2 border-[#fbfcff] bg-[#d8c2a4]" /><span className="size-7 rounded-full border-2 border-[#fbfcff] bg-[#91a7c3]" /><span className="size-7 rounded-full border-2 border-[#fbfcff] bg-[#c99592]" /><span className="flex size-7 items-center justify-center rounded-full border-2 border-[#fbfcff] bg-indigo-100 text-[9px] font-semibold text-indigo-700">+4k</span></div><span>Loved by teams who care about craft</span></div>
                            </div>
                            <div id="product" className="lg:pt-6"><ProductPreview /></div>
                        </div>
                    </section>

                    <section id="customers" className="border-y border-slate-200/70 bg-white/70">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200/70 px-5 py-7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
                            {metrics.map((metric) => <div key={metric.label} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0 sm:justify-center sm:py-1 sm:first:pt-1 sm:last:pb-1"><span className="text-2xl font-semibold tracking-[-0.06em] text-slate-950">{metric.value}</span><span className="max-w-24 text-xs leading-4 text-slate-400">{metric.label}</span></div>)}
                        </div>
                    </section>

                    <section id="why-northstar" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
                        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">One clear direction</p><h2 className="max-w-lg text-3xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-4xl">Everything you need to move with intention.</h2></div><p className="max-w-xs text-sm leading-6 text-slate-500">Less tab-switching. More meaningful progress. A better way to work together.</p></div>
                        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">{capabilities.map(({ icon: Icon, eyebrow, title, description }) => <article key={title} className="bg-white p-7 sm:p-8"><div className="mb-12 flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Icon className="size-5" /></div><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{eyebrow}</p><h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-slate-900">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-500">{description}</p></article>)}</div>
                    </section>
                </main>

                <footer className="border-t border-slate-200/70"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div className="flex items-center gap-2 font-semibold text-slate-600"><span className="flex size-6 items-center justify-center rounded-lg bg-slate-950 text-white"><Sparkles className="size-3" /></span> northstar.</div><p>Make room for better work.</p><div className="flex gap-5"><a href="#product" className="hover:text-slate-700">Product</a><a href="#why-northstar" className="hover:text-slate-700">About</a></div></div></footer>
            </div>
        </>
    );
}
