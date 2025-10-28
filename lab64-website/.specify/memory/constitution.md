<!--
SYNC IMPACT REPORT - Constitution v1.1.0
=========================================================
Version Change: 1.0.0 → 1.1.0 (MINOR - new principle added)

Constitution Scope:
- Project Type: Marketing/Landing Site (Next.js)
- Focus Areas: Performance, Accessibility, Simplicity, Design Excellence
- Principles Count: 5 core principles

Modified Sections:
- NEW: V. Design Excellence & Motion - Professional UI with elegant animations
- UPDATED: Quality Gates - Added design and animation review requirements

Previous Principles (unchanged):
- I. Simplicity First (YAGNI)
- II. Performance Excellence
- III. Accessibility by Design
- IV. Component-Driven Development

Added Sections:
- Animation guidelines and performance constraints
- Design review checklist items

Templates Status:
✅ plan-template.md - Compatible (no changes needed)
✅ spec-template.md - Compatible (user scenarios can include UX requirements)
✅ tasks-template.md - Compatible (design tasks can be tracked)
⚠️  No command templates found in .specify/templates/commands/ - skipped

Follow-up TODOs: None

Amendment Rationale: Design excellence is critical for marketing site credibility and
conversion. Animations enhance perceived quality but must not compromise performance
or accessibility (Principles II & III). This addition expands governance scope
without breaking existing rules.

Ratification: 2025-10-28 | Last Amended: 2025-10-28
-->

# LAB64 Website Constitution

## Core Principles

### I. Simplicity First (YAGNI)

Start with the simplest solution that meets the requirement. Avoid premature optimization, over-engineering, and speculative features. Every component, abstraction, or dependency MUST solve a current, validated problem.

**Rationale**: Marketing sites require rapid iteration and clarity. Complex architectures slow down content updates, A/B testing, and conversion optimization. Simple code is maintainable by broader teams including marketing and design.

**Rules**:
- Use Next.js built-in features before adding external libraries
- Single-responsibility components with clear, focused purposes
- Flat component hierarchy until nesting is proven necessary
- Static generation (SSG) preferred over server rendering when possible
- Justify every npm package with concrete use case

### II. Performance Excellence

Page load speed directly impacts conversion rates and SEO rankings. Every page MUST achieve Lighthouse performance score ≥90 on mobile, Core Web Vitals within "Good" thresholds (LCP <2.5s, FID <100ms, CLS <0.1).

**Rationale**: Research shows 53% of mobile users abandon sites that take >3 seconds to load. For LAB64's early access and contact forms, performance = revenue.

**Rules**:
- Image optimization mandatory (Next.js Image component, WebP format, lazy loading)
- Code splitting and dynamic imports for non-critical content
- Minimal JavaScript bundle size (<200KB gzipped for initial load)
- No render-blocking resources; defer non-critical CSS/JS
- Performance budget enforced in CI pipeline

### III. Accessibility by Design (WCAG 2.1 AA)

All users, regardless of ability, MUST have equivalent access to information and functionality. Accessibility is not optional or a final-stage audit item.

**Rationale**: Legal compliance (ADA), inclusive design expands market reach, and accessible markup improves SEO. Screen reader users, keyboard-only navigation, and color-blind users represent significant market segments.

**Rules**:
- Semantic HTML required (nav, main, article, button vs div)
- Keyboard navigation support for all interactive elements
- Color contrast ratio ≥4.5:1 for text, ≥3:1 for interactive components
- Alt text for all images; ARIA labels where semantic HTML insufficient
- Form validation with clear error messages and aria-live announcements

### IV. Component-Driven Development

Build modular, reusable React components with clear props interfaces. Components MUST be independently testable and documented with usage examples.

**Rationale**: Marketing sites require frequent design iterations, A/B testing, and content variations. Component reuse accelerates feature delivery and ensures visual consistency across pages.

**Rules**:
- One component per file in `src/components/` with co-located styles
- TypeScript prop types required for all components
- Storybook documentation for shared UI components (buttons, cards, forms)
- Composition over inheritance; use children props and render props
- No business logic in presentational components

### V. Design Excellence & Motion

