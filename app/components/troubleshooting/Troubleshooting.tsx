import { ArrowRight, BookOpen } from 'lucide-react';
import SectionTitle from '@/app/components/common/SectionTitle';
import Link from 'next/link';

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
        <section className="section-shell">
            <div className="px-5 py-5 md:px-6 md:py-6">
                <SectionTitle
                    icon={<BookOpen className="text-slate-700" />}
                    title="Troubleshooting"
                />

                {!blogPostsData || blogPostsData.length === 0 ? (
                    <div className="panel-card border-dashed py-12 text-center">
                        <p className="text-base leading-relaxed text-[#5e7592]">
                            아직 작성된 글이 없습니다.
                            <br />
                            <code>posts</code> 폴더에 <code>.mdx</code> 파일을
                            추가해보세요!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-2.5">
                        {blogPostsData.map((post, index) => (
                            <Link
                                key={index}
                                href={`/blog/${post.slug}`}
                                className="block group"
                            >
                                <article className="panel-card px-4 py-4 hover:-translate-y-0.5 hover:border-[#2f63d6]/25">
                                    <div className="mb-2.5 flex items-center gap-2">
                                        <span className="rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f63d6]">
                                            {post.tags && post.tags[0]
                                                ? post.tags[0]
                                                : 'Blog'}
                                        </span>
                                        <span className="text-[11px] text-[#5e7592]">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="mb-1.5 text-[1.25rem] font-semibold leading-tight tracking-[-0.03em] text-[#102030] md:text-[1.4rem]">
                                        {post.title}
                                    </h3>

                                    <p className="mb-3 line-clamp-2 text-[14px] leading-6 text-[#3d3840]">
                                        {post.desc}
                                    </p>

                                    <div className="mt-auto flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f665f] group-hover:text-[#2f63d6]">
                                        Read Article
                                        <ArrowRight
                                            size={13}
                                            className="ml-1 group-hover:translate-x-0.5"
                                        />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
