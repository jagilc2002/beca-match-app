"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const INCLUDES = [
  {
    icon: "🔎",
    item: "Acceso a la base de datos completa de +3,200 becas internacionales",
  },
  {
    icon: "🤖",
    item: "Algoritmo de matching personalizado sin límites de búsqueda",
  },
  {
    icon: "🌐",
    item: "Filtros avanzados por país, área de estudio, financiamiento y nivel",
  },
  {
    icon: "📋",
    item: "Checklists de requisitos detallados por cada convocatoria",
  },
  {
    icon: "⏰",
    item: "Alertas en tiempo real de nuevas becas y fechas límite",
  },
  {
    icon: "📖",
    item: "Guías exclusivas paso a paso para preparar cada aplicación",
  },
  {
    icon: "💬",
    item: "Información actualizada y verificada constantemente",
  },
  {
    icon: "🎓",
    item: "Oportunidades en +40 países para todas las áreas de estudio",
  },
  {
    icon: "🛡️",
    item: "Transparencia total: requisitos, plazos y beneficios claros",
  },
];

export default function IncludesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#fdfefe] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#19aae5]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#19aae5] border border-[#19aae5]/30 bg-[#19aae5]/5 rounded-full px-4 py-1.5 mb-5">
              Lo que incluye tu suscripción
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 leading-tight">
              Todo lo que recibirás con Beca Match
            </h2>
            <p className="text-lg text-[#616262] max-w-xl mx-auto">
              Desde el primer día, tienes acceso a todo esto. Sin restricciones.
              Sin costos adicionales.
            </p>
          </motion.div>

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {INCLUDES.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="flex items-start gap-4 bg-white border border-[#abcdd8]/30 rounded-xl p-5 hover:border-[#19aae5]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-[#09090a] text-sm leading-relaxed">{item.item}</p>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
}
