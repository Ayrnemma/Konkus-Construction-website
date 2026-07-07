'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdPhone, MdRequestQuote } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';
import clsx from 'clsx';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div
      className={clsx(
        'fixed bottom-5 right-4 z-50 flex flex-col gap-2.5 lg:hidden transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-gold text-white text-[13px] font-bold
                   px-4 py-3 rounded-xl shadow-gold-lg hover:bg-gold-700 active:scale-95 transition-all"
        aria-label="Request estimate"
      >
        <MdRequestQuote size={18} />
        Estimate
      </Link>
      <a
        href={COMPANY.phoneHref}
        className="flex items-center gap-2 bg-charcoal text-white text-[13px] font-bold
                   px-4 py-3 rounded-xl shadow-dark-lg hover:bg-charcoal-700 active:scale-95 transition-all
                   border border-white/10"
        aria-label={`Call ${COMPANY.phone}`}
      >
        <MdPhone size={18} />
        Call Now
      </a>
    </div>
  );
}
