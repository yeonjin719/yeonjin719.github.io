import { Briefcase, ScrollText, Trophy } from 'lucide-react';

export default function getExperienceStyles(category: string) {
    switch (category) {
        case 'Award':
            return {
                bg: 'bg-amber-50',
                text: 'text-amber-700',
                border: 'border-amber-100',
                icon: <Trophy size={18} />,
            };
        case 'Certificate':
        case 'Education':
            return {
                bg: 'bg-blue-50',
                text: 'text-blue-700',
                border: 'border-blue-100',
                icon: <ScrollText size={18} />,
            };
        case 'Activity':
        default:
            return {
                bg: 'bg-indigo-50',
                text: 'text-indigo-700',
                border: 'border-indigo-100',
                icon: <Briefcase size={18} />,
            };
    }
}
