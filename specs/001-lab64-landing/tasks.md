# Tasks: LAB64 Group Company Landing Page

**Feature Branch**: `001-lab64-landing`
**Input**: Design documents from `/specs/001-lab64-landing/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅
**Tests**: NOT included (not requested in specification)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

---

## Format: `- [ ] [ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Next.js 14 project initialization and foundational structure

- [X] T001 Initialize Next.js 14 project with TypeScript, Tailwind CSS, and App Router at repository root
- [X] T002 [P] Configure TypeScript with strict mode in tsconfig.json
- [X] T003 [P] Configure Tailwind CSS with custom theme colors in tailwind.config.ts
- [X] T004 [P] Configure ESLint and Prettier in .eslintrc.json and .prettierrc
- [X] T005 [P] Configure Next.js with image optimization and bundle size monitoring in next.config.ts
- [X] T006 [P] Install Framer Motion and configure LazyMotion setup in package.json
- [X] T007 [P] Install @paper-design/shaders-react for hero animations in package.json
- [X] T008 Create project directory structure: src/{app,components,lib,types}, data/, public/companies/
- [X] T009 [P] Setup Git repository and create .gitignore with Next.js defaults
- [X] T010 [P] Create placeholder company assets directory structure in public/companies/

**Checkpoint**: Project structure and tooling ready for implementation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core TypeScript types, data structures, and utilities that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T011 [P] Create PortfolioCompany interface in src/types/portfolio.ts
- [X] T012 [P] Create PortfolioData interface in src/types/portfolio.ts
- [X] T013 [P] Create LAB64Metadata interface in src/types/metadata.ts
- [X] T014 [P] Create initial portfolio-companies.json with sample data in data/portfolio-companies.json
- [X] T015 [P] Implement data access functions (getAllCompanies, getActiveCompanies) in src/lib/portfolio.ts
- [X] T016 [P] Implement utility functions (clsx, cn) in src/lib/utils.ts
- [X] T017 [P] Setup LazyMotion provider in src/app/layout.tsx
- [X] T018 [P] Configure global styles and Tailwind directives in src/app/globals.css
- [X] T019 Create root layout with metadata configuration in src/app/layout.tsx
- [X] T020 [P] Add JSON Schema validation for portfolio data in specs/001-lab64-landing/contracts/portfolio-schema.json

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Company Portfolio (Priority: P1) 🎯 MVP

**Goal**: Display all LAB64 portfolio companies in a visually striking way with elegant cards

**Independent Test**: Load landing page and verify all company cards are visible with overviews, logos, and background images. Page should be responsive and professional on desktop/tablet/mobile.

### Implementation for User Story 1

- [X] T021 [P] [US1] Create HeroSection component structure in src/components/hero/HeroSection.tsx
- [X] T022 [P] [US1] Create HeroBackground component with @paper-design/shaders-react integration in src/components/hero/HeroBackground.tsx
- [X] T023 [P] [US1] Create CompanyCard component with Apple Card styling in src/components/portfolio/CompanyCard.tsx
- [X] T024 [P] [US1] Create CompanyGrid component with responsive layout in src/components/portfolio/CompanyGrid.tsx
- [X] T025 [P] [US1] Create Footer component with LAB64 branding in src/components/layout/Footer.tsx
- [X] T026 [US1] Implement card spotlight effect component in src/components/ui/card-spotlight.tsx
- [X] T027 [US1] Add CSS for card hover effects and 3D transforms in src/app/globals.css
- [X] T028 [US1] Implement responsive grid layout (3 cols desktop, 2 tablet, 1 mobile) in CompanyGrid
- [X] T029 [US1] Add background image with gradient overlay to CompanyCard
- [X] T030 [US1] Implement hero section with tagline and mission statement in HeroSection
- [X] T031 [US1] Integrate all components in main landing page in src/app/page.tsx
- [X] T032 [US1] Add portfolio company data loading to page component
- [X] T033 [US1] Implement "Coming Soon" badge for companies without websites
- [X] T034 [US1] Add prefers-reduced-motion support for all animations
- [ ] T035 [US1] Test responsive behavior on mobile, tablet, and desktop viewports
- [ ] T036 [US1] Optimize images: convert backgrounds to AVIF format
- [ ] T037 [US1] Add blur placeholders for all company background images

**Checkpoint**: User Story 1 complete - landing page displays portfolio companies elegantly

---

## Phase 4: User Story 2 - Navigate to Portfolio Company Websites (Priority: P2)

**Goal**: Enable visitors to click company cards and navigate to external company websites with clear interaction feedback

**Independent Test**: Click each company card and verify navigation to correct external website. Hover effects should provide clear feedback. "Coming Soon" cards should be non-clickable.

### Implementation for User Story 2

- [X] T038 [US2] Add link wrapper to CompanyCard with external URL handling in src/components/portfolio/CompanyCard.tsx
- [X] T039 [US2] Implement cursor tracking for spotlight effect in CompanyCard
- [X] T040 [US2] Add hover state animations (elevation, transform) to cards
- [X] T041 [US2] Implement conditional rendering for clickable vs non-clickable cards
- [X] T042 [US2] Add visual feedback for hover state (spotlight, shadow, elevation)
- [X] T043 [US2] Add keyboard navigation support (focus states) for accessibility
- [X] T044 [US2] Implement card tilt effect on hover using CSS 3D transforms
- [X] T045 [US2] Add Framer Motion animations for card entrance on scroll
- [ ] T046 [US2] Test all card interactions on touch devices (mobile/tablet)
- [ ] T047 [US2] Verify external links open correctly and handle errors gracefully

**Checkpoint**: User Stories 1 AND 2 complete - visitors can view and navigate to portfolio companies

---

## Phase 5: User Story 3 - Understand LAB64's Vision (Priority: P3)

**Goal**: Communicate LAB64's mission, vision, and value proposition clearly in under 10 seconds

**Independent Test**: Read hero section and verify LAB64's value proposition is clearly communicated with compelling tagline and about section.

### Implementation for User Story 3

- [X] T048 [US3] Add compelling tagline to hero section in src/components/hero/HeroSection.tsx
- [ ] T049 [US3] Create About LAB64 section component in src/components/about/AboutSection.tsx
- [ ] T050 [US3] Add mission/vision statement content to About section
- [ ] T051 [US3] Implement Framer Motion entrance animations for About section
- [ ] T052 [US3] Add professional typography and spacing for About content
- [ ] T053 [US3] Integrate About section into main page layout in src/app/page.tsx
- [X] T054 [US3] Add structured data (JSON-LD) for Organization schema in src/components/seo/OrganizationSchema.tsx
- [ ] T055 [US3] Verify content conveys "elegant, professional innovation" tone

**Checkpoint**: All user stories complete - landing page fully functional with vision clearly communicated

---

## Phase 6: Visual Effects & Animation Polish

**Purpose**: Advanced visual effects that enhance the premium feel (Liquid Logo, animations)

- [ ] T056 [P] Extract and port Liquid Logo component from paper-design repository to src/components/hero/LiquidLogo.tsx
- [ ] T057 [P] Implement lazy loading for Liquid Logo (desktop-only) with static fallback
- [ ] T058 [P] Add page entrance animations with Framer Motion LazyMotion
- [ ] T059 [P] Implement scroll-triggered reveal animations for sections
- [ ] T060 Add smooth transitions between sections with Framer Motion
- [ ] T061 Implement logo animation (3D rotation entrance) with CSS
- [ ] T062 Add loading states and fallback images for all animations
- [ ] T063 Test animation performance and ensure 60fps on all devices
- [ ] T064 Optimize animations for mobile (simplified effects, lower complexity)

**Checkpoint**: Visual effects complete - page has premium, cutting-edge feel

---

## Phase 7: SEO & Metadata

**Purpose**: Search engine optimization and social media metadata

- [X] T065 [P] Implement Next.js Metadata API configuration in src/app/layout.tsx
- [X] T066 [P] Add Open Graph metadata for social sharing
- [X] T067 [P] Add Twitter Card metadata
- [X] T068 [P] Create sitemap generation logic in src/app/sitemap.ts
- [X] T069 [P] Create robots.txt generation logic in src/app/robots.ts
- [X] T070 [P] Add structured data (Organization schema) to page
- [ ] T071 [P] Create Open Graph image (1200x630) and save to public/og-image.jpg
- [ ] T072 [P] Add favicon and app icons to public/
- [ ] T073 Verify all metadata renders correctly in page source
- [ ] T074 Test Open Graph preview on social media platforms

**Checkpoint**: SEO complete - page optimized for search engines and social sharing

---

## Phase 8: Accessibility & Performance Optimization

**Purpose**: WCAG 2.1 AA compliance and Lighthouse score ≥85-95

- [X] T075 [P] Add semantic HTML elements (nav, main, article, section) throughout
- [X] T076 [P] Add ARIA labels to all interactive elements
- [X] T077 [P] Add alt text to all images with descriptive content
- [X] T078 [P] Implement keyboard navigation for all interactive elements
- [X] T079 [P] Add focus visible styles for keyboard navigation
- [ ] T080 [P] Add skip-to-content link for screen readers
- [ ] T081 Test with screen readers (VoiceOver/NVDA)
- [ ] T082 Run accessibility audit with @axe-core/react
- [X] T083 Optimize bundle size: analyze with next/bundle-analyzer
- [ ] T084 Implement code splitting for below-the-fold components
- [ ] T085 Optimize Critical Rendering Path: inline critical CSS
- [ ] T086 Add resource preloading for hero poster image
- [X] T087 Configure caching headers for static assets in next.config.ts
- [ ] T088 Run Lighthouse audit on localhost (target: ≥85 mobile, ≥90 desktop)
- [ ] T089 Optimize images: compress and serve in AVIF/WebP with fallbacks
- [ ] T090 Measure and optimize Largest Contentful Paint (LCP <2.5s desktop, <3.5s mobile)
- [ ] T091 Measure and optimize First Contentful Paint (FCP <1.8s)
- [ ] T092 Measure and optimize Total Blocking Time (TBT <200ms)
- [ ] T093 Verify Cumulative Layout Shift (CLS <0.1)

**Checkpoint**: Accessibility and performance targets met

---

## Phase 9: Testing & Quality Assurance

**Purpose**: Cross-browser testing, error handling, and edge case validation

- [ ] T094 [P] Test on Chrome (latest 2 versions)
- [ ] T095 [P] Test on Firefox (latest 2 versions)
- [ ] T096 [P] Test on Safari (latest 2 versions)
- [ ] T097 [P] Test on Edge (latest 2 versions)
- [ ] T098 [P] Test on Chrome Mobile (Android)
- [ ] T099 [P] Test on Mobile Safari (iOS)
- [ ] T100 Test slow network conditions (3G simulation)
- [ ] T101 Test with JavaScript disabled (progressive enhancement)
- [ ] T102 Verify error handling for missing images
- [ ] T103 Verify error handling for broken external links
- [ ] T104 Test empty state (no companies in JSON)
- [ ] T105 Test with very long company names and descriptions
- [ ] T106 Verify portfolio data JSON Schema validation
- [ ] T107 Run TypeScript type checking (npm run type-check)
- [ ] T108 Run ESLint and fix all warnings (npm run lint)
- [ ] T109 Verify no console errors in production build

**Checkpoint**: All cross-browser and edge case testing complete

---

## Phase 10: Deployment & Production Readiness

**Purpose**: Deploy to Vercel and verify production environment

- [ ] T110 Create Vercel project and link to GitHub repository
- [ ] T111 Configure environment variables in Vercel dashboard
- [ ] T112 Set up custom domain (lab64.ai) in Vercel
- [ ] T113 Configure DNS records for custom domain
- [ ] T114 Enable HTTPS and SSL certificates
- [ ] T115 Create production build locally and verify (npm run build)
- [ ] T116 Deploy to Vercel production environment
- [ ] T117 Run Lighthouse audit on production URL
- [ ] T118 Verify all images load correctly on production
- [ ] T119 Verify all external links work on production
- [ ] T120 Test SEO: verify sitemap.xml is accessible
- [ ] T121 Test SEO: verify robots.txt is accessible
- [ ] T122 Test Open Graph metadata on social media preview
- [ ] T123 Setup Vercel Analytics (optional, privacy-respecting)
- [ ] T124 Create deployment documentation in specs/001-lab64-landing/DEPLOYMENT.md
- [ ] T125 Verify production meets all success criteria (SC-001 through SC-010)

**Checkpoint**: Production deployment complete and verified

---

## Phase 11: Documentation & Handoff

**Purpose**: Final documentation and feature completion

- [X] T126 [P] Update README.md with project overview and setup instructions
- [X] T127 [P] Document content update workflow in specs/001-lab64-landing/quickstart.md
- [X] T128 [P] Create CHANGELOG.md with initial release notes
- [X] T129 [P] Document deployment process and environment variables
- [ ] T130 Create feature completion report in specs/001-lab64-landing/PLANNING-COMPLETE.md
- [ ] T131 Archive design documents and mark feature as complete
- [ ] T132 Run final validation of quickstart.md instructions

**Checkpoint**: Feature complete - ready for launch 🚀

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - can start immediately
- **Phase 2 (Foundational)**: Depends on Phase 1 completion - BLOCKS all user stories
- **Phase 3 (US1)**: Depends on Phase 2 completion - Core MVP functionality
- **Phase 4 (US2)**: Depends on Phase 3 completion - Adds interactivity to MVP
- **Phase 5 (US3)**: Depends on Phase 3 completion - Can run parallel with Phase 4
- **Phase 6 (Visual Effects)**: Depends on Phases 3-5 completion - Enhancement layer
- **Phase 7 (SEO)**: Can run parallel with Phases 3-6 - Independent concern
- **Phase 8 (Accessibility)**: Depends on Phases 3-6 completion - Final polish
- **Phase 9 (Testing)**: Depends on all implementation phases (3-8) - Validation
- **Phase 10 (Deployment)**: Depends on Phase 9 completion - Production launch
- **Phase 11 (Documentation)**: Depends on Phase 10 completion - Handoff

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational phase - Core portfolio display
- **User Story 2 (P2)**: Depends on US1 completion - Adds navigation to existing cards
- **User Story 3 (P3)**: Depends on US1 completion - Adds context to existing page (can run parallel with US2)

### Within Each Phase

**Phase 3 (US1) - Serial Dependencies**:
- T021-T025 (components) can run in parallel
- T026-T027 (effects) depend on T023 (CompanyCard exists)
- T031 (page integration) depends on all components being ready
- T036-T037 (optimization) should be last

**Phase 4 (US2) - Serial Dependencies**:
- T038-T044 (interactions) build on existing CompanyCard from Phase 3
- T045 (animations) can run parallel with T038-T044
- T046-T047 (testing) should be last

**Phase 5 (US3) - Parallel Opportunities**:
- T048-T050 (content) can run in parallel
- T051-T052 (styling) depend on T048-T050
- T054 (structured data) can run in parallel with content work

### Parallel Opportunities

Within phases, tasks marked **[P]** can run in parallel:

**Phase 1 (Setup)**: T002, T003, T004, T005, T006, T007, T009, T010 (8 tasks in parallel)

**Phase 2 (Foundational)**: T011, T012, T013, T014, T015, T016, T017, T018, T020 (9 tasks in parallel)

**Phase 3 (US1)**: T021, T022, T023, T024, T025 (5 components in parallel)

**Phase 7 (SEO)**: T065-T072 (8 tasks in parallel)

**Phase 8 (Accessibility)**: T075-T080 (6 tasks in parallel)

**Phase 9 (Testing)**: T094-T099 (6 browser tests in parallel)

**Phase 11 (Documentation)**: T126-T129 (4 tasks in parallel)

---

## Parallel Example: Phase 3 (User Story 1)

```bash
# Launch all component creation tasks in parallel:
Task: "Create HeroSection component structure in src/components/hero/HeroSection.tsx"
Task: "Create HeroBackground component with @paper-design/shaders-react integration in src/components/hero/HeroBackground.tsx"
Task: "Create CompanyCard component with Apple Card styling in src/components/portfolio/CompanyCard.tsx"
Task: "Create CompanyGrid component with responsive layout in src/components/portfolio/CompanyGrid.tsx"
Task: "Create Footer component with LAB64 branding in src/components/layout/Footer.tsx"

# Then proceed sequentially with integration and polish
```

---

## Implementation Strategy

### MVP First (Fastest Path to Value)

**Goal**: Deployable landing page in 1-2 weeks

1. **Week 1**: Complete Phase 1 (Setup) + Phase 2 (Foundational) + Phase 3 (US1)
2. **Validate**: Landing page displays portfolio companies beautifully
3. **Deploy**: Push to Vercel for stakeholder review
4. **Result**: MVP that showcases LAB64 portfolio ✅

### Incremental Delivery (Recommended)

**Goal**: Add value iteratively with each user story

1. **Sprint 1** (Days 1-3): Phase 1 + Phase 2 → Foundation ready
2. **Sprint 2** (Days 4-7): Phase 3 (US1) → Deploy MVP (view companies)
3. **Sprint 3** (Days 8-10): Phase 4 (US2) → Deploy v1.1 (clickable cards)
4. **Sprint 4** (Days 11-13): Phase 5 (US3) → Deploy v1.2 (with vision/mission)
5. **Sprint 5** (Days 14-17): Phase 6-8 → Deploy v2.0 (visual effects + SEO + a11y)
6. **Sprint 6** (Days 18-21): Phase 9-11 → Production launch 🚀

### Full Feature (3-4 Weeks)

**Goal**: Complete, polished landing page with all features

1. **Week 1**: Phases 1-3 (Setup + Foundation + US1 MVP)
2. **Week 2**: Phases 4-6 (US2 + US3 + Visual Effects)
3. **Week 3**: Phases 7-8 (SEO + Accessibility + Performance)
4. **Week 4**: Phases 9-11 (Testing + Deployment + Documentation)

---

## Bundle Size Budget Tracking

**Target**: <240KB gzipped (with 63KB buffer)

| Component | Estimated Size | Tasks |
|-----------|----------------|-------|
| Next.js runtime | ~70KB | T001 |
| React 18 | ~45KB | T001 |
| Framer Motion (LazyMotion) | ~5KB | T006, T017 |
| @paper-design/shaders-react | ~5KB | T007, T022 |
| Liquid Logo | 50-100KB | T056 (desktop-only, lazy loaded) |
| Tailwind CSS (purged) | ~10KB | T003, T018 |
| Custom JS | ~5KB | T015, T016, T026 |
| JSON data | ~2KB | T014 |
| **TOTAL** | **192-237KB** | ✅ Within budget |

Monitor with `npm run build` output after T083 (bundle analysis).

---

## Success Criteria Mapping

| Success Criterion | Related Tasks | Validation |
|-------------------|---------------|------------|
| SC-001: Identify companies in <10s | T023-T025, T031 | Manual review |
| SC-002: 40% click-through rate | T038-T047 | Analytics post-launch |
| SC-003: Page loads in <3s | T083-T093 | Lighthouse audit (T088, T117) |
| SC-004: 95% successful navigation | T047, T103 | Error handling tests |
| SC-005: Professional perception 8/10 | T021-T064 | Stakeholder review |
| SC-006: WCAG 2.1 AA compliance | T075-T082 | Accessibility audit (T082) |
| SC-007: Zero broken links | T047, T119 | Link validation |
| SC-008: Mobile equivalent experience | T035, T046, T098-T099 | Cross-device testing |
| SC-009: First page ranking | T065-T074, T120-T122 | SEO validation |
| SC-010: 50% organic traffic | T065-T074 | Analytics (6 months post-launch) |

---

## Risk Mitigation Tasks

| Risk | Mitigation Tasks | Notes |
|------|------------------|-------|
| Bundle size exceeds 240KB | T083 (bundle analysis), T084 (code splitting) | Continuous monitoring |
| Performance below target | T088-T093 (optimization), T117 (production audit) | Target: ≥85 mobile |
| Liquid Logo performance impact | T057 (lazy loading, desktop-only) | 50-100KB isolated to desktop |
| Accessibility failures | T075-T082 (WCAG compliance) | Automated + manual testing |
| Cross-browser issues | T094-T099 (browser testing) | Latest 2 versions |
| SEO crawlability issues | T065-T074 (metadata + structured data) | Content in DOM from start |

---

## Notes

- **[P] tasks**: Different files, no dependencies, can run in parallel
- **[Story] labels**: Map tasks to user stories for traceability
- **Tests**: NOT included (not explicitly requested in specification)
- **Checkpoints**: Each phase ends with validation milestone
- **MVP Focus**: Phase 3 (US1) delivers core value independently
- **Performance**: Prioritized throughout (Constitution Principle II)
- **Accessibility**: Built-in from start (Constitution Principle III)
- **Bundle Budget**: Monitored continuously (<240KB strict limit)
- **File Paths**: All paths relative to repository root
- **Commit Strategy**: Commit after each logical group of tasks
- **Deployment**: Vercel auto-deploys on push (T116)

---

## Total Task Count

- **Phase 1 (Setup)**: 10 tasks
- **Phase 2 (Foundational)**: 10 tasks
- **Phase 3 (US1)**: 17 tasks (MVP)
- **Phase 4 (US2)**: 10 tasks
- **Phase 5 (US3)**: 8 tasks
- **Phase 6 (Visual Effects)**: 9 tasks
- **Phase 7 (SEO)**: 10 tasks
- **Phase 8 (Accessibility)**: 19 tasks
- **Phase 9 (Testing)**: 16 tasks
- **Phase 10 (Deployment)**: 16 tasks
- **Phase 11 (Documentation)**: 7 tasks

**TOTAL**: 132 tasks

**MVP Scope** (Phases 1-3): 37 tasks (28% of total)
**Full Feature**: 132 tasks (3-4 weeks estimated)

---

**Generated**: 2025-10-28
**Status**: Ready for implementation ✅
**Next Step**: Begin with Phase 1 (Setup) tasks T001-T010
