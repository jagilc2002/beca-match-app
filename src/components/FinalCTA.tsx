"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

export default function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="relative py-20 md:py-32 bg-[#19aae5] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif text-white mb-6 leading-tight"
          >
            Tu beca internacional te está esperando
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 font-medium">
            Miles de oportunidades. Ninguna se ajusta a todos. Solo a ti.
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <button
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-base md:text-lg font-semibold transition-all bg-white text-[#19aae5] hover:bg-white/90 hover:scale-[1.03] h-14 px-10 shadow-xl border-2 border-white/20"
            >
              Comenzar mi match ahora
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
