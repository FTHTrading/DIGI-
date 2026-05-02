import React from "react";

export default function AgentPage() {
  const domains = [
    { name: "Audit", tools: 3, access: "Read-only", tools_list: ["query_events", "verify_chain", "get_event"] },
    { name: "Reserve", tools: 3, access: "Mixed", tools_list: ["get_coverage", "list_lots", "get_report"] },
    { name: "Token", tools: 3, access: "Write", tools_list: ["get_status", "request_mint", "request_redeem"] },
    { name: "Approval", tools: 3, access: "Write", tools_list: ["list_pending", "approve", "reject"] },
    { name: "Compliance", tools: 2, access: "Mixed", tools_list: ["check_investor", "list_flags"] },
    { name: "Market", tools: 3, access: "Mixed", tools_list: ["list_venues", "toggle_venue", "get_spread"] },
    { name: "Analytics", tools: 2, access: "Read-only", tools_list: ["coverage_timeline", "issuance_summary"] },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Agent Interface</h1>
        <p className="text-amber-200 mb-12">MCP tool catalog and agent-native operations</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">MCP Tool Registry</h2>
          <p className="text-slate-300 mb-6">
            Dignity exposes 21 tools across 7 operational domains, enabling agent-native governance and execution. 
            This is the first institutional digital asset platform with a structured MCP tool catalog.
          </p>
          <div className="bg-slate-900 rounded p-4 mb-6">
            <code className="text-amber-200 text-sm">
              Total Tools: 21 · Domains: 7 · Agent Personas: 6
            </code>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Tool Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain) => (
              <div key={domain.name} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-amber-200">{domain.name}</h3>
                  <span className="text-xs px-2 py-1 bg-amber-600/20 text-amber-200 rounded">{domain.access}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{domain.tools} tools</p>
                <ul className="space-y-2">
                  {domain.tools_list.map((tool) => (
                    <li key={tool} className="text-slate-300 text-sm flex items-center">
                      <span className="text-amber-200 mr-2">·</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Canonical Agent Personas</h2>
          <p className="text-slate-300 mb-6">
            Six agent personas operate within the platform, each with defined role and strict separation of duties 
            mirroring the human governance layer.
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>◇ Treasury Agent — Mint/redemption request initiation</p>
            <p>◇ Board Agent — Approval authority for all four-eyes workflows</p>
            <p>◇ Compliance Agent — KYC/AML checks and investor status management</p>
            <p>◇ Reserve Agent — Reserve lot management and coverage verification</p>
            <p>◇ Market Agent — Venue governance and market operations</p>
            <p>◇ Audit Agent — Chain verification and audit trail queries</p>
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
          <div className="bg-slate-900 rounded p-4 mb-4">
            <p className="text-slate-300 text-sm mb-3">Phase II (Current): Direct MCP tool calls from internal agents</p>
            <p className="text-slate-300 text-sm mb-3">Phase III (Planned): JWT tokens for external agent access</p>
            <p className="text-slate-300 text-sm">Phase IV (Roadmap): ATP payment channel micro-fees per tool invocation</p>
          </div>
        </section>
      </div>
    </main>
  );
}
