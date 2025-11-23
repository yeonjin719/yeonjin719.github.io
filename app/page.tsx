import PortfolioClient from './PortfolioClient';
// import { blogPosts as staticPosts } from './data';
import { getSortedPostsData } from '@/lib/posts';

export default async function Page() {
    // 서버에서 MDX 메타데이터를 읽어 클라이언트에 전달 (없으면 정적 데이터 사용)
    const posts = getSortedPostsData().map((post) => ({
        slug: post.slug,
        title: post.title,
        desc: post.desc,
        date: post.date,
        tags: post.tags,
    }));

    const blogPosts = posts.length > 0 ? posts : [];

    return <PortfolioClient blogPosts={blogPosts} />;
}
