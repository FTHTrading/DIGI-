# DIGNITY INSTITUTIONAL PLATFORM
### Platform Build Proposal
#### May 2026 · Version 1.0 · Prepared by Kevan Burns

---

**CONFIDENTIAL — AUTHORIZED RECIPIENTS ONLY**
This document is prepared exclusively for the named recipient. It may not be copied, forwarded, or disclosed to any third party without prior written authorization from Dignity Institutional Platform. Unauthorized distribution is prohibited.

---

---

## SLIDE 01 — WHAT WE ARE BUILDING

We are building a complete institutional funding and RWA operating platform — start to finish.

This is not a template. This is not off-the-shelf software. This is a custom-built, production-grade institutional operations system purpose-engineered for:

- **Asset owners and project sponsors** who need to bring real assets to institutional capital
- **Issuers and SPV operators** who need a compliant, governed, audit-ready issuance infrastructure
- **Capital partners** — lenders, investors, family offices, funds — who need a clean, reviewed, evidence-backed deal file before they commit capital
- **Institutional operators** who need four-eyes governance, compliance gating, and immutable audit trails at every step

> **Simple description:** Dignity turns a raw asset, project, or funding request into a complete, organized, institutionally reviewable funding package — with governance, compliance, reserve proof, agent support, and blockchain settlement rails built in.

### What the Client Receives at Delivery

| Deliverable | Description |
|---|---|
| **Production web platform** | Full institutional dashboard, investor portal, compliance portal, admin panel |
| **Agent backend** | AI-powered workflow coordination, document analysis, packet generation |
| **Database** | PostgreSQL 16 + Prisma ORM — all data fully yours, self-hosted or managed |
| **15 platform modules** | Fully documented, tested, and deployed packages covering every operational domain |
| **Compliance engine** | KYC/AML, four-eyes approval, investor status, regulatory compliance logic |
| **Reserve registry** | Gold + silver reserve management, Systec attestation, public proof endpoint |
| **Funding workflow** | 12-stage start-to-finish funding operations system |
| **AI agent mesh** | 7 AI agent personas across 7 operational domains (read-only + approval-gated) |
| **Token + settlement rails** | DIGN, SILV, DIGN-S, and approved RWA instrument infrastructure |
| **Systec L1 integration** | Reserve sync, token settlement, audit anchoring on Systec's proprietary chain |
| **Security architecture** | Cloudflare WAF + DDoS, TLS 1.3+, penetration-tested, OWASP-reviewed |
| **Full source code** | All 15 packages, 2 apps, infra config, database schemas — client-owned |
| **Documentation** | Architecture docs, operator runbooks, API references, deployment guides |

---

---

## SLIDE 02 — COMPLETE BUILD SCOPE

### Two Applications

| App | Stack | Port | Purpose |
|---|---|---|---|
| **Web Application** | Next.js 15 App Router | 3300 | Institutional dashboard, investor portal, compliance portal, admin panel, funding rooms |
| **Agent Backend** | Fastify 5 | 5100 | AI agent mesh, MCP tooling, workflow coordination, packet generation, Systec bridge |

### Fifteen Platform Modules (packages/)

| Module | Purpose |
|---|---|
| **analytics** | Coverage timelines, issuance summaries, funding flow reporting, operational dashboards |
| **attestation** | Systec reserve attestation processing, monthly attestation events, custodian verification |
| **audit** | SHA-256 hash-chained event log, Systec L1 anchor integration, chain integrity verification |
| **auth** | NextAuth session management, role-based access (admin/board/operator/investor/compliance) |
| **compliance-engine** | KYC/AML state machine, investor status management, sanctions/OFAC screening, accreditation verification |
| **db** | PostgreSQL 16 + Prisma ORM — full schema for all data models across the platform |
| **documents** | Document upload, storage, metadata, evidence file management, packet assembly |
| **exchange-adapters** | Price feed adapters (LBMA gold/silver fix), market data integrations |
| **market-ops** | Venue management, spread governance, pricing controls |
| **reserve-registry** | Gold + silver reserve lot tracking, coverage ratio engine, Systec sync, lot state management |
| **shared-types** | TypeScript interfaces, enums, API contracts, shared across all modules |
| **stablecoin-rails** | USDF-compatible payment rails, stablecoin settlement references |
| **token-engine** | DIGN, SILV, DIGN-S issuance + redemption logic, supply state, coverage enforcement |
| **treasury** | Treasury operations — funding close processing, draw requests, disbursement controls, repayment tracking |
| **ui** | Shared component library — tables, cards, modals, status badges, approval workflows, forms |

### Infrastructure Stack

| Layer | Technology |
|---|---|
| **Edge / CDN / DDoS / WAF** | Cloudflare Pages + Workers + WAF rules |
| **Application** | Next.js 15 (web) + Fastify 5 (backend) — TypeScript throughout |
| **Database** | PostgreSQL 16 + Prisma ORM |
| **Monorepo** | Turborepo + pnpm workspaces |
| **Blockchain Settlement** | Systec Layer 1 (proprietary institutional chain) |
| **Authentication** | NextAuth — role-scoped JWT sessions |
| **Local Dev** | Docker Compose — full stack local with automation scripts |
| **CI/CD** | GitHub Actions — lint, test, build, deploy pipeline |

---

---

## SLIDE 03 — PLATFORM AND TECHNICAL ARCHITECTURE

```
┌──────────────────────────────────────────────────────────────────┐
│              Cloudflare Pages + Workers                          │
│              Global Edge · DDoS Protection · WAF · TLS 1.3+      │
└──────────────────────┬───────────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│              Next.js 15 App Router  (port 3300)                  │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Public: / · /platform · /proof · /token · /compliance       │ │
│  │ /funding · /roadmap · /documents · /investor                │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │ /admin/*          Board & Operator panel (NextAuth-gated)   │ │
│  │ /investor/*       DIGN · SILV · DIGN-S · RWA positions      │ │
│  │ /funding-room/*   Capital review room (permissioned)        │ │
│  │ /compliance/*     KYC/AML · approval workflow               │ │
│  │ /api/agent/*      Proxies to agent backend                  │ │
│  └─────────────────────────────────────────────────────────────┘ │
└──────────────────────┬───────────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│              Fastify 5 Agent Backend  (port 5100)                │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ MCP Tools: Audit · Reserve · Token · Approval · Compliance  │ │
│  │            Market · Analytics                               │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │ 7 AI Agents: Treasury · Board · Compliance · Reserve        │ │
│  │              Market · Audit · Funding Workflow              │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │ APIs: Funding Packet · Asset Evidence · Capital Review      │ │
│  │       Draw Request · Reporting · Systec Bridge              │ │
│  └─────────────────────────────────────────────────────────────┘ │
└──────────────────────┬───────────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│              PostgreSQL 16 + Prisma ORM  (port 5433)             │
│  ReserveLot · TokenSupply · AssetFundingPacket · AssetEvidence   │
│  FundingRequest · CapitalReviewRoom · DrawRequest · Investor     │
│  ApprovalRequest · AuditEvent · Venue · CustodianAttestation     │
│  Client · Company · Deal · Document · Task · ReportingEvent      │
└──────────────────────┬───────────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│              Systec Layer 1 Blockchain                           │
│  Native token settlement (DIGN · SILV · DIGN-S)                 │
│  Approved RWA instrument settlement                              │
│  KYC/compliance state anchored on-chain                          │
│  Reserve lot registry (gold + silver)                            │
│  Dignity audit chain block anchoring                             │
└──────────────────────────────────────────────────────────────────┘
```

---

---

## SLIDE 04 — DATA MODEL AND SYSTEM OF RECORD

Every piece of data is defined in a structured, typed PostgreSQL schema managed by Prisma ORM.

### Reserve and Token Models

| Model | What It Stores |
|---|---|
| **ReserveLot** | LBMA bar reference, metal type, custodian (Systec), USD valuation, cryptographic hash, lot state |
| **TokenSupply** | Token type (DIGN/SILV/DIGN-S), outstanding supply, coverage ratio snapshot, issuance events |
| **CustodianAttestation** | Attestation date, Systec verification, gold/silver/blended coverage ratios, attestation hash |

### Funding and Asset Models

| Model | What It Stores |
|---|---|
| **AssetFundingPacket** | Issuer, entity, jurisdiction, asset description, funding request, use of funds, capital stack, repayment source, risk factors, status, evidence refs, closing checklist |
| **AssetEvidence** | Ownership proof, valuation, reserve report, appraisal, contracts, permits, insurance, custody letters, revenue records, engineering reports |
| **FundingRequest** | Structure type, amount, investor/lender, status, approval chain, collateral reference, disbursement plan, repayment schedule |
| **CapitalReviewRoom** | Permissions, counterparties, question log, diligence requests, LOI status, term sheet status, timeline |
| **DrawRequest** | Milestone, requested amount, invoice refs, receipt refs, approval status, use-of-funds category |

### Governance and Compliance Models

| Model | What It Stores |
|---|---|
| **Investor** | Name, entity type, KYC/AML status, accreditation, QIB status, sanctions screen, re-verification date |
| **ApprovalRequest** | Action type, proposer, approver, status, expiry, linked entity, decision, audit hash |
| **AuditEvent** | Event type, actor, linked entity, payload hash, SHA-256 chain hash, Systec L1 block anchor |

### Operational Models

| Model | What It Stores |
|---|---|
| **Client** | Client profile, contacts, entity, jurisdiction, status |
| **Company** | Company profile, corporate docs, beneficial ownership, good standing |
| **Deal** | Deal name, type, status, client, asset refs, funding packet ref, timeline |
| **Document** | File reference, type, upload date, uploader, evidence category, deal ref |
| **Venue** | Venue name, instrument types, status (ACTIVE/INACTIVE), spread configuration |
| **ReportingEvent** | Period, type (monthly/reserve/covenant), content, approvals, distribution list |

---

---

## SLIDE 05 — PLATFORM SCREENS AND USER WORKFLOWS

### Operator and Admin Panel (/admin/*)

| Screen | What Operators Do |
|---|---|
| **Dashboard** | See all clients, companies, deals, and their statuses at a glance |
| **Client Management** | Create, view, and update client records. Track KYC status, document completeness, deal pipeline |
| **Compliance Panel** | Review KYC/KYB submissions. Update investor status. Track OFAC/sanctions flags |
| **Funding Packet Builder** | Step through 12-stage intake. Generate funding packets. Check completeness. Route to review room |
| **Asset Evidence Registry** | Upload and track ownership proof, valuations, reserve reports, contracts, permits, insurance |
| **Capital Review Room** | Set counterparty permissions. Track questions, diligence requests, LOI, and term sheets |
| **Approval Queue** | See all pending four-eyes approval requests. Approve or reject with timestamp and audit log |
| **Reserve Management** | View reserve lots, coverage ratios, Systec attestations, and proof endpoint status |
| **Token Issuance** | Initiate DIGN, SILV, DIGN-S mint or redemption requests (approval-gated) |
| **Draw Requests** | Submit and track post-close draw requests, invoices, receipts, and milestone approvals |
| **Audit Log** | Full immutable event log with SHA-256 chain verification and Systec L1 anchors |
| **Reporting** | Generate monthly reports, reserve reports, covenant status, budget variance |

### Investor Portal (/investor/*)

| Screen | What Investors See |
|---|---|
| **Portfolio** | Current holdings — DIGN, SILV, DIGN-S, approved RWA positions |
| **Positions** | Per-instrument detail — backing, valuation, coverage, redemption right |
| **Redemption** | Submit redemption requests — physical or cash at LBMA fix |
| **Statements** | Monthly statements, reserve confirmations, audit references |
| **Documents** | Subscription docs, compliance evidence, board approvals |

### Public Routes

| Route | What It Shows |
|---|---|
| `/proof` | Real-time reserve proof — coverage ratio, Systec attestation, chain integrity |
| `/platform` | Platform overview and capabilities |
| `/compliance` | Compliance framework, regulatory references |
| `/token` | DIGN, SILV, DIGN-S specifications |
| `/roadmap` | Build phases and timeline |
| `/documents` | Platform documentation index |
| `/contact` | Deal intake and onboarding contact |

---

---

## SLIDE 06 — COMPLIANCE AND GOVERNANCE CONTROLS

The compliance engine is not a checkbox. It is the enforcement layer that runs underneath every action on the platform.

### Four-Eyes API Enforcement

Every write operation requires:

1. **Proposer** submits request with full payload and justification
2. **System** validates coverage, status, evidence completeness, and approval eligibility
3. **Approver** (separate role) reviews and approves or rejects
4. **Audit event** is written regardless of outcome

**No administrative bypass. No emergency override. No exceptions.**

### KYC/AML Status States

| Status | System Behavior |
|---|---|
| **PENDING** | No transactions of any type |
| **APPROVED** | Full access — instruments, funding, deals |
| **FLAGGED** | Hold — no new activity |
| **REJECTED** | Exit only — forced redemption or close |

### Full Approval Matrix

