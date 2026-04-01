import { profile } from '@/app/data';
import SocialLinkList from '@/app/components/header/SocialLinkList';
import { Link } from 'lucide-react';

export default function Connect() {
    return (
        <div className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-4xl border border-(--line) bg-(--surface) p-7 shadow-(--shadow-soft) backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-(--accent-strong)">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 z-0 bg-(--accent)/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--surface-hover) border border-(--line-strong) text-(--accent) group-hover:bg-(--accent)/10 group-hover:border-(--accent)/30 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-500">
                        <Link size={18} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#5e7592] group-hover:text-(--accent) transition-colors duration-300">
                        Connect
                    </p>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-(--accent) transition-colors duration-300">
                    Contact & Social
                </h3>

                <p className="mt-2 text-[15px] text-[#8ea0bd] font-medium leading-relaxed">
                    다양한 채널에서 소통하고
                    <br className="hidden sm:block" /> 인사이트를 기록합니다.
                </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-(--line-strong) group-hover:border-(--accent)/20 transition-colors duration-500">
                <SocialLinkList profile={profile} />
            </div>
        </div>
    );
}
