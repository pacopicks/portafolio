"use client";

import IntroAnimation from "@/components/ui/scroll-morph-hero";

export function MorphShowcase() {
  return (
    <section className="hidden md:block py-8">
      <div className="relative w-full h-[650px] md:h-[800px] overflow-hidden rounded-2xl border border-border">
        <IntroAnimation />
      </div>
    </section>
  );
}
