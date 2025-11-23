/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 정적 내보내기 설정 (필수)
    images: {
        unoptimized: true, // 이미지 최적화 끄기 (Github Pages 호환용)
    },
};

export default nextConfig;
