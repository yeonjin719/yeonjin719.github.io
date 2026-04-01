'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react';

export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative group my-6">
            {lang && (
                <div className="absolute top-0 left-4 -translate-y-1/2 flex h-6 items-center px-2 bg-(--surface-strong) border border-(--line) rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider text-[#8ea0bd]">
                    {lang}
                </div>
            )}
            <button
                onClick={copyToClipboard}
                className="
                    absolute top-3 right-3 z-10
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                    bg-(--surface-strong) backdrop-blur px-2 py-1.5 rounded-md
                    border border-(--line) shadow-sm
                    text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5
                    text-[#8ea0bd] hover:text-(--accent) hover:border-(--accent)/50
                "
            >
                <Copy size={13} />
                {copied ? 'COPIED' : 'COPY'}
            </button>

            <pre className="overflow-x-auto p-5 pt-8 rounded-xl bg-[#0a0f18] border border-(--line) text-[#afbdd5] font-mono text-[13px] leading-relaxed shadow-lg">
                <code lang={lang}>{code}</code>
            </pre>
        </div>
    );
}
