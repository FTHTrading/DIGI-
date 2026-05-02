# Dignity — Institutional Gold-Backed Digital Securities Operating Platform

```
██████╗ ██╗ ██████╗ ███╗ ██╗██╗████████╗██╗ ██╗
██╔══██╗██║██╔════╝ ████╗ ██║██║╚══██╔══╝╚██╗ ██╔╝
██║ ██║██║██║ ███╗██╔██╗ ██║██║ ██║ ╚████╔╝
██║ ██║██║██║ ██║██║╚██╗██║██║ ██║ ╚██╔╝
██████╔╝██║╚██████╔╝██║ ╚████║██║ ██║ ██║
╚═════╝ ╚═╝ ╚═════╝ ╚═╝ ╚═══╝╚═╝ ╚═╝ ╚═╝
```

**Reserve-backed · Board-governed · Audit-chained · Four-eyes enforced · MCP agent-native**

Dignity is an institutional-grade digital asset issuer platform for reserve-backed, compliance-first security token issuance. It is not a cryptocurrency project. It is a regulated operating infrastructure for gold-backed securities — built to institutional capital markets standards from first principles.

## What This Platform Is

Dignity Workspace is an AI-powered institutional operations platform for private deal intake, client onboarding, compliance packet preparation, funding documentation, asset workflow management, and RWA-ready infrastructure. It combines a web dashboard, agent backend, PostgreSQL/Prisma database, automated local setup checks, and investor/client-facing term sheet documentation.

## What We Are Building Now

We are building an institutional funding and RWA operating system. The platform helps asset owners, issuers, project sponsors, and capital partners move from raw asset intake to verified evidence file, funding packet, capital review room, legal/compliance close, disbursement controls, and post-close reporting.

**Core flow:**
```
Asset → Evidence → Packet → Review Room → Term Sheet → Closing → Controlled Funding → Reporting → Exit
```

See [docs/START_TO_FINISH_FUNDING_WORKFLOW.md](docs/START_TO_FINISH_FUNDING_WORKFLOW.md) for the complete 12-stage funding operations reference.

## Current Local Startup

```bash
pnpm setup:auto
pnpm doctor
pnpm dev
```

## Safety and Compliance Boundary

The platform is an operational system, not a regulated entity by itself. See [docs/COMPLIANCE_BOUNDARIES.md](docs/COMPLIANCE_BOUNDARIES.md) for explicit boundaries and non-claims.

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+
- PostgreSQL 16

### Local Development

```bash
# 1. Clone and install
git clone https://github.com/FTHTrading/Dignity.git
cd Dignity
pnpm install

# 2. Environment setup
cp .env.local.example .env.local
# Edit .env.local with your DATABASE_URL, NEXTAUTH_SECRET

# 3. Automated setup (recommended)
pnpm setup:auto     # Installs deps, validates env, starts local DB, pushes schema

# 4. Start development
pnpm dev

# Web app:         http://localhost:3300
# Agent backend:   http://localhost:5100
```

## Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         DIGNITY PLATFORM                             │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Cloudflare Pages + Workers (Edge CDN / DDoS / TLS)            │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  Next.js 15 Web Application  (apps/web · port 3300)            │ │
│  │  ├─ 9 Public Routes  (/, /evolution, /platform, /leadership...) │ │
│  │  ├─ Admin Panel      (/admin/*  — NextAuth protected)          │ │
│  │  ├─ Investor Portal  (/investor/*  — session auth)             │ │
│  │  └─ API Proxy        (/api/agent/* → agent-backend)            │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  Fastify 5 Agent Backend  (apps/agent-backend · port 5100)     │ │
│  │  ├─ MCP Tool Registry  (21 tools · 7 domains)                  │ │
│  │  ├─ A2A Routing        (agent-to-agent message bus)            │ │
│  │  └─ x402 Stubs         (Phase IV — ATP payment rail)           │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  PostgreSQL + Prisma ORM  (port 5433)                          │ │
│  │  ├─ Operational data (reserves, tokens, investors, venues)     │ │
│  │  └─ Audit chain (SHA-256 hash-linked, append-only)             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

## Key Features

### 1. Reserve Verification
- **Coverage Ratio:** Minimum 1.000 (100% backed)
- **Daily Revaluation:** Spot price feed integration
- **Monthly Attestation:** Custodian verification
- **Public Proof Endpoint:** /proof — Real-time verification

### 2. Governance Controls
- **Four-Eyes Principle:** System invariant at API layer
- **Approval Workflows:** 6 distinct workflows with role separation
- **No Admin Override:** Unbypassable separation of duties

### 3. Compliance Framework
- **KYC/AML Pipeline:** Full compliance screening
- **Accreditation Verification:** Reg D and Rule 144A support
- **Sanctions Screening:** OFAC/SDN list integration
- **Audit Trail:** Every check logged immutably

### 4. MCP Agent Mesh
- **21 Tools** across 7 operational domains
- **6 Agent Personas** with strict role isolation
- **Agent-to-Agent Routing:** A2A message bus
- **Phase III:** JWT external agent access (planned)

### 5. Audit Chain
- **SHA-256 Hash-Chaining:** Tamper-evident append-only log
- **Immutable Records:** Every operation logged with full state diff
- **Chain Verification:** Public verification endpoint
- **Zero Retroactive Alteration:** Chain breaks if modified

## Monorepo Structure

```
apps/
├── web/                 # Next.js 15 frontend + admin + investor portal
└── agent-backend/       # Fastify 5 MCP tool service + A2A routing

packages/               # 15 institutional libraries
├── audit/               # SHA-256 hash-chain
├── compliance-engine/   # KYC/AML
├── token-engine/        # Mint/redeem
├── reserve-registry/    # Reserve management
├── treasury/            # Operations workflows
├── market-ops/          # Market maker governance
├── exchange-adapters/   # Venue connectors
├── stablecoin-rails/    # USDC/USDT rails
├── attestation/         # Proof anchoring
├── analytics/           # Reporting
├── documents/           # PDF generation
├── auth/                # NextAuth
├── db/                  # Prisma ORM
├── ui/                  # Design system
└── shared-types/        # TypeScript types

contracts/              # Solidity security token contracts
docs/                   # Runbooks, policies, term sheet
infra/                  # Docker, Cloudflare configs
scripts/                # Bootstrap, validation
```

## Public Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage — Platform overview |
| `/platform` | Architecture — 15 packages, 21 MCP tools |
| `/evolution` | Roadmap — Phase I–IV progress |
| `/leadership` | Board of Directors |
| `/controls` | Governance — Four-eyes workflows |
| `/proof` | Proof Center — Reserve verification |
| `/fundability` | Why operational validation matters |
| `/roadmap` | What's complete, what's next |
| `/contact` | Institutional inquiry form |
| `/documents` | 5 institutional PDFs |
| `/faq` | Frequently asked questions |
| `/token` | Token specifications (DIGN) |
| `/compliance` | Compliance framework |
| `/agent` | Agent interface & MCP catalog |

## Protected Routes

| Route | Access | Purpose |
|-------|--------|---------|
| `/admin/*` | NextAuth + Board | Board operations dashboard |
| `/investor/*` | Session + Accredited | Portfolio, buy/redeem, holdings |

## Commands

```bash
# Development
pnpm dev              # Start all apps via Turborepo
pnpm dev:safe         # Run auto-setup then start all apps
pnpm setup:auto       # One-command preflight + database setup
pnpm doctor           # Alias for setup:auto

# Building
pnpm build            # Full monorepo build
pnpm typecheck        # TypeScript type checking
pnpm lint             # ESLint across all packages

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to local DB
pnpm db:migrate       # Run pending migrations
pnpm db:seed          # Seed reference data
pnpm db:studio        # Prisma Studio (DB browser)

# Validation
pnpm check-ports      # Verify ports 3300/5100/5433 are free
pnpm validate-env     # Validate environment setup

# One-time setup
pnpm bootstrap        # Full local environment bootstrap (PowerShell)
```

## Deployment

Production: **dignity.unykorn.org** → Cloudflare Pages

```bash
# Build
pnpm --filter @dignity/web build
npx @opennextjs/cloudflare build

# Deploy
npx wrangler pages deploy .open-next \
  --project-name=dignity-institutional \
  --branch=main
```

See [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md) for full deployment guide.

## Documentation

- [TERM_SHEET.md](./docs/TERM_SHEET.md) — Full term sheet with token specs, fees, governance
- [SYSTEM_TOPOLOGY.md](./SYSTEM_TOPOLOGY.md) — System architecture and data flows
- [WORKSPACE_BOOTSTRAP.md](./WORKSPACE_BOOTSTRAP.md) — Environment setup guide

## License

This repository is proprietary. Content is shared for board and qualified institutional stakeholder reference. Not a public offering or solicitation.

---

**Dignity Institutional Platform**  
*A world-class reserve-backed digital security issuer operating system.*  
*Precious metals. Institutional trust. Evidence-first claims.*
