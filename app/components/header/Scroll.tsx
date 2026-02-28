import { ChevronDown } from 'lucide-react';

export default function Scroll() {
    return (
        <div className="absolute bottom-3 right-6 hidden md:flex flex-col items-end gap-1 text-slate-400">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
                Scroll
            </span>
            <ChevronDown size={16} />
        </div>
    );
}
