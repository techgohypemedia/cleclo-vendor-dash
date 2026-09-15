export default function StatsSection() {
  const stats = [
    {
      value: "₹5Cr+",
      label: "Revenue Processed",
      description: "Monthly Transactions",
    },
    {
      value: "1000+",
      label: "Active Vendors",
      description: "Transacting Partners",
    },
    {
      value: "98%",
      label: "Partner Satisfaction Score",
      description: "Happy Vendors",
    },
  ];

  return (
    <section className="section wrap" id="stats">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Cleclo By The Numbers</div>
        <h2>Scale Your Business with Confidence</h2>
      </div>
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {stats.map((stat, index) => (
          <div className="kpi-card" data-reveal key={index}>
            <span className="hole"></span>
            <div className="num">{stat.value}</div>
            <div className="title">{stat.label}</div>
            <div className="desc">{stat.description}</div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 pt-8 border-t border-[var(--line)]" data-reveal>
        {[
          "Secured Payments",
          "GSTIN Verified",
          "ISO Certified",
          "24/7 Vendor Support",
        ].map((badge, i) => (
          <div key={i} className="flex items-center gap-2 text-[var(--ink-soft)] text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-[var(--stamp)]" />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
