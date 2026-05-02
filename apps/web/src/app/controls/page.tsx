import React from "react";

export default function ControlsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Governance Controls</h1>
        <p className="text-amber-200 mb-12">Four-eyes principle as unbypassable system invariant</p>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Four-Eyes Principle</h2>
          <p className="text-slate-300 mb-6">
            The separation of duties is not a policy. It is a system invariant — embedded at the API layer, 
            unenforced by any user including board directors or system administrators, and verified at every approval.
          </p>
          <div className="bg-slate-900 border border-amber-600/20 rounded p-4 mb-6">
            <code className="text-amber-200 text-sm">
              ⚠️ No administrative override. No emergency bypass. Identity ≠ Requestor enforced at API level.
            </code>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Approval Workflows</h2>
          <div className="space-y-4">
            {[
              { action: "Token Mint", proposer: "Treasury Officer", approver: "Board Director", expiry: "72 hrs" },
              { action: "Token Redemption", proposer: "Treasury Officer", approver: "Board Director", expiry: "72 hrs" },
              { action: "Venue Toggle", proposer: "Market Ops", approver: "Board Director", expiry: "48 hrs" },
              { action: "Reserve Report", proposer: "Treasury Officer", approver: "Board Director", expiry: "120 hrs" },
              { action: "Reserve Lot Addition", proposer: "Treasury Officer", approver: "Board Director", expiry: "72 hrs" },
              { action: "Investor Override", proposer: "Compliance Officer", approver: "Board Director", expiry: "24 hrs" },
            ].map((workflow) => (
              <div key={workflow.action} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-200 mb-3">{workflow.action}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Proposer</p>
                    <p className="text-white font-semibold">{workflow.proposer}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Approver</p>
                    <p className="text-white font-semibold">{workflow.approver}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Expiry</p>
                    <p className="text-white font-semibold">{workflow.expiry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Audit Chain Verification</h2>
          <p className="text-slate-300 mb-6">
            Every approval is logged to the SHA-256 hash-chained audit log. Any retroactive alteration breaks 
            the chain and is immediately detectable by any verifier.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>✓ Action category + enumerated type</li>
            <li>✓ Actor identity + role</li>
            <li>✓ Before/after state diff</li>
            <li>✓ SHA-256 hash chained to previous event</li>
            <li>✓ Tamper-evident: any modification breaks chain integrity</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
