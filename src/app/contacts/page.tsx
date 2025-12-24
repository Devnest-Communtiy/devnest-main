import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export default function ContactsPage() {
    return (
        <div className="flex flex-col selection:bg-primary/20">
            <main className="flex-1 pt-24">
                <section className="container mx-auto px-4 py-12 md:px-6">
                    <div className="grid gap-16 lg:grid-cols-2">

                        {/* Contact Info */}
                        <div className="space-y-10 animate-slide-up">
                            <div>
                                <h1 className="text-5xl font-extrabold font-display mb-6 leading-tight">
                                    Get in <span className="text-gradient-accent">Touch</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Have a question, suggestion, or just want to say hi? <br />We'd love to hear from you.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                <Card className="glass-card border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                            <p className="text-muted-foreground mb-2 text-sm">Our team is here to help.</p>
                                            <a href="mailto:hello@devnest.io" className="text-primary hover:underline font-medium">hello@devnest.io</a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="glass-card border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-blue-500/10">
                                            <MessageSquare className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Community Support</h3>
                                            <p className="text-muted-foreground mb-2 text-sm">Join our Discord for instant help.</p>
                                            <a href="#" className="text-blue-500 hover:underline font-medium">Join Discord Server</a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="pt-4">
                                <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-muted-foreground">Follow Us</h3>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all">
                                        <Twitter className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all">
                                        <Github className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-3xl border border-white/5 bg-card/40 p-8 md:p-10 backdrop-blur-md animate-slide-up shadow-2xl relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

                            <form className="space-y-6 relative z-10">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-1">First Name</label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-1">Last Name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-1">Email</label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-1">Message</label>
                                    <Textarea placeholder="Tell us about yourself..." className="min-h-[150px]" />
                                </div>

                                <Button type="submit" size="lg" variant="default" className="w-full h-12 text-base font-semibold group">
                                    Send Message <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </form>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}
