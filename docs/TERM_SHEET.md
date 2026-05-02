# DIGNITY INSTITUTIONAL PLATFORM
## Term Sheet

---

## EXECUTIVE SUMMARY

**Dignity** is an institutional-grade digital asset issuer platform for reserve-backed, compliance-first security token issuance. It solves the four failure modes of every prior tokenized gold initiative through operational governance, real-time reserve verification, and immutable audit chaining.

**Platform Classification:** Not a cryptocurrency. Not a retail exchange. A production-grade capital markets operating system for qualified institutional investors.

**Issuer Authority:** Board of Directors (7 members) with operational oversight across all 14 platform packages.

**Reserve Backing:** 100% allocated physical gold, held by qualified custodians, verified monthly.

**Token Specification:** DIGN — 1 troy ounce equivalent, fully fungible, fractional to 0.001 oz.

---

## I. THE TOKEN: DIGN

### A. Basic Specifications

| Parameter | Value |
|-----------|-------|
| Ticker | DIGN |
| Denomination | 1 DIGN = 1 troy oz equivalent |
| Fractional Minimum | 0.001 troy oz |
| Backing Requirement | 100% allocated gold |
| Issuance Authority | Board + Treasury (dual approval) |
| Redemption Right | Physical or cash at LBMA AM fix |
| Transfer Restriction | KYC/AML-verified counterparties only |
| Par Value | $1 USD equivalent to troy oz spot |
| Dividend/Interest | None (no coupon) |

### B. Issuance Mechanics

**Mint Flow:**
1. Treasury Officer submits mint request with reserve lot allocation
2. System verifies post-mint coverage ≥ 1.000 (100%)
3. Board Director approves (separation of duties enforced at API level)
4. Tokens minted, logged to audit chain, investor notified

**Redemption Flow:**
1. Investor submits redemption request (physical or cash)
2. Compliance verifies investor status (APPROVED)
3. Treasury Officer processes settlement
4. Board Director approves settlement (if cash or venue change required)
5. Settlement executed, audit logged

### C. Rights and Restrictions

**Holder Rights:**
- Right to physical gold redemption or cash equivalent at LBMA AM fix
- Proportional share of reserve backing
- Access to real-time proof endpoint (/proof)
- Divisibility and transferability (subject to compliance)
- Right to audit chain verification

**Restrictions:**
- No transfer to non-KYC/AML-verified counterparties
- No redemption if KYC status is FLAGGED or REJECTED
- Transfer restricted to APPROVED investors only
- No margin, short sale, or derivative positioning

---

## II. RESERVE STRUCTURE

### A. Coverage Ratio

$$\text{Coverage Ratio} = \frac{\sum(\text{Reserve Lot Valuation})}{\sum(\text{Outstanding Token Supply} \times \text{Par Value})}$$

**Parameters:**
- Minimum coverage ratio: **1.000** (100%)
- Coverage buffer target: **+5%** above minimum
- Revaluation frequency: **Daily** (spot feed)
- Custodian attestation: **Monthly**
- New issuance gate: Blocked if post-mint coverage < 1.000

### B. Reserve Lots

Every physical gold holding is registered as a **Reserve Lot** with:
- LBMA bar reference (unique identifier)
- Custodian identity and location
- USD valuation at spot price (recorded time)
- Cryptographic status (hash-linked to audit chain)
- Lot state: **ACTIVE** | **PENDING** | **RETIRED**

### C. Custodian Requirements

Reserve custodians must meet:
- Qualified institutional custodian standards
- Monthly attestation letter requirement
- Insurance requirement: 110% of holdings value
- Annual audit by independent firm
- Real-time reserve verification capability

**Approved Custodians:** [List to be updated quarterly]

---

## III. GOVERNANCE & COMPLIANCE

### A. Board of Directors

| Director | Domain | Responsibility |
|----------|--------|-----------------|
| David Weild IV | Investment Banking | Strategic capital markets orientation |
| Richard Allen Perkins | Legal | Securities law and regulatory filing |
| Randy Rowe | Capital Markets | Market execution and liquidity |
| Todd Reiter | Technology | Platform architecture and security |
| Dr. Michael Repass | Clinical Governance | Evidence-based compliance rigor |
| Dr. Dana Hardin | Scientific Review | Reserve verification authority |
| Angeline Cardinal Bendle | Community Sovereignty | ESG and stakeholder engagement |

### B. Four-Eyes Principle

**System Invariant:** The separation of duties is not a policy—it is embedded at the API layer.

