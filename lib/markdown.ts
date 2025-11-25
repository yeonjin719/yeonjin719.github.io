type Heading = {
    level: number;
    text: string;
    id: string;
};

export function slugify(text: string) {
    return (
        text
            .toLowerCase()
            // 한글 + 영문 + 숫자 + 공백/하이픈만 남기기
            .replace(/[^\w\uAC00-\uD7A3\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
    );
}

export function extractHeadings(markdown: string): Heading[] {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: Heading[] = [];
    let match: RegExpExecArray | null;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length; // # 개수 = h레벨
        const text = match[2].trim();
        const id = slugify(text);
        headings.push({ level, text, id });
    }

    return headings;
}
