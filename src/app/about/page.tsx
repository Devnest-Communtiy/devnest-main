import React from 'react';
import { Hero } from '@/components/about/Hero';
import { Story } from '@/components/about/Story';
import { MissionVision } from '@/components/about/MissionVision';
import { CorePillars } from '@/components/about/CorePillars';
import { Leadership } from '@/components/about/Leadership';
import { Stats } from '@/components/about/Stats';
import { Values } from '@/components/about/Values';
import { GlobalVision } from '@/components/about/GlobalVision';
import { CTA } from '@/components/about/CTA';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Hero />
            <Story />
            <MissionVision />
            <CorePillars />
            <Leadership />
            <Stats />
            <Values />
            <GlobalVision />
            <CTA />
        </main>
    );
}
