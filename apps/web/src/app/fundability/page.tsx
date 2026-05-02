import React from "react";

export default function FundabilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Fundability</h1>
        <p className="text-amber-200 mb-12">Why operational validation improves institutional diligence</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Four Failure Modes</h2>
          <p className="text-slate-300 mb-8">
            Dignity solves the core institutional trust failures of every prior tokenized gold initiative:
          </p>
          <div className="space-y-6">
            {[
              {
                failure: "Opacity",
                prior: "No real-time reserve visibility",
                solution: "SHA-256 hash-chain audit log with public proof endpoint",
              },
              {
                failure: "No Proof",
                prior: "Marketing claims only",
                solution: "Coverage ratio enforced at API level — issuance blocked if breached",
              },
              {
                failure: "Governance Gaps",
                prior: "No separation of duties",
                solution: "Four-eyes principle as system invariant — unbypassable at API layer",
              },
              {
                failure: "No Compliance Tooling",
                prior: "Manual KYC processes",
                solution: "Full KYC/AML engine with Reg D/S accreditation, logged to audit chain",
              },
            ].map((item) => (
              <div key={item.failure} className="bg-slate-900 rounded-lg p-6 border-l-4 border-amber-600">
                <h3 className="text-lg font-bold text-amber-200 mb-2">{item.failure}</h3>
                <p className="text-slate-400 text-sm mb-2">Prior Products: {item.prior}</p>
                <p className="text-white font-semibold">Dignity's Solution</p>
                <p className="text-slate-200 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Institutional Infrastructure</h2>
          <p className="text-slate-300 mb-6">
            Dignity is powered by FTH Trading's institutional infrastructure stack — the same stack backing 
            100+ production modules across 13 blockchains with 4 qualified custodians.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 rounded p-4">
              <p className="text-amber-200 font-bold text-2xl">100+</p>
              <p className="text-slate-300 text-sm">Production modules in circulation</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-amber-200 font-bold text-2xl">13</p>
              <p className="text-slate-300 text-sm">Blockchains deployed across</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-amber-200 font-bold text-2xl">4</p>
              <p className="text-slate-300 text-sm">Qualified custodians operating</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
