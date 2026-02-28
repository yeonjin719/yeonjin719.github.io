import { TExperience } from '@/app/type/type';
import DownloadButton from '@/app/components/common/DownloadButton';

export default function Experience({
    exp,
}: {
    exp: TExperience;
}) {
    return (
        <article
            key={exp.id}
            className="border border-slate-200 bg-slate-50/60 px-3.5 py-3"
        >
            <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] text-slate-500 font-semibold">
                    {exp.period}
                </span>
                <span className="text-[10px] uppercase tracking-[0.08em] text-slate-600 font-semibold border border-slate-300 bg-white px-1.5 py-0.5">
                    {exp.category}
                </span>
            </div>

            <h3 className="text-[15px] font-semibold text-slate-900 leading-snug">
                {exp.title}
            </h3>
            <p className="text-[13px] text-slate-600 mt-0.5">{exp.organization}</p>
            <p className="text-[13px] text-slate-700 leading-relaxed mt-2">
                {exp.description}
            </p>

            {(exp.download || exp.link) && (
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-200">
                    {exp.download && <DownloadButton download={exp.download} />}
                    {exp.link && (
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                        >
                            자세히 보기
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}
