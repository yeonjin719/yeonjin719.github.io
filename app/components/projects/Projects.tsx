'use client';

import { Award } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';
import { projects } from '@/app/data';
import Project from '@/app/components/projects/Project';
import { TProject } from '@/app/type/type';

export default function Projects({
    setSelectedProject,
}: {
    setSelectedProject: (project: TProject) => void;
}) {
    return (
        <section className="bg-slate-50/50 py-24 px-6 border-slate-200/60 relative">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<Award className="text-white" />}
                    title="Featured Projects"
                />

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            project={project}
                            setSelectedProject={setSelectedProject}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
