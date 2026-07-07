'use client';

import { useState } from 'react';
import { MdStar, MdChevronLeft, MdChevronRight, MdFormatQuote } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setDirection(1);  setCurrent((c) => (c + 1) % TESTIMONIALS.length); };

  const t = TESTIMONIALS[current];

  return (
    <section className="py-28 lg:py-36 bg-charcoal relative overflow-hidden" ref={ref}>
      {/* Decorative radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]
                      bg-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="eyebrow-light">Testimonials</p>
          <h2 className="section-heading-light mb-4">
            What Our Customers <span className="text-gold">Say</span>
          </h2>
          <div className="gold-rule mx-auto" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.38 }}
                className="bg-charcoal-700 border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <MdFormatQuote className="text-gold/20 mb-4" size={64} />
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <MdStar key={i} className="text-gold" size={20} />
                  ))}
                </div>
                <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-medium italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full
                                  flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-[15px]">{t.name}</div>
                    <div className="text-white/45 text-sm">{t.location}</div>
                    <div className="text-gold text-xs font-semibold mt-0.5">{t.project}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-7 h-2 bg-gold' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/15 hover:border-gold/50
                           hover:bg-gold/10 text-white/60 hover:text-gold flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <MdChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/15 hover:border-gold/50
                           hover:bg-gold/10 text-white/60 hover:text-gold flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <MdChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
