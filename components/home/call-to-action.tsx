import Link from "next/link";
import { Rocket, Phone, Check, ShieldCheck } from "lucide-react";

export default function CallToAction() {
  const highlights = [
    "No Credit Card Required",
    "Free Forever Plan",
    "Setup in Minutes",
    "Cancel Anytime",
  ];

  return (
    <section className="section wrap" id="cta">
      <div 
        className="download-band relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        style={{
          background: "linear-gradient(135deg, #1E4A20 0%, #113113 100%)",
          boxShadow: "0 20px 50px -15px rgba(19, 49, 21, 0.4)",
        }}
        data-reveal
      >
        {/* Subtle decorative background glow */}
        <div 
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-20 blur-3xl" 
          style={{ background: "var(--brass)" }} 
        />
        <div 
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-15 blur-3xl" 
          style={{ background: "#7bc96f" }} 
        />

        <div className="relative z-10 max-w-xl text-center md:text-left">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ background: "rgba(224, 166, 61, 0.15)", color: "var(--brass-dim)", border: "1px solid rgba(224, 166, 61, 0.3)" }}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
            Ready to Scale Your Business Faster?
          </h2>

          <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(234, 244, 231, 0.9)" }}>
            Join Cleclo and start receiving orders through a structured, automated platform built to help laundry vendors scale without operational complexity.
          </p>

          <div className="download-ctas flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <Link 
              href="/signup" 
              className="btn justify-center w-full sm:w-auto font-semibold px-6 py-3.5 rounded-full transition-all duration-200"
              style={{ 
                background: "linear-gradient(135deg, #E0A63D 0%, #D3811F 100%)", 
                color: "#17231A",
                boxShadow: "0 10px 25px -5px rgba(224, 166, 61, 0.4)",
              }}
            >
              <Rocket className="w-4 h-4 mr-2 shrink-0" />
              <span>Become a Cleclo Vendor</span>
            </Link>

            <Link 
              href="/contact" 
              className="btn justify-center w-full sm:w-auto font-semibold px-6 py-3.5 rounded-full transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              <span>Talk to Sales</span>
            </Link>
          </div>
        </div>

        {/* Right Feature Card */}
        <div 
          className="relative z-10 w-full md:w-auto shrink-0 p-6 sm:p-7 rounded-2xl flex flex-col gap-4 text-left shadow-xl"
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            minWidth: "260px",
          }}
        >
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#E9F5E6", color: "#1E4A20" }}
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-sm font-semibold text-slate-800" style={{ color: "#17231A" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
