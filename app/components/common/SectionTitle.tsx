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
        <div className="mb-4 flex min-w-0 flex-wrap items-center gap-3">
            <div className="flex min-w-0 items-center gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#2f63d6] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    {React.cloneElement(icon, { size: 17 })}
                </div>
                <div className="min-w-0">
                    <h2
                        id={headingId}
                        className="max-w-full text-[1.28rem] font-semibold leading-tight tracking-[-0.04em] text-[#102030] md:text-[1.45rem]"
                    >
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
}
