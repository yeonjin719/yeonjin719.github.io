import { educations } from '@/app/data/educations';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function Education() {
    // GPA 백분율 계산 (최대 4.5 기준)
    const gpaPercentage = (educations.gpa / 4.5) * 100;

    return (
        <div className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-4xl border border-(--line) bg-(--surface) p-7 shadow-(--shadow-soft) backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#64d4ff]/40">
            {/* Ambient Background Glow & Decorative Elements */}
            <div className="absolute -inset-10 z-0 bg-[#64d4ff]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Abstract Decorative Graphics */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_70%)] opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -right-4 -top-4 w-24 h-24 border border-[#64d4ff]/10 rounded-full group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
            <div className="absolute -right-12 -top-12 w-40 h-40 border border-[#64d4ff]/5 rounded-full group-hover:scale-150 transition-transform duration-1000 delay-75 pointer-events-none"></div>

            <div className="relative z-10 w-full flex-1">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-hover) border border-(--line-strong) text-[#64d4ff] group-hover:bg-[#64d4ff]/10 group-hover:border-[#64d4ff]/30 group-hover:shadow-[0_0_15px_rgba(100,212,255,0.2)] transition-all duration-500 relative">
                            <GraduationCap
                                size={18}
                                className="group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Orbiting dot */}
                            <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100">
                                <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-[#64d4ff] rounded-full shadow-[0_0_5px_#64d4ff]"></div>
                            </div>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#5e7592] group-hover:text-[#64d4ff] transition-colors duration-300">
                            Education
                        </p>
                    </div>
                    {/* Status Badge */}
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#64d4ff]/20 bg-[#64d4ff]/5 px-3 py-1.5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            {!educations.graduate && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64d4ff] opacity-75"></span>
                            )}
                            <span
                                className={`relative inline-flex rounded-full h-2 w-2 ${educations.graduate ? 'bg-gray-400' : 'bg-[#64d4ff]'}`}
                            ></span>
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#64d4ff] tracking-wide uppercase">
                            {educations.graduate ? 'Graduated' : 'In Progress'}
                        </span>
                    </div>
                </div>

                {/* Major List */}
                <div className="space-y-4">
                    {educations.degree.map((deg, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-3 group/item"
                        >
                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-(--surface-hover) border border-(--line-strong) text-[#8ea0bd] group-hover/item:border-[#64d4ff]/30 group-hover/item:bg-[#64d4ff]/10 group-hover/item:text-[#64d4ff] transition-all duration-300">
                                {idx === 0 ? (
                                    <BookOpen size={12} />
                                ) : (
                                    <Award size={12} />
                                )}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-[15px] sm:text-[17px] font-bold tracking-tight text-white group-hover/item:text-[#64d4ff] transition-colors duration-300">
                                    {deg.name}
                                </h3>
                                {deg.info && (
                                    <p className="mt-0.5 text-[13px] font-medium text-[#8ea0bd]">
                                        {deg.info}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section (Date & GPA Progress) */}
            <div className="relative z-10 flex flex-col gap-4 mt-8 pt-6 border-t border-(--line-strong) group-hover:border-[#64d4ff]/20 transition-colors duration-500">
                <div className="flex w-full flex-wrap items-center justify-between gap-2 text-[13px] font-semibold text-[#afbdd5]">
                    <span className="flex items-center gap-1.5 bg-white/5 border border-(--line-strong) px-2.5 py-1 rounded-lg">
                        <span className="opacity-60 text-[11px] uppercase tracking-wider">
                            졸업 예정:
                        </span>
                        <span className="text-[#64d4ff]">
                            {educations.graduateDate}
                        </span>
                    </span>
                    <span className="text-[#64d4ff] bg-[#64d4ff]/10 border border-[#64d4ff]/20 px-2.5 py-1 rounded-lg shadow-[0_2px_10px_rgba(100,212,255,0.05)]">
                        GPA {educations.gpa}{' '}
                        <span className="opacity-50 text-[#8ea0bd]">/ 4.5</span>
                    </span>
                </div>

                {/* GPA Progress Bar */}
                <div className="h-1.5 w-full bg-(--line-strong) rounded-full overflow-hidden">
                    <div
                        className="h-full bg-linear-to-r from-[#64d4ff]/40 to-[#64d4ff] rounded-full relative"
                        style={{ width: `${gpaPercentage}%` }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-linear-to-r from-transparent to-white/40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
