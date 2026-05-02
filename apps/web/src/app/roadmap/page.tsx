import React from "react";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Roadmap</h1>
        <p className="text-amber-200 mb-12">What is complete, what remains, and the path forward</p>

        <div className="space-y-8">
          <section className="bg-slate-800 border border-green-600/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Phase I Complete</h2>
            <p className="text-slate-300 mb-6">Platform foundation with PostgreSQL, audit chain, and API enforcement</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
              <li>✓ Prisma ORM schema + migrations</li>
              <li>✓ SHA-256 audit chain</li>
              <li>✓ Four-eyes API enforcement</li>
              <li>✓ Reserve registry</li>
              <li>✓ Token issuance engine</li>
              <li>✓ Compliance KYC/AML</li>
            </ul>
          </section>

          <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">🔵 Phase II Active</h2>
            <p className="text-slate-300 mb-6">MCP tool mesh with 21 tools, 6 agent personas, and A2A routing</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
              <li>▸ 21 MCP tools (7 domains)</li>
              <li>▸ 6 canonical agent personas</li>
              <li>▸ Agent-to-agent message bus</li>
              <li>▸ Tool authorization layer</li>
              <li>▸ Rate limiting infrastructure</li>
              <li>▸ Public tool catalog endpoint</li>
            </ul>
          </section>

          <section className="bg-slate-800 border border-slate-600/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-400 mb-4">🔵 Phase III Planned</h2>
            <p className="text-slate-300 mb-6">External agent integration with JWT access and API gateway</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
              <li>▸ JWT authentication for external agents</li>
              <li>▸ Per-agent rate limiting</li>
              <li>▸ API gateway with semantic caching</li>
              <li>▸ Token limit enforcement</li>
              <li>▸ Content safety filters</li>
              <li>▸ Usage analytics dashboard</li>
            </ul>
          </section>

          <section className="bg-slate-800 border border-slate-600/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-400 mb-4">🔵 Phase IV Roadmap</h2>
            <p className="text-slate-300 mb-6">ATP payment rail with per-tool micro-fees and agent billing</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
              <li>▸ x402 payment channel integration</li>
              <li>▸ Per-tool micro-fee billing</li>
              <li>▸ Agent token accounting</li>
              <li>▸ Settlement and reconciliation</li>
              <li>▸ Cost attribution per domain</li>
              <li>▸ Crypto settlement support</li>
            </ul>
          </section>
        </div>

        <section className="mt-12 bg-amber-600/10 border border-amber-600/30 rounded-lg p-8">
          <h3 className="text-lg font-bold text-amber-200 mb-3">📋 What Comes Next</h3>
          <p className="text-slate-300">
            The roadmap priorities are driven by operational requirements and institutional stakeholder feedback. 
            Phase III JWT access and Phase IV ATP billing are dependent on Phase II MCP stability in production.
          </p>
        </section>
      </div>
    </main>
  );
}
