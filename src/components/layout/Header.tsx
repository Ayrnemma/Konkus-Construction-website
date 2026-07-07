'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdPhone, MdMenu, MdClose } from 'react-icons/md';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import clsx from 'clsx';

export function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main header — always dark ─────────────── */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 bg-charcoal transition-all duration-300',
          scrolled
            ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)] py-3'
            : 'py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="group shrink-0" aria-label="Konkus Construction — Home">
              <div className="relative h-[52px] w-[176px] transition-opacity duration-200 group-hover:opacity-90">
                <Image
                  src="/logo.png"
                  alt="Konkus Construction"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'relative px-4 py-2 text-[14px] font-semibold rounded-lg transition-colors duration-150',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-white/75 hover:text-white'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] font-semibold transition-colors"
              >
                <MdPhone className="text-gold" size={17} />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary text-[13px] px-5 py-2.5 rounded-lg"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-1 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────────── */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-[300px] max-w-[88vw] bg-charcoal border-l border-white/10',
            'transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Top */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="relative h-12 w-40">
              <Image src="/logo.png" alt="Konkus Construction" fill className="object-contain object-left" />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <MdClose size={22} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors',
                  pathname === link.href
                    ? 'text-gold bg-gold/10'
                    : 'text-white/75 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="px-5 py-6 border-t border-white/10 space-y-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 rounded-xl border border-white/15 transition-colors text-[15px]"
            >
              <MdPhone size={18} className="text-gold" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full btn-primary rounded-xl py-3.5"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
