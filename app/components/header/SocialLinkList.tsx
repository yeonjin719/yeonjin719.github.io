import SocialLink from '@/app/components/header/SocialLink';
import { Github, Mail, Linkedin, BookText } from 'lucide-react';
import { TProfile } from '@/app/type/type';

export default function SocialLinkList({ profile }: { profile: TProfile }) {
    return (
        <div className="flex flex-wrap gap-1.5 pt-1">
            <SocialLink
                href={`mailto:${profile.email}`}
                download={false}
                icon={<Mail size={16} />}
                label="Email"
            />
            <SocialLink
                href={profile.github}
                icon={<Github size={16} />}
                label="GitHub"
                download={false}
            />
            <SocialLink
                href={profile.linkedIn}
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                download={false}
            />
            <SocialLink
                href={profile.blog}
                icon={<BookText size={16} />}
                label="Blog"
                download={false}
            />
        </div>
    );
}
