"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

const FEATURES = [
  "Acceso a base de datos completa de +3,200 becas internacionales",
  "Algoritmo de matching personalizado sin límites",
  "Filtros avanzados por país, área, nivel y financiamiento",
  "Checklists de requisitos detallados por cada beca",
  "Alertas en tiempo real de nuevas becas y deadlines",
  "Guías exclusivas paso a paso para cada aplicación",
  "Información verificada y actualizada constantemente",
  "+ Bono: Guía de Becas Internacionales (USD 49)",
  "+ Bono: 5 Plantillas de CV Internacional (USD 29)",
];

const TOTAL_SPOTS = 15;

export default function PricingSection() {
  const { openModal } = useModal();
  const [spots, setSpots] = useState(TOTAL_SPOTS);

  // Simulate spots decreasing (for demo urgency)
  useEffect(() => {
    const stored = sessionStorage.getItem("bm_spots");
    if (stored) {
      setSpots(parseInt(stored));
    } else {
      sessionStorage.setItem("bm_spots", String(TOTAL_SPOTS));
    }
  }, []);

  return (
    <section id="precios" className="pt-12 pb-20 md:pt-20 md:pb-32 bg-[#f5f9fb] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#19aae5]/6 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#cc4e3c] border border-[#cc4e3c]/30 bg-[#cc4e3c]/5 rounded-full px-4 py-1.5 mb-5">
              SE PARTE DE NUESTRA OFERTA Y GOZA DE TODO LO MENCIONADO
            </span>
            <p className="text-[#616262] text-lg">
              Una beca de posgrado internacional puede costar más de{" "}
              <strong className="text-[#09090a]">USD 50,000</strong>. Tu inversión HOY:{" "}
              <strong className="text-[#19aae5]">menos de lo que cuesta una salida de fin de semana.</strong>
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            variants={fadeUpVariant}
            className="bg-white rounded-3xl border-2 border-[#19aae5]/20 shadow-2xl shadow-[#19aae5]/10 overflow-hidden"
          >
            {/* Top banner */}
            <div className="bg-[#22c55e] text-white text-center py-3 text-sm font-bold tracking-wider uppercase">
              Precio especial limitado — 50% de descuento
            </div>

            <div className="p-5 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 border-b border-[#abcdd8]/30 pb-6 md:pb-8 mb-6 md:mb-8">
                {/* Left: Plan info */}
                <div>
                  <div className="inline-block px-3 py-1 bg-[#19aae5]/10 text-[#19aae5] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Acceso Completo
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#09090a] mb-2">
                    Beca Match Premium
                  </h3>
                  <p className="text-[#616262] text-sm max-w-xs">
                    Todo lo que necesitas para encontrar y ganar tu beca internacional.
                  </p>
                </div>

                {/* Right: Price */}
                <div className="md:text-right shrink-0">
                  <div className="flex md:justify-end items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs sm:text-sm text-[#616262] line-through font-medium">
                      PRECIO REGULAR USD 19.99/mes
                    </span>
                  </div>
                  <div className="flex md:justify-end items-baseline gap-1">
                    <span className="text-lg sm:text-2xl font-medium text-[#09090a]">USD</span>
                    <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#09090a]">
                      9.99
                    </span>
                    <span className="text-[#616262] text-base sm:text-lg">/mes</span>
                  </div>
                  <div className="flex md:justify-end items-center gap-2 mt-2">
                    <span className="bg-green-100 text-green-700 font-bold text-xs sm:text-sm px-3 py-1 rounded-full">
                      ✓ 50% DE DESCUENTO
                    </span>
                  </div>
                  <p className="text-[#616262] text-xs mt-2 md:text-right">
                    Facturado mensualmente · Cancela cuando quieras
                  </p>
                </div>
              </div>

              {/* Scarcity alert */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
                <span className="text-amber-500 text-xl shrink-0">⚠️</span>
                <div>
                  <p className="text-amber-800 font-bold text-sm">
                    ¡Solo quedan <span className="text-amber-600">{spots} cupos</span> disponibles a este precio!
                  </p>
                  <p className="text-amber-600 text-xs mt-0.5">
                    Cuando se completen, el precio volverá a USD 19.99/mes. Sin excepciones.
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-[#19aae5]/10 rounded-full p-0.5 shrink-0">
                      <svg className="w-4 h-4 text-[#19aae5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#09090a] text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3">
                <button
                  id="pricing-cta"
                  onClick={openModal}
                  className="w-full md:w-auto md:min-w-[380px] bg-[#22c55e] text-white font-bold text-lg h-16 px-10 rounded-2xl hover:brightness-105 transition-all shadow-xl shadow-[#22c55e]/30 hover:shadow-[#22c55e]/50"
                >
                  Aprovechar últimos 15 cupos disponibles
                </button>
                <p className="text-xs text-[#616262] uppercase tracking-widest font-medium">
                  Acceso inmediato · Sin riesgo · Cancela cuando quieras
                </p>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
