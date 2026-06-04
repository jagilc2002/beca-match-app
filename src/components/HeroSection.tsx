"use client";

import { motion } from "framer-motion";
import { useModal } from "@/lib/modal-context";

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#fdfefe] overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#19aae5]/8 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#19aae5]/5 rounded-full blur-[80px] md:blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-12 md:pb-16 relative z-10 w-full text-center">
        <div className="flex flex-col items-center">

          {/* ── CONTENT ── */}
          <div className="flex flex-col items-center">


            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-[#09090a] leading-[1.15] mb-4 md:mb-6"
            >
              Gana una <span className="text-[#19aae5] italic">BECA</span> en el extranjero{" "}
              <span className="text-[#09090a]">—</span> las{" "}
              <span className="text-[#19aae5] italic">BARRERAS</span> solo existían en tu{" "}
              <span className="text-[#19aae5] italic">MENTE</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-[#616262] leading-relaxed mb-8 md:mb-10"
            >
              Descubre en minutos qué becas internacionales tienes más probabilidades de ganar, según tu perfil.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12"
            >
              <button
                id="hero-cta-primary"
                onClick={openModal}
                className="group relative overflow-hidden bg-[#22c55e] text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 rounded-xl shadow-lg shadow-[#22c55e]/40 hover:shadow-[#22c55e]/60 hover:brightness-110 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10">
                  Aprovechar últimos 15 cupos disponibles
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <a
                href="#como-funciona"
                className="text-center border-2 border-[#abcdd8] text-[#09090a] font-semibold px-6 sm:px-8 py-4 rounded-xl hover:border-[#19aae5] hover:text-[#19aae5] transition-all duration-200 text-sm sm:text-base w-full sm:w-auto"
              >
                Ver cómo funciona →
              </a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 border-t border-[#abcdd8]/40 pt-6 md:pt-8 w-full"
            >
              {[
                { value: "3,200+", label: "becas internacionales indexadas" },
                { value: "40+", label: "países disponibles" },
                { value: "~5 meses", label: "proceso promedio" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-[#09090a]">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#616262]">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Micro message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-6 md:mt-8 text-xs text-[#616262] flex flex-wrap items-center gap-2"
            >
              <span className="text-green-500">✓</span> Sin tarjeta de crédito requerida
              <span className="hidden sm:inline">&nbsp;·&nbsp;</span>
              <span className="text-green-500">✓</span> Cancela cuando quieras
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
