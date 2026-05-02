import React from "react";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Compliance Framework</h1>
        <p className="text-amber-200 mb-12">KYC/AML, accreditation verification, and transfer controls</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">KYC/AML Pipeline</h2>
          <p className="text-slate-300 mb-6">
            All investors undergo comprehensive compliance screening prior to token purchase. Checks are logged 
            immutably to the audit chain.
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>✓ Identity verification (government-issued document)</p>
            <p>✓ Accreditation status determination (Reg D / Rule 144A)</p>
            <p>✓ Sanctions screening (OFAC/SDN list)</p>
            <p>✓ PEP (Politically Exposed Person) flagging</p>
            <p>✓ Annual re-verification of accreditation status</p>
            <p>✓ Suspicious Activity Report (SAR) pipeline for flagged transactions</p>
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Investor Status Matrix</h2>
          <div className="space-y-4">
            {[
              { status: "PENDING", actions: "None", description: "Awaiting KYC/AML completion" },
              { status: "APPROVED", actions: "Buy · Sell · Redeem", description: "Verified and accredited" },
              { status: "FLAGGED", actions: "Holds only — no new buys", description: "Under manual review" },
              { status: "REJECTED", actions: "Exit only — forced redemption", description: "Failed compliance checks" },
            ].map((row, i) => (
              <div key={i} className="bg-slate-900 rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-amber-600/20 text-amber-200 text-sm rounded font-bold">{row.status}</span>
                  <p className="text-slate-300 text-sm font-semibold">{row.actions}</p>
                </div>
                <p className="text-slate-400 text-sm">{row.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Accreditation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded p-6 border-l-4 border-amber-600">
              <h3 className="text-amber-200 font-bold mb-3">Individual Investors</h3>
              <p className="text-slate-300 text-sm">
                Accreditation status per Regulation D (1933 Act). Income and net worth thresholds verified annually.
              </p>
            </div>
            <div className="bg-slate-900 rounded p-6 border-l-4 border-amber-600">
              <h3 className="text-amber-200 font-bold mb-3">Institutional Investors</h3>
              <p className="text-slate-300 text-sm">
                Qualified Institutional Buyer (QIB) status per Rule 144A. $100M+ AUM threshold.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Transfer Controls</h2>
          <p className="text-slate-300 mb-6">
            All token transfers are restricted to KYC/AML-verified counterparties. Secondary market transfers 
            require:
          </p>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Buyer identity verification</li>
            <li>✓ Accreditation re-validation</li>
            <li>✓ Transfer restriction compliance check</li>
            <li>✓ Audit trail logging</li>
            <li>✓ Regulatory notification (if required)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