| Action | Proposer | Approver | Expiry |
|---|---|---|---|
| Token Mint (DIGN / SILV / DIGN-S) | Treasury Officer | Board Director | 72 hrs |
| Token Redemption | Treasury Officer | Board Director | 72 hrs |
| Funding Packet Approval | Compliance Officer | Board Director | 48 hrs |
| Capital Review Room Access | Compliance Officer | Board Director | 48 hrs |
| Funding Close | Treasury Officer | Board Director | 72 hrs |
| Draw Request | Treasury Officer | Board Director | 48 hrs |
| RWA Instrument Activation | Compliance Officer | Board Director | 72 hrs |
| Reserve Lot Addition | Treasury Officer | Board Director | 72 hrs |
| Reserve Report | Treasury Officer | Board Director | 120 hrs |
| Investor Status Override | Compliance Officer | Board Director | 24 hrs |
| Venue Toggle | Market Ops | Board Director | 48 hrs |

---

---

## SLIDE 07 — RESERVE REGISTRY AND PROOF LAYER

### Coverage Ratio Formula

Coverage = (Sum of Gold Lot Valuations + Sum of Silver Lot Valuations) / (Outstanding Token Supply x Par Value)

| Parameter | Value |
|---|---|
| Minimum coverage | 1.000 (100%) |
| Buffer target | +5% above minimum |
| Gold revaluation | Daily — LBMA AM fix |
| Silver revaluation | Daily — LBMA silver fix |
| New issuance gate | Blocked automatically if post-mint ratio < 1.000 |
| Custodian attestation | Monthly — Systec |

### Reserve Lot Record (Per Bar)

| Field | Content |
|---|---|
| LBMA Bar Reference | Unique identifier per physical bar |
| Metal Type | Gold or Silver |
| Custodian | Systec (named, verified, insured) |
| USD Valuation | Timestamped daily fix |
| Lot State | ACTIVE / PENDING / RETIRED |
| Cryptographic Hash | SHA-256, anchored to Dignity audit chain + Systec L1 |

### Public Proof Endpoint

```
GET /proof

Response:
{
  chainIntegrity: true,
  lastEventHash: "sha256-hex...",
  systecL1BlockAnchor: "block-hash...",
  eventCount: 1847,
  goldCoverageRatio: 1.062,
  silverCoverageRatio: 1.055,
  totalCoverageRatio: 1.059,
  custodianAttestation: {
    custodian: "Systec",
    date: "2026-05-01T00:00:00Z",
    verified: true
  }
}
```

---

---

## SLIDE 08 — INSTRUMENTS AND SETTLEMENT RAILS

### Three Native Tokens

| Token | Backing | Denomination | Chain |
|---|---|---|---|
| **DIGN** | 100% allocated physical gold (Systec) | 1 troy oz equivalent, fractional to 0.001 | Systec L1 |
| **SILV** | 100% allocated physical silver (Systec) | 1 troy oz equivalent, fractional to 0.001 | Systec L1 |
| **DIGN-S** | Blended gold + silver reserve basket | Configurable ratio per issuance (board-approved) | Systec L1 |

### Approved RWA Instruments

In addition to the native tokens, the platform supports approved RWA issuer instruments — structured per deal:

- Asset-backed notes
- Private credit instruments
- SPV interests
- Revenue-share instruments
- Forward purchase agreements
- Approved tokenized RWA securities (compliance and board-gated)

### Issuance and Redemption Flow

```
Issuance:
  Sponsor submits request
  → Asset evidence verified
  → Coverage / collateral confirmed
  → Compliance approves investor eligibility
  → Board Director approves
  → Instrument issued + audit event written + Systec L1 anchored

Redemption / Repayment / Exit:
  Holder submits request
  → Compliance verifies status
  → Treasury confirms available settlement
  → Board Director approves
  → Settlement executed + audit event written + Systec L1 anchored
```

**System Invariant:** Separation of duties embedded at the API layer. No bypass path exists.

---

---

## SLIDE 09 — IMMUTABLE AUDIT CHAIN

Every write event on the platform is hash-chained and anchored to Systec L1.

Event(N).hash = SHA-256(Event(N).content + Event(N-1).hash)

Any retroactive alteration breaks the chain and is immediately detectable.

### What Gets Logged

| Event Type | Example |
|---|---|
| Token issuance | DIGN mint approved by Board Director at 14:32 UTC |
| Token redemption | SILV redemption settled at LBMA silver fix |
| Funding packet | Asset funding packet approved for [issuer] |
| Funding close | $2.5M close event — escrow instruction logged |
| Draw request | Milestone 2 draw approved — $500K disbursement |
| Reserve update | Lot LBMA-AU-20260501 added — coverage 1.062 |
| Compliance action | Investor [ID] status changed PENDING to APPROVED |
| Board approval | ApprovalRequest #1847 approved by Director [ID] |
| Systec attestation | Monthly attestation — gold 1.062 · silver 1.055 |

### Systec L1 Cross-Anchoring

Every N events, the Dignity audit chain is anchored to a Systec L1 block:

1. **Dignity database** — full event payload with SHA-256 chain
2. **Systec L1 block** — hash anchor stored at the chain level

Neither can be independently altered without breaking the other.

---

---

## SLIDE 10 — AI AGENT MESH

### Seven Agent Personas

| Agent | Domain | Capability Level |
|---|---|---|
| **Treasury Agent** | Mint, redemption, funding close, disbursement | Write — all actions approval-gated |
| **Board Agent** | Approval authority for all write operations | Write — board-role only |
| **Compliance Agent** | KYC/AML, investor eligibility, funding compliance | Mixed — reads freely, writes approval-gated |
| **Reserve Agent** | Gold + silver reserve management, Systec data | Mixed — reads freely, lot additions approval-gated |
| **Market Agent** | Venue management, spread, pricing | Mixed — venue toggles approval-gated |
| **Audit Agent** | Chain verification, Systec L1 anchor validation | Read-only |
| **Funding Workflow Agent** | Asset intake, evidence checklist, packet assembly, review room prep, post-close reporting | Mixed — analysis read-only, approvals gated |

### MCP Tool Domains

| Domain | Tools |
|---|---|
| **Audit** | query_events · verify_chain · get_event · get_systec_anchor |
| **Reserve** | get_coverage · list_lots · get_report · get_attestation |
| **Token** | get_status · request_mint · request_redeem · get_supply |
| **Approval** | list_pending · approve · reject · get_approval |
| **Compliance** | check_investor · list_flags · get_status · update_status |
| **Market** | list_venues · toggle_venue · get_spread · set_spread |
| **Analytics** | coverage_timeline · issuance_summary · funding_report · deal_pipeline |

### What the Funding Workflow Agent Does Specifically

- Scans asset intake for missing fields
- Cross-references evidence file against required checklist
- Flags gaps before the packet goes to capital review
- Summarizes deal structure and risk factors for reviewer consumption
- Generates draft packet sections from structured data
- Monitors post-close draw requests against use-of-funds schedule
- Generates monthly reporting drafts for board review

**All agents: No silent financial execution. Every write action requires approval-gate confirmation.**

---

---

## SLIDE 11 — SYSTEC L1 INTEGRATION

### Five Integration Points

| Integration | What It Does |
|---|---|
| **Token settlement** | DIGN, SILV, DIGN-S minted and settled natively on Systec L1 |
| **RWA instrument settlement** | Approved RWA instruments settled through Systec L1 where enabled |
| **Transfer enforcement** | KYC/compliance status checked at transaction validation — chain level |
| **Audit anchoring** | Dignity SHA-256 chain anchors event hashes to Systec L1 block confirmations |
| **Reserve registry** | Systec reserve lot registry syncs daily to Dignity coverage ratio engine |

### Why Systec L1 vs. Public Chains

| Capability | Ethereum / Solana | Systec L1 |
|---|---|---|
| Transfer restrictions | Smart contract rules — can be routed around | Chain-level — cannot be bypassed |
| KYC state | Off-chain oracle-dependent | On-chain, native to transaction validation |
| Fee predictability | Volatile gas markets | Fixed, operator-controlled |
| Audit anchoring | Block explorers only | Dignity hash-chain cross-anchored |
| Reserve proof | External oracle required | Native Systec reserve registry |
| Regulatory jurisdiction | Global, ambiguous | Operator-defined, jurisdiction-mapped |

---

---

## SLIDE 12 — START-TO-FINISH FUNDING WORKFLOW

This is the operating backbone of the platform. Every asset, issuer, and funding request runs through these twelve stages.

```
Asset → Evidence → Packet → Review Room → Term Sheet → Closing → Disbursement → Reporting → Exit
```

| Stage | Name | What Happens on the Platform |
|---|---|---|
| **1** | Sponsor Intake | Sponsor submits deal. Platform captures entity, asset description, funding request, use of funds, jurisdiction, and operator background |
| **2** | Entity Verification | KYC/KYB, beneficial ownership, corporate documents, signing authority, OFAC/sanctions screen, accreditation or QIB status |
| **3** | Asset Evidence File | Ownership proof, valuation, reserve reports, appraisals, contracts, permits, insurance, custody letters — all organized into one evidence file |
| **4** | Funding Packet | Platform generates: executive summary, issuer profile, asset description, funding request, use of funds, capital stack, collateral, repayment source, risk factors, compliance status, closing checklist |
| **5** | Capital Structure | Deal structured as: debt, equity, preferred equity, private credit, revenue share, forward purchase, offtake, SPV interest, asset-backed note, or approved RWA instrument |
| **6** | Capital Review Room | Investors, lenders, counsel, and approved counterparties review the packet with question log and diligence tracking |
| **7** | LOI / Term Sheet | Economics, collateral, repayment, covenants, fees, closing conditions, legal docs, and timeline documented |
| **8** | Legal + Compliance Close | Counsel engagement, KYC/AML confirmation, investor eligibility, subscription/loan docs, escrow/custody, board approval |
| **9** | Funding Close | Funds to escrow, qualified account, or custodian. Closing checklist completed. Authorized signer approves. Audit event recorded |
| **10** | Disbursement Controls | Draw requests, invoices, receipts, milestone approvals, use-of-funds tracking, board/compliance review per draw |
| **11** | Reporting | Monthly reports, reserve reports, project status, budget variance, covenant status, audit records |
| **12** | Repayment / Redemption / Exit | Scheduled repayment, refinance, asset sale, redemption, buyback, approved transfer, or final closeout report |

---

---

## SLIDE 13 — SECURITY ARCHITECTURE

### Edge Security (Cloudflare)

- DDoS protection — L3/L4/L7 attack mitigation
- Web Application Firewall — OWASP ruleset + custom rules
- TLS 1.3+ — encrypted in transit, global edge
- IP reputation filtering and bot management
- Rate limiting on all authenticated and public endpoints

### Application Security

- NextAuth JWT sessions with role-scoped access
- Separation of duties enforced at API middleware — not UI layer
- No admin bypass path — proposal and approval roles are mutually exclusive
- Input validation on all API endpoints
- No raw SQL — Prisma ORM parameterized queries throughout
- Environment secrets — no hard-coded keys

### Data Security

- PostgreSQL — encrypted at rest
- Audit events — append-only, no update or delete path
- SHA-256 event chain — any modification immediately detectable
- Systec L1 anchor — cross-chain immutability layer

### Pre-Launch Security Work (Included in Budget)

- Full penetration test
- OWASP Top 10 code review
- Dependency vulnerability audit
- TLS and WAF configuration review

---

---

## SLIDE 14 — 12-MONTH BUILD ROADMAP

| Phase | Name | What Gets Built | Timeline |
|---|---|---|---|
| **0** | Environment and Architecture | Turborepo workspace, Docker local stack, Prisma schema baseline, CI/CD pipeline, architecture documentation, Systec integration design | Month 1 |
| **1** | Core Platform | Next.js 15 web app, Fastify 5 backend, PostgreSQL 16 + Prisma ORM, auth + role system, shared UI library, client/company/deal records, document checklist, status board | Months 2–4 |
| **2** | Compliance and Governance Engine | KYC/AML state machine, four-eyes approval API, investor status management, OFAC screening, approval matrix, audit event log | Months 3–5 |
| **3** | Asset Evidence Registry + Funding Packet Builder | Evidence upload, ownership/valuation/reserve/contract tracking, evidence checklist engine, funding packet generator, use-of-funds schedule, closing checklist | Months 5–7 |
| **4** | Capital Review Room | Counterparty access controls, question log, diligence request tracking, LOI and term sheet workflow | Months 6–8 |
| **5** | AI Agent Mesh + MCP Tooling | 7 agent personas, 7 MCP tool domains, Funding Workflow Agent, A2A message bus, document summarization, missing-field detection, packet generation | Months 7–9 |
| **6** | Reserve Registry + Systec L1 Integration | Gold + silver reserve sync, coverage ratio engine, Systec attestation, public proof endpoint, DIGN/SILV/DIGN-S token settlement, audit chain Systec L1 anchoring. **Integration scope to be confirmed with Systec during M1 engagement.** | Months 8–10 |
| **7** | QA + Security Hardening + UAT + Production Launch | Penetration testing, OWASP audit, UAT coordination, performance testing, Cloudflare WAF hardening, production deployment, operator handover and documentation | Months 10–12 |

> **Rule:** No live Systec L1 transaction path is enabled until Phases 0–5 are fully operational and board-signed-off.

---

---

## SLIDE 15 — ONE-TIME BUILD BUDGET

### TOTAL: $1,145,000

---

#### Architecture and Program Design — $85,000

| Line Item | Cost |
|---|---|
| System architecture design | $35,000 |
| Database schema design | $15,000 |
| API contract design | $15,000 |
| Security architecture review | $20,000 |

