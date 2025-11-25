import { Code2 } from 'lucide-react';
import getCategoryColor from '@/app/utils/getCategoryColor';
import SectionTitle from '@/app/components/common/SectionTitle';

export default function Skills({
    skills,
}: {
    skills: { [category: string]: string[] };
}) {
    return (
        <section className="py-24 px-6 relative border-y border-slate-200/60">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Code2 className="text-white" />}
                    title="Technical Skills"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div
                            key={category}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${getCategoryColor(
                                        category
                                    )}`}
                                ></div>
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default border border-slate-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
