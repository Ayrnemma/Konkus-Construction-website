'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdPhone, MdMenu, MdClose, MdArrowForward } from 'react-icons/md';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import clsx from 'clsx';

export function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* On the homepage the header starts transparent and solidifies on scroll.
     On all other pages it is always the solid charcoal bar. */
  const solid = !isHome || scrolled;

  return (
    <>
      {/* ── Main header ─────────────────────────────── */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          solid
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-6">

            {/* ── Logo — raw SVG, no box, no filters, exact colors ── */}
            <Link href="/" className="group shrink-0" aria-label="Konkus Construction — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Konkus Construction"
                width={196}
                height={140}
                className="transition-opacity duration-200 group-hover:opacity-85 w-auto"
                style={{ height: 60 }}
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      'relative px-4 py-2 text-[14px] font-semibold rounded-lg transition-colors duration-150',
                      active
                        ? 'text-gold'
                        : solid
                          ? 'text-white/70 hover:text-white'
                          : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop right ── */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-white/65 hover:text-white text-[14px] font-semibold transition-colors"
              >
                <MdPhone className="text-gold" size={16} />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#B8950F] active:scale-[0.97]
                           text-black text-[13px] font-black uppercase tracking-wide
                           px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                Free Estimate <MdArrowForward size={14} />
              </Link>
            </div>

            {/* ── Mobile burger ── */}
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

      {/* ── Mobile drawer ───────────────────────────── */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={clsx(
            'absolute top-0 right-0 h-full w-[300px] max-w-[88vw] bg-[#0a0a0a] border-l border-white/[0.08]',
            'transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Konkus Construction" style={{ height: 46 }} className="w-auto" />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-white/50 hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <MdClose size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors',
                  pathname === link.href
                    ? 'text-gold bg-gold/10'
                    : 'text-white/65 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-5 py-6 border-t border-white/[0.08] space-y-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 w-full bg-white/8 hover:bg-white/12
                         text-white font-semibold py-3.5 rounded-xl border border-white/12
                         transition-colors text-[14px]"
            >
              <MdPhone size={17} className="text-gold" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-[#B8950F]
                         text-black font-black uppercase tracking-wide text-[13px]
                         py-3.5 rounded-xl transition-all active:scale-[0.98]"
            >
              Request Free Estimate <MdArrowForward size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
