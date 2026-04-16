'use client';

import { Button } from '@/components/ui/button';
import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';

export default function Projects() {
  return (
    <Container id="projects" variant="wide" className="mt-0">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={projects.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="btn-inner-shadow" asChild>
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
