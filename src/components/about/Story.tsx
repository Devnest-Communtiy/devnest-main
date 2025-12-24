import React from 'react';

export function Story() {
    return (
        <section className="relative py-32 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                        Why DevNest?
                    </h2>
                    <div className="h-1 w-24 bg-primary/50 mx-auto rounded-full" />
                </div>

                <p className="text-xl md:text-2xl font-light text-muted-foreground/90 leading-relaxed">
                    <span className="text-white font-normal">DevNest was created to solve a simple problem</span> — developers needed more than chat rooms and tutorials.
                    They needed a focused ecosystem where <span className="text-primary/90">learning, building, and growth</span> happen together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {[
                        { label: "Founded", value: "2023" },
                        { label: "Community", value: "50K+" },
                        { label: "Mission", value: "Global" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center space-y-2 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
                            <span className="text-3xl font-display font-bold text-white">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