---

#### Core Platform Engineering — $240,000

| Line Item | Cost |
|---|---|
| Next.js 15 web application | $75,000 |
| Fastify 5 agent backend | $65,000 |
| PostgreSQL 16 + Prisma ORM | $35,000 |
| Turborepo monorepo + CI/CD pipeline | $30,000 |
| Cloudflare Pages + Workers setup | $35,000 |

---

#### Compliance and Governance Engine — $140,000

| Line Item | Cost |
|---|---|
| KYC/AML state machine | $35,000 |
| Four-eyes approval API | $30,000 |
| Investor status management | $25,000 |
| Regulatory framework logic | $25,000 |
| Sanctions and OFAC screening integration | $25,000 |

---

#### Reserve Registry and Proof Layer — $120,000

| Line Item | Cost |
|---|---|
| Systec reserve API integration | $45,000 |
| Coverage ratio engine | $25,000 |
| Public proof endpoint | $20,000 |
| Reserve lot registry + attestation processing | $30,000 |

---

#### Funding Packet Builder and Capital Review Room — $115,000

| Line Item | Cost |
|---|---|
| 12-stage asset intake workflow | $30,000 |
| Funding packet generator | $35,000 |
| Capital review room (permissions, Q&A, diligence tracking) | $30,000 |
| LOI and term sheet tracking | $20,000 |

---

#### Asset Evidence Registry — $80,000

| Line Item | Cost |
|---|---|
| Evidence file management system | $35,000 |
| Document upload, storage, and metadata | $25,000 |
| Evidence checklist engine + completeness scoring | $20,000 |

---

#### Token and Settlement Rails — $110,000

| Line Item | Cost |
|---|---|
| DIGN + SILV + DIGN-S issuance and redemption logic | $40,000 |
| Systec L1 token settlement integration | $35,000 |
| Approved RWA instrument framework | $35,000 |

---

#### Agent Mesh and MCP Tooling — $80,000

| Line Item | Cost |
|---|---|
| 7 AI agent personas + A2A message bus | $35,000 |
| MCP tool framework (7 domains, all tools) | $25,000 |
| Funding Workflow Agent | $20,000 |

---

#### Security Hardening and Audit — $75,000

| Line Item | Cost |
|---|---|
| Penetration testing | $25,000 |
| OWASP Top 10 code security audit | $25,000 |
| Dependency vulnerability review | $15,000 |
| TLS 1.3+ and Cloudflare WAF hardening | $10,000 |

---

#### QA, UAT, and Production Readiness — $65,000

| Line Item | Cost |
|---|---|
| Unit and integration test suite | $25,000 |
| UAT coordination and sign-off | $20,000 |
| Production cutover + rollback plan | $20,000 |

---

#### Program Management and Documentation — $35,000

| Line Item | Cost |
|---|---|
| Project management (full engagement) | $20,000 |
| Technical documentation + operator runbooks | $15,000 |

---

### BUILD COST SUMMARY

| Workstream | Cost |
|---|---|
| Architecture and Program Design | $85,000 |
| Core Platform Engineering | $240,000 |
| Compliance and Governance Engine | $140,000 |
| Reserve Registry and Proof Layer | $120,000 |
| Funding Packet Builder and Capital Review Room | $115,000 |
| Asset Evidence Registry | $80,000 |
| Token and Settlement Rails | $110,000 |
| Agent Mesh and MCP Tooling | $80,000 |
| Security Hardening and Audit | $75,000 |
| QA, UAT, and Production Readiness | $65,000 |
| Program Management and Documentation | $35,000 |
| **TOTAL** | **$1,145,000** |

---

---

## SLIDE 16 — MILESTONE PAYMENT SCHEDULE

Five milestones. 20% each. $229,000 per milestone.

| Milestone | Name | What Gets Delivered | Payment |
|---|---|---|---|
| **M1** | Program Initiation | Architecture baseline, database schema, Systec integration design, security architecture, CI/CD pipeline, governance matrix, project plan | $229,000 |
| **M2** | Core Platform + Dual Reserve | Web application live, agent backend live, PostgreSQL with full schema, auth + roles, client/company/deal records, reserve lot registry, coverage ratio engine, Systec reserve sync operational | $229,000 |
| **M3** | Compliance + Funding Packet | KYC/AML state machine, four-eyes approval API, investor status, OFAC screening, asset evidence registry, funding packet builder, capital review room, 12-stage workflow operational | $229,000 |
| **M4** | Agent Mesh + Systec L1 | 7 AI agents live, MCP tooling deployed, Funding Workflow Agent operational, DIGN/SILV/DIGN-S token settlement on Systec L1, audit chain L1 anchoring live | $229,000 |
| **M5** | UAT + Production Launch | Penetration test complete, OWASP audit clean, UAT signed off, Cloudflare WAF hardened, production deployment, operator training, full documentation delivered, board handover | $229,000 |

### Payment Terms

| Term | Detail |
|---|---|
| Currency | USD |
| Invoice terms | Net 15 |
| Late payment | 1.5% monthly on overdue balances |
| Out-of-scope work | T&M at pre-agreed rate with signed SOW addendum |
| Third-party costs | Systec integration, legal review, attestations — billed at cost + 10% admin |

---

---

## SLIDE 17 — MONTHLY OPERATING COSTS

These are the ongoing costs after go-live. These are actual infrastructure and operations costs — not Dignity service fees.

| Category | What It Covers | Monthly Range |
|---|---|---|
| **Cloudflare Pages + Workers + WAF** | Global edge CDN, DDoS protection, WAF, TLS, Workers compute | $2,500 – $7,500 |
| **Managed PostgreSQL + Backups** | Hosted PostgreSQL 16, automated backups, read replicas, point-in-time recovery | $1,500 – $4,000 |
| **Monitoring, SIEM, and Alerting** | Application performance monitoring, security event logging, alerting pipelines | $1,000 – $3,000 |
| **Systec L1 Node + Reserve Sync Ops** | Systec node access, daily reserve sync, L1 transaction costs | $3,000 – $8,000 |
| **Custodian and Attestation Ops (Systec)** | Monthly reserve attestation, custodian verification, Systec integration support | $6,000 – $15,000 |
| **Compliance Ops + Deal Screening** | OFAC/sanctions feed, KYC/AML screening services, compliance review support | $10,000 – $25,000 |
| **Engineering Support and Maintenance** | Bug fixes, feature updates, security patches, on-call support | $25,000 – $60,000 |
| **ESTIMATED MONTHLY TOTAL** | | **$49,000 – $122,500** |

**Low end ($49K/mo):** Single active issuer, minimal transaction volume, basic engineering support.
**High end ($122.5K/mo):** Multiple active issuers, high transaction volume, dedicated engineering team, full compliance ops.

---

---

## SLIDE 18 — OPTIONAL SCOPE ADD-ONS

These items are not included in the base $1,145,000 scope. Each requires a separate SOW.

### One-Time Optional Add-Ons

| Add-On | Description | Range | Max |
|---|---|---|---|
| **ERC-3643 / Cross-chain bridge to Systec L1** | Compliant token bridge between Ethereum ERC-3643 and Systec L1 | $90,000 – $180,000 | $180,000 |
| **External legal and regulatory package** | Securities counsel, Form D support, state securities review, offering documents | $75,000 – $220,000 | $220,000 |
| **Multi-jurisdiction compliance modules** | EU (MiCA), Singapore (MAS), UAE (ADGM/DIFC), or other target markets | $45,000 – $90,000 | $90,000 |
| **White-label platform** | Custom branding, domain, client-specific UI theme | $35,000 – $75,000 | $75,000 |
| **API partner portal** | Developer portal for broker-dealer, fund, or family office API integrations | $50,000 – $95,000 | $95,000 |
| **Mobile application** | iOS + Android app for board approvals and portfolio monitoring | $80,000 – $140,000 | $140,000 |

### Monthly Optional Add-Ons

| Add-On | Description | Monthly Range | Annual (Max) |
|---|---|---|---|
| **Dedicated 24/7 SRE + incident response** | Around-the-clock site reliability, incident management, escalation | $18,000 – $45,000/mo | $540,000 |
| **Systec L1 dedicated validator node** | Dedicated validator node for maximum settlement throughput | $12,000 – $30,000/mo | $360,000 |

---

---

## SLIDE 18A — ALL-IN COST MODEL

This slide shows the true institutional-grade total cost if every optional module, compliance package, and infrastructure add-on is activated alongside the base build.

### One-Time Build Cost — All-In

| Component | Cost |
|---|---|
| Base Build (full platform, all 15 modules, 8 phases) | $1,145,000 |
| ERC-3643 / Cross-chain bridge to Systec L1 | $180,000 |
| External legal and regulatory package | $220,000 |
| Multi-jurisdiction compliance modules | $90,000 |
| **TOTAL ONE-TIME — ALL-IN** | **$1,635,000** |

> The $490,000 in add-ons covers the infrastructure and legal packages required for cross-chain settlement, multi-jurisdiction distribution, and institutional regulatory review. In a full institutional deployment these are not optional — they are required.

---

### Monthly Operating Cost — All-In

| Category | Monthly (Max) |
|---|---|
| Cloudflare Pages + Workers + WAF | $7,500 |
| Managed PostgreSQL + Backups | $4,000 |
| Monitoring, SIEM, and Alerting | $3,000 |
| Systec L1 Node + Reserve Sync Ops | $8,000 |
| Custodian and Attestation Ops (Systec) | $15,000 |
| Compliance Ops + Deal Screening | $25,000 |
| Engineering Support and Maintenance | $60,000 |
| **Base Ops Subtotal** | **$122,500** |
| Dedicated 24/7 SRE + Incident Response (add-on) | $45,000 |
| Systec L1 Dedicated Validator Node (add-on) | $30,000 |
| **TOTAL MONTHLY — ALL-IN** | **$197,500** |
| **TOTAL ANNUAL — ALL-IN** | **$2,370,000** |

---

### Year 1 Grand Total — All-In

| Category | Cost |
|---|---|
| One-time build (all-in) | $1,635,000 |
| 12 months operating (all-in) | $2,370,000 |
| **YEAR 1 TOTAL — EVERYTHING INCLUDED** | **$4,005,000** |

---

### 3-Year Pro Forma — All-In Infrastructure

| Period | Cost | Notes |
|---|---|---|
| **Year 1** | **$4,005,000** | Build + 12 months ops (all-in) |
| **Year 2** | **$2,370,000** | Ops only — no rebuild cost |
| **Year 3** | **$2,370,000** | Ops only — scale assumptions flat |
| **3-Year Total** | **$8,745,000** | Full institutional-grade operations |

> Year 2 and Year 3 ops costs are flat-modeled at max. In practice, as transaction volume grows, engineering ops may increase but custodian/compliance ops per-unit costs typically decline with scale.

---

### Cost Justification — Why These Numbers Are Correct

| Cost Driver | Why It's Justified |
|---|---|
| **$1,145,000 base build** | 15 modules + 2 apps + compliance engine + AI agent mesh + Systec L1 integration + security audit. This is a production-grade institutional system, not an MVP. |
| **$180,000 bridge** | Cross-chain ERC-3643 compliance bridge is one of the most technically complex components in regulated token infrastructure. Institutional-grade, not DeFi shortcut. |
| **$220,000 legal** | Securities counsel, Form D, state-by-state review, and offering document preparation for a metals-backed, multi-instrument, multi-jurisdiction platform is industry-standard cost. |
| **$90,000 multi-jurisdiction** | Each jurisdiction (EU MiCA, Singapore MAS, UAE ADGM) requires custom compliance logic, legal review, and regulatory mapping. $30K/jurisdiction is aggressive pricing. |
| **$197,500/mo ops** | Operating a regulated platform with: dedicated L1 validator, 24/7 SRE, custodian attestation, OFAC/KYC feeds, and Systec reserve sync is infrastructure-heavy. This matches institutional fintech run-rates. |
| **$4.005M Year 1 all-in** | For a regulated RWA platform operating a metals-backed settlement network, multi-jurisdiction compliance engine, dedicated L1 infrastructure, and full institutional funding workflow — this is at the low end of comparable regulated fintech build costs. |

---

### Comparable Market Reference

| Platform Type | Typical Year 1 All-In Cost |
|---|---|
| Regulated digital asset exchange (no custody) | $5M – $15M |
| Tokenized fund infrastructure (single jurisdiction) | $3M – $8M |
| RWA issuance platform (institutional-grade) | $2M – $6M |
| **Dignity (full build, all-in, Year 1)** | **$4.005M** |

> Dignity's cost is at the low end of institutional-grade RWA infrastructure precisely because the architecture is purpose-built — Turborepo monorepo, Systec L1 native settlement, and AI agent automation reduce the engineering surface area that would otherwise require larger teams.

---

---

## SLIDE 19 — TIMELINE

