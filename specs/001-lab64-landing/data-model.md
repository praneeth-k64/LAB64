# Data Model: LAB64 Landing Page

**Feature**: LAB64 Group Company Landing Page
**Branch**: `001-lab64-landing`
**Created**: 2025-10-28
**Status**: Final

---

## Overview

This document defines the data structures for the LAB64 landing page. Since this is a static landing page with no backend, all data is stored in JSON files and typed with TypeScript interfaces.

**Data Source**: Static JSON files (`/data/portfolio-companies.json`)
**State Management**: None required (static content)
**Persistence**: Git-based (content updates via code commits)

---

## Entities

### 1. PortfolioCompany

Represents a single company in the LAB64 portfolio.

**Purpose**: Display company information on cards that link to external websites.

**TypeScript Interface**:
```typescript
// src/types/portfolio.ts

export interface PortfolioCompany {
  /**
   * Unique identifier for the company
   * Used as React key and for routing/analytics
   */
  id: string;

  /**
   * Company name (displayed as card title)
   * Example: "LAB64 AI", "LAB64 Aerospace"
   */
  name: string;

  /**
   * Short tagline (1-2 sentences)
   * Displayed below company name
   * Max length: 100 characters
   */
  tagline: string;

  /**
   * Brief description of company focus
   * Displayed on card
   * Max length: 200 characters
   */
  description: string;

  /**
   * Focus area or industry category
   * Example: "Artificial Intelligence & Agentic Systems"
   * Used for categorization/filtering (future)
   */
  focusArea: string;

  /**
   * External website URL
   * Must be valid HTTPS URL
   * null if website not yet available
   */
  websiteUrl: string | null;

  /**
   * Path to company logo image
   * Format: /companies/[company-id]-logo.svg
   * Used in card header
   */
  logoUrl: string;

  /**
   * Path to full-coverage background image
   * Format: /companies/[company-id]-bg.avif
   * Displayed as card background with gradient overlay
   */
  backgroundImage: string;

  /**
   * Whether website is coming soon
   * If true, card is non-clickable and shows badge
   */
  comingSoon: boolean;

  /**
   * Display order on landing page
   * Lower numbers appear first
   * Allows manual curation of company order
   */
  displayOrder: number;

  /**
   * Optional hex color for brand accent
   * Used for hover effects, borders, etc.
   * Example: "#667eea"
   */
  brandColor?: string;
}
```

**Validation Rules**:
- `id`: Required, unique, lowercase-kebab-case (e.g., "lab64-ai")
- `name`: Required, 1-50 characters
- `tagline`: Required, 1-100 characters
- `description`: Required, 1-200 characters
- `focusArea`: Required, 1-100 characters
- `websiteUrl`: Valid HTTPS URL or null
- `logoUrl`: Required, valid path starting with `/companies/`
- `backgroundImage`: Required, valid path starting with `/companies/`
- `comingSoon`: Required boolean
- `displayOrder`: Required, positive integer
- `brandColor`: Optional, valid hex color (e.g., "#667eea")

**Example**:
```json
{
  "id": "lab64-ai",
  "name": "LAB64 AI",
  "tagline": "Intelligent Agentic Systems",
  "description": "Building next-generation AI agents that understand context and deliver results autonomously.",
  "focusArea": "Artificial Intelligence & Agentic Systems",
  "websiteUrl": "https://ai.lab64.com",
  "logoUrl": "/companies/lab64-ai-logo.svg",
  "backgroundImage": "/companies/lab64-ai-bg.avif",
  "comingSoon": false,
  "displayOrder": 1,
  "brandColor": "#667eea"
}
```

---

### 2. LAB64Metadata

Represents global LAB64 group company information.

**Purpose**: SEO metadata, About section content, brand identity.

**TypeScript Interface**:
```typescript
// src/types/metadata.ts

export interface LAB64Metadata {
  /**
   * Company name
   */
  companyName: string;

  /**
   * Primary tagline for hero section
   * Max length: 100 characters
   */
  tagline: string;

  /**
   * Mission/vision statement
   * Displayed in About section
   * Max length: 300 characters
   */
  missionStatement: string;

  /**
   * Contact information
   */
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };

  /**
   * Social media links
   */
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };

  /**
   * SEO metadata
   */
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}
```

