"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/constants";
import { 
  IconUserCheck, 
  IconFilter, 
  IconListCheck, 
  IconBellRinging, 
  IconBook, 
  IconUsersGroup 
} from "@tabler/icons-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const ICONS = [
  <IconUserCheck key="1" className="w-6 h-6 text-primary" stroke={1.5} />,
  <IconFilter key="2" className="w-6 h-6 text-primary" stroke={1.5} />,
  <IconListCheck key="3" className="w-6 h-6 text-primary" stroke={1.5} />,
  <IconBellRinging key="4" className="w-6 h-6 text-primary" stroke={1.5} />,
  <IconBook key="5" className="w-6 h-6 text-primary" stroke={1.5} />,
  <IconUsersGroup key="6" className="w-6 h-6 text-primary" stroke={1.5} />
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-alt-background)]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl lg:text-[40px] font-serif text-dark text-center mb-16"
          >
            Todo lo que necesitas para ganar tu beca
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl border-[0.5px] border-muted transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {ICONS[index]}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
