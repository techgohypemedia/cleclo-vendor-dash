"use client";

import { useEffect } from "react";

// Wires up Pine Labs style fade-in-on-scroll and staggered reveal animations.
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Automatically assign data-reveal and staggered delays to key section elements
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

    const autoTargets = document.querySelectorAll(autoSelectors.join(", "));
    autoTargets.forEach((el, idx) => {
      if (!el.hasAttribute("data-reveal") && !el.classList.contains("FadeInUp") && !el.classList.contains("MaskedReveal")) {
        el.setAttribute("data-reveal", "");
      }
      // Calculate subtle staggered delay for siblings
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((child) => child.hasAttribute("data-reveal") || autoSelectors.some((s) => child.matches(s)));
        const siblingIdx = siblings.indexOf(el);
        if (siblingIdx > 0) {
          el.style.setProperty("--reveal-delay", `${siblingIdx * 90}ms`);
        }
      }
    });

    // Attach interactive mouse-spotlight listener to cards like Pine Labs
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

    const targets = document.querySelectorAll("[data-reveal], .FadeInUp, .MaskedReveal");

    if (!prefersReduced && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach((el) => io.observe(el));
      return () => {
        io.disconnect();
        spotlightCards.forEach((card) => {
          card.removeEventListener("mousemove", handleMouseMove);
        });
      };
    }

    targets.forEach((el) => el.classList.add("in-view"));
    return () => {
      spotlightCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return null;
}
