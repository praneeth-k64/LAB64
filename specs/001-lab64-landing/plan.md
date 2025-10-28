# Implementation Plan: LAB64 Group Company Landing Page

**Feature**: LAB64 Group Company Landing Page
**Branch**: `001-lab64-landing`
**Spec**: [spec.md](./spec.md)
**Created**: 2025-10-28
**Status**: Planning

---

## Technical Context

### Technology Stack

**Frontend Framework**:
- Next.js 14+ with App Router (as per constitution)
- TypeScript strict mode
- React 18+ for component architecture

**Styling & Animation**:
- Tailwind CSS with custom design tokens
- Framer Motion LazyMotion (4.6KB) for complex animations
- CSS transforms for performance-optimized 60fps animations
- CSS Grid for responsive card layout
- Paper Shaders (@paper-design/shaders-react) for hero background (5KB)

**Visual Effects** (FINALIZED):
- **Hero Background**: Paper Shaders (Canvas-based WebGL, 5KB, 60fps)
- **Logo Animation**: Liquid Logo effect (WebGL2, 50-100KB, desktop-only with lazy loading)
- **Card Design**: Apple Card style (vertical elongated, full-image background, gradient fade)
- **Card Hover**: Spotlight effect (CSS radial gradient + 1KB cursor tracking)
- **3D Effects**: CSS 3D transforms only (no external libraries)
- **Future Enhancement**: Spline 3D component (deferred to post-launch)

**Image Optimization**:
- Next.js Image component with AVIF/WebP format
- Lazy loading for company card images
- Blur placeholders for all images
- Sharp for image processing (built into Next.js)

**Content Management** (FINALIZED):
- Static JSON data file (`/data/portfolio-companies.json`)
- No CMS required (infrequent updates via Git commits)

**Accessibility**:
- Axe accessibility linter
- prefers-reduced-motion media query support
- Semantic HTML (nav, main, article, button)
- ARIA labels for interactive elements

**SEO** (FINALIZED):
- Next.js 14 native Metadata API (no external libraries)
- Open Graph tags for social sharing
- Structured data (JSON-LD) for organization markup
- Automatic sitemap generation (`app/sitemap.ts`)
- robots.txt generation (`app/robots.ts`)

**Performance** (FINALIZED):
- Lighthouse CI integration
- Bundle size monitoring (<200KB gzipped)
- **Target**: Lighthouse ≥85 (adjusted for visual effects)
- **Performance Priority**: Visual impact > strict performance (acceptable trade-off)
- Vercel Edge CDN (default, no custom CDN needed)

**Hosting & Deployment**:
- Vercel (as per constitution)
- Automatic preview deployments
- Edge network optimization

### Dependencies

**Core Dependencies** (FINALIZED):
- next@^14.0.0
- react@^18.0.0
- react-dom@^18.0.0
- typescript@^5.0.0
- tailwindcss@^3.0.0
- framer-motion@^11.0.0 (using LazyMotion)
- @paper-design/shaders-react@^0.0.60 (hero background)
- clsx (conditional CSS classes)

**Visual Effects Libraries**:
- @paper-design/shaders-react@^0.0.21 (hero background)
- Liquid Logo: Extract from paper-design/liquid-logo repo (Next.js app)

**Component Porting** (from Inspira UI Vue to React):
- Card Spotlight effect (~2 hours porting effort)
- Apple Card styling (~30 min porting effort)
- Additional effects may be added later

**Development Dependencies**:
- @types/react
- @types/node
- eslint + eslint-config-next
- prettier
- @axe-core/react (accessibility testing)

### Integration Points

**External Links**:
- Portfolio company websites (external URLs)
- Must handle broken/unavailable URLs gracefully

**Assets**:
- Company logos/icons (stored in `/public/companies/`)
- Hero background video or animated graphics
- LAB64 logo with animated variant

**Analytics** (if required):
- Privacy-respecting analytics (Plausible or similar)
- Click-through tracking for company cards

### ✅ All Clarifications Resolved (FINAL)

All technical unknowns have been resolved through research and user decisions:

1. ✅ **Hero Background**: Paper Shaders (@paper-design/shaders-react) - 5KB, 60fps
2. ✅ **Liquid Logo**: Extract from paper-design/liquid-logo Next.js repo - 50-100KB
3. ✅ **Card Spotlight**: Port from Inspira UI to React - ~1KB (CSS + minimal JS)
4. ✅ **Apple Card Styling**: Port from Inspira UI to React - 0KB (pure CSS)
5. ✅ **Data Management**: Static JSON file (no CMS)
6. ✅ **SEO Strategy**: Next.js 14 Metadata API + automatic sitemap/robots.txt
7. ✅ **CDN**: Vercel Edge CDN (default)
8. ✅ **Animations**: Framer Motion LazyMotion - 4.6KB
9. ✅ **Framework**: Next.js 14 + React 18 (staying with React ecosystem)
10. ✅ **Performance Target**: Lighthouse 85-95 (visual impact prioritized)
11. ✅ **Deferred**: Spline 3D component (future enhancement)

