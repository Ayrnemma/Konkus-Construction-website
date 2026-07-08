'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { MdPhone, MdArrowForward, MdVerified, MdLocationOn } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY, HERO_IMAGES } from '@/lib/constants';

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111'/%3E%3Cpolygon points='0,700 960,100 1920,700 1760,700 960,240 160,700' fill='%23C4922A' opacity='.4'/%3E%3C/svg%3E";

export function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  /* Background images rotate silently every 6 s — no visible UI controls */
  const advance = useCallback(
    () => setImgIndex((i) => (i + 1) % HERO_IMAGES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">

      {/* ── Rotating background images ──────────────────── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={imgIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGES[imgIndex]}
            alt="Konkus Construction premium work"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_SRC;
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Dark overlays — deep on left, lighter toward right ── */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* ── Hero content — left-aligned ─────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            className="text-gold/90 text-[11px] font-bold uppercase tracking-[0.28em] mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Downriver Michigan's Trusted Contractor
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-black leading-[0.9] tracking-[-0.03em] mb-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white text-[clamp(48px,7vw,90px)]">Honest</span>
            <span className="block text-white text-[clamp(48px,7vw,90px)]">Craftsmanship.</span>
            <span className="block text-gold  text-[clamp(48px,7vw,90px)] italic">Built to Last.</span>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            className="w-14 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full mb-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Description */}
          <motion.p
            className="text-white/58 text-[17px] leading-relaxed mb-9 max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            Serving homeowners throughout Downriver Michigan with dependable
            construction services, quality workmanship, and honest communication
            from start to finish.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-3 mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gold hover:bg-[#B8950F] active:scale-[0.97]
                         text-black font-black uppercase tracking-wide text-[14px]
                         px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(155,117,53,0.45)]
                         transition-all duration-200"
            >
              Request Free Estimate <MdArrowForward size={17} />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/18
                         backdrop-blur-sm border border-white/22 hover:border-white/38
                         text-white font-semibold text-[14px]
                         px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97]"
            >
              <MdPhone size={17} className="text-gold" />
              Call {COMPANY.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-[13px]">
              <MdVerified size={15} className="text-gold flex-shrink-0" />
              Licensed &amp; Insured
            </div>
            <div className="w-px h-3.5 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/50 text-[13px]">
              <MdLocationOn size={15} className="text-gold flex-shrink-0" />
              Serving Downriver Michigan
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Subtle scroll cue ─────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent" />
        <span className="text-white/25 text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
      </motion.div>

    </section>
  );
}
