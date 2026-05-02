import React from "react";

export default function PlatformPage() {
  const packages = [
    { name: "audit", description: "SHA-256 hash-chain AuditEvent engine", category: "Security" },
    { name: "compliance-engine", description: "KYC/AML, Reg D accreditation, sanctions screening", category: "Compliance" },
    { name: "token-engine", description: "Mint, redeem, burn, transfer restriction", category: "Issuance" },
    { name: "reserve-registry", description: "Reserve lot management, coverage ratio", category: "Reserve" },
    { name: "treasury", description: "Treasury workflows, mint/redemption approval routing", category: "Operations" },
    { name: "market-ops", description: "Market maker governance, venue controls", category: "Market" },
    { name: "exchange-adapters", description: "Venue connectors, ATS interface", category: "Market" },
    { name: "stablecoin-rails", description: "USDC/USDT multi-chain payment rail", category: "Settlement" },
    { name: "attestation", description: "Custodian attestation, proof anchor", category: "Proof" },
    { name: "analytics", description: "Coverage timelines, issuance summaries", category: "Reporting" },
    { name: "documents", description: "PDF generation — 5 institutional documents", category: "Documents" },
    { name: "auth", description: "NextAuth session, role-based access", category: "Auth" },
    { name: "db", description: "Prisma ORM, schema, migrations", category: "Database" },
    { name: "ui", description: "Tailwind design system, glass-panel components", category: "Design" },
    { name: "shared-types", description: "TypeScript types, Zod schemas", category: "Types" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Platform Architecture</h1>
        <p className="text-amber-200 mb-12">15 workspace packages powering institutional operations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6 hover:border-amber-600/50 transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-amber-200">@dignity/{pkg.name}</h3>
                <span className="text-xs px-2 py-1 bg-amber-600/20 text-amber-200 rounded">{pkg.category}</span>
              </div>
              <p className="text-slate-300 text-sm">{pkg.description}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">MCP Tool Registry</h2>
          <p className="text-slate-300 mb-6">
            Dignity exposes 21 MCP tools across 7 operational domains, enabling agent-native governance and execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-200 font-bold mb-2">Audit Domain (Read-only)</h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>· query_events</li>
                <li>· verify_chain</li>
                <li>· get_event</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-200 font-bold mb-2">Token Domain (Write)</h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>· get_status</li>
                <li>· request_mint</li>
                <li>· request_redeem</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-200 font-bold mb-2">Reserve Domain (Mixed)</h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>· get_coverage</li>
                <li>· list_lots</li>
                <li>· get_report</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-200 font-bold mb-2">Compliance Domain (Mixed)</h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>· check_investor</li>
                <li>· list_flags</li>
                <li>· update_status</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
