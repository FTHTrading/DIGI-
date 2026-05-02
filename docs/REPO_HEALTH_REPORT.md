# Repo Health Report

## What Exists

- Monorepo with Next.js web app, Fastify agent backend, and shared packages
- Prisma/PostgreSQL data layer package with schema and generation scripts
- Local Docker compose for PostgreSQL
- Setup and validation scripts (setup:auto, doctor, validate-env, check-ports, bootstrap)
- Institutional documentation including term sheet, topology, and bootstrap guides

## What Is Working

- Script wiring in root package.json for setup:auto, doctor, and dev:safe
- Env validation and port diagnostics scripts
- Prisma schema path and package-level database scripts
- Expanded term sheet with monetization and implementation economics

## What Is Blocked

- Local startup remains blocked when Docker daemon is not running while DATABASE_URL points to localhost:5433.

## What Needs to Be Built Next

- Persist dashboard workflows to database-backed records
- Add client/company/deal/document/evidence/payment data models and APIs
- Implement CIS/POF packet builder workflows and generated packet summaries
- Add read-only AI workflow features (analysis/summarization/routing)
- Add proposal/invoice export linked to term-sheet pricing structure

## Safest Next 10 Tasks

1. Start Docker Desktop and verify docker info
2. Run pnpm setup:auto
3. Run pnpm doctor
4. Run pnpm dev
5. Add Prisma models for Client, Company, Deal, Document, Evidence, Payment
6. Add API routes for client/deal/document CRUD with validation
7. Build dashboard tables for live records from PostgreSQL
8. Add CIS/POF checklist UI + completeness scoring
9. Add read-only AI summarization for packet readiness notes
10. Add approval-gated export for invoice schedule and proposal packet
