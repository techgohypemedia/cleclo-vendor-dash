export default function StatsSection() {
  const cards = [
    {
      step: "01",
      tag: "More Customer Reach",
      title: "Access New Customers",
      description:
        "Connect with customers beyond your existing neighbourhood and expand your business reach.",
    },
    {
      step: "02",
      tag: "Smarter Operations",
      title: "Technology That Works for You",
      description:
        "Simplified order management, tracking and operations through one connected platform.",
    },
    {
      step: "03",
      tag: "Built for Growth",
      title: "Focus on What You Do Best",
      description:
        "Cleclo helps bring the business, while you focus on quality, service and timely fulfilment.",
    },
  ];

  return (
    <section className="section wrap" id="stats">
      <div className="section-head" data-reveal>
        <div className="eyebrow">BUILT FOR LAUNDRY PARTNERS</div>
        <h2>Grow Your Business. The Smarter Way.</h2>
      </div>
      <div className="kpi-grid">
        {cards.map((card, index) => (
          <div className="kpi-card flex flex-col justify-between" data-reveal key={index}>
            <span className="hole"></span>
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="num" style={{ fontSize: "28px" }}>{card.step}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--pine-2)] bg-[var(--steam)] px-2.5 py-1 rounded-full border border-[var(--kraft-line)]">
                  {card.tag}
                </span>
              </div>
              <div className="title" style={{ marginTop: "4px" }}>{card.title}</div>
              <div className="desc">{card.description}</div>
            </div>
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
