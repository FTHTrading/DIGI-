import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Institutional Inquiry</h1>
        <p className="text-amber-200 mb-12">Partnership and engagement inquiries from qualified institutions</p>

        <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-8 mb-8">
          <form className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Organization Name</label>
              <input
                type="text"
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-600 focus:outline-none"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Contact Name</label>
              <input
                type="text"
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-600 focus:outline-none"
                placeholder="Contact name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-600 focus:outline-none"
                placeholder="contact@organization.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Inquiry Type</label>
              <select className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-600 focus:outline-none">
                <option>Investor Participation</option>
                <option>Custodian Partnership</option>
                <option>Market Maker Engagement</option>
                <option>Technology Integration</option>
                <option>Regulatory Engagement</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:border-amber-600 focus:outline-none"
                placeholder="Describe your interest in Dignity..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-bold py-3 rounded hover:bg-amber-700 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-200 mb-3">Response Time</h3>
            <p className="text-slate-300 text-sm">
              Qualified institutional inquiries receive a response within 1 business day from the board liaison.
            </p>
          </div>
          <div className="bg-slate-800 border border-amber-600/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-200 mb-3">Confidentiality</h3>
            <p className="text-slate-300 text-sm">
              All inquiries are handled under NDA. Documentation requests are subject to investor accreditation review.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
