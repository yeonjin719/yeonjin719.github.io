// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="site-shell">
                <div className="mx-auto max-w-5xl">
                    <header className="blog-shell px-6 py-7 md:px-8 md:py-8">
                        <p className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center rounded-[10px] border border-[rgba(16,32,48,0.08)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#31567e]">
                                Engineering Notes
                            </span>
                            <span className="inline-flex items-center rounded-[10px] border border-[rgba(16,32,48,0.08)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#31567e]">
                                {posts.length} Posts
                            </span>
                        </p>
                        <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#102030] md:text-[2.45rem]">
                            Troubleshooting
                        </h1>
                        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#5e7592] md:text-base">
                            프로젝트를 만들며 마주친 설계 판단, 디버깅 기록,
                            문제 해결 과정을 정리한 글들입니다.
                        </p>
                    </header>

                    <div className="mt-5 grid gap-3">
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                className="block group"
                            >
                                <article className="blog-shell px-5 py-5 md:px-6 md:py-6 hover:border-[#2f63d6]/30">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="inline-flex items-center rounded-[10px] border border-[rgba(16,32,48,0.08)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#31567e]">
                                            {post.tags[0] ?? 'Blog'}
                                        </span>
                                        <time className="text-[11px] text-[#5e7592]">
                                            {post.date}
                                        </time>
                                    </div>
                                    <h2 className="text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#102030] md:text-[1.78rem]">
                                        {post.title}
                                    </h2>
                                    <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-[#314458]">
                                        {post.desc}
                                    </p>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
