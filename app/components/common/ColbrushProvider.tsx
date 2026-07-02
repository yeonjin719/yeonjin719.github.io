'use client';

import { ThemeProvider, ThemeSwitcher } from 'colbrush/client';

export default function ColbrushProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ThemeSwitcher position="right-bottom" />
            {children}
        </ThemeProvider>
    );
}
