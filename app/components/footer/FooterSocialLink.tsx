export default function FooterSocialLink({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label?: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-hover) text-[#8ea0bd] transition-all duration-300 hover:bg-(--accent) hover:text-[#0a1128]"
        >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </span>
        </a>
    );
}
