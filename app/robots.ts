import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

const siteUrl = 'https://yeonjin719.github.io';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: [`${siteUrl}/sitemap.xml`],
        host: siteUrl,
    };
}
