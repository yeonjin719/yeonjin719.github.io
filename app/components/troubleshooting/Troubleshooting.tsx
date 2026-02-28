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
        <section className="py-14 md:py-16 px-6 relative border-b border-slate-200">
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<BookOpen className="text-slate-700" />}
                    title="Troubleshooting"
                />

                {/* posts 폴더가 비어있을 경우 안내 메시지 */}
                {!blogPostsData || blogPostsData.length === 0 ? (
                    <div className="text-center py-16 bg-white border border-dashed border-slate-300">
                        <p className="text-slate-500 text-base leading-relaxed">
                            아직 작성된 글이 없습니다.
                            <br />
                            <code>posts</code> 폴더에 <code>.mdx</code> 파일을
                            추가해보세요!
                        </p>
                    </div>
                ) : (
                    <div className="border border-slate-200 bg-white">
                        {blogPostsData.map((post, index) => (
                            <Link
                                key={index}
                                href={`/blog/${post.slug}`}
                                className="block group"
                            >
                                <article className="p-4 md:p-5 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-semibold uppercase tracking-wide border border-slate-200">
                                            {post.tags && post.tags[0]
                                                ? post.tags[0]
                                                : 'Blog'}
                                        </span>
                                        <span className="text-[11px] text-slate-500">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                                        {post.desc}
                                    </p>

                                    <div className="mt-auto flex items-center text-xs font-medium text-slate-700 group-hover:gap-1.5 transition-all">
                                        Read Article
                                        <ArrowRight
                                            size={13}
                                            className="ml-1"
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
