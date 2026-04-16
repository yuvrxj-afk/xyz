import { Separator } from '@/components/ui/separator';
import { footerConfig } from '@/config/Footer';
import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-12 md:py-16">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {footerConfig.text}{' '}
          <span className="text-foreground font-medium">
            {footerConfig.developer}
          </span>
        </p>
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
