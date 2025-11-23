export default function SocialLink({
    href,
    icon,
    label,
    download,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    download?: boolean;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="p-3.5 bg-white rounded-full shadow-sm hover:shadow-md hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 border border-slate-200 text-slate-600 group relative"
            download={download}
        >
            {icon}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </a>
    );
}
