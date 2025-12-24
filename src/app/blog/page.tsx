import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
    {
        title: "The Future of Server Components",
        excerpt: "Exploring how React Server Components are reshaping the way we build full-stack web applications in 2025.",
        author: "Alex Rivers",
        date: "Dec 18, 2024",
        readTime: "5 min read",
        category: "Engineering",
        image: "bg-gradient-to-br from-blue-900 to-slate-900",
    },
    {
        title: "Mastering Design Systems",
        excerpt: "A comprehensive guide to building scalable, maintainable design systems using modern tools and tokens.",
        author: "Sarah Chen",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        category: "Design",
        image: "bg-gradient-to-br from-purple-900 to-slate-900",
    },
    {
        title: "Scaling with Microservices",
        excerpt: "Lessons learned from decomposing a monolithic Node.js application into distributed services.",
        author: "Mike Ross",
        date: "Dec 10, 2024",
        readTime: "12 min read",
        category: "DevOps",
        image: "bg-gradient-to-br from-green-900 to-slate-900",
    },
    {
        title: "AI usage in Frontend Dev",
        excerpt: "How AI tools are augmenting the frontend workflow rather than replacing it.",
        author: "Jessica Li",
        date: "Dec 05, 2024",
        readTime: "6 min read",
        category: "AI",
        image: "bg-gradient-to-br from-orange-900 to-slate-900",
    },
    {
        title: "Optimizing Web Vitals",
        excerpt: "Advanced techniques involved in getting that perfect 100 score on Lighthouse.",
        author: "David Kim",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Performance",
        image: "bg-gradient-to-br from-pink-900 to-slate-900",
    },
    {
        title: "The State of Web3",
        excerpt: "What is actually happening in the decentralized web space beyond the hype cycle.",
        author: "Elena Vo",
        date: "Nov 20, 2024",
        readTime: "10 min read",
        category: "Web3",
        image: "bg-gradient-to-br from-cyan-900 to-slate-900",
    },
];

export default function BlogPage() {
    return (
        <div className="flex flex-col selection:bg-primary/20">
            <main className="flex-1 pt-24">
                {/* Header */}
                <section className="container mx-auto px-4 pb-12 pt-10 md:px-6 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold font-display mb-4">The <span className="text-primary">DevNest</span> Blog</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                        Insights, tutorials, and stories from the team and community.
                    </p>
                </section>

                {/* Featured Post */}
                <section className="container mx-auto px-4 mb-16 md:px-6">
                    <Link href="#" className="group relative block overflow-hidden rounded-4xl border border-white/10 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_-10px_rgba(255,122,0,0.15)]">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="h-64 md:h-full bg-gradient-to-br from-primary/10 via-background to-background flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                                <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse-glow"></div>
                            </div>
                            <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
                                <Badge variant="outline" className="w-fit text-primary border-primary/20 px-4 py-1.5 backdrop-blur-sm bg-primary/5">Featured</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold font-display group-hover:text-primary transition-colors leading-tight">
                                    The Evolution of Modern Web Architecture
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Take a deep dive into the architectural patterns that are defining the next decade of web development, from edge computing to island architecture.
                                </p>
                                <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5"><User className="h-4 w-4" /> Team DevNest</span>
                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5"><Clock className="h-4 w-4" /> 15 min read</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>

                {/* Grid */}
                <section className="container mx-auto px-4 pb-20 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, idx) => (
                            <Link key={idx} href="#" className="group flex flex-col rounded-3xl border border-white/5 bg-card/40 overflow-hidden hover:border-primary/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className={`h-56 w-full ${post.image} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="flex-1 p-8 space-y-4">
                                    <Badge variant="secondary" className="text-xs bg-white/10 hover:bg-white/20 text-white border-none">{post.category}</Badge>
                                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="p-8 pt-0 mt-auto flex items-center justify-between text-xs font-medium text-muted-foreground/70">
                                    <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> {post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 border-white/10 hover:bg-white/5 hover:text-white">Load More Articles</Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
