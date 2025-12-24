import Link from "next/link";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className="space-y-4 flex flex-col items-center">
                        <Link className="flex items-center gap-2 font-display font-bold text-xl" href="/">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span>DevNest</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                            The premium community for developers to build, learn, and grow together.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Legal</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/5 pt-8 flex flex-col items-center gap-4 text-sm text-muted-foreground">
                    <span>© 2025 DevNest Inc. All rights reserved.</span>
                    <span>Designed by DevNest Team</span>
                </div>
            </div>
        </footer>
    );
}
