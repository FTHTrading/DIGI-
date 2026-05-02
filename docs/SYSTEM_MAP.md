# System Map

This map describes current repository components based on existing files and structure.

## Apps

- apps/web
  - Next.js 15 App Router interface
  - Public institutional pages and protected admin/investor route families
  - Primary control center for operations visibility and stakeholder-facing workflow context
- apps/agent-backend
  - Fastify service for MCP tool registry and agent routing surface
  - Includes health/tools endpoints and scaffold for operational tool orchestration

## Packages

- packages/db
  - Prisma schema, client generation, and data access package
- packages/auth
  - Authentication and role-access package scaffold
- packages/shared-types
  - Shared TypeScript types and schema contracts scaffold
- packages/ui
  - Shared UI design system scaffold
- packages/compliance-engine
  - Compliance workflow and policy logic scaffold
- packages/token-engine
  - Issuance/redemption domain logic scaffold
- packages/reserve-registry
  - Reserve proof and lot management scaffold
- packages/audit
  - Audit-chain and evidence integrity scaffold
- packages/attestation
  - Attestation support scaffold
- packages/treasury
  - Treasury workflow scaffold
- packages/market-ops
  - Market operations scaffold
- packages/exchange-adapters
  - Venue/adapter integration scaffold
- packages/stablecoin-rails
  - Settlement rails scaffold
- packages/documents
  - Document-generation scaffold
- packages/analytics
  - Reporting/analytics scaffold

## Scripts

- scripts/auto-setup.mjs
  - One-command setup for dependency checks, env checks, Docker/Postgres readiness, Prisma generation, and schema push
- scripts/doctor.mjs
  - Safe health check (non-mutating): tooling, env presence, node_modules, and app-port checks
- scripts/validate-env.mjs
  - Required env key and format validation
- scripts/check-ports.mjs
  - Port availability checks for local services
- scripts/bootstrap.ps1
  - PowerShell bootstrap wrapper for Windows operators

## Database

- packages/db/src/prisma/schema.prisma
  - PostgreSQL datasource
  - Core models currently present: ReserveLot, TokenSupply, AuditEvent, ApprovalRequest, Investor, Venue
  - Basis for auditable institutional operations data plane

## Docs

- docs/TERM_SHEET.md
  - Institutional term sheet with monetization, implementation budget, milestone payments, and operating costs
- docs/WHAT_WE_ARE_BUILDING.md
  - Product scope, users, value, and non-claims
- docs/BUILD_ROADMAP.md
  - Phased implementation priorities
- docs/COMPLIANCE_BOUNDARIES.md
  - Explicit boundary and responsibility model
- docs/OPERATOR_QUICKSTART.md
  - Operator runbook for local startup and blockers
- docs/REPO_HEALTH_REPORT.md
  - Current status and next safe tasks
- SYSTEM_TOPOLOGY.md
  - Architecture and flow-level overview
- WORKSPACE_BOOTSTRAP.md
  - Detailed setup and troubleshooting guidance

## Local Infrastructure

- docker-compose.local.yml
  - Local PostgreSQL 16 container on host port 5433
- Turborepo + pnpm workspace orchestration
- Local app ports
  - 3300: Web app
  - 5100: Agent backend
  - 5433: PostgreSQL

## Environment Variables

From current env templates/scripts, key variables include:

- DATABASE_URL
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- NODE_ENV
- NEXT_PUBLIC_API_URL
- AGENT_BACKEND_URL
- CLOUDFLARE_ACCOUNT_ID
- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_PAGES_PROJECT
- ENABLE_ADMIN_PANEL
- ENABLE_INVESTOR_PORTAL
- ENABLE_MCP_TOOLS

## Current Blocker

- Docker daemon is not running, which blocks local PostgreSQL startup when DATABASE_URL points to localhost:5433.

## Next Build Priorities

1. Stabilize local ops path (Docker running, setup:auto + doctor + dev)
2. Persist core operational records from dashboard into PostgreSQL models
3. Add client/company/deal/document/evidence/payment schemas and APIs
4. Deliver CIS/POF checklist workflows and packet summary generation
5. Add read-only AI analysis and task routing with approval-gated actions
6. Add exportable proposal/invoice schedules tied to term sheet economics
