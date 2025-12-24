import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Server, Cpu, Globe } from "lucide-react";

const circles = [
    { title: "React Trends", members: 120, icon: Code, desc: "Discussing RSC, Suspense, and the future of React." },
    { title: "System Design", members: 85, icon: Server, desc: "High-scale architecture discussions and whiteboarding." },
    { title: "AI Engineering", members: 240, icon: Cpu, desc: "LLMs, RAG pipelines, and vector databases." },
    { title: "Web3 Devs", members: 60, icon: Globe, desc: "Smart contracts, Solidity, and dApp development." },
];

export default function CirclesPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold font-display tracking-tight">Learning Circles</h2>
                <p className="text-muted-foreground">Join focused groups to accelerate your learning.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {circles.map((circle, i) => {
                    const Icon = circle.icon;
                    return (
                        <Card key={i} className="group hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <Badge variant="secondary" className="bg-background/50">{circle.members} Members</Badge>
                                </div>
                                <CardTitle className="mt-4">{circle.title}</CardTitle>
                                <CardDescription className="line-clamp-2 mt-2 h-10">
                                    {circle.desc}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full" variant="outline">Join Circle</Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
