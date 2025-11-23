// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto py-20 px-6 min-h-screen">
            <h1 className="text-4xl font-bold mb-12 text-slate-900">
                Dev Log & Troubleshooting
            </h1>

            <div className="grid gap-8">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="block group"
                    >
                        <article className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
                                    {post.tags[0]}
                                </span>
                                <time className="text-sm text-slate-500">
                                    {post.date}
                                </time>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition mb-2">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 line-clamp-2">
                                {post.desc}
                            </p>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
