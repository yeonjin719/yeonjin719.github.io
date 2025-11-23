import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 마크다운 파일이 저장된 폴더 경로
const postsDirectory = path.join(process.cwd(), 'posts');

interface RawFrontMatter {
    date?: string | Date;
    title?: string;
    desc?: string;
    tags?: string[] | string;
}

export interface PostMeta {
    slug: string;
    date: string;
    title: string;
    desc: string;
    tags: string[];
}

export interface PostData extends PostMeta {
    content: string;
}

// frontmatter 정규화 함수 (직렬화 안전하게)
function normalizeFrontMatter(slug: string, data: RawFrontMatter): PostMeta {
    const rawDate = data.date;
    let date = '';

    if (rawDate instanceof Date) {
        // YYYY-MM-DD 형식으로 고정 (서버/클라이언트 동일)
        date = rawDate.toISOString().slice(0, 10);
    } else if (typeof rawDate === 'string') {
        date = rawDate;
    }

    let tags: string[] = [];
    if (Array.isArray(data.tags)) {
        tags = data.tags;
    } else if (typeof data.tags === 'string') {
        // "tag1, tag2" 이런 식으로 적었을 경우 대비
        tags = data.tags
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean);
    }

    return {
        slug,
        date,
        title: data.title ?? slug,
        desc: data.desc ?? '',
        tags,
    };
}

export function getSortedPostsData(): PostMeta[] {
    // posts 폴더가 없으면 빈 배열 반환 (에러 방지)
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData: PostMeta[] = fileNames
        .filter(
            (fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md')
        )
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, ''); // .md / .mdx 모두 대응
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);
            const meta = normalizeFrontMatter(
                slug,
                matterResult.data as RawFrontMatter
            );

            return meta;
        });

    // 날짜순 정렬 (최신 글이 먼저 오게)
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const meta = normalizeFrontMatter(
        slug,
        matterResult.data as RawFrontMatter
    );

    return {
        ...meta,
        content: matterResult.content,
    };
}
