import Image from 'next/image';
import { Expand } from 'lucide-react';
import { TProject } from '@/app/type/type';
import PreviewFallback from '@/app/components/common/PreviewFallback';

export default function Project({
    project,
    setSelectedProject,
    index,
    isActive,
    onActivate,
}: {
    project: TProject;
    setSelectedProject: (project: TProject) => void;
    index?: number;
    isActive?: boolean;
    onActivate?: () => void;
}) {
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

    const handleProjectInteraction = () => {
        if (isActive === false && onActivate) {
            onActivate();
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <article
            id={anchorId}
            key={index}
            onClick={handleProjectInteraction}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleProjectInteraction();
                }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${project.title} 상세 보기`}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-4xl border border-(--line) bg-(--surface) shadow-(--shadow-soft) backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-(--accent-strong) hover:shadow-(--shadow-strong)"
        >
            <div className="relative aspect-16/10 overflow-hidden sm:aspect-[2.1/1]">
                {previewImage ? (
                    <Image
                        fill
                        src={previewImage}
                        alt={`${project.title} preview`}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                ) : (
                    <PreviewFallback
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        variant={index}
                    />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-background via-(--background)/20 to-transparent opacity-80" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                        {project.period}
                    </span>
                    <span className="rounded-full border border-(--accent-strong)/30 bg-(--accent)/10 px-3 py-1 text-xs font-bold text-(--accent) backdrop-blur-md">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 py-6 md:px-8 md:py-8 relative z-10 bg-linear-to-b from-transparent to-(--surface-strong)">
                <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground group-hover:text-(--accent) transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p
                        className="mt-3 text-sm leading-relaxed text-(--muted)"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {project.description}
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                    {techPreview.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-lg border border-(--line-strong) bg-white/5 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors group-hover:border-(--accent-strong)/30"
                        >
                            {tech}
                        </span>
                    ))}
                    {hiddenTechCount > 0 && (
                        <span className="inline-flex items-center rounded-lg border border-transparent bg-white/5 px-3 py-1.5 text-xs font-bold text-(--muted)">
                            +{hiddenTechCount}
                        </span>
                    )}
                </div>
            </div>

            {/* Global Hover Full-Card Overlay */}
            {isActive !== false && (
                <div className="absolute inset-0 z-50 flex items-center justify-center opacity-0 backdrop-blur-xs transition-all duration-500 group-hover:opacity-100 bg-black/40">
                    <span className="flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-base font-bold text-black shadow-[0_10px_30px_rgba(0,229,255,0.4)] translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                        <Expand size={18} />
                        View Detail
                    </span>
                </div>
            )}
        </article>
    );
}
