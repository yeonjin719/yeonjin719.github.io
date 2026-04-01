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
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="mb-2 font-display text-4xl font-bold text-white">
                        404
                    </h1>
                    <p className="font-mono tracking-widest uppercase text-[#5e7592]">
                        Post not found
                    </p>
                </div>
            </div>
        );
    }
    return (
        <article className="min-h-screen relative w-full pt-20 md:pt-32 pb-24 px-5 z-10 mx-auto">
            <div className="mx-auto max-w-[1080px]">
                <nav className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#8ea0bd] hover:text-(--accent) transition-colors group"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        Back to Notes
                    </Link>
                </nav>

                <header className="mb-10 md:mb-14 border-b border-(--line) pb-8">
                    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
                        {post.tags &&
                            post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-sm border border-(--accent)/10 bg-(--accent)/5 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-(--accent) shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>

                    <h1
                        title={post.title}
                        className="animate-fade-in-up delay-100 font-display text-3xl md:text-5xl font-bold leading-tight text-white"
                    >
                        {post.title}
                    </h1>

                    <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-[#8ea0bd] animate-fade-in-up delay-200">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-(--accent)" />
                            <span>Kim Yeon Jin</span>
                        </div>
                        <div className="hidden h-1 w-1 rounded-full bg-(--line) sm:block" />
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-(--accent)" />
                            <time>{post.date}</time>
                        </div>
                    </div>
                </header>

                <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_260px] items-start">
                    <div className="w-full min-w-0 max-w-full">
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

                        <div className="mt-16 border-t border-(--line) pt-10">
                            <div className="rounded-2xl border border-(--line) bg-(--surface-hover) p-8 text-left">
                                <p className="mb-4 text-[15px] font-medium leading-relaxed text-[#afbdd5]">
                                    Enjoyed this article? Check out more
                                    projects and posts on my portfolio.
                                </p>
                                <Link
                                    href={exploreHref}
                                    className="inline-flex items-center gap-2 rounded-lg border border-(--accent)/20 bg-(--accent)/10 px-5 py-3 text-sm font-semibold text-(--accent) hover:bg-(--accent) hover:text-[#0a1128] transition-colors group"
                                >
                                    Explore this project
                                    <ChevronRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {headings.length > 0 && (
                        <aside className="blog-shell px-6 py-6 xl:sticky xl:top-24 hidden xl:block">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#5e7592] mb-4">
                                On This Page
                            </p>
                            <ul className="space-y-3 text-sm font-medium">
                                {headings.map((h) => (
                                    <li
                                        key={h.id}
                                        className={
                                            h.level === 1
                                                ? ''
                                                : h.level === 2
                                                  ? 'pl-2'
                                                  : 'pl-4'
                                        }
                                    >
                                        <a
                                            href={`#${h.id}`}
                                            className="block text-[#8ea0bd] hover:text-(--accent) transition-colors break-keep"
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
        </article>
    );
}
