import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <main className="min-h-screen">
      <section
        id="intro"
        aria-label="Introduction"
        className="scroll-mt-28 px-0"
      >
        <Hero />
      </section>

      <section
        id="experience"
        aria-label="Work experience"
        className="border-border/60 bg-muted/35 scroll-mt-24 border-y py-16 md:py-24"
      >
        <Experience />
      </section>

      <section
        aria-label="Featured projects"
        className="scroll-mt-24 py-16 md:py-24"
      >
        <Work />
      </section>

      <section
        aria-label="About"
        className="border-border/50 bg-muted/25 scroll-mt-24 border-y py-16 md:py-24"
      >
        <About />
      </section>

      <section aria-label="GitHub" className="scroll-mt-24 py-16 md:py-24">
        <Github />
      </section>

      <section
        aria-label="Blog"
        className="border-border/50 bg-muted/35 scroll-mt-24 border-y py-16 md:py-24"
      >
        <Blog />
      </section>

      <section
        aria-label="Contact"
        className="scroll-mt-24 py-16 md:pt-24 md:pb-24"
      >
        <CTA />
      </section>
    </main>
  );
}
