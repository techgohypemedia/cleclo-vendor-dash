"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link href="#top" className="logo">
          <Image src="/logo.png" alt="Cleclo" width={680} height={171} className="logo-img" priority />
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta" style={{ display: 'flex', gap: '10px' }}>
          <Link href="/login" className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13.5px' }}>
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13.5px' }}>
            Become a Partner
          </Link>
        </div>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-panel${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '22px' }}>
          <Link href="/login" className="btn btn-ghost" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Become a Partner
          </Link>
        </div>
      </div>
    </header>
  );
}
