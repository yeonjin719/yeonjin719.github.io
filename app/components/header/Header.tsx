import { profile } from '@/app/data';
import SocialLinkList from '@/app/components/header/SocialLinkList';
import Education from '@/app/components/header/Education';
import { Info } from '@/app/components/header/Info';

export default function Header() {
    return (
        <header className="section-shell animate-fade-in-up">
            <div className="px-5 py-5 md:px-6 md:py-6 xl:px-7 xl:py-7">
                <div>
                    <Info />
                </div>

                <div className="mt-4 flex max-w-[80%] flex-col gap-3 md:max-w-full lg:grid lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
                    <div className="panel-card">
                        <div className="px-4 py-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5e7592]">
                                Reach Out
                            </p>
                            <div className="mt-3">
                                <SocialLinkList profile={profile} />
                            </div>
                        </div>
                    </div>

                    <Education />
                </div>
            </div>
        </header>
    );
}
