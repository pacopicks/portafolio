"use client";

import Image from "next/image";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

const row1 = [
  { title: "Retrato", color: "1a1a1a" },
  { title: "Paisaje", color: "2b2b2b" },
  { title: "Calle", color: "3c3c3c" },
  { title: "Blanco y Negro", color: "242424" },
  { title: "Naturaleza", color: "333333" },
];

const row2 = [
  { title: "Estudio", color: "1f1f1f" },
  { title: "Arquitectura", color: "262626" },
  { title: "Documental", color: "292929" },
  { title: "Editorial", color: "2f2f2f" },
  { title: "Nocturna", color: "1c1c1c" },
];

export function ScrollVelocityShowcase() {
  return (
    <div className="w-full py-10">
      <div className="flex flex-col space-y-5">
        <ScrollVelocity velocity={3}>
          {row1.map((item) => (
            <div
              key={item.title}
              className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] overflow-hidden rounded-xl"
            >
              <Image
                src={`https://placehold.co/600x400/${item.color}/aaaaaa/png?text=${encodeURIComponent(item.title)}`}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </ScrollVelocity>

        <ScrollVelocity velocity={-3}>
          {row2.map((item) => (
            <div
              key={item.title}
              className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] overflow-hidden rounded-xl"
            >
              <Image
                src={`https://placehold.co/600x400/${item.color}/aaaaaa/png?text=${encodeURIComponent(item.title)}`}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </ScrollVelocity>

        <ScrollVelocity velocity={5} className="text-muted-foreground">
          Fotografía · Retrato · Paisaje · Calle ·&nbsp;
        </ScrollVelocity>
      </div>
    </div>
  );
}
