# Workspace Bootstrap Guide

Complete setup instructions for Dignity institutional platform local development.

## Prerequisites

| Tool | Version | Installation |
|------|---------|--------------|
| Node.js | 20+ | https://nodejs.org |
| pnpm | 9+ | `npm install -g pnpm` |
| PostgreSQL | 16 | https://www.postgresql.org/download |
| Git | Latest | https://git-scm.com |

## Step-by-Step Setup

### 1. Clone Repository

```bash
git clone https://github.com/FTHTrading/Dignity.git
cd Dignity
```

### 2. Environment Configuration

```bash
# Copy example environment file
cp .env.local.example .env.local

# Edit with your values
code .env.local
```

**Required variables:**

```env
# PostgreSQL connection
DATABASE_URL=postgresql://postgres:password@localhost:5433/dignity_institutional

# NextAuth
NEXTAUTH_URL=http://localhost:3300
NEXTAUTH_SECRET=<32-byte base64 secret>

# Environment
NODE_ENV=development
```

**To generate NEXTAUTH_SECRET:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Install Dependencies

```bash
pnpm install
```

This installs dependencies for:
- Root workspace
- apps/web
- apps/agent-backend
- All 15 packages (db, auth, compliance-engine, etc.)

### 4. Database Setup

**Option A: Local PostgreSQL (Recommended for Development)**

```bash
# Install PostgreSQL 16
# macOS: brew install postgresql@16
# Linux: apt install postgresql-16
# Windows: https://www.postgresql.org/download/windows

# Start PostgreSQL service
sudo service postgresql start  # Linux
brew services start postgresql@16  # macOS

# Create development database
createdb -U postgres dignity_institutional

# Verify connection
psql -U postgres -d dignity_institutional -c "\dt"
```

**Option B: Docker Compose**

```bash
# Start PostgreSQL in Docker
docker-compose -f docker-compose.local.yml up -d

# Verify
docker ps  # Should show dignity-postgres running
```

### 5. Prisma Setup

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to your database
pnpm db:push

# (Optional) Seed reference data
pnpm db:seed

# (Optional) Browse database in Studio
pnpm db:studio
```

### 5A. Automated Setup (Recommended)

```bash
pnpm setup:auto
```

This command automatically:
- Creates `.env.local` from template if missing
- Generates a secure `NEXTAUTH_SECRET` if placeholder value is detected
- Starts local PostgreSQL via Docker Compose when using localhost:5433
- Installs dependencies
- Runs Prisma client generation and schema push

### 6. Validation

```bash
# Check port availability
pnpm check-ports

# Validate environment
pnpm validate-env
```

Expected output:

```
✓ Port 3300 (Next.js Web Application): Free
✓ Port 5100 (Fastify Agent Backend): Free
✓ Port 5433 (PostgreSQL): Free
✅ All ports available. Ready to start development.
```

### 7. Start Development

```bash
pnpm dev
```

This starts:
- **Next.js frontend:** http://localhost:3300
- **Fastify backend:** http://localhost:5100
- **Turborepo:** Manages build pipeline

### 8. Verify Setup

Open your browser:

1. Homepage: http://localhost:3300
2. Public routes: http://localhost:3300/platform, /leadership, /faq, etc.
3. API health: http://localhost:5100/health
4. MCP tools: http://localhost:5100/tools

## PowerShell One-Command Setup

For Windows users:

```powershell
.\scripts\bootstrap.ps1
```

This automatically:
1. Checks prerequisites
2. Installs dependencies
3. Validates port availability
4. Creates .env.local template
5. Shows next steps

## Troubleshooting

### Port Already in Use

```bash
# Check what's using port 3300
lsof -i :3300  # macOS/Linux
netstat -ano | findstr :3300  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Database Connection Error

```bash
# Verify PostgreSQL is running
psql -U postgres -c "\l"  # List databases

# Check DATABASE_URL in .env.local
# Format: postgresql://user:password@host:port/database
# Example: postgresql://postgres:password@localhost:5433/dignity_institutional

# Test connection
psql $DATABASE_URL -c "\dt"
```

### Prisma Client Not Generated

```bash
# Regenerate
pnpm db:generate

# Clear cache and retry
rm -rf node_modules/.prisma
pnpm install
pnpm db:generate
```

### Node Modules Issues

```bash
# Full clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Development Workflow

### Run Development Servers

```bash
# Starts all apps with hot reload
pnpm dev
```

### TypeScript Type Checking

```bash
pnpm typecheck
```

### Linting

```bash
pnpm lint
```

### Full Build

```bash
pnpm build
```

### Database Operations

```bash
pnpm db:generate    # Generate Prisma client
pnpm db:push        # Push schema to DB
pnpm db:migrate     # Run migrations
pnpm db:seed        # Seed reference data
pnpm db:studio      # Interactive DB browser
pnpm db:reset       # Full reset (⚠️ deletes data)
```

## File Structure for Development

```
Dignity/
├── .env.local          # Your local environment (gitignored)
├── apps/
│   ├── web/
│   │   ├── src/app/               # Next.js routes
│   │   └── public/                # Static assets
│   └── agent-backend/
│       └── src/server.ts          # Fastify entry point
├── packages/           # 15 workspace libraries
├── scripts/
│   ├── check-ports.mjs            # Port validator
│   ├── validate-env.mjs           # Environment validator
│   └── bootstrap.ps1              # PowerShell setup
└── turbo.json          # Turborepo configuration
```

## IDE Setup (VS Code)

### Recommended Extensions

- **ES Lint** — `dbaeumer.vscode-eslint`
- **Prettier** — `esbenp.prettier-vscode`
- **TypeScript Vue Plugin** — `Vue.volar`
- **PostgreSQL** — `ms-ossdata.vscode-postgresql`

### VS Code Settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Useful Commands Quick Reference

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start all dev servers |
| `pnpm build` | Full monorepo build |
| `pnpm typecheck` | TS type checking |
| `pnpm lint` | ESLint all packages |
| `pnpm db:push` | Sync schema to DB |
| `pnpm db:studio` | Interactive DB browser |
| `pnpm check-ports` | Verify ports are free |
| `pnpm validate-env` | Check environment setup |

## Next Steps After Setup

1. **Explore Routes:** Visit http://localhost:3300 and navigate the platform
2. **Review Code:** Start with `apps/web/src/app/page.tsx`
3. **Understand Data Model:** Check `packages/db/src/prisma/schema.prisma`
4. **Read Documentation:** See `docs/TERM_SHEET.md` for full specifications
5. **Start Contributing:** Pick an issue or feature to implement

---

**For issues or questions:** Reach out to the team via institutional contact form.

---

**Setup Checklist:**
- [ ] Node.js 20+ installed
- [ ] pnpm 9+ installed
- [ ] PostgreSQL 16 running
- [ ] Repository cloned
- [ ] .env.local created and populated
- [ ] Dependencies installed (`pnpm install`)
- [ ] Database initialized (`pnpm db:push`)
- [ ] Ports verified (`pnpm check-ports`)
- [ ] Dev servers started (`pnpm dev`)
- [ ] Browser opened to http://localhost:3300