| Action | Proposer | Approver | Expiry |
|--------|----------|----------|--------|
| Token Mint | Treasury Officer | Board Director | 72 hrs |
| Token Redemption | Treasury Officer | Board Director | 72 hrs |
| Venue Toggle | Market Ops | Board Director | 48 hrs |
| Reserve Report | Treasury Officer | Board Director | 120 hrs |
| Reserve Lot Addition | Treasury Officer | Board Director | 72 hrs |
| Investor Override | Compliance Officer | Board Director | 24 hrs |

**Enforcement:** No administrative override. No emergency bypass. Identity ≠ Requestor verified at every approval.

### C. KYC/AML Requirements

**Individual Investors:**
- Accreditation per Regulation D (1933 Act)
- Income ≥ $200K or net worth ≥ $1M
- Annual re-verification required
- Sanctions screening (OFAC/SDN)
- PEP status flagging

**Institutional Investors:**
- Qualified Institutional Buyer (QIB) status per Rule 144A
- AUM ≥ $100M
- Annual re-verification
- Same screening as individual investors

**Status States:**
- **PENDING:** Awaiting completion
- **APPROVED:** Verified and accredited
- **FLAGGED:** Under manual review (holds only, no new buys)
- **REJECTED:** Failed checks (exit only, forced redemption)

---

## IV. FEE STRUCTURE

| Stream | Type | Rate | Timing |
|--------|------|------|--------|
| Issuance Spread | Variable | 0.50% of notional | At mint |
| Annual Custody Fee | Percentage | 0.20% p.a. on AUM | Quarterly |
| Redemption Fee (Physical) | Variable | 0.25% | At redemption |
| Transfer Fee | Per trade | 0.05% | Per settlement |
| Compliance API | Subscription | Market | Monthly |
| Analytics API | Subscription | Market | Monthly |
| x402 Agent Micro-fees | Per-invocation ATP | Market | Phase IV |

---

## V. AUDIT & PROOF

### A. Hash-Chained Audit Log

Every write operation on the platform is recorded as an immutable **AuditEvent**:

```
Event₁.hash = SHA256(Event₁.content + null)
Event₂.hash = SHA256(Event₂.content + Event₁.hash)
Event₃.hash = SHA256(Event₃.content + Event₂.hash)
...
EventN.hash = SHA256(EventN.content + EventN-1.hash)
```

**Any retroactive alteration breaks the chain and is immediately detectable.**

### B. Event Content

Each AuditEvent records:
- **Category + action** — Typed, enumerated
- **Actor identity + role** — Who performed the action
- **Before/after state** — Full state diff
- **SHA-256 hash** — Chained to previous event
- **Timestamp** — UTC with microsecond precision

### C. Public Proof Endpoint

Qualified investors and regulators can verify the audit chain integrity without system access:

```
GET /proof
Response: {
  chainIntegrity: boolean,
  lastEventHash: string,
  eventCount: number,
  dailyCoverageRatio: decimal,
  custodianAttestation: {
    date: ISO-8601,
    custodian: string,
    verified: boolean
  }
}
```

---

## VI. MCP AGENT MESH

Dignity exposes 21 Model Context Protocol (MCP) tools across 7 operational domains:

| Domain | Tools | Access | Tools |
|--------|-------|--------|-------|
| **Audit** | 3 | Read-only | query_events, verify_chain, get_event |
| **Reserve** | 3 | Mixed | get_coverage, list_lots, get_report |
| **Token** | 3 | Write | get_status, request_mint, request_redeem |
| **Approval** | 3 | Write | list_pending, approve, reject |
| **Compliance** | 2 | Mixed | check_investor, list_flags |
| **Market** | 3 | Mixed | list_venues, toggle_venue, get_spread |
| **Analytics** | 2 | Read-only | coverage_timeline, issuance_summary |

**Six Canonical Agent Personas:**
1. Treasury Agent — Mint/redemption initiation
2. Board Agent — Approval authority
3. Compliance Agent — KYC/AML checks
4. Reserve Agent — Reserve management
5. Market Agent — Venue governance
6. Audit Agent — Chain verification

---

## VII. TECHNICAL ARCHITECTURE

### Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3.4
- Recharts (analytics)

**Backend:**
- Fastify 5 (agent service)
- NextAuth 4 (session auth)
- Prisma ORM
- PostgreSQL 16

**Infrastructure:**
- Cloudflare Pages + Workers
- OpenNext/Cloudflare 1.18
- Turborepo
- pnpm workspaces

**Security:**
- SHA-256 hash-chain audit
- CSP + HSTS headers
- Parameterized queries (no raw SQL)
- Ed25519 signing (x402 layer)
- 4-eyes API enforcement

### Monorepo Structure

