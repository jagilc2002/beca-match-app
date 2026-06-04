"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Siempre pensé que la OEA era para perfiles más destacados que el mío. Beca Match me mostró que aplicaba y me guió paso a paso. Hoy estoy cursando mi maestría en la USP.",
    name: "Valentina Ríos",
    country: "Colombia",
    scholarship: "Beca OEA",
    university: "Universidade de São Paulo, Brasil",
    year: "2024",
    flag: "co",
    color: "#19aae5",
  },
  {
    quote:
      "No creía que con mi perfil pudiera ganar una beca completa. Beca Match me mostró que sí aplicaba para Chevening. Me preparé, apliqué y la gané.",
    name: "Diego Paredes",
    country: "Ecuador",
    scholarship: "Beca Chevening",
    university: "University of Edinburgh, Reino Unido",
    year: "2025",
    flag: "ec",
    color: "#b8860b",
  },
  {
    quote:
      "El sistema filtra exactamente lo que necesitas. Ninguna beca irrelevante, ninguna fecha vencida. Conseguí la DAAD en 5 meses desde que empecé.",
    name: "Mariana Castillo",
    country: "México",
    scholarship: "Beca DAAD",
    university: "TU Munich, Alemania",
    year: "2024",
    flag: "mx",
    color: "#b8860b",
  },
  {
    quote:
      "Tenía 4 años de experiencia pero no sabía por dónde empezar. Beca Match organizó todo. Hoy tengo una Fulbright y empiezo en septiembre.",
    name: "Andrés Villanueva",
    country: "Perú",
    scholarship: "Beca Fulbright",
    university: "Georgetown University, EE.UU.",
    year: "2025",
    flag: "pe",
    color: "#19aae5",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.55, ease: "easeOut" },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#f5fafd] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#19aae5]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#19aae5] uppercase mb-3">
            Historias reales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#09090a] leading-tight">
            Ellos ya ganaron su beca.{" "}
            <span className="text-[#19aae5] italic">Tú puedes ser el siguiente.</span>
          </h2>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-5 sm:p-7 shadow-[0_4px_32px_-4px_rgba(25,170,229,0.10)] border border-[#e6f4fb] hover:shadow-[0_8px_48px_-4px_rgba(25,170,229,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full opacity-80"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4" viewBox="0 0 20 20" fill="#daa520">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <svg
                className="w-8 h-8 mb-3 opacity-10"
                style={{ color: t.color }}
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Quote text */}
              <p className="text-[#2c2c2c] text-base leading-relaxed mb-6 font-light italic">
                &quot;{t.quote}&quot;
              </p>

              {/* Divider */}
              <div className="border-t border-[#e6f4fb] pt-4 sm:pt-5 flex items-start gap-3">
                {/* Flag */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/w40/${t.flag}.png`}
                  alt={t.country}
                  width={28}
                  height={20}
                  className="rounded-sm shadow-sm flex-shrink-0 mt-0.5"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-[#09090a] text-sm leading-tight">
                    {t.name}
                    <span className="font-normal text-[#616262]"> · {t.country}</span>
                  </p>
                  <p className="text-xs text-[#616262] mt-1 leading-snug break-words">
                    <span
                      className="font-semibold"
                      style={{ color: t.color }}
                    >
                      {t.scholarship}
                    </span>{" "}
                    · {t.university} · {t.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
