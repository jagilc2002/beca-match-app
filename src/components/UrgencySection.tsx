"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

const SPOTS_LEFT = 15;

export default function UrgencySection() {
  const { openModal } = useModal();

  return (
    <section className="py-16 bg-[#09090a] border-y border-[#19aae5]/20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold px-5 py-2.5 rounded-full mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            AVISO IMPORTANTE — Precio especial por tiempo limitado
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight"
          >
            Solo quedan{" "}
            <span className="text-[#19aae5] font-bold">{SPOTS_LEFT} cupos</span>{" "}
            disponibles al 50% de descuento
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Esta oferta <strong className="text-white/80">no tiene fecha límite</strong> — tiene{" "}
            <strong className="text-white/80">límite de cupos</strong>. Cuando los 15 lugares se
            completen, el precio vuelve a USD 19.99/mes automáticamente y sin excepciones.
            No importa si fue hace un minuto o mañana.
          </motion.p>

          {/* Progress bar */}
          <motion.div variants={fadeUpVariant} className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Cupos tomados</span>
              <span>{SPOTS_LEFT} restantes de 15</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#19aae5] to-[#19aae5]/60 rounded-full"
                style={{ width: `${((15 - SPOTS_LEFT) / 15) * 100 + 20}%` }}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Precio regular</p>
                <p className="text-white/40 text-2xl font-serif line-through">$19.99</p>
              </div>
              <div className="text-3xl text-[#19aae5]">→</div>
              <div className="text-center">
                <p className="text-[#19aae5] text-xs font-bold uppercase tracking-wider mb-1">Precio especial</p>
                <p className="text-white text-4xl font-serif font-bold">$9.99</p>
              </div>
            </div>
          </motion.div>

          <motion.button
            variants={fadeUpVariant}
            id="urgency-cta"
            onClick={openModal}
            className="bg-[#19aae5] text-white font-bold px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#19aae5]/30 text-base"
          >
            Quiero asegurar mi cupo ahora →
          </motion.button>
          <p className="text-white/30 text-xs mt-3">
            Una vez llenos los cupos, no podremos hacer excepciones con el precio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
