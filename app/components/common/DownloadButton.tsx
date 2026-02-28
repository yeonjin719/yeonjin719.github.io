import { Download } from 'lucide-react';

export default function DownloadButton({ download }: { download: string }) {
    return (
        <a
            href={download}
            className="inline-flex items-center justify-center w-7 h-7 border border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="증명서 다운로드"
        >
            <Download size={14} />
        </a>
    );
}
