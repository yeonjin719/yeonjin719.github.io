import { GraduationCap } from 'lucide-react';
import { educations } from '@/app/data/educations';
export default function Education() {
    return (
        <div className="flex sm:self-start self-center w-fit mt-10 pt-8 border-t rounded-lg border-slate-200/80 bg-white/30 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-5 group sm:justify-start justify-center">
                <div className="p-3.5 bg-white border border-indigo-100 rounded-2xl text-indigo-600 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:border-indigo-200 transition-all duration-300 shrink-0">
                    <GraduationCap size={26} />
                </div>
                <div className="space-y-1">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Education
                    </h3>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex gap-4 items-center justify-between">
                            <p className="text-slate-900 font-bold text-lg leading-tight tracking-tight">
                                {educations.degree[0].name}
                            </p>
                            <p className="text-sm">
                                {educations.graduateDate}{' '}
                                {educations.graduate ? '졸업' : '졸업 예정'}
                            </p>
                        </div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-slate-700 font-medium">
                                {educations.degree[1].name}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100/50">
                                {educations.degree[1].info}
                            </span>
                            {/* 학점 정보 추가 */}
                            <div className="flex items-center flex-nowrap">
                                <span className="h-1 w-1 rounded-full bg-slate-300 mx-1"></span>
                                <span className="text-slate-700 text-sm font-medium">
                                    GPA {educations.gpa} / 4.5
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
