import Education from '@/app/components/header/Education';
import { Info } from '@/app/components/header/Info';
import Connect from './Connect';

export default function Header() {
    return (
        <header className="relative w-full animate-fade-in-up mt-12 md:mt-24 mb-20 text-center flex flex-col items-center">
            {/* Minimal, highly-focused Hero Section */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <Info />

                {/* Refined Contact & Education Dashboard below Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
                    <Connect />
                    <Education />
                </div>
            </div>
        </header>
    );
}
