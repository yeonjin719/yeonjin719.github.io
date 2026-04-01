// app/blog/page.tsx
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="min-h-screen relative z-10 w-full pt-20 pb-24 md:pt-32 px-5">
            <div className="mx-auto max-w-5xl">
                <nav className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#8ea0bd] hover:text-(--accent) transition-colors group"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        Back to Portfolio
                    </Link>
                </nav>

                <header className="mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-(--accent)">
                            Engineering Notes
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-(--line)"></span>
                        <span className="font-mono text-xs font-semibold tracking-widest text-[#8ea0bd]">
                            {posts.length} Posts
                        </span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Dev Log
                    </h1>

                    <p className="text-[15px] md:text-base leading-relaxed text-[#afbdd5] max-w-2xl font-medium">
                        프로젝트를 만들며 마주친 설계 판단, 디버깅 기록, 문제
                        해결 과정을 정리한 글들입니다.
                    </p>
                </header>

                <div className="flex flex-col w-full border-t border-(--line)">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="block group"
                        >
                            <article className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 py-8 md:py-10 border-b border-(--line) transition-all duration-300 hover:bg-(--surface-hover) sm:-mx-6 sm:px-6 rounded-2xl w-full">
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
                                    <h2 className="font-display text-xl md:text-2xl font-bold leading-tight text-white group-hover:text-(--accent) transition-colors flex justify-between items-start">
                                        <span>{post.title}</span>
                                        <ArrowUpRight
                                            size={20}
                                            className="shrink-0 ml-4 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                                        />
                                    </h2>

                                    <p className="mt-2 text-[15px] leading-relaxed text-[#afbdd5] break-keep font-medium w-full sm:w-[90%]">
                                        {post.desc}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
