import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({
  children,
  className,
  variant = 'content',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: 'content' | 'wide';
}) {
  return (
    <div
      className={cn(
        'animate-fade-in-blur container mx-auto px-4',
        variant === 'content' && 'max-w-3xl',
        variant === 'wide' && 'max-w-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
