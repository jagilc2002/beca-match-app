"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeDownVariant } from "@/lib/animations";
import { useModal } from "@/lib/modal-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const links = [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#precios", label: "Precios" },
  ];

  return (
    <motion.nav
      variants={fadeDownVariant}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-40 w-full border-b border-[#abcdd8]/30 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-[10px] font-sans text-[#616262] font-medium uppercase tracking-wider leading-none">
            Comunidad del Intercambio
          </span>
          <span className="text-lg md:text-2xl font-serif text-[#19aae5] leading-tight">
            Beca Match
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#09090a] hover:text-[#19aae5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openModal}
              className="text-sm font-medium text-[#09090a] hover:text-[#19aae5] transition-colors"
            >
              Iniciar sesión
            </button>
          </div>
          <button
            onClick={openModal}
            className="bg-[#19aae5] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-105 transition-all"
          >
            Comenzar gratis
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#09090a]"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#09090a]/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white p-6 shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans text-[#616262] font-medium uppercase tracking-wider">
                    Comunidad del Intercambio
                  </span>
                  <span className="text-xl font-serif text-[#19aae5]">Beca Match</span>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
                  <X className="w-6 h-6 text-[#09090a]" />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-[#09090a] hover:text-[#19aae5] transition-colors border-b border-[#abcdd8]/20 pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  className="text-lg font-medium text-[#09090a] hover:text-[#19aae5] transition-colors border-b border-[#abcdd8]/20 pb-4 text-left"
                  onClick={() => { setIsOpen(false); openModal(); }}
                >
                  Iniciar sesión
                </button>
              </div>

              <button
                onClick={() => { setIsOpen(false); openModal(); }}
                className="w-full bg-[#19aae5] text-white font-semibold py-3.5 rounded-xl hover:brightness-105 transition-all mt-6"
              >
                Comenzar gratis
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
