"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";

export function Topbar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/5 bg-background/60 px-6 backdrop-blur-xl">
            <div className="flex w-full max-w-md items-center gap-2">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search communities, posts, or resources..."
                        className="pl-9 bg-secondary/50 border-transparent focus:bg-secondary focus:border-primary/50"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium leading-none">Alex Dev</p>
                        <p className="text-xs text-muted-foreground">Pro Member</p>
                    </div>
                    <Avatar className="h-9 w-9 border border-primary/20 bg-primary/10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
