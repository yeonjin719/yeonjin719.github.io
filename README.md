# 👩‍💻 Kim Yeon Jin | Frontend Developer Portfolio

"사용자 경험(UX)과 개발자 경험(DX)을 모두 고민하는 개발자, 김연진입니다."

## 📝 About This Project

이 레포지토리는 저의 개발 경험과 프로젝트를 기록하기 위해 구축한 개인 포트폴리오 웹사이트입니다.
Next.js 14 (App Router)와 TypeScript를 기반으로 제작되었으며, 별도의 DB 없이 마크다운 파일을 통해 블로그 글을 관리할 수 있도록 설계되었습니다.

## ✨ Key Features

-   **🎨 Modern & Responsive UI**: Tailwind CSS를 활용한 반응형 디자인 및 인터랙티브한 애니메이션 효과.

-   **🖼️ Dynamic Project Modal**: 프로젝트 상세 정보를 볼 수 있는 모달 구현.

    -   YouTube 영상 및 이미지 갤러리 슬라이더(Lightbox) 기능 포함.
    -   키보드 네비게이션(ESC, 화살표 키) 지원.

-   **📝 File-System Based Blog**: posts 폴더에 .mdx 파일을 추가하면 자동으로 블로그 글이 생성되는 시스템 (gray-matter 활용).

-   **🚀 Optimized Performance**: Next.js의 SSG(Static Site Generation)를 활용하여 빠른 로딩 속도와 SEO 최적화.

## 🛠 Tech Stack

| Category        | Technologies                       |
| --------------- | ---------------------------------- |
| **Framework**   | Next.js 14 (App Router), React 18  |
| **Language**    | TypeScript                         |
| **Styling**     | Tailwind CSS, Lucide React (Icons) |
| **Blog Engine** | Gray-matter, Next-mdx-remote       |
| **Deployment**  | GitHub Pages / Vercel              |

## 📂 Directory Structure

```
├── app/
│ ├── blog/ # 블로그 상세 페이지 라우팅 ([slug])
│ ├── favicon.ico # 파비콘
│ ├── globals.css # 전역 스타일 (Tailwind directives)
│ ├── layout.tsx # 루트 레이아웃
│ └── page.tsx # 메인 페이지 (헤더, 프로젝트, 스킬 등 통합)
├── components/ # 재사용 가능한 컴포넌트 (ProjectModal 등)
├── lib/
│ └── posts.ts # 마크다운 파일 파싱 및 정렬 로직
├── posts/ # 블로그 포스트 파일 (.mdx) 저장소
└── public/ # 정적 이미지 및 PDF 리소스
```

## 🚀 Featured Projects

### 📌 주요 프로젝트

| Project      | Description                                         | Role      | Tech Stack              |
| ------------ | --------------------------------------------------- | --------- | ----------------------- |
| **Colbrush** | 🎨 색각 이상자를 위한 테마 생성 오픈소스 라이브러리 | Developer | React, TypeScript, NPM  |
| **QASTUDIO** | 🤖 AI 기반 시나리오 QA 자동화 서비스                | FE Leader | React, Redux Toolkit    |
| **WithTime** | 💑 AI 기반 맞춤형 데이트 코스 추천 서비스           | FE Leader | React, Zustand, Map API |
| **청년돋움** | 📋 청년 정책 맞춤 추천 플랫폼                       | FE Leader | React, Firebase         |

## 🏃‍♂️ Getting Started

이 프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요.

### 레포지토리 클론

```
git clone [https://github.com/yeonjin719/yeonjin719.github.io.git](https://github.com/yeonjin719/yeonjin719.github.io.git)
cd your-repo-name
```

### 패키지 설치

```
npm install
# or
pnpm install
```

### 개발 서버 실행

```
npm run dev
```

브라우저에서 http://localhost:3000으로 접속하여 확인합니다.

## ✍️ How to Write a Post

posts 폴더 안에 .mdx 파일을 생성하고 아래 형식(Frontmatter)에 맞춰 작성하면 자동으로 블로그 섹션에 추가됩니다.

```
---

title: "글 제목"
date: "YYYY-MM-DD"
desc: "목록에 보여질 간단한 요약"
tags: ["Tag1", "Tag2"]

---

## 본문 내용

여기서부터 마크다운 문법으로 자유롭게 작성하세요.
```

## 📬 Contact

Email: kyj0719@gmail.com

GitHub: [github.com/yeonjin719](github.com/yeonjin719)

LinkedIn: [linkedin.com/in/yeonjinkimcotton](linkedin.com/in/yeonjinkimcotton)

© 2025 Kim Yeon Jin. Built with Next.js & Tailwind CSS.
