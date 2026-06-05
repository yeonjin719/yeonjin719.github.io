'use client';

import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function PageViewTracker({ gaId }: { gaId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!window.gtag) {
            return;
        }

        const search = searchParams.toString();
        const pagePath = search ? `${pathname}?${search}` : pathname;

        window.gtag('config', gaId, {
            page_path: pagePath,
        });
    }, [gaId, pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    if (!GA_ID) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { send_page_view: false });
                `}
            </Script>
            <Suspense fallback={null}>
                <PageViewTracker gaId={GA_ID} />
            </Suspense>
        </>
    );
}
