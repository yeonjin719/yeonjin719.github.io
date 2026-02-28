import {
    ExternalLink,
    Github,
    Terminal,
    ArrowRight,
    PanelTopOpen,
} from 'lucide-react';
import ProjectLink from '@/app/components/projects/ProjectLink';
import Link from 'next/link';
import { TProject } from '@/app/type/type';

export default function Project({
    project,
    setSelectedProject,
    index,
}: {
    project: TProject;
    setSelectedProject: (project: TProject) => void;
    index: number;
}) {
    const resultHighlight = project.results[0];
    const techPreview = project.techStack.slice(0, 3);
    const hiddenTechCount = Math.max(project.techStack.length - techPreview.length, 0);

    const anchorId =
        project.anchorId ??
        project.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9가-힣-]/g, '');

    return (
        <article
            id={anchorId}
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group bg-white border border-slate-200 px-5 py-5 md:px-6 md:py-6 cursor-pointer transition-colors hover:bg-slate-50 hover:border-slate-300"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 text-[11px] text-slate-500">
                    <span className="px-2 py-0.5 border border-slate-300 bg-slate-100 font-semibold tracking-[0.08em] uppercase">
                        Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{project.period}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                    <PanelTopOpen size={13} />
                    상세 보기
                </span>
            </div>

            <h3
                title={project.title}
                className="mt-3 text-xl md:text-2xl font-bold text-slate-900 leading-tight"
            >
                {project.title}
            </h3>

            <p
                className="mt-2 text-sm md:text-[15px] text-slate-700 leading-relaxed max-w-3xl"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {project.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center text-xs text-slate-700 border border-slate-200 bg-slate-100 px-2 py-0.5">
                    역할: {project.category}
                </span>
                {techPreview.map((tech) => (
                    <span
                        key={tech}
                        className="inline-flex items-center text-xs text-slate-600 border border-slate-200 bg-white px-2 py-0.5"
                    >
                        {tech}
                    </span>
                ))}
                {hiddenTechCount > 0 && (
                    <span className="inline-flex items-center text-xs text-slate-500 border border-slate-200 bg-white px-2 py-0.5">
                        +{hiddenTechCount}
                    </span>
                )}
            </div>

            {resultHighlight && (
                <p className="mt-3 text-[13px] md:text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-800">핵심 성과:</strong>{' '}
                    {resultHighlight}
                </p>
            )}

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
                {project.links.demo && (
                    <ProjectLink
                        href={project.links.demo}
                        icon={<ExternalLink size={15} />}
                        text="Live Demo"
                        primary
                    />
                )}
                {project.links.github && (
                    <ProjectLink
                        href={project.links.github}
                        icon={<Github size={15} />}
                        text="Source Code"
                    />
                )}
                {project.troubleshooting && (
                    <Link
                        href={project.troubleshooting.url}
                        onClick={(event) => event.stopPropagation()}
                        className="ml-auto w-fit group/link flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900"
                    >
                        <Terminal size={14} />
                        <span>Dev Log</span>
                        <ArrowRight
                            size={13}
                            className="group-hover/link:translate-x-0.5 transition-transform"
                        />
                    </Link>
                )}
            </div>
        </article>
    );
}
