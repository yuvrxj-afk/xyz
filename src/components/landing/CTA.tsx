'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ctaConfig } from '@/config/CTA';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { cn } from '@/lib/utils';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

interface CallToActionProps {
  linkText?: string;
  calLink?: string;
  preText?: string;
  backgroundVideoSrc?: string;
  backgroundPosterSrc?: string;
}

export default function CTA({
  linkText = ctaConfig.linkText,
  calLink = ctaConfig.calLink,
  preText = ctaConfig.preText,
  backgroundVideoSrc = ctaConfig.backgroundVideoSrc,
  backgroundPosterSrc = ctaConfig.backgroundPosterSrc,
}: CallToActionProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [showCalPopup, setShowCalPopup] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi('on', {
            action: 'bookingSuccessful',
            callback: () => {
              setShowCalPopup(false);
            },
          });
        }
      } catch (error) {
        console.error('Failed to initialize Cal API:', error);
      }
    };
    cal();
  }, []);

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic('medium');
    }
    setShowCalPopup(true);
  };

  const showVideo = Boolean(backgroundVideoSrc) && !reduceMotion;

  return (
    <>
      <Container className="mt-0">
        <SectionHeading subHeading="Contact" heading="Get in touch" />
        <Card
          className={cn(
            'liquid-glass font-body-app relative mt-8 overflow-hidden border-0 py-0 shadow-lg',
            'min-h-[260px] sm:min-h-[280px]',
          )}
        >
          {/* Optional video (prompts.md: autoPlay, loop, muted, playsInline) */}
          {showVideo && (
            <video
              className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-[0.35] dark:opacity-[0.28]"
              autoPlay
              loop
              muted
              playsInline
              poster={backgroundPosterSrc || undefined}
              aria-hidden
            >
              <source src={backgroundVideoSrc} type="video/mp4" />
            </video>
          )}

          {/* Editorial gradient + vignette (works with or without video) */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0 z-[1]',
              'from-primary/15 via-muted/60 to-background bg-gradient-to-br',
              'bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.55_0.18_277/0.18),transparent_55%)]',
            )}
            aria-hidden
          />
          <div
            className="from-background via-background/85 pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t to-transparent"
            aria-hidden
          />

          {reduceMotion && backgroundPosterSrc ? (
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-30 dark:opacity-25"
              style={{ backgroundImage: `url(${backgroundPosterSrc})` }}
              aria-hidden
            />
          ) : null}

          <CardHeader className="border-border/60 bg-card/75 relative z-10 border-b px-6 py-6 backdrop-blur-md sm:px-8">
            <CardTitle className="font-display text-lg">Cal.com</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {preText}
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-card/60 relative z-10 flex justify-center px-6 py-8 backdrop-blur-sm sm:justify-end sm:px-8">
            <Button
              variant="default"
              size="lg"
              className="btn-inner-shadow"
              onClick={handleButtonClick}
            >
              {linkText}
            </Button>
          </CardContent>
          <CardFooter className="border-border/50 bg-card/75 relative z-10 border-t px-6 py-3 text-xs backdrop-blur-md sm:px-8">
            <p className="text-muted-foreground">
              Opens a secure Cal.com window — pick a slot that works for you.
            </p>
          </CardFooter>
        </Card>
      </Container>

      <Dialog open={showCalPopup} onOpenChange={setShowCalPopup}>
        <DialogContent className="max-h-[90vh] max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-[calc(100vw-4rem)] md:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Book a meeting</DialogTitle>
            <DialogDescription>
              Pick a time to connect about opportunities or collaborations.
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[calc(90vh-220px)] overflow-y-auto rounded-lg border">
            <Cal
              calLink={calLink}
              config={{
                name: 'Portfolio Visitor',
                email: '',
                notes: 'Booked from portfolio website',
              }}
              className="h-[500px] w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
