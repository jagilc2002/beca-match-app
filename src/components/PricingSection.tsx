"use client";

import { motion } from "framer-motion";
import { IconCheck, IconShieldCheck } from "@tabler/icons-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

const FEATURES = [
  "Acceso a la base de datos completa de +3,200 becas",
  "Algoritmo de matching personalizado y sin límites",
  "Filtros avanzados (país, área, financiamiento)",
  "Checklists de requisitos detallados por cada beca",
  "Alertas en tiempo real de nuevas becas y deadlines",
  "Guías exclusivas paso a paso para aplicar",
  "Acceso a comunidad privada de becarios exitosos",
  "Soporte prioritario por correo electrónico",
];

export default function PricingSection() {
  const { openModal } = useModal();

  return (
    <section id="precios" className="py-20 md:py-32 bg-[#fdfefe] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#19aae5]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-[40px] font-serif text-[#09090a] mb-6 leading-tight max-w-2xl mx-auto">
              Invierte $9.99 por mes.<br className="hidden md:block" /> Gana una beca que vale $50,000+
            </motion.h2>
          </div>

          <motion.div variants={fadeUpVariant} className="relative">
            {/* Guarantee Badge — solo desktop */}
            <div className="hidden lg:flex absolute -right-6 -top-6 w-32 h-32 bg-white rounded-full shadow-xl border border-[#abcdd8]/20 items-center justify-center flex-col z-20">
              <IconShieldCheck className="w-8 h-8 text-[#19aae5] mb-1" stroke={1.5} />
              <span className="text-[10px] font-bold text-[#09090a] text-center uppercase tracking-widest leading-none">
                30 días<br />Garantía
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-[#abcdd8]/30 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#abcdd8]/20 pb-6 md:pb-8 mb-6 md:mb-8 gap-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#19aae5]/10 text-[#19aae5] text-xs font-bold uppercase tracking-wider rounded-full mb-3 md:mb-4">
                    Acceso Completo
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#09090a] mb-1">Beca Match Premium</h3>
                  <p className="text-[#616262] text-sm md:text-base">Todo lo que necesitas para asegurar tu beca.</p>
                </div>
                <div className="md:text-right">
                  <div className="flex items-baseline gap-1 text-[#09090a]">
                    <span className="text-xl font-medium">$</span>
                    <span className="text-4xl md:text-5xl font-serif">9.99</span>
                    <span className="text-[#616262] font-medium text-sm">USD</span>
                  </div>
                  <p className="text-[#616262] text-xs mt-1">facturado mensualmente</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-3 md:gap-y-4 mb-8 md:mb-10">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-[#19aae5]/10 p-0.5 rounded-full shrink-0">
                      <IconCheck className="w-4 h-4 text-[#19aae5]" stroke={3} />
                    </div>
                    <span className="text-[#09090a] text-sm md:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <button
                  onClick={openModal}
                  className="w-full md:w-auto md:min-w-[300px] bg-[#19aae5] text-white font-semibold text-base md:text-lg h-12 md:h-14 px-8 rounded-xl hover:brightness-105 transition-all shadow-lg shadow-[#19aae5]/20 mb-3"
                >
                  Comenzar mi match de becas
                </button>
                <p className="text-xs font-medium text-[#616262] uppercase tracking-widest">
                  Cancela cuando quieras · Sin compromiso
                </p>
              </div>
            </div>

            {/* Mobile Guarantee */}
            <div className="lg:hidden flex items-center justify-center gap-2 mt-6 text-[#616262]">
              <IconShieldCheck className="w-5 h-5 text-[#19aae5]" stroke={1.5} />
              <span className="text-sm font-medium">30 días de garantía de devolución</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mt-10 md:mt-12 text-center">
            <p className="text-[#09090a] font-medium flex items-center justify-center gap-3 text-sm md:text-base flex-wrap">
              <span className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-8 h-8 rounded-full border-2 border-[#fdfefe] bg-[#abcdd8]/40 overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </span>
                ))}
              </span>
              Únete a +3,200 profesionales que ya usan Beca Match
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
