import React from 'react';

const stats = [
    { label: "Developers", value: "50K+", glow: "bg-blue-500/20" },
    { label: "Projects Built", value: "1K+", glow: "bg-purple-500/20" },
    { label: "AI-Powered Learning", value: "100%", glow: "bg-primary/20" },
    { label: "Global Community", value: "150+", suffix: "Countries", glow: "bg-green-500/20" },
];

export function Stats() {
    return (
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="relative group text-center p-6">
                            <div className={`absolute inset-0 ${stat.glow} blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            <div className="relative z-10 space-y-2">
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                    {stat.label} {stat.suffix && <span className="block text-xs opacity-70 mt-1">{stat.suffix}</span>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
