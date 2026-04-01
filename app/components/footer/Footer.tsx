import { Linkedin, Github, Mail } from 'lucide-react';
import FooterSocialLink from './FooterSocialLink';
import { profile } from '../../data';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-(--line) py-12 md:max-w-5xl mx-auto relative z-10 w-full px-5">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-6">
                {/* Left Side: Copyright & Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 md:gap-2">
                    <p className="font-outfit text-[#8ea0bd] text-sm md:text-base font-semibold tracking-wide">
                        © {new Date().getFullYear()} {profile.name}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs text-[#5e7592] uppercase tracking-[0.15em]">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>

                {/* Right Side: Social Links */}
                <div className="flex items-center gap-4">
                    <FooterSocialLink
                        href={profile.github}
                        icon={<Github size={18} />}
                        label="GitHub"
                    />
                    <FooterSocialLink
                        href={profile.linkedIn}
                        icon={<Linkedin size={18} />}
                        label="LinkedIn"
                    />
                    <FooterSocialLink
                        href={`mailto:${profile.email}`}
                        icon={<Mail size={18} />}
                        label="Email"
                    />
                </div>
            </div>
        </footer>
    );
}
