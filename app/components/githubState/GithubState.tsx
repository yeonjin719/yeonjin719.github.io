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
        setIsMounted(true);
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleChange = (mq: MediaQueryList | MediaQueryListEvent) =>
            setIsMdOrBelow(mq.matches);
        handleChange(mediaQuery);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <section className="bg-slate-50/50 py-24 px-6 w-full relative border-b border-slate-200/60">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Github className="text-white" />}
                    title="GitHub Contributions"
                />

                <div className="flex justify-center">
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
