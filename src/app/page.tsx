import Hero from '@/components/landing/Hero';
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
    </main>
  );
}
