import React from "react";

export default function DocumentsPage() {
  const documents = [
    {
      title: "Executive Summary",
      id: "DIG-ES-2026-001",
      classification: "Confidential — QII Only",
      description: "High-level platform overview, business model, and institutional positioning",
    },
    {
      title: "Proof of Reserve Report",
      id: "DIG-POR-2026-001",
      classification: "Confidential — QII Only",
      description: "Real-time reserve verification, coverage ratio, and custodian attestation",
    },
    {
      title: "Investor Prospectus & Token Economics",
      id: "DIG-IP-2026-001",
      classification: "Confidential — QII Only",
      description: "Token specifications, issuance mechanics, redemption rights, and fee structure",
    },
    {
      title: "Governance & Compliance Framework",
      id: "DIG-GCF-2026-001",
      classification: "Confidential — QII Only",
      description: "Board governance, approval workflows, KYC/AML procedures, and audit trail design",
    },
    {
      title: "Technology & Infrastructure Brief",
      id: "DIG-TB-2026-001",
      classification: "Confidential — QII Only",
      description: "14-package monorepo, MCP tool catalog, security architecture, and deployment model",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Institutional Documents</h1>
        <p className="text-amber-200 mb-4">Five comprehensive PDF documents for qualified institutional review</p>
        <p className="text-slate-400 text-sm mb-12">All documents are Confidential — QII (Qualified Institutional Investors) Only</p>

        <div className="space-y-4">
          {documents.map((doc, i) => (
            <div key={doc.id} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6 hover:border-amber-600/50 transition">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-amber-200">{doc.title}</h3>
                  <p className="text-slate-400 text-sm">{doc.id}</p>
                </div>
                <span className="px-3 py-1 bg-amber-600/20 text-amber-200 text-xs rounded font-semibold">
                  {doc.classification}
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-4">{doc.description}</p>
              <button className="px-4 py-2 bg-amber-600 text-white text-sm font-bold rounded hover:bg-amber-700 transition">
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <section className="mt-12 bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Design & Typography</h2>
          <p className="text-slate-300 mb-6">
            All documents use the Dignity institutional design system:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-2">Palette</p>
              <p className="text-white">Obsidian dark + gold accents</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-2">Typography</p>
              <p className="text-white">Institutional serif headers</p>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <p className="text-slate-400 text-sm mb-2">Format</p>
              <p className="text-white">PDF with embedded proofs</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
