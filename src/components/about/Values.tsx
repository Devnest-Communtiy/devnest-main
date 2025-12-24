import React from 'react';

const values = [
    { title: "Curiosity", desc: "We never stop asking 'why' and 'what if'. Learning is our engine." },
    { title: "Collaboration", desc: "We believe the best software is built together, not in silos." },
    { title: "Craftsmanship", desc: "We care about the details. Quality is not an accident." },
    { title: "Integrity", desc: "We build with purpose and honesty. Trust is our currency." },
    { title: "Impact", desc: "We build for real-world change, not just for the sake of code." }
];

export function Values() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center">Our Core Values</h2>

                <div className="grid gap-4">
                    {values.map((value, i) => (
                        <div key={i} className="group flex flex-col md:flex-row items-start md:items-center p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
                            <div className="w-32 shrink-0">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{value.title}</h3>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-white/10 mx-6 group-hover:bg-primary/50 transition-colors" />
                            <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
