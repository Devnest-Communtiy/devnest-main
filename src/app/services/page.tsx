import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ArrowRight, Code, Component, Database, Layout, Server, Smartphone } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "High-performance web applications built with Next.js, React, and modern CSS frameworks.",
        icon: Layout,
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-blue-500/5",
        border: "border-blue-500/20",
    },
    {
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
        icon: Smartphone,
        color: "text-green-500",
        gradient: "from-green-500/20 to-green-500/5",
        border: "border-green-500/20",
    },
    {
        title: "Backend Systems",
        description: "Scalable server architectures, API design, and database management for enterprise needs.",
        icon: Server,
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-purple-500/5",
        border: "border-purple-500/20",
    },
    {
        title: "UI/UX Design",
        description: "Intuitive and beautiful interfaces designed with a user-first approach and pixel-perfect attention.",
        icon: Component,
        color: "text-pink-500",
        gradient: "from-pink-500/20 to-pink-500/5",
        border: "border-pink-500/20",
    },
    {
        title: "Database Architecture",
        description: "Optimized database schemas and management ensuring data integrity and fast retrieval.",
        icon: Database,
        color: "text-orange-500",
        gradient: "from-orange-500/20 to-orange-500/5",
        border: "border-orange-500/20",
    },
    {
        title: "Custom Development",
        description: "Tailored software solutions to solve unique business challenges and specific use cases.",
        icon: Code,
        color: "text-cyan-500",
        gradient: "from-cyan-500/20 to-cyan-500/5",
        border: "border-cyan-500/20",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col selection:bg-primary/20">
            {/* Hero */}
            <section className="relative px-4 pb-16 pt-10 md:px-6 md:pt-20 text-center">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
                <div className="relative z-10 mx-auto max-w-4xl space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 animate-slide-up">
                        Our <span className="text-gradient-accent">Services</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Cutting-edge solutions for the modern digital landscape. We turn complex requirements into elegant code.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-16 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="group border-white/5 bg-white/5 hover:border-primary/30 transition-all duration-300 animate-slide-up hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5" style={{ animationDelay: `${0.1 * (index + 2)}s` }}>
                            <CardHeader className="p-8">
                                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    <service.icon className={`h-7 w-7 ${service.color}`} />
                                </div>
                                <CardTitle className="mb-2 text-xl tracking-tight">{service.title}</CardTitle>
                                <CardDescription className="text-base text-muted-foreground/80 group-hover:text-muted-foreground transition-colors leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="rounded-4xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold font-display mb-6 md:text-5xl">Ready to start your project?</h2>
                        <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
                            Let's collaborate to build something extraordinary. Our team is ready to bring your vision to life.
                        </p>
                        <Button size="lg" variant="default" className="rounded-full h-12 px-8 text-base">
                            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
