import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[100dvh] text-center px-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/About_banner.png"
                    alt="DevNest Future"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Dark Overlay & Vignette */}
                {/* <div className="absolute inset-0 bg-black/60 md:bg-black/50 mix-blend-multiply" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] opacity-90" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-10 animate-fade-in pt-20">

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 leading-[1.1] drop-shadow-2xl">
                        Entering the <br />
                        Future of Technology
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                        DevNest is building a new dimension for developers —
                        where innovation, intelligence, and ambition converge.
                    </p>
                </div>

                <div className="pt-8 flex justify-center">
                    {/* Custom CTA */}
                    <Button
                        className="relative h-14 px-10 rounded-full text-lg font-medium tracking-wide bg-gradient-to-r from-[#FF7A00] to-[#FF5500] hover:brightness-110 hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(255,122,0,0.4)] hover:shadow-[0_0_50px_rgba(255,122,0,0.6)] border border-white/20"
                        style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}
                    >
                        Explore DevNest
                    </Button>
                </div>
            </div>

            {/* Subtle bottom glow to merge with next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0B0D] to-transparent z-10" />
        </section>
    );
}