| Month | Phase | Key Milestones |
|---|---|---|
| **1** | Architecture + Environment | Architecture docs signed off · CI/CD live · Database schema baseline · Systec integration design |
| **2–3** | Core Platform begins | Web app scaffolded · Backend live · Auth + roles operational |
| **4** | Core Platform complete | Full dashboard · Client/company/deal records · Document checklist · Status board · **M2 payment gate** |
| **5–6** | Compliance + Funding | KYC/AML live · Four-eyes approval live · Asset evidence registry · Funding packet builder |
| **7** | Capital Review Room | Permissioned review rooms · Q&A + diligence tracking · LOI/term sheet workflow · **M3 payment gate** |
| **8–9** | Agent Mesh + Systec L1 | 7 agents deployed · MCP tooling live · DIGN/SILV/DIGN-S on Systec L1 · Audit anchoring · **M4 payment gate** |
| **10–11** | QA + Security Hardening | Penetration test · OWASP audit · UAT coordination · Performance testing |
| **12** | Production Launch | Cloudflare WAF hardened · Production go-live · Operator training · Board handover · **M5 payment gate** |

---

---

## SLIDE 20 — WHAT YOU OWN AT DELIVERY

At M5, the client receives full ownership of:

### Source Code

- Complete monorepo — all 15 packages, 2 applications, infrastructure config
- All TypeScript source — no minified or obfuscated delivery
- All Prisma schema files and migration history
- All Cloudflare Workers scripts and configuration
- All Docker Compose and local automation scripts
- All CI/CD pipeline configuration

### Documentation

- Platform architecture document
- API reference (all endpoints, request/response schemas)
- Database schema reference (all models, fields, relationships)
- Operator runbook — day-to-day operations guide
- Board approval guide — four-eyes system usage
- Deployment guide — production and staging environments
- Systec integration guide — reserve sync, token settlement, audit anchoring

### Training

- Operator training session (2 hours)
- Board member training session (1 hour — approval workflow)
- Compliance officer training session (1 hour — KYC/AML system)

---

---

## SLIDE 21 — PLATFORM REVENUE MODEL

After the core platform is operational, the following revenue infrastructure can be activated:

### Platform License Tiers

| Package | Target | Monthly Fee | Capacity |
|---|---|---|---|
| **Foundation** | Single issuer or project sponsor | $12,500/mo | 1 active funding room |
| **Institutional** | Multi-asset issuer or operator | $35,000/mo | 3 active funding rooms |
| **Enterprise** | Broker-dealer network, fund, family office | $75,000/mo | Multi-SPV, custom workflows |

### Transaction and Service Fees

| Fee | Rate | Timing |
|---|---|---|
| Funding Packet Setup Fee | $10,000 – $50,000 | At onboarding |
| Asset Evidence Registry Fee | $2,500 – $15,000 per asset | At documentation |
| Capital Review Room Fee | $5,000 – $25,000 per process | At launch |
| RWA Issuer Activation Fee | 0.50% – 1.50% of approved notional | At closing |
| Reserve-Backed Issuance Spread | 0.50% of notional | At mint |
| Annual Platform / Reporting Fee | 0.20% p.a. on active notional | Quarterly |
| Redemption / Repayment Processing | 0.20% – 0.25% | At settlement |

---

---

## SLIDE 22 — COMPLIANCE BOUNDARY AND SCOPE LIMITS

### What Is In Scope

- Platform engineering, deployment, and operations infrastructure
- Compliance workflow tooling — state machines, evidence tracking, approval gating
- Reserve proof and attestation infrastructure
- Token and settlement rail infrastructure
- AI agent mesh and MCP tooling
- Security architecture and hardening

### What Requires Separate Engagement

| Item | Required Party |
|---|---|
| Securities law advice | Licensed securities counsel |
| Broker-dealer licensing | Separate regulatory application |
| Custodian services | Systec (not Dignity) |
| Legal document drafting | Qualified counsel |
| AML/KYC compliance program | Qualified compliance officer |
| Annual accounting/audit | Qualified CPA firm |
| Form D filing | Securities counsel |

> The platform organizes evidence, documents, approvals, and funding workflows. It does not itself act as a broker-dealer, bank, custodian, legal adviser, investment adviser, or source of fabricated proof of funds. Any regulated activity must be handled by qualified counsel and properly licensed entities.

> Systec custodies and attests. Dignity governs and enforces. No autonomous live execution without explicit board approval gates.

---

---

## SLIDE 23 — THREE-TIER IMPLEMENTATION MODEL

Not every client enters at the same scope. The platform is designed to onboard at the right level and expand as operations mature. Costs are kept intact — no artificial discounting. Scope adjusts.

---

### Option A — Core Platform
**For:** Small issuers, SPVs, early pilots, single-jurisdiction operators.

**One-Time Cost:** $350,000 – $550,000

| Included | Excluded |
|---|---|
| Funding packet builder | Systec L1 integration |
| Evidence registry (basic) | Reserve registry + attestation |
| Capital review room | Token issuance (DIGN/SILV/DIGN-S) |
| Compliance engine (KYC/AML, basic accreditation) | Audit chain anchoring |
| Dashboard + workflow | AI agent mesh |
| Status board + document checklist | Cross-chain bridge |

**Monthly Ops:** $25,000 – $45,000

This tier establishes the institutional workflow layer. It is the right starting point for operators who are not yet ready for on-chain token issuance or L1 settlement.

---

### Option B — Full Platform *(The Core Build)*
**For:** Serious issuers, funds, institutional partners, broker-dealers.

**One-Time Cost:** $1,145,000

| Included |
|---|
| Everything in Option A |
| Dual-metal reserve registry (gold + silver, LBMA valuation) |
| Systec L1 integration — full settlement and audit anchoring |
| Token issuance — DIGN, SILV, DIGN-S |
| 7-agent AI mesh (Treasury, Board, Compliance, Reserve, Audit, Market, Funding) |
| 12-stage institutional funding workflow |
| SHA-256 audit chain — fully anchored |
| Capital review room — permissioned, structured |
| Governance matrix — Treasury → Compliance → Board → Settlement |

**Monthly Ops:** $49,000 – $122,500

This is the real product. This tier delivers a complete, institutional-grade RWA platform. It is what the rest of this deck describes.

---

### Option C — Enterprise / Multi-Jurisdiction Build
**For:** Broker-dealers, custodians, sovereign partners, large institutional issuers.

**One-Time Cost:** $1,635,000

| Included |
|---|
| Everything in Option B |
| ERC-3643 / cross-chain bridge to Systec L1 |
| Multi-jurisdiction compliance modules (EU MiCA, Singapore MAS, UAE ADGM) |
| Full external legal and regulatory package |
| Dedicated 24/7 SRE + incident response |
| Systec L1 dedicated validator node |
| Enterprise support and onboarding |

**Monthly Ops:** up to $197,500

This tier is for operators who are building a regulated settlement network — not just a funding workflow. If you are operating across jurisdictions, issuing to institutional fund buyers, or running a custodian-grade settlement layer, this is your tier.

---

### Tier Comparison Summary

| | Option A | Option B | Option C |
|---|---|---|---|
| **One-Time Cost** | $350K–$550K | $1,145,000 | $1,635,000 |
| **Monthly Ops** | $25K–$45K | $49K–$122.5K | up to $197.5K |
| **Funding Workflow** | ✓ | ✓ | ✓ |
| **Compliance Engine** | Basic | Full | Full + Multi-Jurisdiction |
| **Reserve Registry** | — | ✓ | ✓ |
| **Systec L1** | — | ✓ | ✓ |
| **Token Issuance** | — | ✓ | ✓ |
| **Audit Chain** | — | ✓ | ✓ |
| **AI Agent Mesh** | — | ✓ | ✓ |
| **Cross-Chain Bridge** | — | — | ✓ |
| **Multi-Jurisdiction** | — | — | ✓ |
| **Legal Package** | — | — | ✓ |
| **24/7 SRE** | — | — | ✓ |
| **Validator Node** | — | — | ✓ |

> Note: Option A is a pathway in, not the product. All clients should expect to reach Option B as operations scale. Option C is the institutional deployment standard for operators with multi-jurisdiction distribution or custodian-grade settlement requirements.

---

---

## SLIDE 23A — WHY THIS ARCHITECTURE MUST BE BUILT THIS WAY

> *"You already had a token. What you didn't have was the system behind it."*

---

### What the Original DIGAU System Was

The DIGAU token was deployed on Ethereum using a 2018-era OpenZeppelin `AdminUpgradeabilityProxy` — Solidity 0.4.24, single admin, single implementation slot. This is the oldest, simplest upgradeable proxy pattern in Ethereum history.

**It was designed for:**
- Simple ERC-20 token logic
- Single-admin upgradeable contracts
- One controller, no separation of duties

**It was never designed for:**
- Institutional assets
- Precious metal reserve proof
- RWA issuance or compliance gating
- Multi-party governance
- Auditability or settlement controls

---

### Old System vs. Dignity Platform — Side by Side

| Capability | Old DIGAU Proxy | Dignity Institutional Platform |
|---|---|---|
| **Architecture** | Single proxy + single implementation | 15-module monorepo, Systec L1, AI agents |
| **Governance** | One admin — total control | Treasury → Compliance → Board → Settlement |
| **Reserve Proof** | None | Monthly Systec attestation, LBMA valuation, cryptographic anchoring |
| **Compliance** | None | KYC/KYB, accreditation, QIB, OFAC, PEP, annual re-verification |
| **Audit Chain** | None | SHA-256 hash-linked, L1-anchored, immutable |
| **Funding Workflow** | None | 12-stage institutional process |
| **Evidence Registry** | None | Ownership, valuation, reserve, contracts, insurance |
| **Review Room** | None | Permissioned, structured, auditable |
| **Token Types** | One (DIGAU) | DIGN, SILV, DIGN-S, future RWA instruments |
| **Settlement Layer** | Ethereum only (no enforcement) | Systec L1 — chain-level enforcement |
| **Agent Automation** | None | 7 specialized AI agents |
| **Multi-Jurisdiction** | None | EU, Singapore, UAE modules available |
| **Upgrade Control** | Single admin key | Governance-gated, board-authorized |
| **Separation of Duties** | None | Treasury, Compliance, Board, Reserve — each separated |
| **Institutional Adoption** | None achieved | Built for regulated venues from day one |

---

### Why Their Architecture Guaranteed the Outcome

A token with no infrastructure behind it cannot achieve:

- Listing on regulated exchanges
- Institutional fund allocation
- Custodian acceptance
- Broker-dealer distribution
- RWA issuer adoption
- Reserve verification by counterparties
- Compliance-gated capital flow

The architectural gaps were not bugs. They were design limits. A 2018 proxy pattern was never capable of being a regulated institutional platform. No upgrade to that contract can fix what was never included.

---

### What This Build Delivers

This is not an upgrade to the old system. This is the **institutional system they never had**.

Every component in this deck exists because institutional asset issuance requires it:

- Reserve registry → because counterparties need verified collateral
- Compliance engine → because regulated distribution requires KYC/AML at every step
- Governance matrix → because no institutional fund will allocate to a single-admin system
- Audit chain → because regulators and auditors require immutable event records
- Funding workflow → because capital formation is a 12-stage process, not a mint function
- Systec L1 → because application-layer controls are bypassable; chain-layer controls are not
- Agent mesh → because institutional operations at scale require automated compliance and reporting

---

### The Statement for Any Partner, Counsel, or Investor

> "The original architecture was a token with a proxy contract and no institutional infrastructure.
> What we are building is the full regulated platform required for precious metal-backed asset issuance — reserve proof, compliance gating, governance controls, audit anchoring, and institutional funding workflows.
> This is not an upgrade. This is the system that was always required."

---

---

## SLIDE 24 — NEXT STEPS

### To Move Forward

| Step | Action | Owner |
|---|---|---|
| **1** | Review and approve this proposal | Client |
| **2** | Confirm Systec integration scope and access agreements | Dignity + Systec |
| **3** | Engage legal counsel for securities/lending structure review | Client |
| **4** | Sign engagement letter and MSA | Both parties |
| **5** | Issue M1 invoice ($229,000) | Dignity |
| **6** | Architecture kickoff — Week 1 | Both parties |

### Contact

| Role | Contact |
|---|---|
| **Program Lead** | Kevan Burns — Dignity Institutional Platform |
| **Technology** | Todd Reiter |
| **Legal** | Richard Allen Perkins |
| **Reserve Partner** | Systec |

---

---

## SLIDE 23B — WHY THE OLD SYSTEM FAILED

This slide exists because the client already has a deployed token. This section documents exactly what that system was, what changed, and what gets built in its place. This is the technical and institutional case for the build — stated directly.

---

### Part 1: What the Original System Was

**Contract:** `0x394D14D78850E516Fa5Eb88F843ef43196e136b0` (Ethereum Mainnet)
**Pattern:** OpenZeppelin 1.x `AdminUpgradeabilityProxy` — Solidity 0.4.24
**Deployer:** Dignity Gold: Deployer
**Age:** 4+ years

This contract is a **two-contract system**:
- One **proxy** that holds storage and delegates all calls
- One **implementation** that holds the ERC-20 token logic

There is one admin. The admin can:
- Upgrade the implementation to any new contract address
- Change the admin to any new address

That is the entire governance model.

**The contract cannot:**
- Enforce reserve requirements
- Gate transfers based on compliance status
- Require KYC/AML before allowing a transfer
- Verify or record proof of reserve
- Produce an audit trail of any event
- Enforce governance approval for minting or burning
- Record custody attestation
- Enforce multi-signature authorization
- Restrict access to institutional investor classes only
- Anchor any event to a chain for immutability
- Support multi-asset settlement
- Interface with a custody layer
- Verify reserve coverage ratios
- Know anything about the gold it is supposed to represent

