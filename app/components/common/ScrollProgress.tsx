'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight <= 0) {
                setProgress(0);
                return;
            }

            setProgress(Math.min(scrollTop / scrollHeight, 1));
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-[rgba(255,255,255,0.38)] backdrop-blur"
        >
            <div
                className="h-full origin-left bg-[linear-gradient(90deg,#102030_0%,#2f63d6_55%,#81b3ff_100%)] shadow-[0_0_24px_rgba(47,99,214,0.35)] transition-transform duration-150 ease-out"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
}
