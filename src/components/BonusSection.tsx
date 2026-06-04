"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

const BONUSES = [
  {
    icon: "📚",
    title: "Guía de Becas Internacionales",
    description:
      "Una guía completa que te explica cómo funciona el sistema de becas internacionales, qué tipos existen, cuáles aplican para Latinoamérica y cómo prepararte para ganar una.",
    value: "Valor: USD 49",
  },
  {
    icon: "📄",
    title: "5 Plantillas de CV Internacional",
    description:
      "Plantillas listas para adaptar a cada tipo de beca y universidad, con la estructura que los comités de selección esperan ver. Solo llena tus datos y postula.",
    value: "Valor: USD 28",
  },
];

export default function BonusSection() {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#f0faff] to-[#fdfefe] relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#19aae5]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-6">
              🎁 2 BONOS GRATUITOS — Solo por suscribirte hoy
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 leading-tight">
              Además de todo lo anterior,{" "}
              <span className="text-[#19aae5] italic">te regalamos esto</span>
            </h2>
            <p className="text-lg text-[#616262] max-w-xl mx-auto">
              Dos recursos exclusivos que te darán ventaja desde el primer día. Sin costo adicional.
            </p>
          </motion.div>

          {/* Bonus cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BONUSES.map((bonus, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="relative bg-white rounded-2xl p-8 border-2 border-[#19aae5]/20 shadow-lg overflow-hidden group hover:border-[#19aae5]/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-[#19aae5] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Gratis
                </div>

                <span className="text-5xl mb-5 block">{bonus.icon}</span>
                <h3 className="text-xl font-semibold text-[#09090a] mb-3">
                  {bonus.title}
                </h3>
                <p className="text-sm text-[#616262] leading-relaxed mb-5">
                  {bonus.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[#616262] text-sm line-through">
                    {bonus.value}
                  </span>
                  <span className="text-[#19aae5] font-bold text-sm">
                    → ¡Incluido gratis!
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total value */}
          <motion.div
            variants={fadeUpVariant}
            className="text-center bg-white border border-[#19aae5]/20 shadow-lg rounded-2xl p-8"
          >
            <p className="text-[#616262] text-sm uppercase tracking-widest mb-3">
              Valor total de los bonos
            </p>
            <p className="text-4xl font-serif font-bold text-[#19aae5] mb-1">
              USD 77
            </p>
            <p className="text-[#616262] text-sm mb-6">
              Tuyos completamente <span className="text-[#22c55e] font-bold uppercase tracking-wide">GRATIS</span> al suscribirte hoy
            </p>
            <div className="flex justify-center mt-6">
              <button
                id="bonus-cta"
                onClick={openModal}
                className="w-full sm:w-auto bg-[#22c55e] text-white font-bold px-8 sm:px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#22c55e]/20 text-base"
              >
                Aprovechar últimos 15 cupos disponibles, junto a tus BONUS
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
