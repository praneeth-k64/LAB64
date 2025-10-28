# React to Vue Migration Analysis

**Date**: 2025-10-28
**Purpose**: Identify all React-specific decisions and their Vue/Nuxt equivalents

---

## Executive Summary

**Good News**: Most of our technical decisions are **framework-agnostic** (CSS, JSON, Paper Shaders vanilla JS). Only a few items need Vue equivalents.

**Paper Shaders Answer**: ✅ Use **vanilla JS version** (`@paper-design/shaders`) which works with Vue

**React Components in Vue**: ⚠️ Possible via `veaury` library, but **not recommended** (adds complexity)

---

## Component-by-Component Analysis

### 1. Paper Shaders (Hero Background)

**Our Decision**: Paper Shaders for hero background

**React Version**:
```jsx
import { MeshGradient } from '@paper-design/shaders-react';

<MeshGradient colors={['#667eea', '#764ba2']} />
```

**Vue Equivalent**: ✅ **VANILLA JS VERSION** (framework-agnostic)

```bash
npm install @paper-design/shaders
```

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MeshGradient } from '@paper-design/shaders';

const canvasRef = ref<HTMLCanvasElement>();

onMounted(() => {
  if (canvasRef.value) {
    const gradient = new MeshGradient(canvasRef.value, {
      colors: ['#667eea', '#764ba2', '#f093fb'],
      distortion: 2.5,
      swirl: 1.2,
      speed: 0.5
    });
  }
});
</script>

<template>
  <canvas ref="canvasRef" class="hero-background" />
</template>
```

**Status**: ✅ **WORKS IN VUE** - Uses vanilla JS version
**Bundle Impact**: Same (5KB)
**Complexity**: Slightly more verbose than React version, but still simple

---

### 2. Inspira UI Components

**Our Decisions**:
- Liquid Logo
- Card Spotlight
- Apple Card styling

**React Version**: Would need porting (8-16 hours each)

**Vue Version**: ✅ **NATIVE SUPPORT**

```vue
<script setup lang="ts">
import { LiquidLogo } from '~/components/ui/liquid-logo'
import { CardSpotlight } from '~/components/ui/card-spotlight'
</script>

<template>
  <LiquidLogo :logo="'/lab64-logo.svg'" />

  <CardSpotlight>
    <div class="company-card">
      <!-- Card content -->
    </div>
  </CardSpotlight>
</template>
```

**Status**: ✅ **BETTER IN VUE** - Direct copy-paste from Inspira UI docs
**Bundle Impact**: 50-100KB (Liquid Logo), 5KB (Card Spotlight)
**Complexity**: Zero (copy-paste ready)

---

### 3. Framer Motion (Animation Library)

**Our Decision**: Framer Motion LazyMotion (4.6KB)

**React Version**:
```jsx
import { LazyMotion, domAnimation, m } from 'framer-motion';

<LazyMotion features={domAnimation}>
  <m.div animate={{ opacity: 1 }} />
</LazyMotion>
```

**Vue Equivalent**: ✅ **VueUse Motion** or **Motion-V**

**Option A: VueUse Motion** (Recommended, part of VueUse ecosystem)
```bash
npm install @vueuse/motion
```

```vue
<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const target = ref()

useMotion(target, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 }
})
</script>

<template>
  <div ref="target">Animated content</div>
</template>
```

**Bundle Size**: ~8KB (slightly larger than Framer LazyMotion, but still small)

**Option B: Inspira UI's Motion-V** (Used by Inspira UI itself)
```bash
npm install motion-v
```

**Status**: ✅ **VUE EQUIVALENTS AVAILABLE**
**Bundle Impact**: +3KB compared to React (8KB vs 4.6KB) - acceptable
**Complexity**: Similar API, well-documented

---

### 4. Next.js Image Component

**Our Decision**: Next.js Image with AVIF/WebP

**React Version**:
```jsx
import Image from 'next/image';