**Example**:
```json
{
  "companyName": "LAB64",
  "tagline": "Pioneering the Future with AI & Drone Innovation",
  "missionStatement": "LAB64 is a visionary group company dedicated to pushing the boundaries of technology through artificial intelligence, agentic systems, and advanced drone communications.",
  "contact": {
    "email": "contact@lab64.ai",
    "phone": "+1-XXX-XXX-XXXX"
  },
  "social": {
    "linkedin": "https://linkedin.com/company/lab64",
    "twitter": "https://twitter.com/lab64",
    "github": "https://github.com/lab64"
  },
  "seo": {
    "title": "LAB64 - Visionary AI & Drone Technology Innovation",
    "description": "LAB64 is a visionary group company pioneering artificial intelligence, agentic systems, and drone communications technology.",
    "keywords": ["LAB64", "AI innovation", "drone technology", "agentic systems"],
    "ogImage": "/og-image.jpg"
  }
}
```

---

### 3. PortfolioData (Root Structure)

The root data structure containing all portfolio companies.

**TypeScript Interface**:
```typescript
// src/types/portfolio.ts

export interface PortfolioData {
  /**
   * Schema version for future migrations
   */
  version: string;

  /**
   * Last updated timestamp
   */
  lastUpdated: string;

  /**
   * Array of portfolio companies
   */
  companies: PortfolioCompany[];
}
```

**JSON File Structure** (`/data/portfolio-companies.json`):
```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-10-28T00:00:00Z",
  "companies": [
    {
      "id": "lab64-ai",
      "name": "LAB64 AI",
      "tagline": "Intelligent Agentic Systems",
      "description": "Building next-generation AI agents that understand context and deliver results autonomously.",
      "focusArea": "Artificial Intelligence & Agentic Systems",
      "websiteUrl": "https://ai.lab64.com",
      "logoUrl": "/companies/lab64-ai-logo.svg",
      "backgroundImage": "/companies/lab64-ai-bg.avif",
      "comingSoon": false,
      "displayOrder": 1,
      "brandColor": "#667eea"
    },
    {
      "id": "lab64-aerospace",
      "name": "LAB64 Aerospace",
      "tagline": "Advanced Drone Communications",
      "description": "Revolutionizing drone technology with cutting-edge communication systems and autonomous flight control.",
      "focusArea": "Drone Communications & Aerospace",
      "websiteUrl": null,
      "logoUrl": "/companies/lab64-aerospace-logo.svg",
      "backgroundImage": "/companies/lab64-aerospace-bg.avif",
      "comingSoon": true,
      "displayOrder": 2,
      "brandColor": "#764ba2"
    }
  ]
}
```

---

## Relationships

```
LAB64 (Group)
  │
  ├─── has many ───> PortfolioCompany (1..*)
  │
  └─── has one ────> LAB64Metadata
```

**Notes**:
- One-to-many relationship: LAB64 → PortfolioCompanies
- No bidirectional navigation needed (static site)
- Companies are independent entities (no cross-references)

---

## Data Access Patterns

### 1. Load All Companies

**Use Case**: Display company grid on landing page

**Implementation**:
```typescript
// src/lib/portfolio.ts
import portfolioData from '@/data/portfolio-companies.json';
import { PortfolioCompany } from '@/types/portfolio';

export function getAllCompanies(): PortfolioCompany[] {
  return portfolioData.companies.sort((a, b) => a.displayOrder - b.displayOrder);
}
```

**Performance**: O(n log n) for sorting, negligible for <50 companies

---

### 2. Get Active Companies (Not Coming Soon)

**Use Case**: Filter for only live companies

**Implementation**:
```typescript
export function getActiveCompanies(): PortfolioCompany[] {
  return getAllCompanies().filter(company => !company.comingSoon);
}
```

---

### 3. Get Company by ID

**Use Case**: Future deep linking or analytics

**Implementation**:
```typescript
export function getCompanyById(id: string): PortfolioCompany | undefined {
  return portfolioData.companies.find(company => company.id === id);
}
```

---

### 4. Get Companies by Focus Area

**Use Case**: Future filtering/categorization

**Implementation**:
```typescript
export function getCompaniesByFocus(focusArea: string): PortfolioCompany[] {
  return getAllCompanies().filter(
    company => company.focusArea === focusArea
  );
}
```

---

## File Structure

