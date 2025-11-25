import { Linkedin, Github, Mail } from 'lucide-react';
import FooterSocialLink from './FooterSocialLink';
import { profile } from '../../data';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 px-6 mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-soft-light"></div>
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="flex justify-center gap-8 mb-8">
                    <FooterSocialLink
                        href={profile.github}
                        icon={<Github size={20} />}
                    />
                    <FooterSocialLink
                        href={profile.linkedIn}
                        icon={<Linkedin size={20} />}
                    />
                    <FooterSocialLink
                        href={`mailto:${profile.email}`}
                        icon={<Mail size={20} />}
                    />
                </div>
                <p className="text-slate-400 text-sm font-medium">
                    © {new Date().getFullYear()} {profile.name}. All rights
                    reserved.
                </p>
                <p className="text-xs mt-3 text-slate-600">
                    Built with Next.js, Tailwind CSS & Lucide React
                </p>
            </div>
        </footer>
    );
}
