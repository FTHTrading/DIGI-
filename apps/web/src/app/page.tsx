import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          DIGNITY
        </h1>
        <p className="text-xl text-amber-200 mb-8">
          Institutional Gold-Backed Digital Securities Operating Platform
        </p>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Reserve-backed · Board-governed · Audit-chained · Four-eyes enforced · MCP agent-native
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/platform"
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            Platform Overview
          </a>
          <a
            href="/leadership"
            className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
          >
            Board of Directors
          </a>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12 max-w-7xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-lg border border-amber-600/20">
          <h3 className="text-amber-200 text-lg font-semibold mb-2">15 Packages</h3>
          <p className="text-slate-300">Institutional infrastructure modules</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-amber-600/20">
          <h3 className="text-amber-200 text-lg font-semibold mb-2">21 MCP Tools</h3>
          <p className="text-slate-300">Agent-native operations layer</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-amber-600/20">
          <h3 className="text-amber-200 text-lg font-semibold mb-2">4-Eyes Enforced</h3>
          <p className="text-slate-300">Separation of duties at API level</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-amber-600/20">
          <h3 className="text-amber-200 text-lg font-semibold mb-2">SHA-256 Audit</h3>
          <p className="text-slate-300">Hash-chained immutable ledger</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Institutional Diligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a href="/proof" className="group">
            <div className="bg-slate-800 p-8 rounded-lg border border-amber-600/20 group-hover:border-amber-600/50 transition">
              <h3 className="text-amber-200 font-bold mb-2">Proof Center</h3>
              <p className="text-slate-300">Real-time reserve verification</p>
            </div>
          </a>
          <a href="/documents" className="group">
            <div className="bg-slate-800 p-8 rounded-lg border border-amber-600/20 group-hover:border-amber-600/50 transition">
              <h3 className="text-amber-200 font-bold mb-2">Documents</h3>
              <p className="text-slate-300">5 institutional PDFs</p>
            </div>
          </a>
          <a href="/controls" className="group">
            <div className="bg-slate-800 p-8 rounded-lg border border-amber-600/20 group-hover:border-amber-600/50 transition">
              <h3 className="text-amber-200 font-bold mb-2">Governance</h3>
              <p className="text-slate-300">Four-eyes approval workflows</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
