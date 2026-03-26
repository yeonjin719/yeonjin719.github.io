import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import { getSortedPostsData, getPostData } from '@/lib/posts'; // getPostData 추가
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { extractHeadings } from '@/lib/markdown';
import { markdownComponents } from '../../components/common/MarkdownComponent';
import { projects } from '@/app/data';

const siteUrl = 'https://yeonjin719.github.io';

const createPostDescription = (content: string, fallback = '') => {
    if (fallback) return fallback;
    return content
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[#>*_~-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 160);
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getPostData(slug);
        const description = createPostDescription(post.content, post.desc);
        const canonicalUrl = `${siteUrl}/blog/${slug}`;

        return {
            title: post.title,
            description,
            alternates: {
                canonical: canonicalUrl,
            },
            openGraph: {
                type: 'article',
                url: canonicalUrl,
                title: post.title,
                description,
                publishedTime: post.date,
                authors: ['Kim Yeon Jin'],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description,
            },
        };
    } catch {
        return {
            title: 'Blog Post | Kim Yeon Jin',
            description: 'Engineering blog post by Kim Yeon Jin.',
        };
    }
}
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
    const { slug } = await params;

    const post = await getPostData(slug);
    const headings = extractHeadings(post.content);
    const metaDescription = createPostDescription(post.content, post.desc);
    const postUrl = `${siteUrl}/blog/${slug}`;
    const targetProject = projects.find((project) => {
        const troubleshootingSlug = project.troubleshooting?.url
            ?.split('/')
            .filter(Boolean)
            .pop();
        return troubleshootingSlug === slug;
    });
    const targetAnchor =
        targetProject?.anchorId ??
        targetProject?.title
            ?.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9가-힣-]/g, '') ??
        '';
    const exploreHref = targetAnchor ? `/#${targetAnchor}` : '/';
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: metaDescription,
        url: postUrl,
        mainEntityOfPage: postUrl,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Person',
            name: 'Kim Yeon Jin',
            url: siteUrl,
        },
        publisher: {
            '@type': 'Person',
            name: 'Kim Yeon Jin',
        },
        image: `${siteUrl}/images/og-cover.png`,
    };

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="mb-2 text-3xl font-bold text-[#c9d6e9]">
                        404
                    </h1>
                    <p className="text-[#5e7592]">Post not found</p>
                </div>
            </div>
        );
    }
    return (
        <article className="min-h-screen bg-background font-sans text-foreground">
            <div className="site-shell">
                <div className="mx-auto max-w-[1280px]">
                    <nav className="mb-5">
                        <Link
                            href="/"
                            className="blog-utility flex items-center gap-2 hover:border-[#2f63d6] hover:text-[#2f63d6]"
                        >
                            <ArrowLeft size={16} />
                            Back to Portfolio
                        </Link>
                    </nav>

                    <header className="blog-shell px-6 py-7 md:px-8 md:py-8">
                        <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
                            {post.tags &&
                                post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-[10px] border border-[rgba(16,32,48,0.08)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#31567e]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                        </div>

                        <h1
                            title={post.title}
                            className="animate-fade-in-up delay-100 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#102030] md:text-[2.5rem]"
                        >
                            {post.title}
                        </h1>

                        <div className="mt-7 flex flex-wrap items-center gap-6 text-sm font-medium text-[#5e7592] animate-fade-in-up delay-200">
                            <div className="flex items-center gap-2">
                                <div className="rounded-[10px] border border-black/10 bg-white/80 p-2 text-[#2f63d6]">
                                    <User size={16} />
                                </div>
                                <span>Kim Yeon Jin</span>
                            </div>
                            <div className="hidden h-1 w-1 rounded-full bg-[#a9bfdc] sm:block" />
                            <div className="flex items-center gap-2">
                                <div className="rounded-[10px] border border-black/10 bg-white/80 p-2 text-[#2f63d6]">
                                    <Calendar size={16} />
                                </div>
                                <time>{post.date}</time>
                            </div>
                        </div>
                    </header>

                    <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
                        <div className="blog-shell px-6 py-2 md:px-8 bg-white/80 rounded-md max-w-[100%]">
                            <Script
                                id={`article-schema-${slug}`}
                                type="application/ld+json"
                                strategy="afterInteractive"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify(articleJsonLd),
                                }}
                            />
                            <div className="markdown-body">
                                <ReactMarkdown
                                    rehypePlugins={[rehypeRaw]}
                                    components={markdownComponents}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                            <div className="mt-14 border-t border-black/10 pt-8">
                                <div className="rounded-[18px] border border-[rgba(16,32,48,0.08)] bg-white/70 p-6 text-left">
                                    <p className="mb-4 text-[15px] font-medium leading-7 text-[#314458]">
                                        Enjoyed this article? Check out more
                                        projects and posts on my portfolio.
                                    </p>
                                    <Link
                                        href={exploreHref}
                                        className="inline-flex items-center gap-2 rounded-[10px] border border-[#102030] bg-[#102030] px-4 py-2.5 text-sm font-semibold text-white hover:border-[#2f63d6] hover:bg-[#2f63d6]"
                                    >
                                        Explore this project
                                        <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {headings.length > 0 && (
                            <aside className="blog-shell self-start px-5 py-5 xl:sticky xl:top-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5e7592]">
                                    On This Page
                                </p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {headings.map((h) => (
                                        <li
                                            key={h.id}
                                            className={
                                                h.level === 1
                                                    ? ''
                                                    : h.level === 2
                                                      ? 'pl-3'
                                                      : 'pl-6 text-[#5e7592]'
                                            }
                                        >
                                            <a
                                                href={`#${h.id}`}
                                                className="text-[#102030] hover:text-[#2f63d6]"
                                            >
                                                {h.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
