import { Button } from '@/components/ui/button';
import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';

export default function Experience() {
  return (
    <Container className="mt-0">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,11.5rem)_1fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading subHeading="Featured" heading="Experience" />
          <p className="text-muted-foreground mt-4 hidden max-w-[12rem] text-sm leading-relaxed lg:block">
            Production systems, onchain products, and full-stack ownership.
          </p>
        </div>

        <div className="lg:border-border flex flex-col gap-6 lg:border-l lg:pl-12">
          {experiences.slice(0, 2).map((experience: Experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
          <div className="flex justify-center lg:justify-start">
            <Button variant="outline" className="btn-inner-shadow" asChild>
              <Link href="/work-experience">Show all work experiences</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
