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
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-semibold ${
                primary
                    ? 'border-[#102030] bg-[#102030] text-white shadow-[0_16px_36px_rgba(16,32,48,0.18)] hover:-translate-y-0.5 hover:border-[#2f63d6] hover:bg-[#2f63d6]'
                    : 'border-black/10 bg-white/80 text-[#102030] hover:-translate-y-0.5 hover:border-[#2f63d6] hover:text-[#2f63d6]'
            }`}
        >
            {icon}
            {text}
        </a>
    );
}
