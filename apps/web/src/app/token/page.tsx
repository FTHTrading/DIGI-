import React from "react";

export default function TokenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Token Specifications</h1>
        <p className="text-amber-200 mb-12">DIGN — Institutional gold-backed security token</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Token Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Denomination", value: "1 DIGN = 1 troy ounce equivalent" },
              { label: "Fractional Minimum", value: "0.001 troy oz" },
              { label: "Backing Requirement", value: "100% allocated gold" },
              { label: "Issuance Authority", value: "Board + Treasury (dual approval)" },
              { label: "Redemption Right", value: "Physical or cash at LBMA AM fix" },
              { label: "Transfer Restriction", value: "KYC/AML-verified counterparties only" },
            ].map((param, i) => (
              <div key={i} className="bg-slate-900 rounded p-4">
                <p className="text-slate-400 text-sm mb-1">{param.label}</p>
                <p className="text-white font-semibold">{param.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Mint Flow</h2>
          <div className="space-y-4">
            {[
              "Treasury Officer submits mint request",
              "System verifies post-mint coverage ≥ 1.000",
              "Board Director approves (separation of duties enforced at API level)",
              "Tokens minted → logged to audit chain",
            ].map((step, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  {i + 1}
                </div>
                <p className="text-slate-300 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Fee Structure</h2>
          <div className="space-y-4">
            {[
              { event: "Issuance", fee: "0.50%", basis: "of notional" },
              { event: "Annual Custody", fee: "0.20%", basis: "p.a. on AUM" },
              { event: "Redemption (Physical)", fee: "0.25%", basis: "at redemption" },
              { event: "Transfer", fee: "0.05%", basis: "per trade" },
            ].map((row, i) => (
              <div key={i} className="bg-slate-900 rounded p-4 flex justify-between">
                <p className="text-white font-semibold">{row.event}</p>
                <div className="text-right">
                  <p className="text-amber-200 font-bold">{row.fee}</p>
                  <p className="text-slate-400 text-sm">{row.basis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
