"use client";

import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "portafolio", label: "Portafolio" },
  { id: "trabajo", label: "Trabajo" },
  { id: "contacto", label: "Contacto" },
];

export function SectionNav() {
  const scrollToSection = (id: string) => {
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navegación entre secciones"
      className="flex flex-wrap items-center justify-center gap-3 py-4"
    >
      {sections.map((section) => (
        <LiquidMetalButton
          key={section.id}
          label={section.label}
          onClick={() => scrollToSection(section.id)}
        />
      ))}
    </nav>
  );
}
