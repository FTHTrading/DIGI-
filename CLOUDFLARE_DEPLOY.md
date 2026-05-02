# Cloudflare Pages Deployment Guide

Production deployment for Dignity institutional platform on Cloudflare Pages.

## Prerequisites

- Cloudflare account with Pages enabled
- Wrangler CLI installed: `npm install -g wrangler`
- Git repository connected to Cloudflare

## Environment Setup

### 1. Cloudflare Project Configuration

Create `wrangler.toml`:

```toml
name = "dignity-institutional"
type = "javascript"
account_id = "YOUR_ACCOUNT_ID"
workers_dev = true
route = "dignity.unykorn.org/*"
zone_id = "YOUR_ZONE_ID"

[env.production]
name = "dignity-institutional"
routes = [
  { pattern = "dignity.unykorn.org", zone_name = "unykorn.org" }
]
```

### 2. Environment Variables

Set in Cloudflare Pages → Settings → Environment Variables:

```
DATABASE_URL = postgresql://...
NEXTAUTH_URL = https://dignity.unykorn.org
NEXTAUTH_SECRET = <32-byte base64>
NODE_ENV = production
```

## Build & Deploy

### Build Process

```bash
# Next.js build
pnpm --filter @dignity/web build

# OpenNext Cloudflare build
npx @opennextjs/cloudflare build
```

### Deploy to Cloudflare Pages

```bash
# Deploy from .open-next directory
npx wrangler pages deploy .open-next \
  --project-name=dignity-institutional \
  --branch=main
```

### Verify Deployment

```bash
# Check deployment status
curl https://dignity.unykorn.org/api/health

# Verify routes
curl https://dignity.unykorn.org/platform
curl https://dignity.unykorn.org/proof
```

## GitHub Actions CI/CD

See `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install
      - run: pnpm build
      - run: npx @opennextjs/cloudflare build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: dignity-institutional
          directory: .open-next
          branch: main
```

## Routing Configuration

### _redirects (Cloudflare Pages)

```
# Redirect all API calls to agent backend
/api/agent/* https://agent-backend.internal.unykorn.org/:splat 200

# Redirect /docs to /documents
/docs/* /documents 301

# SPA fallback
/* /index.html 200
```

## Caching Strategy

**Static Content (1 week):**
- `/public/*`
- `*.css`, `*.js`
- Document PDFs

**Semi-Static (1 day):**
- `/platform`, `/leadership`, `/proof`

**Dynamic (No cache):**
- `/api/*`
- `/admin/*`, `/investor/*`
- Database-driven content

## SSL/TLS

- Automatic certificate generation
- Auto-renewal via ACME
- HSTS header: `max-age=31536000; includeSubDomains`

## Performance Optimization

**Cloudflare Workers:** Cache API responses
**Image Optimization:** Cloudflare Image Resizing
**Compression:** Brotli + gzip
**HTTP/2 Push:** Preload critical assets

## Monitoring

- **Cloudflare Analytics:** Page Views, Cache Hit Ratio, Errors
- **Logs:** Cloudflare Logpush to S3
- **Uptime:** Cloudflare Monitoring + PagerDuty

## Troubleshooting

### Deployment Fails

```bash
# Check build output
pnpm build --verbose

# Verify .open-next structure
ls -la .open-next/

# Test locally with wrangler
wrangler pages dev .open-next
```

### 502 Bad Gateway

- Check DATABASE_URL is accessible from Cloudflare
- Verify CORS headers on origin server
- Check Cloudflare page rules for conflicts

### Slow Performance

- Check Cloudflare Analytics for cache hit ratio
- Verify worker CPU time is under limits
- Review database query performance

---

**Next Deployment:** Set up CI/CD with GitHub Actions for automatic deployments on push to main.
