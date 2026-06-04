"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const FAQS = [
  {
    question: "¿Funciona si ya terminé mi carrera hace varios años?",
    answer:
      "Sí. Muchas becas internacionales valoran la experiencia profesional más que el tiempo desde la graduación. Nuestro sistema toma en cuenta tus años de experiencia para mostrarte únicamente las becas donde eres elegible y tienes ventaja competitiva.",
  },
  {
    question: "¿Incluye becas para todas las áreas de estudio?",
    answer:
      "Nuestra base de datos indexa más de 3,200 becas cubriendo áreas STEM, Humanidades, Negocios, Artes, Ciencias Sociales, Salud y más — en más de 40 países. Sin importar tu área, encontrarás oportunidades compatibles.",
  },
  {
    question: "¿Cómo sé que las becas están actualizadas?",
    answer:
      "Monitoreamos constantemente los portales oficiales de universidades, gobiernos y fundaciones. Si una fecha límite cambia o una convocatoria cierra, la plataforma se actualiza de inmediato. No volverás a descubrir que una beca ya cerró después de investigar.",
  },
  {
    question: "¿Necesito inglés fluido para aplicar?",
    answer:
      "No necesariamente. Existen programas en español en España, México, Argentina y otros países. También hay becas que incluyen un año de aprendizaje del idioma local dentro del financiamiento. Beca Match filtra por idioma de instrucción para mostrarte opciones compatibles.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso de postulación con Beca Match?",
    answer:
      "Mientras que buscar becas manualmente puede tomar entre 10 y 20 horas por semana durante meses, con Beca Match puedes tener un panorama claro de tus opciones en minutos y avanzar hacia una postulación en aproximadamente 5 meses con una ruta organizada.",
  },
  {
    question: "¿Es seguro compartir mi información académica?",
    answer:
      "Absolutamente. Tus datos son tratados con total confidencialidad y utilizados exclusivamente para realizar el match con nuestra base de datos. No compartimos ni vendemos tu información a terceros bajo ninguna circunstancia.",
  },
  {
    question: "¿Qué pasa si cancelo mi suscripción?",
    answer:
      "Puedes cancelar en cualquier momento con un solo clic, sin penalizaciones ni preguntas. Mantendrás el acceso hasta el final de tu ciclo de facturación actual. Sin compromisos.",
  },
  {
    question: "¿El precio de USD 9.99 es permanente?",
    answer:
      "No. Este es un precio especial de lanzamiento disponible solo para los primeros 15 cupos. Una vez que esos cupos se completen, el precio volverá a USD 19.99/mes. Si te suscribes hoy, mantienes el precio de USD 9.99 mientras tu suscripción esté activa.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[#f5f9fb]">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#19aae5] border border-[#abcdd8] rounded-full px-4 py-1.5 mb-5">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#09090a] mb-4">
              Resolvemos tus dudas
            </h2>
            <p className="text-lg text-[#616262]">
              Si tienes una pregunta que no está aquí, escríbenos. Respondemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={fadeUpVariant} className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#abcdd8]/30 rounded-2xl overflow-hidden hover:border-[#19aae5]/30 transition-colors duration-200"
              >
                <button
                  id={`faq-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                >
                  <span className="text-base font-semibold text-[#09090a] group-hover:text-[#19aae5] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#19aae5] text-2xl font-light shrink-0"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-[#abcdd8]/20">
                        <p className="text-[#616262] text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
