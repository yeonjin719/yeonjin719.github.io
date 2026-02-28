import { Linkedin, Github, Mail } from 'lucide-react';
import FooterSocialLink from './FooterSocialLink';
import { profile } from '../../data';

export default function Footer() {
    return (
        <footer className="py-10 px-6">
            <div className="max-w-5xl mx-auto border-t border-slate-300 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <p className="text-slate-900 text-sm font-medium">
                        © {new Date().getFullYear()} {profile.name}
                    </p>
                    <p className="text-[11px] mt-1 text-slate-500">
                        Built with Next.js and TypeScript
                    </p>
                </div>
                <div className="flex gap-2">
                    <FooterSocialLink
                        href={profile.github}
                        icon={<Github size={16} />}
                    />
                    <FooterSocialLink
                        href={profile.linkedIn}
                        icon={<Linkedin size={16} />}
                    />
                    <FooterSocialLink
                        href={`mailto:${profile.email}`}
                        icon={<Mail size={16} />}
                    />
                </div>
            </div>
        </footer>
    );
}
