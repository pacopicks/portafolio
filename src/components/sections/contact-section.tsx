"use client";

import { AtSign, Mail, Phone, FileDown } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const links = [
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: (
      <AtSign className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
  },
  {
    title: "Correo",
    href: "mailto:contacto@ejemplo.com",
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/0000000000",
    icon: (
      <Phone className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
  },
  {
    title: "Descargar portafolio",
    href: "#",
    icon: (
      <FileDown className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="flex flex-col items-center gap-6 py-24 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-center">
        Contacto
      </h2>
      <p className="text-muted-foreground text-center max-w-md px-4">
        ¿Quieres trabajar juntos? Escríbeme por cualquiera de estos medios.
      </p>
      <Dock className="items-end pb-3">
        {links.map((item) => (
          <DockItem
            key={item.title}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="h-full w-full flex items-center justify-center"
              >
                {item.icon}
              </a>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </section>
  );
}
