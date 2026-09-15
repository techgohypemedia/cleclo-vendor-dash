import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Who It's For: Independent Laundry Owners, Multi Outlet Operators, Backend Vendor Partners, Franchise Owners</div>
          <h1>
            Transform Your Laundry Business Into a<br />
            <em>Scalable Profit Machine.</em>
          </h1>
          <p className="sub">
            Automate orders, track operations in real time and manage deliveries and payments from one unified platform.
          </p>

          <div className="hero-ctas">
            <Link href="/signup" className="btn btn-primary">
              <Play className="w-5 h-5 mr-2" />
              See How Cleclo Works
            </Link>
            <Link href="/signup" className="btn btn-ghost">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="hero-note">Powering leading laundry partners in Delhi NCR & Tier-1 cities.</p>

          <div className="trust-row">
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              5000+ Vendors
            </div>
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              4.9/5 Average Vendor Rating
            </div>
          </div>
        </div>

        <div className="seal-wrap">
          <svg className="seal-spin" viewBox="0 0 320 320">
            <defs>
              <path id="sealCircle" d="M160,160 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" />
            </defs>
            <circle cx="160" cy="160" r="150" fill="none" stroke="var(--kraft-line)" strokeWidth="1" />
            <circle cx="160" cy="160" r="128" fill="none" stroke="var(--brass)" strokeWidth="1.4" strokeDasharray="2 6" />
            <text style={{ fontFamily: "var(--font-mono)" }} fontSize="12.5" letterSpacing="3" fill="var(--pine-2)">
              <textPath href="#sealCircle" startOffset="0%">
                INDEPENDENT OWNERS • MULTI OUTLET OPERATORS • BACKEND VENDORS •
              </textPath>
            </text>
          </svg>
          <div className="seal-center">
            <div className="num">24/7</div>
            <div className="lbl">PLATFORM AVAILABILITY</div>
            <div className="lbl2">SCALABLE OPERATIONS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
