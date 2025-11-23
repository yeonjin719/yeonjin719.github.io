import { ArrowRight, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

export default function DevLog({
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
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50 -skew-y-3 origin-top-left scale-110 -z-10" />
            <div className="max-w-5xl mx-auto">
                <SectionTitle
                    icon={<BookOpen className="text-white" />}
                    title="Dev Log & Troubleshooting"
                />

                {/* posts 폴더가 비어있을 경우 안내 메시지 */}
                {!blogPostsData || blogPostsData.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                        <p className="text-slate-500 text-lg">
                            아직 작성된 글이 없습니다.
                            <br />
                            <code>posts</code> 폴더에 <code>.mdx</code> 파일을
                            추가해보세요!
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {blogPostsData.map((post, index) => (
                            <Link
                                key={index}
                                href={`/blog/${post.slug}`}
                                className="block group h-full"
                            >
                                <article className="h-full bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full uppercase tracking-wide border border-indigo-100">
                                            {post.tags && post.tags[0]
                                                ? post.tags[0]
                                                : 'Blog'}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed grow">
                                        {post.desc}
                                    </p>

                                    <div className="mt-auto flex items-center text-sm font-bold text-indigo-600 group-hover:gap-2 transition-all">
                                        Read Article{' '}
                                        <ArrowRight
                                            size={16}
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
