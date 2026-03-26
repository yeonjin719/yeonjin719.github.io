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
            className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[#102030] backdrop-blur hover:-translate-y-0.5 hover:border-[#2f63d6] hover:text-[#2f63d6] hover:shadow-[0_14px_34px_rgba(47,99,214,0.12)]"
            download={download}
        >
            {icon}
            <span className="text-[13px] font-medium">{label}</span>
        </a>
    );
}
