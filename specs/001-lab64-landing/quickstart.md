# Developer Quickstart: LAB64 Landing Page

**Feature**: LAB64 Group Company Landing Page
**Branch**: `001-lab64-landing`
**Tech Stack**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
**Target**: Get from clone to running dev server in <5 minutes

---

## Prerequisites

- Node.js ≥18.0.0 (check with `node --version`)
- npm ≥9.0.0 or bun ≥1.0.0
- Git
- Code editor (VS Code recommended)

---

## Quick Start (5 Minutes)

```bash
# 1. Clone repository
git clone <repo-url>
cd lab64-website

# 2. Checkout feature branch
git checkout 001-lab64-landing

# 3. Install dependencies
npm install
# or
bun install

# 4. Run development server
npm run dev
# or
bun dev

# 5. Open browser
# → http://localhost:3000
```

**Done!** You should see the LAB64 landing page.

---

## Project Structure

```
lab64-website/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # Auto-generated robots.txt
│   │
│   ├── components/
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroBackground.tsx  # Paper Shaders
│   │   │   └── LiquidLogo.tsx      # Extracted from paper-design
│   │   │
│   │   ├── portfolio/
│   │   │   ├── CompanyGrid.tsx
│   │   │   └── CompanyCard.tsx     # Apple Card style
│   │   │
│   │   ├── ui/
│   │   │   ├── card-spotlight.tsx  # Ported from Inspira UI
│   │   │   └── button.tsx          # Optional shadcn/ui
│   │   │
│   │   └── layout/
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── portfolio.ts        # Data access functions
│   │   └── utils.ts            # clsx, cn, etc.
│   │
│   └── types/
│       ├── portfolio.ts        # PortfolioCompany interface
│       └── metadata.ts         # LAB64Metadata interface
│
├── data/
│   └── portfolio-companies.json    # Portfolio data (source of truth)
│
├── public/
│   ├── companies/              # Company assets
│   │   ├── lab64-ai-logo.svg
│   │   ├── lab64-ai-bg.avif
│   │   └── ...
│   ├── lab64-logo.svg          # Main LAB64 logo
│   ├── og-image.jpg            # Open Graph image (1200x630)
│   └── favicon.ico
│
├── contracts/
│   └── portfolio-schema.json   # JSON Schema for validation
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Key Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm run format           # Run Prettier

# Data validation (optional)
npm run validate:data    # Validate portfolio-companies.json

# Type checking
npm run type-check       # Run TypeScript compiler (no emit)
```

---

## Adding a New Company

### Step 1: Prepare Assets

Create two images in `/public/companies/`:

1. **Logo**: `[company-id]-logo.svg` (or PNG)
   - Format: SVG preferred (scalable)
   - Size: 200x80px recommended
   - Background: Transparent

2. **Background Image**: `[company-id]-bg.avif`
   - Format: AVIF (or WebP/JPG fallback)
   - Size: 800x1200px (portrait aspect ratio)
   - Quality: High (will be overlaid with gradient)

**Example**:
```
/public/companies/
  ├── lab64-newco-logo.svg
  └── lab64-newco-bg.avif
```

---

### Step 2: Add to JSON

Edit `/data/portfolio-companies.json`:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-10-28T00:00:00Z",
  "companies": [
    // Existing companies...
    {
      "id": "lab64-newco",
      "name": "LAB64 NewCo",
      "tagline": "Innovative Solutions for Tomorrow",
      "description": "Building next-generation technology that transforms industries and empowers businesses.",
      "focusArea": "Technology Innovation",
      "websiteUrl": null,  // or "https://newco.lab64.com"
      "logoUrl": "/companies/lab64-newco-logo.svg",
      "backgroundImage": "/companies/lab64-newco-bg.avif",
      "comingSoon": true,  // false if website is live
      "displayOrder": 3,   // Adjust as needed
      "brandColor": "#f093fb"  // Optional
    }
  ]
}
```

---

### Step 3: Validate & Test

```bash
# Validate JSON schema (optional)
npm run validate:data

# Run dev server
npm run dev

# Check http://localhost:3000
# New company should appear in grid
```

---

### Step 4: Commit & Deploy

```bash
git add public/companies/lab64-newco-*
git add data/portfolio-companies.json
git commit -m "Add LAB64 NewCo to portfolio"
git push