The token represents an asset. The contract has no mechanism to verify, enforce, or audit that representation.

---

### Part 2: What This Produced in the Market

| Metric | Result |
|---|---|
| **Trading volume (daily)** | ~$20,000–$26,000 on Coinstore |
| **Exchange listings** | 1 regulated venue (Coinstore), 1 DEX |
| **Institutional adoption** | None |
| **Custodian acceptance** | None |
| **Broker-dealer distribution** | None |
| **Regulated fund allocation** | None |
| **Reserve verification by counterparties** | None — no endpoint, no attestation |
| **Compliance-gated capital flow** | None |
| **All-time high** | $9.98 (Dec 2025) |
| **Current price** | ~$0.62 (May 2026) |
| **Decline from ATH** | ~94% |

The prior architecture lacked the institutional controls required for broader adoption. There is no institutional demand for a token that cannot prove what backs it, cannot gate who holds it, and cannot enforce the governance of the entity that issued it.

The fix is not a new proxy. The fix is the institutional system that was always required.

---

### Part 3: What Changes — Module by Module

| What Was Missing | What Dignity Builds |
|---|---|
| No reserve proof | Reserve registry — lot-level tracking, LBMA valuation, monthly Systec attestation, public `/proof` endpoint |
| No compliance | Full compliance engine — KYC/AML state machine, OFAC/PEP screening, accreditation verification, QIB/qualified investor status, annual re-verification |
| No governance | Governance matrix — Treasury → Compliance → Board → Settlement, four-eyes approval, no single-admin bypass |
| No audit chain | SHA-256 hash-linked event log — every event chained and anchored to Systec L1, immutable and queryable |
| No funding workflow | 12-stage institutional funding operations system — evidence file, packet builder, review room, term sheet, approval, disbursement, reporting |
| No evidence registry | Ownership docs, valuation reports, reserve certificates, insurance, contracts — all tracked with hash verification |
| No separation of duties | Treasury, Compliance, Board, Reserve ops — each isolated with separate roles and approval gates |
| No L1 enforcement | Systec L1 — chain-level settlement, reserve sync, token anchoring, not bypassable at the application layer |
| No multi-asset support | DIGN (gold), SILV (silver), DIGN-S (silver stable), + approved RWA instruments |
| No agent automation | 7 AI agent personas — Treasury, Board, Compliance, Reserve, Audit, Market, Funding |
| No deal review infrastructure | Permissioned capital review rooms — structured, permissioned, with Q&A and diligence tracking |
| No investor portal | Investor-facing dashboard — portfolio, documents, statement access, compliance status |

---

### Part 4: The Institutional Readiness Gap — Before and After

**Before (current state):**
```
Token → Proxy Contract → One admin → No controls → No proof → No compliance
```
**No institutional counterparty can engage with this structure.**

**After (Dignity Platform, Option B or C):**
```
Asset (physical gold/silver, Systec-held)
  → Reserve Registry (lot tracking, LBMA valuation, coverage ratio)
    → Systec Attestation (monthly, cryptographic, public endpoint)
      → Compliance Engine (KYC/AML, accreditation, OFAC, QIB status)
        → Governance Matrix (Treasury → Compliance → Board → Settlement)
          → Funding Workflow (12-stage, evidence-backed, review-gated)
            → Token Issuance (DIGN/SILV/DIGN-S on Systec L1, ERC-3643 bridge optional)
              → Audit Chain (SHA-256 hash-chained, L1-anchored, immutable)
                → Capital Partners (lenders, funds, family offices, broker-dealers)
```
**Every institutional counterparty has a path to engage.**

---

---

## SLIDE 23B.2 — GOLD TOKEN BENCHMARKS: PAXG · XAUT · KAU · VNXAU

This slide shows how the world's leading regulated gold token platforms are actually built — and maps every element of that infrastructure directly to the Dignity architecture. DIGAU has none of it. Dignity has all of it.

---

### The Two Dominant Gold Tokens (90%+ of Market Liquidity)

| Metric | PAXG (Paxos Gold) | XAUT (Tether Gold) |
|---|---|---|
| **Market Position** | Institutional benchmark | Liquidity leader |
| **Regulator** | NYDFS-regulated trust company (US) | None (BVI offshore) |
| **Audit** | Monthly — KPMG | Quarterly — BDO Italia |
| **Backing** | 1 troy oz LBMA-certified gold, London vaults | 1 troy oz LBMA-standard gold, Swiss vaults |
| **Reserve Ratio** | 100.3% (Jan 2026) | ~100% |
| **Redemption Minimum** | 0.01 PAXG (~$30) — physical or USD | 50 XAUT (~$217,000) — institutional only |
| **KYC/AML** | Full — real-time OFAC screening | Less strict |
| **Daily Volume** | $120M–$213M (Binance, Kraken) | Higher |
| **Smart Contract Controls** | Role-based: Supply Controller, Asset Protection, Fee Controller | Basic ERC-20 |
| **Compliance** | Freeze, wipe, mint/burn roles | Minimal |

---

### Paxos Gold (PAXG) — Architecture in Detail

PAXG is the closest operating model to what Dignity is building. Every feature that makes PAXG institutionally accepted is present in the Dignity architecture.

**Smart Contract Roles (PAXG)**
- **Supply Controller** — controls mint and burn, tied directly to physical gold deposits and redemptions
- **Asset Protection Role** — can freeze and wipe addresses (compliance enforcement at the token level)
- **Fee Controller** — governs transfer fee mechanism
- **Admin / Owner** — upgradeability via AdminUpgradeabilityProxy

**Reserve Process (PAXG)**
1. Customer deposits gold or cash equivalent
2. Paxos verifies gold in LBMA vault
3. Supply Controller mints PAXG 1:1
4. KPMG audits the reserve monthly
5. Attestation report published publicly

**Redemption Process (PAXG)**
1. Holder submits redemption request
2. KYC/AML eligibility confirmed
3. Asset Protection confirms no freeze flag
4. Supply Controller burns PAXG
5. Paxos delivers physical gold or USD

---

### Tether Gold (XAUT) — Scale and Liquidity

- Tether holds **148 metric tons of gold** (~$23B) — placing it among the world's top 30 gold holders
- Multi-chain deployment: Ethereum, TRON, TON via LayerZero OFT (XAUT0, 2026)
- Quarterly BDO audits — less rigorous than PAXG
- High minimum redemption (50 oz) means this is an institutional / trading product, not a retail instrument

---

### EU-Regulated Models: KAU (Kinesis) and VNXAU (VNX Gold)

| Feature | KAU (Kinesis) | VNXAU (VNX Gold) |
|---|---|---|
| **Regulator** | None | Liechtenstein FMA (Blockchain Act) |
| **Unit** | 1 gram of gold | 1 gram of gold |
| **Vault** | Global | Liechtenstein |
| **Audit** | Regular independent | AUP (Agreed-Upon Procedures) |
| **Use Case** | Payments, micropayments, yield-bearing | EU institutional RWA platform |
| **Multi-chain** | Kinesis Monetary System | Ethereum, Solana, Stellar |
| **Compliance** | Moderate | Strong — full KYC/AML enforcement |

**VNXAU** is the EU institutional analogue to PAXG — regulated under the Liechtenstein Blockchain Act, full KYC/AML microservice platform, AUP-verified reserves. This is the model for European institutional adoption.

---

### Full Comparison: PAXG vs XAUT vs KAU vs VNXAU vs DIGAU vs Dignity

| Capability | PAXG | XAUT | KAU | VNXAU | **DIGAU** | **Dignity Platform** |
|---|---|---|---|---|---|---|
| **Reserve Proof** | Monthly KPMG | Quarterly BDO | Regular | AUP audit | ✗ None | ✓ Systec + LBMA |
| **Regulatory Status** | NYDFS (US) | Offshore | None | FMA (EU) | ✗ None | ✓ Built for regulation |
| **Governance** | Role-based RBAC | Basic | Basic | Microservice | ✗ One admin | ✓ Treasury → Compliance → Board |
| **Compliance Gating** | Full KYC/AML | Moderate | Moderate | Full KYC/AML | ✗ None | ✓ Full KYC/AML + OFAC |
| **Mint/Burn Controls** | Tied to physical gold | Tied to physical | Tied to physical | Tied to physical | ✗ No reserve link | ✓ Reserve-coverage-gated |
| **Freeze / Asset Protection** | ✓ On-chain role | ✓ Basic | Varies | ✓ On-chain | ✗ None | ✓ Compliance engine |
| **Audit Chain** | Contract events only | Contract events only | Contract events only | Contract events only | ✗ None | ✓ SHA-256 hash chain + Systec L1 |
| **Redemption Mechanism** | ✓ Physical or USD | ✓ Institutional | ✓ Gram-level | ✓ Gram-level | ✗ None | ✓ LBMA fix, physical or USD |
| **Separation of Duties** | Supply / Asset / Fee roles | Basic | Basic | Microservice | ✗ None | ✓ Treasury, Compliance, Board, Reserve |
| **Daily Volume** | $120M–$213M | High | Medium | Low–medium | ~$20K–26K | N/A (issuance platform) |
| **Institutional Adoption** | ✓ Binance, Kraken, custodians | ✓ Wide exchange support | Payments focused | EU focused | ✗ None | ✓ Purpose-built |

---

### What This Proves

**Why PAXG succeeds and DIGAU doesn't — in one sentence:**

> PAXG has verified custody, monthly audits, compliance-gated transfers, role-based governance, and a redemption mechanism. DIGAU has one admin key and a proxy contract.

**What Dignity builds that DIGAU cannot:**

| PAXG Capability | Dignity Equivalent | DIGAU Status |
|---|---|---|
| NYDFS-regulated trust structure | Built for regulated jurisdictions from day one | Not applicable |
| Monthly KPMG reserve audits | Monthly Systec attestation, LBMA-valued lot registry | None |
| LBMA-certified vault storage | Systec physical custody + lot registry | None |
| Supply Controller (mint tied to gold) | Token engine: coverage-ratio-gated issuance | No reserve link |
| Asset Protection (freeze/wipe) | Compliance engine: APPROVED / FLAGGED / REJECTED states | None |
| Fee Controller | Platform fee schedule + FeeRecord model | None |
| Full KYC/AML + OFAC screening | Compliance engine: investor status, OFAC, PEP, accreditation | None |
| Monthly public attestation | /proof endpoint: live coverage, Systec anchor, LBMA fix | None |
| Redemption for physical or USD | DIGN/SILV at LBMA fix — physical or cash | None |
| Immutable on-chain event log | SHA-256 hash chain + Systec L1 anchor | None |
| Institutional counterparty access | Capital Review Room, four-eyes approval, board authority | None |

**Conclusion:**

The Dignity architecture is not a DIGAU upgrade. It is the PAXG-class institutional infrastructure that DIGAU never had, built on Systec L1 instead of Ethereum, with a full funding workflow layer that PAXG doesn't have.

This is why the capital conversation is entirely different once Dignity is live.

---

---

## SLIDE 23C — WHY THIS PLATFORM IS FUNDABLE

This slide states the fundability case directly. It is written for any capital partner, fund manager, credit desk, or institutional investor reviewing this proposal.

---

### The Fundability Test: Five Questions Every Capital Partner Asks

| Question | Old System Answer | Dignity Platform Answer |
|---|---|---|
| **Can I verify the collateral?** | No. No reserve proof, no endpoint, no attestation. | Yes. Real-time `/proof` endpoint, monthly Systec attestation, LBMA-valued lot registry, cryptographic anchors. |
| **Is the governance institutional-grade?** | No. One admin key. No multi-party controls. | Yes. Four-eyes approval, Treasury → Compliance → Board → Settlement matrix, no single-admin bypass. |
| **Is the compliance structure sound?** | No. No KYC/AML, no investor gating, no accreditation. | Yes. Full KYC/AML engine, OFAC/PEP screening, QIB/accredited investor verification, annual re-verification, compliance-gated transfers. |
| **Is there an immutable audit record?** | No. No event log, no chain anchor. | Yes. SHA-256 hash-chained audit log, every event anchored to Systec L1, queryable and verifiable. |
| **Is the deal file complete?** | No. No funding packet, no evidence file, no review room. | Yes. Full 12-stage workflow — evidence registry, funding packet, capital review room, term sheet, compliance sign-off, disbursement, reporting. |

**If all five answers are "yes," the platform is fundable. Dignity delivers all five.**

---

### What Makes a RWA Platform Fundable — Institutional Checklist

| Requirement | Dignity Platform | Status |
|---|---|---|
| Verified, attested collateral | Reserve registry + Systec attestation | ✓ Built |
| Real-time collateral proof endpoint | `/proof` — public, live | ✓ Built |
| KYC/AML for all participants | Compliance engine — full state machine | ✓ Built |
| Investor accreditation verification | QIB + accredited investor status engine | ✓ Built |
| OFAC/PEP/sanctions screening | Integrated screening feed | ✓ Built |
| Multi-party governance | Treasury → Compliance → Board matrix | ✓ Built |
| Immutable audit trail | SHA-256 hash chain, L1-anchored | ✓ Built |
| Complete deal file | 12-stage funding workflow | ✓ Built |
| Evidence registry | Ownership, valuation, reserve, insurance | ✓ Built |
| Permissioned investor access | Capital review room | ✓ Built |
| Compliance-gated token transfers | Compliance engine + token engine | ✓ Built |
| Regulated settlement layer | Systec L1 | ✓ Built |
| Custody integration | Systec custodian attestation | ✓ Built |
| Separation of duties | Role-isolated governance layers | ✓ Built |
| Penetration-tested security | Cloudflare WAF + OWASP audit | ✓ Built |