Deliver a visually elegant, professional, and modern interface that reflects LAB64's premium positioning. Subtle, purposeful animations MUST enhance user experience through feedback, hierarchy, and delight without sacrificing performance or accessibility.

**Rationale**: First impressions determine credibility for marketing sites. Thoughtful motion design increases perceived quality, guides attention, and creates memorable experiences. However, animations must serve UX goals and respect user preferences (prefers-reduced-motion).

**Rules**:
- **Micro-interactions required**: Hover states, focus indicators, button presses, form interactions
- **Cursor tracking**: Subtle parallax, gradient shifts, or element highlighting on mouse movement (where appropriate)
- **Transitions**: Smooth page transitions, modal appearances, content reveals (300-500ms duration range)
- **Performance constraints**:
  - Use CSS transforms (translate, scale, rotate) and opacity only for 60fps animations
  - Avoid animating layout properties (width, height, top, left)
  - GPU acceleration with `will-change` for active animations only
  - Animations MUST NOT degrade Lighthouse performance score below threshold
- **Accessibility compliance**:
  - Respect `prefers-reduced-motion` media query (disable decorative animations)
  - Maintain keyboard focus indicators during animations
  - Ensure animations do not trigger vestibular disorders (no rapid spinning/flashing)
- **Design consistency**:
  - Use Tailwind's animation utilities or custom CSS with design tokens
  - Document easing curves and durations in design system
  - Animations should feel cohesive across all pages

## Technical Standards

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom design system tokens
- **Animations**: Framer Motion (for complex animations) or CSS transitions (for simple interactions)
- **Forms**: React Hook Form for complex forms, native HTML for simple inputs
- **Analytics**: Privacy-respecting analytics (Plausible or similar, not Google Analytics)
- **Deployment**: Vercel or similar edge platform with automatic preview deployments

### Code Quality Requirements

- ESLint configuration enforced in CI/CD
- Prettier for consistent formatting (run on pre-commit hook)
- TypeScript strict mode with no `any` types unless explicitly justified
- Lighthouse CI checks on every pull request
- Axe accessibility linter integrated in development environment

## Quality Gates

### Pre-Deployment Checklist

Before any feature reaches production, verify:

- [ ] Lighthouse performance score ≥90 (mobile)
- [ ] All images optimized and use Next.js Image component
- [ ] Accessibility audit passes (axe DevTools, no violations)
- [ ] Keyboard navigation tested on all interactive elements
- [ ] Forms tested with screen reader (VoiceOver or NVDA)
- [ ] No console errors or warnings in browser
- [ ] TypeScript compiles with no errors
- [ ] SEO meta tags present and accurate (title, description, Open Graph)
- [ ] All interactive elements have hover/focus states with smooth transitions
- [ ] Animations respect `prefers-reduced-motion` media query
- [ ] Visual design reviewed for professional, modern aesthetic
- [ ] Animation frame rate maintains 60fps (test with Chrome DevTools Performance)

### Breaking Changes Policy

Changes requiring special approval:

- Adding new npm dependencies (justify bundle size impact)
- Changing routing structure (impacts SEO and existing links)
- Modifying Core Web Vitals metrics (requires performance analysis)
- Breaking accessibility on any page (never allowed without remediation plan)

## Governance

### Amendment Process

This constitution defines non-negotiable standards for LAB64 website development. Amendments require:

1. Documented proposal with rationale and impact analysis
2. Team review and consensus (or project lead approval for solo projects)
3. Version increment following semantic versioning
4. Update to dependent templates and documentation

### Compliance

- All pull requests MUST verify compliance with principles and quality gates
- Complexity not aligned with Principle I (Simplicity First) MUST be justified in PR description
- Performance regressions require explicit sign-off with mitigation plan
- Accessibility violations block merging until resolved

### Version History

- **v1.1.0** (2025-10-28): Added Principle V (Design Excellence & Motion) with animation guidelines
- **v1.0.0** (2025-10-28): Initial constitution established for LAB64 marketing site

**Version**: 1.1.0 | **Ratified**: 2025-10-28 | **Last Amended**: 2025-10-28
