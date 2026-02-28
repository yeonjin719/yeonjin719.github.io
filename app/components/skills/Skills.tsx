import { Code2 } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';

export default function Skills({
    skills,
}: {
    skills: { [category: string]: string[] };
}) {
    return (
        <section className="py-14 md:py-16 px-6 relative border-b border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Code2 className="text-slate-700" />}
                    title="Technical Skills"
                />

                <div className="bg-white border border-slate-200 px-4 md:px-5">
                    {Object.entries(skills).map(([category, items]) => (
                        <section
                            key={category}
                            className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-4 py-4 border-b border-slate-200 last:border-b-0"
                        >
                            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.1em] md:pt-1">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-[13px] text-slate-700 bg-slate-100 border border-slate-200"
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
