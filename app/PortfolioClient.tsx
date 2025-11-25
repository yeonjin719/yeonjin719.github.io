// Client-side shell for the home page (modal + interactions)
'use client';

import { useEffect, useState } from 'react';

import DevLog from '@/app/components/devLog/DevLog';
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import ProjectModal from '@/app/components/projects/ProjectModal';
import Skills from '@/app/components/skills/Skills';
import Projects from '@/app/components/projects/Projects';
import Experiences from '@/app/components/experience/Experiences';
import GithubState from '@/app/components/githubState/GithubState';
import { TBlogPost, TProject } from '@/app/type/type';
import { skills } from '@/app/data';

export default function PortfolioClient({
    blogPosts,
}: {
    blogPosts: TBlogPost[];
}) {
    const [isMdOrBelow, setIsMdOrBelow] = useState(false);
    const [selectedProject, setSelectedProject] = useState<TProject | null>(
        null
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const updateIsMdOrBelow = (mq: MediaQueryList | MediaQueryListEvent) =>
            setIsMdOrBelow(mq.matches);

        updateIsMdOrBelow(mediaQuery);
        mediaQuery.addEventListener('change', updateIsMdOrBelow);

        const id = setTimeout(() => setIsMounted(true), 0);
        return () => {
            mediaQuery.removeEventListener('change', updateIsMdOrBelow);
            clearTimeout(id);
        };
    }, []);

    const isModalOpen = Boolean(selectedProject);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <div
                className={isModalOpen ? 'pointer-events-none' : ''}
                aria-hidden={isModalOpen}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-linear-to-b from-indigo-100/50 to-transparent -z-10 blur-3xl opacity-60 pointer-events-none" />
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply animate-pulse" />
                <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply" />
                <Header />
                <Experiences />
                <Skills skills={skills} />
                <Projects setSelectedProject={setSelectedProject} />
                <GithubState
                    isMounted={isMounted}
                    isMdOrBelow={isMdOrBelow}
                ></GithubState>
                <DevLog blogPostsData={blogPosts} />
                <Footer />
            </div>
        </div>
    );
}
