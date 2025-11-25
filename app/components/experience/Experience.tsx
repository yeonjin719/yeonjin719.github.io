import { TExperience } from '@/app/type/type';
import getExperienceStyles from '@/app/utils/getExperienceStyles';
import DownloadButton from '@/app/components/common/DownloadButton';

export default function Experience({ exp }: { exp: TExperience }) {
    const styles = getExperienceStyles(exp.category);
    return (
        <div
            key={exp.id}
            className="bg-white relative p-6 pb-12 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-xl ${styles.bg} ${styles.text}`}>
                    {styles.icon}
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                    {exp.period}
                </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                {exp.title}
            </h3>
            <p className="text-sm font-semibold text-slate-500 mb-3">
                {exp.organization}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3 mt-3">
                {exp.description}
            </p>
            <div className="flex absolute bottom-6 right-6">
                {exp.download && (
                    <DownloadButton download={exp.download}></DownloadButton>
                )}
                {exp.link && (
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-semibold text-sm hover:underline ml-4"
                    >
                        자세히 보기
                    </a>
                )}
            </div>
        </div>
    );
}
