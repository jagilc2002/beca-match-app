import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";

import IncludesSection from "@/components/IncludesSection";
import ForWhoSection from "@/components/ForWhoSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";

import GuaranteesSection from "@/components/GuaranteesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Para quién es */}
        <ForWhoSection />
        {/* 3. Problema */}
        <ProblemSection />
        {/* 4. Cómo funciona / Presentación */}
        <HowItWorks />

        {/* 6. Todo lo que recibirás */}
        <IncludesSection />
        {/* 7. Bono gratuito */}
        <BonusSection />
        {/* 8. Oferta / Precios */}
        <PricingSection />

        {/* 10. Garantías */}
        <GuaranteesSection />
        {/* 11. Preguntas frecuentes */}
        <FAQSection />
        {/* 12. Testimonios */}
        <TestimonialsSection />
        {/* 13. CTA Final */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
