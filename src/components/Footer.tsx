import Link from "next/link";
import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-[#09090a] text-[#616262] py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">

          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col inline-block mb-4">
              <span className="text-xs font-sans text-[#616262] font-medium uppercase tracking-wider">
                Comunidad del Intercambio
              </span>
              <span className="text-2xl font-serif text-[#19aae5] leading-none mt-1">
                Beca Match
              </span>
            </Link>
            <p className="max-w-sm mt-4 text-sm leading-relaxed">
              Descubre qué becas internacionales tienes mayor probabilidad de ganar según tu perfil.
              Sistema inteligente de matching de becas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="#" className="hover:text-[#19aae5] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#19aae5] transition-colors">Términos de uso</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#19aae5] transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#19aae5] transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/comunidaddelintercambio/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#19aae5] hover:text-white transition-all text-[#616262]"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="w-5 h-5" stroke={1.5} />
              </a>
              <a
                href="https://www.tiktok.com/@comunidaddelintercambio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#19aae5] hover:text-white transition-all text-[#616262]"
                aria-label="TikTok"
              >
                <IconBrandTiktok className="w-5 h-5" stroke={1.5} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p>© {currentYear} Comunidad del Intercambio. Todos los derechos reservados.</p>
          <p>Diseñado con <span className="text-[#19aae5]">♥</span> para futuros becarios.</p>
        </div>
      </div>
    </footer>
  );
}
