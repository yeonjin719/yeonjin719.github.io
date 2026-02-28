import React from 'react';

export default function SectionTitle({
    icon,
    title,
    headingId,
}: {
    icon: React.ReactElement<{ size?: number }>;
    title: string;
    headingId?: string;
}) {
    return (
        <div className="mb-6 md:mb-7 flex items-center gap-2.5">
            <div className="flex items-center justify-center w-6 h-6 rounded-md border border-slate-300 text-slate-600 bg-white">
                {React.cloneElement(icon, { size: 14 })}
            </div>
            <h2
                id={headingId}
                className="text-[1.45rem] md:text-[1.7rem] font-semibold text-slate-900 tracking-tight leading-tight"
            >
                {title}
            </h2>
        </div>
    );
}
