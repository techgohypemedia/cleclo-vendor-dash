"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { kpiCards } from "@/lib/content";

function StandardCard({ card, idx, scrollYProgress, totalCards, activeCard, setActiveCard }) {
  // Calculate precise scroll progress range for this card in the pinned sticky scroll
  const stepStart = (idx / totalCards) * 0.72;
  const stepEnd = stepStart + 0.22;

  // Transform opacity, y offset, and scale tied directly to user mouse wheel scroll
  const opacity = useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [stepStart, stepEnd], [60, 0]);
  const scale = useTransform(scrollYProgress, [stepStart, stepEnd], [0.9, 1]);

  const isHovered = activeCard === idx;
  const rotateYAngle = isHovered ? 0 : -8 + idx * 3;
  const rotateXAngle = isHovered ? 0 : 5 - idx * 2;
  const translateYOffset = isHovered ? -16 : (idx % 2 === 1 ? 16 : 0);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      onMouseEnter={() => setActiveCard(idx)}
      onMouseLeave={() => setActiveCard(null)}
      className={`relative group cursor-pointer rounded-[28px] p-7 md:p-8 bg-gradient-to-b from-white to-[#F7FAF6] border transition-all duration-500 ease-out z-10 ${
        isHovered
          ? "border-[#77C36B] shadow-[0_24px_50px_-12px_rgba(30,74,32,0.22)] z-30 -translate-y-4 scale-[1.04]"
          : "border-[#E5ECE3] shadow-[0_16px_36px_-18px_rgba(14,51,49,0.12)] hover:border-[#77C36B]/60"
      }`}
    >
      <div 
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateYAngle}deg) rotateX(${rotateXAngle}deg) translateY(${translateYOffset}px)`,
        }}
      >
        {/* Top Number Badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-9 h-9 rounded-full bg-[#F0F7EE] border border-[#CFE8C7] flex items-center justify-center text-[#1E4A20] font-mono text-xs font-bold group-hover:bg-[#1E4A20] group-hover:text-white transition-colors duration-300">
            0{idx + 1}
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-[#CFE8C7] group-hover:bg-[#77C36B] group-hover:scale-125 transition-all duration-300"></span>
        </div>

        {/* Big Spec Number */}
        <div className="num font-mono font-bold text-3xl md:text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E4A20] to-[#77C36B] mb-3 group-hover:from-[#003434] group-hover:to-[#3E7A3B]">
          {card.num}
        </div>

        {/* Card Title */}
        <h3 className="title font-poppins font-bold text-lg md:text-xl text-[#003434] mb-3 group-hover:text-[#1E4A20]">
          {card.title}
        </h3>

        {/* Description */}
        <p className="desc font-poppins text-sm text-[#51604F] leading-relaxed">
          {card.desc}
        </p>

        {/* Pine Labs Mouse Spotlight Radial Follower */}
        <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(350px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(119,195,107,0.18),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#77C36B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
}

export default function ClecloStandard() {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  // Track scroll progress through this sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[220vh]" id="standard-kpi">
      <div className="sticky top-20 flex flex-col justify-center min-h-[calc(100vh-90px)] wrap overflow-hidden py-8">
        {/* Section Head - Always 100% Visible */}
        <div className="section-head mb-8 md:mb-12 block opacity-100 relative z-20">
          <div className="eyebrow text-xs tracking-widest uppercase font-mono font-semibold text-[#2C5C2E] mb-3 flex items-center gap-2 opacity-100">
            <span className="inline-block w-4 h-[1.5px] bg-[#D3811F]"></span>
            The Cleclo standard, in numbers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#003434] font-poppins opacity-100 leading-tight">
            What &ldquo;standardised&rdquo; actually means for you
          </h2>
        </div>

        {/* 4 Cards Sticky Pinned Scroll Grid */}
        <div className="relative w-full flex items-center justify-center pt-2 pb-6">
          <div 
            className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative"
            style={{ perspective: "1400px" }}
          >
            {kpiCards.map((card, idx) => (
              <StandardCard
                key={card.title}
                card={card}
                idx={idx}
                scrollYProgress={scrollYProgress}
                totalCards={kpiCards.length}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
