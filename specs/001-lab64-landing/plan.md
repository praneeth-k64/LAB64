# Implementation Plan: LAB64 Group Company Landing Page

**Branch**: `001-lab64-landing`
**Date**: 2025-10-28
**Spec**: [spec.md](./spec.md)
**Status**: Ready for Implementation

---

## Summary

Building a visually stunning, performance-optimized landing page showcasing LAB64's portfolio companies. The page features Paper Shaders animated hero background, WebGL liquid logo, Apple-style company cards with spotlight hover effects, and smooth Framer Motion animations. Primary goal: elegant, professional innovation that leads visitors to portfolio company websites.

**Key Technical Approach**: Next.js 14 with React 18, leveraging paper-design/shaders-react for hero, extracting liquid logo from paper-design repo, porting Inspira UI card effects to React. Static JSON data, no backend. Target: <240KB bundle, Lighthouse 85-95.

---

## Technical Context

**Language/Version**: TypeScript 5.0+ (strict mode), JavaScript ES2022
**Framework**: Next.js 14+ (App Router), React 18+
**Primary Dependencies**:
- @paper-design/shaders-react (5KB - hero background)
- framer-motion (LazyMotion - 4.6KB for animations)
- tailwindcss (10KB purged - styling)
- next/image (built-in - image optimization)

**Storage**: Static JSON (`/data/portfolio-companies.json` - 2KB)
**Testing**: Jest + React Testing Library, Playwright (E2E)
**Target Platform**: Web (desktop/tablet/mobile), Vercel Edge
**Project Type**: Web (single Next.js app, no backend)
**Performance Goals**:
- Lighthouse ≥85-95 mobile (visual impact prioritized)
- LCP <2.5s desktop, <3.5s mobile
- Bundle <240KB gzipped

**Constraints**:
- Bundle size <240KB gzipped (strict)
- Constitution compliance (5 principles)
- WCAG 2.1 AA accessibility
- No CMS (static JSON updates via Git)

**Scale/Scope**: 3-10 portfolio companies, 5-7 components, ~15 files

---

## Constitution Check

### Alignment with Principles

**✅ Principle I: Simplicity First (YAGNI)**
- Static site, no backend/database
- JSON data file (not CMS)
- Minimal dependencies (7 total)
- Clear component structure

**⚠️ Principle II: Performance Excellence**
- Target adjusted: 85-95 (from 90+) for visual effects
- Liquid Logo: 50-100KB, desktop-only, lazy loaded
- All other optimizations applied
- **User accepted trade-off**: visual impact > strict performance

**✅ Principle III: Accessibility by Design**
- Semantic HTML (nav, main, article)
- Keyboard navigation on all cards
- prefers-reduced-motion support
- ARIA labels, alt text

**✅ Principle IV: Component-Driven Development**
- React components with TypeScript
- Clear props interfaces
- Independently testable

**✅ Principle V: Design Excellence & Motion**
- Paper Shaders, Liquid Logo, spotlight effects
- Framer Motion animations
- Apple Card design aesthetic

**Result**: ✅ **APPROVED** (with performance adjustment documented)

---

## Project Structure

### Documentation (specs/)

```
specs/001-lab64-landing/
├── spec.md                       # Feature specification
├── plan.md                       # This file
├── research.md                   # Technical research (Phase 0)
├── data-model.md                 # Data structures (Phase 1)
├── quickstart.md                 # Developer guide (Phase 1)
├── contracts/
│   ├── portfolio-schema.json    # JSON Schema validation
│   └── README.md                # Contract documentation
└── PLANNING-COMPLETE.md         # Final summary
```

### Source Code (Next.js App)

