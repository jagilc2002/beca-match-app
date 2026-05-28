"use client";

import { motion } from "framer-motion";
import { FAQS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-alt-background)]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl lg:text-[40px] font-serif text-dark mb-4">
              Preguntas Frecuentes
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-neutral text-lg">
              Resolvemos tus dudas sobre cómo funciona Beca Match
            </motion.p>
          </div>

          <motion.div variants={fadeUpVariant} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-muted/20">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-dark hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-neutral leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
