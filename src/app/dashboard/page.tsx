import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap, ArrowUpRight, Plus, Activity } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold font-display tracking-tight">Dashboard</h2>
                <Button variant="default" className="shadow-lg shadow-primary/20">
                    <Plus className="mr-2 h-4 w-4" /> New Post
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,543</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-500 font-medium inline-flex items-center">
                                +15.2% <TrendingUp className="ml-1 h-3 w-3" />
                            </span>{" "}
                            from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Karma Points</CardTitle>
                        <Zap className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">2,840</div>
                        <p className="text-xs text-muted-foreground">
                            Top 5% of contributors
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Days</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">14</div>
                        <p className="text-xs text-muted-foreground">
                            Current streak
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resources Saved</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">34</div>
                        <p className="text-xs text-muted-foreground">
                            +4 since last week
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Weekly Activity Chart Mockup */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Weekly Activity</CardTitle>
                        <CardDescription>Engagement across the platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-end justify-between gap-2 pt-4 px-4 w-full">
                            {[40, 70, 45, 90, 60, 80, 50].map((height, i) => (
                                <div key={i} className="group relative flex-1 flex flex-col justify-end items-center gap-2">
                                    <div
                                        className="w-full rounded-t-sm bg-primary/20 hover:bg-primary/60 transition-all duration-300"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                    <span className="text-xs text-muted-foreground">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Suggested Actions */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Suggested Actions</CardTitle>
                        <CardDescription>
                            Recommended steps to grow your profile.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: "Complete your profile", desc: "Add your tech stack and bio" },
                                { title: "Join a Learning Circle", desc: "Connect with like-minded devs" },
                                { title: "Post your first project", desc: "Share what you're building" }
                            ].map((action, i) => (
                                <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10 hover:border-white/10">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{action.title}</p>
                                        <p className="text-xs text-muted-foreground">{action.desc}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
