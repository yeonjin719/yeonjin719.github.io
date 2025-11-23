import React from 'react';
import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getSortedPostsData, getPostData } from '@/lib/posts'; // getPostData 추가

// 정적 경로 생성
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>; // Promise 타입으로 수정
}) {
    // Next.js 15+에서는 params를 await 해야 합니다.
    const { slug } = await params;

    // [중요] 목록에서 찾는 게 아니라, 파일 내용을 직접 읽어오는 함수 사용
    const post = await getPostData(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-300 mb-2">
                        404
                    </h1>
                    <p className="text-slate-500">Post not found</p>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-indigo-50 transition-colors">
                            <ArrowLeft
                                size={16}
                                className="group-hover:-translate-x-0.5 transition-transform"
                            />
                        </div>
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            {/* Hero Header */}
            <header className="py-20 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
                        {post.tags &&
                            post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.15] tracking-tight animate-fade-in-up delay-100">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium text-sm animate-fade-in-up delay-200">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full">
                                <User size={16} />
                            </div>
                            <span>Kim Yeon Jin</span>
                        </div>
                        <div className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full">
                                <Calendar size={16} />
                            </div>
                            <time>{post.date}</time>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <div className="max-w-3xl mx-auto px-6 py-16">
                {/* [수정] post.desc 대신 post.content를 렌더링합니다.
                    MDX 라이브러리가 없는 환경이므로, 우선 텍스트가 줄바꿈되어 잘 보이도록 pre-wrap을 적용했습니다.
                */}
                <div className="prose prose-lg prose-slate max-w-none text-slate-900">
                    <div className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-slate-800">
                        {post.content}
                    </div>
                </div>

                {/* Post Footer */}
                <div className="mt-16 pt-10 border-t border-slate-200">
                    <div className="mt-10 p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <p className="text-slate-600 font-medium mb-4">
                            Did you find this article helpful?
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-800 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                        >
                            Explore more projects <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
