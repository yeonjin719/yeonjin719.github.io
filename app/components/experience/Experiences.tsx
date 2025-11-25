'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';
import Experience from '@/app/components/experience/Experience';
import { experiences } from '@/app/data';

export default function Experiences() {
    const extendedExperiences = [
        ...experiences,
        ...experiences,
        ...experiences,
    ];

    const originalLength = experiences.length;

    const [currentIndex, setCurrentIndex] = useState(originalLength);
    const [cardWidth, setCardWidth] = useState(85);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 다음 슬라이드 이동
    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    // 이전 슬라이드 이동
    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    // 자동 슬라이드 기능
    useEffect(() => {
        if (isPaused) return;

        const next = () => {
            handleNext();
        };

        timeoutRef.current = setInterval(next, 3000);

        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [isPaused, currentIndex]);

    // 반응형 카드 너비 설정
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setCardWidth(50); // 데스크탑
            } else {
                setCardWidth(85); // 모바일
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTransitionEnd = () => {
        if (currentIndex >= originalLength * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - originalLength);
        } else if (currentIndex < originalLength) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + originalLength);
        }
    };

    const offset = (100 - cardWidth) / 2;
    const translateX = -(currentIndex * cardWidth) + offset;

    return (
        <section className="py-24 px-0 relative bg-slate-50/50 border-b border-slate-200/60 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 mb-10">
                <SectionTitle
                    icon={<Briefcase className="text-white" />}
                    title="Experience & Awards"
                />
            </div>

            {/* Slider Area */}
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Track */}
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateX}%)`,
                        transitionDuration: isTransitioning ? '500ms' : '0ms',
                        transitionProperty: 'transform',
                        transitionTimingFunction: 'ease-out',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedExperiences.map((exp, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={`${exp.id}-${index}`}
                                className="shrink-0 px-3"
                                style={{ width: `${cardWidth}%` }}
                            >
                                <div
                                    className={`h-full transform transition-all duration-500 rounded-2xl ${
                                        isActive
                                            ? 'scale-100 opacity-100 shadow-[0_10px_20px_rgba(0,0,0,0.05)] z-10'
                                            : 'scale-90 opacity-40 blur-[1px] z-0'
                                    }`}
                                >
                                    <Experience exp={exp} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 border border-slate-200 text-slate-600 shadow-lg hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all z-20 backdrop-blur-sm"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 border border-slate-200 text-slate-600 shadow-lg hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all z-20 backdrop-blur-sm"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="flex justify-center gap-2 mt-10">
                    {experiences.map((_, idx) => {
                        const realIndex = currentIndex % originalLength;
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    const currentSet = Math.floor(
                                        currentIndex / originalLength
                                    );
                                    setCurrentIndex(
                                        currentSet * originalLength + idx
                                    );
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    realIndex === idx
                                        ? 'bg-indigo-600 w-8'
                                        : 'bg-slate-300 w-2 hover:bg-indigo-300'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
