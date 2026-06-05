import { TExperience } from '@/app/type/type';
import DownloadButton from '@/app/components/common/DownloadButton';
import RevealOnScroll from '@/app/components/common/RevealOnScroll';
import { ExternalLink } from 'lucide-react';

export default function Experience({
    exp,
    index,
}: {
    exp: TExperience;
    index: number;
}) {
    return (
        <RevealOnScroll>
            {/* Sleek Row Design */}
            <article
                className={`group relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 pb-8 border-b border-(--line) transition-all duration-300 hover:bg-(--surface-hover) lg:-mx-6 lg:px-6 rounded-2xl w-full ${index === 0 ? 'pt-2 lg:pt-4' : 'pt-8'}`}
            >
                {/* Left side: Period & Category Badge */}
                <div className="w-full lg:w-36 shrink-0 flex flex-row lg:flex-col items-center lg:items-start self-start justify-between lg:justify-start gap-3 mt-1 lg:mt-0">
                    <span className="font-mono text-sm font-semibold tracking-wider text-[#8ea0bd]/80 group-hover:text-white transition-colors">
                        {exp.period}
                    </span>
                    <span className="rounded-sm border border-(--accent)/10 bg-(--accent)/5 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-(--accent) shadow-sm">
                        {exp.category}
                    </span>
                </div>

                {/* Right side: Core Content */}
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                        <h3 className="font-display text-lg lg:text-xl font-bold leading-tight text-white group-hover:text-(--accent) transition-colors">
                            {exp.title}
                        </h3>
                        <div className="hidden lg:block h-3 w-px bg-white/10" />
                        <span className="text-sm font-medium text-[#8ea0bd]">
                            {exp.organization}
                        </span>
                    </div>

                    <p className="mt-2 text-[14px] leading-relaxed text-[#afbdd5] break-keep font-medium opacity-90 w-full sm:w-[90%]">
                        {exp.description}
                    </p>
                </div>
                {(exp.download || exp.link) && (
                    <div className="flex items-center gap-3 mt-3">
                        {exp.link && (
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8ea0bd] hover:text-(--accent) transition-colors"
                            >
                                <ExternalLink size={14} />
                                <span>Link</span>
                            </a>
                        )}
                        {exp.download && (
                            <div className="scale-90 origin-left">
                                <DownloadButton download={exp.download} />
                            </div>
                        )}
                    </div>
                )}
            </article>
        </RevealOnScroll>
    );
}