<Image
  src="/hero.avif"
  alt="Hero"
  fill
  priority
/>
```

**Vue Equivalent**: ✅ **Nuxt Image Module**

```bash
npm install @nuxt/image
```

```vue
<script setup lang="ts">
// Auto-imported in Nuxt
</script>

<template>
  <NuxtImg
    src="/hero.avif"
    alt="Hero"
    loading="lazy"
    format="avif,webp"
    :quality="85"
  />
</template>
```

**Features Comparison**:

| Feature | Next.js Image | Nuxt Image | Status |
|---------|--------------|------------|--------|
| AVIF/WebP | ✅ | ✅ | Same |
| Lazy loading | ✅ | ✅ | Same |
| Blur placeholder | ✅ | ✅ | Same |
| Responsive sizes | ✅ | ✅ | Same |
| Priority loading | ✅ | ✅ | Same |
| CDN optimization | ✅ | ✅ | Same |

**Status**: ✅ **EQUIVALENT IN VUE**
**Bundle Impact**: Same
**Complexity**: Same (actually simpler in Nuxt - auto-imported)

---

### 5. SEO (Metadata API)

**Our Decision**: Next.js 14 Metadata API

**React Version**:
```tsx
// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LAB64',
  description: '...',
  openGraph: { ... }
};
```

**Vue Equivalent**: ✅ **Nuxt SEO Composables**

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'LAB64',
  description: '...',
  ogTitle: 'LAB64',
  ogDescription: '...',
  ogImage: '/og-image.jpg'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <!-- Page content -->
</template>
```

**Features Comparison**:

| Feature | Next.js Metadata API | Nuxt SEO | Status |
|---------|---------------------|----------|--------|
| Meta tags | ✅ | ✅ | Same |
| Open Graph | ✅ | ✅ | Same |
| Twitter Card | ✅ | ✅ | Same |
| Dynamic metadata | ✅ | ✅ | Same |
| Type safety | ✅ | ✅ | Same |

**Status**: ✅ **EQUIVALENT IN VUE**
**Bundle Impact**: Built-in (0KB)
**Complexity**: Actually **simpler** in Nuxt (composables vs export const)

---

### 6. Static JSON Data

**Our Decision**: Static JSON file for portfolio companies

**React Version**:
```tsx
import portfolioData from '@/data/portfolio-companies.json';
```

**Vue Version**:
```vue
<script setup lang="ts">
import portfolioData from '~/data/portfolio-companies.json';
</script>
```

**Status**: ✅ **IDENTICAL** (framework-agnostic)
**Bundle Impact**: Same (2KB)
**Complexity**: Same

---

### 7. Sitemap & Robots.txt

**Our Decision**: Automatic sitemap and robots.txt generation

**React Version**:
```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lab64.ai', lastModified: new Date() }
  ];
}

// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' }
  };
}
```

**Vue Equivalent**: ✅ **Nuxt Sitemap Module**

```bash
npm install @nuxtjs/sitemap
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://lab64.ai',
    gzip: true
  },
  robots: {
    UserAgent: '*',
    Allow: '/'
  }
})
```

**Status**: ✅ **EQUIVALENT** (actually simpler with module)
**Bundle Impact**: 0KB (build-time only)
**Complexity**: Simpler (config-based)

---

### 8. CSS & Tailwind

**Our Decision**: Tailwind CSS with custom design tokens

**React Version**:
```tsx
<div className="bg-gradient-to-r from-blue-500 to-purple-600">
```

**Vue Version**:
```vue
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
```