# Vercel auto-deploys on push
```

---

## Updating Company Content

### Make Website Live

Change `comingSoon` from `true` to `false`:

```json
{
  "id": "lab64-aerospace",
  "websiteUrl": "https://aerospace.lab64.com",  // Add URL
  "comingSoon": false,  // Change to false
  // ... other fields
}
```

Commit and push → auto-deployed.

---

### Update Description

Simply edit the JSON:

```json
{
  "id": "lab64-ai",
  "description": "New updated description here.",
  // ... other fields
}
```

Commit and push.

---

### Reorder Companies

Change `displayOrder` values:

```json
[
  { "id": "lab64-ai", "displayOrder": 2 },      // Was 1, now second
  { "id": "lab64-aerospace", "displayOrder": 1 }  // Was 2, now first
]
```

Commit and push.

---

## Development Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/new-animation

# Make changes
# ...

# Test locally
npm run dev

# Lint and type-check
npm run lint
npm run type-check

# Commit
git add .
git commit -m "Add new animation to hero section"
git push origin feature/new-animation

# Create PR on GitHub
```

---

### 2. Testing Changes

**Local Testing**:
```bash
# Development mode (hot reload)
npm run dev

# Production build (test performance)
npm run build
npm run start
```

**Lighthouse Audit**:
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view
```

**Target Scores**:
- Performance: ≥85-95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

---

### 3. Deployment

**Automatic** (via Vercel):
- Push to `main` → Production deployment
- Push to feature branch → Preview deployment

**Manual** (if needed):
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy

# Deploy to production
vercel --prod
```

---

## Component Customization

### Modify Hero Background

Edit `/src/components/hero/HeroBackground.tsx`:

```tsx
<MeshGradient
  colors={['#667eea', '#764ba2', '#f093fb']}  // Change colors
  distortion={2.5}  // Adjust distortion (0-5)
  swirl={1.2}       // Adjust swirl (0-3)
  speed={0.5}       // Adjust animation speed
/>
```

---

### Customize Card Hover Effect

Edit `/src/components/ui/card-spotlight.tsx`:

```tsx
// Change spotlight color
background: `radial-gradient(
  600px circle at var(--mouse-x) var(--mouse-y),
  rgba(255, 255, 255, 0.2),  // Change opacity/color here
  transparent 40%
)`

// Change spotlight size
600px circle  // Make larger/smaller
```

---

### Adjust Animation Timing

Edit individual components:

```tsx
// Framer Motion example
<m.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,    // Change duration
    ease: 'easeOut'   // Change easing
  }}
>
```

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

---

### TypeScript Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Run type check
npm run type-check
```

---

### Images Not Loading

Check paths:
- Logo: `/companies/[id]-logo.svg` (not `/public/companies/`)
- Background: `/companies/[id]-bg.avif`

Next.js serves `/public/` as `/` root.

---

### Build Fails

```bash
# Check for errors
npm run build

# Common issues:
# 1. TypeScript errors → fix types
# 2. ESLint errors → run npm run lint --fix
# 3. Missing images → check /public/companies/
```

---

## Performance Optimization

### Image Optimization

Already handled by Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/companies/lab64-ai-bg.avif"
  alt="LAB64 AI"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  quality={85}  // Adjust quality (1-100)
/>
```

---

### Bundle Size Monitoring

```bash
# Analyze bundle
npm run build

# Check output:
# Route (app)                              Size     First Load JS
# ┌ ○ /                                   5.2 kB          150 kB
```

**Target**: <200KB total First Load JS

---

### Lazy Loading Components

For heavy components:

```tsx
import dynamic from 'next/dynamic';

const LiquidLogo = dynamic(
  () => import('@/components/hero/LiquidLogo'),
  {
    ssr: false,  // Client-side only
    loading: () => <div>Loading...</div>
  }
);
```

---

## Environment Variables

Create `.env.local` for local development:

```bash
# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Feature flags (optional)
NEXT_PUBLIC_ENABLE_ANIMATIONS=true
```

**Never commit `.env.local`** (already in `.gitignore`)

For production, set env vars in Vercel dashboard.

---

## VS Code Setup (Recommended)

### Extensions

Install these extensions:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **TypeScript Vue Plugin (Volar)** - for better TS support

### Settings

`.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

---

## Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Paper Shaders Docs](https://shaders.paper.design/)

### Component Libraries

- [Paper Design Liquid Logo](https://github.com/paper-design/liquid-logo)
- [Inspira UI](https://inspira-ui.com/) (Vue - port to React)
- [shadcn/ui](https://ui.shadcn.com/) (optional)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [TinyPNG](https://tinypng.com/) - Image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

---

## Getting Help

1. **Check documentation** (links above)
2. **Search issues** on GitHub repo
3. **Ask team** in Slack/Discord
4. **Create issue** with reproduction steps

---

## Next Steps After Setup

1. ✅ Run `npm run dev` and verify localhost:3000 works
2. ✅ Add your first company to `/data/portfolio-companies.json`
3. ✅ Customize colors in Tailwind config
4. ✅ Replace placeholder images with real assets
5. ✅ Run Lighthouse audit to check performance
6. ✅ Deploy to Vercel

**Happy coding!** 🚀
