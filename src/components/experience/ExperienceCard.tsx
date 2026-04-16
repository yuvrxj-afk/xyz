import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="gap-0 py-0 shadow-sm">
      <CardHeader className="flex flex-col gap-4 border-b px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-row gap-4">
            <Image
              src={experience.image}
              alt={experience.company}
              width={48}
              height={48}
              className="border-border size-12 shrink-0 rounded-md border object-cover brightness-[1.06] contrast-[1.03] dark:brightness-110 dark:contrast-[1.04]"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle
                  className={cn(
                    'text-lg',
                    experience.isBlur ? 'blur-[5px]' : 'blur-none',
                  )}
                >
                  {experience.company}
                </CardTitle>
                {experience.website && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
                        <Link
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Website />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Website</TooltipContent>
                  </Tooltip>
                )}
                {experience.x && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
                        <Link
                          href={experience.x}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <X />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>X</TooltipContent>
                  </Tooltip>
                )}
                {experience.linkedin && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
                        <Link
                          href={experience.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedIn />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                )}
                {experience.github && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
                        <Link
                          href={experience.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                )}
                {experience.isCurrent && (
                  <Badge variant="secondary" className="gap-1.5 font-normal">
                    <span
                      className="bg-primary size-1.5 shrink-0 animate-pulse rounded-full"
                      aria-hidden
                    />
                    Working
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                {experience.position}
              </p>
            </div>
          </div>
          <div className="text-muted-foreground flex flex-col gap-0.5 text-sm md:items-end md:text-right">
            <p>
              {experience.startDate} —{' '}
              {experience.isCurrent ? 'Present' : experience.endDate}
            </p>
            <p>{experience.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-6 py-6">
        <div>
          <p className="text-sm font-medium">Technologies</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience.technologies.map((technology, techIndex: number) => (
              <Badge key={techIndex} variant="outline" asChild>
                <Link
                  href={technology.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {technology.name}
                </Link>
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground flex flex-col gap-2 text-sm leading-relaxed">
          {experience.description.map(
            (description: string, descIndex: number) => (
              <p
                key={descIndex}
                dangerouslySetInnerHTML={{
                  __html: `• ${parseDescription(description)}`,
                }}
              />
            ),
          )}
        </div>
      </CardContent>
    </Card>
  );
}
