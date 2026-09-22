"use client";

import { useEffect } from "react";

// Renders nothing — just wires up the same fade-in-on-scroll behaviour
// the static site used, so every element with a data-reveal attribute
// animates into view once, the first time it crosses the viewport.
export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("[data-reveal]");

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
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      targets.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    targets.forEach((el) => el.classList.add("in-view"));
  }, []);

  return null;
}
