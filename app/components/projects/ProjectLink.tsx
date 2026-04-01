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
                    ? 'border-transparent bg-[linear-gradient(135deg,#86f0dd,#77b8ff)] text-[#06111b] shadow-[0_16px_36px_rgba(72,206,214,0.24)] hover:-translate-y-0.5 hover:brightness-105'
                    : 'border-white/10 bg-white/6 text-white/88 hover:-translate-y-0.5 hover:border-[#86f0dd] hover:text-white'
            }`}
        >
            {icon}
            {text}
        </a>
    );
}
