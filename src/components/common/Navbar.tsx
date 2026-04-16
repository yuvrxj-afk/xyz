'use client';

import { navbarConfig } from '@/config/Navbar';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';
  const showSolidBar = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          'pointer-events-auto flex w-full max-w-6xl items-center gap-3 px-3 py-2 transition-[background,box-shadow,border-color,backdrop-filter] duration-300 md:gap-6 md:px-4 md:py-2.5',
          showSolidBar
            ? 'border-border/60 bg-background/88 shadow-sm backdrop-blur-xl md:rounded-2xl md:border'
            : 'hero-glass-surface rounded-2xl',
        )}
      >
        <Link
          href="/#intro"
          className={cn(
            'font-display shrink-0 text-[0.95rem] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-85 md:text-base',
            showSolidBar
              ? 'text-foreground'
              : 'text-zinc-950 dark:text-zinc-100',
          )}
        >
          {navbarConfig.wordmark}
        </Link>

        <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-0.5 sm:justify-center md:gap-1">
          {navbarConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'font-body-app rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors md:px-3',
                showSolidBar
                  ? 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                  : 'font-semibold text-zinc-800 hover:bg-zinc-950/[0.08] hover:text-zinc-950 dark:font-medium dark:text-zinc-300 dark:hover:bg-white/[0.08] dark:hover:text-white',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 [&_button]:border-zinc-900/10 dark:[&_button]:border-white/15">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </header>
  );
}
