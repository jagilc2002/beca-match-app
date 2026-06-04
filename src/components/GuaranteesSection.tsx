"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

const GUARANTEES = [
  {
    icon: "🛡️",
    title: "Transparencia total",
    description:
      "Conocerás claramente los requisitos, beneficios y fechas de cada oportunidad para tomar decisiones informadas. Sin letra pequeña.",
  },
  {
    icon: "🛡️",
    title: "Acceso inmediato",
    description:
      "Podrás comenzar a explorar oportunidades y recursos desde el momento en que actives tu cuenta. Sin esperas ni procesos de verificación complejos.",
  },
  {
    icon: "🛡️",
    title: "Información vigente",
    description:
      "Nuestro compromiso es mantener la plataforma actualizada para que encuentres oportunidades activas y relevantes. Sin fechas vencidas.",
  },
  {
    icon: "🛡️",
    title: "Experiencia simple",
    description:
      "Diseñamos Beca Match para que puedas enfocarte en avanzar hacia tu objetivo sin procesos complejos ni información dispersa.",
  },
  {
    icon: "🛡️",
    title: "Inversión de bajo riesgo",
    description:
      "Por menos de USD 10 al mes accedes a herramientas y oportunidades que podrían acercarte a financiamientos académicos de miles de dólares.",
  },
];

export default function GuaranteesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-32 bg-[#fdfefe] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfefe] via-[#f0faff] to-[#fdfefe] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#19aae5] border border-[#abcdd8] rounded-full px-4 py-1.5 mb-5">
              Nuestras garantías
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 leading-tight">
              Tu suscripción está respaldada por{" "}
              <span className="text-[#19aae5] italic">5 garantías</span>
            </h2>
            <p className="text-lg text-[#616262] max-w-xl mx-auto">
              Queremos que te sientas seguro desde el primer clic. Por eso te
              hacemos estas promesas concretas.
            </p>
          </motion.div>

          {/* Guarantees grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {GUARANTEES.map((g, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className={`bg-white border border-[#abcdd8]/30 rounded-2xl p-7 hover:border-[#19aae5]/30 hover:shadow-md transition-all duration-300 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="text-4xl mb-4 block">{g.icon}</span>
                <h3 className="text-lg font-semibold text-[#09090a] mb-2">
                  Te garantizamos {g.title.toLowerCase()}
                </h3>
                <p className="text-sm text-[#616262] leading-relaxed">
                  {g.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUpVariant} className="text-center">
            <button
              id="guarantees-cta"
              onClick={openModal}
              className="w-full sm:w-auto bg-[#22c55e] text-white font-bold px-8 sm:px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#22c55e]/20 text-base"
            >
              Aprovechar últimos 15 cupos disponibles
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
