import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how" },
      { label: "Demo", href: "#demo" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Press Kit", href: "#press" },
    ],
    Support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Us", href: "#contact" },
      { label: "Status", href: "#status" },
      { label: "API Docs", href: "#docs" },
    ],
    Legal: [
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Vendor Agreement", href: "#vendor-agreement" },
    ],
  };

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <Image src="/logo.png" alt="Cleclo" width={680} height={171} className="logo-img" />
            </Link>
            <p>
              Empowering laundry vendors with smart technology to scale their
              business efficiently with verified local partners and standardized processes.
            </p>
            <div className="contact">
              <div>support@cleclo.com</div>
              <div>+91 98XXX XXXXX</div>
              <div>New Delhi, India</div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="foot-col" key={title}>
              <h4>{title}</h4>
              {links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} Cleclo. All rights reserved.</span>
          <span>Made by Go Hype Media.</span>
        </div>
      </div>
    </footer>
  );
}
