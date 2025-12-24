"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { SimpleAccordion } from "@/components/ui/accordion";
import {
  MessageSquare,
  Bot,
  Users,
  Calendar,
  ArrowRight,
  Shield,
  Rocket,
  Terminal,
  Layers,
  Zap,
  Globe,
  Code,
  Lock,
  Cpu,
  Sparkles,
  Layout,
  ExternalLink
} from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    title: "What is DevNest?",
    content:
      "DevNest is a premium community platform designed for high-performance developers. It combines AI-powered tools, collaborative learning circles, and exclusive events to help you build better software and accelerate your career.",
  },
  {
    title: "Who is this platform for?",
    content:
      "We cater to ambitious software engineers, system architects, and technical founders who are looking to go beyond the basics. Whether you're a senior engineer or a rising star, you'll find your tribe here.",
  },
  {
    title: "Is the platform secure?",
    content:
      "Security is our top priority. We use enterprise-grade encryption for all data and communications. Your intellectual property and code snippets are safe with us.",
  },
  {
    title: "How do I get started?",
    content:
      "Simply click 'Get Started' to create your account. You can join for free to explore the community, or upgrade to Pro for access to AI tools and exclusive events.",
  },
];

const whyChoose = [
  {
    title: "Extreme Performance",
    desc: "Built on edge networks for <50ms latency globally.",
    icon: Rocket,
    color: "text-blue-500",
  },
  {
    title: "Developer First",
    desc: "API-first design with comprehensive CLI & SDK support.",
    icon: Terminal,
    color: "text-green-500",
  },
  {
    title: "Enterprise Security",
    desc: "SOC2 Type II compliant with end-to-end encryption.",
    icon: Shield,
    color: "text-purple-500",
  },
  {
    title: "Modern Tooling",
    desc: "Integrated with GitHub, GitLab, and your favorite IDEs.",
    icon: Layers,
    color: "text-orange-500",
  },
];

const trustedCompanies = [
  "ACME Corp",
  "Vercel",
  "Linear",
  "Stripe",
  "Raycast",
  "OpenAI",
  "Shopify",
  "Discord",
  "Figma",
  "Notion",
  "Prisma",
  "Supabase",
];

