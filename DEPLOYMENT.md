# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: LAB64 landing page v1.0.0"
git push origin 001-lab64-landing
```

### Step 2: Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Select the `001-lab64-landing` branch
4. Click "Deploy"

That's it! Vercel will auto-deploy on every push.

---

## Manual Deployment

### Build Locally
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build
npm run start
```

### Deploy to Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Environment Variables

### Optional (Set in Vercel Dashboard)
```bash
# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Site URL (auto-detected by Vercel)
NEXT_PUBLIC_SITE_URL=https://lab64.ai
```

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add `lab64.ai` and `www.lab64.ai`

### Step 2: Configure DNS
Add these records to your DNS provider:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for SSL
Vercel automatically provisions SSL certificates (5-10 minutes).

---

## Post-Deployment Checklist

- [ ] Verify site loads at your domain
- [ ] Test on mobile devices
- [ ] Check `/sitemap.xml` is accessible
- [ ] Check `/robots.txt` is accessible
- [ ] Run Lighthouse audit (target: ≥85 mobile)
- [ ] Test all external links work
- [ ] Verify "Coming Soon" badges display correctly
- [ ] Test card animations on desktop/mobile
- [ ] Check Open Graph preview on social media

---

## Monitoring

### Vercel Analytics (Optional)
Enable in Project Settings → Analytics

### Performance Monitoring
```bash
# Run Lighthouse locally
npx lighthouse https://lab64.ai --view

# Check Core Web Vitals
# Visit: https://pagespeed.web.dev/
```

---

## Rollback

If you need to rollback:

```bash
# Vercel Dashboard
# 1. Go to Deployments
# 2. Click on previous deployment
# 3. Click "Promote to Production"
```

Or via CLI:
```bash
vercel rollback
```

---

## Continuous Deployment

### Auto-Deploy Setup (Default)
- **Production**: Pushes to `main` branch
- **Preview**: Pushes to feature branches

### Branch Protection (Recommended)
1. Go to GitHub repo Settings → Branches
2. Add rule for `main` branch
3. Require pull request reviews
4. Enable status checks (Vercel deployment)

---

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Images Not Loading
- Verify files exist in `/public/companies/`
- Check file paths in `portfolio-companies.json`
- Ensure images are <100KB (recommended)

### Slow Performance
- Run bundle analyzer: `npm run build`
- Check Lighthouse report
- Optimize images (convert to AVIF/WebP)
- Review Framer Motion usage

---

## Support

For issues, contact: contact@lab64.ai
