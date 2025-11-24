export const projects = [
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
        // [추가] 유튜브 링크와 이미지 (실제 PDF 내용 반영)
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
            <p class="text-slate-600 mb-6 leading-relaxed">기존 도구들은 심미성에만 초점을 맞춰 색각 이상자(Color Blindness)를 위한 접근성이 부족했습니다. 이를 해결하기 위해 개발자가 코드 한 줄로 접근성 높은 테마를 생성할 수 있는 라이브러리를 개발했습니다.</p>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">🛠 기술적 챌린지: CIE Lab 색공간</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">RGB 색공간의 한계를 극복하기 위해 <strong>CIE Lab 색공간</strong>을 도입, 명도(L)는 유지하면서 색상 축(a, b)만 회전시키는 알고리즘으로 변환 정확도를 40% 이상 향상시켰습니다.</p>
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
