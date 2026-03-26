import { Linkedin, Github, Mail } from 'lucide-react';
import FooterSocialLink from './FooterSocialLink';
import { profile } from '../../data';

export default function Footer() {
    return (
        <footer className="px-5 pb-8 md:px-6 lg:px-7">
            <div className="mx-auto max-w-[1480px]">
                <div className="section-shell px-5 py-5 md:px-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-medium text-[#17161d]">
                        © {new Date().getFullYear()} {profile.name}
                            </p>
                            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f665f]">
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
                </div>
            </div>
        </footer>
    );
}
