import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { about, aboutStackLabels } from '@/config/About';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <Container className="mt-0">
      <SectionHeading subHeading="About" heading="Me" />
      <Card className="mt-8 shadow-sm">
        <CardHeader>
          <CardTitle className="font-display text-xl md:text-2xl">
            {about.name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {about.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {aboutStackLabels.map((item) =>
              item.href ? (
                <Badge key={item.label} variant="secondary" asChild>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </Link>
                </Badge>
              ) : (
                <Badge key={item.label} variant="outline">
                  {item.label}
                </Badge>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
