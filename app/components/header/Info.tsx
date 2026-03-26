import { profile } from '@/app/data';
import Link from 'next/link';
import Image from 'next/image';

export function Info() {
    return (
        <div className="flex w-full justify-between">
            <div className="flex flex-col">
                <div className="grid w-full gap-4 md:grid-cols-[minmax(0,1fr)_200px] md:items-start xl:grid-cols-[minmax(0,1fr)_240px] xl:gap-6">
                    <div className="min-w-0">
                        <div className="eyebrow">
                            <span>Portfolio 2026</span>
                            <span>Seoul Based</span>
                        </div>

                        <h1 className="mt-4 font-display text-[2.75rem] leading-[0.96] tracking-[-0.05em] text-[#102030] md:text-[3.3rem] xl:text-[3.65rem]">
                            {profile.name}
                        </h1>

                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f63d6] md:text-xs">
                            {profile.role}
                        </p>
                    </div>
                </div>

                <p className="mt-4 max-w-[62ch] text-[1.08rem] break-keep leading-[1.5] text-[#162536] md:text-[1.2rem]">
                    {profile.slogan}. <br />
                    사용자 흐름이 자연스럽고 유지보수 가능한 UI를 만드는 데
                    집중합니다.
                </p>

                <p className="mt-4 max-w-[62ch] text-[14px] break-keep leading-6 text-[#495b70]">
                    복잡한 상태와 긴 운영 플로우를 정리된 인터페이스로 풀어내는
                    작업을 선호합니다.
                    <br /> 제품 관점, 접근성, 협업 효율이 동시에 살아있는
                    프론트엔드를 지향합니다.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full bg-[#102030] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,32,48,0.18)] hover:-translate-y-0.5 hover:bg-[#2f63d6]"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#102030] backdrop-blur hover:-translate-y-0.5 hover:border-[#2f63d6] hover:text-[#2f63d6]"
                    >
                        Read Dev Logs
                    </Link>
                </div>
            </div>
            <figure className="relative mx-auto w-full max-w-[220px] md:mx-0 max-[768px]:hidden">
                <div className="relative overflow-hidden rounded-[26px] border border-[rgba(45,106,227,0.16)] bg-[rgba(244,249,255,0.98)] p-2.5 shadow-[0_20px_52px_rgba(45,106,227,0.14)]">
                    <Image
                        width={460}
                        height={560}
                        src="/images/profile_clean.png"
                        alt="Kim Yeonjin Profile Image"
                        className="h-auto w-full object-cover grayscale-[4%]"
                    />
                </div>
            </figure>
        </div>
    );
}