---

### What This Platform Unlocks for Issuers

Once the platform is live (Month 12), the operator can:

| Action | Mechanism | Timeline |
|---|---|---|
| Pursue stablecoin credit lines against gold/silver | POR + POC → institutional counterparty | Subject to counterparty approval |
| Evaluate on-chain RWA credit market opportunities | Pool reserve collateral on Centrifuge, Maple, Clearpool | Subject to onboarding and legal structure |
| Issue DIGN/SILV to institutional buyers | Systec L1, compliance-gated | 2–4 weeks |
| Bring external issuers onto the platform | Onboard additional SPVs, funds, assets | Ongoing |
| Distribute to institutional funds | BlackRock, Franklin, WisdomTree, Ondo, Superstate | Post-launch |
| Earn platform fees on every deal | Issuance, management, custody, performance, drawdown | Per deal |

---

### The Revenue Case: Why This Platform Pays for Itself

| Fee Type | Rate | Applied To |
|---|---|---|
| Issuance fee | 0.50% – 1.50% | Approved notional at close |
| Annual management fee | 0.25% – 0.75% | Total AUM under management |
| Custody/attestation fee | 0.10% – 0.35% | Assets held in reserve registry |
| Secondary transfer fee | $50 – $250 flat | Per compliance-gated transfer |
| Drawdown fee | 0.10% – 0.25% | Per funding draw against credit |
| Deal origination fee | 1.00% – 2.00% | Per new issuer deal closed |
| Performance fee | 5% – 10% | On returns exceeding hurdle rate |
| SaaS/platform access fee | $5,000 – $25,000/month | Per additional issuer on platform |

**Revenue break-even example:** At $250M AUM with 0.50% issuance and 0.50% management — Year 1 gross revenue potential: $2.5M. Platform ops cost at max: $2.37M/year. Net positive from Year 1 at modest scale.

**At $500M AUM:** Revenue potential $5M+/year against $2.37M ops. The platform generates 2x+ its own operating cost.

---

### Comparable Funded Platforms — Reference Proof Points

| Platform | Category | Raise / AUM | Institutional Status |
|---|---|---|---|
| Ondo Finance | Tokenized treasury / RWA | $250M+ AUM | BlackRock partnership |
| Superstate | Tokenized fund | $100M+ AUM | Multiple institutional fund buyers |
| Maple Finance | On-chain credit | $2.5B+ originated | Institutional prime brokerage |
| Centrifuge | RWA credit pools | $600M+ originated | MakerDAO, institutional DeFi |
| Goldfinch | Emerging market credit | $100M+ deployed | Real-world credit pools |
| Paxos | Institutional settlement | Regulated in US, Singapore, UAE | Gold-backed PAXG, stablecoin rails |
| Figure | Home equity tokenization | $10B+ originated | Institutional capital markets |

> Every one of these platforms succeeded because they had the infrastructure behind the asset. Reserve proof, compliance, governance, audit chain, deal workflow. Dignity builds the same institutional foundation — for precious metals and real-world assets.

---

---

## SLIDE 23D — FULL SYSTEM BLUEPRINT + COMPLETE FEE SCHEDULE

This slide is the master reference. It documents every component that gets built, every cost to build it, every cost to operate it, every fee the platform earns, and the total all-in picture for Year 1 through Year 3.

---

### Full System Blueprint — Every Component Built

#### Layer 1: Applications (2 apps)

| App | Stack | Purpose |
|---|---|---|
| **Web Application** | Next.js 15 App Router, TypeScript, Tailwind, port 3300 | Institutional dashboard, investor portal, compliance portal, admin panel, funding rooms |
| **Agent Backend** | Fastify 5, TypeScript, port 5100 | AI agent mesh, MCP tooling, workflow engine, Systec bridge, packet generator |

#### Layer 2: Platform Modules (15 packages)

| Module | What It Does |
|---|---|
| **analytics** | Coverage timelines, issuance summaries, funding flow reports, KPI dashboards |
| **attestation** | Monthly Systec reserve attestation — processing, verification, event recording |
| **audit** | SHA-256 hash-chained event log, L1 anchor integration, integrity verification |
| **auth** | Session management, RBAC (admin / board / operator / investor / compliance) |
| **compliance-engine** | KYC/AML state machine, accreditation, QIB status, OFAC/PEP screening, annual re-verify |
| **db** | PostgreSQL 16 + Prisma ORM — full schema, migrations, seeds, backup config |
| **documents** | Upload, storage, metadata, evidence file management, packet assembly, hash verification |
| **exchange-adapters** | LBMA gold/silver price feed, market data integration |
| **market-ops** | Venue management, spread governance, pricing controls, order routing |
| **reserve-registry** | Gold + silver lot tracking, coverage ratio engine, Systec sync, lot state management |
| **shared-types** | TypeScript interfaces, enums, API contracts, shared validation across all modules |
| **stablecoin-rails** | USDF/USDC/USDT payment rail references, stablecoin settlement integration |
| **token-engine** | DIGN/SILV/DIGN-S issuance + redemption, supply state, coverage enforcement |
| **treasury** | Funding close processing, draw requests, disbursement controls, repayment tracking |
| **ui** | Shared component library — tables, cards, modals, status badges, approval workflows |

#### Layer 3: Web Screens and Portals

| Screen | Role | What It Shows |
|---|---|---|
| Dashboard (/) | All roles | Reserve metrics, coverage ratio, recent audit events, deal status board |
| Admin Panel | Admin only | User management, system config, fee settings, module controls |
| Investor Portal | Investors | Portfolio view, documents, compliance status, deal participation |
| Compliance Portal | Compliance team | KYC queue, screening results, approval workflow, re-verification schedule |
| Funding Room | Operators + investors | Deal file, evidence checklist, Q&A, term sheet, approval workflow |
| Reserve View | All roles | Live lot registry, coverage ratio, attestation history, LBMA valuations |
| Audit Log | Admin + board | Hash-chained event log, L1 anchor status, integrity checks |
| Document Store | All roles (gated) | Evidence repository with role-gated access and version control |
| Agent Console | Operators | AI agent activity, task queue, briefing outputs, approval requests |
| Token Dashboard | Admin + treasury | DIGN/SILV/DIGN-S supply, issuance queue, redemption requests |

#### Layer 4: Data Models (18 database tables)

| Table | Purpose |
|---|---|
| User | Auth, roles, KYC status, investor class, compliance state |
| Company | Issuer/SPV profile, jurisdiction, incorporation, legal counsel |
| ReserveLot | Gold/silver lot — quantity, purity, custodian, valuation, Systec ref |
| Attestation | Monthly attestation events — custodian, verifier, timestamp, hash |
| AuditEvent | Hash-chained events — type, actor, data, prev_hash, L1_anchor |
| FundingDeal | Deal record — issuer, asset, request, status, compliance gate |
| AssetEvidence | Evidence files — category, document hash, upload date, verified status |
| FundingPacket | Generated packet — sections, timestamp, compliance sign-off, hash |
| ReviewRoom | Capital review room — participants, documents, Q&A, status |
| TermSheet | Economics, collateral, repayment, covenants, signatures |
| DisbursementRecord | Funding closes, draw schedules, repayment events |
| ComplianceRecord | KYC/AML state per entity — status, last verified, re-verify date |
| Token | DIGN/SILV/DIGN-S — supply, coverage ratio, issuance events |
| TransferEvent | Compliance-gated transfer — from, to, amount, approval ref, hash |
| AgentSession | AI agent task — agent, input, output, tool calls, approval status |
| Report | Analytics outputs — coverage, issuance, funding flow, KPI snapshots |
| FeeRecord | Platform fees — type, basis, rate, amount, deal ref, settled status |
| SystemConfig | Platform-level settings — fee rates, compliance rules, module toggles |

#### Layer 5: AI Agent Mesh (7 agents)

| Agent | Domain | Tools Available |
|---|---|---|
| **Treasury Agent** | Treasury operations | Funding close processing, disbursement review, draw request analysis |
| **Board Agent** | Governance | Term sheet review, covenant analysis, board approval preparation |
| **Compliance Agent** | Compliance ops | KYC/AML status review, OFAC flag analysis, re-verification scheduling |
| **Reserve Agent** | Reserve management | Coverage ratio monitoring, attestation scheduling, lot status tracking |
| **Audit Agent** | Audit chain | Event chain integrity verification, L1 anchor checks, anomaly detection |
| **Market Agent** | Market ops | LBMA pricing review, coverage ratio vs. market, spread monitoring |
| **Funding Agent** | Funding workflow | Evidence checklist review, packet generation support, deal stage tracking |

All agents are **read-only + approval-gated** — they surface analysis and recommendations, they do not execute without authorized human approval.

#### Layer 6: Systec L1 Integration

| Integration Point | What It Does |
|---|---|
| Reserve sync | Platform reserve lot state → Systec L1 reserve records, updated on attestation |
| Token settlement | DIGN/SILV/DIGN-S mint/burn/transfer events settled on Systec L1 |
| Audit anchoring | Every audit event hash anchored to Systec L1 — immutable, queryable |
| Proof endpoint | `/proof` — public endpoint serving live coverage ratio, last attestation, L1 anchor |
| Validator node (Option C) | Dedicated node for maximum settlement throughput and uptime |

#### Layer 7: Security Architecture

| Layer | Technology | Coverage |
|---|---|---|
| Edge protection | Cloudflare WAF + DDoS mitigation | All inbound traffic |
| TLS | TLS 1.3+ enforced, HSTS, cert pinning | All endpoints |
| Authentication | NextAuth + JWT, short-lived tokens, refresh rotation | All sessions |
| Authorization | RBAC — role-isolated, module-level permissions | All data access |
| Database | PostgreSQL with row-level security, encrypted at rest | All stored data |
| Document storage | Encrypted at rest, hash-verified on retrieval | All evidence files |
| Audit chain | Immutable, hash-linked, anchored | All platform events |
| Penetration test | External pen test + OWASP audit pre-launch | Full platform |
| API security | Rate limiting, input validation, no direct SQL | All API routes |

---

### Complete Build Cost — All Options

#### One-Time Build Cost

| Option | Scope | Cost |
|---|---|---|
| **Option A — Core Platform** | Workflow + compliance, no L1, no tokens | $350,000 – $550,000 |
| **Option B — Full Platform** | Everything in this deck | $1,145,000 |
| **Option C — Enterprise All-In** | Option B + bridge + legal + multi-jurisdiction | $1,635,000 |

#### Option B Build Budget — Line-Item Breakdown

| Phase | Deliverable | Cost |
|---|---|---|
| Phase 1 | Architecture, environments, CI/CD, Systec design | $95,000 |
| Phase 2 | Web application + agent backend scaffolding | $150,000 |
| Phase 3 | Core data models + auth + RBAC | $120,000 |
| Phase 4 | Compliance engine + KYC/AML + four-eyes | $175,000 |
| Phase 5 | Reserve registry + attestation + coverage engine | $130,000 |
| Phase 6 | Funding workflow — all 12 stages | $165,000 |
| Phase 7 | Agent mesh (7 agents) + Systec L1 integration | $155,000 |
| Phase 8 | Token engine (DIGN/SILV/DIGN-S) + settlement | $75,000 |
| Phase 9 | Audit chain + L1 anchoring + proof endpoint | $80,000 |
| Phase 10 | QA, penetration test, OWASP audit | $0 (included) |
| **TOTAL** | | **$1,145,000** |

#### Option C Add-On Costs

| Add-On | Cost |
|---|---|
| ERC-3643 / cross-chain bridge to Systec L1 | $180,000 |
| External legal + regulatory package | $220,000 |
| Multi-jurisdiction compliance modules | $90,000 |
| **Option C Total Add-Ons** | **$490,000** |
| **Option C Grand Total** | **$1,635,000** |

---

### Complete Operating Cost — Monthly and Annual

#### Option B Operating Cost

| Category | Monthly (Low) | Monthly (High) | Annual (High) |
|---|---|---|---|
| Cloudflare Pages + Workers + WAF | $3,000 | $7,500 | $90,000 |
| Managed PostgreSQL + Backups | $1,500 | $4,000 | $48,000 |
| Monitoring, SIEM, and Alerting | $1,000 | $3,000 | $36,000 |
| Systec L1 Node + Reserve Sync Ops | $3,500 | $8,000 | $96,000 |
| Custodian and Attestation Ops (Systec) | $6,000 | $15,000 | $180,000 |
| Compliance Ops + Deal Screening | $10,000 | $25,000 | $300,000 |
| Engineering Support + Maintenance | $25,000 | $60,000 | $720,000 |
| **Option B Monthly Total** | **$50,000** | **$122,500** | **$1,470,000** |

#### Option C Add-On Monthly Costs

| Add-On | Monthly | Annual |
|---|---|---|
| Dedicated 24/7 SRE + incident response | $45,000 | $540,000 |
| Systec L1 dedicated validator node | $30,000 | $360,000 |
| **Add-On Total** | **$75,000** | **$900,000** |
| **Option C Monthly Total** | **$197,500** | **$2,370,000** |

