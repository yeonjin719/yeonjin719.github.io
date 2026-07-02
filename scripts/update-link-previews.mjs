import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'posts');
const outputFile = path.join(process.cwd(), 'app/data/linkPreviews.ts');
const urlPattern = /https?:\/\/[^\s<>)"']+/g;
const markdownLinkPattern = /\[[^\]]+\]\((https?:\/\/[^)\s]+)\)/g;

function decodeHtml(value = '') {
    return value
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .trim();
}

function readMeta(html, keys) {
    for (const key of keys) {
        const pattern = new RegExp(
            `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["'][^>]*>|<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["'][^>]*>`,
            'i'
        );
        const match = html.match(pattern);
        const value = match?.[1] || match?.[2];
        if (value) return decodeHtml(value);
    }
}

function readTitle(html) {
    return decodeHtml(html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]);
}

function validTitle(title) {
    if (!title || /^just a moment/i.test(title)) return undefined;
    return title;
}

function absoluteUrl(base, value) {
    if (!value) return undefined;
    try {
        return new URL(value, base).toString();
    } catch {
        return undefined;
    }
}

function npmPackageName(url) {
    return new URL(url).pathname.match(/^\/package\/([^/]+)/)?.[1];
}

async function fetchNpmPreview(url) {
    const name = npmPackageName(url);
    if (!name) return;

    try {
        const response = await fetch(`https://registry.npmjs.org/${name}`, {
            headers: { accept: 'application/json' },
            signal: AbortSignal.timeout(5000),
        });
        const pkg = await response.json();

        return {
            title: pkg.name || name,
            description: pkg.description,
            siteName: `npm v${pkg['dist-tags']?.latest || ''}`.trim(),
        };
    } catch {
        return {
            title: `npm: ${name}`,
            siteName: 'npm',
        };
    }
}

async function collectUrls() {
    const files = (await readdir(postsDir)).filter((file) => /\.mdx?$/.test(file));
    const urls = new Set();

    for (const file of files) {
        const content = await readFile(path.join(postsDir, file), 'utf8');
        for (const match of content.matchAll(markdownLinkPattern)) {
            urls.add(match[1]);
        }
        for (const match of content.matchAll(urlPattern)) {
            urls.add(match[0]);
        }
    }

    return [...urls].sort();
}

async function fetchPreview(url) {
    try {
        if (new URL(url).hostname === 'www.npmjs.com') {
            return await fetchNpmPreview(url);
        }

        const response = await fetch(url, {
            headers: { 'user-agent': 'Mozilla/5.0 link-preview-bot' },
            signal: AbortSignal.timeout(5000),
        });
        const html = await response.text();
        const host = new URL(url).hostname.replace(/^www\./, '');

        return {
            title:
                validTitle(readMeta(html, ['og:title', 'twitter:title'])) ||
                validTitle(readTitle(html)) ||
                host,
            description: readMeta(html, ['og:description', 'description', 'twitter:description']),
            image: absoluteUrl(url, readMeta(html, ['og:image', 'twitter:image'])),
            siteName: readMeta(html, ['og:site_name']) || host,
        };
    } catch {
        return {};
    }
}

const entries = Object.fromEntries(
    await Promise.all(
        (await collectUrls()).map(async (url) => [url, await fetchPreview(url)])
    )
);

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(
    outputFile,
    `export type LinkPreview = {
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
};

export const linkPreviews: Record<string, LinkPreview> = ${JSON.stringify(entries, null, 4)};
`,
    'utf8'
);
