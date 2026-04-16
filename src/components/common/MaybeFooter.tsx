'use client';

import Footer from '@/components/common/Footer';
import { usePathname } from 'next/navigation';

/** Hides footer on `/` so the home shell is navbar + page content only. */
export default function MaybeFooter() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <Footer />;
}
