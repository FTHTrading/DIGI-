import React from "react";

export default function EvolutionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Evolution</h1>
        <p className="text-amber-200 mb-12">From strategic buildout to validated operating environment</p>

        <div className="space-y-12">
          {[
            {
              phase: "Phase I",
              title: "Platform Foundation",
              status: "✅ Complete",
              items: [
                "PostgreSQL database architecture",
                "SHA-256 audit chain implementation",
                "Prisma ORM schema and migrations",
                "API layer with four-eyes enforcement",
              ],
            },
            {
              phase: "Phase II",
              title: "MCP Tool Mesh",
              status: "✅ Active",
              items: [
                "21 tools across 7 operational domains",
                "6 agent personas with role isolation",
                "Agent-to-agent message routing",
                "Tool authorization and rate limiting",
              ],
            },
            {
              phase: "Phase III",
              title: "External Agent Integration",
              status: "🔵 Planned",
              items: [
                "JWT token authentication for external agents",
                "Per-agent rate limiting policies",
                "API gateway with semantic caching",
                "Token limit and content safety filters",
              ],
            },
            {
              phase: "Phase IV",
              title: "ATP Payment Rail",
              status: "🔵 Roadmap",
              items: [
                "Per-tool micro-fee billing",
                "Agent token accounting",
                "x402 payment channel integration",
                "Usage analytics and settlement",
              ],
            },
          ].map((phase) => (
            <div key={phase.phase} className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-amber-200 font-semibold text-sm">{phase.phase}</p>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                </div>
                <span className="text-lg">{phase.status}</span>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-amber-200 mr-3">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
