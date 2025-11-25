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
        <div className="relative group">
            <button
                onClick={copyToClipboard}
                className="
                    absolute top-2 right-2 z-10
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                    bg-gray-800/80 backdrop-blur px-2 py-1 rounded
                    border border-slate-300 shadow-sm
                    text-xs flex items-center gap-1
                "
            >
                <Copy size={14} />
                {copied ? 'Copied!' : 'Copy'}
            </button>

            <pre className="overflow-x-auto p-4 rounded-md bg-slate-900 text-slate-100 text-sm">
                <code lang={lang}>{code}</code>
            </pre>
        </div>
    );
}
