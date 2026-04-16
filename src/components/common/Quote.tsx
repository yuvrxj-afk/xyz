'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { quotes } from '@/config/Quote';
import { useEffect, useState } from 'react';

import Container from './Container';

export const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  if (!currentQuote) return null;

  const { quote, author } = currentQuote;

  return (
    <Container className="py-12 md:py-16">
      <Card className="liquid-glass font-body-app shadow-md">
        <CardContent className="pt-8">
          <blockquote className="text-foreground text-base leading-relaxed font-light italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </CardContent>
        <CardFooter className="text-muted-foreground justify-end border-t text-sm font-light italic">
          — {author}
        </CardFooter>
      </Card>
    </Container>
  );
};
