"use client";

import { motion } from "framer-motion";
import { PROBLEM_POINTS } from "@/lib/constants";
import { IconSearch, IconFileUnknown, IconTarget } from "@tabler/icons-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const ICONS = [
  <IconSearch key="1" className="w-8 h-8 text-primary" stroke={1.5} />,
  <IconFileUnknown key="2" className="w-8 h-8 text-primary" stroke={1.5} />,
  <IconTarget key="3" className="w-8 h-8 text-primary" stroke={1.5} />
];

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 md:py-32 bg-[var(--color-alt-background)]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl lg:text-[40px] font-serif text-dark text-center mb-16 max-w-2xl mx-auto leading-tight"
          >
            Buscar becas en Google es como buscar trabajo sin currículum
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {PROBLEM_POINTS.map((point, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-muted/20 flex flex-col items-center text-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  {ICONS[index]}
                </div>
                <p className="text-dark font-medium text-lg leading-snug">
                  &ldquo;{point}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeUpVariant}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-primary italic">
              Hay una forma más inteligente.
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
