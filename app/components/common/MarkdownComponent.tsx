import { Components } from 'react-markdown';
import { CodeBlock } from './CodeBlock';
import { slugify } from '@/lib/markdown';

export const markdownComponents: Components = {
    code({ className, children, ...props }) {
        const codeString = String(children).replace(/\n$/, '');
        const match = /language-(\w+)/.exec(className || '');
        const lang = match?.[1];
        if (!lang) {
            return (
                <code
                    className="px-1 py-0.5 rounded bg-slate-100 font-mono text-[0.9em]"
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
