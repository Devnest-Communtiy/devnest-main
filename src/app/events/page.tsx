import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Video, Users } from "lucide-react";

const events = [
    {
        title: "DevNest Summit 2025",
        date: "Jan 15, 2025",
        time: "09:00 AM PST",
        type: "Virtual",
        category: "Conference",
        desc: "Our annual developer conference featuring keynotes from industry leaders.",
    },
    {
        title: "AI Engineering Workshop",
        date: "Jan 22, 2025",
        time: "10:00 AM PST",
        type: "Virtual",
        category: "Workshop",
        desc: "Hands-on session building RAG applications with LLMs.",
    },
    {
        title: "Web3 Hackathon",
        date: "Feb 05 - 07, 2025",
        time: "48 Hours",
        type: "Hybrid",
        category: "Hackathon",
        desc: "Build the next generation of decentralized apps. $50k in prizes.",
    },
    {
        title: "System Design AMA",
        date: "Feb 12, 2025",
        time: "01:00 PM PST",
        type: "Virtual",
        category: "AMA",
        desc: "Ask Me Anything session with Principal Engineers from FAANG.",
    },
];

export default function EventsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
            <Navbar />
            <main className="flex-1 pt-24">
                {/* Header */}
                <section className="relative px-4 pb-16 pt-10 text-center">
                    <h1 className="text-4xl font-extrabold font-display mb-6">
                        Upcoming <span className="text-primary">Events</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Connect, learn, and build with the global developer community.
                    </p>
                </section>

                {/* Events List */}
                <section className="container mx-auto px-4 pb-20 md:px-6 max-w-4xl">
                    <div className="space-y-6">
                        {events.map((event, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                                {/* Glow effect */}
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors"></div>

                                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="outline" className="text-primary border-primary/20">{event.category}</Badge>
                                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                                {event.type === "Virtual" ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                                                {event.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold font-display">{event.title}</h3>
                                        <p className="text-muted-foreground">{event.desc}</p>

                                        <div className="flex items-center gap-6 text-sm font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                {event.date}
                                            </div>
                                            <div className="text-muted-foreground">
                                                {event.time}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 md:flex-col md:gap-3 lg:flex-row">
                                        <Button variant="glow" size="lg" className="w-full md:w-auto">
                                            Register Now
                                        </Button>
                                        <Button variant="ghost" size="lg" className="w-full md:w-auto">
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 rounded-2xl border border-dashed border-white/10 bg-white/5 p-12 text-center">
                        <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-bold mb-2">Host an Event</h3>
                        <p className="text-muted-foreground mb-6">Want to organize a meetup or workshop for the community?</p>
                        <Button variant="outline">Apply to Host</Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
