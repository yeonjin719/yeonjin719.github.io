import { TProject } from '@/app/type/type';

export const projects: TProject[] = [
    {
        title: 'Colbrush',
        anchorId: 'colbrush',
        category: 'Open Source Library',
        period: '2025.06.24 ~ 2025.11.11',
        description:
            '색상 접근성 문제를 각 서비스가 반복해서 해결하지 않아도 되도록, CSS 변수 기반 테마를 생성하고 적용할 수 있게 만든 npm 배포형 React 라이브러리입니다.',
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
            'images/colbrush/colbrush1.png',
            'images/colbrush/colbrush2.png',
            'images/colbrush/colbrush3.png',
        ],
        results: [
            '2025 오픈소스 개발자대회 에프에이리눅스(주) 대표상 수상',
            'NPM 다운로드 수 2,300회 달성 (3개월 간)',
            'GitHub Star 44개 달성 (2026-02-23 기준)',
            'Github Actions를 활용한 CI/CD 및 자동 배포 파이프라인 구축',
            '오픈소스 협업으로 3인 코어 컨트리뷰터 체계 운영',
        ],
        links: {
            demo: 'https://www.colbrush.site/',
            github: 'https://github.com/2025-OSDC/colbrush',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 왜 라이브러리로 만들었나</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            색각 이상 사용자는 색상만으로 상태를 구분하는 UI에서 중요한 정보를 놓칠 수 있고,
            이런 문제는 서비스마다 반복해서 다시 해결되는 경우가 많습니다.
            Colbrush는 이 부담을 개별 서비스가 매번 떠안지 않도록, 개발 단계에서 바로 적용할 수 있는 재사용 가능한 색상 테마 라이브러리로 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🎨 색상 토큰 파싱과 variation 생성</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            글로벌 스타일 파일을 파싱해 색상 토큰을 추출하고, 기준 색상을 바탕으로 <code>100 ~ 900</code> variation을 생성하는 로직을 구현했습니다.
            CLI에서는 CSS 입력을 받아 색각 유형별 테마를 만들고, 필요한 경우 fallback 매핑까지 적용해 실제 프로젝트에 바로 넣을 수 있는 결과물을 출력하도록 구성했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 ThemeProvider와 ThemeSwitcher</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            런타임에서는 <strong>ThemeProvider</strong>가 테마, 언어, 색각 시뮬레이션 상태를 묶어 관리하고,
            localStorage와 <code>document.documentElement</code>의 데이터 속성을 함께 갱신해 앱 전역에서 일관된 상태를 유지하도록 만들었습니다.
            <strong>ThemeSwitcher</strong>는 외부 프로젝트에서 바로 붙여 쓸 수 있도록, 테마 선택과 언어 전환을 한 UI 안에서 제공하는 형태로 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🛠 외부 소비 환경 이슈 해결</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            라이브러리 형태로 배포하다 보니 구현보다 더 어려웠던 것은 외부 환경에서 안정적으로 동작하게 만드는 일이었습니다.
            SVG 아이콘 변환 문제는 <code>@svgr/cli</code> 기반 사전 변환으로 정리했고,
            Tailwind 미디어쿼리 충돌은 중복 <code>@import</code> 제거로 해결했습니다.
            또 <code>tsup</code> CJS 번들 결과와 외부 라이브러리 래핑 충돌까지 디버깅하며,
            라이브러리 개발에서는 번들 포맷과 소비 환경까지 고려해야 진짜 사용 가능한 오픈소스가 된다는 점을 배웠습니다.
            </p>

        `,
        troubleshooting: {
            url: '/blog/colbrush',
        },
    },
    {
        title: 'eHelper',
        anchorId: 'ehelper',
        category: 'Chrome Extension (Solo)',
        period: '2026.03.02 ~',
        description:
            '상명대학교 eCampus에서 과목별 과제, 퀴즈, 온라인 강의 진행 여부와 마감일을 한 번에 확인할 수 있도록 만든 Chrome Extension으로, Python 자동화 스크립트를 일반 학생도 쓸 수 있는 제품 형태로 확장한 프로젝트입니다.',
        techStack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Chrome Extension (Manifest V3)',
        ],
        images: ['images/eHelper/eHelper.png'],
        results: [
            '과목별 페이지를 반복 탐색하던 eCampus 확인 동선을 대시보드 한 화면으로 축약',
            'Popup, Content Script, Background Service Worker를 분리한 Manifest V3 구조 설계',
            '마감 상태·과목·자료 유형·미완료 퀵 필터로 실제 탐색 흐름까지 고려한 UI 구현',
            'Chrome Web Store 배포를 위해 권한 설정, 정책 문서 작성, 빌드·업로드 테스트 경험',
        ],
        links: {
            github: 'https://github.com/yeonjin719/eHelper',
            demo: 'https://chromewebstore.google.com/detail/ehelper/cfdbiojeleeahgmofkjpkapoffjejhof?hl=ko&utm_source=ext_sidebar',
        },
        troubleshooting: {
            url: '/blog/ehelper-extension-story',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 문제 정의</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            eCampus에서는 과제 제출 여부를 확인하려면 과목별 페이지와 하위 과제 페이지를 반복해서 들어가야 했고,
            퀴즈·온라인 강의·마감일도 각각 따로 확인해야 했습니다.
            직접 겪은 이 비효율을 줄이기 위해, 여러 학습 항목을 한 화면에 모아 보여주는 도구를 만들었습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 스크립트에서 제품으로 전환</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            출발점은 Python + Selenium 기반 개인용 자동화 스크립트였지만, 터미널 출력 방식은 비개발자에게 진입 장벽이 컸습니다.
            이후 더 많은 학생이 쉽게 설치하고 쓸 수 있도록, 익스텐션 설치만으로 바로 활용할 수 있는 Chrome Extension 형태로 다시 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧩 확장 프로그램 구조 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            Manifest V3 기반으로 popup, content script, background service worker를 분리해 구성했고,
            필요한 권한과 host permission을 명시해 eCampus 페이지에서 데이터를 수집하도록 설계했습니다.
            다운로드 기능은 background에서 메시지를 받아 Chrome downloads API로 처리해, 자료 확인뿐 아니라 실제 학습 흐름까지 확장했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔎 대시보드 중심 탐색 UX</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            과목별 과제, 퀴즈, 온라인 강의의 진행 여부와 마감 정보를 대시보드 한 화면에서 확인할 수 있도록 구성했습니다.
            마감 상태, 과목, 자료 유형 필터와 미완료 퀵 필터를 제공해 단순 정보 수집이 아니라 실제 탐색 동선을 줄이는 데 집중했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚙️ 배운 점과 다음 개선 방향</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            여러 페이지의 HTML을 직접 가져와 파싱하는 방식은 빠르게 구현할 수 있었지만, 로딩 시간이 길어지는 한계도 분명했습니다.
            이 경험을 통해 개인용 자동화와 실사용 제품은 설계 기준이 다르다는 점,
            그리고 프론트엔드 구현 외에도 권한, 정책, 배포 흐름까지 함께 이해해야 한다는 점을 배웠습니다.
            </p>
        `,
    },
    {
        title: 'UMC Product Web',
        anchorId: 'umc-product-web',
        category: 'Backoffice Web (Solo)',
        period: '2025.12 ~ 진행 중',
        description:
            '학교별로 분산되던 UMC 리크루팅을 하나로 통합하기 위해 만든 운영 서비스로, 지원자 플로우와 운영진 백오피스를 한 제품 안에서 연결한 단독 프론트엔드 개발 프로젝트입니다.',
        techStack: [
            'React 19',
            'TypeScript',
            'Vite',
            'TanStack Router',
            'TanStack Query',
            'Zustand',
            'React Hook Form',
            'Zod',
            'Emotion',
            'Radix UI',
            'Vitest',
            'Storybook',
            'Playwright',
        ],
        images: [
            'images/umcProduct/thumbnail.jpg',
            'images/umcProduct/challenger1.jpg',
            'images/umcProduct/challenger2.jpg',
            'images/umcProduct/challenger3.jpg',
            'images/umcProduct/school1.jpg',
            'images/umcProduct/school2.jpg',
            'images/umcProduct/school3.jpg',
            'images/umcProduct/school4.jpg',
            'images/umcProduct/school5.jpg',
            'images/umcProduct/school6.jpg',
            'images/umcProduct/admin1.jpg',
            'images/umcProduct/admin2.jpg',
        ],
        results: [
            '저장소 기여 589 commits(2026-02-23 기준)',
            '권한(챌린저/파트장/회장단/총괄) 기반 뷰 분리로 운영 효율 개선',
            'TanStack Router + Query + RHF + Zod 조합으로 데이터/폼 표준화',
            'Storybook/Chromatic/Vitest/Playwright 기반 품질 검증 파이프라인 운영',
        ],
        links: {
            demo: 'https://prod.umc.it.kr/',
            github: 'https://github.com/UMC-PRODUCT/umc-product-web',
        },
        youtube: 'https://youtu.be/2ZK6PzG5uU4',
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 통합 리크루팅 서비스 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            기존 UMC 리크루팅은 학교별 Google Form 중심으로 분산 운영되어 전체 지원 현황을 중앙에서 파악하기 어려웠습니다.
            이 프로젝트는 지원 단계부터 운영 단계까지 하나의 흐름으로 연결하기 위해,
            지원자용 리크루팅 화면과 운영진용 권한 기반 백오피스를 함께 다루는 통합 서비스로 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 단독 개발 기준 수립</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            단독 개발이었기 때문에 기술 선택과 개발 기준을 처음부터 직접 정해야 했습니다.
            <strong>TanStack Router/Query, React Hook Form, Zod, Emotion</strong> 조합을 중심으로 구조를 잡았고,
            AI 리뷰어, Storybook, Playwright, Vitest까지 함께 도입해 혼자서도 품질 관리와 리뷰 체계를 유지할 수 있는 기반을 만들었습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧩 의존성 높은 지원 흐름 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            이 서비스는 단순 폼 입력이 아니라 생성, 수정, 재지원, 자동저장, 질문 정렬, 파트 변경에 따른 하위 응답 초기화처럼
            화면과 상태가 강하게 연결된 흐름이 많았습니다.
            그래서 단순 화면 구현보다 예외 케이스와 데이터 의존성을 더 먼저 설계했고,
            실제 코드에서도 파트 변경 가드와 응답 초기화 같은 로직을 훅으로 분리해 관리했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">✅ QA 환경과 인수인계 구조</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            실제 운영 서비스 특성상 테스트 환경과 운영 환경을 분리하는 것이 중요해 <code>develop</code>과 <code>main</code> 브랜치를 나눠 관리했습니다.
            Storybook은 UI 문서화뿐 아니라 PM, 디자이너, 후임 개발자가 같은 기준으로 화면을 확인할 수 있는 협업 도구로 활용했고,
            AWS Amplify와 GitHub Actions를 함께 구성해 배포 상태와 검증 흐름도 명확히 관리했습니다.
            </p>
        `,
        troubleshooting: {
            url: '/blog/umc-product-web',
        },
    },
    {
        title: 'QASTUDIO',
        anchorId: 'qastudio',
        category: 'Web Service (Team Leader)',
        period: '2024.11.30 ~ 2025.02.21',
        description:
            '시나리오 작성과 반복 검증 부담을 줄이기 위한 AI 기반 QA 자동화 서비스로, 인증 흐름과 시나리오 조회 상태 관리를 중심으로 구현한 프로젝트입니다.',
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
            'images/qastudio/qa1.png',
            'images/qastudio/qa2.png',
            'images/qastudio/qa3.png',
            'images/qastudio/qa4.png',
            'images/qastudio/qa5.png',
        ],
        results: [
            '사용자 행동(Click, Hover)을 Selenium 코드로 변환하는 역변환 로직 구현',
            '시나리오별 성공/실패 비율 시각화 대시보드 개발',
            '이용자는 클릭을 통해 QA 시나리오 제작',
            '프론트엔드 저장소 기여 429 commits(팀 내 최다, 2026-02-23 기준)',
        ],
        links: {
            github: 'https://github.com/QASTUDIODEV/WEB_QASTUDIO',
        },
        troubleshooting: {
            url: '/blog/qastudio-logic',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 QA 자동화 도메인 이해</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            QASTUDIO는 QA 시나리오 작성과 반복 검증의 수작업 부담을 줄이기 위해,
            AI 기반 시나리오 생성과 자동화 흐름을 연결하려던 프로젝트였습니다.
            저는 로그인, 회원가입, 소셜 로그인, 사용자 프로필 흐름과 시나리오 조회 상태 관리를 중심으로 프론트엔드를 구현했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔐 쿠키 기반 인증과 HTTPS 개발 환경</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            보안 측면을 고려해 쿠키 기반 인증을 선택했고, 브라우저 환경에서 이를 제대로 검증하기 위해 로컬 인증서를 사용하는 HTTPS 개발 환경을 별도로 구성했습니다.
            인증 도메인은 회원가입, 이메일 인증, 로그인, 토큰 재발급, 로그아웃, 비밀번호 변경, 프로필 설정 API로 분리해 관리했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 OAuth URI 충돌과 로그인 후 분기 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            가장 어려웠던 문제는 일반 로그인의 CORS 이슈와 소셜 로그인 쿠키 미반영 현상이었습니다.
            원인을 추적해 보니 Spring Security OAuth2 기본 URI와 팀 서버의 로그인 처리 URI가 충돌하고 있었고,
            이를 <code>/oauth2/authorization/{provider}</code> 형태로 정리한 뒤 <code>/login/success</code>에서 사용자 정보를 조회해
            닉네임 유무에 따라 온보딩과 메인 화면으로 분기하도록 흐름을 다시 설계했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚙️ 다수 API 연동과 Redux 상태 관리</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            시나리오 조회 페이지에는 <strong>Redux</strong>를 적용해 인증, 사용자, 프로젝트, 역할, 시나리오 관련 상태를 역할별로 나눠 관리했습니다.
            프로젝트 목록, 역할 리스트, 시나리오 생성·수정·삭제, 사용자 정보, 팀원 정보, S3 Presigned URL 등 여러 API를 연결하면서,
            인증 이후 흐름을 단순 리다이렉트가 아니라 실제 사용자 상태 기반 화면 전환으로 설계한 것이 핵심이었습니다.
            </p>
    `,
    },
    {
        title: 'WithTime (위티)',
        anchorId: 'withtime',
        category: 'Web Service (Team Leader)',
        period: '2025.06.22 ~ 2025.08.22',
        description:
            '데이트 코스를 정하는 반복적인 고민을 줄이기 위해 만든 AI 추천 서비스로, FE 리드로서 협업 규칙과 상태 구조를 잡고 코스 생성·필터·인증 흐름을 구현한 프로젝트입니다.',
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
            'images/withtime/withtime.png',
            'images/withtime/withtime1.png',
            'images/withtime/withtime2.png',
            'images/withtime/withtime3.png',
            'images/withtime/withtime4.png',
            'images/withtime/withtime5.png',
            'images/withtime/withtime6.png',
            'images/withtime/withtime7.png',
            'images/withtime/withtime8.png',
        ],
        results: [
            '회원가입/로그인(소셜) 및 마이페이지 구현',
            'Zustand를 활용한 전역 상태 관리 및 폼 데이터 최적화',
            '프론트엔드 저장소 기여 256 commits(2026-02-23 기준)',
            'FCM 기반 웹 푸시 토큰 등록/갱신/정리 플로우 구축',
        ],
        links: {
            github: 'https://github.com/WithTime12/WithTimeFE',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">💑 사용자 문제에서 출발한 서비스</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            데이트를 할 때마다 어디를 갈지 반복적으로 고민해야 하는 불편을 줄이기 위해,
            예산·지역·관심 키워드를 기반으로 AI가 코스를 추천하는 서비스를 만들었습니다.
            팀의 목표는 아이디어 수준이 아니라 실제로 시연 가능한 데모데이 결과물을 완성하는 것이었습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 FE 리드로서 협업 기준 정리</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            팀원 다수가 첫 프로젝트 경험이었기 때문에, 익숙한 라이브러리를 중심으로 스택을 정하고 협업 규칙과 코드 구조를 먼저 만들었습니다.
            저는 자연스럽게 FE 리드 역할을 맡아 데이트 코스 생성, 필터 검색, 로그인/회원가입과 소셜 로그인 흐름을 담당했고,
            메인 페이지 구현이 막힌 팀원을 도와 전체 완성도도 함께 끌어올렸습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔍 상태 흐름과 인증 연결</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            데이트 코스 추천은 전역 상태가 중요한 서비스였기 때문에, 필터와 사용자 상태 흐름을 많이 신경 써서 설계했습니다.
            <strong>Zustand persist</strong>로 추천 조건을 유지했고, 소셜 로그인 이후에는 최초 가입 여부에 따라 온보딩과 홈 화면을 분기해
            인증이 추천 서비스 초기 상태와 자연스럽게 이어지도록 구현했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚡ 배포와 협업 문서화</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            배포는 처음으로 <strong>AWS S3, Route53, CloudFront</strong> 조합을 사용해 진행했고,
            팀원들도 같은 방식으로 재현할 수 있도록 배포 과정을 문서화해 공유했습니다.
            이 경험을 통해 리드의 역할은 구현량보다도, 팀의 숙련도에 맞는 기술 선택과 재현 가능한 협업 구조를 만드는 데 있다는 점을 배웠습니다.
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
            '흩어진 청년 정책 정보를 탐색하고 북마크, 캘린더, 알림으로 이어지게 만든 서비스로, 첫 팀 프로젝트 리드 경험이자 핵심 사용자 접점을 구현한 프로젝트입니다.',
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
            'images/youthStepUp/youth1.png',
            'images/youthStepUp/youth5.png',
            'images/youthStepUp/youth3.png',
            'images/youthStepUp/youth2.png',
            'images/youthStepUp/youth4.png',
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
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 정책 탐색과 일정 관리를 한 흐름으로 연결</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            청년 정책은 정보가 흩어져 있어 한 번에 모아보기 어렵고,
            관심 정책을 저장하더라도 이후 일정처럼 다시 확인하고 관리하기가 번거롭습니다.
            그래서 정책 탐색, 추천, 북마크, 캘린더 등록을 한 서비스 안에서 이어지는 경험으로 묶는 것을 목표로 했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔥 첫 팀 프로젝트 리드와 메인 화면 구현</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            첫 프로젝트였기 때문에 전체 진행을 챙기면서, 홈 메인 화면의 정책 목록과 배너, 캘린더 같은 핵심 사용자 접점을 직접 맡았습니다.
            메인 화면에서는 무한 스크롤 정책 목록과 <code>slick-slider</code> 배너를 구현했고,
            비로그인 사용자가 북마크를 누르거나 과도한 조회를 시도할 때는 로그인 유도 모달을 띄워 흐름을 제어했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">📅 date-fns 기반 캘린더 직접 구현</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            캘린더는 <strong>date-fns</strong>를 활용해 직접 구현했고,
            정책의 시작일과 마감일을 월별로 보여주며 특정 날짜를 선택하면 해당 정책 목록과 완료 상태를 함께 확인할 수 있도록 만들었습니다.
            단순 조회 화면이 아니라, 정책 정보를 개인 일정처럼 다시 관리할 수 있게 만드는 데 초점을 맞췄습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🔔 FCM 알림과 완성도 있는 사용자 흐름</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            알림 페이지에서는 <strong>FCM</strong> 기반 웹 푸시를 붙여 댓글과 대댓글 발생 시 알림이 오도록 구현했고,
            로딩 바, 스켈레톤 UI, 안내 모달까지 넣어 첫 프로젝트지만 사용자에게 보이는 완성도를 끝까지 챙기려 했습니다.
            이 경험을 통해 기능을 붙이는 것과 실제 서비스처럼 동작하게 만드는 것은 다르다는 점을 강하게 배웠습니다.
            </p>
        `,
    },
    {
        title: 'Calio',
        anchorId: 'calio',
        category: 'Graduation Project',
        period: '2025 ~ 2026',
        description:
            '사용자 기록을 바탕으로 AI가 먼저 제안을 건네는 선제적 캘린더 서비스를 목표로 한 졸업 프로젝트로, 캘린더와 투두 화면의 사용성과 상호작용 설계를 맡고 있습니다.',
        techStack: [
            'React',
            'TypeScript',
            'Emotion',
            'TanStack Query',
            'Zustand',
            'React Hook Form',
            'Yup',
            'react-big-calendar',
            'react-day-picker',
            'Vitest',
        ],
        images: [],
        results: [
            'react-big-calendar 기반 드래그앤드롭 캘린더와 반복 일정 편집 흐름 구현',
            '일정 상세 조회 404를 별도 처리하는 retry 정책으로 네트워크 예외 대응',
            '선택 날짜 기반 이벤트 카드와 주간 Todo 진행률이 연결된 화면 흐름 설계',
            'GitHub Project, Wiki, 스프린트 운영으로 협업 구조 정리',
        ],
        links: {
            github: 'https://github.com/2026-Capstone-Project/FrontEnd',
        },
        detailContent: `
            <h3 class="text-xl font-bold text-slate-900 mb-3">🎯 기록 기반 선제 제안형 캘린더</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            기존 일정 관리 서비스는 사용자가 직접 기록하고 계속 확인해야 하는 부담이 컸습니다.
            Calio는 사용자가 남긴 기록을 바탕으로 AI가 먼저 제안을 건네는 방향을 목표로 하며,
            저는 그중 캘린더와 투두 화면을 맡아 반복 사용 서비스에 맞는 인터랙션을 설계하고 있습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🗓 캘린더와 투두의 사용성 설계</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            이 프로젝트에서 가장 중요했던 것은 기능 추가보다 사용자가 자연스럽다고 느끼는 상호작용을 만드는 일이었습니다.
            드래그앤드롭, 모바일 사용성, 반복 일정 편집처럼 캘린더와 투두에서 자주 마주치는 액션을 중심으로
            “동작하게 만드는 것”보다 “불편하지 않게 느껴지게 하는 것”에 더 많은 시간을 썼습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">⚙️ 복잡한 일정 편집과 네트워크 예외 처리</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            <code>react-big-calendar</code>의 드래그앤드롭 기능을 바탕으로 일정 조회 범위 계산, 반복 일정 수정 범위, 삭제 확인, 반응형 뷰 전환까지 다루고 있습니다.
            또 상세 일정 조회 시 404를 별도로 처리하는 retry 정책을 두어,
            수정과 삭제가 잦은 화면에서 발생하는 네트워크 예외를 더 안정적으로 다룰 수 있게 했습니다.
            </p>

            <h3 class="text-xl font-bold text-slate-900 mb-3">🧭 스프린트 기반 협업 경험</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
            프로젝트는 아직 진행 중이지만, GitHub Project와 Wiki를 운영하고 스프린트 방식으로 작업 흐름을 관리하며
            개발 외적인 구조도 결과물의 일부라는 점을 배우고 있습니다.
            반복 사용 서비스일수록 기능 수보다 입력 편의성과 인터랙션의 자연스러움이 더 중요하다는 점도 이 프로젝트에서 크게 체감하고 있습니다.
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
        images: ['images/smumc/smumc1.png'],
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
