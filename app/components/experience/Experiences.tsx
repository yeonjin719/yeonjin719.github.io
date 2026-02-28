import { Briefcase } from 'lucide-react';
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

    return (
        <section className="py-14 md:py-16 px-6 relative border-b border-slate-200">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Briefcase className="text-slate-700" />}
                    title="Experience & Awards"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <section className="border border-slate-200 bg-white px-3.5 md:px-4 py-3.5">
                        <h3 className="text-xs uppercase tracking-[0.08em] text-slate-500 font-semibold mb-3">
                            Experience
                        </h3>
                        <div className="space-y-2.5">
                            {experienceItems.map((exp) => (
                                <Experience key={exp.id} exp={exp} />
                            ))}
                        </div>
                    </section>

                    <section className="border border-slate-200 bg-white px-3.5 md:px-4 py-3.5">
                        <h3 className="text-xs uppercase tracking-[0.08em] text-slate-500 font-semibold mb-3">
                            Awards & Certificates
                        </h3>
                        <div className="space-y-2.5">
                            {awardItems.map((exp) => (
                                <Experience key={exp.id} exp={exp} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
