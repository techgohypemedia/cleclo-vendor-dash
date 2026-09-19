import Link from "next/link";
import { Rocket, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="section wrap" id="cta">
      <div className="download-band" data-reveal>
        <div>
          <div className="eyebrow" style={{ color: "var(--brass-dim)" }}>
            Get started today
          </div>
          <h2>Ready to Scale Your Business Faster?</h2>
          <p>
            Join Cleclo and start receiving orders through a structured, automated
            platform built to help laundry vendors scale without operational
            complexity.
          </p>
          <div className="download-ctas flex flex-col sm:flex-row gap-3.5 mt-6 w-full sm:w-auto">
            <Link href="/signup" className="btn btn-primary justify-center w-full sm:w-auto" style={{ background: "var(--brass)", color: "var(--pine)" }}>
              <Rocket className="w-4 h-4 mr-2 shrink-0" />
              Become a Cleclo Vendor
            </Link>
            <Link href="/contact" className="btn btn-ghost justify-center w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              Talk to Sales
            </Link>
          </div>
        </div>
        <div className="qr-box w-full sm:w-auto flex flex-col gap-3.5 text-left p-6 sm:p-7 rounded-2xl bg-[var(--steam)] text-[var(--pine)]" style={{ minWidth: '240px' }}>
          {[
            "No Credit Card Required",
            "Free Forever Plan",
            "Setup in Minutes",
            "Cancel Anytime",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 font-medium text-[13.5px]">
              <svg width="16" height="16" className="w-4 h-4 shrink-0 text-[var(--pine)] flex-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
