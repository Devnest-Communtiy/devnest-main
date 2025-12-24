import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold font-display tracking-tight">Upcoming Events</h2>
                <p className="text-muted-foreground">Workshops, hackathons, and meetups.</p>
            </div>

            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="group overflow-hidden hover:border-primary/50 transition-colors">
                        <div className="flex flex-col md:flex-row">
                            {/* Date Badge */}
                            <div className="flex-none w-full md:w-32 bg-secondary/30 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/5">
                                <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">OCT</span>
                                <span className="text-3xl font-bold font-display text-primary">2{i}</span>
                            </div>

                            <div className="flex-1 p-6 flex flex-col justify-center space-y-2">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Full-Stack AI Workshop: Building Agents</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 2:00 PM EST</span>
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Remote / Zoom</span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-1">Learn how to build autonomous agents using LangChain and Next.js.</p>
                            </div>

                            <div className="p-6 flex items-center justify-center border-l border-white/5 bg-transparent">
                                <Button variant="glow" className="w-full md:w-auto">Register Now</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
