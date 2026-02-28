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
            className="inline-flex items-center justify-center w-8 h-8 border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
        >
            {icon}
        </a>
    );
}
