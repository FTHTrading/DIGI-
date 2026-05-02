import React from "react";

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Proof Center</h1>
        <p className="text-amber-200 mb-12">Real-time reserve verification and audit chain integrity</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Coverage Ratio</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-1">Minimum Coverage Ratio</p>
              <p className="text-3xl font-bold text-amber-200">1.000</p>
              <p className="text-slate-400 text-xs">(100%)</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-1">Coverage Buffer Target</p>
              <p className="text-3xl font-bold text-amber-200">+5%</p>
              <p className="text-slate-400 text-xs">Above minimum</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-1">Revaluation Frequency</p>
              <p className="text-3xl font-bold text-amber-200">Daily</p>
              <p className="text-slate-400 text-xs">Spot feed</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-1">Custodian Attestation</p>
              <p className="text-3xl font-bold text-amber-200">Monthly</p>
              <p className="text-slate-400 text-xs">Verified lots</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded p-4">
            <code className="text-amber-200 text-sm">
              Coverage Ratio = Σ(Reserve Lot Valuation) ÷ Σ(Outstanding Token Supply × Par Value)
            </code>
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Reserve Verification</h2>
          <p className="text-slate-300 mb-6">
            Every physical gold holding is registered as a Reserve Lot — a discrete, uniquely identified record 
            with LBMA bar reference, custodian identity, USD valuation at spot, and cryptographic status.
          </p>
          <div className="space-y-2 text-slate-300 text-sm">
            <p>◆ LBMA bar reference — Unique identifier per LBMA standards</p>
            <p>◆ Custodian identity — Qualified third-party vault operator</p>
            <p>◆ USD valuation — Spot price at recording time</p>
            <p>◆ Cryptographic status — Hash-linked to audit chain</p>
            <p>◆ Lot states — ACTIVE | PENDING | RETIRED</p>
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Audit Chain</h2>
          <p className="text-slate-300 mb-6">
            The SHA-256 hash-chained audit log records every write operation on the platform. Any retroactive 
            alteration breaks the chain and is immediately detectable.
          </p>
          <div className="bg-slate-900 rounded p-4 text-amber-200 text-sm font-mono">
            Event₁.hash = SHA256(Event₁.content + null)<br/>
            Event₂.hash = SHA256(Event₂.content + Event₁.hash)<br/>
            Event₃.hash = SHA256(Event₃.content + Event₂.hash)<br/>
            ...<br/>
            EventN.hash = SHA256(EventN.content + EventN-1.hash)
          </div>
        </section>
      </div>
    </main>
  );
}
