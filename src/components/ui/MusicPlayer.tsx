"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <audio ref={audioRef} loop src="/music/ambient.mp3" />

            <button
                onClick={togglePlay}
                className={cn(
                    "relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 ease-out",
                    "backdrop-blur-xl shadow-lg hover:scale-110 active:scale-95",
                    isPlaying
                        ? "bg-orange-500/10 border-orange-500/50 text-orange-500 shadow-[0_0_20px_rgba(255,122,0,0.3)]"
                        : "bg-black/40 border-white/10 text-white/70 hover:text-white hover:bg-black/60 hover:border-white/20"
                )}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-orange-500 duration-1000" />
                )}

                <div className="relative z-10">
                    {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                    ) : (
                        <Music className="w-5 h-5" />
                    )}
                </div>
            </button>
        </div>
    );
}
