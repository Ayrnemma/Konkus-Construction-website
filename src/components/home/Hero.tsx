'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhone, MdArrowForward, MdVerified, MdLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-charcoal">

      {/* ── Background image ───────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
          alt="Premium home construction"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay — blends seamlessly with the header */}
        <div className="absolute inset-0 bg-charcoal/75" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />
        {/* Top strip — ensures header blends in perfectly */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      {/* ── Gold corner accent lines ───────────── */}
      <div className="absolute top-[76px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent z-10" />

      {/* ── Content ────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="flex flex-col items-center text-center">

            {/* ── LOGO — the centrepiece ───────── */}
            <motion.div
              {...fadeUp(0.05)}
              className="mb-10 md:mb-12"
            >
              <div className="relative inline-block">
                {/* Glow behind logo */}
                <div className="absolute inset-0 blur-2xl opacity-20 scale-110 bg-gold rounded-full" />
                <div className="relative h-[110px] w-[360px] max-w-[90vw]">
                  <Image
                    src="/logo.png"
                    alt="Konkus Construction"
                    fill
                    className="object-contain drop-shadow-[0_4px_32px_rgba(155,117,53,0.35)]"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Decorative gold rule ─────────── */}
            <motion.div
              {...fadeUp(0.15)}
              className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-10"
            />

            {/* ── Headline ─────────────────────── */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl"
            >
              Honest Craftsmanship.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                Built to Last.
              </span>
            </motion.h1>

            {/* ── Subheadline ──────────────────── */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
            >
              Serving homeowners throughout Downriver Michigan with dependable
              construction services, quality workmanship, and honest communication
              from start to finish.
            </motion.p>

            {/* ── CTA buttons ──────────────────── */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row items-center gap-3 mb-14"
            >
              <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-[15px]">
                Request Free Estimate
                <MdArrowForward size={18} />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="btn-ghost-white px-10 py-4 rounded-xl text-[15px]"
              >
                <MdPhone size={18} />
                Call {COMPANY.phone}
              </a>
            </motion.div>

            {/* ── Trust badges — ONLY truthful ones ── */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-5 py-2.5">
                <MdVerified className="text-gold shrink-0" size={17} />
                <span className="text-white/85 text-sm font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-5 py-2.5">
                <MdLocationOn className="text-gold shrink-0" size={17} />
                <span className="text-white/85 text-sm font-medium">Serving Downriver Michigan</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Scroll cue ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-10"
        aria-hidden="true"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
      </motion.div>

    </section>
  );
}
