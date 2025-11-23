import {
    Award,
    ExternalLink,
    Sparkles,
    Github,
    Terminal,
    ArrowRight,
} from 'lucide-react';
import ProjectLink from './ProjectLink';
import Link from 'next/link';
import { projects } from '../data';
type TProject = (typeof projects)[number];

export default function Project({
    project,
    setSelectedProject,
    index,
}: {
    project: TProject;
    setSelectedProject: (project: TProject) => void;
    index: number;
}) {
    return (
        <article
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
        >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <span className="text-indigo-600 font-bold text-xs tracking-wider uppercase mb-1 block">
                                {project.category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                    <span className="text-slate-400 text-xs font-semibold bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                        {project.period}
                    </span>
                </div>

                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-3xl">
                    {project.description}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {project.results && (
                        <div className="md:col-span-2 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                                <Award size={16} className="text-amber-500" />{' '}
                                Key Results
                            </h4>
                            <ul className="space-y-2">
                                {project.results.map((result, i) => (
                                    <li
                                        key={i}
                                        className="text-slate-600 text-sm flex items-start gap-2"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                        <span className="leading-relaxed">
                                            {result}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="md:col-span-1">
                        <h4 className="font-bold text-slate-800 text-sm mb-3">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 items-center">
                    {project.links.demo && (
                        <ProjectLink
                            href={project.links.demo}
                            icon={<ExternalLink size={16} />}
                            text="Live Demo"
                            primary
                        />
                    )}
                    {project.links.github && (
                        <ProjectLink
                            href={project.links.github}
                            icon={<Github size={16} />}
                            text="Source Code"
                        />
                    )}

                    {project.troubleshooting && (
                        <Link
                            href={project.troubleshooting.url}
                            className="ml-auto group/link flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-full transition-all hover:bg-orange-100 border border-orange-100 hover:shadow-sm"
                        >
                            <Terminal size={16} />
                            <div>Read Dev Log</div>
                            <ArrowRight
                                size={14}
                                className="group-hover/link:translate-x-1 transition-transform"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
