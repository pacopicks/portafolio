"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const itemsArr = [
  {
    id: 1,
    url: "https://placehold.co/500x650/1a1a1a/aaaaaa/png?text=Retrato",
    title: "Retrato",
    description:
      "Retratos que buscan capturar la personalidad y la expresión natural de cada persona.",
    tags: ["Retrato", "Estudio", "Luz natural"],
  },
  {
    id: 2,
    url: "https://placehold.co/500x650/2b2b2b/aaaaaa/png?text=Paisaje",
    title: "Paisaje",
    description:
      "Paisajes que exploran la escala y el silencio de los espacios abiertos.",
    tags: ["Paisaje", "Naturaleza", "Horizonte"],
  },
  {
    id: 3,
    url: "https://placehold.co/500x650/3c3c3c/aaaaaa/png?text=Calle",
    title: "Calle",
    description:
      "Fotografía callejera: momentos espontáneos capturados en el día a día urbano.",
    tags: ["Calle", "Documental", "Urbano"],
  },
  {
    id: 4,
    url: "https://placehold.co/500x650/242424/aaaaaa/png?text=Blanco+y+Negro",
    title: "Blanco y Negro",
    description:
      "Una serie en blanco y negro centrada en el contraste, la forma y la textura.",
    tags: ["Blanco y negro", "Contraste", "Textura"],
  },
  {
    id: 5,
    url: "https://placehold.co/500x650/333333/aaaaaa/png?text=Naturaleza",
    title: "Naturaleza",
    description:
      "Detalles de la naturaleza fotografiados de cerca, entre luz y textura.",
    tags: ["Naturaleza", "Macro", "Detalle"],
  },
  {
    id: 6,
    url: "https://placehold.co/500x650/1f1f1f/aaaaaa/png?text=Estudio",
    title: "Estudio",
    description:
      "Trabajo de estudio con luz controlada, pensado para producto y retrato.",
    tags: ["Estudio", "Producto", "Luz artificial"],
  },
  {
    id: 7,
    url: "https://placehold.co/500x650/262626/aaaaaa/png?text=Arquitectura",
    title: "Arquitectura",
    description:
      "Líneas, geometría y luz en espacios construidos.",
    tags: ["Arquitectura", "Geometría", "Luz"],
  },
  {
    id: 8,
    url: "https://placehold.co/500x650/292929/aaaaaa/png?text=Documental",
    title: "Documental",
    description:
      "Historias reales contadas a través de la cámara, sin puesta en escena.",
    tags: ["Documental", "Historia", "Real"],
  },
  {
    id: 9,
    url: "https://placehold.co/500x650/2f2f2f/aaaaaa/png?text=Editorial",
    title: "Editorial",
    description:
      "Series pensadas para revistas y proyectos editoriales, con una narrativa clara.",
    tags: ["Editorial", "Moda", "Narrativa"],
  },
  {
    id: 10,
    url: "https://placehold.co/500x650/1c1c1c/aaaaaa/png?text=Nocturna",
    title: "Nocturna",
    description:
      "Fotografía nocturna: luces largas, ciudad y cielo en equilibrio.",
    tags: ["Nocturna", "Larga exposición", "Ciudad"],
  },
  {
    id: 11,
    url: "https://placehold.co/500x650/353535/aaaaaa/png?text=Macro",
    title: "Macro",
    description:
      "Un acercamiento a lo pequeño: detalles que normalmente pasan desapercibidos.",
    tags: ["Macro", "Detalle", "Textura"],
  },
];

function Gallery({
  items,
  setIndex,
  setOpen,
  index,
}: {
  items: typeof itemsArr;
  setIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
  index: number;
}) {
  return (
    <div className="rounded-md w-fit mx-auto md:gap-2 gap-1 flex pb-20 pt-10 ">
      {items.slice(0, 11).map((item, i) => {
        return (
          <motion.img
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl ${
              index === i
                ? "w-[250px] "
                : "xl:w-[50px] md:w-[30px] sm:w-[20px] w-[14px]"
            } h-[200px] shrink-0  object-cover transition-[width] ease-in-out duration-300`}
            key={item.id}
            onMouseEnter={() => {
              setIndex(i);
            }}
            onMouseLeave={() => {
              setIndex(i);
            }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            src={item?.url}
            layoutId={String(item.id)}
          />
        );
      })}
    </div>
  );
}

export default function AccordionModal() {
  const [index, setIndex] = useState(5);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <div className="relative">
      <Gallery
        items={itemsArr}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="dark:bg-black/40 bg-white/40 backdrop-blur-lg fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={String(itemsArr[index].id)}
                className="w-[400px] h-[400px] rounded-2xl relative cursor-default overflow-hidden"
              >
                <Image
                  src={itemsArr[index].url}
                  width={400}
                  height={400}
                  alt="single-image"
                  className="rounded-2xl h-full w-full object-cover"
                />
                <article className="dark:bg-black/40 bg-white/40 backdrop-blur-md absolute -bottom-1 left-0 w-full rounded-md p-2">
                  <motion.h1
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-xl font-semibold"
                  >
                    {itemsArr[index].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ scaleY: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-sm leading-[100%] py-2"
                  >
                    {itemsArr[index].description}
                  </motion.p>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
