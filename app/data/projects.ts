import { TProject } from '@/app/type/type';

export const projects: TProject[] = [
    {
        title: 'Colbrush',
        category: 'Open Source Library',
        period: '2025.06.24 ~ 2025.11.11',
        description:
            '색각 이상자를 위한 테마 생성 오픈소스 라이브러리입니다. RGB 색공간 대신 CIE Lab 색공간을 활용하여 접근성 높은 색상 테마를 자동 생성합니다.',
        techStack: [
            'React',
            'TypeScript',
            'TailwindCSS',
            'Vite',
            'NPM',
            'Playwright',
        ],
        youtube: 'https://youtu.be/pmmBx5OxHeM',
        images: [
            'images/colbrush1.png',
            'images/colbrush2.png',
            'images/colbrush3.png',
        ],
        results: [
            '2025 오픈소스 개발자대회 동상 수상',
            'NPM 다운로드 수 2,300회 달성 (3개월 간)',
            'Github Star 42개 달성',
            'Github Actions를 활용한 CI/CD 및 자동 배포 파이프라인 구축',
        ],
        links: {
            demo: 'https://www.colbrush.site/',
            github: 'https://github.com/2025-OSDC/colbrush',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">💡 개발 배경</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
                웹 접근성(A11y)이 중요해지고 있지만, 디자이너와 개발자가 색맹 사용자를 고려한 테마를 별도로 제작하는 것은 많은 리소스가 듭니다. 
                이를 해결하기 위해 <strong>"기존 코드를 건드리지 않고, CLI 명령어 한 줄로 색맹 대응 테마를 자동 생성"</strong>해주는 라이브러리를 개발했습니다.
            </p>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">🛠 핵심 기술: CIE Lab 색공간 알고리즘</h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
                초기 RGB 색공간 기반 변환은 인간의 눈이 인지하는 색상 거리와 수학적 거리가 달라 시인성이 떨어지는 문제가 있었습니다.
            </p>
            <ul class="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li><strong>문제 해결:</strong> <strong>CIE Lab 색공간</strong>을 도입하여 명도(L)는 유지하되 색상 축(a, b)만 회전시키는 알고리즘 구현</li>
                <li><strong>성과:</strong> 적색맹(Protanopia), 녹색맹(Deuteranopia), 청색맹(Tritanopia) 사용자에게 원본 디자인의 위계(Hierarchy)를 해치지 않는 고대비 테마 제공</li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚡️ 트러블 슈팅: Tailwind CSS 충돌 해결</h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
                라이브러리 스타일(<code>colbrush/styles.css</code>)을 import 할 때, 사용자 프로젝트의 Tailwind 설정과 충돌하여 미디어 쿼리가 깨지는 현상이 발생했습니다.
            </p>
            <div class="bg-slate-100 p-4 rounded-lg mb-6">
                <p class="text-sm text-slate-700 font-mono mb-2">🔴 원인: 라이브러리 CSS 내부의 중복 @import 'tailwindcss'로 인한 레이어 순서 꼬임</p>
                <p class="text-sm text-indigo-700 font-mono">🟢 해결: 빌드 단계에서 Tailwind 의존성을 제거하고, 순수 CSS 변수만 추출하여 제공하는 방식으로 아키텍처 변경</p>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mb-3">📦 주요 기능 및 기여</h3>
            <ul class="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li><strong>CLI 구현:</strong> <code>npx colbrush --generate</code> 명령어로 프로젝트 내 CSS 변수를 파싱하여 테마 파일 자동 생성</li>
                <li><strong>Cross-Platform:</strong> Node.js(CLI)와 Browser(React Component) 환경을 분리한 빌드 구성 (tsup 활용)</li>
                <li><strong>DX 개선:</strong> Chrome DevTools의 시각적 결함 시뮬레이션 기능을 웹상에 구현하여 개발자가 즉시 접근성 테스트 가능</li>
            </ul>
        `,
        troubleshooting: {
            url: '/blog/colbrush',
        },
    },
    {
        title: 'QASTUDIO',
        category: 'Web Service (Team Leader)',
        period: '2024.11.30 ~ 2025.02.21',
        description:
            'AI를 활용한 시나리오 기반 QA 자동화 서비스입니다. 프론트엔드 팀장(4명)을 맡아 복잡한 대시보드와 시나리오 로직을 구현했습니다.',
        techStack: [
            'React',
            'Redux-toolkit',
            'Tanstack Query',
            'Styled-components',
        ],
        youtube: 'https://youtu.be/5oE0DmY3el0',
        images: [
            'images/qa2.png',
            'images/qa3.png',
            'images/qa4.png',
            'images/qa5.png',
        ],
        results: [
            '사용자 행동(Click, Hover)을 Selenium 코드로 변환하는 역변환 로직 구현',
            '시나리오별 성공/실패 비율 시각화 대시보드 개발',
            'Drag & Drop 인터페이스를 활용한 노코드 시나리오 빌더 제작',
        ],
        links: {
            github: 'https://github.com/QASTUDIODEV',
        },
        troubleshooting: {
            url: '/blog/qastudio-logic',
        },
        detailContent: `
        <h3 class="text-xl font-bold text-slate-900 mb-3">🚀 프로젝트 개요</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">누구나 쉽게 웹상에서의 클릭만으로 테스트 시나리오를 작성하고 자동화할 수 있는 노코드 QA 서비스입니다.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mb-3">🔧 핵심 구현: Selector 알고리즘</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">동적으로 변하는 클래스명 문제를 해결하기 위해 <strong>우선순위 기반 Selector 추출 알고리즘</strong>(ID > TestID > Unique Class > XPath)을 자체 개발하여 Selenium 코드 변환 정확도를 높였습니다.</p>
    `,
    },
    {
        title: 'WithTime (위티)',
        category: 'Web Service (Team Leader)',
        period: '2025.06.22 ~ 2025.08.22',
        description:
            'AI 기반 데이트 코스 추천 서비스입니다. 데이트 코스 생성/조회 및 Firebase 알림 기능을 전담했습니다.',
        techStack: ['React', 'Zustand', 'TailwindCSS', 'Firebase'],
        youtube: 'https://youtu.be/dBL7jFrnfyU',
        images: [
            'images/withtime.png',
            'images/withtime1.png',
            'images/withtime2.png',
            'images/withtime3.png',
            'images/withtime4.png',
            'images/withtime5.png',
            'images/withtime6.png',
            'images/withtime7.png',
            'images/withtime8.png',
        ],
        results: [
            '회원가입/로그인(소셜) 및 마이페이지 구현',
            'Zustand를 활용한 전역 상태 관리 및 폼 데이터 최적화',
        ],
        links: {
            github: 'https://github.com/WithTime12',
        },
        detailContent: `
        <h3 class="text-xl font-bold text-slate-900 mb-3">💑 서비스 특징</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">사용자의 취향을 분석하여 AI가 최적의 데이트 코스를 제안하며, 카카오맵 API와 연동하여 동선을 시각화했습니다.</p>
        <h3 class="text-xl font-bold text-slate-900 mb-3">💾 상태 관리: Zustand</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">복잡한 폼 데이터를 효율적으로 관리하기 위해 Redux 대신 가볍고 직관적인 <strong>Zustand</strong>를 도입하여 보일러플레이트 코드를 줄였습니다.</p>
        `,
    },
    {
        title: '청년돋움 (YOUTH-STEP-UP)',
        category: 'Web Service (Team Leader)',
        period: '2024.09.30 ~ 2024.12.16',
        description:
            '청년 정책 맞춤 추천 웹앱 서비스입니다. 프론트엔드 팀장(3명)을 맡아 정책 추천, 캘린더 일정 관리, 커뮤니티 기능을 구현했습니다.',
        techStack: [
            'React',
            'JavaScript',
            'Vite',
            'Styled-components',
            'Firebase',
            'date-fns',
            'slick slider',
        ],
        images: [
            'images/youth1.png',
            'images/youth5.png',
            'images/youth3.png',
            'images/youth2.png',
            'images/youth4.png',
        ],
        results: [
            'Firebase Web Push를 활용한 실시간 알림 기능 및 무한 스크롤 구현',
            'date-fns를 사용하여 정책 시작/마감일 시각화 캘린더 개발',
            '커뮤니티 게시글 CRUD 및 댓글/대댓글 기능, 검색 기능 구현',
        ],
        links: {
            github: 'https://github.com/SMUMC-7th/Team-C-FE',
        },
        detailContent: `
        <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 기획 의도</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">수많은 정보 속에서 나에게 맞는 혜택을 놓치는 문제를 해결하기 위해, 사용자 프로필 기반 맞춤 정책 추천 서비스를 개발했습니다.</p>
        <h3 class="text-xl font-bold text-slate-900 mb-3">🔥 성능 최적화</h3>
        <p class="text-slate-600 mb-6 leading-relaxed"><strong>Intersection Observer API</strong>와 Firebase의 커서 기반 페이지네이션을 결합하여 무한 스크롤을 구현, 초기 로딩 속도를 획기적으로 개선했습니다.</p>
        `,
    },
    {
        title: 'SMUMC Web',
        category: 'Club Website (Solo)',
        period: '2024.09.30 ~ 2024.12.16',
        description:
            '상명대학교 UMC 동아리 공식 웹사이트입니다. 기획부터 디자인, 개발까지 1인 프로젝트로 진행했습니다.',
        techStack: ['React', 'TypeScript', 'Styled-components', 'React-slick'],
        images: ['images/smumc1.png'],
        results: [
            'Context API를 활용한 라이트/다크 모드 구현',
            '반응형 디자인 및 스크롤 애니메이션 최적화',
        ],
        links: {
            demo: 'https://smumc-web.vercel.app/',
            github: 'https://github.com/yeonjin719/SMUMC-Web',
        },
        detailContent: `
        <h3 class="text-xl font-bold text-slate-900 mb-3">🎨 디자인 시스템</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">동아리 브랜딩 강화를 위해 컬러 팔레트와 타이포그래피 시스템을 정의하고, 재사용 가능한 UI 컴포넌트 라이브러리를 구축했습니다.</p>
        `,
    },
];
