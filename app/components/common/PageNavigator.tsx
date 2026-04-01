'use client';

import { useEffect, useState } from 'react';

const sections = [
    { id: 'top', label: 'Intro' },
    { id: 'featured-work-section', label: 'Projects' },
    { id: 'experience', label: 'Journey' },
    { id: 'skills', label: 'Stack' },
    { id: 'github-section', label: 'GitHub' },
    { id: 'writing-section', label: 'Insights' },
];

export default function PageNavigator() {
    const [activeId, setActiveId] = useState('top');

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const visibleEntries = entries.filter(
                (entry) => entry.isIntersecting,
            );

            if (visibleEntries.length > 0) {
                // Find the entry with the highest intersection ratio
                const mostVisible = visibleEntries.reduce((prev, current) =>
                    prev.intersectionRatio > current.intersectionRatio
                        ? prev
                        : current,
                );
                setActiveId(mostVisible.target.id);
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: '-20% 0px -40% 0px',
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
        });

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        const handleTopScroll = () => {
            if (window.scrollY < 100) {
                setActiveId('top');
            }
        };
        window.addEventListener('scroll', handleTopScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleTopScroll);
        };
    }, []);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 0; // Adjust if header is sticky
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            // Set active ID immediately for better UX
            setActiveId(id);
        }
    };

    return (
        <nav
            aria-label="Page sections"
            className="fixed top-6 left-1/2 z-100 -translate-x-1/2 hidden lg:block"
        >
            <div className="flex items-center gap-1 border border-white/10 rounded-full bg-[#040610]/60 p-1.5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                {sections.map((section, index) => {
                    const isActive = activeId === section.id;
                    return (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => handleClick(e, section.id)}
                            className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2 transition-all duration-500 ${
                                isActive
                                    ? 'bg-white text-[#040610] shadow-[0_10px_20px_rgba(255,255,255,0.15)]'
                                    : 'text-[#8ea0bd] hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <span
                                className={`font-mono text-[10px] font-extrabold tracking-tighter transition-colors ${
                                    isActive
                                        ? 'text-[#040610]/60'
                                        : 'text-[#7ffbf8]/60 group-hover:text-[#7ffbf8]'
                                }`}
                            >
                                {String(index).padStart(2, '0')}
                            </span>
                            <span className="text-[12px] font-bold uppercase tracking-widest">
                                {section.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
