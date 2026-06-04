"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const BENEFITS = [
  {
    icon: "⚡",
    title: "Ahorro masivo de tiempo",
    description:
      "Deja de pasar horas en Google. En minutos conoces qué becas encajan con tu perfil académico y profesional.",
    highlight: "Hasta 20 hrs/semana ahorradas",
  },
  {
    icon: "🎯",
    title: "Match inteligente de perfil",
    description:
      "Nuestro sistema analiza 40+ factores de tu perfil para mostrarte solo las oportunidades donde realmente tienes ventaja competitiva.",
    highlight: "Solo becas compatibles contigo",
  },
  {
    icon: "✅",
    title: "Convocatorias verificadas",
    description:
      "Cada oportunidad es revisada constantemente. Olvídate de descubrir que una convocatoria ya cerró después de horas de investigación.",
    highlight: "Información 100% actualizada",
  },
  {
    icon: "🗺️",
    title: "Ruta clara paso a paso",
    description:
      "Deja de sentirte abrumado. Beca Match organiza el proceso completo para que siempre sepas cuál es tu próximo movimiento.",
    highlight: "Sin confusión ni bloqueos",
  },
  {
    icon: "🌍",
    title: "Acceso a 40+ países",
    description:
      "Europa, Asia, América del Norte y más. Descubre oportunidades en destinos que ni sabías que existían para tu área de estudio.",
    highlight: "3,200+ becas indexadas",
  },
  {
    icon: "💡",
    title: "Más claridad en el proceso",
    description:
      "Conocerás exactamente los requisitos, plazos y documentos de cada oportunidad. Decisiones informadas, no adivinanzas.",
    highlight: "Transparencia total garantizada",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#fdfefe]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="group bg-white border border-[#abcdd8]/30 rounded-2xl p-7 hover:border-[#19aae5]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-5">{benefit.icon}</div>
                <div className="inline-block bg-[#19aae5]/8 text-[#19aae5] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {benefit.highlight}
                </div>
                <h3 className="text-lg font-semibold text-[#09090a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#616262] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Micro message */}
          <motion.p
            variants={fadeUpVariant}
            className="text-center text-[#616262] text-base italic"
          >
            Todo esto por menos de USD 10 al mes. ¿Sigues dudando? Continúa leyendo. ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
