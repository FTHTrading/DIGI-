import React from "react";

export default function LeadershipPage() {
  const board = [
    {
      name: "David Weild IV",
      title: "Chairman",
      domain: "Investment Banking · NASDAQ JOBS Act",
      bio: "Former Vice Chairman of NASDAQ and architect of the JOBS Act",
      icon: "🏛",
    },
    {
      name: "Richard Allen Perkins",
      title: "Director",
      domain: "Legal · Securities Law",
      bio: "Securities law compliance and regulatory filing obligations",
      icon: "⚖️",
    },
    {
      name: "Randy Rowe",
      title: "Director",
      domain: "Capital Markets · Institutional Trading",
      bio: "Capital markets execution strategy and market maker coordination",
      icon: "📈",
    },
    {
      name: "Todd Reiter",
      title: "Director",
      domain: "Technology · Infrastructure",
      bio: "Platform architecture decisions and security posture governance",
      icon: "🖥",
    },
    {
      name: "Dr. Michael Repass",
      title: "Director",
      domain: "Clinical Governance · Evidence Based",
      bio: "Applies evidence hierarchy of clinical governance to compliance",
      icon: "🔬",
    },
    {
      name: "Dr. Dana Hardin",
      title: "Director",
      domain: "Scientific Review · Reserve Verification",
      bio: "Scientific authority for reserve verification and mining disclosure",
      icon: "⛏",
    },
    {
      name: "Angeline Cardinal Bendle",
      title: "Director",
      domain: "Community Sovereignty · Indigenous Rights",
      bio: "Cultural sovereignty principles in platform governance",
      icon: "🌿",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Board of Directors</h1>
        <p className="text-amber-200 mb-12">Distinguished institutional governance and technical expertise</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {board.map((member) => (
            <div key={member.name} className="bg-slate-800 border border-amber-600/20 rounded-lg p-6 hover:border-amber-600/50 transition">
              <div className="text-3xl mb-3">{member.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-200 text-sm font-semibold mb-1">{member.title}</p>
              <p className="text-slate-400 text-xs mb-3">{member.domain}</p>
              <p className="text-slate-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-slate-800 border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Governance Philosophy</h2>
          <p className="text-slate-300 mb-6">
            The Dignity platform is operated under the oversight of a distinguished board reflecting 
            decades of experience across capital markets, regulatory policy, technology, and institutional infrastructure.
          </p>
          <p className="text-slate-300">
            Each director brings specific domain expertise paired directly with the platform package or operational 
            layer they oversee. This creates accountability at every level: board members are not advisory — they are 
            operationally responsible for the systems within their domain.
          </p>
        </section>
      </div>
    </main>
  );
}
