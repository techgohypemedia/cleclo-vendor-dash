"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { comparison } from "@/lib/content";

// Helper component to reveal bullet point items one-by-one as user scrolls
function ScrollBullet({ item, idx, totalItems, cardStart, cardEnd, scrollYProgress, isPositive }) {
  const itemStart = cardStart + (idx / totalItems) * (cardEnd - cardStart);
  const itemEnd = Math.min(itemStart + 0.06, cardEnd);

  const opacity = useTransform(scrollYProgress, [itemStart, itemEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [itemStart, itemEnd], [14, 0]);

  return (
    <motion.li
      style={{ opacity, y }}
      className={`flex items-start gap-3 text-xs sm:text-sm font-poppins p-2.5 sm:p-3 rounded-xl border transition-all ${
        isPositive
          ? "text-[#17231A] bg-white border-[#CFE8C7] shadow-sm"
          : "text-[#51604F] bg-[#F9FAF9] border-[#E5ECE3]/60"
      }`}
    >
      {isPositive ? (
        <span className="w-4.5 h-4.5 rounded-full bg-[#1E4A20] text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
          ✓
        </span>
      ) : (
        <span className="text-[#D3811F] font-bold mt-0.5">–</span>
      )}
      <span className={isPositive ? "font-medium" : ""}>{item}</span>
    </motion.li>
  );
}

export default function WhyCleclo() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll Progress Transforms for Left 3D Image Cards
  // Card 1 (Without Cleclo) transforms
  const card1Rotate = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [-2, -2, -8, -8]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [1, 1, 0.9, 0.9]);
  const card1Y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0, -20, -20]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [1, 1, 0, 0]);
  const card1ZIndex = useTransform(scrollYProgress, [0, 0.49, 0.51, 1], [20, 20, 10, 10]);

  // Card 2 (With Cleclo) transforms
  const card2Rotate = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [6, 6, 0, 0]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.9, 0.9, 1, 1]);
  const card2Y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [20, 20, 0, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.4, 0.4, 1, 1]);
  const card2ZIndex = useTransform(scrollYProgress, [0, 0.49, 0.51, 1], [10, 10, 20, 20]);

  // Right side Content Cards Crossfade
  const content1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [1, 1, 0, 0]);
  const content1Y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0, -16, -16]);

  const content2Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0, 1, 1]);
  const content2Y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [16, 16, 0, 0]);

  return (
    <section className="bg-white pt-16 md:pt-24 pb-12" id="why">
      {/* 1. Section Heading in Normal Scroll Flow */}
      <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="section-head">
          <div className="eyebrow text-xs tracking-widest uppercase font-mono font-semibold text-[#2C5C2E] mb-2 flex items-center gap-2">
            <span className="inline-block w-4 h-[1.5px] bg-[#D3811F]"></span>
            Why Cleclo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#003434] font-poppins max-w-3xl">
            Every dry cleaner runs on its own rules. We replaced them with a standard.
          </h2>
        </div>
      </div>

      {/* 2. Pinned Sticky Scroll Track */}
      <div ref={containerRef} className="relative h-[280vh]">
        {/* Sticky viewport container centered under navbar */}
        <div className="sticky top-20 md:top-24 h-[calc(100vh-100px)] flex flex-col justify-center overflow-hidden">
          <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8">
            
            {/* 2-Column Split: Left Sticky 3D Images + Right Scrolling Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* LEFT SIDE: Pine Labs 3D Layered Image Stack */}
              <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] lg:h-[440px] bg-[#F7FAF6] rounded-[32px] border border-[#E5ECE3] p-4 sm:p-6 shadow-[0_20px_50px_-20px_rgba(0,52,52,0.12)] flex items-center justify-center overflow-hidden">
                
                {/* Background ambient radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E9F5E6]/60 via-transparent to-transparent pointer-events-none" />

                {/* CARD 1 IMAGE: Without Cleclo */}
                <motion.div
                  style={{
                    rotate: card1Rotate,
                    scale: card1Scale,
                    y: card1Y,
                    opacity: card1Opacity,
                    zIndex: card1ZIndex,
                  }}
                  className="absolute inset-5 sm:inset-7 rounded-[24px] overflow-hidden border border-[#E5ECE3] shadow-xl transition-all duration-300 bg-white"
                >
                  <Image
                    src="/traditional-way.jpg"
                    alt="The traditional dry cleaning way"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating Pine Labs style badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D3811F]" />
                    <span className="text-xs font-mono font-bold text-[#003434] uppercase tracking-wider">
                      Without Cleclo
                    </span>
                  </div>
                </motion.div>

                {/* CARD 2 IMAGE: With Cleclo */}
                <motion.div
                  style={{
                    rotate: card2Rotate,
                    scale: card2Scale,
                    y: card2Y,
                    opacity: card2Opacity,
                    zIndex: card2ZIndex,
                  }}
                  className="absolute inset-5 sm:inset-7 rounded-[24px] overflow-hidden border border-[#CFE8C7] shadow-2xl transition-all duration-300 bg-white"
                >
                  <Image
                    src="/cleclo-standard-v3.jpg"
                    alt="The Cleclo Standard dry cleaning process"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating Pine Labs style badge */}
                  <div className="absolute bottom-4 left-4 bg-[#1E4A20] text-white backdrop-blur-md px-4 py-2 rounded-full border border-[#CFE8C7] shadow-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#77C36B]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Cleclo Certified Standard
                    </span>
                  </div>
                </motion.div>

              </div>

              {/* RIGHT SIDE: Content Cards Crossfading in Place */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                
                {/* Static Brand Step Indicators */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-sm bg-[#F4F6F4] text-[#51604F] border border-[#E5ECE3]">
                    01. Without Cleclo
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-sm bg-[#1E4A20] text-white border border-[#CFE8C7]">
                    02. With Cleclo
                  </span>
                </div>

                {/* Card Container */}
                <div className="relative w-full h-[360px] sm:h-[380px]">
                  
                  {/* CARD 1 CONTENT: Without Cleclo */}
                  <motion.div
                    style={{ opacity: content1Opacity, y: content1Y }}
                    className="absolute inset-0 bg-white border border-[#E5ECE3] rounded-[28px] p-6 sm:p-8 shadow-[0_12px_32px_-16px_rgba(0,52,52,0.08)] flex flex-col justify-center"
                  >
                    <span className="inline-block self-start font-mono text-xs tracking-widest uppercase py-1.5 px-4 rounded-full bg-[#F4F6F4] text-[#51604F] font-semibold mb-3">
                      {comparison.without.tag}
                    </span>
                    <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-[#003434] mb-4">
                      {comparison.without.title}
                    </h3>
                    
                    {/* Bullet Points One-By-One Reveal on Scroll */}
                    <ul className="flex flex-col gap-2.5">
                      {comparison.without.items.map((item, idx) => (
                        <ScrollBullet
                          key={item}
                          item={item}
                          idx={idx}
                          totalItems={comparison.without.items.length}
                          cardStart={0.02}
                          cardEnd={0.42}
                          scrollYProgress={scrollYProgress}
                          isPositive={false}
                        />
                      ))}
                    </ul>
                  </motion.div>

                  {/* CARD 2 CONTENT: With Cleclo */}
                  <motion.div
                    style={{ opacity: content2Opacity, y: content2Y }}
                    className="absolute inset-0 bg-gradient-to-b from-white to-[#F7FAF6] border border-[#CFE8C7] rounded-[28px] p-6 sm:p-8 shadow-[0_16px_36px_-18px_rgba(30,74,32,0.14)] flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block font-mono text-xs tracking-widest uppercase py-1.5 px-4 rounded-full bg-[#1E4A20] text-white font-semibold">
                        {comparison.with.tag}
                      </span>
                      <span className="text-xs font-mono text-[#2C5C2E] font-bold bg-[#E9F5E6] py-1 px-3 rounded-full border border-[#CFE8C7]">
                        CLECLO CERTIFIED
                      </span>
                    </div>
                    <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-[#003434] mb-4">
                      {comparison.with.title}
                    </h3>
                    
                    {/* Bullet Points One-By-One Reveal on Scroll */}
                    <ul className="flex flex-col gap-2.5">
                      {comparison.with.items.map((item, idx) => (
                        <ScrollBullet
                          key={item}
                          item={item}
                          idx={idx}
                          totalItems={comparison.with.items.length}
                          cardStart={0.52}
                          cardEnd={0.92}
                          scrollYProgress={scrollYProgress}
                          isPositive={true}
                        />
                      ))}
                    </ul>
                  </motion.div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
