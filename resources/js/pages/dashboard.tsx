import { Head } from '@inertiajs/react';
import {
    Activity,
    ArrowUpRight,
    Check,
    CheckCircle2,
    ChevronRight,
    CircleDollarSign,
    Clock3,
    FolderKanban,
    MoreHorizontal,
    Plus,
    Users,
} from 'lucide-react';
import { dashboard } from '@/routes';

type ActivityItem = {
    initials: string;
    name: string;
    action: string;
    target: string;
    time: string;
    tone: string;
};

const activityData = [42, 58, 47, 72, 64, 88, 76];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const recentActivity: ActivityItem[] = [
    { initials: 'MC', name: 'Maya Chen', action: 'completed', target: 'Launch checklist', time: '12 min ago', tone: 'bg-cyan-100 text-cyan-700' },
    { initials: 'JR', name: 'Jordan Rivera', action: 'commented on', target: 'Q4 growth plan', time: '48 min ago', tone: 'bg-violet-100 text-violet-700' },
    { initials: 'AK', name: 'Alex Kim', action: 'created', target: 'Onboarding flow', time: '2 hours ago', tone: 'bg-amber-100 text-amber-700' },
    { initials: 'SL', name: 'Sam Lee', action: 'moved a task in', target: 'Website refresh', time: 'Yesterday', tone: 'bg-emerald-100 text-emerald-700' },
];

const projects = [
    { name: 'Website refresh', team: 'Marketing · 6 members', progress: 78, status: 'On track', tone: 'bg-cyan-400' },
    { name: 'Q4 growth plan', team: 'Strategy · 4 members', progress: 52, status: 'In progress', tone: 'bg-violet-400' },
    { name: 'Mobile onboarding', team: 'Product · 8 members', progress: 34, status: 'Needs attention', tone: 'bg-amber-400' },
];

function KpiCard({ icon: Icon, label, value, detail, trend }: { icon: typeof Activity; label: string; value: string; detail: string; trend: string }) {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)]">
            <div className="flex items-start justify-between gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon className="size-5" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{trend}</span>
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{detail}</p>
        </div>
    );
}

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-full bg-[#f7f9fc] px-4 py-5 text-slate-950 sm:px-6 lg:px-8 lg:py-8">
                <div className="mx-auto flex max-w-[1440px] flex-col gap-7">
                    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                                <span className="size-1.5 rounded-full bg-cyan-500" /> Demo workspace
                            </div>
                            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Good morning, Demo User</h1>
                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">Here&apos;s what&apos;s happening across your workspace today.</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">Tuesday, October 8, 2024</div>
                            <button type="button" className="flex size-11 items-center justify-center rounded-xl bg-[#071a3a] text-white shadow-sm transition hover:bg-[#0b2a58]" aria-label="Create new item">
                                <Plus className="size-5" aria-hidden="true" />
                            </button>
                        </div>
                    </header>

                    <section aria-label="Key metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <KpiCard icon={CircleDollarSign} label="Revenue" value="$48,290" detail="vs. $42,780 last month" trend="+12.8%" />
                        <KpiCard icon={FolderKanban} label="Active projects" value="12" detail="3 updated this week" trend="+2" />
                        <KpiCard icon={CheckCircle2} label="Task completion" value="84.6%" detail="421 of 498 tasks complete" trend="+6.4%" />
                        <KpiCard icon={Users} label="Team activity" value="92%" detail="23 of 25 members active" trend="+4.1%" />
                    </section>

                    <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Activity className="size-4 text-cyan-600" aria-hidden="true" />
                                        <h2 className="font-semibold text-slate-950">Workspace activity</h2>
                                    </div>
                                    <p className="mt-1 text-sm text-slate-500">Weekly overview of completed work</p>
                                </div>
                                <button type="button" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-950">Last 7 days <ChevronRight className="size-4" aria-hidden="true" /></button>
                            </div>
                            <div className="mt-8 flex h-56 items-end gap-3 border-b border-slate-200 px-1 pb-0 sm:gap-6">
                                {activityData.map((value, index) => (
                                    <div key={days[index]} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                                        <div className="relative flex w-full flex-1 items-end justify-center">
                                            <div className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-cyan-500 to-cyan-300 transition-all hover:from-cyan-600 hover:to-cyan-400" style={{ height: `${value}%` }} aria-label={`${days[index]}: ${value} completed items`} />
                                        </div>
                                        <span className="pb-3 text-xs font-medium text-slate-400">{days[index]}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-cyan-400" /> Completed items</span>
                                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-slate-200" /> Previous period</span>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] sm:p-6">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="font-semibold text-slate-950">Recent activity</h2>
                                    <p className="mt-1 text-sm text-slate-500">Your team&apos;s latest updates</p>
                                </div>
                                <button type="button" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="More activity options"><MoreHorizontal className="size-5" aria-hidden="true" /></button>
                            </div>
                            <div className="mt-6 flex flex-col">
                                {recentActivity.map((item) => (
                                    <div key={`${item.name}-${item.time}`} className="flex gap-3 border-b border-slate-100 py-4 first:pt-0 last:border-b-0 last:pb-0">
                                        <div className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.tone}`}>{item.initials}</div>
                                        <div className="min-w-0 flex-1 text-sm leading-5">
                                            <p className="truncate text-slate-700"><span className="font-semibold text-slate-950">{item.name}</span> {item.action} <span className="font-medium text-slate-700">{item.target}</span></p>
                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400"><Clock3 className="size-3" aria-hidden="true" /> {item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] sm:p-6">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="font-semibold text-slate-950">Projects in progress</h2>
                                <p className="mt-1 text-sm text-slate-500">A snapshot of your team&apos;s current focus</p>
                            </div>
                            <button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800">View all projects <ArrowUpRight className="size-4" aria-hidden="true" /></button>
                        </div>
                        <div className="mt-6 grid gap-4 lg:grid-cols-3">
                            {projects.map((project) => (
                                <div key={project.name} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-cyan-200 hover:bg-cyan-50/30">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{project.name}</h3>
                                            <p className="mt-1 text-xs text-slate-500">{project.team}</p>
                                        </div>
                                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">{project.status}</span>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between text-xs font-medium text-slate-500"><span>Progress</span><span className="text-slate-900">{project.progress}%</span></div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200"><div className={`h-full rounded-full ${project.tone}`} style={{ width: `${project.progress}%` }} /></div>
                                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400"><span>Updated today</span><span className="flex items-center gap-1 text-slate-500"><Check className="size-3.5" aria-hidden="true" /> On schedule</span></div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
