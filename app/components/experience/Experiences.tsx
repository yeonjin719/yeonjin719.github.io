'use client';

import Experience from '@/app/components/experience/Experience';
import { experiences } from '@/app/data';

export default function Experiences() {
    return (
        <div className="relative mt-2 md:mt-4">
            <div className="mx-auto max-w-5xl">
                {/* Sleek List Container */}
                <div className="relative flex flex-col w-full">
                    {experiences.map((exp, idx) => (
                        <Experience key={exp.id} exp={exp} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}
