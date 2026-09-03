import { ScrollVelocityShowcase } from '@/components/sections/scroll-velocity-showcase';
import { NameParticles } from '@/components/sections/name-particles';
import { SectionNav } from '@/components/sections/section-nav';
import { PortfolioHome } from '@/components/sections/portfolio-home';
import { MorphShowcase } from '@/components/sections/morph-showcase';
import { GallerySection } from '@/components/sections/gallery-section';
import { WorkExplained } from '@/components/sections/work-explained';
import { ContactSection } from '@/components/sections/contact-section';
import { CinematicFooter } from '@/components/ui/motion-footer';

export default function Home() {
  return (
    <>
      <header id="inicio" className="pt-28 pb-4 px-4 text-center scroll-mt-24">
        <NameParticles />
        <p className="mt-3 text-muted-foreground">
          Fotografía · Retrato, paisaje y calle
        </p>
        <SectionNav />
      </header>

      <ScrollVelocityShowcase />

      <div className="max-w-6xl mx-auto w-full px-4 md:px-8">
        <PortfolioHome />
        <MorphShowcase />
        <GallerySection />
        <WorkExplained />
        <ContactSection />
      </div>

      <CinematicFooter />
    </>
  );
}
