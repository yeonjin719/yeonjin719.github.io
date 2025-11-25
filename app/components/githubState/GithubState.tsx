import { calendarTheme } from '@/app/constants/calendarTheme';
import selectLastHalfYear from '@/app/utils/selectLastHalfYear';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubState({
    isMounted,
    isMdOrBelow,
}: {
    isMounted: boolean;
    isMdOrBelow: boolean;
}) {
    return (
        <div className="w-full flex justify-center px-10">
            {isMounted && (
                <GitHubCalendar
                    username={'yeonjin719'}
                    labels={{
                        totalCount: 'Learn how we count contributions',
                    }}
                    colorScheme="light"
                    theme={calendarTheme}
                    showWeekdayLabels
                    transformData={isMdOrBelow ? selectLastHalfYear : undefined}
                ></GitHubCalendar>
            )}
        </div>
    );
}
