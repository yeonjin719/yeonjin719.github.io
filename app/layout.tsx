import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
