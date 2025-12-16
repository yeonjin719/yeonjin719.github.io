import { TProject } from '@/app/type/type';

export const projects: TProject[] = [
    {
        title: 'Colbrush',
        anchorId: 'colbrush',
        category: 'Open Source Library',
        period: '2025.06.24 ~ 2025.11.11',
        description:
            '색각 이상자를 위한 테마 생성 오픈소스 라이브러리입니다. CLI와 React 컴포넌트를 개발하여, 기존 코드를 수정하지 않고도 색맹 대응 테마를 자동 생성, 적용할 수 있습니다.',
        techStack: [
            'React',
            'TypeScript',
            'TailwindCSS',
            'Vite',
            'NPM',
            'Playwright',
        ],
        youtube: 'https://youtu.be/g5h2yo46zKc',
        images: [
            'images/colbrush1.png',
            'images/colbrush2.png',
            'images/colbrush3.png',
        ],
        results: [
            '2025 오픈소스 개발자대회 에프에이리눅스(주) 대표상 수상',
            'NPM 다운로드 수 2,300회 달성 (3개월 간)',
            'Github Star 42개 달성',
            'Github Actions를 활용한 CI/CD 및 자동 배포 파이프라인 구축',
        ],
        links: {
            demo: 'https://www.colbrush.site/',
            github: 'https://github.com/2025-OSDC/colbrush',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 프로젝트 개요</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            Colbrush는 색각 이상 사용자를 위한 React 테마 전환 라이브러리로, CSS 변수 기반 팔레트 생성부터 클라이언트 런타임 전환 UI까지 한 패키지에서 제공합니다
            (<code>README.md:1</code>).
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 ThemeProvider 전역 상태</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            <strong>ThemeProvider</strong>가 theme·언어·시뮬레이션 모드를 React Context로 묶고, 로컬 스토리지와 <code>&lt;html data-theme&gt;</code> 속성까지 동시에 갱신해
            전역 일관성을 보장합니다 (<code>src/react/ThemeProvider.tsx:1</code>). 
            'getThemeOptions'로 언어별 라벨을 제공하고, 'useTheme' 훅을 통해 어디서든 updateTheme/updateLanguage/setSimulationFilter를 호출할 수 있습니다
            (<code>src/react/ThemeProvider.tsx:18</code>).
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🎛 ThemeSwitcher UI</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            'ThemeSwitcher' 컴포넌트는 포지션별 고정 버튼과 접근성 속성(aria-label/role)을 포함한 모달형 드롭다운으로 구현되어 있으며,
            테마 선택·언어 전환을 한 UI에서 처리합니다 (<code>src/react/ThemeSwitcher.tsx:1</code>).
            옵션을 전달하지 않으면 'getThemeOptions' 결과를 자동으로 사용하고, 버튼/아이콘 상태를 Hover/선택 여부에 따라 다르게 렌더링해 시각적 피드백을 제공합니다
            (<code>src/react/ThemeSwitcher.tsx:28</code>).
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">👓 SimulationFilter 디버깅 툴</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            'SimulationFilter'는 VisionMode에 맞는 '<feColorMatrix>'를 주입해 전체 앱 렌더에 색각 보정 필터를 입히고, 개발 환경에서만 노출되도록 가드가 걸려 있습니다
            (<code>src/react/SimulationFilter.tsx:1</code>).
            툴바는 언어별 라벨/ARIA 속성을 갖춘 버튼 그룹으로 구성되며, 각 모드를 누르면 ThemeProvider의 simulationFilter 상태와 로컬 스토리지 키를 함께 갱신해
            새로고침 후에도 동일한 모드를 유지합니다 (<code>src/react/SimulationFilter.tsx:120</code>).
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚙️ CLI 자동 팔레트 생성</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            CLI의 'runThemeApply'는 CSS에서 '--color-' 변수를 정규식으로 수집하고, 중립색을 건너뛰며 스케일을 계산한 뒤
            Protanopia/Deuteranopia/Tritanopia 테마를 순차 생성합니다 (<code>src/cli/runThemeApply.ts:1</code>).
            실패 시에도 fallback 컬러 매핑을 적용해 CSS에 '@theme' 블록을 추가하고, 처리된 변수 수·테마 상태·실행 시간을 요약 출력해
            접근성 팔레트 생성 과정을 자동화합니다 (<code>src/cli/runThemeApply.ts:95</code>).
            </p>

        `,
        troubleshooting: {
            url: '/blog/colbrush',
        },
    },
    {
        title: 'QASTUDIO',
        anchorId: 'qastudio',
        category: 'Web Service (Team Leader)',
        period: '2024.11.30 ~ 2025.02.21',
        description:
            'AI를 활용한 시나리오 기반 QA 자동화 서비스입니다. 프론트엔드 팀장(4명)을 맡아 복잡한 대시보드와 시나리오 로직을 구현했습니다.',
        techStack: [
            'React',
            'TypeScript',
            'Redux-toolkit',
            'Tanstack Query',
            'Styled-components',
            'Vite',
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
            '이용자는 클릭을 통해 QA 시나리오 제작',
        ],
        links: {
            github: 'https://github.com/QASTUDIODEV',
        },
        troubleshooting: {
            url: '/blog/qastudio-logic',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 QA 대시보드</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            로그인 즉시 프로젝트별 QA 성과를 카드형 위젯으로 보여주어 성공/실패율, 총 테스트 수, 참여자 수를 한눈에 파악할 수 있습니다.
            React Query로 지표를 실시간 요청하고, 성공 여부를 퍼센트 라벨과 아이콘으로 시각화해 팀 리더가 주간 성과를 빠르게 판단하도록 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">📊 테스트 로그 & 필터링</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            TanStack Table을 활용해 테스트 로그를 서버 페이지네이션으로 불러오며, 상태·페이지·테스트명·날짜를 동시에 필터링할 수 있습니다.
            URL 파라미터와 Redux 캘린더 상태를 연동해 필터가 브라우저 새로고침이나 공유에도 유지되고,
            검색어는 디바운스되어 API 부하를 줄입니다. 각 행에는 “Run Scenario / Check the error” 액션 버튼이 있어 성공 테스트는 즉시 재실행,
            실패 테스트는 에러 모달로 재현 로그를 확인할 수 있습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔄 시나리오/등장인물 관리</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            시나리오 페이지는 프로젝트에 속한 캐릭터와 시나리오를 페이지 단위로 불러오고, Redux Slice로 선택/편집 상태를 전역 관리합니다.
            캐릭터 단위 일괄 선택·삭제, 페이지 이동, 선택 상태 초기화 등이 즉시 반영되어 대규모 시나리오 세트를 다루기 편합니다.
            React Hook Form + Zod 기반 2단계 모달을 통해 캐릭터 역할 선택→최종 확인을 분리하고, API 요청 중에는 로딩 오버레이를 띄워 중복 제출을 막습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚙️ 안정적인 데이터 흐름</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            공통 React Query 래퍼로 모든 API가 캐싱/에러 핸들링 정책을 공유하며, 페이지 전환 시 <code>keepPreviousData</code> 옵션을 사용해 로딩 점프를 최소화했습니다.
            필터 상태는 검색 파라미터, Redux, 커스텀 훅이 역할을 나눠 담당하여 로직은 전역에서 재사용되고, UI는 각 페이지에 맞게 조합할 수 있습니다.
            </p>
    `,
    },
    {
        title: 'WithTime (위티)',
        anchorId: 'withtime',
        category: 'Web Service (Team Leader)',
        period: '2025.06.22 ~ 2025.08.22',
        description:
            'AI 기반 데이트 코스 추천 서비스입니다. 데이트 코스 생성/조회 및 Firebase 알림 기능을 전담했습니다.',
        techStack: [
            'React',
            'TypeScript',
            'TailwindCSS',
            'Zustand',
            'Vite',
            'Firebase',
        ],
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
            <h3 class="text-xl font-bold text-slate-900 mb-3">💑 서비스 비전</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            WithTime은 사용자의 예산·지역·관심 키워드를 조합해 AI가 최적의 데이트 코스를 추천하는 서비스입니다.
            원하는 조건으로 코스를 생성·탐색·북마크하며, 한 번 설정한 필터는 전체 여정에서 일관되게 재사용됩니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 전역 필터 상태 관리</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            데이트 코스 필터는 <strong>Zustand + persist</strong>로 전역 관리하여 모달·페이지 간 이동 시에도 값이 유지됩니다.
            코스 생성/탐색/즐겨찾기 영역을 <strong>RouteScope</strong>로 구분하고, 범위가 바뀌면 자동 초기화하여
            다른 플로우의 필터 잔존값이 섞이지 않도록 했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔍 필터 UX & 검증</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            <strong>검색 필터 모달</strong>은 질문 정의를 기반으로 예산·위치·식사·키워드 등 7단계 옵션을 노출하고,
            Validation 유틸로 예산-시간, 키워드-식사 조합 등을 즉시 검증합니다.
            모든 페이지에서 공통 모달을 호출해 동일한 UX와 데이터를 공유하며, 자동 계산된 결과 개수를 즉시 보여줍니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚡ Firebase 웹 푸시 운영</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            <strong>Firebase Cloud Messaging</strong>을 초기화하고 Service Worker를 등록해 브라우저 푸시를 수신합니다.
            DeviceTokenProvider가 권한 요청→토큰 발급→백엔드 등록→전역 onMessage 리스너까지 캡슐화하여
            토큰 재발급과 로그아웃 시 정리(deleteToken)까지 한 흐름으로 관리합니다.
            </p>
            <h3 class="text-xl font-bold text-slate-900 mb-3">🤖 협업 효율화: CodeRabbit 도입</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
                4명의 프론트엔드 개발자 간의 코드 리뷰 병목 현상을 해결하기 위해 <strong>AI 리뷰어 CodeRabbit</strong>을 도입했습니다. PR 생성 즉시 스타일 가이드 준수 여부와 잠재적 버그를 리포트해주어, 팀원들은 비즈니스 로직 검토에만 집중할 수 있었습니다.
            </p>
        `,
        troubleshooting: {
            url: '/blog/withtime-dev-story',
        },
    },
    {
        title: '청년돋움 (YOUTH-STEP-UP)',
        anchorId: 'youth-step-up',
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
            <p class="text-slate-600 mb-6 leading-relaxed">
            수많은 정책 정보 속에서 나에게 맞는 혜택을 놓치지 않도록, 사용자 프로필(거주지·소득분위 등)을 기반으로 필터링하는
            <strong>맞춤 정책 추천 서비스</strong>를 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔥 성능 최적화: 무한 스크롤</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            알림/정책 데이터가 누적되며 발생한 초기 로딩 지연을 해결하기 위해 <strong>Intersection Observer API</strong>와
            Firebase Firestore의 <strong>커서 기반 페이지네이션</strong>을 결합해 무한 스크롤을 구현했습니다.
            필요한 데이터만 단계적으로 불러오며 초기 렌더 시간을 획기적으로 줄였습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚡ Firebase 인프라</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            실시간 동기화와 안정적인 확장성을 확보하기 위해 <strong>Firebase Firestore</strong>를 백엔드로 채택했습니다.
            커서 기반 쿼리로 대량 데이터에서도 일관된 응답 속도를 유지하고, 인증/보안 규칙으로 사용자별 맞춤 정책 데이터를 안전하게 제공합니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">📅 캘린더 시각화</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            <strong>date-fns</strong> 라이브러리와 커스텀 유틸리티 함수를 활용해 정책의 ‘신청 시작일’과 ‘마감일’을 계산하고
            색상별로 구분된 캘린더 UI에 표기했습니다. 복잡한 날짜 계산 로직을 유틸 단위로 분리하여 유지보수성과 재사용성을 높였습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 전역 필터 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            프로필 입력 폼은 <strong>동적 Form Menu</strong>를 기반으로 구성됩니다.
            'FORM_MENU'에서 학력·분야·지역·키워드 옵션 및 선택 제한을 선언(<code>src/constants/form_menu.js:1</code>),
            'SettingForm'이 초기 데이터와 함께 전달해 전역 컨텍스트에 저장(<code>src/components/settingForm/SettingForm.jsx:13</code>),
            'useForm' 훅이 입력 값과 토글 상태·검증을 통합 관리합니다(<code>src/hooks/useForm.js:3</code>).
            이 덕분에 프로필 수정과 신규 가입이 동일 스키마로 동작하며, 추천 정책/캘린더는 항상 최신 필터 상태를 참조합니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧩 필터 입력 UX</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            'ToggleBtnGroup'이 Form Menu를 순회하며 옵션 버튼을 자동 렌더링하고(<code>src/components/toggleBtnGroup/ToggleBtnGroup.jsx:6</code>),
            선택 제한을 초과하면 즉시 경고를 띄워 품질을 지킵니다. 선택 결과는 'useForm'의 'getSelectedOptions'로 직렬화되어
            백엔드 API가 요구하는 'educations/majors/regions/keyword' 구조로 전달됩니다(<code>src/hooks/useForm.js:46</code>).
            이후 정책 추천 무한 스크롤 또한 동일 필터를 바탕으로 데이터를 가져와, 입력→조회까지 일관된 사용성을 만듭니다
            (<code>src/components/policyList/policyList.jsx:13</code>).
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔔 Firebase 웹 푸시 파이프라인</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            Firebase는 FCM 구성→토큰 발급→서비스 워커→실시간 메시지 수신까지 한 흐름으로 구성했습니다.
            앱 초기화와 VAPID 기반 토큰 발급은 'remote/firebase'에서 담당하고(<code>src/remote/firebase.js:1</code>),
            'useDeviceToken' 훅이 브라우저 지원 여부를 검사한 뒤 토큰을 발급·백엔드에 등록합니다(<code>src/apis/deviceToken.js:13</code>).
            랜딩 단계에서 권한을 선요청하고(<code>src/pages/landing/Landing.jsx:9</code>),
            소셜 로그인 완료 시에도 디바이스 토큰을 재발급해 onMessage 리스너를 건 뒤 푸시를 수신합니다
            (<code>src/pages/OAuth/KakaoOAuthHandler.jsx:25</code>).
            Foreground 외에도 서비스 워커가 백그라운드 메시지를 받아 클릭 액션으로 라우팅합니다
            (<code>public/firebase-messaging-sw.js:1</code>).
            </p>
        `,
    },
    {
        title: 'SMUMC Web',
        anchorId: 'smumc-web',
        category: 'Club Website (Solo)',
        period: '2024.09.30 ~ 2024.12.16',
        description:
            '상명대학교 UMC 동아리 공식 웹사이트입니다. 기획부터 디자인, 개발까지 1인 프로젝트로 진행했습니다.',
        techStack: [
            'React',
            'TypeScript',
            'Styled-components',
            'React-slick',
            'Vite',
        ],
        youtube: 'https://youtu.be/PeUM7m_KCMs',
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
        <h3 class="text-xl font-bold text-slate-900 mb-3">🎨 디자인 시스템 및 반응형 구현</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">
            동아리 브랜딩 강화를 위해 컬러 팔레트와 타이포그래피 시스템을 정의하고, 재사용 가능한 UI 컴포넌트 라이브러리를 구축했습니다. 
            모든 디바이스에서 최적의 경험을 제공하기 위해 <strong>Mobile-First</strong> 전략으로 반응형 디자인을 구현했습니다.
        </p>

        <h3 class="text-xl font-bold text-slate-900 mb-3">🌗 다크 모드 구현</h3>
        <p class="text-slate-600 mb-6 leading-relaxed">
            <strong>Context API</strong>와 <strong>Styled-components</strong>의 ThemeProvider를 활용하여 전역 테마 관리 시스템을 구축했습니다. 
            사용자의 시스템 설정을 감지하여 초기 테마를 자동으로 적용하고, 토글 버튼으로 부드러운 테마 전환 경험을 제공합니다.
        </p>
        `,
    },
];
