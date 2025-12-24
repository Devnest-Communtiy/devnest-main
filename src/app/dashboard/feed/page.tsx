import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon } from "lucide-react";

export default function FeedPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            {/* Composer */}
            <Card className="border-primary/20 shadow-[0_0_20px_rgba(255,122,0,0.05)]">
                <CardContent className="pt-6">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                            <Input
                                placeholder="What's on your mind?"
                                className="bg-transparent border-none text-lg placeholder:text-muted-foreground/50 focus-visible:ring-0 px-0"
                            />
                            <div className="flex justify-between items-center border-t border-white/5 pt-4">
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                        <ImageIcon className="h-5 w-5" />
                                    </Button>
                                </div>
                                <Button variant="default" size="sm" className="px-6 rounded-full">Post</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Posts */}
            {[1, 2, 3].map((post) => (
                <Card key={post} className="bg-background/40 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <CardHeader className="flex flex-row items-center space-y-0 gap-4 pb-2">
                        <Avatar>
                            <AvatarImage src={`https://avatar.vercel.sh/${post}`} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">Sarah Engineer</p>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">Frontend Developer • 2h ago</p>
                        </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <p className="text-sm leading-relaxed text-foreground/90">
                            Just shipped a new feature using Next.js 15 Server Actions! The performance improvement is insane compared to traditional API routes. 🚀 #NextJS #WebDev
                        </p>
                    </CardContent>
                    <CardFooter className="pt-2 pb-4">
                        <div className="flex w-full gap-4">
                            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10">
                                <Heart className="h-4 w-4" /> 24
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10">
                                <MessageCircle className="h-4 w-4" /> 5
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-green-500 hover:bg-green-500/10">
                                <Share2 className="h-4 w-4" /> Share
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
