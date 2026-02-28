export default function ProjectLink({
    href,
    icon,
    text,
    primary = false,
}: {
    href: string;
    icon: React.ReactNode;
    text: string;
    primary?: boolean;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className={`inline-flex text-nowrap items-center gap-1.5 px-3 py-1.5 text-xs font-medium border transition-colors ${
                primary
                    ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900'
            }`}
        >
            {icon}
            {text}
        </a>
    );
}
