"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const PROBLEMS_SOLUTIONS = [
  {
    problem: "Pierdes entre 10 y 20 horas por semana buscando becas",
    problemDetail:
      "Pasas horas revisando Google, universidades y portales distintos sin saber cuáles oportunidades realmente aplican para tu perfil.",
    solution: "Acelera tu camino hacia una beca internacional",
    solutionDetail:
      "Mientras muchas personas tardan hasta 12 meses investigando oportunidades, Beca Match organiza el proceso para que avances en aproximadamente 5 meses con una ruta más clara.",
    icon: "⏰",
  },
  {
    problem: "Revisas cientos de becas que no son para ti",
    problemDetail:
      "Dedicas tiempo a analizar requisitos de oportunidades que finalmente no encajan con tu perfil académico o profesional.",
    solution: "Recibe solo oportunidades compatibles contigo",
    solutionDetail:
      "Nuestro sistema analiza tu perfil y filtra automáticamente las opciones menos relevantes para mostrarte solo las becas con mayor compatibilidad.",
    icon: "🎯",
  },
  {
    problem: "Encuentras información desactualizada",
    problemDetail:
      "Descubres que muchas convocatorias ya cerraron o cambiaron sus requisitos después de haber invertido tiempo investigándolas.",
    solution: "Accede a convocatorias verificadas y actualizadas",
    solutionDetail:
      "Ahorra semanas de investigación accediendo a oportunidades revisadas constantemente, sin comprobar manualmente si la información sigue vigente.",
    icon: "📅",
  },
  {
    problem: "No sabes por dónde empezar",
    problemDetail:
      "Te sientes abrumado navegando entre documentos, requisitos y sitios web sin una ruta clara para alcanzar tu objetivo.",
    solution: "Sigue una ruta clara paso a paso",
    solutionDetail:
      "La plataforma organiza las oportunidades por ti y te muestra el siguiente paso para avanzar de forma ordenada hacia tu meta de estudiar en el extranjero.",
    icon: "🗺️",
  },
  {
    problem: "Crees que estudiar en el extranjero es demasiado costoso",
    problemDetail:
      "Los gastos de matrícula, alojamiento y manutención parecen imposibles de cubrir, por lo que abandonas tu sueño antes de explorar las opciones.",
    solution: "Descubre becas que pueden financiar tus estudios",
    solutionDetail:
      "Beca Match identifica oportunidades alineadas con tu perfil para ayudarte a encontrar becas que cubran parcial o totalmente los costos académicos.",
    icon: "💰",
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="pt-12 pb-20 md:pt-20 md:pb-32 bg-[#f5f9fb]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4 max-w-3xl mx-auto leading-tight">
              ¿Te identificas con alguno de estos problemas?
            </h2>
            <p className="text-lg text-[#616262] max-w-2xl mx-auto">
              Miles de profesionales sueñan con estudiar un posgrado en el
              extranjero, pero se quedan atrapados en la búsqueda. Beca Match
              simplifica el proceso.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="flex flex-col gap-6 mb-8 max-w-4xl mx-auto">
            {PROBLEMS_SOLUTIONS.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl overflow-hidden border border-[#abcdd8]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-2"
              >
              {/* Problem half */}
                <div className="p-5 sm:p-6 border-b md:border-b-0 md:border-r border-red-50 bg-red-50/40">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block mb-1">
                        El problema
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-[#09090a] leading-snug">
                        {item.problem}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#616262] leading-relaxed ml-9">
                    {item.problemDetail}
                  </p>
                </div>

                {/* Solution half */}
                <div className="p-5 sm:p-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl shrink-0">✅</span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#19aae5] block mb-1">
                        La solución
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-[#09090a] leading-snug">
                        {item.solution}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#616262] leading-relaxed ml-9">
                    {item.solutionDetail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro message */}
          <motion.p
            variants={fadeUpVariant}
            className="text-center text-[#19aae5] font-serif text-xl italic"
          >
            Hay una forma más inteligente de encontrar tu beca. Sigue leyendo. ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
