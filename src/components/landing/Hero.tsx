'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  heroBackgroundPosterSrc,
  heroBackgroundVideoSrc,
  heroConfig,
  heroVideoPlaybackRate,
  socialLinks,
} from '@/config/Hero';
import { parseBoldText } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';

import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { HeroBackgroundVideo } from './HeroBackgroundVideo';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.085, delayChildren: 0.06 },
  },
};

function splitDisplayName(full: string) {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return { line1: full, line2: null as string | null };
  const line2 = parts[parts.length - 1] ?? '';
  const line1 = parts.slice(0, -1).join(' ');
  return { line1, line2 };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  const { displayName, handle, title, bio, stackPills, buttons } = heroConfig;
  const { line1, line2 } = splitDisplayName(displayName);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const showVideo =
    hydrated && !reduceMotion && Boolean(heroBackgroundVideoSrc.trim());

  return (
    <div
      className={cn(
        'border-border/45 relative flex min-h-dvh w-full flex-col overflow-hidden border-b dark:border-white/[0.06]',
        '-mt-16 pt-16 md:-mt-[4.5rem] md:pt-[4.5rem]',
      )}
    >
      {showVideo ? (
        <HeroBackgroundVideo
          src={heroBackgroundVideoSrc}
          playbackRate={heroVideoPlaybackRate}
          posterSrc={heroBackgroundPosterSrc}
        />
      ) : (
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
          aria-hidden
        />
      )}

      <div
        className="hero-video-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />

      <Container
        variant="wide"
        className="relative z-10 flex flex-1 flex-col justify-center px-4 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24"
      >
        <motion.div
          className={cn(
            'hero-glass-surface mx-auto w-full max-w-xl rounded-[1.5rem] px-7 py-9 md:max-w-2xl md:rounded-[1.75rem] md:px-11 md:py-11 lg:max-w-[40rem]',
            'text-center md:text-left',
          )}
          initial={reduceMotion ? 'show' : 'hidden'}
          animate="show"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="font-body-app mb-5 text-[11px] font-bold tracking-[0.32em] text-zinc-800 uppercase dark:text-zinc-400"
          >
            @{handle}
            <span
              className="mx-2.5 text-zinc-500 dark:text-zinc-600"
              aria-hidden
            >
              ·
            </span>
            <span className="text-zinc-700 dark:text-zinc-500">
              Full-stack · Web3 · AI
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="mb-5">
            <h1 className="font-heading-app dark:hero-on-video text-[clamp(2.25rem,6vw,4.25rem)] leading-[0.95] tracking-[-0.02em] text-balance text-zinc-950 dark:text-white">
              <span className="block md:inline">{line1}</span>
              {line2 ? (
                <>
                  <span className="hidden md:inline">&nbsp;</span>
                  <span className="mt-1 block text-zinc-900 md:mt-0 md:inline dark:text-zinc-100">
                    {line2}
                  </span>
                </>
              ) : null}
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-body-app mb-6 text-lg leading-snug font-semibold text-zinc-950 md:text-xl md:leading-snug dark:font-medium dark:text-zinc-100"
          >
            {title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-body-app mx-auto mb-8 max-w-prose text-[0.95rem] leading-relaxed font-medium text-zinc-800 md:mx-0 md:text-base md:leading-relaxed dark:font-normal dark:text-zinc-300/95"
          >
            {parseBoldText(bio).map((part) =>
              part.bold ? (
                <strong
                  key={part.key}
                  className="font-bold text-zinc-950 dark:font-semibold dark:text-zinc-100"
                >
                  {part.text}
                </strong>
              ) : (
                <span key={part.key}>{part.text}</span>
              ),
            )}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap items-center justify-center gap-2 md:justify-start"
          >
            {stackPills.map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-app inline-flex items-center gap-2 rounded-full border border-zinc-900/20 bg-white/90 py-1.5 pr-3 pl-2 text-xs font-semibold text-zinc-950 shadow-sm transition-colors hover:border-zinc-900/35 hover:bg-white dark:border-white/[0.12] dark:bg-white/[0.06] dark:font-medium dark:text-zinc-200 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/[0.1]"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white/95 ring-1 ring-zinc-900/[0.06] dark:bg-zinc-950/80 dark:ring-white/10 [&_svg]:size-[1.125rem] [&_svg]:shrink-0">
                  {pill.icon}
                </span>
                {pill.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start"
          >
            {buttons.map((button, index) => {
              const IconComponent =
                buttonIcons[button.icon as keyof typeof buttonIcons];
              const isPrimary = button.variant === 'default';
              return (
                <Button
                  key={index}
                  variant={isPrimary ? 'default' : 'outline'}
                  size="lg"
                  className={cn(
                    'font-body-app h-12 rounded-xl px-7 text-[0.95rem] font-semibold',
                    isPrimary &&
                      'border-0 bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100',
                    !isPrimary &&
                      'border-zinc-900/35 bg-transparent font-semibold text-zinc-950 hover:bg-zinc-950/[0.08] dark:border-white/20 dark:font-semibold dark:text-white dark:hover:bg-white/[0.08] dark:hover:text-white',
                  )}
                  asChild
                >
                  <Link
                    href={button.href}
                    className="inline-flex items-center justify-center gap-2"
                    {...(button.href.startsWith('http')
                      ? {
                          target: '_blank' as const,
                          rel: 'noopener noreferrer' as const,
                        }
                      : {})}
                  >
                    {IconComponent ? (
                      <span className="flex size-4 shrink-0 items-center justify-center opacity-90 [&_svg]:size-4">
                        <IconComponent />
                      </span>
                    ) : null}
                    {button.text}
                  </Link>
                </Button>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-1 border-t border-zinc-900/18 pt-6 md:justify-start dark:border-white/[0.08]"
          >
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-10 rounded-full text-zinc-800 hover:bg-zinc-950/[0.08] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
                    asChild
                  >
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={link.name}
                      className="inline-flex items-center justify-center [&_svg]:size-[1.15rem]"
                    >
                      {link.icon}
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
