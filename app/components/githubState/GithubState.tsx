'use client';

import { useEffect, useState } from 'react';
import { calendarTheme } from '@/app/constants/calendarTheme';
import selectLastHalfYear from '@/app/utils/selectLastHalfYear';
import { GitHubCalendar } from 'react-github-calendar';
import SectionTitle from '../common/SectionTitle';
import { Github } from 'lucide-react';

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
        <section className="py-14 md:py-16 px-6 w-full relative border-b border-slate-200">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Github className="text-slate-700" />}
                    title="GitHub Contributions"
                />

                <div className="border border-slate-200 bg-white p-3 md:p-5 overflow-x-auto">
                    {isMounted && (
                        <GitHubCalendar
                            username={'yeonjin719'}
                            labels={{
                                totalCount: 'Learn how we count contributions',
                            }}
                            colorScheme="light"
                            theme={calendarTheme}
                            showWeekdayLabels
                            transformData={
                                isMdOrBelow ? selectLastHalfYear : undefined
                            }
                        ></GitHubCalendar>
                    )}
                </div>
            </div>
        </section>
    );
}
