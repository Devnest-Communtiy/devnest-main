import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LucideIcon, Cpu, Box, UserCheck, Globe } from 'lucide-react';

interface PillarProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const pillars: PillarProps[] = [
    {
        icon: Cpu,
        title: "AI-First Community",
        description: " leveraging advanced AI tools to accelerate learning and development cycles."
    },
    {
        icon: Box,
        title: "Build-in-Public Culture",
        description: "Sharing the journey, the code, and the lessons openly with the world."
    },
    {
        icon: UserCheck,
        title: "Mentor-Led Growth",
        description: "Direct guidance from industry experts to bridge the gap between theory and practice."
    },
    {
        icon: Globe,
        title: "Global Collaboration",
        description: "Connecting developers across time zones to build borderless technology."
    }
];

export function CorePillars() {
    return (
        <section className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What Makes DevNest Different</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We are re-imagining how developers grow.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <Card key={index} className="group border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl font-medium">{pillar.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                                    {pillar.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
