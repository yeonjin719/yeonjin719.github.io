import Image from 'next/image';
import {
    ExternalLink,
    Github,
    Terminal,
    ArrowRight,
    PanelTopOpen,
    Expand,
} from 'lucide-react';
import ProjectLink from '@/app/components/projects/ProjectLink';
import Link from 'next/link';
import { TProject } from '@/app/type/type';
import PreviewFallback from '@/app/components/common/PreviewFallback';

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
    const hiddenTechCount = Math.max(
        project.techStack.length - techPreview.length,
        0,
    );
    const previewImage = project.images[0]
        ? project.images[0].startsWith('/')
            ? project.images[0]
            : `/${project.images[0]}`
        : null;

    const anchorId =
        project.anchorId ??
        project.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9가-힣-]/g, '');

    const openModal = () => setSelectedProject(project);

    return (
        <article
            id={anchorId}
            key={index}
            onClick={openModal}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal();
                }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${project.title} 상세 보기`}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[rgba(33,79,167,0.14)] bg-[rgba(250,252,255,0.98)] shadow-[0_14px_34px_rgba(19,43,78,0.07)] outline-none transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(47,99,214,0.28)] hover:shadow-[0_18px_40px_rgba(19,43,78,0.1)] focus-visible:border-[rgba(47,99,214,0.42)] focus-visible:shadow-[0_0_0_4px_rgba(45,106,227,0.12)]"
        >
            <div className="relative aspect-[2.1/1] overflow-hidden border-b border-[rgba(45,106,227,0.12)] sm:aspect-[2.25/1]">
                {previewImage ? (
                    <>
                        <Image
                            fill
                            src={previewImage}
                            alt={`${project.title} preview`}
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </>
                ) : (
                    <PreviewFallback
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        variant={index}
                    />
                )}

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    <span className="inline-flex items-center rounded-full border border-white/28 bg-[rgba(248,251,255,0.84)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#365b92] backdrop-blur">
                        Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/36 bg-[rgba(24,42,70,0.42)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                        <PanelTopOpen size={11} />
                        Open Detail
                    </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3">
                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-white/86">
                        <span className="rounded-full border border-white/28 bg-[rgba(24,42,70,0.34)] px-2 py-1 backdrop-blur">
                            {project.period}
                        </span>
                        <span className="rounded-full border border-white/28 bg-[rgba(24,42,70,0.34)] px-2 py-1 backdrop-blur">
                            {project.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col px-4 py-3.5 md:px-4 md:py-4">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3
                            title={project.title}
                            className="text-[1.22rem] font-semibold leading-tight tracking-[-0.04em] text-[#102030] md:text-[1.38rem]"
                        >
                            {project.title}
                        </h3>
                    </div>
                </div>

                <p
                    className="mt-2.5 text-[13px] leading-[1.6] text-[#243445]"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {project.description}
                </p>

                <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {techPreview.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-2.5 py-1 text-[11px] font-medium text-[#102030]"
                        >
                            {tech}
                        </span>
                    ))}
                    {hiddenTechCount > 0 && (
                        <span className="inline-flex items-center rounded-full border border-[rgba(45,106,227,0.14)] bg-[rgba(241,247,255,0.96)] px-2.5 py-1 text-[11px] font-medium text-[#5e7592]">
                            +{hiddenTechCount}
                        </span>
                    )}
                </div>

                {resultHighlight && (
                    <div className="mt-3.5 rounded-[16px] border border-[rgba(47,99,214,0.12)] bg-[rgba(47,99,214,0.06)] px-3.5 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2f63d6]">
                            Key Result
                        </p>
                        <p
                            className="mt-1 text-[13px] leading-[1.55] text-[#243445]"
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {resultHighlight}
                        </p>
                    </div>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/10 pt-3.5">
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            openModal();
                        }}
                        className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(45,106,227,0.18)] bg-[rgba(241,247,255,0.98)] px-3.5 py-2 text-[13px] font-semibold text-[#102030] hover:-translate-y-0.5 hover:border-[#2f63d6] hover:text-[#2f63d6]"
                    >
                        <Expand size={14} />
                        View Detail
                    </button>
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
                            className="group/link flex w-fit items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f665f] hover:text-[#2f63d6] sm:ml-auto"
                        >
                            <Terminal size={14} />
                            <span>Dev Log</span>
                            <ArrowRight
                                size={13}
                                className="group-hover/link:translate-x-0.5"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
