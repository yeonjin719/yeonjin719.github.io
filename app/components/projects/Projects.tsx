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
            className="section-shell"
        >
            {selectedProject && (
                <ProjectModal
                    key={selectedProject.anchorId ?? selectedProject.title}
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <div className={isModalOpen ? 'pointer-events-none' : ''}>
                <div
                    className="px-5 py-5 md:px-6 md:py-6"
                    aria-hidden={isModalOpen}
                >
                    <SectionTitle
                        headingId={headingId}
                        icon={<Award className="text-slate-700" />}
                        title="Featured Projects"
                    />

                    <div className="grid gap-4 lg:grid-cols-2">
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