---

### Complete Milestone Payment Schedule (Option B)

| Milestone | Gate | Invoice Amount | Cumulative |
|---|---|---|---|
| M1 — Contract signing | Signed engagement letter + MSA | $229,000 (20%) | $229,000 |
| M2 — Core platform delivery | Dashboard, auth, data models, backend live | $286,250 (25%) | $515,250 |
| M3 — Compliance + funding workflow | KYC/AML, 12-stage workflow, review room | $286,250 (25%) | $801,500 |
| M4 — Agent mesh + Systec L1 | 7 agents deployed, L1 live, tokens on-chain | $229,000 (20%) | $1,030,500 |
| M5 — Production launch | Pen test passed, go-live, board handover | $114,500 (10%) | $1,145,000 |

---

### Year 1 Grand Total — All Options

| Option | One-Time Build | 12 Months Ops | Year 1 Total |
|---|---|---|---|
| **Option A** | $550,000 | $540,000 | **$1,090,000** |
| **Option B** | $1,145,000 | $1,470,000 | **$2,615,000** |
| **Option C — All-In** | $1,635,000 | $2,370,000 | **$4,005,000** |

---

### 3-Year Pro Forma — Option B (Full Platform)

| Period | Build | Ops | Total | Notes |
|---|---|---|---|---|
| **Year 1** | $1,145,000 | $1,470,000 | **$2,615,000** | Build + 12 months ops |
| **Year 2** | — | $1,470,000 | **$1,470,000** | Ops only, flat |
| **Year 3** | — | $1,470,000 | **$1,470,000** | Ops only, flat |
| **3-Year Total** | $1,145,000 | $4,410,000 | **$5,555,000** | Full institutional operations |

---

### 3-Year Pro Forma — Option C (Enterprise All-In)

| Period | Build | Ops | Total | Notes |
|---|---|---|---|---|
| **Year 1** | $1,635,000 | $2,370,000 | **$4,005,000** | Build + 12 months ops |
| **Year 2** | — | $2,370,000 | **$2,370,000** | Ops only, flat |
| **Year 3** | — | $2,370,000 | **$2,370,000** | Ops only, flat |
| **3-Year Total** | $1,635,000 | $7,110,000 | **$8,745,000** | Full institutional operations |

---

### Platform Fee Schedule — Revenue Generated by the Platform

Every fee below is generated by the platform on behalf of the operator. These are not costs — they are revenue.

#### Transaction and Deal Fees

| Fee Type | Rate | Applied To | Timing |
|---|---|---|---|
| **Issuance fee** | 0.50% – 1.50% | Approved deal notional | At funding close |
| **Deal origination fee** | 1.00% – 2.00% | New issuer deal closed | At close |
| **Drawdown fee** | 0.10% – 0.25% | Each funding draw | Per event |
| **Redemption fee** | 0.10% – 0.50% | Token redemption | Per event |
| **Secondary transfer fee** | $50 – $250 flat | Compliance-gated transfer | Per transfer |

#### Recurring Fees

| Fee Type | Rate | Applied To | Timing |
|---|---|---|---|
| **Annual management fee** | 0.25% – 0.75% | Total AUM | Annually / quarterly |
| **Custody / attestation fee** | 0.10% – 0.35% | Assets in reserve registry | Annually |
| **Platform SaaS fee** | $5,000 – $25,000/month | Per additional issuer | Monthly |
| **Compliance ops fee** | $500 – $2,500/issuer | Per issuer per month | Monthly |

#### Performance Fees

| Fee Type | Rate | Applied To | Timing |
|---|---|---|---|
| **Performance fee** | 5% – 10% | Returns above hurdle rate | Per deal |
| **Success fee** | 0.50% – 1.50% | Funding rounds closed | At close |

---

### Revenue Model — Break-Even and Scale

| Scenario | AUM | Est. Annual Revenue | Annual Ops Cost | Net |
|---|---|---|---|---|
| **Year 1 Conservative** | $50M | ~$500,000 | $1,470,000 | -$970,000 |
| **Year 2 Base** | $150M | ~$1,500,000 | $1,470,000 | +$30,000 |
| **Year 2 Target** | $250M | ~$2,500,000 | $1,470,000 | +$1,030,000 |
| **Year 3 Scale** | $500M | ~$5,000,000 | $1,470,000 | +$3,530,000 |

> Revenue modeled at blended 1% of AUM (issuance + management + custody combined). Platform SaaS and per-deal fees not included in this model — they add materially at 3+ issuers.

**Break-even is $147M AUM at 1% blended fee. Target AUM for Year 2 is $250M+.**

---

---

## SLIDE 24 — FUNDING PATHWAYS ENABLED WHEN THE PLATFORM IS READY

Once the platform is operational, the following funding pathways become available for evaluation and pursuit, subject to legal structure, counterparty qualification, and qualified counsel engagement.

### What the Live Platform Gives You

| Asset | What It Becomes | Who Accepts It |
|---|---|---|
| Gold reserves (Systec-held) | Verifiable collateral | Private credit desks, RWA lenders, stablecoin issuers |
| Silver reserves (Systec-held) | Verifiable collateral | Same credit counterparties |
| Proof of Reserve (POR) | Attested reserve evidence | On-chain credit markets, institutional desks |
| Proof of Control (POC) | Verified encumbrance authority | Capital partners, lenders |
| Audit chain hash | Immutable provenance proof | Institutional due diligence, compliance review |
| Coverage ratio | Real-time collateral health | Automated credit lines, covenant tracking |
| Funding packet | Complete institutional deal file | Lenders, investors, family offices, funds |

### Three Funding Pathways to Pursue

| Pathway | Estimated Review Window | Mechanism |
|---|---|---|
| **Stablecoin / custody / collateral pathways** | Subject to counterparty approval, legal structure, and documentation | Present POR + POC to institutional custody or credit counterparties |
| **On-chain RWA credit market pathways** | Subject to pool onboarding, legal structure, and counterparty approval | Create structured credit pool against reserve-backed collateral |
| **Tokenized RWA issuance** | Subject to Systec integration scope, legal structure, and regulatory review | Issue DIGN/SILV/DIGN-S or RWA notes on Systec L1 and external chains |

> The platform exists to make collateral legible to institutional capital. Every workflow stage — evidence file, funding packet, compliance approval, reserve proof, audit chain — is designed to remove the friction that stops capital from committing.

> **Legal disclaimer:** All funding pathways described in this section are subject to counterparty approval, legal structure, KYC/KYB completion, collateral review, custody requirements, securities and lending analysis, and final documentation. No specific funding outcome, timeline, or amount is guaranteed. Qualified legal and financial counsel must be engaged before pursuing any pathway.

---

---

## SLIDE 25 — STABLECOIN / CUSTODY / COLLATERAL PATHWAYS

**Pathway status: Subject to counterparty review, qualification, legal structure, and collateral acceptance**

Once attested and live, your gold and silver reserves may be presentable as collateral to institutional custody counterparties or credit desks. This pathway requires counterparty qualification, legal structure review, and documentation — but carries lower complexity than other institutional capital routes.

### How It Works

```
1. Present POR + POC + audit chain hash to credit desk
2. Credit desk reviews Dignity reserve proof endpoint (/proof)
3. They issue a credit line — typically 5–20% LTV on metals
4. If approved, funding may be received through stablecoin, fiat, escrow, qualified custody, or another settlement rail confirmed with counsel.
5. You deploy into your funding workflow or operational needs
6. Repayment tracked on-platform with audit events
```

### Stablecoin and Settlement Infrastructure

| Provider | Type | Role |
|---|---|---|
| **Circle** | USDC issuance infrastructure | Stablecoin liquidity layer — not a collateral credit desk |
| **Paxos** | USDP / PYUSD infrastructure | Stablecoin settlement and institutional services |
| **Fireblocks** | Institutional custody network | Custody-integrated access to institutional counterparty network |

### Potential Collateral and Credit Counterparties to Engage

| Partner | Type | Notes |
|---|---|---|
| **Anchorage Digital** | Federally chartered digital asset bank | Potential credit against verified collateral — subject to qualification |
| **BitGo** | Institutional custody + prime services | Potential credit facility — subject to legal structure and KYC |
| **Galaxy Digital** | Institutional capital | Potential credit lines against attested RWA — subject to qualification |
| **GSR** | Liquidity provider | Potential structured credit against RWA — subject to terms |
| **Wintermute** | Institutional market maker | Potential collateral credit — subject to counterparty review |

> All credit engagements require separate legal agreements, KYC/KYB, collateral review, and qualified counsel confirmation.

### What You Present to a Stablecoin Credit Desk

| Document | Source on Dignity |
|---|---|
| Reserve proof | GET /proof endpoint — live, verifiable |
| Proof of Reserve (POR) | Systec attestation, monthly, hash-anchored |
| Proof of Control (POC) | Board approval record + signing authority verification |
| Coverage ratio | Real-time coverage ratio from reserve-registry module |
| Audit chain | SHA-256 chain + Systec L1 block anchors |
| Funding packet | Executive summary, capital request, use of funds |

> **Compliance note:** Stablecoin credit lines involve lending against collateral. The exact structure — secured loan, credit agreement, margin terms — requires legal and compliance review. Dignity provides the collateral documentation infrastructure. Counsel confirms the agreement structure.

> **Legal disclaimer:** All credit counterparty engagements are subject to independent qualification, legal review, KYC/KYB, collateral acceptance, and final documentation. No specific funding outcome is guaranteed. Qualified legal and financial counsel must be engaged before pursuing any pathway.

---

---

## SLIDE 26 — RWA CREDIT MARKET PATHWAYS

**Pathway status: Subject to protocol onboarding, legal structure, collateral qualification, and counterparty review**

These protocols are designed for real-world collateral and structured credit and represent potential pathways to evaluate following platform completion and qualified counsel engagement.

### Potential RWA Credit-Market Protocols to Evaluate

#### Centrifuge

| Parameter | Detail |
|---|---|
| **Mechanism** | Create a TIN/DROP pool — senior (DROP) and junior (TIN) tranches |
| **Collateral** | Gold/silver reserves + evidence registry become the collateral base |
| **How it works** | Investors fund the pool. You draw liquidity against the pool. |
| **Why it fits** | Centrifuge was built for real-world collateral — invoices, receivables, asset-backed credit. Dignity's reserve + evidence registry is ideal collateral. |
| **Platform** | centrifuge.io |

#### Maple Finance

| Parameter | Detail |
|---|---|
| **Mechanism** | Institutional credit pools — underwritten, structured |
| **Collateral** | SPV interests, project financing, institutional-grade borrowers |
| **How it works** | Pool delegates underwrite borrower quality. Lenders supply capital. |
| **Why it fits** | Perfect for SPV-based project financing with compliance documentation |
| **Platform** | maple.finance |

#### Clearpool

| Parameter | Detail |
|---|---|
| **Mechanism** | Permissioned and permissionless credit pools |
| **Collateral** | Partially secured or reputation-based |
| **How it works** | Borrowers create pools. Lenders supply. Dynamic interest rates. |
| **Why it fits** | Works well once track record is established |
| **Platform** | clearpool.finance |

#### Goldfinch

| Parameter | Detail |
|---|---|
| **Mechanism** | Senior/junior tranche pools — emerging markets + asset-backed |
| **Collateral** | Real-world asset-backed lending |
| **How it works** | Backers take junior risk. Liquidity providers take senior. |
| **Why it fits** | Designed for project sponsors and asset-backed deals in emerging markets |
| **Platform** | goldfinch.finance |

### What These Protocols Need From You

- Verified entity and beneficial ownership (KYC/KYB) — Dignity compliance engine
- Asset evidence file — Dignity evidence registry
- Reserve attestation — Systec + Dignity POR
- Funding packet — Dignity funding packet builder
- Legal structure (SPV, trust, or entity) — separate legal counsel engagement

> **Compliance note:** Participation in on-chain credit markets may trigger securities, lending, or money-transmission considerations depending on jurisdiction and structure. Qualified counsel must review before engagement.

> **Legal disclaimer:** All on-chain credit-market pathways are subject to protocol onboarding requirements, pool delegate approval, legal structure review, KYC/KYB, securities and lending analysis, and qualified counsel engagement. No specific funding outcome or timeline is guaranteed.

---

---

## SLIDE 27 — CROSS-CHAIN ISSUANCE ARCHITECTURE

Dignity and Systec L1 are the authoritative source. External chains become distribution and settlement rails.

### How Cross-Chain Works

```
Dignity Platform (authoritative state)
  ├─ Reserve registry (Systec-held gold + silver)
  ├─ Compliance state (KYC/AML, investor status)
  ├─ Audit chain (SHA-256 + Systec L1 anchored)
  └─ Issuance state (DIGN / SILV / DIGN-S / RWA instruments)
         │
         ▼
  Systec L1 (settlement layer)
         │
         ├─────────────────────────────────────────────┐
         │                                             │
         ▼                                             ▼
  Wrapped / mirrored assets                 On-chain credit pools
  on external chains                        (Centrifuge, Maple)
         │
         ├── XRPL (cross-border settlement, DEX liquidity)
         ├── Stellar (payment rails, anchor integration)
         ├── Polygon (EVM-compatible, institutional DeFi)
         ├── Avalanche subnets (custom compliance rules)
         └── Base (Coinbase ecosystem, institutional access)
```

