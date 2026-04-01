'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    X,
    ExternalLink,
    Github,
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    Trophy,
    Cpu,
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
    const dialogRef = useRef<HTMLDivElement>(null);
    const modalId =
        project.anchorId ??
        project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9가-힣-]/g, '');
    const titleId = `project-modal-title-${modalId}`;
    const descriptionId = `project-modal-description-${modalId}`;

    const mediaItems: MediaItem[] = [
        ...(project.youtube ? [{ type: 'youtube' as const, url: project.youtube }] : []),
        ...project.images.map((url: string) => ({
            type: 'image' as const,
            url,
        })),
    ];

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (!dialogRef.current?.contains(e.target as Node)) {
            onClose();
        }
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

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialogRef.current?.focus();
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
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

    if (typeof document === 'undefined') {
        return null;
    }

    return createPortal(
        <div
            className="fixed inset-0 z-[120] overflow-y-auto bg-black/70 backdrop-blur-xl animate-fade-in"
            onClick={handleBackdropClick}
            role="presentation"
        >
            <div className="flex min-h-full items-start justify-center px-3 py-4 sm:px-5 sm:py-8 lg:items-center lg:p-10">
                <div
                    ref={dialogRef}
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    aria-describedby={descriptionId}
                    className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(10,14,28,0.85)] shadow-[0_40px_120px_rgba(0,0,0,0.6)] outline-none animate-scale-up backdrop-blur-2xl"
                >
                    <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto lg:max-h-[min(900px,calc(100dvh-5rem))] custom-scrollbar">
                        <div className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(10,14,28,0.9)] px-6 py-5 backdrop-blur-xl md:px-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="mb-2 flex flex-wrap items-center gap-2">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8ea0bd]">
                                            {project.period}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-white/20" />
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7ffbf8]">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h2
                                        id={titleId}
                                        className="font-display text-[2.2rem] font-bold leading-tight tracking-[-0.02em] text-white md:text-[2.8rem]"
                                    >
                                        {project.title}
                                    </h2>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="group rounded-full border border-white/10 bg-white/5 p-2.5 text-[#8ea0bd] transition-all hover:bg-white/10 hover:text-white"
                                    aria-label="모달 닫기"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {mediaItems.length > 0 && (
                            <div className="border-b border-white/10">
                                <div className="relative aspect-video bg-black/40">
                                    {mediaItems[currentIndex].type === 'youtube' ? (
                                        <iframe
                                            className="h-full w-full"
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
                                            className="h-full w-full object-contain"
                                        />
                                    )}

                                    {mediaItems.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('prev');
                                                }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition-all hover:bg-black/60"
                                                aria-label="이전 미디어"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('next');
                                                }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition-all hover:bg-black/60"
                                                aria-label="다음 미디어"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                            <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[12px] font-bold text-white backdrop-blur-md">
                                                {currentIndex + 1} / {mediaItems.length}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {mediaItems.length > 1 && (
                                    <div className="flex gap-3 overflow-x-auto bg-black/30 p-4 custom-scrollbar">
                                        {mediaItems.map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition-all ${
                                                    idx === currentIndex
                                                        ? 'border-[#7ffbf8] ring-2 ring-[#7ffbf8]/20'
                                                        : 'border-white/10 hover:border-white/30'
                                                }`}
                                                aria-label={`${idx + 1}번 미디어 보기`}
                                            >
                                                {item.type === 'youtube' ? (
                                                    <div className="relative flex h-full w-full items-center justify-center bg-black">
                                                        <Image
                                                            src={`https://img.youtube.com/vi/${getYoutubeId(
                                                                item.url
                                                            )}/mqdefault.jpg`}
                                                            alt="Youtube thumbnail"
                                                            className="h-full w-full object-cover opacity-60"
                                                            width={96}
                                                            height={64}
                                                        />
                                                        <PlayCircle
                                                            size={20}
                                                            className="absolute text-white"
                                                        />
                                                    </div>
                                                ) : (
                                                    <Image
                                                        width={96}
                                                        height={64}
                                                        src={item.url}
                                                        alt={`Thumbnail ${idx + 1}`}
                                                        className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="px-6 py-8 md:px-10 md:py-10">
                            <p
                                id={descriptionId}
                                className="mb-10 text-[17px] leading-[1.8] text-[#afbdd5] font-medium"
                            >
                                {project.description}
                            </p>

                            <div
                                className="markdown-body"
                                dangerouslySetInnerHTML={{
                                    __html: project.detailContent,
                                }}
                            />

                            <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
                                <section className="rounded-3xl border border-white/8 bg-white/4 p-6 glass-shimmer">
                                    <div className="flex items-center gap-2 mb-5">
                                        <Trophy size={16} className="text-[#7ffbf8]" />
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7ffbf8]">
                                            Key Achievements
                                        </h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {project.results.map((result: string, i: number) => (
                                            <li
                                                key={i}
                                                className="text-[14px] leading-relaxed text-[#d1d9e2] font-medium flex gap-3"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ffbf8]/40" />
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="rounded-3xl border border-white/8 bg-white/4 p-6 glass-shimmer">
                                    <div className="flex items-center gap-2 mb-5">
                                        <Cpu size={16} className="text-[#64d4ff]" />
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#64d4ff]">
                                            Tech Stack
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.techStack.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#040610] transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
                                    >
                                        <ExternalLink size={18} />
                                        <span>View Live Demo</span>
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-[#7ffbf8]/40"
                                    >
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
