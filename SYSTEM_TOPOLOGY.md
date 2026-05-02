# System Topology

## Complete Platform Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         DIGNITY PLATFORM                             │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Cloudflare Pages + Workers (Edge CDN / DDoS / TLS)            │ │
│  │  Region: Global (anycast)                                      │ │
│  │  TLS: 1.3+                                                     │ │
│  │  DDoS Protection: Managed                                      │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  Next.js 15 App Router Frontend  (apps/web · port 3300)        │ │
│  │  ├─ 9 Public Routes                                            │ │
│  │  │  ├─ / (homepage)                                            │ │
│  │  │  ├─ /platform (architecture)                                │ │
│  │  │  ├─ /leadership (board)                                     │ │
│  │  │  ├─ /evolution (roadmap)                                    │ │
│  │  │  ├─ /controls (governance)                                  │ │
│  │  │  ├─ /proof (reserve verification)                           │ │
│  │  │  ├─ /fundability (diligence)                                │ │
│  │  │  ├─ /documents (PDFs)                                       │ │
│  │  │  ├─ /agent (MCP tools)                                      │ │
│  │  │  └─ /faq, /token, /compliance (details)                     │ │
│  │  │                                                             │ │
│  │  ├─ /admin/* Protected (NextAuth · Board only)                │ │
│  │  │  └─ Approval workflows, vault management                    │ │
│  │  │                                                             │ │
│  │  ├─ /investor/* Protected (Session · Accredited only)         │ │
│  │  │  └─ Portfolio, buy/redeem, holdings                         │ │
│  │  │                                                             │ │
│  │  └─ /api/agent/* Proxy Routes                                  │ │
│  │     └─ Forward to agent-backend:5100                           │ │
│  │                                                                │ │
│  │  Rendering: SSR + ISR for compliance pages                    │ │
│  │  Auth: NextAuth v4 with JWT sessions                          │ │
│  │  Styling: Tailwind CSS 3.4 (institutional palette)            │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  Fastify 5 Agent Backend  (apps/agent-backend · port 5100)     │ │
│  │  ├─ MCP Tool Registry (21 tools)                               │ │
│  │  │  ├─ Audit (3): query_events, verify_chain, get_event       │ │
│  │  │  ├─ Reserve (3): get_coverage, list_lots, get_report       │ │
│  │  │  ├─ Token (3): get_status, request_mint, request_redeem    │ │
│  │  │  ├─ Approval (3): list_pending, approve, reject            │ │
│  │  │  ├─ Compliance (2): check_investor, list_flags             │ │
│  │  │  ├─ Market (3): list_venues, toggle_venue, get_spread      │ │
│  │  │  └─ Analytics (2): coverage_timeline, issuance_summary     │ │
│  │  │                                                             │ │
│  │  ├─ A2A Routing (Agent-to-Agent Message Bus)                  │ │
│  │  │  ├─ Treasury Agent                                          │ │
│  │  │  ├─ Board Agent                                             │ │
│  │  │  ├─ Compliance Agent                                        │ │
│  │  │  ├─ Reserve Agent                                           │ │
│  │  │  ├─ Market Agent                                            │ │
│  │  │  └─ Audit Agent                                             │ │
│  │  │                                                             │ │
│  │  └─ x402 Stubs (Phase IV payment rail)                         │ │
│  │     └─ ATP micro-fee integration                               │ │
│  │                                                                │ │
│  │  Rate Limiting: Per-tool, per-agent                           │ │
│  │  Auth (Phase III): JWT token validation                       │ │
│  └──────────────────────┬──────────────────────────────────────────┘ │
│                         │                                            │
│  ┌──────────────────────▼──────────────────────────────────────────┐ │
│  │  PostgreSQL 16 + Prisma ORM  (port 5433)                       │ │
│  │  ├─ Operational Tables                                         │ │
│  │  │  ├─ ReserveLot (physical gold holdings)                     │ │
│  │  │  ├─ TokenSupply (DIGN outstanding)                          │ │
│  │  │  ├─ Investor (KYC/AML records)                              │ │
│  │  │  ├─ ApprovalRequest (workflow state)                        │ │
│  │  │  ├─ Venue (trading venue registry)                          │ │
│  │  │  ├─ TokenTransaction (mint/redeem log)                      │ │
│  │  │  ├─ ReserveReport (published reports)                       │ │
│  │  │  └─ CustodianAttestation (monthly letters)                  │ │
│  │  │                                                             │ │
│  │  └─ AuditEvent Table (Hash-Chained)                            │ │
│  │     └─ Append-only, SHA-256 linked, tamper-evident            │ │
│  │                                                                │ │
│  │  Pooling: pgBouncer (connection management)                   │ │
│  │  Backups: 7-day retention                                      │ │
│  │  Replication: Standby failover                                 │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagrams

### Mint Request Flow (Four-Eyes Enforcement)

```
Treasury Officer          Board Director         System
      │                        │                    │
      ├──────── request_mint ──────────────────────>│
      │                        │                    │
      │                        │        verify_coverage
      │                        │         ≥ 1.000?
      │                        │                    │
      │                        │            <──────┤
      │                        │            yes    │
      │                        │                    │
      │                        │<───── list_pending─┤
      │                        │                    │
      │                 approve mint ──────────────>│
      │                        │                    │
      │                        │      verify_approver
      │                        │      ≠ proposer?
      │                        │                    │
      │                        │            <──────┤
      │                        │            yes    │
      │                        │                    │
      │                        │         mint tokens
      │                        │        audit_log
      │                        │        send notify
      │                        │                    │
      │<───────────────────────────── notification─┤
      │                        │                    │
```

### Audit Chain Hash Verification

```
Event₁
├─ category: "token.minted"
├─ actor: "treasury-agent"
├─ afterState: { supply: 1000000 }
└─ hash: SHA256(content + null)

Event₂
├─ category: "approval.granted"
├─ actor: "board-agent"
├─ beforeState: { status: "PENDING" }
├─ afterState: { status: "APPROVED" }
└─ hash: SHA256(content + Event₁.hash)

Event₃
├─ category: "investor.updated"
├─ actor: "compliance-agent"
├─ beforeState: { kyc: "PENDING" }
├─ afterState: { kyc: "APPROVED" }
└─ hash: SHA256(content + Event₂.hash)

...

EventN
└─ hash: SHA256(content + EventN-1.hash)

ANY retroactive alteration of EventN-1 breaks chain.
```

## Integration Points

### External Systems

| System | Purpose | Port | Protocol |
|--------|---------|------|----------|
| OFAC/SDN | Sanctions screening | 443 | HTTPS REST |
| LBMA AM | Gold spot pricing | 443 | HTTPS REST |
| Stripe | Payments (Phase II) | 443 | HTTPS REST |
| Cloudflare | CDN/Workers | 443 | HTTPS |

### Custody Integration

| Custodian | Venue | Protocol | Attestation |
|-----------|-------|----------|-------------|
| [Name] | [Location] | SFTP | Monthly letter |
| [Name] | [Location] | SFTP | Monthly letter |
| [Name] | [Location] | SFTP | Monthly letter |
| [Name] | [Location] | SFTP | Monthly letter |

## Deployment Topology

### Local Development

```
localhost:3300  → Next.js dev server (hot reload)
localhost:5100  → Fastify dev server (tsx watch)
localhost:5433  → PostgreSQL (Docker)
```

### Production

```
dignity.unykorn.org
├─ Cloudflare Pages (static + SSR)
├─ Cloudflare Workers (API routes)
└─ Origin: PostgreSQL RDS
```

## Security Perimeter

### Network

- **Ingress:** Cloudflare only (DDoS, WAF, rate limiting)
- **Egress:** Whitelist only (OFAC, LBMA, custodians)
- **Internal:** Private VPC, no public DB access

### Authentication

- **Frontend:** NextAuth v4 (JWT session)
- **Backend:** API key + JWT (Phase III)
- **Database:** Parameterized queries, no raw SQL

### Encryption

- **TLS:** 1.3+ everywhere
- **At-rest:** PostgreSQL native encryption
- **Audit:** SHA-256 hash-chain (tamper-evident)

### Compliance

- **Audit Trail:** Every operation logged
- **Four-Eyes:** Unbypassable at API layer
- **PII:** Encrypted in transit and at rest
- **Retention:** 7-year minimum

---

**Last Updated:** May 1, 2026  
**Architecture Version:** 2.0 (Phase II Active)
