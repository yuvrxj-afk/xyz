'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';

const VIDEO_CLASS =
  'pointer-events-none absolute inset-0 size-full scale-[1.06] object-cover saturate-[1.06] brightness-[1.06] contrast-[1.02] dark:brightness-100 dark:contrast-100 dark:saturate-[1.05]';

type HeroBackgroundVideoProps = {
  src: string;
  playbackRate: number;
  posterSrc?: string;
};

/**
 * Two stacked players + crossfade at each loop boundary so a non-seamless
 * file does not flash a hard cut when HTML5 `loop` seeks to 0.
 */
export function HeroBackgroundVideo({
  src,
  playbackRate,
  posterSrc,
}: HeroBackgroundVideoProps) {
  const wrapA = useRef<HTMLDivElement>(null);
  const wrapB = useRef<HTMLDivElement>(null);
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    const wa = wrapA.current;
    const wb = wrapB.current;
    if (!a || !b || !wa || !wb || !src.trim()) return;

    let cancelled = false;
    let rafId = 0;
    let lead: 'a' | 'b' = 'a';
    let followerPrimed = false;

    const applyRate = () => {
      try {
        a.playbackRate = playbackRate;
        b.playbackRate = playbackRate;
      } catch {
        /* ignore */
      }
    };

    const run = () => {
      const D = a.duration;
      if (!Number.isFinite(D) || D <= 0) return () => undefined;

      const CROSS = Math.min(0.75, Math.max(0.4, D * 0.14));

      const tick = () => {
        if (cancelled) return;
        const leader = lead === 'a' ? a : b;
        const follower = lead === 'a' ? b : a;
        const wLeader = lead === 'a' ? wa : wb;
        const wFollow = lead === 'a' ? wb : wa;
        const t = leader.currentTime;

        if (t < D - CROSS) {
          wLeader.style.opacity = '1';
          wFollow.style.opacity = '0';
          followerPrimed = false;
        } else {
          if (!followerPrimed) {
            follower.currentTime = 0;
            void follower.play().catch(() => {});
            followerPrimed = true;
          }
          const p = Math.min(1, Math.max(0, (t - (D - CROSS)) / CROSS));
          wLeader.style.opacity = String(1 - p);
          wFollow.style.opacity = String(p);
        }
        rafId = requestAnimationFrame(tick);
      };

      const onAEnded = () => {
        if (cancelled || lead !== 'a') return;
        a.pause();
        a.currentTime = 0;
        followerPrimed = false;
        lead = 'b';
        wa.style.opacity = '0';
        wb.style.opacity = '1';
      };

      const onBEnded = () => {
        if (cancelled || lead !== 'b') return;
        b.pause();
        b.currentTime = 0;
        followerPrimed = false;
        lead = 'a';
        wa.style.opacity = '1';
        wb.style.opacity = '0';
      };

      a.addEventListener('ended', onAEnded);
      b.addEventListener('ended', onBEnded);
      applyRate();
      void a.play().catch(() => {});
      rafId = requestAnimationFrame(tick);

      return () => {
        cancelAnimationFrame(rafId);
        a.removeEventListener('ended', onAEnded);
        b.removeEventListener('ended', onBEnded);
        a.pause();
        b.pause();
      };
    };

    let innerCleanup: (() => void) | undefined;

    const onMeta = () => {
      if (cancelled) return;
      applyRate();
      innerCleanup = run();
    };

    if (a.readyState >= HTMLMediaElement.HAVE_METADATA) {
      applyRate();
      innerCleanup = run();
    } else {
      a.addEventListener('loadedmetadata', onMeta, { once: true });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      a.removeEventListener('loadedmetadata', onMeta);
      innerCleanup?.();
    };
  }, [src, playbackRate]);

  const poster = posterSrc || undefined;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        ref={wrapA}
        className="absolute inset-0"
        style={{ opacity: 1, willChange: 'opacity' }}
      >
        <video
          ref={videoA}
          className={cn(VIDEO_CLASS)}
          muted
          playsInline
          preload="auto"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div
        ref={wrapB}
        className="absolute inset-0"
        style={{ opacity: 0, willChange: 'opacity' }}
      >
        <video
          ref={videoB}
          className={cn(VIDEO_CLASS)}
          muted
          playsInline
          preload="auto"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
