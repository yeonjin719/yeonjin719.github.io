// Client-side shell for the home page (modal + interactions)
'use client';

import { useState } from 'react';

import { projects, skills } from './data';
import DevLog from './components/DevLog';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
    type Project = (typeof projects)[number];
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-linear-to-b from-indigo-100/50 to-transparent -z-10 blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute top-40 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply animate-pulse" />
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply" />
            <Header />
            <Skills skills={skills} />
            <Projects setSelectedProject={setSelectedProject} />
            <DevLog blogPostsData={blogPosts} />
            <Footer />
        </div>
    );
}
