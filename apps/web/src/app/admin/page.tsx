import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Board Operations Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Pending Approvals</p>
          <p className="text-4xl font-bold text-amber-200">3</p>
          <p className="text-slate-300 text-xs mt-2">Last 24 hours</p>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Coverage Ratio</p>
          <p className="text-4xl font-bold text-green-400">1.045</p>
          <p className="text-slate-300 text-xs mt-2">+4.5% buffer</p>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Active Investors</p>
          <p className="text-4xl font-bold text-blue-400">24</p>
          <p className="text-slate-300 text-xs mt-2">Accredited</p>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Audit Events</p>
          <p className="text-4xl font-bold text-purple-400">847</p>
          <p className="text-slate-300 text-xs mt-2">Chain verified</p>
        </div>
      </div>

      <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Pending Approvals</h3>
        <div className="space-y-4">
          <div className="bg-slate-900 rounded p-4 flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">Mint Request #1024</p>
              <p className="text-slate-400 text-sm">Treasury Officer initiated • 500,000 DIGN</p>
            </div>
            <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">Approve</button>
          </div>
          <div className="bg-slate-900 rounded p-4 flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">Redemption Request #1025</p>
              <p className="text-slate-400 text-sm">Treasury Officer initiated • 250,000 DIGN (physical)</p>
            </div>
            <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">Approve</button>
          </div>
          <div className="bg-slate-900 rounded p-4 flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">Reserve Report Publication</p>
              <p className="text-slate-400 text-sm">Treasury Officer initiated • Monthly proof report</p>
            </div>
            <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">Approve</button>
          </div>
        </div>
      </section>
    </div>
  );
}
