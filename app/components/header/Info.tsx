import { profile } from '@/app/data';
import Link from 'next/link';

export function Info() {
    return (
        <div className="flex flex-col items-start max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold mb-2">
                Portfolio / 2026
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.12]">
                {profile.name}
            </h1>

            <p className="text-[15px] md:text-lg font-medium text-slate-700 mt-2">
                {profile.role}
            </p>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-7 mt-3.5">
                {profile.slogan}. 사용자 흐름이 자연스럽고 유지보수 가능한 UI를
                만드는 데 집중합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                <Link
                    href="#projects"
                    className="inline-flex items-center bg-slate-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                    View Projects
                </Link>
                <Link
                    href="/blog"
                    className="inline-flex items-center bg-white text-slate-800 px-3.5 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                    Read Dev Logs
                </Link>
            </div>
        </div>
    );
}
