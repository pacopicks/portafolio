"use client";

import { UserRound, Mountain, Contrast, BookOpen, PartyPopper } from "lucide-react";
import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";

const items: CardItem[] = [
  {
    id: "retrato",
    title: "Retrato",
    description:
      "Sesiones enfocadas en la expresión y la personalidad de cada persona.",
    imgSrc: "https://placehold.co/800x1000/1a1a1a/888888/png?text=Retrato",
    icon: <UserRound size={24} />,
    linkHref: "#",
  },
  {
    id: "paisaje",
    title: "Paisaje",
    description:
      "Espacios abiertos, luz natural y la escala del mundo exterior.",
    imgSrc: "https://placehold.co/800x1000/2b2b2b/888888/png?text=Paisaje",
    icon: <Mountain size={24} />,
    linkHref: "#",
  },
  {
    id: "byn",
    title: "Blanco y Negro",
    description:
      "Series centradas en contraste, textura y composición sin color.",
    imgSrc: "https://placehold.co/800x1000/3c3c3c/888888/png?text=Blanco+y+Negro",
    icon: <Contrast size={24} />,
    linkHref: "#",
  },
  {
    id: "editorial",
    title: "Editorial",
    description:
      "Proyectos narrativos pensados para revistas y publicaciones.",
    imgSrc: "https://placehold.co/800x1000/242424/888888/png?text=Editorial",
    icon: <BookOpen size={24} />,
    linkHref: "#",
  },
  {
    id: "eventos",
    title: "Eventos",
    description:
      "Cobertura de momentos espontáneos en bodas, fiestas y reuniones.",
    imgSrc: "https://placehold.co/800x1000/333333/888888/png?text=Eventos",
    icon: <PartyPopper size={24} />,
    linkHref: "#",
  },
];

export function WorkExplained() {
  return (
    <section className="flex w-full flex-col items-center gap-8 py-16">
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Áreas de trabajo
        </h2>
        <p className="mt-3 text-muted-foreground">
          Pasa el cursor (o toca en móvil) sobre cada categoría para leer de
          qué se trata.
        </p>
      </div>
      <ExpandingCards items={items} defaultActiveIndex={0} className="px-4" />
    </section>
  );
}
