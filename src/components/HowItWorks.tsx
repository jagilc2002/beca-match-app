"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    icon: "📝",
    title: "Completa tu perfil",
    description:
      "Ingresa tu historial académico, experiencia profesional, nivel de idiomas y el área de posgrado que te interesa. Solo te toma minutos.",
    detail: "Simple, rápido y seguro",
  },
  {
    number: "02",
    icon: "🔍",
    title: "Descubre oportunidades compatibles",
    description:
      "Nuestro sistema analiza más de 3,200 becas y filtra automáticamente las que mejor encajan con tu perfil — mostrándote primero las de mayor compatibilidad.",
    detail: "Sin buscar, sin comparar manualmente",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Avanza con más claridad hacia tu postulación",
    description:
      "Conoce los requisitos exactos, plazos y documentos de cada beca. Sigue el checklist paso a paso y postula con confianza.",
    detail: "Con una ruta clara y ordenada",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-12 pb-20 md:pt-20 md:pb-32 bg-[#f5f9fb]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#19aae5] border border-[#abcdd8] rounded-full px-4 py-1.5 mb-5">
              Cómo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 leading-tight">
              Tu camino hacia una beca internacional en 3 pasos
            </h2>
            <p className="text-lg text-[#616262] max-w-xl mx-auto">
              Sin procesos complicados. Sin semanas de investigación. Directo al grano.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-[2px] bg-gradient-to-r from-[#abcdd8]/0 via-[#19aae5]/30 to-[#abcdd8]/0 z-0" />

            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div className="relative mb-8 z-10">
                  <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#19aae5]/30 flex items-center justify-center shadow-md group-hover:border-[#19aae5] group-hover:shadow-[#19aae5]/20 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#19aae5] text-white text-xs font-bold flex items-center justify-center shadow">
                    {index + 1}
                  </div>
                </div>

                {/* Number watermark */}
                <span className="absolute top-0 right-4 text-[80px] font-serif font-bold text-[#09090a]/4 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="bg-white rounded-2xl p-7 border border-[#abcdd8]/30 hover:border-[#19aae5]/30 hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold text-[#09090a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#616262] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#19aae5] bg-[#19aae5]/8 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── PRODUCT TOUR ── */}
          <motion.div variants={fadeUpVariant} className="mt-20 md:mt-28">

            {/* Section label */}
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#19aae5] border border-[#19aae5]/30 bg-[#19aae5]/5 rounded-full px-4 py-1.5 mb-4">
                Así se ve por dentro
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#09090a] mb-3">
                Tu panel personal de becas
              </h3>
              <p className="text-[#616262] max-w-lg mx-auto text-sm md:text-base">
                En segundos ves qué becas encajan con tu perfil, cuánto compatibilizas y qué necesitas para postular. Sin ruido, sin confusión.
              </p>
            </div>

            {/* Browser-frame mockup */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#19aae5]/20 via-[#abcdd8]/10 to-[#22c55e]/10 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

              {/* Browser chrome */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-[#abcdd8]/40 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#f5f9fb] border-b border-[#abcdd8]/30">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 bg-white rounded-full px-3 py-1 text-xs text-[#616262] border border-[#abcdd8]/30 max-w-[220px]">
                    app.becamatch.com/mi-panel
                  </div>
                </div>
                <Image
                  src="/beca_match_mockup.jpg"
                  alt="Panel de Beca Match — interfaz real de la plataforma"
                  width={900}
                  height={650}
                  quality={100}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Feature callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              {[
                {
                  num: "①",
                  color: "#19aae5",
                  bg: "bg-[#e6f7fd]",
                  title: "Match Score",
                  desc: "Un porcentaje que indica qué tan compatible eres con cada beca, calculado desde tu perfil.",
                },
                {
                  num: "②",
                  color: "#22c55e",
                  bg: "bg-[#f0fdf4]",
                  title: "Filtros inteligentes",
                  desc: "Filtra por país, área de estudio, tipo de beca y fecha límite. Solo ves lo que importa.",
                },
                {
                  num: "③",
                  color: "#f59e0b",
                  bg: "bg-[#fffbeb]",
                  title: "Fecha límite",
                  desc: "Cada beca muestra cuántos días quedan para postular. Sin sorpresas de último momento.",
                },
                {
                  num: "④",
                  color: "#8b5cf6",
                  bg: "bg-[#f5f3ff]",
                  title: "Checklist de postulación",
                  desc: "Documentos requeridos y pasos concretos para cada beca. Sabes exactamente qué hacer.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`${f.bg} rounded-xl p-4 border border-white shadow-sm`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold" style={{ color: f.color }}>{f.num}</span>
                    <h4 className="font-semibold text-[#09090a] text-sm">{f.title}</h4>
                  </div>
                  <p className="text-xs text-[#616262] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
