'use client';

import { useState } from 'react';
import { profile } from '@/app/data';
import SocialLinkList from '@/app/components/header/SocialLinkList';
import { Link } from 'lucide-react';
import BorderBeam from 'border-beam';

export default function Connect() {
    const [isBeamActive, setIsBeamActive] = useState(false);

    return (
        <BorderBeam
            size="md"
            colorVariant="colorful"
            duration={2}
            strength={0.7}
            active={isBeamActive}
            onMouseEnter={() => setIsBeamActive(true)}
            onMouseLeave={() => setIsBeamActive(false)}
            onFocusCapture={() => setIsBeamActive(true)}
            onBlurCapture={(event) => {
                if (
                    !event.currentTarget.contains(event.relatedTarget as Node)
                ) {
                    setIsBeamActive(false);
                }
            }}
        >
            <div className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-4xl bg-(--surface) p-7 shadow-(--shadow-soft) backdrop-blur-xl transition-all duration-500">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_70%)] opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -right-4 -top-4 w-24 h-24 border border-[#64d4ff]/10 rounded-full group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
                <div className="absolute -right-12 -top-12 w-40 h-40 border border-[#64d4ff]/5 rounded-full group-hover:scale-150 transition-transform duration-1000 delay-75 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-hover) border border-(--line-strong) text-(--accent) group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500">
                            <Link size={18} />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#5e7592] group-hover:text-(--accent) transition-colors duration-300">
                            Connect
                        </p>
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-(--accent) transition-colors duration-300">
                        Contact & Social
                    </h3>

                    <p className="mt-2 text-[15px] text-[#8ea0bd] font-medium leading-relaxed">
                        다양한 채널에서 소통하고
                        <br className="hidden sm:block" /> 인사이트를
                        기록합니다.
                    </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-(--line-strong) group-hover:border-(--accent)/20 transition-colors duration-500">
                    <SocialLinkList profile={profile} />
                </div>
            </div>
        </BorderBeam>
    );
}
