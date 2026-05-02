# Fastify 5 Agent Backend

MCP tool service for Dignity institutional platform. Provides:
- 21 Model Context Protocol (MCP) tools across 7 domains
- Agent-to-agent (A2A) message routing
- x402 payment channel stubs (Phase IV)
- Tool authorization and rate limiting

## Quick Start

```bash
cd apps/agent-backend
pnpm install
pnpm dev
```

Server runs at `http://localhost:5100`

## MCP Tools (21 total)

### Audit Domain (3 tools, read-only)
- `query_events` — Query audit log by filter
- `verify_chain` — Verify hash chain integrity
- `get_event` — Retrieve specific event

### Reserve Domain (3 tools, mixed access)
- `get_coverage` — Get current coverage ratio
- `list_lots` — List reserve lots
- `get_report` — Get reserve report

### Token Domain (3 tools, write)
- `get_status` — Token supply status
- `request_mint` — Initiate mint request
- `request_redeem` — Initiate redemption

### Approval Domain (3 tools, write)
- `list_pending` — List pending approvals
- `approve` — Approve action
- `reject` — Reject action

### Compliance Domain (2 tools, mixed)
- `check_investor` — Verify investor status
- `list_flags` — List flagged investors

### Market Domain (3 tools, mixed)
- `list_venues` — List trading venues
- `toggle_venue` — Enable/disable venue
- `get_spread` — Get bid-ask spread

### Analytics Domain (2 tools, read-only)
- `coverage_timeline` — Historical coverage
- `issuance_summary` — Issuance analytics

## Agent Personas

Six canonical personas with strict role isolation:
1. **Treasury Agent** — Mint/redemption requests
2. **Board Agent** — Approval authority
3. **Compliance Agent** — KYC/AML checks
4. **Reserve Agent** — Reserve management
5. **Market Agent** — Venue governance
6. **Audit Agent** — Chain verification

## Authentication

**Phase II (Current):** Direct MCP tool calls from internal agents

**Phase III (Planned):** JWT tokens for external agent access

**Phase IV (Roadmap):** ATP payment channel with per-tool micro-fees

## Environment Variables

```
DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3300
NODE_ENV=development
```

## Development

```bash
pnpm dev              # Start dev server with hot reload
pnpm build            # TypeScript build
pnpm start            # Run compiled output
pnpm lint             # ESLint
```
