"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import AuthModal from "@/components/AuthModal";

const ModalContext = createContext<{ openModal: () => void }>({ openModal: () => {} });

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
