import { PanelTopOpen } from 'lucide-react';

const fallbackPalettes = [
    {
        shell: 'bg-[#dce9fb]',
        stroke: 'border-[rgba(47,99,214,0.16)]',
        text: 'text-[#16325c]',
    },
    {
        shell: 'bg-[#deedf8]',
        stroke: 'border-[rgba(53,120,193,0.14)]',
        text: 'text-[#144165]',
    },
    {
        shell: 'bg-[#e2e9f9]',
        stroke: 'border-[rgba(83,104,201,0.14)]',
        text: 'text-[#22396f]',
    },
];

function trimText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export default function PreviewFallback({
    title,
    category,
    description,
    variant = 0,
    badgeLabel = 'Preview Unavailable',
}: {
    title: string;
    category?: string;
    description?: string;
    variant?: number;
    badgeLabel?: string;
}) {
    const palette = fallbackPalettes[variant % fallbackPalettes.length];

    return (
        <div className={`absolute inset-0 overflow-hidden ${palette.shell}`}>
            <div
                className={`absolute inset-3.5 rounded-[18px] border ${palette.stroke}`}
            />
            <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between">
                <span className="rounded-full border border-white/55 bg-white/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#365b92] backdrop-blur">
                    {badgeLabel}
                </span>
                <PanelTopOpen size={14} className="text-[#426aa5]" />
            </div>

            <div className="absolute inset-x-4 bottom-9 top-12 flex flex-col justify-center">
                {category && (
                    <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${palette.text}`}
                    >
                        {trimText(category, 24)}
                    </p>
                )}
                <div
                    className={`mt-2 text-[2.45rem] font-semibold leading-none ${palette.text} sm:text-[2.8rem]`}
                >
                    {title}
                </div>

                <p
                    className={`mt-1.5 max-w-[70%] text-[12px] font-medium leading-5 ${palette.text} opacity-80`}
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        wordBreak: 'keep-all',
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
