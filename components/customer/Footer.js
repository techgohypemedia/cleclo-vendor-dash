import Image from "next/image";
import { footerColumns } from "@/lib/content";

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