```
dignity-institutional-platform/
├── apps/
│   ├── web/               # Next.js 15 frontend
│   └── agent-backend/     # Fastify 5 MCP service
├── packages/              # 15 workspace libraries
│   ├── audit/
│   ├── compliance-engine/
│   ├── token-engine/
│   ├── reserve-registry/
│   └── [11 others]
├── contracts/             # Solidity security token contracts
├── docs/                  # Runbooks and policies
├── infra/                 # Docker and Cloudflare configs
└── scripts/               # Bootstrap and validation
```

---

## VIII. ROADMAP

| Phase | Description | Status |
|-------|-------------|--------|
| **I** | Platform foundation — PostgreSQL, audit chain, Prisma schema | ✅ Complete |
| **II** | MCP tool mesh — 21 tools, 6 agent personas, A2A routing | ✅ Active |
| **III** | External agent JWT access, rate limiting, API gateway | 🔵 Planned |
| **IV** | ATP payment rail — per-tool micro-fees, agent billing | 🔵 Roadmap |

---

## IX. RISK FACTORS

### Operational Risks
- Reserve custodian operational failure
- Spot price volatility (daily mark-to-market)
- Regulatory policy changes (Reg D, Rule 144A)
- Technology infrastructure vulnerabilities

### Market Risks
- Liquidity risk (limited secondary market)
- Redemption risk (physical or cash settlement delay)
- Counterparty credit risk (custodian insolvency)

### Compliance Risks
- Jurisdiction-specific securities law conflicts
- KYC/AML false positive rate (investor friction)
- Transfer restriction enforcement

---

## X. INVESTOR ONBOARDING

### Phase 1: KYC/AML Submission
1. Complete investor profile form
2. Submit identity verification documents
3. Provide proof of accreditation (tax returns, bank statements, etc.)
4. Compliance review (2–5 business days)

### Phase 2: Approval & Funding
1. Receive APPROVED status notification
2. Establish stablecoin payment rail (USDC/USDT)
3. Transfer notional USD to settlement wallet
4. Await Treasury Officer mint approval

### Phase 3: Token Issuance
1. Board Director approves mint request
2. Tokens minted and credited to investor wallet
3. Custody fee begins accruing
4. Access to Investor Portal

---

## XI. REGULATORY COMPLIANCE

**Applicable Frameworks:**
- Regulation D (1933 Act) — Accredited Investor Rule
- Rule 144A (Securities Act) — QIB Qualified Institutional Buyers
- FinCEN AML/CFT Guidelines
- State Money Transmitter Laws
- Commodity Futures Trading Commission (if applicable)
- S-K 1300 (mining disclosure, if required)

**Documentation:**
- Form D filing (quarterly)
- FinCEN SAR filings (suspicious activity)
- Annual audit by independent CPA
- Custodian attestation (monthly)

---

## XII. CONTACT & GOVERNANCE

**Institutional Inquiries:** partners@dignity.institutional

**Board Chair:** David Weild IV

**Compliance Officer:** [TBD]

**Technology Officer:** Todd Reiter

**Treasury Officer:** [TBD]

---

## XIII. MONETIZATION PATHWAY (BROKER-DEALER OS ALIGNMENT)

This section aligns the Dignity commercialization model to the institutional positioning and operating model presented on brokerdealer.unykorn.org.

### A. Revenue Engines

| Engine | Buyer | Pricing Basis | Revenue Type |
|--------|-------|---------------|--------------|
| Platform Enablement Fee | Issuer/SPV | One-time onboarding + launch | Non-recurring implementation |
| Securities Workflow Operations | Issuer + Broker-Dealer | Per offering + per close | Transactional |
| Transfer Control Registry | Issuer + TA + Compliance | Per wallet/per transfer checks | Usage-based |
| Reserve Intelligence & Proof | Issuer + Investor Relations | Monthly reporting + attestations | Recurring subscription |
| Valuation & Reporting Packs | Issuer + Fund Admin | Per reporting cycle | Recurring + project |
| Treasury & Settlement Ops | Issuer + Settlement Agent | Per settlement or notional bands | Transactional |
| Compliance API Access | Broker-Dealer + Compliance Team | Tiered monthly API plan | Recurring subscription |
| Analytics API Access | Issuer + Management | Tiered monthly API plan | Recurring subscription |

### B. Commercial Packaging

| Package | Target Segment | Monthly Platform Fee | Included Volume |
|---------|----------------|----------------------|-----------------|
| Foundation | Single issuance teams | $12,500 | Up to 500 investors, 1 active offering |
| Institutional | Multi-offering issuers | $35,000 | Up to 3 active offerings, 2,500 investors |
| Enterprise | Broker-dealer network operators | $75,000 | Multi-SPV, custom controls, dedicated support |

### C. Transaction Economics

