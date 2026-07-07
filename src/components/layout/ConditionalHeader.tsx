'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';

/**
 * Renders the standard top Header only on pages that are NOT the homepage.
 * The homepage uses its own full-screen sidebar navigation (HeroSidebar).
 */
export function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <Header />;
}
