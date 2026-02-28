import { GraduationCap } from 'lucide-react';
import { educations } from '@/app/data/educations';
export default function Education() {
    return (
        <div className="border border-slate-200 bg-white px-4 py-3.5">
            <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-slate-500">
                    <GraduationCap size={16} />
                </div>
                <div className="w-full">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold mb-1.5">
                        Education
                    </p>
                    <p className="text-[15px] font-semibold text-slate-900 leading-snug">
                        {educations.degree[0].name}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-slate-600">
                        <span>{educations.degree[1].name}</span>
                        {educations.degree[1].info && (
                            <span className="text-slate-500">
                                {educations.degree[1].info}
                            </span>
                        )}
                        <span>{educations.graduateDate}</span>
                        <span>{educations.graduate ? '졸업' : '졸업 예정'}</span>
                        <span>GPA {educations.gpa} / 4.5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
