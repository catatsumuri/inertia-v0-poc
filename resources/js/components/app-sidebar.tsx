import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Search, Sparkles } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar
            collapsible="icon"
            variant="inset"
            className="border-sidebar-border/60 bg-linear-to-b from-sidebar via-sidebar to-sidebar-accent/30 shadow-[inset_-1px_0_0_var(--sidebar-border)]"
        >
            <SidebarHeader className="gap-4 px-3 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="rounded-xl px-2 hover:bg-sidebar-accent">
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <div className="rounded-xl border border-sidebar-border/70 bg-sidebar-accent/50 px-3 py-2.5 group-data-[collapsible=icon]:hidden">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/45">
                        <Sparkles className="size-3 text-cyan-300" aria-hidden="true" />
                        Workspace
                    </div>
                    <p className="mt-1 truncate text-sm font-semibold text-sidebar-foreground">Northstar workspace</p>
                    <p className="mt-0.5 text-xs text-sidebar-foreground/50">Personal workspace</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-sidebar-border/70 bg-sidebar-accent/35 px-3 py-2 text-sm text-sidebar-foreground/50 group-data-[collapsible=icon]:hidden">
                    <Search className="size-4 shrink-0" aria-hidden="true" />
                    <span>Search · coming soon</span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
