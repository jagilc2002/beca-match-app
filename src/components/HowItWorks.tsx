"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { IconClipboardList, IconBrain, IconTrophy } from "@tabler/icons-react";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const ICONS = [
  <IconClipboardList key="1" className="w-10 h-10 text-primary mb-6" stroke={1.5} />,
  <IconBrain key="2" className="w-10 h-10 text-primary mb-6" stroke={1.5} />,
  <IconTrophy key="3" className="w-10 h-10 text-primary mb-6" stroke={1.5} />
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-white">
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
            className="text-3xl md:text-4xl lg:text-[40px] font-serif text-dark text-center mb-20"
          >
            Tu match de beca en 3 pasos
          </motion.h2>

          <div className="relative flex flex-col md:flex-row gap-12 md:gap-8">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-muted/30 -z-10"></div>
            
            {/* Vertical Line for Mobile */}
            <div className="md:hidden absolute top-[10%] bottom-[10%] left-[2.25rem] w-[1px] bg-muted/30 -z-10"></div>

            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariant}
                className="relative flex-1 flex flex-col md:items-center text-left md:text-center group"
              >
                <div className="absolute top-0 right-4 md:top-auto md:right-auto md:left-1/2 md:-translate-x-1/2 -mt-4 md:-mt-8 text-[120px] font-serif font-bold text-primary opacity-10 pointer-events-none select-none leading-none z-0">
                  {index + 1}
                </div>
                
                <div className="flex md:block items-center gap-6 mb-4 md:mb-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border border-muted/30 shadow-sm flex items-center justify-center shrink-0 md:mx-auto">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="md:mt-12 pl-22 md:pl-0 relative z-10">
                  {ICONS[index]}
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
