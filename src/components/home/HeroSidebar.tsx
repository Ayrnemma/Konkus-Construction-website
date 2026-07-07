'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdPhone, MdArrowForward, MdMenu, MdClose,
  MdKitchen, MdBathtub, MdFoundation, MdGridOn,
  MdFormatPaint, MdCarpenter, MdWallpaper,
  MdBuild, MdHandyman, MdAutoAwesome,
} from 'react-icons/md';
import { COMPANY, NAV_LINKS, SERVICES, HERO_IMAGES } from '@/lib/constants';

/* ── icon map ─────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  kitchen:     <MdKitchen size={18} />,
  bathroom:    <MdBathtub size={18} />,
  basement:    <MdFoundation size={18} />,
  flooring:    <MdGridOn size={18} />,
  painting:    <MdFormatPaint size={18} />,
  trim:        <MdCarpenter size={18} />,
  drywall:     <MdWallpaper size={18} />,
  maintenance: <MdBuild size={18} />,
  repairs:     <MdHandyman size={18} />,
  custom:      <MdAutoAwesome size={18} />,
};

/* First 6 services shown in the right panel */
const PANEL_SERVICES = SERVICES.slice(0, 6);

/* ── vertical text helper ─────────────────────────────────── */
const vStyle: React.CSSProperties = {
  writingMode: 'vertical-rl',
  transform: 'rotate(180deg)',
};

