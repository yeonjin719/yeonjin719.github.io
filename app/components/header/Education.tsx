import { educations } from '@/app/data/educations';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <div className="panel-card px-4 py-4">
            <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#2f63d6]">
                    <GraduationCap size={16} />
                </div>
                <div className="w-full">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5e7592]">
                        Education
                    </p>
                    <p className="mt-1.5 text-[15px] font-semibold leading-snug text-[#102030]">
                        {educations.degree[0].name}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[#5e7592]">
                        <span>{educations.degree[1].name}</span>
                        {educations.degree[1].info && (
                            <span className="text-[#5e7592]">
                                {educations.degree[1].info}
                            </span>
                        )}
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-3 py-1 text-[11px] font-medium text-[#102030]">
                            {educations.graduateDate}
                        </span>
                        <span className="rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-3 py-1 text-[11px] font-medium text-[#102030]">
                            {educations.graduate ? '졸업' : '졸업 예정'}
                        </span>
                        <span className="rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-3 py-1 text-[11px] font-medium text-[#102030]">
                            GPA {educations.gpa} / 4.5
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
