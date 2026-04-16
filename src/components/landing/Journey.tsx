import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { journeyItems } from '@/config/Journey';
import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Journey() {
  return (
    <Container className="mt-0">
      <SectionHeading subHeading="My" heading="Journey" />
      <div className="mt-8 flex flex-col gap-4">
        {journeyItems.map((item) => (
          <Link className="group block" href={item.href} key={item.name}>
            <Card className="shadow-sm transition-shadow group-hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-md">
                  {(() => {
                    const Icon = item.icon as React.ComponentType<{
                      className?: string;
                    }>;
                    return <Icon className="size-4" />;
                  })()}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <ArrowRight className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
