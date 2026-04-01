'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import RevealOnScroll from '@/app/components/common/RevealOnScroll';

export default function Troubleshooting({
    blogPostsData,
}: {
    blogPostsData: Array<{
        slug: string;
        title: string;
        date: string;
        desc: string;
        tags?: string[];
    }>;
}) {
    return (
        <section id="writing" className="relative mt-2 md:mt-4">
            <div className="mx-auto max-w-5xl">
                <div className="relative flex flex-col w-full">
                    {!blogPostsData || blogPostsData.length === 0 ? (
                        <div className="py-12 text-center text-[#5e7592] border-t border-dashed border-(--line)">
                            <p className="text-base leading-relaxed font-medium">
                                아직 작성된 글이 없습니다.
                            </p>
                        </div>
                    ) : (
                        blogPostsData.map((post, index) => (
                            <RevealOnScroll key={index}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block group"
                                >
                                    <article
                                        className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 py-6 md:py-8 border-b border-(--line) transition-all duration-300 hover:bg-(--surface-hover) sm:-mx-6 sm:px-6 rounded-2xl w-full ${index === 0 ? 'pt-2 md:pt-4' : ''}`}
                                    >
                                        {/* Left Side: Date and Tag */}
                                        <div className="w-full md:w-36 shrink-0 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 mt-1 md:mt-0">
                                            <span className="font-mono text-sm font-semibold tracking-wider text-[#8ea0bd]/80 group-hover:text-white transition-colors">
                                                {post.date}
                                            </span>
                                            <span className="rounded-sm border border-(--accent)/10 bg-(--accent)/5 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-(--accent) shadow-sm">
                                                {post.tags && post.tags[0]
                                                    ? post.tags[0]
                                                    : 'Blog'}
                                            </span>
                                        </div>

                                        {/* Right Side: Content */}
                                        <div className="flex flex-col gap-2 flex-1 w-full">
                                            <h3 className="font-display text-lg md:text-xl font-bold leading-tight text-white group-hover:text-(--accent) transition-colors flex justify-between items-start">
                                                <span>{post.title}</span>
                                                <ArrowUpRight
                                                    size={20}
                                                    className="shrink-0 ml-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                                />
                                            </h3>

                                            <p className="mt-1 text-[14px] leading-relaxed text-[#afbdd5] break-keep font-medium w-full sm:w-[90%]">
                                                {post.desc}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </RevealOnScroll>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
