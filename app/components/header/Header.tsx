import { profile } from '@/app/data';
import Image from 'next/image';
import SocialLinkList from '@/app/components/header/SocialLinkList';
import Education from '@/app/components/header/Education';
import Scroll from '@/app/components/header/Scroll';
import { Info } from '@/app/components/header/Info';
export default function Header() {
    return (
        <header className="flex max-w-5xl mx-auto py-24 px-6 md:py-30 relative">
            <div className="animate-fade-in-up space-y-8 z-10 sm:justify-start justify-center flex flex-col w-full">
                <Info />
                <SocialLinkList profile={profile} />
                <Education />
            </div>
            <Image
                width={100}
                height={100}
                src="images/profile_clean.png"
                alt="Profile"
                className="
                absolute
                w-[450px]
                right-0
                top-1/2 -translate-y-1/2
                z-0
                transition-all duration-500 ease-in-out
                opacity-0 scale-95   
                md:opacity-100 md:scale-100 
                "
            />
            <Scroll />
        </header>
    );
}
