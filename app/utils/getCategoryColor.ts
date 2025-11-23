export default function getCategoryColor(category: string) {
    switch (category) {
        case 'Languages':
            return 'bg-amber-400';
        case 'Frameworks':
            return 'bg-cyan-400';
        case 'Styling':
            return 'bg-pink-400';
        case 'StateManagement':
            return 'bg-purple-400';
        default:
            return 'bg-indigo-400';
    }
}
