import React from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What makes Dignity different from other tokenized gold projects?",
      a: "Dignity is not a cryptocurrency project. It is a regulated operating infrastructure for institutional gold-backed securities, built to capital markets standards from first principles with four-eyes governance, real-time reserve verification, and full compliance tooling.",
    },
    {
      q: "How is the reserve verified?",
      a: "Every physical gold holding is registered as a Reserve Lot with LBMA bar reference, custodian identity, and cryptographic status. Coverage ratio is enforced at the API level — issuance is blocked if it would breach 1.000. Monthly custodian attestations are logged to the immutable audit chain.",
    },
    {
      q: "What is the four-eyes principle?",
      a: "Separation of duties is enforced at the API layer as an unbypassable system invariant. No approval action can be completed by the same actor who initiated the request. There is no administrative override or emergency bypass.",
    },
    {
      q: "How do I become a token holder?",
      a: "Token holders must pass KYC/AML screening and meet accreditation requirements (Regulation D for individuals, Rule 144A for institutions). All checks are logged to the audit chain.",
    },
    {
      q: "Can I redeem physical gold?",
      a: "Yes. Token holders have the right to redeem either physical gold at LBMA AM fix or cash equivalent. Redemptions are processed through the treasury and logged to the audit chain.",
    },
    {
      q: "What is the MCP tool mesh?",
      a: "Dignity exposes 21 tools across 7 operational domains (audit, reserve, token, approval, compliance, market, analytics) as Model Context Protocol tools. This enables agent-native governance and execution.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h1>
        <p className="text-amber-200 mb-12">Common questions about Dignity, reserve backing, and token mechanics</p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6 group">
              <summary className="cursor-pointer flex justify-between items-start">
                <h3 className="text-lg font-bold text-amber-200">{faq.q}</h3>
                <span className="text-amber-200 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-300 mt-4">{faq.a}</p>
            </details>
          ))}
        </div>

        <section className="mt-12 bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Didn't find your answer?</h2>
          <p className="text-slate-300 mb-6">
            For additional questions or technical inquiries, please reach out through our institutional contact form.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-amber-600 text-white font-bold rounded hover:bg-amber-700 transition">
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
}
