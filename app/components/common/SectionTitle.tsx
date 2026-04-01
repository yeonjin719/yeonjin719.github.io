import React from 'react';

export default function SectionTitle({
    icon,
    title,
    headingId,
}: {
    icon: React.ReactElement<{ size?: number; className?: string }>;
    title: string;
    headingId?: string;
}) {
    return (
        <div className="mb-8 flex min-w-0 flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
                <div className="section-title-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 text-[#7ffbf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
                    {React.cloneElement(icon, { size: 20, className: "text-[#7ffbf8]" })}
                </div>
                <div className="min-w-0">
                    <h2
                        id={headingId}
                        className="font-display max-w-full text-[1.6rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2rem]"
                    >
                        {title}
                    </h2>
                </div>
            </div>
            <div className="hidden sm:block">
                <span className="inline-flex items-center rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ea0bd] backdrop-blur">
                    Curated Content
                </span>
            </div>
        </div>
    );
}
