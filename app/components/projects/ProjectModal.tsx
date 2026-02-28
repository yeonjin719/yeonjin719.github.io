'use client';

import React, { useEffect, useState } from 'react';
import {
    X,
    ExternalLink,
    Github,
    ChevronLeft,
    ChevronRight,
    PlayCircle,
} from 'lucide-react';
import Image from 'next/image';
import { TProject } from '@/app/type/type';

interface ProjectModalProps {
    project: TProject;
    onClose: () => void;
}

type MediaItem = { type: 'youtube' | 'image'; url: string };

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const mediaItems: MediaItem[] = [
        ...(project.youtube ? [{ type: 'youtube' as const, url: project.youtube }] : []),
        ...(project.images
            ? project.images.map((url: string) => ({
                  type: 'image' as const,
                  url,
              }))
            : []),
    ];

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (mediaItems.length <= 1) return;
            if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) =>
                    prev === 0 ? mediaItems.length - 1 : prev - 1
                );
            }
            if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) =>
                    prev === mediaItems.length - 1 ? 0 : prev + 1
                );
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, mediaItems.length]);

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

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 animate-fade-in overflow-y-auto"
            onClick={handleBackdropClick}
        >
            <div className="w-full max-w-4xl max-h-[90vh] bg-white border border-slate-300 shadow-xl animate-scale-up overflow-hidden">
                <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-5 md:px-6 py-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="text-[11px] text-slate-500">
                                    {project.period}
                                </span>
                                <span className="text-[11px] text-slate-500">·</span>
                                <span className="text-[11px] text-slate-500 font-medium">
                                    {project.category}
                                </span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight">
                                {project.title}
                            </h2>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-1.5 border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            aria-label="모달 닫기"
                        >
                            <X size={17} />
                        </button>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-76px)]">
                    {mediaItems.length > 0 && (
                        <div className="border-b border-slate-200">
                            <div className="relative aspect-video bg-slate-100">
                                {mediaItems[currentIndex].type === 'youtube' ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${getYoutubeId(
                                            mediaItems[currentIndex].url
                                        )}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <Image
                                        width={1200}
                                        height={675}
                                        src={mediaItems[currentIndex].url}
                                        alt={`${project.title} media ${currentIndex + 1}`}
                                        className="w-full h-full object-contain bg-slate-900"
                                    />
                                )}

                                {mediaItems.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('prev');
                                            }}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 border border-slate-300 text-slate-800 hover:bg-white"
                                            aria-label="이전 미디어"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('next');
                                            }}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 border border-slate-300 text-slate-800 hover:bg-white"
                                            aria-label="다음 미디어"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                        <div className="absolute bottom-3 right-3 text-[11px] bg-white/90 border border-slate-300 px-2 py-0.5 text-slate-700">
                                            {currentIndex + 1} / {mediaItems.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            {mediaItems.length > 1 && (
                                <div className="flex gap-2 p-3 overflow-x-auto bg-white border-t border-slate-200">
                                    {mediaItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`shrink-0 w-20 h-14 border ${
                                                idx === currentIndex
                                                    ? 'border-slate-900'
                                                    : 'border-slate-300'
                                            }`}
                                            aria-label={`${idx + 1}번 미디어 보기`}
                                        >
                                            {item.type === 'youtube' ? (
                                                <div className="w-full h-full bg-black flex items-center justify-center relative">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${getYoutubeId(
                                                            item.url
                                                        )}/mqdefault.jpg`}
                                                        alt="Youtube thumbnail"
                                                        className="w-full h-full object-cover opacity-80"
                                                        width={80}
                                                        height={56}
                                                    />
                                                    <PlayCircle
                                                        size={16}
                                                        className="absolute text-white"
                                                    />
                                                </div>
                                            ) : (
                                                <Image
                                                    width={80}
                                                    height={56}
                                                    src={item.url}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="px-5 md:px-6 py-6">
                        <p className="text-[15px] md:text-base text-slate-800 leading-7 mb-5">
                            {project.description}
                        </p>

                        <div
                            className="prose prose-slate max-w-none text-slate-800 leading-7 prose-headings:text-slate-900 prose-headings:font-semibold prose-p:text-slate-800 prose-strong:text-slate-900 prose-p:text-[15px] prose-li:text-[15px] prose-code:font-normal prose-code:text-slate-700"
                            dangerouslySetInnerHTML={{
                                __html: project.detailContent,
                            }}
                        />

                        <div className="mt-7 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <section>
                                <h4 className="text-xs uppercase tracking-[0.08em] text-slate-500 font-semibold mb-2.5">
                                    Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                    {project.results.map((result: string, i: number) => (
                                        <li
                                            key={i}
                                            className="text-sm text-slate-700 leading-relaxed"
                                        >
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h4 className="text-xs uppercase tracking-[0.08em] text-slate-500 font-semibold mb-2.5">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techStack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex justify-center items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white border border-slate-900 text-sm font-medium hover:bg-slate-800"
                                >
                                    <ExternalLink size={15} />
                                    Live Demo
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex justify-center items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-slate-900"
                                >
                                    <Github size={15} />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
