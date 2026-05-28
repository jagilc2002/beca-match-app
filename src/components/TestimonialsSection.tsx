"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Johnny Ramos",
    location: "Honduras",
    profession: "Ingeniero Eléctrico",
    quote:
      "Gracias a Comunidad del Intercambio entendí cómo hacer una buena carta de motivación y preparar mi aplicación. Al igual que prepararme con anterioridad para realizar la postulación.",
    beca: "Beca Fundación Carolina",
    programa: "Máster en Energías Renovables",
    universidad: "Universidad Politécnica de Cartagena",
    pais: "Murcia, España",
    instagram: "https://www.instagram.com/p/DIMUCDMqq0e/",
    initials: "JR",
  },
  {
    name: "María Fernanda Febres",
    location: "Arequipa, Perú",
    profession: "Contadora Pública",
    quote:
      "El equipo de Comunidad del Intercambio supo corregirme en ciertas cosas que estaba haciendo mal en la carta de motivación y me entregaron un formato que facilitó todo el proceso. Estoy muy agradecida por cumplir mi sueño.",
    beca: "Beca GKS",
    programa: "Máster en Business Administration",
    universidad: "Universidad en Corea del Sur",
    pais: "Corea del Sur",
    instagram: "https://www.instagram.com/p/DH1IxfbvrZ1/",
    initials: "MF",
  },
  {
    name: "Susana Hernández",
    location: "Costa Rica",
    profession: "Ingeniera Química",
    quote:
      "Gracias a la mentoría, logré obtener dos becas: una del Gobierno de Irlanda y otra de la Fundación Carolina. Creo que los ensayos son el mayor filtro para cualquier beca, y aquí aprendí exactamente cómo hacerlos.",
    beca: "Beca Fundación Carolina + Gobierno Irlandés",
    programa: "Máster en Química Aplicada / Química Sintética",
    universidad: "España e Irlanda",
    pais: "España · Irlanda",
    instagram: "https://www.instagram.com/p/DHjHO21isg9/",
    initials: "SH",
  },
  {
    name: "Vanessa Villegas",
    location: "Medellín, Colombia",
    profession: "Bióloga Marina",
    quote:
      "Tomé la decisión muy rápida de inscribirme en la mentoría y esto me dio mucha más seguridad. Me preparé para la entrevista y las respuestas eran casi todas iguales a lo aprendido. Lo que más recomiendo es arriesgarse.",
    beca: "Beca Fundación Carolina",
    programa: "Máster en Biología Marina",
    universidad: "Universidad en Islas Canarias",
    pais: "Islas Canarias, España",
    instagram: "https://www.instagram.com/p/DG1rQnhvevf/",
    initials: "VV",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonios"
      className="bg-[#09090a] py-24 px-4"
      aria-label="Testimonios"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#19aae5] mb-3 block">
            Historias reales
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-4">
            Ellos ya ganaron su beca
          </h2>
          <p className="text-[#616262] text-lg max-w-xl mx-auto">
            Profesionales de toda Latinoamérica que transformaron su carrera con
            una beca internacional.
          </p>
        </motion.div>

        {/* Tarjeta activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-[#111213] border border-[#1e2021] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto mb-10"
          >
            {/* Estrellas */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#19aae5] text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-8 font-light">
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            {/* Persona */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#19aae5] flex items-center justify-center text-white font-semibold text-sm">
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {testimonials[active].name}
                  </p>
                  <p className="text-[#616262] text-sm">
                    {testimonials[active].profession} ·{" "}
                    {testimonials[active].location}
                  </p>
                </div>
              </div>

              {/* Beca badge */}
              <div className="text-right">
                <p className="text-[#19aae5] font-semibold text-sm">
                  {testimonials[active].beca}
                </p>
                <p className="text-[#616262] text-xs">
                  {testimonials[active].programa}
                </p>
                <p className="text-[#616262] text-xs">
                  {testimonials[active].pais}
                </p>
              </div>
            </div>

            {/* Ver en Instagram */}
            <div className="mt-8 pt-6 border-t border-[#1e2021]">
              <a
                href={testimonials[active].instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#616262] hover:text-[#19aae5] transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Ver testimonio completo en Instagram
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navegación dots */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-[#19aae5]"
                  : "w-2 h-2 bg-[#616262] hover:bg-[#abcdd8]"
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>

        {/* Flechas */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setActive((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="w-10 h-10 rounded-full border border-[#1e2021] text-[#616262] hover:border-[#19aae5] hover:text-[#19aae5] transition-colors duration-200 flex items-center justify-center"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActive((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="w-10 h-10 rounded-full border border-[#1e2021] text-[#616262] hover:border-[#19aae5] hover:text-[#19aae5] transition-colors duration-200 flex items-center justify-center"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
