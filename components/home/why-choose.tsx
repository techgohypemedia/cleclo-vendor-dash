import {
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Headphones,
  Award,
} from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Increased Order Volume",
      description: "Gain access to a growing network of customers actively seeking professional laundry services in your service area.",
    },
    {
      icon: BarChart3,
      title: "Smart Automation",
      description: "Automated order routing, delivery workflows and customer updates, significantly reducing manual coordination.",
    },
    {
      icon: Target,
      title: "Location-Based Assignment",
      description: "Orders are intelligently routed to the most suitable outlet based on proximity and availability.",
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description: "Scale from a single outlet to a multi-location operation with systems designed to support high-volume growth.",
    },
    {
      icon: Headphones,
      title: "Platform Reliability",
      description: "Built on robust infrastructure with high availability to ensure uninterrupted operations.",
    },
    {
      icon: Award,
      title: "Vendor Recognition",
      description: "High-performing vendors may receive enhanced visibility, performance badges and platform recognition.",
    },
  ];

  return (
    <section className="section wrap" id="why-choose">
      <div className="section-head" data-reveal>
        <div className="eyebrow">JOIN RAPIDLY GROWING VENDOR NETWORK</div>
        <h2>Why Vendors Choose Cleclo</h2>
        <p className="lede">
          Join thousands of laundry vendors already growing their business with Cleclo.
        </p>
      </div>

      <div className="svc-grid" data-reveal>
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <div key={index} className="svc-card">
              <div className="svc-icon" style={{ background: index % 2 === 0 ? "var(--pine)" : "var(--pine-2)", color: index % 2 === 0 ? "var(--brass-dim)" : "var(--steam)" }}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          );
        })}
      </div>
      
      <div className="eco-closing" data-reveal style={{ marginTop: '56px' }}>
        <p>Join rapidly growing laundry and drycleaning vendor network who trust Cleclo.</p>
        <p style={{ fontSize: '14.5px', color: 'var(--ink-soft)' }}>Designed for long-term partnerships, not short-term transactions.</p>
      </div>
    </section>
  );
}
