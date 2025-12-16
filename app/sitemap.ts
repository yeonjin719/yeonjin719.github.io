import type { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';

const siteUrl = 'https://yeonjin719.github.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getSortedPostsData();

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...baseRoutes, ...blogRoutes];
}
