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

  return (
    <>
      {/* ── STICKY MOBILE CTA BAR ── */}
      <div className="md:hidden sticky top-0 z-[60] w-full bg-[#22c55e] shadow-md shadow-[#22c55e]/30">
        <motion.button
          id="mobile-sticky-cta"
          onClick={openModal}
          animate={{
            boxShadow: [
              "0 4px 16px rgba(34,197,94,0.30)",
              "0 6px 24px rgba(34,197,94,0.55)",
              "0 4px 16px rgba(34,197,94,0.30)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative overflow-hidden w-full py-3.5 text-white font-bold text-sm text-center"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          />
          <span className="relative z-10">
            Aprovechar últimos 15 cupos disponibles
          </span>
        </motion.button>
      </div>

      {/* ── NAVBAR ── */}
      <motion.nav
        variants={fadeDownVariant}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-40 w-full border-b border-[#abcdd8]/30 bg-white/90 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex h-14 md:h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-[10px] font-sans text-[#616262] font-medium uppercase tracking-wider leading-none">
              Comunidad del Intercambio
            </span>
            <span className="text-lg md:text-2xl font-serif text-[#19aae5] leading-tight">
              Beca Match
            </span>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              id="navbar-cta"
              onClick={openModal}
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 4px 20px rgba(34,197,94,0.25)",
                  "0 6px 28px rgba(34,197,94,0.50)",
                  "0 4px 20px rgba(34,197,94,0.25)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden bg-[#22c55e] text-white font-bold text-sm px-5 py-3 rounded-xl"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <span className="relative z-10 whitespace-nowrap">
                Aprovechar últimos 15 cupos disponibles
              </span>
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#09090a]"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER — outside nav to avoid stacking context issues ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[80] bg-black/40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel — fully opaque white */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              style={{ backgroundColor: "#ffffff" }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] z-[90] md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer inner — padding and content */}
              <div className="flex flex-col h-full p-6" style={{ backgroundColor: "#ffffff" }}>

                {/* Header */}
                <div className="flex justify-end items-center mb-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar menú"
                    className="p-2 text-[#09090a]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="flex flex-col gap-1 flex-1">
                  {[
                    { href: "#como-funciona", label: "Cómo funciona" },
                    { href: "#precios", label: "Precios" },
                    { href: "#para-quien", label: "¿Para quién?" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-[#09090a] hover:text-[#19aae5] transition-colors border-b border-[#e5f0f6] py-4 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
