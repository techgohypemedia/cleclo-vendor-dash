"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { steps } from "@/lib/content";

function StepCard({ step, idx, scrollYProgress, totalSteps }) {
  // Calculate precise scroll progress range for this specific step card
  const stepStart = (idx / totalSteps) * 0.75;
  const stepEnd = stepStart + 0.18;

  // Transform opacity, vertical offset, and scale tied directly to user scroll position
  // NO COLOR CHANGES
  const opacity = useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [stepStart, stepEnd], [36, 0]);
  const scale = useTransform(scrollYProgress, [stepStart, stepEnd], [0.94, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="line-step flex-1 flex flex-col items-start md:items-center text-left md:text-center relative z-10"
    >
      {/* Original Pin Indicator - No color changes */}
      <div className="pin w-[18px] h-[18px] rounded-full bg-[#D3811F] border-[3px] border-white shadow-[0_0_0_1px_#2C5C2E] relative z-20"></div>

      {/* Original Peg Line */}
      <div className="peg w-[1px] h-[22px] bg-[#CFE8C7]"></div>

      {/* Original Step Card - No color changes */}
      <div className="line-card w-full bg-white border border-[#E5ECE3] rounded-[14px] p-5 md:p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md relative overflow-hidden">
        <div className="step-no font-mono text-[11px] font-bold text-[#D3811F] tracking-widest uppercase mb-2">
          {step.stepNo}
        </div>
        <h4 className="font-poppins font-bold text-base text-[#1E4A20] mb-2 leading-snug">
          {step.title}
        </h4>
        <p className="font-poppins text-xs md:text-sm text-[#51604F] leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef(null);

  // Track scroll progress through this sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Timeline track progress line
  const trackLineScaleX = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[240vh]" id="how">
      <div className="sticky top-20 flex flex-col justify-center min-h-[calc(100vh-90px)] wrap py-12">
        {/* Header - Always 100% visible */}
        <div className="section-head mb-8 md:mb-12">
          <div className="eyebrow text-xs tracking-widest uppercase font-mono font-semibold text-[#2C5C2E] mb-2 flex items-center gap-2">
            <span className="inline-block w-4 h-[1.5px] bg-[#D3811F]"></span>
            Getting started
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E4A20] font-poppins mb-3">
            One standard. Built into every step.
          </h2>
          <p className="lede text-base md:text-lg text-[#51604F] max-w-2xl font-poppins">
            Five steps, the same for every order — from the moment you book to the moment it&apos;s
            back in your hands.
          </p>
        </div>

        {/* 5-Step Sticky Pinned Scroll Section */}
        <div className="line-wrap relative pt-4">
          <div className="line-track relative flex flex-col md:flex-row justify-between gap-6 md:gap-4">
            {/* Timeline Line Base Track */}
            <div className="hidden md:block absolute left-4 right-4 top-[9px] h-[2px] bg-[#E5ECE3] z-0"></div>

            {/* Timeline Line Active Progress Line */}
            <motion.div
              style={{ scaleX: trackLineScaleX }}
              className="hidden md:block absolute left-4 right-4 top-[9px] h-[2px] bg-[#2C5C2E] origin-left z-0"
            ></motion.div>

            {steps.map((step, idx) => (
              <StepCard
                key={step.stepNo}
                step={step}
                idx={idx}
                scrollYProgress={scrollYProgress}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
