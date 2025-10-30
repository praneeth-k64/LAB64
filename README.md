# LAB64 - Company Landing Page

A visually stunning, performance-optimized landing page showcasing LAB64's portfolio companies.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
lab64-website-home/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── hero/               # Hero section components
│   │   ├── portfolio/          # Company card components
│   │   └── layout/             # Layout components (Footer)
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript type definitions
├── data/
│   └── portfolio-companies.json # Portfolio data (source of truth)
├── public/
│   └── companies/              # Company logos and backgrounds
└── specs/                      # Feature specifications
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📝 Adding a New Company

### 1. Prepare Assets

Create two files in `/public/companies/`:
- Logo: `[company-id]-logo.svg` (200x80px, transparent background)
- Background: `[company-id]-bg.jpg` (800x1200px, high quality)

### 2. Update JSON

Edit `/data/portfolio-companies.json`:

```json
{
  "id": "lab64-newco",
  "name": "LAB64 NewCo",
  "tagline": "Your tagline here",
  "description": "Brief description of the company",
  "focusArea": "Technology Focus Area",
  "websiteUrl": null,
  "logoUrl": "/companies/lab64-newco-logo.svg",
  "backgroundImage": "/companies/lab64-newco-bg.jpg",
  "comingSoon": true,
  "displayOrder": 4,
  "brandColor": "#667eea"
}
```

### 3. Deploy

```bash
git add .
git commit -m "Add LAB64 NewCo to portfolio"
git push
```

Vercel will auto-deploy the changes.

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Connect your repository
4. Deploy!

### Environment Variables (Optional)

```bash
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Portfolio company grid with elegant cards
- ✅ "Coming Soon" badges for unreleased companies
- ✅ External link navigation
- ✅ SEO-optimized metadata
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for rapid styling

## 📊 Performance

- **Target Lighthouse Score**: 85-95 (mobile)
- **Bundle Size**: <240KB gzipped
- **LCP**: <2.5s (desktop), <3.5s (mobile)

## 🛠️ Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
```

## 📚 Documentation

Full documentation available in `/specs/001-lab64-landing/`:
- [Specification](./specs/001-lab64-landing/spec.md)
- [Implementation Plan](./specs/001-lab64-landing/plan.md)
- [Data Model](./specs/001-lab64-landing/data-model.md)
- [Developer Quickstart](./specs/001-lab64-landing/quickstart.md)

## 📄 License

Copyright © 2025 LAB64. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or support, contact: contact@lab64.ai

---

**Built with ❤️ by LAB64**
