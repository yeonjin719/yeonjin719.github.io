import { Mail, Github, Linkedin, File, GraduationCap } from 'lucide-react';
import SocialLink from './SocialLink';
import { profile } from '../data';
import Image from 'next/image';
export default function Header() {
    return (
        <header className="flex max-w-5xl mx-auto py-24 px-6 md:py-40 relative">
            <div className="animate-fade-in-up space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 text-sm font-medium mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                    Hello, I&apos;m <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x bg-size-[200%_auto]">
                        {profile.name}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                    {profile.role} <br />
                    <span className="text-slate-500 text-lg font-normal mt-2 block">
                        {profile.slogan}
                    </span>
                </p>

                <div className="flex gap-4 pt-4">
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
                        label="Resume"
                        download={true}
                    />
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200/80">
                    <div className="flex items-start gap-5 group">
                        <div className="p-3.5 bg-white border border-indigo-100 rounded-2xl text-indigo-600 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:border-indigo-200 transition-all duration-300 flex-shrink-0">
                            <GraduationCap size={26} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                                Education
                            </h3>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-4 items-center justify-between">
                                    <p className="text-slate-900 font-bold text-lg leading-tight tracking-tight">
                                        상명대학교 경영학부
                                    </p>
                                    <p className="text-sm">2027.02 졸업 예정</p>
                                </div>
                                <div className="flex items-center gap-2.5 flex-wrap">
                                    <span className="text-slate-700 font-medium">
                                        상명대학교 컴퓨터과학과
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100/50">
                                        복수전공
                                    </span>
                                    {/* 학점 정보 추가 */}
                                    <span className="h-1 w-1 rounded-full bg-slate-300 mx-1"></span>
                                    <span className="text-slate-500 text-sm font-medium">
                                        GPA 4.19 / 4.5
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                width={100}
                height={100}
                src="images/profile.png"
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
        </header>
    );
}
