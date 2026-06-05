declare module '*.css';

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (
            command: 'config' | 'event' | 'js',
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
    }
}

export {};
