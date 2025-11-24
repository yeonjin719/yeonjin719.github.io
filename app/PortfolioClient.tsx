// Client-side shell for the home page (modal + interactions)
'use client';

import { useEffect, useState } from 'react';

import { skills } from './data';
import DevLog from './components/DevLog';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import { GitHubCalendar } from 'react-github-calendar';
import { TProject } from './type/type';
import selectLastHalfYear from './utils/selectLastHalfYear';
type BlogPost = {
    slug: string;
    title: string;
    desc: string;
    date: string;
    tags?: string[];
};

export default function PortfolioClient({
    blogPosts,
}: {
    blogPosts: BlogPost[];
}) {
    const [isMdOrBelow, setIsMdOrBelow] = useState(false);
    const calendarTheme = {
        light: [
            '#f8fafc', // level 0 - subtle slate to match background
            '#e0e7ff', // level 1 - soft indigo tint
            '#c7d2fe', // level 2
            '#a5b4fc', // level 3
            '#7c3aed', // level 4 - deep violet accent
        ],
    };

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
                <div className="w-full flex justify-center px-10">
                    {isMounted && (
                        <GitHubCalendar
                            username={'yeonjin719'}
                            labels={{
                                totalCount: 'Learn how we count contributions',
                            }}
                            colorScheme="light"
                            theme={calendarTheme}
                            showWeekdayLabels
                            transformData={
                                isMdOrBelow ? selectLastHalfYear : undefined
                            }
                        ></GitHubCalendar>
                    )}
                </div>
                <DevLog blogPostsData={blogPosts} />
                <Footer />
            </div>
        </div>
    );
}
