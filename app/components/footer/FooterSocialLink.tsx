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
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
        >
            {icon}
        </a>
    );
}
