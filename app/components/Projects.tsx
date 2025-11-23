'use client';

import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projects } from '../data';
import Project from './Project';

type TProject = (typeof projects)[number];
export default function Projects({
    setSelectedProject,
}: {
    setSelectedProject: (project: TProject) => void;
}) {
    return (
        <section className="bg-slate-50/50 py-24 px-6 border-y border-slate-200/60 relative">
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