---

## Constitution Check

### Alignment Review

** Principle I: Simplicity First (YAGNI)**
- Landing page is inherently simple: hero + cards + footer
- Risk: 3D effects and advanced animations could violate YAGNI
- Mitigation: Justify each visual enhancement against conversion value; start with CSS-only effects before adding libraries

** Principle II: Performance Excellence**
- Target: Lighthouse performance e90 on mobile
- Risk: Animated background, 3D elements, and large card images could degrade performance
- Mitigation: Lazy load card images, optimize videos, use efficient animation techniques (GPU-accelerated transforms), monitor bundle size

** Principle III: Accessibility by Design**
- Risk: Heavy focus on visual effects could exclude keyboard/screen reader users
- Mitigation: Ensure all cards are keyboard navigable, respect prefers-reduced-motion, provide descriptive alt text, use semantic HTML

** Principle IV: Component-Driven Development**
- Clear component structure: Hero, CompanyCard, AboutSection, Footer
- TypeScript props interfaces for all components
- Components independently testable

** Principle V: Design Excellence & Motion**
- Directly aligned: spec explicitly requires "elegant, professional innovation" with sophisticated animations
- Cursor tracking, hover effects, transitions all required by spec
- Must balance visual sophistication with performance constraints

### Quality Gates Validation

**Pre-Deployment Requirements**:
- [ ] Lighthouse performance e90 (mobile) - HIGH RISK due to animations/3D
- [ ] All images use Next.js Image component
- [ ] Axe accessibility audit passes
- [ ] Keyboard navigation tested on all cards
- [ ] prefers-reduced-motion respected
- [ ] TypeScript strict mode, no errors
- [ ] SEO meta tags complete
- [ ] 60fps animation performance verified
- [ ] Visual design professionally reviewed

**Constitution Conflicts**:
- **FR-014 (3D elements) vs Performance**: 3D libraries (Three.js ~600KB) could violate bundle size limit (<200KB)
  - **Resolution**: Use lightweight 3D approach OR make 3D optional enhancement loaded dynamically
- **FR-007a (animated background) vs Simplicity**: Complex background could be over-engineering
  - **Resolution**: Start with optimized video loop; evaluate if CSS gradient animation sufficient

### Risk Assessment

**HIGH RISK**:
- Performance degradation from animations and 3D effects
- Bundle size explosion from visual libraries

**MEDIUM RISK**:
- Accessibility challenges with motion-heavy design
- Broken external links to portfolio company websites

**LOW RISK**:
- Responsive layout (well-supported by Tailwind)
- Component structure (standard Next.js patterns)

---

## Phase 0: Research & Decisions

### Research Tasks

1. **3D Library Evaluation**
   - Compare Three.js vs React Three Fiber vs Spline vs CSS-only 3D
   - Criteria: bundle size, performance, learning curve, visual impact
   - Output: Recommendation with bundle size analysis

2. **Hero Background Animation**
   - Research best practices for hero animations in marketing sites
   - Compare: pre-rendered video, canvas particles, CSS animations, WebGL shaders
   - Criteria: performance, visual quality, ease of implementation
   - Output: Technical approach with performance benchmarks

3. **Hover Effect Implementation**
   - Research spotlight/illumination effects on cards
   - Compare: CSS radial gradients, canvas overlays, shader effects
   - Criteria: 60fps performance, cross-browser support, complexity
   - Output: Code examples and performance analysis

4. **Data Management Strategy**
   - Evaluate static JSON vs headless CMS (Sanity, Contentful)
   - Criteria: update frequency, technical complexity, cost
   - Output: Recommendation based on LAB64's content update needs

5. **SEO Best Practices**
   - Research Next.js 14 Metadata API vs next-seo library
   - Research structured data formats for organization/portfolio
   - Criteria: ease of use, SEO effectiveness
   - Output: SEO implementation checklist

6. **Performance Optimization for Animated Sites**
   - Research techniques for maintaining Lighthouse score with heavy animations
   - Best practices: lazy loading, code splitting, asset optimization
   - Output: Performance optimization checklist

### Unknowns to Resolve

All items marked "NEEDS CLARIFICATION" in Technical Context section will be resolved through research phase and documented in `research.md`.

---

## Phase 1: Design Artifacts

### Data Model (`data-model.md`)

**Entities**:
- PortfolioCompany
- LAB64Metadata
- NavigationLinks

