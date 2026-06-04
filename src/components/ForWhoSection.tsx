"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const FOR_WHO = [
  {
    icon: "🎓",
    text: "Tienes título universitario o estás por graduarte y quieres cursar un posgrado en el extranjero.",
  },
  {
    icon: "🌎",
    text: "Sueñas con vivir una experiencia internacional pero no sabes qué becas existen ni si aplicas.",
  },
  {
    icon: "📄",
    text: "Has buscado becas en Google y sientes que la información está desorganizada, desactualizada o es irrelevante para tu perfil.",
  },
  {
    icon: "⏱️",
    text: "No tienes tiempo de revisar decenas de sitios web para encontrar una beca real que encaje contigo.",
  },
  {
    icon: "💡",
    text: "Quieres saber exactamente qué necesitas mejorar en tu perfil para aumentar tus chances de ganar.",
  },
  {
    icon: "🚀",
    text: "Estás listo para tomar acción y avanzar con claridad, no solo explorar sin resultados.",
  },
];

const NOT_FOR_WHO = [
  "Buscas una beca para estudios de pregrado.",
  "Solo quieres aprender inglés o hacer un intercambio corto sin fines académicos.",
  "No tienes interés en postularte realmente, solo curiosidad pasajera.",
];

export default function ForWhoSection() {
  return (
    <section
      id="para-quien"
      className="py-20 md:py-28 bg-[#fdfefe] relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#19aae5]/6 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

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
              ¿Para quién es Beca Match?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 leading-tight">
              Esto es para ti si...
            </h2>
            <p className="text-lg text-[#616262] max-w-xl mx-auto">
              Beca Match está diseñado para un perfil muy específico. Comprueba si encajas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* FOR WHO — 3 cols */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-3 flex flex-col gap-4">
              {FOR_WHO.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-[#abcdd8]/30 rounded-xl p-5 hover:border-[#22c55e]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <p className="text-sm text-[#09090a] leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </motion.div>

            {/* NOT FOR WHO — 2 cols */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-2">
              <div className="bg-[#fef2f2] border border-red-100 rounded-2xl p-6 md:p-7 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">🚫</span>
                  <h3 className="font-semibold text-[#09090a] text-base">
                    No es para ti si...
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {NOT_FOR_WHO.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-base shrink-0 mt-0.5">✗</span>
                      <p className="text-sm text-[#616262] leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
