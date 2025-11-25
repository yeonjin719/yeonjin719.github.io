import { ChevronDown } from 'lucide-react';

export default function Scroll() {
    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-slate-400/80 cursor-pointer">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                Scroll
            </span>
            <ChevronDown size={20} />
        </div>
    );
}