```
/data/
  └── portfolio-companies.json    # Portfolio data (source of truth)

/src/types/
  ├── portfolio.ts                # PortfolioCompany, PortfolioData
  └── metadata.ts                 # LAB64Metadata

/src/lib/
  └── portfolio.ts                # Data access functions

/public/companies/
  ├── lab64-ai-logo.svg
  ├── lab64-ai-bg.avif
  ├── lab64-aerospace-logo.svg
  └── lab64-aerospace-bg.avif
```

---

## JSON Schema (for Validation)

Optional JSON schema for runtime validation:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Portfolio Data",
  "type": "object",
  "required": ["version", "lastUpdated", "companies"],
  "properties": {
    "version": {
      "type": "string",
      "pattern": "^\\d+\\.\\d+\\.\\d+$"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "companies": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "name",
          "tagline",
          "description",
          "focusArea",
          "websiteUrl",
          "logoUrl",
          "backgroundImage",
          "comingSoon",
          "displayOrder"
        ],
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[a-z0-9-]+$"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 50
          },
          "tagline": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "description": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "focusArea": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "websiteUrl": {
            "oneOf": [
              { "type": "string", "format": "uri", "pattern": "^https://" },
              { "type": "null" }
            ]
          },
          "logoUrl": {
            "type": "string",
            "pattern": "^/companies/.+\\.(svg|png)$"
          },
          "backgroundImage": {
            "type": "string",
            "pattern": "^/companies/.+\\.(avif|webp|jpg)$"
          },
          "comingSoon": {
            "type": "boolean"
          },
          "displayOrder": {
            "type": "integer",
            "minimum": 1
          },
          "brandColor": {
            "type": "string",
            "pattern": "^#[0-9a-fA-F]{6}$"
          }
        }
      }
    }
  }
}
```

---

## State Transitions

### Company Lifecycle

```
[Draft] → [Coming Soon] → [Active] → [Archived]
            ↓                ↓
      comingSoon: true   comingSoon: false
      websiteUrl: null   websiteUrl: "https://..."
```

**State Transitions**:
1. **Draft**: Not yet in JSON (being prepared)
2. **Coming Soon**: `comingSoon: true`, `websiteUrl: null`
3. **Active**: `comingSoon: false`, `websiteUrl: "https://..."`
4. **Archived**: Removed from JSON (or add `archived: true` field if needed)

---

## Migration Strategy

### Adding New Company

1. Create assets:
   - Logo: `/public/companies/[company-id]-logo.svg`
   - Background: `/public/companies/[company-id]-bg.avif`

2. Add to JSON:
```json
{
  "id": "lab64-newco",
  "name": "LAB64 NewCo",
  "tagline": "...",
  "description": "...",
  "focusArea": "...",
  "websiteUrl": null,
  "logoUrl": "/companies/lab64-newco-logo.svg",
  "backgroundImage": "/companies/lab64-newco-bg.avif",
  "comingSoon": true,
  "displayOrder": 3
}
```

3. Commit to Git
4. Deploy to Vercel (auto-deploy on push)

---

### Updating Company

1. Edit JSON file directly
2. Commit to Git
3. Deploy

**Example**: Launching company website
```diff
{
  "id": "lab64-aerospace",
- "websiteUrl": null,
- "comingSoon": true,
+ "websiteUrl": "https://aerospace.lab64.com",
+ "comingSoon": false,
}
```

---

## Future Extensions

### Possible Additions (Not in MVP)

1. **Categories/Tags**:
```typescript
interface PortfolioCompany {
  // ...
  tags?: string[]; // ["AI", "SaaS", "B2B"]
}
```

2. **Featured Companies**:
```typescript
interface PortfolioCompany {
  // ...
  featured?: boolean; // Highlight on homepage
}
```

3. **Team Members**:
```typescript
interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

interface PortfolioCompany {
  // ...
  team?: TeamMember[];
}
```

4. **Metrics/Stats**:
```typescript
interface PortfolioCompany {
  // ...
  stats?: {
    founded?: number;
    teamSize?: string;
    funding?: string;
  };
}
```

5. **Multi-language**:
```typescript
interface PortfolioCompany {
  // ...
  translations?: {
    [locale: string]: {
      tagline: string;
      description: string;
    };
  };
}
```

---

## Summary

**Entities**: 2 core (PortfolioCompany, LAB64Metadata)
**Storage**: Static JSON files
**Validation**: TypeScript interfaces + optional JSON Schema
**Updates**: Git-based workflow
**Scalability**: Suitable for 3-50 companies

**Next Step**: Generate API contracts (data schema validation)
