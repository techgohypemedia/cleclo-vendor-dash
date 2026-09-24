import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cleclo.in",
    label: "Follow us on Instagram",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cleclo_in",
    label: "Follow us on Twitter / X",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cleclo",
    label: "Connect with us on LinkedIn",
    icon: Linkedin,
  },
];

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how" },
      { label: "Demo", href: "#demo" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
    Support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Us", href: "#contact" },
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
              Powering laundry businesses with smart technology, new customer opportunities, and streamlined operations &mdash; all through one structured platform.
            </p>
            <div className="contact">
              <div>Vendorsupport@cleclo.in</div>
              <div>New Delhi, India</div>
            </div>
            <div className="foot-socials flex items-center gap-3 mt-5" aria-label="Social media links">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foot-social-link w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    aria-label={item.label}
                    title={item.name}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                );
              })}
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
        </div>
      </div>
    </footer>
  );
}


