import { profile } from '@/app/data';
import Image from 'next/image';
import SocialLinkList from '@/app/components/header/SocialLinkList';
import Education from '@/app/components/header/Education';
import { Info } from '@/app/components/header/Info';
export default function Header() {
    return (
        <header className="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-12 border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 items-start animate-fade-in-up">
                <div className="space-y-6">
                    <Info />
                    <SocialLinkList profile={profile} />
                    <Education />
                </div>

                <figure className="hidden md:flex flex-col items-start gap-3">
                    <div className="w-full border border-slate-200 bg-white p-2.5">
                        <Image
                            width={460}
                            height={560}
                            src="/images/profile_clean.png"
                            alt="Kim Yeonjin Profile Image"
                            className="w-full h-auto object-cover grayscale-[6%]"
                        />
                    </div>
                    <figcaption className="text-[11px] text-slate-500 leading-relaxed">
                        Seoul based
                        <br />
                        Open to frontend roles
                    </figcaption>
                </figure>
            </div>
        </header>
    );
}
