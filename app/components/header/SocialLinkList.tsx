import SocialLink from '@/app/components/header/SocialLink';
import { Github, Mail, Linkedin, File } from 'lucide-react';
import { TProfile } from '@/app/type/type';

export default function SocialLinkList({ profile }: { profile: TProfile }) {
    return (
        <div className="flex gap-4 pt-4 min-[767px]:justify-start justify-center">
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
                label="현재는 제공하지 않아요!"
                download={true}
            />
        </div>
    );
}
