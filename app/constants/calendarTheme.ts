import type { Props as GitHubCalendarProps } from 'react-github-calendar';

type CalendarTheme = NonNullable<GitHubCalendarProps['theme']>;

export const calendarTheme: CalendarTheme = {
    light: ['#eef4fb', '#dbe7f7', '#bdd1f0', '#7aa3e7', '#2f63d6'],
    dark: ['#1e2330', '#004f5e', '#008599', '#00b8ce', '#00e5ff'],
};
