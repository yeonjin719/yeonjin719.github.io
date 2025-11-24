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
            <Download size={20}></Download>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/download:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                증명서 다운로드
            </span>
        </a>
    );
}
