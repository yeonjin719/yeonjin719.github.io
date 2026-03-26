import type { Metadata } from 'next';
import {
    Noto_Sans_KR,
    JetBrains_Mono,
    Cormorant_Garamond,
} from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
    variable: '--font-noto-sans-kr',
    subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
    variable: '--font-cormorant-garamond',
    subsets: ['latin'],
    weight: ['500', '600', '700'],
});

const siteUrl = 'https://yeonjin719.github.io';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Kim Yeon Jin | Frontend Engineer & DX Enthusiast',
        template: '%s | Kim Yeon Jin',
    },
    description:
        'Portfolio and blog by Kim Yeon Jin, a frontend engineer focused on accessible UI, scalable systems, and thoughtful developer experience.',
    keywords: [
        'Kim Yeon Jin',
        'Frontend Engineer',
        'React',
        'TypeScript',
        'Portfolio',
        'Web Accessibility',
        'Korea Frontend',
    ],
    authors: [
        {
            name: 'Kim Yeon Jin',
            url: siteUrl,
        },
    ],
    creator: 'Kim Yeon Jin',
    publisher: 'Kim Yeon Jin',
    openGraph: {
        title: 'Kim Yeon Jin | Frontend Engineer & DX Enthusiast',
        description:
            'Explore featured projects, engineering blogs, and experience highlights by frontend developer Kim Yeon Jin.',
        url: siteUrl,
        siteName: 'Kim Yeon Jin Portfolio',
        locale: 'ko_KR',
        type: 'website',
        images: [
            {
                url: '/images/og-cover.png',
                width: 1200,
                height: 630,
                alt: 'Kim Yeon Jin Portfolio preview',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    icons: {
        icon: '/images/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${notoSansKr.variable} ${jetBrainsMono.variable} ${cormorantGaramond.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