| Event | Rate | Notes |
|-------|------|-------|
| Issuance execution fee | 0.75% of gross raise | Charged at close |
| Digital transfer fee | 0.05% per transfer | Compliance-gated movement |
| Cash redemption fee | 0.20% of redeemed notional | Cash-settled path |
| Physical redemption fee | 0.35% of redeemed notional | Includes vault logistics coordination |
| Reserve attestation admin fee | $7,500 per cycle | Monthly/quarterly attestation orchestration |

### D. Monetization Ramp (First 12 Months)

| Quarter | Primary Objective | Revenue Focus |
|---------|-------------------|---------------|
| Q1 | Launch first institutional mandate | One-time enablement + implementation |
| Q2 | Convert pilot operations to recurring run-state | Platform subscription + workflow fees |
| Q3 | Add 2-3 issuers/SPVs | Issuance execution + registry usage |
| Q4 | Activate partner channel scaling | API subscriptions + settlement volume growth |

---

## XIV. INFRASTRUCTURE BUILDOUT COSTS & PAYMENT SCHEDULE

This budget framework is structured for payment authorization and milestone-based disbursement to deliver the full institutional infrastructure.

### A. One-Time Build Budget (Implementation)

| Workstream | Scope | Cost (USD) |
|------------|-------|------------|
| Architecture & Program Design | Security architecture, compliance workflows, controls blueprint | $85,000 |
| Core Platform Engineering | Next.js + Fastify + package buildout across all modules | $240,000 |
| Compliance & Governance Engine | KYC/AML states, 4-eyes approval controls, enforcement APIs | $140,000 |
| Reserve Registry & Proof Layer | Coverage controls, reserve evidence, attestation chain | $120,000 |
| Token & Settlement Rails | Issuance/redemption orchestration, rails integration stubs | $110,000 |
| Agent Mesh & MCP Tooling | 21-tool implementation, A2A controls, role partitioning | $130,000 |
| Security Hardening & Audit | CSP/HSTS, access controls, threat modeling, audit readiness | $75,000 |
| QA, UAT, and Production Readiness | End-to-end testing, load checks, go-live runbooks | $80,000 |
| Program Management & Documentation | PMO, board reporting, SOP and institutional docs | $65,000 |

**Total One-Time Implementation:** **$1,045,000**

### B. Monthly Run-Rate (Post Go-Live)

| Category | Estimated Monthly Cost (USD) |
|----------|------------------------------|
| Cloudflare + Edge + WAF | $2,500 - $7,500 |
| Managed PostgreSQL + Backups | $1,500 - $4,000 |
| Monitoring, SIEM, and Alerting | $1,000 - $3,000 |
| Custodian/attestation operations support | $6,000 - $15,000 |
| Compliance ops and periodic screening | $8,000 - $20,000 |
| Engineering support and maintenance | $25,000 - $60,000 |

**Estimated Monthly Operating Range:** **$44,000 - $109,500**

### C. Milestone-Based Payment Schedule

| Milestone | Deliverable Gate | Payment |
|-----------|------------------|---------|
| M1 - Program Initiation | Architecture baseline, governance matrix, technical design sign-off | 20% ($209,000) |
| M2 - Core Platform Complete | Frontend/backend integration, database model, environment automation | 20% ($209,000) |
| M3 - Compliance + Reserve Controls | 4-eyes workflows, KYC state machine, reserve proof controls | 20% ($209,000) |
| M4 - Agent Mesh + Settlement | MCP tooling, A2A routing, issuance/redemption workflow completion | 20% ($209,000) |
| M5 - UAT + Production Launch | Security hardening, UAT sign-off, go-live + handover | 20% ($209,000) |

### D. Optional Add-On Budget Lines

| Add-On | Purpose | Cost (USD) |
|--------|---------|------------|
| ERC-3643 migration execution | Full migration planning + cutover operations | $90,000 - $180,000 |
| External legal/regulatory package support | Counsel coordination, filing packs, evidence packages | $75,000 - $220,000 |
| Dedicated 24/7 SRE and incident response | High-availability premium support | $18,000 - $45,000 / month |

### E. Payment Terms

- Currency: USD
- Invoice terms: Net 15 unless otherwise contracted
- Late payment: 1.5% monthly carrying charge on overdue balances
- Change requests outside approved scope: Time and materials with pre-approved SOW addendum
- Third-party pass-through costs (custodians, legal counsel, external attestations): billed at cost

---

## DISCLAIMERS

This term sheet is **confidential** and intended for qualified institutional investors only. It is not an offer or solicitation to buy or sell securities. All statements are subject to risks outlined herein. The Dignity platform is subject to regulatory approval and may be modified or discontinued at any time.

---

**Document ID:** DIG-TS-2026-001  
**Classification:** Confidential — Qualified Institutional Investors Only  
**Effective Date:** May 1, 2026  
**Next Review:** August 1, 2026
