export type LinkPreview = {
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
};

export const linkPreviews: Record<string, LinkPreview> = {
    "https://ehelper.vercel.app/": {
        "title": "eHelper",
        "siteName": "ehelper.vercel.app"
    },
    "https://github.com/2025-OSDC/colbrush": {
        "title": "GitHub - 2025-OSDC/colbrush: Colorblind theme library for colorblind people",
        "description": "Colorblind theme library for colorblind people. Contribute to 2025-OSDC/colbrush development by creating an account on GitHub.",
        "image": "https://opengraph.githubassets.com/85e7e01a3ecbfe3b25f49b69983c107e14cdbffc98fa429e81b4bf0f861e49d8/2025-OSDC/colbrush",
        "siteName": "GitHub"
    },
    "https://github.com/UMC-PRODUCT/umc-product-web": {
        "title": "GitHub - UMC-PRODUCT/umc-product-web: 1기 웹프로덕트팀 - (구) 리크루팅 사이트",
        "description": "1기 웹프로덕트팀 - (구) 리크루팅 사이트. Contribute to UMC-PRODUCT/umc-product-web development by creating an account on GitHub.",
        "image": "https://opengraph.githubassets.com/3a94a783c6207afc69865e200e3789150424ea0f9a6b436ac7c0cba98b29f645/UMC-PRODUCT/umc-product-web",
        "siteName": "GitHub"
    },
    "https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=JAKO200518254314990": {},
    "https://www.colbrush.site/": {
        "title": "colbrush",
        "siteName": "colbrush.site"
    },
    "https://www.npmjs.com/package/colbrush": {
        "title": "colbrush",
        "description": "A React theme switching library that makes it easy to apply color-blind accessible UI themes",
        "siteName": "npm v1.23.0"
    }
};
