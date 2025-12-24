import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileCode, Video, BookOpen, Download } from "lucide-react";

const resources = [
    { title: "Next.js Enterprise Boilerplate", type: "Code", icon: FileCode, size: "2.5 MB" },
    { title: "React Performance Masterclass", type: "Video", icon: Video, size: "1.2 GB" },
    { title: "System Design Cheat Sheet", type: "PDF", icon: BookOpen, size: "450 KB" },
    { title: "Tailwind CSS Component Kit", type: "Code", icon: FileCode, size: "15 MB" },
];

export default function ResourcesPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold font-display tracking-tight">Resource Library</h2>
                    <p className="text-muted-foreground">Curated assets to speed up your workflow.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search resources..." className="pl-9" />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {resources.map((res, i) => {
                    const Icon = res.icon;
                    return (
                        <Card key={i} className="flex items-center p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="h-6 w-6 text-foreground" />
                            </div>
                            <div className="ml-4 flex-1">
                                <h4 className="font-semibold group-hover:text-primary transition-colors">{res.title}</h4>
                                <p className="text-xs text-muted-foreground">{res.type} • {res.size}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-primary">
                                <Download className="h-5 w-5" />
                            </Button>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
