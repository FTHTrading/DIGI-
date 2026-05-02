import React from "react";

export default function InvestorDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Portfolio Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Your Holdings</p>
          <p className="text-4xl font-bold text-amber-200">75,500</p>
          <p className="text-slate-300 text-xs mt-2">DIGN tokens</p>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Custody Value</p>
          <p className="text-4xl font-bold text-amber-200">$2,816,250</p>
          <p className="text-slate-300 text-xs mt-2">At current spot</p>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
          <p className="text-slate-400 text-sm mb-2">Annual Custody Fee</p>
          <p className="text-4xl font-bold text-amber-200">$5,633</p>
          <p className="text-slate-300 text-xs mt-2">0.20% p.a. on AUM</p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Buy More Tokens</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">Quantity (DIGN)</label>
              <input
                type="number"
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white"
                placeholder="10,000"
              />
            </div>
            <button className="w-full bg-amber-600 text-white font-bold py-3 rounded hover:bg-amber-700 transition">
              Request Purchase
            </button>
          </div>
        </div>
        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Redeem Tokens</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">Quantity (DIGN)</label>
              <input
                type="number"
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white"
                placeholder="5,000"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Settlement Type</label>
              <select className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white">
                <option>Physical Gold (LBMA AM Fix)</option>
                <option>Cash Settlement</option>
              </select>
            </div>
            <button className="w-full bg-amber-600 text-white font-bold py-3 rounded hover:bg-amber-700 transition">
              Request Redemption
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 border border-amber-600/20 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Recent Transactions</h3>
        <div className="space-y-3">
          <div className="bg-slate-900 rounded p-4 flex justify-between">
            <p className="text-white">Purchase: 25,000 DIGN</p>
            <p className="text-slate-400 text-sm">March 15, 2026</p>
          </div>
          <div className="bg-slate-900 rounded p-4 flex justify-between">
            <p className="text-white">Custody Fee Accrual</p>
            <p className="text-slate-400 text-sm">Monthly</p>
          </div>
          <div className="bg-slate-900 rounded p-4 flex justify-between">
            <p className="text-white">Coverage Verification</p>
            <p className="text-slate-400 text-sm">Daily</p>
          </div>
        </div>
      </section>
    </div>
  );
}
