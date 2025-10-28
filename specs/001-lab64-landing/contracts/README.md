# API Contracts

This directory contains data schema contracts for the LAB64 landing page.

---

## Contents

### `portfolio-schema.json`

JSON Schema for validating portfolio company data.

**Purpose**: Ensure data integrity when updating `/data/portfolio-companies.json`

**Validation**: Use with JSON Schema validators or runtime validation libraries

**Usage Example** (Node.js with Ajv):
```bash
npm install ajv ajv-formats
```

```typescript
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import portfolioSchema from './contracts/portfolio-schema.json';
import portfolioData from './data/portfolio-companies.json';

const ajv = new Ajv();
addFormats(ajv);

const validate = ajv.compile(portfolioSchema);
const valid = validate(portfolioData);

if (!valid) {
  console.error('Validation errors:', validate.errors);
  process.exit(1);
}

console.log('✅ Portfolio data is valid');
```

**In package.json** (validation script):
```json
{
  "scripts": {
    "validate:data": "node scripts/validate-portfolio-data.js"
  }
}
```

---

## Validation Rules

### Portfolio Company

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `id` | string | ✅ | lowercase-kebab-case, 3-50 chars |
| `name` | string | ✅ | 1-50 chars |
| `tagline` | string | ✅ | 1-100 chars |
| `description` | string | ✅ | 1-200 chars |
| `focusArea` | string | ✅ | 1-100 chars |
| `websiteUrl` | string\|null | ✅ | HTTPS URL or null |
| `logoUrl` | string | ✅ | Path: `/companies/*.svg\|png` |
| `backgroundImage` | string | ✅ | Path: `/companies/*.avif\|webp\|jpg\|png` |
| `comingSoon` | boolean | ✅ | true or false |
| `displayOrder` | integer | ✅ | ≥ 1 |
| `brandColor` | string | ❌ | Hex color (e.g., `#667eea`) |

---

## Pre-commit Hook (Optional)

Validate data before committing:

**`.husky/pre-commit`**:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run validate:data
```

---

## CI/CD Integration

Validate data in GitHub Actions:

**`.github/workflows/validate-data.yml`**:
```yaml
name: Validate Portfolio Data

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run validate:data
```

---

## Future Contracts

Additional schemas may be added for:
- LAB64 metadata (company info, SEO)
- Configuration files
- Analytics events
- Form submissions (if added later)
