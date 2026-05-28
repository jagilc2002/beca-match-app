"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/lib/modal-context";

const stats = [
  { value: "3,200+", label: "becas indexadas" },
  { value: "87%", label: "tasa de aceptación" },
  { value: "40+", label: "países disponibles" },
];

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="min-h-[90vh] bg-[#fdfefe] pt-16 pb-16 md:pt-28 md:pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* IMAGEN ARRIBA en mobile, derecha en desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center items-center order-first md:order-last"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/logo.jpg"
              alt="Comunidad del Intercambio"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* TEXTO */}
        <div className="order-last md:order-first">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#19aae5] border border-[#abcdd8] rounded-full px-4 py-1.5 mb-6"
          >
            Plataforma de Becas Internacionales
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif text-[#09090a] leading-tight mb-6"
          >
            Encuentra la beca de posgrado que{" "}
            <span className="text-[#19aae5] italic">sí</span> puedes ganar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-[#616262] leading-relaxed mb-8 max-w-lg"
          >
            Analizamos tu perfil académico y te mostramos exactamente qué becas
            internacionales tienen mayor probabilidad de aceptarte. Sin
            suposiciones. Con datos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-[#19aae5] text-white font-semibold px-7 py-3.5 rounded-lg hover:brightness-105 transition-all text-sm shadow-lg shadow-[#19aae5]/20"
            >
              Comenzar mi match de becas
            </button>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto text-center border border-[#abcdd8] text-[#09090a] font-medium px-7 py-3.5 rounded-lg hover:border-[#19aae5] transition-all text-sm"
            >
              Ver cómo funciona
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-8 border-t border-[#abcdd8] pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-semibold text-[#09090a]">{s.value}</p>
                <p className="text-xs md:text-sm text-[#616262]">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