```
src/
├── app/
│   ├── layout.tsx               # Root layout + SEO metadata
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles + Tailwind
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # Auto-generated robots.txt
│
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── HeroBackground.tsx   # Paper Shaders
│   │   └── LiquidLogo.tsx       # Extracted from paper-design
│   │
│   ├── portfolio/
│   │   ├── CompanyGrid.tsx
│   │   └── CompanyCard.tsx      # Apple Card + Spotlight
│   │
│   ├── ui/
│   │   └── card-spotlight.tsx   # Ported from Inspira UI
│   │
│   └── layout/
│       └── Footer.tsx
│
├── lib/
│   ├── portfolio.ts             # Data access functions
│   └── utils.ts                 # Utilities (clsx, cn)
│
└── types/
    ├── portfolio.ts             # PortfolioCompany interface
    └── metadata.ts              # LAB64Metadata interface

data/
└── portfolio-companies.json     # Portfolio data (source of truth)

public/
├── companies/                   # Company assets
│   ├── [company-id]-logo.svg
│   └── [company-id]-bg.avif
├── lab64-logo.svg              # Main logo
├── og-image.jpg                # Open Graph (1200x630)
└── favicon.ico

tests/
├── components/                  # Component tests
├── integration/                 # E2E tests (Playwright)
└── utils.test.ts               # Utility tests
```

**Structure Decision**: Single Next.js app (Option 1) - no backend needed. Static site generation (SSG) for optimal performance. All content managed via JSON file in repository.

---

## Technology Stack (Final)

### Core
- **Framework**: Next.js 14+, React 18+, TypeScript 5.0+
- **Styling**: Tailwind CSS 3.0+
- **Build**: Turbopack (Next.js 14 default)
- **Deployment**: Vercel Edge Network

### Visual Effects (67KB total)
- **Paper Shaders**: @paper-design/shaders-react@^0.0.21 (5KB)
- **Liquid Logo**: Extracted from paper-design/liquid-logo repo (50-100KB)
- **Card Spotlight**: Ported from Inspira UI (1KB custom code)
- **Apple Card**: Ported from Inspira UI (0KB - CSS only)
- **Animations**: framer-motion@^11.0 (LazyMotion 4.6KB)

### Data & Content
- **Data Storage**: Static JSON file
- **CMS**: None (Git-based updates)
- **Validation**: JSON Schema (ajv - optional)

### Images & Media
- **Optimization**: next/image (built-in)
- **Formats**: AVIF/WebP with fallbacks
- **Placeholders**: Blur placeholders (built-in)

### SEO
- **Metadata**: Next.js 14 Metadata API (built-in)
- **Sitemap**: app/sitemap.ts (auto-generated)
- **Robots**: app/robots.ts (auto-generated)
- **Structured Data**: JSON-LD (Organization schema)

