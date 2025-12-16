'use client';

import { useState } from 'react';
import { Award } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';
import { projects } from '@/app/data';
import Project from '@/app/components/projects/Project';
import { TProject } from '@/app/type/type';
import ProjectModal from '@/app/components/projects/ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<TProject | null>(
        null
    );
    const isModalOpen = Boolean(selectedProject);
    const headingId = 'featured-projects-heading';

    return (
        <section
            id="projects"
            aria-labelledby={headingId}
            className="bg-slate-50/50 py-24 px-6  relative border-b border-slate-200/60"
        >
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <div className={isModalOpen ? 'pointer-events-none' : ''}>
                <div className="max-w-5xl mx-auto" aria-hidden={isModalOpen}>
                    <SectionTitle
                        headingId={headingId}
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
            </div>
        </section>
    );
}
