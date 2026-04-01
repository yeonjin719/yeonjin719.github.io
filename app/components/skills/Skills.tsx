'use client';

import { useMemo } from 'react';
import { Code2, Layers, Cpu, Wrench, Globe } from 'lucide-react';
import RevealOnScroll from '@/app/components/common/RevealOnScroll';

const categoryIcons: { [key: string]: React.ReactNode } = {
    Languages: <Code2 size={24} />,
    Frameworks: <Layers size={24} />,
    Styling: <Globe size={24} />,
    StateManagement: <Cpu size={24} />,
    Tools: <Wrench size={24} />,
};

export default function Skills({
    skills,
}: {
    skills: { [category: string]: string[] };
}) {
    const skillEntries = useMemo(() => Object.entries(skills), [skills]);

    return (
        <div className="relative mt-2 md:mt-4">
            <div className="mx-auto max-w-5xl">
                {/* Sleek Row Container */}
                <div className="relative flex flex-col w-full">
                    {skillEntries.map(([category, items], index) => {
                        return (
                            <RevealOnScroll key={category}>
                                <article
                                    className={`group relative flex flex-col md:flex-row items-start md:items-center py-6 md:py-8 border-b border-(--line) transition-all duration-300 hover:bg-(--surface-hover) sm:-mx-6 sm:px-6 rounded-2xl w-full ${index === 0 ? 'pt-2 md:pt-4' : ''}`}
                                >
                                    {/* Left side: Category Icon & Title */}
                                    <div className="w-full md:w-80 lg:w-80 shrink-0 flex items-center md:items-start gap-4 mb-4 md:mb-0">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--surface) border border-(--line-strong) text-[#8ea0bd] group-hover:text-(--accent) group-hover:border-(--accent)/30 group-hover:bg-(--accent)/5 transition-all duration-300">
                                            {categoryIcons[category] || (
                                                <Code2 size={24} />
                                            )}
                                        </div>
                                        <div className="flex items-center h-12">
                                            <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-(--accent) transition-colors break-keep">
                                                {category === 'StateManagement'
                                                    ? 'State Management'
                                                    : category}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Right side: Skils Tags */}
                                    <div className="flex flex-wrap gap-2.5 flex-1 w-full md:pl-8 lg:pl-12 border-l-0 md:border-l border-(--line)">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[14px] font-medium text-[#afbdd5] transition-all duration-300 group-hover:border-(--accent)/20 group-hover:bg-(--accent)/10 group-hover:text-white hover:border-(--accent)/50! hover:bg-(--accent)/20! hover:text-(--accent)!"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
