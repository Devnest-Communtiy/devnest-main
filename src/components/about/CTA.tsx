import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="relative py-24 px-4 overflow-hidden flex flex-col items-center justify-center border-t border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                    Be Part of What’s Next.
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                    Join thousands of developers building the future. Whether you're a mentor or a learner, there is a place for you here.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto">
                        Join DevNest <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto hover:bg-white/5">
                        Apply as Mentor
                    </Button>
                </div>
            </div>
        </section>
    );
}
