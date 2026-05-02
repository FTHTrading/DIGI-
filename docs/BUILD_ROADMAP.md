# Build Roadmap

## Phase 0: Stabilize Local Environment

- Docker Desktop running
- pnpm setup:auto passing
- pnpm doctor passing
- pnpm dev working

Exit criteria:
- Local web and backend services start cleanly
- Prisma client generation and schema push succeed
- Operator runbook is repeatable without manual firefighting

## Phase 1: Core Operating Dashboard

- Client records
- Company records
- Deal records
- Document checklist
- Status board
- Audit log

Exit criteria:
- Dashboard reads/writes real records from PostgreSQL
- Role-aware visibility for operator/admin/investor contexts

## Phase 2: Compliance Packet Builder

- CIS checklist
- POF checklist
- KYC/KYB document tracking
- Evidence upload tracking
- Approval status
- Generated packet summaries

Exit criteria:
- Operators can produce review-ready compliance/funding packets with clear completeness status

## Phase 3: AI Agent Workflow

- Read-only agent analysis
- Document summarization
- Missing-field detection
- Task routing
- Report generation
- Approval-gated actions only

Exit criteria:
- Agents accelerate preparation and review workflows without taking unauthorized actions

## Phase 4: Term Sheet and Monetization

- Pricing
- Implementation budget
- Milestone payment schedule
- Invoice schedule
- Client proposal export

Exit criteria:
- Commercial package can be delivered as board/client-ready materials with traceable assumptions

## Phase 5: RWA/Blockchain Readiness

- Asset registry
- Proof/evidence references
- Wallet references
- Transaction references
- Compliance-gated workflows
- No live transactions without explicit approval gates

Exit criteria:
- RWA references are operationally connected to document/evidence/approval system before any live transaction path is enabled

## Priority Order

1. Get Docker stable
2. Run pnpm setup:auto
3. Run pnpm doctor
4. Run pnpm dev
5. Make dashboard show real database records
6. Add client/deal/document models
7. Add CIS/POF packet builder
8. Add AI read-only document analysis
9. Add approval gates
10. Add term sheet export/invoice schedule
11. Add RWA/blockchain references only after core workflow is stable