export default function LandingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 md:px-6 pt-24">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] opacity-20 animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          {/* Prompt 1: Enterprise Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md animate-fade-in hover:bg-white/10 transition-colors cursor-default shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            Now powering modern developer teams
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 pb-2 animate-slide-up drop-shadow-2xl">
            Where Developers <br />
            <span className="text-gradient-accent">Build, Learn & Grow</span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            The premium community platform where code meets culture. Join
            thousands of elite developers, access AI-powered tools, and level
            up your career.
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              variant="default"
              className="h-14 px-8 text-lg rounded-full font-semibold"
            >
              Join the Community <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="h-14 px-8 text-lg rounded-full"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* 1. About DevNest Section - Refined */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium font-display tracking-tight md:text-3xl lg:text-4xl">
                More than a community.<br />
                <span className="text-white">An ecosystem.</span>
              </h2>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-3xl font-semibold text-white font-display">50K+</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Developers</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-semibold text-white font-display">1K+</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-semibold text-white font-display">AI</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Powered Learning</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-semibold text-white font-display">Global</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Community</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <blockquote className="border-l-2 border-white/20 pl-4 text-base italic text-zinc-400">
                  "DevNest accelerated my career faster than any bootcamp. The network here is elite."
                </blockquote>
                <p className="text-xs text-muted-foreground font-semibold">
                  Backed by mentors from top tech companies
                </p>
              </div>

              <Button className="h-10 w-full sm:w-auto rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-6 text-sm transition-all duration-300" variant="outline">
                View More About DevNest
              </Button>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl bg-black/20 border border-white/5 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl z-20">
                  <Zap className="h-6 w-6 text-white fill-current" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AI at the Core Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Future Ready
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
            Powered by AI. <span className="text-muted-foreground">Built for Humans.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Helpdesk", icon: Bot, badge: "Live" },
            { title: "Smart Recommendations", icon: Sparkles, badge: "Beta" },
            { title: "Learning Paths", icon: Cpu, badge: "Upcoming" },
            { title: "Productivity Tools", icon: Terminal, badge: "Pro" }
          ].map((feature, i) => (
            <Card key={i} className="group relative border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-white/10 rounded-full px-2 py-0.5">
                    {feature.badge}
                  </span>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>Advanced algorithms to accelerate your development workflow.</CardDescription>
              </CardHeader>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Collaborations Section */}
      <section className="border-y border-white/5 bg-black/50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-12">
            Collaborating with Forward-Thinking Organizations
          </p>

          {/* Infinite scrolling wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-20 opacity-60">
              {["Google", "Microsoft", "Amazon", "OpenAI", "Vercel"].map((partner, idx) => (
                <div
                  key={idx}
                  className="text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors duration-300 font-display flex items-center gap-2 cursor-pointer group"
                >
                  <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                  {partner}
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {["Google", "Microsoft", "Amazon", "OpenAI", "Vercel"].map((partner, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors duration-300 font-display flex items-center gap-2 cursor-pointer group"
                >
                  <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`}</style>


      {/* 4. Global Vision Section - Refined Typography */}
      <section
        className="relative w-full py-40 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/Home_banner_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Slight dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-white font-display leading-tight">
            Shaping the Future with <span className="text-primary">Technology</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-medium">
            DevNest is where builders, thinkers, and innovators come together to create impact across the globe.
          </p>
        </div>
      </section>



      {/* 6. Team Section */}
      <section className="container mx-auto px-4 py-20 border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium font-display mb-2 text-white">Meet the Visionaries</h2>
          <p className="text-sm text-muted-foreground">The minds behind the ecosystem.</p>
        </div>

        {/* Founder Vision Card - LARGE */}
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 mb-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/5  ">
            <Image
              src="/images/founder_rimanshu_patel.png"
              alt="Rimanshu Patel"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-medium font-display text-white">DevNest - We Shaping Future</h3>
              <div className="h-0.5 w-12 bg-white/20 rounded-full" />
            </div>
            <blockquote className="text-lg md:text-xl font-light leading-relaxed text-zinc-300 font-display">
              "We are not just building software; we are building a legion. DevNest is designed to connect the brightest minds to foster innovation. Our goal is to position DevNest as a top 20 leader in the global AI market by 2028."
            </blockquote>
            <div>
              <div className="text-base font-bold text-white">Rimanshu Patel</div>
              <div className="text-sm text-zinc-500 font-medium">Founder of DevNest</div>
            </div>
          </div>
        </div>

        {/* Sub-Team - BANNER LAYOUT (Row of Cards acting as a banner block) */}
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-4">
          <TeamBannerCard
            name="Soham"
            role="Founder & CEO"
            image="/images/team_soham.png"
            desc="Visionary architecting the ecosystem."
          />
          <TeamBannerCard
            name="Daniel"
            role="CFO & Design"
            image="/images/team_daniel.png"
            desc="Crafting visual identity."
          />
          <TeamBannerCard
            name="Mayukh"
            role="Tech Lead & Security"
            image="/images/team_mayukh.png"
            desc="Security architecture."
          />
        </div>
      </section>

      {/* 7. Final Banner Section - BANNER TYPE CARD */}
      <section className="container mx-auto px-4 pb-24 pt-12">
        <div className="relative mx-auto max-w-7xl h-[420px] rounded-3xl border border-white/5 bg-zinc-900 overflow-hidden flex items-center justify-center text-center p-8 group">
          {/* Energetic Background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium font-display text-white">
              Your Developer Journey Starts Here.
            </h2>
            <p className="text-base text-zinc-400 max-w-lg mx-auto">
              Join the ecosystem that powers the next generation of software innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                Join DevNest
              </Button>
              <Button size="lg" variant="ghost" className="h-12 px-8 text-base rounded-full text-zinc-300 hover:text-white hover:bg-white/5">
                Apply as Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Revised TeamCard to be "Banner Type" compatible (Wider, or just cleaner)
function TeamBannerCard({ name, role, desc, image }: { name: string, role: string, desc: string, image: string }) {
  return (
    <div className="group relative h-[320px] rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
        <h4 className="text-xl font-medium font-display text-white">{name}</h4>
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">{role}</div>
        <p className="text-sm text-zinc-500 line-clamp-2 pt-2 group-hover:text-white/80 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}

