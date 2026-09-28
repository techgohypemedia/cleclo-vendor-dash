"use client";

import { useEffect } from "react";

// Pine Labs style scroll reveal and spotlight animation controller
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const autoSelectors = [
      "section .section-head",
      "section h2",
      ".kpi-card",
      ".svc-card",
      ".ticket",
      ".cov-card",
      ".eco-card",
      ".download-band",
      ".faq-item",
      ".std-col",
      ".verify-card"
    ];

    // Automatically tag targets with data-reveal and staggered delays
    const autoTargets = document.querySelectorAll(autoSelectors.join(", "));
    autoTargets.forEach((el) => {
      if (!el.hasAttribute("data-reveal") && !el.classList.contains("FadeInUp") && !el.classList.contains("MaskedReveal")) {
        el.setAttribute("data-reveal", "");
      }
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(
          (child) => child.hasAttribute("data-reveal") || autoSelectors.some((s) => child.matches(s))
        );
        const siblingIdx = siblings.indexOf(el);
        if (siblingIdx > 0) {
          el.style.setProperty("--reveal-delay", `${siblingIdx * 100}ms`);
        }
      }
    });

    // Attach interactive mouse spotlight glow to cards
    const spotlightCards = document.querySelectorAll(
      ".kpi-card, .svc-card, .ticket, .cov-card, .eco-card, .verify-card"
    );
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    spotlightCards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    let io;
    // Delay observer registration by a tick so initial opacity: 0 state is painted by browser
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll("[data-reveal], .FadeInUp, .MaskedReveal");

      if (!prefersReduced && "IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
        );
        targets.forEach((el) => io.observe(el));
      } else {
        targets.forEach((el) => el.classList.add("in-view"));
      }
    }, 60);

    return () => {
      clearTimeout(timer);
      if (io) io.disconnect();
      spotlightCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return null;
}
