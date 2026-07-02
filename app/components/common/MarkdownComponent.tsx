import { Components } from 'react-markdown';
import { Children, isValidElement, ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { linkPreviews } from '@/app/data/linkPreviews';
import { slugify } from '@/lib/markdown';

const urlPattern = /^https?:\/\/\S+$/;

function isBadPreviewTitle(title?: string) {
    return !title || /^just a moment/i.test(title);
}

function fallbackLabel(href: string, text: string, host: string) {
    if (text && text !== href && !isBadPreviewTitle(text)) return text;

    const packageName = href.match(/npmjs\.com\/package\/([^/?#]+)/)?.[1];
    if (packageName) return `npm: ${packageName}`;

    return host;
}

function npmPackageName(href: string) {
    return href.match(/npmjs\.com\/package\/([^/?#]+)/)?.[1];
}

function textFromChildren(children: ReactNode): string {
    return Children.toArray(children)
        .map((child) => {
            if (typeof child === 'string' || typeof child === 'number') {
                return String(child);
            }
            if (isValidElement<{ children?: ReactNode }>(child)) {
                return textFromChildren(child.props.children);
            }
            return '';
        })
        .join('');
}

function LinkCard({ href, children }: { href: string; children: ReactNode }) {
    const text = textFromChildren(children).trim();
    const host = new URL(href).hostname.replace(/^www\./, '');
    const preview = linkPreviews[href];
    const npmName = npmPackageName(href);
    const label = isBadPreviewTitle(preview?.title) || preview?.title === host
        ? fallbackLabel(href, text, host)
        : preview.title;
    const detail = preview?.siteName || (label === host ? href : host);

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group my-6 grid gap-4 rounded-xl border border-(--line) bg-(--surface-hover) p-4 no-underline transition-colors hover:border-(--accent)/50 hover:bg-(--surface-strong) sm:grid-cols-[minmax(0,1fr)_180px]"
            style={{ textDecoration: 'none' }}
        >
            <span className="flex min-w-0 items-center justify-between gap-4">
                <span className="min-w-0">
                    <span className="mb-2 inline-flex rounded-md border border-(--line) px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                        {detail}
                    </span>
                    <span className="line-clamp-2 text-base font-bold leading-snug text-white group-hover:text-(--accent)">
                        {label}
                    </span>
                    {preview?.description && (
                        <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                            {preview.description}
                        </span>
                    )}
                </span>
                <ExternalLink className="h-5 w-5 shrink-0 text-[var(--muted)] group-hover:text-(--accent)" />
            </span>
            {preview?.image && (
                <span className="block truncate text-base font-bold text-white group-hover:text-(--accent)">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={preview.image}
                        alt=""
                        className="h-28 w-full rounded-lg border border-(--line) object-cover sm:h-full"
                        loading="lazy"
                    />
                </span>
            )}
            {!preview?.image && npmName && (
                <span className="flex h-28 items-center justify-center rounded-lg border border-red-400/20 bg-[#cb3837] font-mono text-4xl font-black tracking-tighter text-white sm:h-full">
                    npm
                </span>
            )}
        </a>
    );
}

export const markdownComponents: Components = {
    pre({ children }) {
        return <>{children}</>;
    },
    p({ children }) {
        const nodes = Children.toArray(children).filter(
            (child) => typeof child !== 'string' || child.trim()
        );
        const text = textFromChildren(children).trim();
        const onlyChild = nodes[0];
        const urls = text.split(/\s+/).filter((part) => urlPattern.test(part));

        if (urlPattern.test(text)) {
            return <LinkCard href={text}>{text}</LinkCard>;
        }

        if (urls.length > 1 && urls.join('') === text.replace(/\s+/g, '')) {
            return (
                <>
                    {urls.map((url) => (
                        <LinkCard key={url} href={url}>
                            {url}
                        </LinkCard>
                    ))}
                </>
            );
        }

        if (
            nodes.length === 1 &&
            isValidElement<{ href?: string; children?: ReactNode }>(onlyChild) &&
            onlyChild.props.href &&
            urlPattern.test(onlyChild.props.href)
        ) {
            return (
                <LinkCard href={onlyChild.props.href}>
                    {onlyChild.props.children}
                </LinkCard>
            );
        }

        return <p>{children}</p>;
    },
    a({ href, children }) {
        if (!href) {
            return <>{children}</>;
        }

        return (
            <a href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    },
    code({ className, children, ...props }) {
        const codeString = String(children).replace(/\n$/, '');
        const match = /language-(\w+)/.exec(className || '');
        const lang = match?.[1];
        if (!lang && !codeString.includes('\n')) {
            return (
                <code
                    className="px-1.5 py-0.5 mx-0.5 rounded-md bg-(--surface-strong) border border-(--line) font-mono text-[0.85em] text-(--accent)"
                    {...props}
                >
                    {children}
                </code>
            );
        }
        return <CodeBlock code={codeString} lang={lang} />;
    },
    h2({ children, ...props }) {
        const text = String(children);
        const id = slugify(text);
        return (
            <h2 id={id} className="mt-10 mb-3 text-2xl font-bold" {...props}>
                {children}
            </h2>
        );
    },
    h3({ children, ...props }) {
        const text = String(children);
        const id = slugify(text);
        return (
            <h3 id={id} className="mt-8 mb-2 text-xl font-semibold" {...props}>
                {children}
            </h3>
        );
    },
};
