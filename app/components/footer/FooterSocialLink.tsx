export default function FooterSocialLink({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#102030] hover:-translate-y-0.5 hover:border-[#2f63d6] hover:text-[#2f63d6]"
        >
            {icon}
        </a>
    );
}
