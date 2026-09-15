import {
  Package,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Clock,
  IndianRupee,
} from "lucide-react";

export default function VendorBenefits() {
  const benefits = [
    {
      icon: Package,
      title: "Multi-Outlet Management",
      description: "Centrally manage multiple outlets, vendors and processing units with real-time visibility across orders, capacity and performance.",
    },
    {
      icon: MapPin,
      title: "Smart Order Assignment",
      description: "Automatically route orders based on location, capacity, turnaround time and predefined business rules.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Actionable analytics on revenue, order volume, outlet performance and customer trends- updated in real time.",
    },
    {
      icon: Shield,
      title: "Verification System",
      description: "Built-in vendor and rider verification with audit trails to ensure compliance, service quality and operational accountability.",
    },
    {
      icon: BarChart3,
      title: "Revenue Dashboard",
      description: "Monitor revenue, commissions, payouts and margins across outlets- with complete financial transparency.",
    },
    {
      icon: Zap,
      title: "Flexible Delivery Workflows",
      description: "Configure standard and priority delivery workflows with SLA tracking to meet different service commitments.",
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "Configurable pricing rules with automatic GST calculation, invoicing and tax-ready reporting.",
    },
    {
      icon: Clock,
      title: "24/7 Platform Availability",
      description: "Orders, tracking and system workflows remain active 24/7, ensuring uninterrupted operations across outlets.",
    },
  ];

  return (
    <section className="section wrap" id="features">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Why Choose Us</div>
        <h2>Purpose Built Tools to Manage Operations and Scale Your Laundry Business.</h2>
        <p className="lede">
          Ideal for independent laundry owners, multi-outlet operators and backend vendors.
        </p>
      </div>

      <div className="svc-grid" data-reveal>
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className="svc-card">
              <div className="svc-icon">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
