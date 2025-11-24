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
            className={`flex text-nowrap items-center gap-2 px-5 w-fit py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-0.5 ${
                primary
                    ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-md hover:shadow-indigo-500/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-900 hover:text-slate-900 shadow-sm'
            }`}
        >
            {icon}
            {text}
        </a>
    );
}
