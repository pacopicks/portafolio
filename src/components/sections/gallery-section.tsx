"use client";

import AccordionModal from "@/components/ui/gallery-modal-accordion";
import SocialCards from "@/components/ui/card-fan-carousel";

const mobileGalleryCards = [
  { imgUrl: "https://placehold.co/500x650/1a1a1a/aaaaaa/png?text=Retrato", alt: "Retrato" },
  { imgUrl: "https://placehold.co/500x650/2b2b2b/aaaaaa/png?text=Paisaje", alt: "Paisaje" },
  { imgUrl: "https://placehold.co/500x650/3c3c3c/aaaaaa/png?text=Calle", alt: "Calle" },
  { imgUrl: "https://placehold.co/500x650/242424/aaaaaa/png?text=Blanco+y+Negro", alt: "Blanco y Negro" },
  { imgUrl: "https://placehold.co/500x650/333333/aaaaaa/png?text=Naturaleza", alt: "Naturaleza" },
  { imgUrl: "https://placehold.co/500x650/1f1f1f/aaaaaa/png?text=Estudio", alt: "Estudio" },
  { imgUrl: "https://placehold.co/500x650/262626/aaaaaa/png?text=Arquitectura", alt: "Arquitectura" },
  { imgUrl: "https://placehold.co/500x650/292929/aaaaaa/png?text=Documental", alt: "Documental" },
  { imgUrl: "https://placehold.co/500x650/2f2f2f/aaaaaa/png?text=Editorial", alt: "Editorial" },
  { imgUrl: "https://placehold.co/500x650/1c1c1c/aaaaaa/png?text=Nocturna", alt: "Nocturna" },
  { imgUrl: "https://placehold.co/500x650/353535/aaaaaa/png?text=Macro", alt: "Macro" },
];

export function GallerySection() {
  return (
    <section id="trabajo" className="py-16 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Trabajo</h2>
        <p className="mt-3 text-muted-foreground">
          <span className="hidden md:inline">
            Pasa el cursor sobre cada foto para explorarla, haz clic para
            verla en grande.
          </span>
          <span className="md:hidden">
            Desliza con las flechas para ver más fotos.
          </span>
        </p>
      </div>

      {/* Hover-driven accordion: needs a mouse, so desktop/tablet only */}
      <div className="hidden md:block overflow-x-auto">
        <AccordionModal />
      </div>

      {/* Touch-friendly fan carousel with prev/next controls for mobile */}
      <div className="md:hidden overflow-x-hidden">
        <SocialCards cards={mobileGalleryCards} />
      </div>
    </section>
  );
}
