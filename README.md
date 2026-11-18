# Victor Anyadiegwu — Full-Stack & AI Engineer Portfolio

A modern, responsive portfolio presenting my work across **full-stack software engineering**, **applied AI**, and **Internet of Things (IoT)** systems.

The site is built with the Next.js App Router, TypeScript, and Tailwind CSS. It is statically prerendered for fast delivery and includes project showcases, technical experience, skills, contact options, theme switching, and optimized media.

## Features

- Responsive single-page layout for mobile, tablet, and desktop
- Light mode by default with a persistent manual dark-mode toggle
- Smooth section navigation without adding fragment hashes to the URL
- Active-section tracking and a page scroll-progress indicator
- Typed, reusable React components for sections, cards, navigation, and controls
- Project cards with live demo and source repository links
- Downloadable résumé and direct email/telephone actions
- Optimized local images using WebP and `next/image`
- Custom multi-resolution `favicon.ico`
- Accessible controls, visible focus states, and reduced-motion support
- Statically prerendered homepage using Next.js Cache Components

## Technology Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Fonts:** Geist and Geist Mono through `next/font`
- **Package manager:** pnpm 12.18.0
- **End-to-end testing:** Playwright with desktop and mobile Chromium
- **Continuous integration:** GitHub Actions
- **Deployment target:** Vercel or any compatible Node.js host

## Project Structure

```text
portfolio/
├── app/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProfileImage.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SectionScrollButton.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SkillGroup.tsx
│   │   ├── SkillsSection.tsx
│   │   └── SocialLinks.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── portfolio-data.ts
├── public/
│   ├── documents/
│   │   └── victor-anyadiegwu-resume.pdf
│   └── images/
│       ├── bank-ai-assistant.webp
│       ├── lms.webp
│       ├── savora.webp
│       ├── shophub.webp
│       ├── shopify.webp
│       ├── spotify.webp
│       └── victor-anyadiegwu.webp
├── tests/
│   └── e2e/
│       ├── navigation.desktop.spec.ts
│       ├── navigation.mobile.spec.ts
│       └── portfolio.spec.ts
├── .github/
│   └── workflows/
│       └── playwright.yml
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
└── tsconfig.json
```

Portfolio copy, navigation definitions, experience, skills, and project records are centralized in [`app/portfolio-data.ts`](app/portfolio-data.ts).

## Getting Started

### Requirements

- Node.js 20.19 or newer
- pnpm

### Installation

```bash
git clone https://github.com/Anyadiegwu/portfolio.git
cd portfolio
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm lint` | Run ESLint across the project |
| `pnpm typecheck` | Run strict TypeScript validation |
| `pnpm build` | Create and validate the production build |
| `pnpm start` | Serve an existing production build |
| `pnpm test:e2e` | Build the app and run desktop/mobile Playwright tests |
| `pnpm test:e2e:headed` | Run Playwright with visible browser windows |
| `pnpm test:e2e:ui` | Open Playwright's interactive test UI |
| `pnpm test:e2e:report` | Serve the most recent HTML test report |
| `pnpm install --frozen-lockfile` | Reproduce the exact locked dependency installation |

## Navigation and Theme Behavior

Internal navigation uses reusable scroll buttons rather than fragment links. Selecting **About**, **Skills**, **Projects**, or **Contact** smoothly moves to the matching section without changing the browser URL.

The site starts in light mode for visitors without a saved preference. Choosing a theme stores that explicit choice in `localStorage`, allowing it to persist between visits.

## End-to-End Testing

Playwright exercises the statically built production application in two Chromium projects:

- **Desktop Chrome** for full navigation, active-section tracking, and hero actions
- **Mobile Chrome (Pixel 7)** for responsive layout and mobile-menu behavior

The shared suite also verifies theme persistence, project cards and images, safe external-link attributes, résumé delivery, contact links, metadata, and the custom favicon.

Install the project-managed Chromium runtime once after installing dependencies:

```bash
pnpm exec playwright install chromium
```

On Linux machines that also need browser system libraries, use:

```bash
pnpm exec playwright install --with-deps chromium
```

Run the complete suite with:

```bash
pnpm test:e2e
```

Playwright automatically builds the Next.js application, starts it at `http://127.0.0.1:3000`, waits for readiness, and stops the managed server after testing. If that address already hosts the project locally, Playwright reuses it outside CI.

Failure traces, screenshots, and videos are written to `test-results/`. The HTML report is written to `playwright-report/` and can be served with `pnpm test:e2e:report`.

### GitHub Actions

[`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) runs on pushes and pull requests targeting `main`. It uses the frozen pnpm lockfile, installs Chromium and its Ubuntu dependencies, runs linting and TypeScript validation, then executes the complete Playwright suite.

The workflow uploads the HTML report and raw test results for 14 days, including failure traces, screenshots, and videos when available.

## Media and Performance

- Portfolio images are stored as optimized WebP files.
- The portrait is resized for practical web delivery.
- Images are rendered through `next/image` with responsive size hints.
- The homepage is statically generated during `pnpm build`.
- The favicon contains 16×16, 32×32, 48×48, and 64×64 icon layers.

## Deployment

The project is ready for deployment on [Vercel](https://vercel.com/). Import the repository and use the detected Next.js settings, or build it manually with:

```bash
pnpm install --frozen-lockfile
pnpm build
```

For another Node.js host, run the production server after building:

```bash
pnpm start
```

## Contact

**Victor Anyadiegwu** — Full-Stack & AI Engineer

- **Email:** [victoranyadiegwu610@gmail.com](mailto:victoranyadiegwu610@gmail.com)
- **Phone:** [(+234) 810 268 0872](tel:+2348102680872)
- **LinkedIn:** [victor-anyadiegwu-8286a9238](https://www.linkedin.com/in/victor-anyadiegwu-8286a9238)
- **GitHub:** [@Anyadiegwu](https://github.com/Anyadiegwu)
- **X:** [@iam_veek_thor](https://x.com/iam_veek_thor)
- **Instagram:** [@veek__thor](https://www.instagram.com/veek__thor)
