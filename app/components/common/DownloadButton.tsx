import { Download } from 'lucide-react';

export default function DownloadButton({ download }: { download: string }) {
    return (
        <a
            href={download}
            className="relative inline-flex items-center justify-center group/download"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="증명서 다운로드"
        >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[var(--brand-navy)] backdrop-blur group-hover/download:-translate-y-0.5 group-hover/download:border-[var(--brand-blue)] group-hover/download:text-[var(--brand-blue)]">
                <Download size={16} />
            </span>
            <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--brand-navy)] px-2.5 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover/download:opacity-100">
                증명서 다운로드
            </span>
        </a>
    );
}
