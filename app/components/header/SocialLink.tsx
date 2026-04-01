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
            className="group/link flex items-center justify-center gap-2.5 rounded-xl border border-(--line-strong) bg-(--surface-hover) px-4 py-3 text-[#afbdd5] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/50 hover:bg-(--accent)/10 hover:text-(--accent) hover:shadow-[0_8px_20px_rgba(0,229,255,0.15)] focus:ring-2 focus:ring-(--accent)/50 focus:outline-none"
            download={download}
        >
            <span className="transition-transform duration-300 group-hover/link:scale-110 group-hover/link:rotate-[5deg]">
                {icon}
            </span>
            <span className="text-[13px] font-semibold tracking-wide">
                {label}
            </span>
        </a>
    );
}
