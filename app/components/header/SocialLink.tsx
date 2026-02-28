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
    const openInNewTab = !download;

    return (
        <a
            href={href}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noreferrer' : undefined}
            aria-label={label}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            download={download}
        >
            {icon}
            <span className="text-[13px] font-medium">
                {label}
            </span>
        </a>
    );
}
