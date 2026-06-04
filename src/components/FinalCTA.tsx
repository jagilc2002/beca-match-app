"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";



export default function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="relative py-24 md:py-36 bg-[#f5f9fb] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#19aae5]/12 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#19aae5]/6 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="final-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#abcdd8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* CTA */}
          <motion.div variants={fadeUpVariant} className="flex justify-center px-2">
            <button
              id="final-cta-primary"
              onClick={openModal}
              className="group relative overflow-hidden w-full sm:w-auto bg-[#22c55e] text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl px-6 sm:px-10 md:px-14 py-5 sm:py-6 md:py-7 rounded-2xl shadow-2xl shadow-[#22c55e]/40 hover:brightness-110 transition-all duration-300"
            >
              Aprovechar últimos 15 cupos
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
