import React from 'react';
import { Quote } from 'lucide-react';

export function Leadership() {
    return (
        <section className="relative py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="space-y-12 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Built by Builders, for Builders</h2>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                    {/* Image Placeholder */}
                    <div className="shrink-0 relative">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-neutral-800 to-black border-4 border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                            <span className="text-4xl font-display font-bold text-white/20">RP</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/10">
                            FOUNDER
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
                        <Quote className="w-12 h-12 text-primary/40 mx-auto md:mx-0" />
                        <blockquote className="text-lg md:text-2xl font-light text-white leading-relaxed">
                            “We are not just creating a platform. We are building an ecosystem that connects ambition with opportunity.”
                        </blockquote>

                        <div className="pt-4">
                            <h4 className="text-2xl font-bold text-white font-display">Rimanshu Patel</h4>
                            <p className="text-primary text-sm font-medium tracking-wide uppercase mt-1">Founder, DevNest</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
