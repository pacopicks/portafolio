"use client";

import AccordionModal from "@/components/ui/gallery-modal-accordion";

export function GallerySection() {
  return (
    <section id="trabajo" className="py-16 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Trabajo</h2>
        <p className="mt-3 text-muted-foreground">
          Pasa el cursor sobre cada foto para explorarla, haz clic para verla
          en grande.
        </p>
      </div>
      <AccordionModal />
    </section>
  );
}
