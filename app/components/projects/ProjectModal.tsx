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
            className="fixed inset-0 z-[120] overflow-y-auto bg-[rgba(17,24,39,0.58)] backdrop-blur-[6px] animate-fade-in"
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
                    className="w-full max-w-5xl overflow-hidden rounded-[30px] border border-[rgba(145,167,203,0.34)] bg-[#f8fbff] shadow-[0_36px_120px_rgba(7,18,37,0.28)] outline-none animate-scale-up"
                >
                    <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto lg:max-h-[min(900px,calc(100dvh-5rem))]">
                        <div className="sticky top-0 z-20 border-b border-black/10 bg-[rgba(248,251,255,0.94)] px-5 py-4 backdrop-blur md:px-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                        <span className="text-[11px] text-[#6f665f]">
                                            {project.period}
                                        </span>
                                        <span className="text-[11px] text-[#6f665f]">
                                            ·
                                        </span>
                                        <span className="text-[11px] font-medium text-[#2f63d6]">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h2
                                        id={titleId}
                                        className="text-[1.7rem] font-semibold leading-tight tracking-[-0.04em] text-[#102030] md:text-[2.05rem]"
                                    >
                                        {project.title}
                                    </h2>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="rounded-full border border-black/10 bg-white/70 p-2 text-[#6f665f] hover:bg-white hover:text-[#17161d]"
                                    aria-label="모달 닫기"
                                >
                                    <X size={17} />
                                </button>
                            </div>
                        </div>

                        {mediaItems.length > 0 && (
                            <div className="border-b border-black/10">
                                <div className="relative aspect-video bg-[#17161d]">
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
                                            className="h-full w-full object-contain bg-[#17161d]"
                                        />
                                    )}

                                    {mediaItems.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('prev');
                                                }}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[rgba(248,251,255,0.88)] p-2 text-[#102030] hover:bg-[#f8fbff]"
                                                aria-label="이전 미디어"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('next');
                                                }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[rgba(248,251,255,0.88)] p-2 text-[#102030] hover:bg-[#f8fbff]"
                                                aria-label="다음 미디어"
                                            >
                                                <ChevronRight size={16} />
                                            </button>
                                            <div className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-[rgba(248,251,255,0.88)] px-2.5 py-1 text-[11px] text-[#102030]">
                                                {currentIndex + 1} / {mediaItems.length}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {mediaItems.length > 1 && (
                                    <div className="flex gap-2 overflow-x-auto border-t border-black/10 bg-[#f8fbff] p-3">
                                        {mediaItems.map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`h-14 w-20 shrink-0 overflow-hidden rounded-2xl border ${
                                                    idx === currentIndex
                                                        ? 'border-[#2f63d6]'
                                                        : 'border-black/10'
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
                                                            className="h-full w-full object-cover opacity-80"
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
                                                        className="h-full w-full object-cover"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="px-5 py-6 md:px-6">
                            <p
                                id={descriptionId}
                                className="mb-5 text-[15px] leading-7 text-[#2d2a31] md:text-base"
                            >
                                {project.description}
                            </p>

                            <div
                                className="prose prose-stone max-w-none leading-7 prose-headings:font-display prose-headings:text-[#102030] prose-p:text-[#314458] prose-strong:text-[#102030] prose-p:text-[15px] prose-li:text-[15px] prose-code:font-normal prose-code:text-[#244a9f]"
                                dangerouslySetInnerHTML={{
                                    __html: project.detailContent,
                                }}
                            />

                            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-black/10 pt-5 md:grid-cols-2">
                                <section className="rounded-[24px] border border-black/10 bg-white/70 p-5">
                                    <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f665f]">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.results.map((result: string, i: number) => (
                                            <li
                                                key={i}
                                                className="text-sm leading-relaxed text-[#38343d]"
                                            >
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="rounded-[24px] border border-black/10 bg-white/70 p-5">
                                    <h4 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f665f]">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-black/10 bg-[#eff5ff] px-3 py-1.5 text-xs font-medium text-[#102030]"
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
                                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#102030] bg-[#102030] px-4 py-2.5 text-sm font-semibold text-white hover:border-[#2f63d6] hover:bg-[#2f63d6]"
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
                                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#102030] hover:border-[#2f63d6] hover:text-[#2f63d6]"
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
        </div>,
        document.body
    );
}
