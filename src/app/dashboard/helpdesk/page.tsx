"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function HelpdeskPage() {
    const [messages, setMessages] = useState([
        { role: "ai", content: "Hello! I'm your DevNest AI assistant. How can I help you debug code or design systems today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: "user", content: input }]);
        setInput("");

        // Mock AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "ai", content: "That's an interesting question about React Server Components. Let me analyze that for you..." }]);
        }, 1000);
    };

    return (
        <div className="flex h-[calc(100vh-8rem)] flex-col space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold font-display tracking-tight flex items-center gap-2">
                        AI Helpdesk <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                    </h2>
                    <p className="text-muted-foreground">Get instant answers to your technical questions.</p>
                </div>
            </div>

            <Card className="flex-1 flex flex-col overflow-hidden bg-background/50 border-white/5">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                            <Avatar className={`h-8 w-8 ${msg.role === "ai" ? "bg-primary/20 text-primary border-primary/20" : "bg-muted"}`}>
                                <AvatarFallback>{msg.role === "ai" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}</AvatarFallback>
                            </Avatar>
                            <div
                                className={`rounded-2xl p-4 max-w-[80%] text-sm leading-relaxed
                  ${msg.role === "ai"
                                        ? "bg-secondary text-secondary-foreground rounded-tl-none border border-white/5"
                                        : "bg-primary text-primary-foreground rounded-tr-none shadow-[0_0_15px_rgba(255,122,0,0.3)]"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-background/80 backdrop-blur-sm border-t border-white/5">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex gap-4"
                    >
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about Next.js, Algorithms, or System Design..."
                            className="flex-1 bg-secondary/50 focus:bg-secondary h-12"
                        />
                        <Button type="submit" size="icon" variant="default" className="h-12 w-12 shrink-0">
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                        <span className="text-xs text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">How do I optimize images?</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">Explain revalidation</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">Center a div</span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
