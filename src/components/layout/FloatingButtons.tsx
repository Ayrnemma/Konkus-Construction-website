'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdPhone, MdRequestQuote } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';
import clsx from 'clsx';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={clsx(
        'fixed bottom-6 right-4 z-50 flex flex-col gap-3 lg:hidden transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-gold text-white text-sm font-bold px-4 py-3 rounded-2xl shadow-gold shadow-lg hover:bg-gold-700 active:scale-95 transition-all"
        aria-label="Request estimate"
      >
        <MdRequestQuote size={20} />
        <span>Estimate</span>
      </Link>
      <a
        href={COMPANY.phoneHref}
        className="flex items-center gap-2 bg-charcoal text-white text-sm font-bold px-4 py-3 rounded-2xl shadow-premium-lg hover:bg-charcoal/90 active:scale-95 transition-all"
        aria-label={`Call ${COMPANY.phone}`}
      >
        <MdPhone size={20} />
        <span>Call Now</span>
      </a>
    </div>
  );
}
