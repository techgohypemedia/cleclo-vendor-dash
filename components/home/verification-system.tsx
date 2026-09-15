"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Truck,
  Store,
  CheckCircle,
  Camera,
  Package,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function VerificationSystem() {
  const steps = [
    {
      icon: User,
      badge: Camera,
      title: "Customer Confirmation",
      description:
        "Order details and item condition are digitally recorded at initiation, creating a reference point for the entire service lifecycle.",
    },
    {
      icon: Truck,
      badge: Package,
      title: "Pickup Verification",
      description:
        "Items are verified at pickup to ensure consistency with recorded order details, establishing a secure handover.",
    },
    {
      icon: Store,
      badge: CheckCircle,
      title: "Vendor Intake Verification",
      description:
        "Items are validated at the processing stage to confirm condition, service scope and handling requirements before execution.",
    },
  ];

  return (
    <section className="section wrap" id="verification">
      <div className="verify-block">
        <div className="verify-head" data-reveal>
          <div className="eyebrow mx-auto flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            Trust &amp; Safety
          </div>
          <h3>3-Step Order Verification System</h3>
          <p>
            A built-in verification framework that ensures accountability,
            reduces disputes and maintains service quality across every order.
          </p>
        </div>

        <div className="verify-grid" data-reveal>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const BadgeIcon = step.badge;

            return (
              <div key={index} style={{ display: 'contents' }}>
                <div className="verify-card">
                  <div className="vnum">{index + 1}</div>
                  <div className="verify-icon bg-[var(--pine)] text-[var(--brass-dim)]">
                    <IconComponent className="w-6 h-6" />
                    <div className="badge">
                      <BadgeIcon className="w-3 h-3 text-[var(--stamp)]" />
                    </div>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="verify-arrow">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="verify-callout" data-reveal>
          <CheckCircle className="w-5 h-5 text-[var(--pine)]" />
          <span>
            Helps reduce order disputes by up to <b>90% through transparent and auditable workflows.</b>
          </span>
        </div>
      </div>
    </section>
  );
}
