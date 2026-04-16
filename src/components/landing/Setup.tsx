import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Code from '../svgs/Code';

export default function Setup() {
  return (
    <Container className="mt-0">
      <SectionHeading subHeading="Development" heading="Setup" />
      <p className="text-muted-foreground mt-3 max-w-lg text-sm leading-relaxed">
        Editor and environment — kept minimal on the home page.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        <Link className="group block" href="/setup">
          <Card className="shadow-sm transition-shadow group-hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-md">
                <Code className="size-4" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <CardTitle className="text-base">VS Code / Cursor</CardTitle>
                <CardDescription>
                  Themes, extensions, and snippets for day-to-day work.
                </CardDescription>
              </div>
              <ArrowRight className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </CardHeader>
          </Card>
        </Link>
        <p className="text-muted-foreground text-xs">
          <Link
            href="/gears"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            Hardware & productivity →
          </Link>
        </p>
      </div>
    </Container>
  );
}
