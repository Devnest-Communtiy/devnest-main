"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageSquare,
    Bot,
    Users,
    Calendar,
    Library,
    Settings,
    LogOut,
    Zap
} from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/feed", label: "Community Feed", icon: MessageSquare },
    { href: "/dashboard/helpdesk", label: "AI Helpdesk", icon: Bot },
    { href: "/dashboard/circles", label: "Learning Circles", icon: Users },
    { href: "/dashboard/events", label: "Events", icon: Calendar },
    { href: "/dashboard/resources", label: "Resource Library", icon: Library },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/5 bg-background/95 backdrop-blur-md transition-transform">
            <div className="flex h-16 items-center px-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <Zap className="h-5 w-5 fill-current" />
                    </div>
                    <span>DevNest</span>
                </Link>
            </div>

            <div className="flex h-[calc(100vh-4rem)] flex-col justify-between py-6">
                <nav className="space-y-1 px-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-primary/10 text-primary shadow-[inset_3px_0_0_0_#FF7A00]"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                )}
                            >
                                <Icon className={cn("h-5 w-5", isActive ? "stroke-[2.5px]" : "stroke-2")} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-4 space-y-1">
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </div>
        </aside>
    );
}
