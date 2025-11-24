'use client';

import React, { useEffect, useState } from 'react';
import {
    X,
    Award,
    ExternalLink,
    Github,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    PlayCircle,
} from 'lucide-react';
import type { projects } from '../data';
import Image from 'next/image';

type Project = (typeof projects)[number] & { detailContent?: string };
interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(
        null
    );
    const mediaItems = [
        ...(project.youtube ? [{ type: 'youtube', url: project.youtube }] : []),
        ...(project.images
            ? project.images.map((url: string) => ({ type: 'image', url }))
            : []),
    ];
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (activeImageIndex !== null) {
                    setActiveImageIndex(null);
                } else {
                    onClose();
                }
            }

            if (activeImageIndex !== null && project.images) {
                if (e.key === 'ArrowLeft') {
                    setActiveImageIndex(
                        (prev) =>
                            (prev! - 1 + project.images.length) %
                            project.images.length
                    );
                }
                if (e.key === 'ArrowRight') {
                    setActiveImageIndex(
                        (prev) => (prev! + 1) % project.images.length
                    );
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, activeImageIndex, project.images]);

    const getYoutubeId = (url: string) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const navigate = (direction: 'prev' | 'next') => {
        if (mediaItems.length <= 1) return;
        if (direction === 'prev') {
            setCurrentIndex((prev) =>
                prev === 0 ? mediaItems.length - 1 : prev - 1
            );
        } else {
            setCurrentIndex((prev) =>
                prev === mediaItems.length - 1 ? 0 : prev + 1
            );
        }
    };

    if (!project) return null;
    // const youtubeId = project.youtube ? getYoutubeId(project.youtube) : null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in overflow-y-auto"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl w-full max-w-4xl my-8 shadow-2xl animate-scale-up relative flex flex-col overflow-hidden max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md text-slate-500 hover:text-slate-800 hover:bg-white rounded-full transition-all z-20 shadow-sm"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="overflow-y-auto">
                    {/* Media Slider */}
                    <div className="relative aspect-video bg-black group shrink-0">
                        {mediaItems.length > 0 ? (
                            mediaItems[currentIndex].type === 'youtube' ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${getYoutubeId(
                                        mediaItems[currentIndex].url
                                    )}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <Image
                                    width={100}
                                    height={100}
                                    src={mediaItems[currentIndex].url}
                                    alt={`Slide ${currentIndex + 1}`}
                                    className="w-full h-full object-contain bg-slate-900"
                                />
                            )
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/50">
                                No Media Available
                            </div>
                        )}

                        {mediaItems.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('prev');
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('next');
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}

                        {mediaItems.length > 1 && (
                            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                                {currentIndex + 1} / {mediaItems.length}
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {mediaItems.length > 1 && (
                        <div className="flex gap-2 p-3 overflow-x-auto bg-slate-100 border-b border-slate-200 scrollbar-hide shrink-0">
                            {mediaItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`shrink-0 w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-all border-2 ${
                                        idx === currentIndex
                                            ? 'border-indigo-600 ring-2 ring-indigo-200'
                                            : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                                >
                                    {item.type === 'youtube' ? (
                                        <div className="w-full h-full bg-black flex items-center justify-center relative">
                                            <Image
                                                src={`https://img.youtube.com/vi/${getYoutubeId(
                                                    item.url
                                                )}/mqdefault.jpg`}
                                                alt="Youtube"
                                                className="w-full h-full object-cover opacity-80"
                                                width={100}
                                                height={75}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <PlayCircle
                                                    size={20}
                                                    className="text-white drop-shadow-md"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            width={100}
                                            height={75}
                                            src={item.url}
                                            alt={`Thumb ${idx}`}
                                            className="w-full h-full object-cover bg-white"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="p-8">
                        <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="text-indigo-600 font-bold text-xs tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">
                                    {project.category}
                                </span>
                                <span className="text-slate-400 text-xs font-medium px-2 py-1 bg-slate-50 rounded-md border border-slate-100">
                                    {project.period}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-8">
                            <h4 className="font-bold text-indigo-900 text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                                <Award size={18} className="text-indigo-600" />{' '}
                                Key Achievements
                            </h4>
                            <ul className="space-y-3">
                                {project.results.map(
                                    (result: string, i: number) => (
                                        <li
                                            key={i}
                                            className="text-slate-700 text-sm flex items-start gap-3 leading-relaxed"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="text-indigo-500 mt-0.5 shrink-0"
                                            />
                                            <span>{result}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div
                            className="prose prose-slate max-w-none mb-10 text-slate-600 leading-relaxed prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-strong:text-indigo-600"
                            dangerouslySetInnerHTML={{
                                __html: project.detailContent,
                            }}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex justify-center items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 transform hover:-translate-y-0.5"
                                >
                                    <ExternalLink size={18} /> Visit Website
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex justify-center items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:text-slate-900 transition-all transform hover:-translate-y-0.5"
                                >
                                    <Github size={18} /> View Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
