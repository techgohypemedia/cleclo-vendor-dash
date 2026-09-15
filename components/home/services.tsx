import { Shirt, Droplets, Wind, Sparkles, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: "Dry Clean",
      description: "Enable professional dry-cleaning workflows for delicate garments, formal wear and specialty fabrics.",
      features: [
        "Configurable stain treatment workflows.",
        "Fabric specific handling options.",
        "Premium finishing standards.",
      ],
    },
    {
      icon: Droplets,
      title: "Washing",
      description: "Enable standardized washing workflows for everyday garments with configurable processes across fabric types.",
      features: [
        "Fabric-wise and color-based wash segregation.",
        "Detergent, water level and cycle configuration.",
        "Quality checks and freshness controls.",
      ],
    },
    {
      icon: Wind,
      title: "Steam Iron",
      description: "Provide professional pressing and finishing services with controlled turnaround times.",
      features: [
        "Consistent finishing quality.",
        "Fabric-safe temperature controls.",
        "Priority processing options.",
      ],
    },
    {
      icon: Sparkles,
      title: "Premium Care",
      description: "Enable premium-care workflows for luxury garments, designer wear and high-value items.",
      features: [
        "Specialized handling protocols.",
        "Optional value-protection coverage.",
        "Controlled handover and packaging.",
      ],
    },
  ];

  return (
    <section className="section wrap" id="services">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Services &amp; Workflows</div>
        <h2>Services &amp; Standardised Processing Categories</h2>
      </div>

      <div className="svc-grid" data-reveal>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="svc-card flex flex-col h-full justify-start">
              <div className="flex-none flex flex-col mb-6">
                <div className="svc-icon" style={{ background: index === 1 ? "linear-gradient(135deg,var(--brand-light),var(--brand-dark))" : index === 2 ? "var(--pine-2)" : index === 3 ? "var(--brass)" : "var(--pine)", color: index === 1 || index === 2 ? "#fff" : index === 3 ? "var(--pine)" : "var(--brass-dim)" }}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3>{service.title}</h3>
                <p className="min-h-[110px] text-[13.8px] text-[var(--ink-soft)] leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-3 border-t border-[var(--kraft-line)] pt-5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-2 h-[2px] bg-[var(--stamp)] shrink-0 mt-2" />
                    <span className="text-[12.5px] text-[var(--pine-2)] font-mono leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12" data-reveal>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--kraft)] border border-[var(--kraft-line)]">
          <Clock className="w-4 h-4 text-[var(--pine)]" />
          <span className="text-sm font-medium text-[var(--pine)]">
            Priority turnaround options can be configured across all service categories.
          </span>
        </div>
      </div>
    </section>
  );
}
