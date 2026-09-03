"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const latestWork = [
  { id: 1, label: "Retrato", color: "1a1a1a" },
  { id: 2, label: "Paisaje", color: "2b2b2b" },
  { id: 3, label: "Calle", color: "3c3c3c" },
];

export function PortfolioHome() {
  return (
    <section id="portafolio" className="flex flex-col lg:flex-row gap-4 py-16 scroll-mt-24">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-4 lg:self-start">
        <div className="relative w-full aspect-[4/5] lg:h-[calc(100vh-2rem)] overflow-hidden rounded-2xl bg-muted">
          <Image
            src="https://placehold.co/1200x1500/111111/e8e8e8/png?text=Foto+destacada"
            alt="Foto destacada"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 flex flex-col justify-between gap-6 p-6 lg:p-8 bg-muted rounded-2xl">
            <div className="flex gap-4 items-center">
              <div className="size-14 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
              <div>
                <h1 className="text-lg font-medium">[Nombre del estudiante]</h1>
                <p className="text-sm text-muted-foreground">
                  Fotógrafo/a en formación
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-[15px]">
              Estudiante de fotografía interesado/a en retrato, calle y
              paisaje. Reemplaza este texto con tu propia historia: dónde
              estudias, tu estilo y qué te gusta capturar.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#trabajo"
              className="p-4 bg-muted hover:bg-accent rounded-2xl flex items-center justify-between text-sm transition-colors"
            >
              Ver trabajo
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contacto"
              className="p-4 bg-primary text-primary-foreground rounded-2xl flex items-center justify-between text-sm"
            >
              Contactar
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wide">
              Trabajo reciente
            </h2>
            <a
              href="#trabajo"
              className="text-sm underline underline-offset-4"
            >
              Ver todo
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {latestWork.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted"
              >
                <Image
                  src={`https://placehold.co/400x550/${item.color}/aaaaaa/png?text=${item.label}`}
                  alt={item.label}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium drop-shadow">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
