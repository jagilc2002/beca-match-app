"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconX, IconLoader2, IconCheck } from "@tabler/icons-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [form, setForm] = useState({ nombres: "", apellidos: "", email: "" });
  const [errors, setErrors] = useState({ nombres: "", apellidos: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = { nombres: "", apellidos: "", email: "" };
    let valid = true;

    if (!form.nombres.trim() || form.nombres.trim().length < 2) {
      newErrors.nombres = "Ingresa tu nombre completo";
      valid = false;
    }
    if (!form.apellidos.trim() || form.apellidos.trim().length < 2) {
      newErrors.apellidos = "Ingresa tus apellidos";
      valid = false;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simular llamada al servidor
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#09090a]/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con degradado sutil */}
              <div className="relative bg-gradient-to-br from-[#f5f9fb] to-white px-8 pt-8 pb-6 border-b border-[#abcdd8]/30">
                {/* Botón cerrar */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f5f9fb] hover:bg-[#abcdd8]/30 flex items-center justify-center transition-colors duration-200 text-[#616262] hover:text-[#09090a]"
                  aria-label="Cerrar modal"
                >
                  <IconX className="w-4 h-4" stroke={2} />
                </button>

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#abcdd8]/40 shadow-sm">
                    <Image
                      src="/brand-logo.jpg"
                      alt="Comunidad del Intercambio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#616262]">
                      Comunidad del Intercambio
                    </p>
                    <p className="text-base font-serif text-[#19aae5] leading-none">
                      Beca Match
                    </p>
                  </div>
                </motion.div>

                {/* Título */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-[#09090a] leading-tight mb-1">
                    Comenzar mi match
                  </h2>
                  <p className="text-sm text-[#616262]">
                    Crea tu cuenta gratis y descubre tus becas en minutos.
                  </p>
                </motion.div>
              </div>

              {/* Contenido del formulario */}
              <div className="px-8 py-7">
                <AnimatePresence mode="wait">
                  {success ? (
                    // Estado de éxito
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-6 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#19aae5]/10 flex items-center justify-center">
                        <IconCheck className="w-8 h-8 text-[#19aae5]" stroke={2.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-[#09090a] mb-1">
                          ¡Bienvenido, {form.nombres}!
                        </h3>
                        <p className="text-sm text-[#616262]">
                          Te hemos enviado un enlace de acceso a{" "}
                          <span className="text-[#19aae5] font-medium">{form.email}</span>
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="mt-2 text-sm font-medium text-[#616262] hover:text-[#19aae5] transition-colors"
                      >
                        Cerrar ventana
                      </button>
                    </motion.div>
                  ) : (
                    // Formulario
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex flex-col gap-4"
                    >
                      {/* Fila: Nombres y Apellidos */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FieldGroup
                          id="nombres"
                          label="Nombres"
                          placeholder="Ej. María"
                          value={form.nombres}
                          error={errors.nombres}
                          onChange={handleChange}
                        />
                        <FieldGroup
                          id="apellidos"
                          label="Apellidos"
                          placeholder="Ej. García"
                          value={form.apellidos}
                          error={errors.apellidos}
                          onChange={handleChange}
                        />
                      </div>

                      <FieldGroup
                        id="email"
                        label="Correo electrónico"
                        type="email"
                        placeholder="tu@correo.com"
                        value={form.email}
                        error={errors.email}
                        onChange={handleChange}
                      />

                      {/* CTA */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className="mt-2 w-full h-12 bg-[#19aae5] hover:brightness-105 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#19aae5]/20 disabled:opacity-80"
                      >
                        {loading ? (
                          <>
                            <IconLoader2 className="w-4 h-4 animate-spin" />
                            Procesando...
                          </>
                        ) : (
                          "Continuar →"
                        )}
                      </motion.button>

                      {/* Nota de privacidad */}
                      <p className="text-center text-[11px] text-[#616262] leading-relaxed">
                        Al continuar, aceptas nuestros{" "}
                        <a href="#" className="text-[#19aae5] hover:underline">
                          Términos de uso
                        </a>{" "}
                        y{" "}
                        <a href="#" className="text-[#19aae5] hover:underline">
                          Política de Privacidad
                        </a>
                        .
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Subcomponente reutilizable para cada campo
function FieldGroup({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-[#09090a] tracking-wide">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={`w-full h-11 px-4 rounded-xl border text-sm text-[#09090a] placeholder-[#abcdd8] bg-white transition-all duration-200 outline-none
          focus:ring-2 focus:ring-[#19aae5]/30 focus:border-[#19aae5]
          ${error ? "border-red-400 ring-2 ring-red-100" : "border-[#abcdd8] hover:border-[#19aae5]/50"}`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
