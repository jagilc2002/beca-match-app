import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-[#fdfefe] text-[#616262] py-12 md:py-16 border-t border-[#abcdd8]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10 mb-12">

          {/* Branding */}
          <div className="max-w-sm">
            <Link href="/" className="flex flex-col inline-block mb-4">
              <span className="text-xs font-sans text-[#616262] font-medium uppercase tracking-wider">
                Comunidad del Intercambio
              </span>
              <span className="text-2xl font-serif text-[#19aae5] leading-none mt-1">
                Beca Match
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Descubre qué becas internacionales tienes mayor probabilidad de ganar según tu perfil.
              Sistema inteligente de matching de becas.
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-[#abcdd8]/30 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p>© {currentYear} Comunidad del Intercambio. Todos los derechos reservados.</p>
          <p>Diseñado con <span className="text-[#19aae5]">♥</span> para futuros becarios.</p>
        </div>
      </div>
    </footer>
  );
}
