import React from 'react';

export default function SectionTitle({
    icon,
    title,
}: {
    icon: React.ReactElement<{ size?: number }>;
    title: string;
}) {
    return (
        <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                {React.cloneElement(icon, { size: 20 })}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {title}
            </h2>
        </div>
    );
}
