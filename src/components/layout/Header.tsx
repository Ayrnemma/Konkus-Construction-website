'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdPhone, MdMenu, MdClose } from 'react-icons/md';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import clsx from 'clsx';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-premium py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Konkus Construction Home">
              <div className="relative h-14 w-48 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Konkus Construction"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                    pathname === link.href
                      ? 'text-gold bg-gold/10'
                      : scrolled
                        ? 'text-charcoal hover:text-gold hover:bg-gold/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className={clsx(
                  'flex items-center gap-2 text-sm font-semibold transition-all duration-200',
                  scrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-white'
                )}
              >
                <MdPhone className="text-gold text-lg" />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-3 rounded-xl"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled ? 'text-charcoal hover:bg-charcoal/5' : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-dark">
              <div className="relative h-12 w-40">
                <Image src="/logo.png" alt="Konkus Construction" fill className="object-contain object-left" />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-charcoal hover:bg-charcoal/5"
                aria-label="Close navigation"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all',
                    pathname === link.href
                      ? 'text-gold bg-gold/10'
                      : 'text-charcoal hover:text-gold hover:bg-gold/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="px-6 py-6 border-t border-cream-dark space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 w-full bg-charcoal text-white font-semibold py-4 rounded-xl hover:bg-charcoal/90 transition-colors"
              >
                <MdPhone size={20} />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-gold text-white font-semibold py-4 rounded-xl hover:bg-gold-700 transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
