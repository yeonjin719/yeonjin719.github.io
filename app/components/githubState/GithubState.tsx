import { calendarTheme } from '@/app/constants/calendarTheme';
import selectLastHalfYear from '@/app/utils/selectLastHalfYear';
import { GitHubCalendar } from 'react-github-calendar';
import SectionTitle from '../common/SectionTitle';
import { Github } from 'lucide-react';

export default function GithubState({
    isMounted,
    isMdOrBelow,
}: {
    isMounted: boolean;
    isMdOrBelow: boolean;
}) {
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
