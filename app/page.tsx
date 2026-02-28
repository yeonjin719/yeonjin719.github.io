import type { Metadata } from 'next';
import Header from '@/app/components/header/Header';
import Experiences from '@/app/components/experience/Experiences';
import Skills from '@/app/components/skills/Skills';
import Projects from '@/app/components/projects/Projects';
import GithubState from '@/app/components/githubState/GithubState';
import DevLog from '@/app/components/troubleshooting/Troubleshooting';
import Footer from '@/app/components/footer/Footer';
import { getSortedPostsData } from '@/lib/posts';
import { profile, projects, skills } from '@/app/data';

const siteUrl = 'https://yeonjin719.github.io';

export const metadata: Metadata = {
    title: 'Portfolio',
    description:
        'Explore highlighted projects, engineering logs, and experience from frontend developer Kim Yeon Jin.',
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        url: siteUrl,
        title: 'Portfolio',
        description:
            'Projects, skills, and developer logs crafted by frontend engineer Kim Yeon Jin.',
        type: 'website',
    },
};

export default async function Page() {
    const posts = getSortedPostsData().map((post) => ({
        slug: post.slug,
        title: post.title,
        desc: post.desc,
        date: post.date,
        tags: post.tags,
    }));

    const blogPosts = posts.length > 0 ? posts : [];
    const structuredDataObjects = [
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            description: profile.slogan,
            url: siteUrl,
            email: `mailto:${profile.email}`,
            image: `${siteUrl}/images/profile_clean.png`,
            sameAs: [profile.github, profile.linkedIn, profile.blog].filter(
                Boolean
            ),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Kim Yeon Jin Portfolio',
            url: siteUrl,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Featured Projects',
            itemListElement: projects.map((project, index) => {
                const anchor =
                    project.anchorId ??
                    project.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9가-힣-]/g, '');
                const fallbackUrl = `${siteUrl}/#${anchor}`;
                return {
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'CreativeWork',
                        name: project.title,
                        description: project.description,
                        url: project.links.demo ?? fallbackUrl,
                    },
                };
            }),
        },
    ];
    const structuredData = JSON.stringify(structuredDataObjects);

    return (
        <div className="min-h-screen text-slate-900 font-sans bg-slate-50">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: structuredData }}
            />
            <main id="main-content" role="main">
                <Header />
                <Experiences />
                <Skills skills={skills} />
                <Projects />
                <GithubState />
                <DevLog blogPostsData={blogPosts} />
            </main>
            <Footer />
        </div>
    );
}