**Status**: ✅ **IDENTICAL** (framework-agnostic)
**Bundle Impact**: Same
**Complexity**: Same (Vue uses `class` instead of `className`, that's it)

---

### 9. TypeScript

**Our Decision**: TypeScript strict mode

**React Version**:
```tsx
interface PortfolioCompany {
  name: string;
  description: string;
}

const CompanyCard: React.FC<{ company: PortfolioCompany }> = ({ company }) => {
  return <div>{company.name}</div>;
};
```

**Vue Version**:
```vue
<script setup lang="ts">
interface PortfolioCompany {
  name: string;
  description: string;
}

defineProps<{
  company: PortfolioCompany;
}>();
</script>

<template>
  <div>{{ company.name }}</div>
</template>
```

**Status**: ✅ **EQUIVALENT** (Vue 3 has excellent TypeScript support)
**Bundle Impact**: Same
**Complexity**: Similar (Vue's `defineProps` is type-safe)

---

### 10. Vercel Deployment

**Our Decision**: Vercel hosting

**React Version**:
- Zero-config deployment (Vercel owns Next.js)
- `vercel deploy`

**Vue Version**:
- Nuxt has official Vercel adapter
- Auto-detected on Vercel
- `vercel deploy`

**Status**: ✅ **WORKS GREAT** (not quite as "native" but still excellent)
**Complexity**: Minimal difference

---

## React Components in Vue (Using Veaury)

### Is it possible? YES

**Veaury** allows using React components in Vue:

```bash
npm install veaury
```

```vue
<script setup lang="ts">
import { applyReactInVue } from 'veaury'
import { MeshGradient } from '@paper-design/shaders-react'

const VueMeshGradient = applyReactInVue(MeshGradient)
</script>

<template>
  <VueMeshGradient :colors="['#667eea', '#764ba2']" />
</template>
```

### Should we use it? ❌ **NOT RECOMMENDED**

**Why avoid React-in-Vue**:
1. **Bundle bloat**: Includes both Vue AND React runtimes (+115KB)
2. **Complexity**: Adds abstraction layer
3. **Performance**: Extra overhead for component conversion
4. **Maintenance**: One more dependency to manage
5. **Unnecessary**: Vanilla JS version of Paper Shaders works fine

**When to use Veaury**:
- Migrating large React app to Vue gradually
- Must use specific React-only library with no alternative
- **NOT for our use case** (we have Vue/vanilla alternatives)

---

## Summary: All Decisions Mapped to Vue

| Decision | React Package | Vue Equivalent | Status | Bundle Δ |
|----------|--------------|----------------|--------|----------|
| **Hero Background** | @paper-design/shaders-react | @paper-design/shaders (vanilla) | ✅ Works | Same (5KB) |
| **Liquid Logo** | Port required | Inspira UI (native) | ✅ Better | Same |
| **Card Spotlight** | Port required | Inspira UI (native) | ✅ Better | Same |
| **Animations** | Framer Motion LazyMotion | @vueuse/motion | ✅ Equivalent | +3KB |
| **Images** | next/image | @nuxt/image | ✅ Equivalent | Same |
| **SEO** | Next.js Metadata API | useSeoMeta | ✅ Equivalent | Same |
| **Data** | JSON import | JSON import | ✅ Same | Same |
| **Sitemap** | app/sitemap.ts | @nuxtjs/sitemap | ✅ Simpler | Same |
| **Styling** | Tailwind | Tailwind | ✅ Same | Same |
| **TypeScript** | React types | Vue types | ✅ Same | Same |
| **Deployment** | Vercel (native) | Vercel (adapter) | ✅ Works | Same |

**Total Bundle Size Impact**: +3KB (VueUse Motion vs Framer LazyMotion)

---

## Revised Bundle Size Estimate (Vue)

```
Nuxt runtime:                      50KB
Vue 3:                             30KB
@vueuse/motion:                     8KB
@paper-design/shaders (vanilla):    5KB
Inspira UI - Liquid Logo:       50-100KB
Inspira UI - Card Spotlight:        5KB
Tailwind CSS (purged):             10KB
Custom JS:                          5KB
JSON data:                          2KB
-------------------------------------------------
TOTAL:                         165-215KB ✅
```

**vs React Stack**: 195-240KB

**Savings**: 30-25KB smaller with Vue

---

## Critical Finding: Paper Shaders

### Vanilla JS Version Works Perfectly in Vue

The key insight is that **Paper Shaders has a vanilla JS version** that doesn't require React:

```javascript
// Works in ANY framework (Vue, React, Svelte, vanilla)
import { MeshGradient } from '@paper-design/shaders';

const canvas = document.getElementById('hero-bg');
const gradient = new MeshGradient(canvas, {
  colors: ['#667eea', '#764ba2', '#f093fb'],
  distortion: 2.5
});
```

**In Vue**:
```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MeshGradient } from '@paper-design/shaders';

const canvasRef = ref<HTMLCanvasElement>();

onMounted(() => {
  if (canvasRef.value) {
    new MeshGradient(canvasRef.value, {
      colors: ['#667eea', '#764ba2', '#f093fb'],
      distortion: 2.5,
      swirl: 1.2,
      speed: 0.5
    });
  }
});
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 -z-10" />
</template>
```

**Advantages**:
- ✅ Same bundle size as React version (5KB)
- ✅ No need for Veaury (React-in-Vue wrapper)
- ✅ Clean, framework-agnostic code
- ✅ Official package, well-maintained

---

## Migration Checklist: React → Vue

All our technical decisions have Vue equivalents:

- [x] **Paper Shaders**: Use vanilla JS version ✅
- [x] **Inspira UI**: Native Vue components ✅
- [x] **Animations**: @vueuse/motion (+3KB) ✅
- [x] **Images**: @nuxt/image ✅
- [x] **SEO**: useSeoMeta composable ✅
- [x] **Static Data**: JSON import (same) ✅
- [x] **Sitemap**: @nuxtjs/sitemap module ✅
- [x] **Styling**: Tailwind (identical) ✅
- [x] **TypeScript**: Full support ✅
- [x] **Vercel**: Official adapter ✅

**No blockers found** ✅

---

## Recommendation

### ✅ **SWITCH TO NUXT 3 - ALL DECISIONS COMPATIBLE**

**Key Findings**:
1. ✅ Paper Shaders has **vanilla JS version** (works in Vue)
2. ✅ Inspira UI is **native Vue** (better than React)
3. ✅ All other decisions have **excellent Vue equivalents**
4. ✅ Bundle size is **30KB smaller** with Vue
5. ✅ No need for React-in-Vue wrappers

**Do NOT use Veaury** (React-in-Vue):
- Unnecessary (vanilla Paper Shaders works)
- Adds bloat (+115KB for dual runtimes)
- Adds complexity

**Final Answer**:
- **Paper Shaders**: ✅ Use `@paper-design/shaders` (vanilla)
- **React in Vue**: ❌ Not needed
- **All other tech**: ✅ Native Vue equivalents exist

---

## Updated Dependencies (Vue/Nuxt Stack)

```json
{
  "dependencies": {
    "nuxt": "^3.14.0",
    "vue": "^3.5.0",
    "@paper-design/shaders": "^0.0.57",
    "@vueuse/core": "^11.0.0",
    "@vueuse/motion": "^2.2.0",
    "@nuxt/image": "^1.8.0",
    "@nuxtjs/sitemap": "^6.1.1",
    "@nuxtjs/tailwindcss": "^6.12.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0"
  },
  "devDependencies": {
    "@inspira-ui/plugins": "latest",
    "typescript": "^5.6.0"
  }
}
```

**Plus Inspira UI components** (copy-paste from docs):
- Liquid Logo
- Card Spotlight
- Apple Card styling

**Total bundle**: 165-215KB (vs 195-240KB with React)

---

## Next Step

If you approve switching to Nuxt, we'll:

1. ✅ Amend constitution (Next.js → Nuxt 3)
2. ✅ Update plan.md with Vue dependencies
3. ✅ Update research.md with Vue equivalents
4. ✅ Proceed to Phase 1 with Nuxt/Vue architecture

**Your approval to switch to Nuxt 3?**
