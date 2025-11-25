import { Briefcase } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';

import Experience from '@/app/components/experience/Experience';
import { experiences } from '@/app/data';

export default function Experiences() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Briefcase className="text-white" />}
                    title="Experience & Awards"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => {
                        return <Experience key={exp.id} exp={exp}></Experience>;
                    })}
                </div>
            </div>
        </section>
    );
}