export function HeroSidebar() {
  const pathname = usePathname();
  const [imgIndex, setImgIndex]     = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* rotate background every 5 s */
  const advance = useCallback(() => {
    setImgIndex((i) => (i + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP — 3-column layout (lg+)
      ══════════════════════════════════════════ */}
      <div className="hidden lg:flex h-screen overflow-hidden">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="w-[56px] flex-shrink-0 bg-[#080808] flex flex-col items-center
                          border-r border-white/[0.07] z-30 relative">
          {/* FREE ESTIMATE */}
          <Link
            href="/contact"
            className="mt-5 mb-1 border border-gold/60 hover:border-gold hover:bg-gold/10
                       transition-all duration-200 px-2.5 py-3.5 rounded-sm group"
          >
            <span
              style={vStyle}
              className="text-gold text-[9px] font-black uppercase tracking-[0.22em]
                         group-hover:tracking-[0.28em] transition-all duration-200 whitespace-nowrap"
            >
              Free Estimate
            </span>
          </Link>

          {/* Phone */}
          <a
            href={COMPANY.phoneHref}
            className="flex flex-col items-center gap-1.5 mb-2 mt-3 group"
            aria-label={`Call ${COMPANY.phone}`}
          >
            <MdPhone size={13} className="text-gold/70 group-hover:text-gold transition-colors" />
            <span
              style={vStyle}
              className="text-white/35 group-hover:text-white/65 text-[9px] tracking-wider
                         transition-colors whitespace-nowrap"
            >
              {COMPANY.phone}
            </span>
          </a>

          {/* Divider */}
          <div className="w-[24px] h-px bg-white/10 my-3" />

          {/* Nav items — bottom portion */}
          <nav className="flex flex-col items-center gap-5 mt-auto mb-8">
            {[...NAV_LINKS].reverse().map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-200
                    ${active ? 'text-gold' : 'text-white/35 hover:text-white/70'}`}
                >
                  {active && (
                    <span className="w-[18px] h-[2px] bg-gold rounded-full mb-0.5" />
                  )}
                  <span
                    style={vStyle}
                    className="text-[9px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* ── MAIN HERO ── */}
        <div className="flex-1 relative overflow-hidden">

          {/* Rotating background images */}
          <AnimatePresence initial={false}>
            <motion.div
              key={imgIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              <Image
                src={HERO_IMAGES[imgIndex]}
                alt="Konkus Construction project"
                fill
                className="object-cover object-center"
                priority={imgIndex === 0}
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlays */}
          <div className="absolute inset-0 bg-black/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end px-10 xl:px-14 pb-12">

            {/* Logo */}
            <div className="relative mb-6" style={{ height: 80, width: 260 }}>
              <Image
                src="/logo.png"
                alt="Konkus Construction"
                fill
                className="object-contain object-left drop-shadow-[0_2px_16px_rgba(155,117,53,0.5)]"
                priority
              />
            </div>

            {/* Headline + CTA grid */}
            <div className="flex items-end gap-10 xl:gap-16">

              {/* Headline */}
              <div className="flex-1 min-w-0">
                <h1 className="font-black leading-[0.88] tracking-[-0.03em]">
                  <span className="block text-white text-[clamp(52px,6vw,88px)]">Honest</span>
                  <span className="block text-white text-[clamp(52px,6vw,88px)]">Craftsmanship.</span>
                  <span className="block text-gold  text-[clamp(52px,6vw,88px)] italic">Built to Last.</span>
                </h1>
              </div>

              {/* Description + CTA */}
              <div className="flex flex-col gap-3 flex-shrink-0 w-[220px] xl:w-[260px] pb-1">
                <p className="text-white/55 text-[12px] leading-relaxed mb-1">
                  Serving homeowners throughout Downriver Michigan with dependable construction services,
                  quality workmanship, and honest communication from start to finish.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2.5 border border-white/25 hover:border-gold/60
                             bg-white/5 hover:bg-gold/8 text-white text-[12px] font-semibold
                             px-4 py-2.5 rounded-lg transition-all duration-200"
                >
                  <MdPhone size={14} className="text-gold flex-shrink-0" />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-[#B8950F]
                             text-black text-[12px] font-black uppercase tracking-wider
                             px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
                >
                  Request Free Estimate <MdArrowForward size={14} />
                </Link>
              </div>
            </div>

            {/* Image indicator dots */}
            <div className="flex gap-2 mt-6">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`transition-all duration-300 rounded-full
                    ${i === imgIndex ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT SERVICES PANEL ── */}
        <div className="w-[270px] xl:w-[300px] flex-shrink-0 flex flex-col bg-[#080808] border-l border-white/[0.07]">

          {/* Service cards — flex-1 each to divide height equally */}
          {PANEL_SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="flex-1 flex overflow-hidden border-b border-white/[0.07] group
                         hover:bg-white/[0.03] transition-colors duration-200 min-h-0"
            >
              {/* Thumbnail */}
              <div className="relative w-[100px] xl:w-[110px] flex-shrink-0 overflow-hidden">
                <Image
                  src={service.panelImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="110px"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* Label + icon */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3 py-3 px-1">
                <span className="text-gold/80 group-hover:text-gold transition-colors duration-200">
                  {ICON_MAP[service.icon]}
                </span>
                <span
                  style={vStyle}
                  className="text-white/55 group-hover:text-white/90 text-[9px] font-bold
                             uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-200"
                >
                  {service.title}
                </span>
              </div>
            </Link>
          ))}

          {/* Bottom strip */}
          <div className="flex-shrink-0 px-6 py-5 bg-[#0d0d0d] border-t border-gold/20">
            <p className="text-gold text-[9px] font-bold uppercase tracking-[0.22em] mb-1.5">
              Our Services
            </p>
            <p className="text-white font-black text-[15px] xl:text-[17px] leading-tight tracking-tight">
              Quality Work.<br />Every Detail.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-gold/70 hover:text-gold
                         text-[10px] font-semibold uppercase tracking-wider mt-3
                         transition-colors duration-200"
            >
              View All Services <MdArrowForward size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE — standard full-screen hero (< lg)
      ══════════════════════════════════════════ */}
      <div className="lg:hidden relative h-[100svh] overflow-hidden">

        {/* Rotating BG */}
        <AnimatePresence initial={false}>
          <motion.div
            key={imgIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={HERO_IMAGES[imgIndex]}
              alt="Konkus Construction project"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-10" />

        {/* Mobile top nav */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-4">
          <div className="relative h-12 w-44">
            <Image src="/logo.png" alt="Konkus Construction" fill className="object-contain object-left" priority />
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white/80 hover:text-white p-2 transition-colors"
            aria-label="Open menu"
          >
            <MdMenu size={26} />
          </button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
              />
              <motion.nav
                className="relative ml-auto w-72 h-full bg-[#0a0a0a] border-l border-white/10 flex flex-col p-8"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              >
                <button
                  onClick={() => setMobileOpen(false)}
                  className="self-end text-white/50 hover:text-white mb-10 p-1 transition-colors"
                  aria-label="Close menu"
                >
                  <MdClose size={22} />
                </button>
                <div className="flex flex-col gap-6 flex-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg font-bold uppercase tracking-widest transition-colors
                        ${pathname === link.href ? 'text-gold' : 'text-white/60 hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-2 text-white/50 text-sm"
                  >
                    <MdPhone size={15} className="text-gold" /> {COMPANY.phone}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="bg-gold text-black text-sm font-black uppercase tracking-wider
                               px-5 py-3 rounded-lg text-center transition-all active:scale-95"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile hero content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 pb-10">
          <div className="relative mb-5" style={{ height: 64, width: 220 }}>
            <Image
              src="/logo.png"
              alt="Konkus Construction"
              fill
              className="object-contain object-left drop-shadow-[0_2px_12px_rgba(155,117,53,0.5)]"
              priority
            />
          </div>

          <h1 className="font-black leading-[0.88] tracking-[-0.03em] mb-5">
            <span className="block text-white text-[clamp(40px,11vw,60px)]">Honest</span>
            <span className="block text-white text-[clamp(40px,11vw,60px)]">Craftsmanship.</span>
            <span className="block text-gold  text-[clamp(40px,11vw,60px)] italic">Built to Last.</span>
          </h1>

          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
            Serving Downriver Michigan with dependable construction services and honest communication
            from start to finish.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2.5 border border-white/25
                         bg-white/8 text-white text-sm font-semibold px-5 py-3.5 rounded-xl
                         hover:border-gold/50 transition-all duration-200"
            >
              <MdPhone size={16} className="text-gold" /> {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-[#B8950F]
                         text-black text-sm font-black uppercase tracking-wider
                         px-5 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Request Free Estimate <MdArrowForward size={15} />
            </Link>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`transition-all duration-300 rounded-full
                  ${i === imgIndex ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/25'}`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
