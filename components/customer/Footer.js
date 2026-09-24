import Image from "next/image";
import { footerColumns, socialLinks } from "@/lib/content";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const iconMap = {
  Instagram: Instagram,
  Twitter: Twitter,
  LinkedIn: Linkedin,
};

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="logo">
              <Image src="/logo.png" alt="Cleclo" width={680} height={171} className="logo-img" />
            </a>
            <p>
              Cleclo brings together technology, standardised processes and verified local
              partners to make dry cleaning more consistent, convenient and reliable — from
              pickup to delivery.
            </p>
            <div className="contact">
              <div>customersupport@cleclo.in</div>
              <div>New Delhi, India</div>
            </div>
            <div className="foot-socials flex items-center gap-3 mt-5" aria-label="Social media links">
              {socialLinks.map((item) => {
                const Icon = iconMap[item.name];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foot-social-link w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    aria-label={item.label || item.name}
                    title={item.name}
                  >
                    {Icon ? <Icon size={18} strokeWidth={2} /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="foot-col" key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map((link) =>
                link.external ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© 2026 Cleclo. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}


