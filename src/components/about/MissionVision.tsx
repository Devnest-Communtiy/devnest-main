import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Rocket } from 'lucide-react';

export function MissionVision() {
    return (
        <section className="relative py-24 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Mission Card */}
                <Card className="group relative overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors" />

                    <CardHeader className="relative z-10 pb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                            <Target className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-2xl">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <p className="text-base text-muted-foreground/80 leading-relaxed group-hover:text-white/90 transition-colors">
                            To empower developers with the tools, knowledge, and community needed to build meaningful technology at scale.
                        </p>
                    </CardContent>
                </Card>

                {/* Vision Card */}
                <Card className="group relative overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors" />

                    <CardHeader className="relative z-10 pb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <p className="text-base text-muted-foreground/80 leading-relaxed group-hover:text-white/90 transition-colors">
                            To establish DevNest as one of the Top 20 global AI-driven developer ecosystems by 2028.
                        </p>
                    </CardContent>
                </Card>

            </div>
        </section>
    );
}