### Compliance Preservation Across Chains

Every external chain asset references back to Dignity's compliance state:

| Control | How It Works |
|---|---|
| KYC/AML state | External asset mint/transfer blocked if Dignity status ≠ APPROVED |
| Approval matrix | All issuance events require board approval before cross-chain mint |
| Audit chain hash | External chain transactions reference the Dignity audit event hash |
| Reserve backing | Coverage ratio verified on Dignity before any issuance event |

### Chain-by-Chain Use Cases

| Chain | Best Use Case for Dignity |
|---|---|
| **XRPL** | Cross-border settlement, DEX liquidity for DIGN/SILV, institutional payments |
| **Stellar** | Anchor-based payment rails, USDC/EURC native settlement, remittance flows |
| **Polygon** | EVM ecosystem access, DeFi collateral use, broader institutional DeFi |
| **Avalanche** | Custom subnet with compliance rules — ideal for institutional-only pools |
| **Base** | Coinbase ecosystem, US institutional access, USDC native |
| **Centrifuge (Substrate)** | RWA credit pool participation — reserve as collateral |
| **Systec L1** | Authoritative settlement — all token issuance, governance, audit anchoring |

### Cross-Chain Bridge Budget (Optional Add-On)

| Scope | Cost Range |
|---|---|
| Systec L1 → XRPL bridge | $45,000 – $80,000 |
| Systec L1 → Stellar anchor integration | $35,000 – $65,000 |
| Systec L1 → Polygon / Base ERC-3643 bridge | $90,000 – $180,000 |
| Centrifuge pool integration | $55,000 – $95,000 |
| Full multi-chain deployment (all above) | $220,000 – $380,000 |

> **Legal disclaimer:** Cross-chain issuance architecture involves regulatory, securities, and technical considerations specific to each target chain and jurisdiction. No issuance should be initiated without licensed securities counsel, custodian review, and applicable licensing.

---

---

## SLIDE 27A — MULTI-CHAIN ATTESTATION ARCHITECTURE

Dignity operates one canonical chain for settlement. Multiple chains are used for attestation redundancy, regulatory durability, and long-term provenance — not for trading, liquidity, or mint authority.

### The Rule

> **One chain for operations. Multiple chains for attestation.**

The BD/regulator (Tritaurian and counsel) see one canonical ledger. Capital partners and auditors get multi-chain verification without state divergence.

### Three-Tier Chain Architecture

| Tier | Chain | Role | What It Does | What It Does NOT Do |
|---|---|---|---|---|
| **Primary (Operational)** | XRPL | Canonical settlement | Token mint/burn, investor balances, reserve proof, audit anchoring, BD workflow | — |
| **Secondary (Redundant Attestation)** | Stellar | Mirror attestation | Mirrors issuance metadata, reserve proofs, audit chain hashes | Mint/burn, investor balances, operational state |
| **Tertiary (Long-Term Provenance)** | Ethereum / Polygon | Permanent anchor | Monthly or quarterly hash-only anchors — 30-year audit survivability | Operational state, balances, mint authority |

### Why This Architecture

| Requirement | How It Is Met |
|---|---|
| BD / FINRA single source of truth | XRPL is the only mint and settlement chain |
| Regulatory auditability | All three chains independently verify the same issuance facts |
| Regulatory survivability | If one chain has a governance failure, attestation record survives on others |
| Audit redundancy | Multiple independent ledgers confirm reserve, issuance, and audit data |
| 20–30 year securities lifecycle | Ethereum/Polygon hash anchors are permanent and immutable |
| Cross-jurisdictional compliance | Regulators preferring specific chains can access attestation-only record |
| Disaster recovery | XRPL outage or Stellar fork does not destroy the provenance record |

### What Gets Anchored to Each Chain

| Data | XRPL | Stellar | Ethereum / Polygon |
|---|---|---|---|
| Token mint events | ✓ Canonical | Mirror hash | Monthly batch hash |
| Reserve attestation (POR) | ✓ Canonical | Mirror hash | Quarterly hash |
| Audit chain hashes | ✓ Canonical | Mirror hash | Quarterly hash |
| Investor balances | ✓ Canonical | ✗ Not mirrored | ✗ Not anchored |
| Governance approvals | ✓ Canonical | Mirror hash | ✗ Not anchored |
| Issuance metadata | ✓ Canonical | Mirror hash | Monthly batch hash |

### Multi-Chain Attestation Service (Build Scope)

| Component | Description | Phase |
|---|---|---|
| Attestation bridge — XRPL → Stellar | On-event mirror of issuance metadata and reserve hashes to Stellar | Phase 6 |
| Attestation bridge — XRPL → Ethereum/Polygon | Scheduled batch anchor (monthly/quarterly) of hash bundles | Phase 6 |
| Multi-chain verification endpoint | GET /proof/multi-chain — returns attestation status across all three chains | Phase 6 |
| Cross-chain audit reconciliation | Nightly reconciliation job confirming all three chains agree on issued supply and reserve hashes | Phase 7 |

### Build Cost (Optional Scope — Phase 6 Add-On)

| Item | Estimated Cost |
|---|---|
| Stellar attestation bridge | $35,000 – $65,000 |
| Ethereum/Polygon hash anchor service | $45,000 – $75,000 |
| Multi-chain proof endpoint | $20,000 – $35,000 |
| Cross-chain reconciliation service | $25,000 – $40,000 |
| **Full multi-chain attestation module** | **$125,000 – $215,000** |

> **Important:** The multi-chain attestation module is an optional add-on. XRPL alone is sufficient for the primary build. Stellar and Ethereum/Polygon attestation adds regulatory durability and provenance redundancy — it does not change how tokens are issued, settled, or governed.

> **Legal disclaimer:** Multi-chain attestation architecture must be reviewed by securities counsel and the BD (Tritaurian) to confirm it is consistent with the single-canonical-ledger requirement. No secondary chain anchoring should be initiated without BD and counsel sign-off.

---

---

## SLIDE 28 — INSTITUTIONAL CAPITAL PATHWAYS

**Speed: 30–90 days**

This is the highest-credibility path. Institutional asset managers are actively seeking tokenized, attested, real-world collateral for structured products.

### Why Institutional Funds Want What Dignity Builds

| What Funds Need | What Dignity Delivers |
|---|---|
| Verifiable, attested collateral | POR + POC + Systec attestation |
| Institutional-grade governance | Four-eyes approval, board authority, no bypass |
| Clean compliance documentation | KYC/AML, investor eligibility, accreditation |
| Immutable audit trail | SHA-256 chain + Systec L1 anchoring |
| Redemption rights | DIGN/SILV at LBMA fix — physical or cash |
| Regulatory structure | Counsel-confirmed offering structure |

### Institutional Market Participants

| Institution | What They're Building |
|---|---|
| **BlackRock (BUIDL)** | Tokenized money market fund on Ethereum — $2.4B+ AUM (2025) |
| **Franklin Templeton (BENJI)** | Tokenized US government money market fund on Stellar and Polygon |
| **WisdomTree** | Tokenized commodity and equity products |
| **Fidelity Digital Assets** | Institutional custody and tokenized product infrastructure |
| **JPMorgan (Onyx/Kinexys)** | Institutional settlement rails, tokenized repo |
| **Goldman Sachs (GS DAP)** | Tokenized bond and repo infrastructure |

### What You Present to an Institutional Fund

1. Reserve attestation letter (Systec)
2. Coverage ratio and reserve proof endpoint
3. Board governance structure and approval matrix
4. Compliance framework summary
5. Legal opinion on offering structure (from securities counsel)
6. Audit chain verification
7. Token specifications (DIGN/SILV/DIGN-S)
8. Redemption mechanics and LBMA pricing

> **Compliance note:** Institutional fund partnerships involving securities distribution require licensed securities counsel and potentially broker-dealer involvement. Dignity provides the infrastructure. The deal structure requires properly licensed partners.

> **Legal disclaimer:** Institutional fund partnerships and fund distribution arrangements are subject to securities law, accreditation requirements, licensed intermediary requirements, and applicable regulations in each target jurisdiction. Qualified counsel must be engaged before any fund outreach or distribution activity.

---

---

## SLIDE 29 — FUNDING PATHWAY COMPARISON

Given Dignity's reserves, audit chain, governance, and funding workflow — these are the three highest-priority funding routes once the platform is live.

### Route 1 — Stablecoin Credit Line (USDC/USDT)

| Parameter | Detail |
|---|---|
| **Review Window** | Subject to complete documentation, legal structure, and counterparty approval |
| **Collateral** | Gold + silver reserves (Systec-held, attested) |
| **LTV** | 5–20% on metals |
| **Friction** | Lowest — collateral is already real, verified, and machine-readable |
| **Platform presents** | /proof endpoint + POR + POC + funding packet |
| **Target desks** | Anchorage Digital, BitGo, Fireblocks custody network, Galaxy Digital |
| **Counsel needed** | Credit agreement review |

### Route 2 — Centrifuge RWA Pool

| Parameter | Detail |
|---|---|
| **Review Window** | Subject to pool application and counterparty approval |
| **Collateral** | Reserve-backed gold/silver + asset evidence registry |
| **Structure** | TIN (junior) / DROP (senior) pool |
| **Friction** | Low — Centrifuge built for exactly this collateral type |
| **Platform presents** | Reserve registry + evidence file + funding packet + KYC/AML confirmation |
| **Target** | centrifuge.io institutional pool |
| **Counsel needed** | SPV structure + pool agreement review |

### Route 3 — Maple Institutional Pool

| Parameter | Detail |
|---|---|
| **Review Window** | Subject to underwriting review and pool delegate approval |
| **Collateral** | SPV interest + project financing + institutional borrower profile |
| **Structure** | Underwritten credit pool — delegate-reviewed |
| **Friction** | Moderate — requires pool delegate underwriting |
| **Platform presents** | Full funding packet + compliance documentation + SPV structure |
| **Target** | maple.finance institutional pool |
| **Counsel needed** | Borrower agreement + SPV documents |

### Combined Capacity

| Route | Expected Capacity | Timeline |
|---|---|---|
| Stablecoin credit line | $5M – $50M (collateral-dependent) | Subject to counterparty approval and documentation |
| Centrifuge pool | $10M – $100M+ (pool-dependent) | Month 1 |
| Maple institutional pool | $10M – $50M (underwriter-dependent) | Month 1–2 |

> These three combined give you speed, scale, compliance, and institutional optics — without waiting for secondary market liquidity or retail distribution.

> **Legal disclaimer:** All pathway capacity estimates are illustrative and collateral-dependent. Actual funding amounts, review windows, and structure are subject to counterparty approval, legal documentation, KYC/KYB, and final counsel review. Nothing in this comparison constitutes a commitment or guarantee of funding.

---

---

## SLIDE 30 — FUNDING STRATEGY EXECUTION MAP

Sequenced execution plan from platform go-live to full institutional capital access.

### Phase 1 — Immediate (Week 1–2 Post Go-Live)

| Action | Owner | Output |
|---|---|---|
| Activate /proof endpoint | Dignity ops | Live, public, machine-readable reserve proof |
| Produce POR + POC package | Treasury + Systec | Signed attestation documents |
| Prepare stablecoin credit desk packet | Dignity ops | POR, POC, coverage ratio, funding packet, entity docs |
| Outreach to institutional custody partners (Anchorage, BitGo, Fireblocks) | Kevan + legal | Credit counterparty engagement |
| Legal review of credit agreement structure | Counsel | Confirmed loan/credit structure |

### Phase 2 — Month 1

| Action | Owner | Output |
|---|---|---|
| Draw first stablecoin credit line | Treasury | $5M–$20M USDC/USDT available |
| Submit Centrifuge pool application | Dignity ops + counsel | Pool setup initiated |
| Engage Maple pool delegate | Dignity ops | Underwriting review started |
| First asset evidence file complete | Funding Workflow Agent + ops | First deal-ready packet |
| Capital review room live | Dignity platform | First external counterparty invited |

### Phase 3 — Month 2–3

| Action | Owner | Output |
|---|---|---|
| Centrifuge TIN/DROP pool live | Dignity + Centrifuge | First pool draw |
| Maple pool credit line drawn | Treasury + counsel | Institutional credit operational |
| First RWA issuer onboarded | Compliance + Dignity ops | First third-party issuer packet |
| Cross-chain issuance scoped | Dignity engineering | XRPL or Stellar bridge design |

### Phase 4 — Month 3–6

| Action | Owner | Output |
|---|---|---|
| Institutional fund introductions | Board + Kevan | BlackRock/Franklin/WisdomTree outreach |
| Cross-chain bridge live (XRPL or Stellar) | Engineering | DIGN/SILV on external settlement rail |
| Second and third RWA issuers onboarded | Compliance | Platform revenue generation begins |
| Monthly reporting + covenant tracking live | Dignity ops | Full post-close reporting operational |

---

*This document is a confidential build proposal prepared exclusively for the named authorized recipient. It does not constitute a securities offering, financial advice, or legal advice. All regulated activities require qualified counsel and properly licensed entities. Unauthorized distribution is prohibited.*

**CONFIDENTIAL — AUTHORIZED RECIPIENTS ONLY · Dignity Institutional Platform · May 2026**
