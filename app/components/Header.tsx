import { Mail, Github, Linkedin, File } from 'lucide-react';
import SocialLink from './SocialLink';
import { profile } from '../data';
export default function Header() {
    return (
        <header className="flex max-w-5xl mx-auto py-24 px-6 md:py-40 relative">
            <div className="animate-fade-in-up space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 text-sm font-medium mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                    Hello, I&apos;m <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x bg-size-[200%_auto]">
                        {profile.name}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                    {profile.role} <br />
                    <span className="text-slate-500 text-lg font-normal mt-2 block">
                        {profile.slogan}
                    </span>
                </p>

                <div className="flex gap-4 pt-4">
                    <SocialLink
                        href={`mailto:${profile.email}`}
                        download={false}
                        icon={<Mail size={22} />}
                        label="Email"
                    />
                    <SocialLink
                        href={profile.github}
                        icon={<Github size={22} />}
                        label="GitHub"
                        download={false}
                    />
                    <SocialLink
                        href={profile.linkedIn}
                        icon={<Linkedin size={22} />}
                        label="LinkedIn"
                        download={false}
                    />
                    <SocialLink
                        href={'/YeonjinKim_resume.pdf'}
                        icon={<File size={22} />}
                        label="Resume"
                        download={true}
                    />
                </div>
            </div>
            <img
                src="images/profile.png"
                alt="Profile"
                className="absolute w-[450px] right-0"
            />
        </header>
    );
}
