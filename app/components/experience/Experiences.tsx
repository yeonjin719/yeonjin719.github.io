import { Award, Briefcase, Sparkles } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';
import Experience from '@/app/components/experience/Experience';
import { experiences } from '@/app/data';

export default function Experiences() {
    const experienceItems = experiences.filter((exp) =>
        ['Activity', 'Education'].includes(exp.category)
    );
    const awardItems = experiences.filter((exp) =>
        ['Award', 'Certificate'].includes(exp.category)
    );
    const activityCount = experienceItems.filter(
        (exp) => exp.category === 'Activity'
    ).length;
    const educationCount = experienceItems.filter(
        (exp) => exp.category === 'Education'
    ).length;
    const awardCount = awardItems.filter((exp) => exp.category === 'Award').length;
    const certificateCount = awardItems.filter(
        (exp) => exp.category === 'Certificate'
    ).length;
    const years = experiences.flatMap((exp) =>
        Array.from(exp.period.matchAll(/\d{4}/g)).map(([year]) => Number(year))
    );
    const spanLabel =
        years.length > 0
            ? `${Math.min(...years)} - ${Math.max(...years)}`
            : 'Archive';

    return (
        <section className="section-shell">
            <div className="px-5 py-5 md:px-6 md:py-6">
                <SectionTitle
                    icon={<Briefcase className="text-slate-700" />}
                    title="Experience & Awards"
                />

                <div className="grid gap-3 xl:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] xl:items-start">
                    <section className="relative overflow-hidden rounded-[26px] border border-[rgba(45,106,227,0.16)] bg-[rgba(244,249,255,0.98)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] md:px-5">
                        <div className="relative">
                            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[rgba(45,106,227,0.12)] pb-4">
                                <div className="max-w-[36rem]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5e7592]">
                                        Field Journey
                                    </p>
                                    <h3 className="mt-1 text-[1.22rem] font-semibold tracking-[-0.03em] text-[#102030] md:text-[1.35rem]">
                                        Experience Timeline
                                    </h3>
                                    <p className="mt-2 text-[13px] leading-6 text-[#516780]">
                                        제품 개발, 운영 리딩, 교육 경험이 시간순으로
                                        이어지도록 묶었습니다.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="rounded-[18px] border border-[rgba(45,106,227,0.14)] bg-white/75 px-3.5 py-2.5">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f86a4]">
                                            Span
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[#102030]">
                                            {spanLabel}
                                        </p>
                                    </div>
                                    <div className="rounded-[18px] border border-[rgba(45,106,227,0.14)] bg-white/75 px-3.5 py-2.5">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f86a4]">
                                            Activity
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[#102030]">
                                            {String(activityCount).padStart(2, '0')}
                                        </p>
                                    </div>
                                    <div className="rounded-[18px] border border-[rgba(45,106,227,0.14)] bg-white/75 px-3.5 py-2.5">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f86a4]">
                                            Education
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[#102030]">
                                            {String(educationCount).padStart(2, '0')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-4">
                                <div className="absolute bottom-4 left-[8px] top-2 hidden w-px -translate-x-1/2 bg-[rgba(45,106,227,0.2)] md:block" />
                                <div className="space-y-3">
                                    {experienceItems.map((exp) => (
                                        <Experience
                                            key={exp.id}
                                            exp={exp}
                                            variant="timeline"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid gap-3">
                        <section className="relative overflow-hidden rounded-[26px] border border-[rgba(45,106,227,0.14)] bg-[rgba(239,245,255,0.98)] px-4 py-4 text-[#102030] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] md:px-5">
                            <div className="relative flex items-start justify-between gap-3">
                                <div className="max-w-[18rem]">
                                    <div className="flex items-center gap-2 text-[#6d84a3]">
                                        <Sparkles size={14} />
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                                            Recognition Board
                                        </p>
                                    </div>
                                    <h3 className="mt-2 text-[1.18rem] font-semibold tracking-[-0.03em] text-[#102030] md:text-[1.32rem]">
                                        Awards & Certificates
                                    </h3>
                                    <p className="mt-2 text-[13px] leading-6 text-[#5a728f]">
                                        검증 가능한 성과와 자격 기록만 분리해서
                                        보여주는 영역입니다.
                                    </p>
                                </div>
                                <div className="rounded-[20px] border border-[rgba(45,106,227,0.12)] bg-[rgba(255,255,255,0.66)] px-4 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7890af]">
                                        Total
                                    </p>
                                    <p className="mt-1 text-[1.7rem] font-semibold leading-none text-[#102030]">
                                        {String(awardItems.length).padStart(2, '0')}
                                    </p>
                                </div>
                            </div>
                            <div className="relative mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(45,106,227,0.12)] bg-[rgba(255,255,255,0.6)] px-3 py-1.5 text-[11px] font-medium text-[#355f91]">
                                    <Award size={13} />
                                    Awards {awardCount}
                                </span>
                                <span className="inline-flex items-center rounded-full border border-[rgba(45,106,227,0.12)] bg-[rgba(255,255,255,0.6)] px-3 py-1.5 text-[11px] font-medium text-[#355f91]">
                                    Certificates {certificateCount}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(45,106,227,0.12)] bg-[rgba(255,255,255,0.6)] px-3 py-1.5 text-[11px] font-medium text-[#355f91]">
                                    <Briefcase size={13} />
                                    Linked to real work
                                </span>
                            </div>
                        </section>

                        <section className="rounded-[26px] border border-[rgba(45,106,227,0.12)] bg-[rgba(232,240,252,0.96)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] md:px-5">
                            <div className="space-y-3">
                                {awardItems.map((exp) => (
                                    <Experience
                                        key={exp.id}
                                        exp={exp}
                                        variant="recognition"
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
