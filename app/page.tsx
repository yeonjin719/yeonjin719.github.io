import type { Metadata } from 'next';
import Header from '@/app/components/header/Header';
import Experiences from '@/app/components/experience/Experiences';
import Skills from '@/app/components/skills/Skills';
import Projects from '@/app/components/projects/Projects';
import GithubState from '@/app/components/githubState/GithubState';
import DevLog from '@/app/components/troubleshooting/Troubleshooting';
import Footer from '@/app/components/footer/Footer';
import ScrollProgress from '@/app/components/common/ScrollProgress';
import PageNavigator from '@/app/components/common/PageNavigator';
import SoftAuroraBackground from '@/app/components/common/SoftAuroraBackground';
import RevealOnScroll from '@/app/components/common/RevealOnScroll';
import { getSortedPostsData } from '@/lib/posts';
import { profile, projects, skills } from '@/app/data';
import { experiences } from '@/app/data/experiences';

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
    const highlightCards = [
        {
            label: 'Selected Projects',
            value: String(projects.length).padStart(2, '0'),
            description: '제품형 사이드 프로젝트와 운영성 높은 실전 작업',
        },
        {
            label: 'Experience Entries',
            value: String(experiences.length).padStart(2, '0'),
            description: '활동, 교육, 수상, 자격을 묶은 개인 아카이브',
        },
        {
            label: 'Dev Notes',
            value: String(blogPosts.length).padStart(2, '0'),
            description: '문제 해결 과정과 구현 판단을 남긴 기록',
        },
    ];
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
                Boolean,
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
        <div className="min-h-screen bg-background text-foreground font-sans">
            <SoftAuroraBackground />
            <ScrollProgress />
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: structuredData }}
            />
            <main id="main-content" role="main" className="relative">
                <div className="site-shell">
                    <div id="top" />
                    <PageNavigator />
                    <div className="scene-stack">
                        <section className="scene-panel scene-panel-intro">
                            <RevealOnScroll>
                                <Header />
                                <section className="overview-grid mt-5">
                                    {highlightCards.map((card) => (
                                        <article
                                            key={card.label}
                                            className="overview-card"
                                        >
                                            <p className="overview-card-label">
                                                {card.label}
                                            </p>
                                            <p className="overview-card-value">
                                                {card.value}
                                            </p>
                                            <p className="overview-card-description">
                                                {card.description}
                                            </p>
                                        </article>
                                    ))}
                                </section>
                            </RevealOnScroll>
                        </section>

                        <div className="page-sections">
                            {/* Featured Work Section */}
                            <section
                                className="section-group section-featured-work"
                                id="featured-work-section"
                            >
                                <RevealOnScroll>
                                    <div className="scene-shell">
                                        <div className="scene-content">
                                            <div className="section-break interactive-break">
                                                <p className="section-break-kicker">
                                                    01 / Featured Work
                                                </p>
                                                <h2 className="section-break-title">
                                                    Project Showcase
                                                </h2>
                                            </div>
                                            <Projects />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </section>

                            {/* Experience & Awards Section */}
                            <section
                                className="section-group section-experience"
                                id="experience"
                            >
                                <RevealOnScroll>
                                    <div className="scene-shell">
                                        <div className="scene-content">
                                            <div className="section-break interactive-break border-b-0! mb-0! md:mb-0!">
                                                <p className="section-break-kicker">
                                                    02 / Experience
                                                </p>
                                                <h2 className="section-break-title">
                                                    My Journey
                                                </h2>
                                                <p className="section-break-description">
                                                    활동, 교육, 수상, 자격을
                                                    시간순으로 정리한 경험
                                                    기록입니다.
                                                </p>
                                            </div>
                                            <Experiences />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </section>

                            {/* Technical Skills Section */}
                            <section
                                className="section-group section-skills"
                                id="skills"
                            >
                                <RevealOnScroll>
                                    <div className="scene-shell">
                                        <div className="scene-content">
                                            <div className="section-break interactive-break border-b-0! mb-0! md:mb-0!">
                                                <p className="section-break-kicker">
                                                    03 / Technical Skills
                                                </p>
                                                <h2 className="section-break-title">
                                                    Skill Stack
                                                </h2>
                                                <p className="section-break-description">
                                                    어떤 기술 조합으로
                                                    작업하는지 카테고리별로
                                                    정리했습니다.
                                                </p>
                                            </div>
                                            <Skills skills={skills} />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </section>

                            {/* GitHub Activity Section */}
                            <section
                                className="section-group section-github"
                                id="github-section"
                            >
                                <RevealOnScroll>
                                    <div className="scene-shell">
                                        <div className="scene-content">
                                            <div className="section-break interactive-break">
                                                <p className="section-break-kicker">
                                                    04 / Activity
                                                </p>
                                                <h2 className="section-break-title">
                                                    Contribution
                                                </h2>
                                                <p className="section-break-description">
                                                    꾸준한 코드 작업과 오픈소스
                                                    활동의 흐름을 보여줍니다.
                                                </p>
                                            </div>
                                            <GithubState />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </section>

                            {/* Dev Notes Section */}
                            <section
                                className="section-group section-writing"
                                id="writing-section"
                            >
                                <RevealOnScroll>
                                    <div className="scene-shell">
                                        <div className="scene-content">
                                            <div className="section-break interactive-break border-b-0! mb-0! md:mb-0!">
                                                <p className="section-break-kicker">
                                                    05 / Dev Log
                                                </p>
                                                <h2 className="section-break-title">
                                                    Insights
                                                </h2>
                                                <p className="section-break-description">
                                                    문제 해결 과정과 구현 판단을
                                                    담백하게 기록한 기술
                                                    블로그입니다.
                                                </p>
                                            </div>
                                            <DevLog blogPostsData={blogPosts} />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
