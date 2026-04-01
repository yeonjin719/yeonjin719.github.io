'use client';

import { useEffect, useState } from 'react';
import { calendarTheme } from '@/app/constants/calendarTheme';
import selectLastHalfYear from '@/app/utils/selectLastHalfYear';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, Activity, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '@/app/components/common/RevealOnScroll';

export default function GithubState() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMdOrBelow, setIsMdOrBelow] = useState(false);

    useEffect(() => {
        const rafId = window.requestAnimationFrame(() => setIsMounted(true));
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleChange = (mq: MediaQueryList | MediaQueryListEvent) =>
            setIsMdOrBelow(mq.matches);
        handleChange(mediaQuery);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            window.cancelAnimationFrame(rafId);
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <section id="github" className="relative mt-2 md:mt-4">
            <div className="mx-auto max-w-5xl">
                <RevealOnScroll>
                    <div className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-(--line) bg-(--surface) p-6 md:p-10 shadow-2xl transition-all duration-500 hover:border-(--accent)/30 hover:bg-(--surface-hover)">
                        {/* Ambient Glow */}
                        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent)/5 blur-[100px] pointer-events-none transition-opacity duration-1000 group-hover:bg-(--accent)/10" />

                        {/* Top Header */}
                        <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/20 border border-(--line-strong) text-[#8ea0bd] group-hover:text-(--accent) group-hover:border-(--accent)/30 group-hover:bg-(--accent)/5 transition-all duration-300">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-(--accent) transition-colors">
                                        GitHub Contributions
                                    </h3>
                                    <p className="text-sm font-medium text-[#8ea0bd] mt-1">
                                        오픈소스 활동 및 꾸준한 커밋 기록
                                    </p>
                                </div>
                            </div>
                            <a
                                href="https://github.com/yeonjin719"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-(--line) bg-white/5 px-4 py-2 text-sm font-semibold text-[#afbdd5] transition-all duration-300 hover:bg-(--accent)/10 hover:text-(--accent) hover:border-(--accent)/30"
                            >
                                <Github size={16} />
                                <span>@yeonjin719</span>
                                <ArrowUpRight
                                    size={14}
                                    className="opacity-70"
                                />
                            </a>
                        </div>

                        {/* Calendar Container */}
                        <div className="relative z-10 w-full overflow-hidden pb-2">
                            <div className="flex justify-center">
                                {isMounted ? (
                                    <GitHubCalendar
                                        username={'yeonjin719'}
                                        labels={{
                                            totalCount:
                                                '{{count}} contributions in the last half year',
                                        }}
                                        colorScheme="dark"
                                        theme={calendarTheme}
                                        blockSize={isMdOrBelow ? 8 : 11}
                                        blockMargin={isMdOrBelow ? 3 : 4}
                                        fontSize={isMdOrBelow ? 10 : 14}
                                        showWeekdayLabels={!isMdOrBelow}
                                        transformData={
                                            isMdOrBelow
                                                ? selectLastHalfYear
                                                : undefined
                                        }
                                        style={{
                                            color: '#8ea0bd', // matches our sub-text color
                                            fontWeight: 500,
                                        }}
                                    />
                                ) : (
                                    <div className="h-[150px] w-full max-w-[800px] animate-pulse rounded-xl bg-(--line) opacity-20" />
                                )}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
