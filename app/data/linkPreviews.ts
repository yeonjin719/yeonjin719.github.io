export type LinkPreview = {
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
};

export const linkPreviews: Record<string, LinkPreview> = {
    "https://chromium.googlesource.com/chromium/src/+/09514b7fbd4fb14ce12a43bc7f4807179612fa94": {},
    "https://chromium.googlesource.com/chromium/src/+/lkgr/third_party/blink/renderer/core/html/canvas/canvas_async_blob_creator.cc": {},
    "https://ehelper.vercel.app/": {},
    "https://github.com/2025-OSDC/colbrush": {
        "title": "GitHub - 2025-OSDC/colbrush: Colorblind theme library for colorblind people",
        "description": "Colorblind theme library for colorblind people. Contribute to 2025-OSDC/colbrush development by creating an account on GitHub.",
        "image": "https://opengraph.githubassets.com/81c7c844cef99141a10990d30903e15d73fa10d1d98b1cacf9370452c8a2c007/2025-OSDC/colbrush",
        "siteName": "GitHub"
    },
    "https://github.com/UMC-PRODUCT/umc-product-web": {
        "title": "GitHub - UMC-PRODUCT/legacy-cotton-web: 1기 웹프로덕트팀 - (구) 리크루팅 사이트",
        "description": "1기 웹프로덕트팀 - (구) 리크루팅 사이트. Contribute to UMC-PRODUCT/legacy-cotton-web development by creating an account on GitHub.",
        "image": "https://opengraph.githubassets.com/78be07131d305e3f56b763f57e74180f5e573830fde2cfa70746cfac28907442/UMC-PRODUCT/legacy-cotton-web",
        "siteName": "GitHub"
    },
    "https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=JAKO200518254314990": {},
    "https://www.colbrush.site/": {},
    "https://www.npmjs.com/package/colbrush": {
        "title": "colbrush",
        "description": "A React theme switching library that makes it easy to apply color-blind accessible UI themes",
        "siteName": "npm v1.23.0"
    }
};