### Development
- **Linting**: ESLint + eslint-config-next
- **Formatting**: Prettier
- **Testing**: Jest, React Testing Library, Playwright
- **Git**: Husky (pre-commit hooks - optional)

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "framer-motion": "^11.0.0",
    "@paper-design/shaders-react": "^0.0.21",
    "clsx": "^2.1.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "@axe-core/react": "^4.8.0",
    "ajv": "^8.12.0",
    "ajv-formats": "^3.0.1",
    "@playwright/test": "^1.40.0"
  }
}
```

**Total**: 7 runtime dependencies, 9 dev dependencies

---

## Implementation Phases

### Phase 0: Research ✅ COMPLETE
- [x] 3D library evaluation (CSS-only chosen)
- [x] Hero animation strategy (Paper Shaders)
- [x] Card effects research (Spotlight + Apple Card)
- [x] Animation library comparison (LazyMotion)
- [x] SEO strategy (Metadata API)
- [x] Framework decision (Next.js/React confirmed)
- [x] Performance optimization research
**Output**: research.md

### Phase 1: Design Artifacts ✅ COMPLETE
- [x] Data model definition
- [x] JSON Schema contracts
- [x] Developer quickstart guide
**Output**: data-model.md, contracts/, quickstart.md

### Phase 2: Foundation (Week 1) - READY TO START
- [ ] Next.js 14 project initialization
- [ ] Tailwind CSS configuration
- [ ] TypeScript strict mode setup
- [ ] Portfolio data JSON structure
- [ ] Basic component scaffolding
- [ ] Git repository initialization

### Phase 3: Core Components (Week 1-2)
- [ ] Hero section structure
- [ ] Paper Shaders integration
- [ ] Company card grid layout
- [ ] Portfolio data loading
- [ ] Responsive grid (desktop/tablet/mobile)
- [ ] Footer component

### Phase 4: Visual Effects (Week 2)
- [ ] Extract Liquid Logo from paper-design repo
- [ ] Port Card Spotlight from Inspira UI to React
- [ ] Port Apple Card styling from Inspira UI
- [ ] Implement hover animations
- [ ] Lazy loading strategy for Liquid Logo

### Phase 5: Animations (Week 2-3)
- [ ] Framer Motion LazyMotion setup
- [ ] Page entrance animations
- [ ] Scroll-triggered reveals
- [ ] Card hover interactions
- [ ] prefers-reduced-motion support

### Phase 6: Content & SEO (Week 3)
- [ ] Add portfolio company data
- [ ] Next.js Metadata API implementation
- [ ] Sitemap generation
- [ ] Robots.txt generation
- [ ] JSON-LD structured data
- [ ] Open Graph images (1200x630)

### Phase 7: Optimization & Testing (Week 3-4)
- [ ] Image optimization (AVIF conversion)
- [ ] Bundle size analysis
- [ ] Lighthouse audit & optimization
- [ ] Accessibility testing (axe, keyboard nav)
- [ ] Cross-browser testing
- [ ] Mobile device testing

### Phase 8: Deployment (Week 4)
- [ ] Vercel project setup
- [ ] Environment variables
- [ ] Production build verification
- [ ] Lighthouse audit (production)
- [ ] Analytics integration (optional)
- [ ] Launch

**Timeline**: 3-4 weeks

---

## Bundle Size Budget

| Component | Size (gzipped) | Status |
|-----------|----------------|--------|
| Next.js runtime | 70KB | ✅ |
| React 18 | 45KB | ✅ |
| Framer Motion (LazyMotion) | 5KB | ✅ |
| @paper-design/shaders-react | 5KB | ✅ |
| Liquid Logo (paper-design) | 50-100KB | ⚠️ Desktop-only |
| Card Spotlight (custom) | 1KB | ✅ |
| Tailwind CSS (purged) | 10KB | ✅ |
| Custom JS | 5KB | ✅ |
| JSON data | 2KB | ✅ |
| **TOTAL** | **193-238KB** | ✅ Within <240KB target |

---

## Performance Targets (Adjusted)

| Metric | Target | Strategy |
|--------|--------|----------|
| **Lighthouse (Desktop)** | ≥90 | Achievable |
| **Lighthouse (Mobile)** | ≥85-95 | Visual impact prioritized |
| **LCP** | <2.5s desktop | Hero poster preload |
| **LCP** | <3.5s mobile | Lazy load Liquid Logo |
| **FCP** | <1.8s | Minimal blocking resources |
| **TBT** | <200ms | Code splitting, LazyMotion |
| **CLS** | <0.1 | Fixed aspect ratios |
| **Bundle** | <240KB | Strict monitoring |

**User Priority**: Visual impact > strict performance (documented & approved)

---

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Performance target 85 (vs 90+) | Liquid Logo (50-100KB) + visual effects required for premium brand | Static logo insufficient - brand differentiation critical for marketing site credibility |
| Liquid Logo WebGL (complex) | Signature brand element, cutting-edge perception | CSS animations too simple - doesn't convey "visionary innovation" positioning |

---

## Component Porting Tasks

### From Inspira UI (Vue) to React

**1. Card Spotlight Effect**
- Source: inspira-ui.com/docs/components/cards/card-spotlight
- Complexity: Low (CSS + minimal JS)
- Effort: 1-2 hours
- Implementation: CSS radial gradient + React mousemove handler

**2. Apple Card Styling**
- Source: inspira-ui.com/docs/components/cards/apple-card-carousel
- Complexity: Very Low (pure CSS)
- Effort: 30 minutes
- Implementation: Tailwind classes + CSS Grid

**Total Porting**: 2-3 hours

---

## Testing Strategy

### Unit Tests (Jest + RTL)
- Component rendering
- Data parsing (JSON)
- Utility functions
- Link validation logic

### Integration Tests (Playwright)
- Full page rendering
- Navigation flows
- Responsive behavior
- Card interactions

### Performance Tests
- Lighthouse CI (every PR)
- Bundle size monitoring
- Animation frame rate testing

### Accessibility Tests
- axe automated testing
- Manual keyboard navigation
- Screen reader testing (VoiceOver/NVDA)

### Browser Matrix
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari, Chrome Mobile

---

## Deployment Configuration

### Environments
- **Development**: localhost:3000
- **Preview**: Vercel preview (per PR)
- **Production**: Vercel production (main branch)

### CI/CD Pipeline (Vercel)
- ESLint + TypeScript checks
- Lighthouse CI (performance gates)
- Build verification
- Auto-deploy on push

### Environment Variables
```bash
# Production (Vercel Dashboard)
NEXT_PUBLIC_SITE_URL=https://lab64.ai
NEXT_PUBLIC_ANALYTICS_ID=optional
```

---

## Risk Mitigation

### Risk 1: Liquid Logo Performance
**Impact**: High (50-100KB, GPU-intensive)
**Mitigation**: Desktop-only, lazy loaded, static fallback image
**Status**: ✅ Mitigated

### Risk 2: Porting Inspira UI Components
**Impact**: Medium (2-3 hours effort)
**Mitigation**: Components are mostly CSS, minimal complexity
**Status**: ✅ Acceptable

### Risk 3: Bundle Size Creep
**Impact**: High (exceeding 240KB)
**Mitigation**: Bundle analyzer on every build, strict monitoring
**Status**: ⚠️ Monitor continuously

### Risk 4: Performance Target Miss
**Impact**: Low (85 vs 90 Lighthouse)
**Mitigation**: User accepted trade-off, continuous optimization
**Status**: ✅ Approved

---

## Future Enhancements (Deferred)

1. **Spline 3D Component** (300-430KB)
   - Reason deferred: Exceeds bundle budget
   - Alternative: CSS 3D transforms sufficient for v1
   - Reconsider: Post-launch if performance allows

2. **CMS Integration** (Sanity/Contentful)
   - Reason deferred: Static JSON sufficient for 3-10 companies
   - Trigger: When non-technical editors need access
   - Migration path: Documented in data-model.md

3. **React Three Fiber** (150KB)
   - Reason deferred: CSS 3D adequate
   - Alternative to: Spline (lighter than Spline)
   - Reconsider: If advanced 3D needed

4. **shadcn/ui Full Suite**
   - Current: No forms needed
   - Add when: Contact form or interactive features added
   - Benefit: Consistent component design system

---

## Success Criteria

### Planning Phase ✅ COMPLETE
- [x] All research complete
- [x] All technical decisions made
- [x] Data model defined
- [x] Contracts created
- [x] Developer documentation written
- [x] Technology stack finalized
- [x] Bundle size within budget
- [x] Constitution compliance verified

### Implementation Phase (To Be Completed)
- [ ] Lighthouse score ≥85-95 (mobile)
- [ ] All functional requirements met (FR-001 through FR-014)
- [ ] All user stories testable
- [ ] Accessibility audit passes (WCAG 2.1 AA)
- [ ] Zero console errors
- [ ] TypeScript strict mode compiles
- [ ] Cross-browser compatibility verified
- [ ] Production deployed to Vercel

---

## Next Steps

**Ready for**: `/speckit.tasks` to generate task breakdown
**Or**: Begin manual implementation following Phase 2

**Branch**: `001-lab64-landing` (active)
**Specs Location**: `/specs/001-lab64-landing/`
**Working Directory**: Project root (contains `.specify/`)

---

**Plan Version**: 2.0 (Updated with final decisions)
**Last Updated**: 2025-10-28
**Status**: ✅ **READY FOR IMPLEMENTATION**
