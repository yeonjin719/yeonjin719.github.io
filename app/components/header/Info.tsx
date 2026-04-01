'use client';

import { profile } from '@/app/data';
import { Sparkles, Command } from 'lucide-react';
import DarkVeil from '@/app/components/common/DarkVeil';

const focusCards = [
    {
        label: 'Building For',
        value: 'Real product flows',
        icon: <Sparkles size={14} className="text-(--accent)" />,
    },
    {
        label: 'Priority',
        value: 'Accessible UI systems',
        icon: <Command size={14} className="text-[#64d4ff]" />,
    },
    {
        label: 'Mode',
        value: 'Shipping with clarity',
        icon: <Sparkles size={14} className="text-[#c08cff]" />,
    },
];

export function Info() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center py-12 text-center tracking-tight text-foreground md:py-24">
            {/* Background DarkVeil */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-4xl">
                <DarkVeil
                    hueShift={35}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={1}
                    scanlineFrequency={1}
                    warpAmount={0}
                />
                {/* Radial fade to blend edges */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]"></div>
            </div>

            <div className="relative z-10 flex w-full min-w-0 flex-col items-center justify-center">
                {/* Minimalist Top Badge */}
                <div className="mb-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-(--line-strong) bg-white/5 px-4 py-1.5 text-xs font-semibold text-(--muted) backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent)"></span>
                    </span>
                    Available for New Opportunities
                </div>

                {/* Striking Big Title */}
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter cursor-default">
                    {profile.name}
                </h1>

                <h2 className="mt-4 font-sans text-xl md:text-3xl lg:text-4xl font-medium bg-linear-to-r from-foreground to-(--muted) bg-clip-text text-transparent">
                    {profile.role}
                </h2>

                {/* Slogan */}
                <p className="mt-8 max-w-2xl text-base md:text-lg text-(--muted) leading-relaxed">
                    {profile.slogan}
                </p>

                {/* 3 Key Focus Badges */}
                <div className="mt-12 flex w-full flex-wrap justify-center gap-3">
                    {focusCards.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 rounded-xl border border-(--line) bg-white/5 px-4 py-3 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
                        >
                            {item.icon}
                            <div className="flex flex-col items-start px-1 text-left">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-(--muted)">
                                    {item.label}
                                </span>
                                <span className="text-sm font-semibold text-white/90 leading-tight mt-0.5">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info;
