"use client";

import * as React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Events", href: "/events" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4 animate-fade-in">
                <header className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl p-1.5 shadow-2xl ring-1 ring-white/5 transition-all duration-300 hover:bg-black/50 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,122,0,0.1)]">

                    <Link className="flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-bold text-sm tracking-tight transition-all duration-300 hover:bg-white/5" href="/">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 text-white shadow-lg shadow-primary/20">
                            <Zap className="h-3.5 w-3.5 fill-white" />
                        </div>
                        <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">DevNest</span>
                    </Link>

                    <nav className="flex items-center rounded-full bg-white/5 p-1 border border-white/5">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                                        isActive
                                            ? "text-white shadow-lg"
                                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                    )}
                                >
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm -z-10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)]" />
                                    )}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 pl-2 pr-1">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="hidden lg:inline-flex h-9 rounded-full px-4 text-xs font-medium text-muted-foreground hover:text-foreground">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button variant="default" size="sm" className="h-9 rounded-full px-5 text-xs font-semibold shadow-lg shadow-primary/25">
                                Partner With Us
                            </Button>
                        </Link>
                    </div>
                </header>
            </div>

            {/* Mobile Header (iOS Style) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-black/60 backdrop-blur-xl border-b border-white/5 flex items-center justify-between transition-all duration-300">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 text-white shadow-lg shadow-primary/20">
                        <Zap className="h-4 w-4 fill-white" />
                    </div>
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-display font-bold text-lg">DevNest</span>
                </Link>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-95"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 z-[49] bg-black/95 backdrop-blur-3xl pt-24 px-6 flex flex-col transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)",
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[100%] pointer-events-none"
                )}
            >
                <nav className="flex flex-col space-y-6">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-4xl font-display font-bold tracking-tight text-white/50 hover:text-white transition-all duration-300 transform translate-y-4",
                                isMobileMenuOpen && "translate-y-0 opacity-100",
                                pathname === item.href && "text-white"
                            )}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto mb-12 space-y-4">
                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block">
                        <Button className="w-full h-14 rounded-full text-lg font-medium shadow-[0_0_30px_rgba(255,122,0,0.3)]">
                            Join DevNest
                        </Button>
                    </Link>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block">
                        <Button variant="outline" className="w-full h-14 rounded-full text-lg border-white/10 bg-white/5 hover:bg-white/10">
                            Log In
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
