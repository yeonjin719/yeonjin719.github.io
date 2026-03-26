import { TExperience } from '@/app/type/type';
import DownloadButton from '@/app/components/common/DownloadButton';

export default function Experience({
    exp,
    variant = 'timeline',
}: {
    exp: TExperience;
    variant?: 'timeline' | 'recognition';
}) {
    const isRecognition = variant === 'recognition';
    const categoryTone = {
        Activity:
            'border-[rgba(45,106,227,0.16)] bg-[rgba(237,244,255,0.96)] text-[#2f63d6]',
        Education:
            'border-[rgba(40,126,116,0.16)] bg-[rgba(236,250,246,0.96)] text-[#1d7869]',
        Award:
            'border-[rgba(224,169,51,0.18)] bg-[rgba(255,247,224,0.98)] text-[#9a6510]',
        Certificate:
            'border-[rgba(89,129,189,0.16)] bg-[rgba(238,246,255,0.98)] text-[#355f91]',
    }[exp.category];

    return (
        <article key={exp.id} className={isRecognition ? '' : 'relative md:pl-8'}>
            {!isRecognition && (
                <span className="absolute left-[8px] top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-[#2f63d6] shadow-[0_0_0_5px_rgba(237,245,255,1)] md:block" />
            )}
            <div
                className={
                    isRecognition
                        ? 'rounded-[22px] border border-[rgba(45,106,227,0.12)] bg-[rgba(255,255,255,0.62)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-sm'
                        : 'rounded-[22px] border border-[rgba(45,106,227,0.14)] bg-[rgba(244,249,255,0.92)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]'
                }
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <p
                            className={
                                isRecognition
                                    ? 'text-[11px] font-semibold text-[#6d84a3]'
                                    : 'text-[11px] font-semibold text-[#5e7592]'
                            }
                        >
                            {exp.period}
                        </p>
                        <h3
                            className={
                                isRecognition
                                    ? 'mt-2 text-[1.02rem] font-semibold leading-snug text-[#102030]'
                                    : 'mt-2 text-[1.02rem] font-semibold leading-snug text-[#102030]'
                            }
                        >
                            {exp.title}
                        </h3>
                    </div>
                    <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${categoryTone}`}
                    >
                        {exp.category}
                    </span>
                </div>

                <p
                    className={
                        isRecognition
                            ? 'mt-1.5 text-[13px] text-[#5e7592]'
                            : 'mt-1.5 text-[13px] text-[#5e7592]'
                    }
                >
                    {exp.organization}
                </p>
                <p
                    className={
                        isRecognition
                            ? 'mt-2.5 text-[14px] leading-6 text-[#31465f]'
                            : 'mt-2.5 text-[14px] leading-6 text-[#243445]'
                    }
                >
                    {exp.description}
                </p>

                {(exp.download || exp.link) && (
                    <div
                        className={
                            isRecognition
                                ? 'mt-3.5 flex flex-wrap items-center gap-2'
                                : 'mt-3.5 flex flex-wrap items-center gap-2 border-t border-black/10 pt-3'
                        }
                    >
                        {exp.download && <DownloadButton download={exp.download} />}
                        {exp.link && (
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    isRecognition
                                        ? 'text-[11px] font-medium text-[#355f91] underline underline-offset-4 hover:text-[#2f63d6]'
                                        : 'text-[11px] font-medium text-[#244a9f] underline underline-offset-4 hover:text-[#2f63d6]'
                                }
                            >
                                자세히 보기
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
