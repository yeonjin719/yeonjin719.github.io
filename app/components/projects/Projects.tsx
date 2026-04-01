'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/app/data';
import Project from '@/app/components/projects/Project';
import { TProject } from '@/app/type/type';
import ProjectModal from '@/app/components/projects/ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<TProject | null>(
        null,
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const isModalOpen = Boolean(selectedProject);

    // 3D Carousel Calculations
    const count = projects.length;
    const angleStep = 360 / count;

    // Adjust radius based on screen size
    const [radius, setRadius] = useState(450);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setRadius(300);
            else if (window.innerWidth < 1024) setRadius(400);
            else setRadius(550);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlay && !isModalOpen) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => prev + 1);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, isModalOpen]);

    const nextProject = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const goToProject = (index: number) => {
        const currentRotation = currentIndex % count;
        let diff = (index - currentRotation) % count;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        setCurrentIndex(currentIndex + diff);
    };

    const activeIndex = ((currentIndex % count) + count) % count;

    return (
        <div className="relative w-full overflow-hidden py-10">
            {selectedProject && (
                <ProjectModal
                    key={selectedProject.anchorId ?? selectedProject.title}
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <div
                className={
                    isModalOpen
                        ? 'pointer-events-none opacity-0'
                        : 'transition-opacity duration-500'
                }
            >
                {/* 3D Carousel Container */}
                <div
                    className="relative flex h-[500px] items-center justify-center perspective-[2000px] md:h-[600px]"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                >
                    {/* Carousel Ring */}
                    <div
                        className="relative h-full w-full transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(-${radius}px) rotateY(${-currentIndex * angleStep}deg)`,
                        }}
                    >
                        {projects.map((project, idx) => {
                            const angle = idx * angleStep;
                            const isActive = idx === activeIndex;

                            const diff = Math.abs(idx - activeIndex);
                            const normalizedDiff = Math.min(diff, count - diff);
                            const zIndex = count - normalizedDiff;

                            return (
                                <div
                                    key={`${project.title}-${idx}`}
                                    className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 sm:w-[380px] md:w-[480px]"
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                        backfaceVisibility: 'hidden',
                                        opacity: isActive ? 1 : 0.6,
                                        filter: isActive
                                            ? 'none'
                                            : `blur(${normalizedDiff * 1}px) brightness(${1 - normalizedDiff * 0.2})`,
                                        zIndex: zIndex,
                                    }}
                                >
                                    <div
                                        className={`transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-[0.85]'}`}
                                    >
                                        <Project
                                            project={project}
                                            setSelectedProject={
                                                setSelectedProject
                                            }
                                            index={idx}
                                            isActive={isActive}
                                            onActivate={() => goToProject(idx)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Overlay */}
                    <div className="absolute inset-y-0 left-2 right-2 md:left-6 md:right-6 z-50 flex items-center justify-between pointer-events-none">
                        <button
                            onClick={prevProject}
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-(--line-strong) bg-(--surface) text-foreground shadow-xl backdrop-blur-md transition-all duration-300 hover:border-(--accent-strong) hover:bg-(--surface-strong) hover:text-(--accent) hover:-translate-x-2 group pointer-events-auto"
                            aria-label="Previous project"
                        >
                            <ChevronLeft
                                size={28}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                        </button>

                        <button
                            onClick={nextProject}
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-(--line-strong) bg-(--surface) text-foreground shadow-xl backdrop-blur-md transition-all duration-300 hover:border-(--accent-strong) hover:bg-(--surface-strong) hover:text-(--accent) hover:translate-x-2 group pointer-events-auto"
                            aria-label="Next project"
                        >
                            <ChevronRight
                                size={28}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-12 flex flex-col items-center gap-6">
                    {/* Dots Pagination */}
                    <div className="flex items-center gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToProject(index)}
                                className={`relative h-2 transition-all duration-500 ease-out rounded-full ${
                                    index === activeIndex
                                        ? 'w-12 bg-(--accent) shadow-[0_0_12px_var(--accent-soft)]'
                                        : 'w-2 bg-white/20 hover:bg-white/50 hover:scale-125'
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
