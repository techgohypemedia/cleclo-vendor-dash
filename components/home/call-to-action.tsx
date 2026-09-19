import Link from "next/link";
import { Rocket, Phone, Check } from "lucide-react";

export default function CallToAction() {
  const highlights = [
    "No Credit Card Required",
    "Free Forever Plan",
    "Setup in Minutes",
    "Cancel Anytime",
  ];

  return (
    <section className="section wrap" id="cta">
      <div className="download-band" data-reveal>
        <div>
          <div className="eyebrow" style={{ color: "var(--brass-dim)" }}>
            Get Started Today
          </div>
          <h2>Ready to Scale Your Business Faster?</h2>
          <p>
            Join Cleclo and start receiving orders through a structured, automated
            platform built to help laundry vendors scale without operational
            complexity.
          </p>
          <div className="download-ctas flex flex-col sm:flex-row gap-3.5 mt-6 w-full sm:w-auto">
            <Link 
              href="/signup" 
              className="btn btn-primary justify-center w-full sm:w-auto" 
              style={{ background: "var(--brass)", color: "var(--pine)" }}
            >
              <Rocket className="w-4 h-4 mr-2 shrink-0" />
              Become a Cleclo Vendor
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-ghost justify-center w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              Talk to Sales
            </Link>
          </div>
        </div>

        <div className="qr-box w-full sm:w-auto flex flex-col gap-3.5 text-left p-6 sm:p-7 rounded-2xl" style={{ minWidth: '240px', background: 'var(--steam)', color: 'var(--pine)' }}>
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold text-[14px]">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--steam-dim)", color: "var(--pine)" }}
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
