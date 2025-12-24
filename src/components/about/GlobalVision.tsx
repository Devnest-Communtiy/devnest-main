import React from 'react';

export function GlobalVision() {
    return (
        <section className="relative py-32 px-4 overflow-hidden flex flex-col items-center text-center">
            {/* Abstract Globe/Map Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 blur-[100px] rounded-full opacity-30 pointer-events-none animate-pulse-glow" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                    DevNest isn’t just about today’s developers. <br />
                    <span className="text-gradient">It’s about shaping tomorrow.</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 pt-6">
                    {["AI Innovation", "Global Events", "Open Collaboration", "Research & Learning"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 backdrop-blur-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
