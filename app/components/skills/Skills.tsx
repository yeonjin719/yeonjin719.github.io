import { Code2 } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';

export default function Skills({
    skills,
}: {
    skills: { [category: string]: string[] };
}) {
    return (
        <section className="section-shell">
            <div className="px-5 py-5 md:px-6 md:py-6">
                <SectionTitle
                    icon={<Code2 className="text-slate-700" />}
                    title="Technical Skills"
                />

                <div className="grid gap-2.5">
                    {Object.entries(skills).map(([category, items]) => (
                        <section
                            key={category}
                            className="panel-card grid grid-cols-1 gap-2.5 px-4 py-3.5 md:grid-cols-[150px_1fr] md:items-center md:gap-3 "
                        >
                            <h3 className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5e7592]">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="whitespace-nowrap rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-3 py-1.5 text-[13px] font-medium text-[#102030]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
