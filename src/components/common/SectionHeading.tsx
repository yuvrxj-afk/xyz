import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
  className?: string;
}

export default function SectionHeading({
  subHeading,
  heading,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="liquid-glass w-fit rounded-full p-px">
        <Badge
          variant="secondary"
          className="font-body-app rounded-full border-0 px-3 py-1 text-[10px] font-medium tracking-widest uppercase"
        >
          {subHeading}
        </Badge>
      </span>
      <h2 className="font-heading-app text-foreground text-3xl leading-[0.95] tracking-tight md:text-4xl lg:text-[2.75rem]">
        {heading}
      </h2>
    </div>
  );
}
