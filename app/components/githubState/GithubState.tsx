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
        <section className="section-shell w-full">
            <div className="px-5 py-5 md:px-6 md:py-6">
                <SectionTitle
                    icon={<Github className="text-slate-700" />}
                    title="GitHub Contributions"
                />

                <div className="panel-card flex justify-center overflow-x-auto px-3 py-3 md:px-4 md:py-4">
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
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
