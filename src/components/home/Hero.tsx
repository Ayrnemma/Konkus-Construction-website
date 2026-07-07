'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhone, MdArrowForward, MdStar, MdVerified } from 'react-icons/md';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
          alt="Beautiful home construction and remodeling"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-wood/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <MdVerified className="text-gold" size={18} />
            <span className="text-white/90 text-sm font-semibold">Licensed & Insured · Downriver Michigan</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance"
          >
            Honest Craftsmanship.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Built to Last.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            Serving homeowners throughout Downriver Michigan with dependable construction services,
            quality workmanship, and honest communication from start to finish.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4 rounded-xl shadow-gold">
              Request Free Estimate
              <MdArrowForward size={20} />
            </Link>
            <a href={COMPANY.phoneHref} className="btn-ghost text-base px-8 py-4 rounded-xl">
              <MdPhone size={20} />
              Call {COMPANY.phone}
            </a>
          </motion.div>

          {/* Stars & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {/* Stars */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <MdStar key={i} className="text-gold" size={22} />
                ))}
                <span className="text-white/90 font-semibold text-sm ml-2">5.0</span>
              </div>
              <p className="text-white/60 text-xs">100+ 5-star reviews from local homeowners</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/20" />

            {/* Stats */}
            <div className="flex items-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