**Relationships**:
- LAB64 � has many � PortfolioCompanies

### API Contracts (`/contracts/`)

**No backend API required** - this is a static site with external links.

**Data Contract** (`/contracts/portfolio-data-schema.json`):
- JSON schema for portfolio company data structure
- Validation rules for required fields

### Developer Documentation (`quickstart.md`)

- Local development setup
- Adding new portfolio companies
- Updating content
- Animation customization guide
- Performance testing workflow

### Agent Context Update

- Run `.specify/scripts/bash/update-agent-context.sh claude`
- Add new technologies discovered in research (e.g., chosen 3D library, animation approach)

---

## Phase 2: Implementation Planning

### Component Architecture

```
src/
   app/
      layout.tsx (root layout with metadata)
      page.tsx (landing page)
      globals.css
   components/
      Hero/
         HeroSection.tsx
         AnimatedBackground.tsx
         AnimatedLogo.tsx
      Portfolio/
         CompanyGrid.tsx
         CompanyCard.tsx
         ComingSoonBadge.tsx
      About/
         AboutSection.tsx
      Layout/
          Navigation.tsx (if needed)
          Footer.tsx
   data/
      portfolio-companies.json
   lib/
      animations.ts (shared animation variants)
   types/
       portfolio.ts (TypeScript interfaces)
```

### Implementation Stages

**Stage 1: Foundation** (Deliverable: Basic static page)
- Next.js 14 project setup with TypeScript
- Tailwind configuration with custom design tokens
- Basic layout (Hero, Grid, Footer) without animations
- Portfolio data structure in JSON

**Stage 2: Content & Styling** (Deliverable: Styled static page)
- Company card design with images and text
- Responsive grid layout (desktop, tablet, mobile)
- Typography and color scheme
- Semantic HTML and accessibility attributes

**Stage 3: Interactivity** (Deliverable: Functional navigation)
- Company card click handlers
- External link handling
- "Coming Soon" badge logic
- Keyboard navigation support

**Stage 4: Animations** (Deliverable: Animated page)
- Hero background animation
- LAB64 logo animation
- Card hover effects (spotlight/illumination)
- Page transition animations
- prefers-reduced-motion support

**Stage 5: Advanced Effects** (Deliverable: 3D enhancements)
- 3D elements (if justified by research)
- Cursor tracking effects
- Advanced visual polish

**Stage 6: Optimization & SEO** (Deliverable: Production-ready)
- Image optimization
- Bundle size optimization
- SEO metadata and structured data
- Lighthouse performance audit
- Accessibility audit and fixes

### Testing Strategy

**Unit Tests**:
- Component rendering (CompanyCard, Hero)
- Data parsing (portfolio JSON)
- Link validation logic

**Integration Tests**:
- Full page rendering
- Navigation flows
- Responsive behavior

**Performance Tests**:
- Lighthouse CI on every PR
- Bundle size monitoring
- Animation frame rate testing

**Accessibility Tests**:
- Axe automated testing
- Manual keyboard navigation
- Screen reader testing (VoiceOver/NVDA)

**Browser Testing**:
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari, Chrome Mobile

### Deployment Strategy

**Environments**:
- Development: localhost
- Preview: Vercel preview deployments (per PR)
- Production: Vercel production (from main branch)

**CI/CD Pipeline**:
- ESLint + TypeScript checks
- Lighthouse CI performance gates
- Automated accessibility checks
- Build success verification

---

## Timeline Estimates

- Phase 0 (Research): 1-2 days
- Phase 1 (Design Artifacts): 1 day
- Stage 1-2 (Foundation & Styling): 2-3 days
- Stage 3 (Interactivity): 1 day
- Stage 4 (Animations): 2-3 days
- Stage 5 (3D Effects): 2-3 days (if pursued)
- Stage 6 (Optimization): 1-2 days

**Total**: 10-15 days for full implementation

---

## Open Questions for Stakeholder Review

1. How many portfolio companies exist currently? (Affects design decisions)
2. Are company websites live and ready to link to?
3. Are brand assets (logos, descriptions) available for all companies?
4. What is the preferred content update workflow? (Static vs CMS)
5. Is there a budget/preference for 3D effects vs simpler CSS animations?
6. Any specific brand colors, fonts, or design language to follow?
7. Need for contact form or just email/phone in footer?

---

## Next Steps

1. Execute Phase 0: Research (generate `research.md`)
2. Execute Phase 1: Design artifacts (generate `data-model.md`, contracts, `quickstart.md`)
3. Update agent context with chosen technologies
4. Re-evaluate Constitution Check post-design
5. Proceed to task breakdown in `tasks.md` (via `/speckit.tasks`)

---

**Plan Version**: 1.0
**Last Updated**: 2025-10-28
