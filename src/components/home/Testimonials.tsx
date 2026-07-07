'use client';

import { useState } from 'react';
import { MdStar, MdChevronLeft, MdChevronRight, MdFormatQuote } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239B7535' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">
            What Our{' '}
            <span className="text-gold">Customers Say</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </motion.div>

        {/* Testimonial slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-premium-lg"
              >
                {/* Quote icon */}
                <MdFormatQuote className="text-gold/20 mb-4" size={72} />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <MdStar key={i} className="text-gold" size={22} />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8 font-medium italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-wood rounded-full flex items-center justify-center text-white font-bold text-xl shadow-gold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-base">{testimonial.name}</div>
                    <div className="text-charcoal/50 text-sm">{testimonial.location}</div>
                    <div className="text-gold text-xs font-semibold mt-0.5">{testimonial.project}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-charcoal/20 hover:border-gold hover:bg-gold hover:text-white text-charcoal transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <MdChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-charcoal/20 hover:border-gold hover:bg-gold hover:text-white text-charcoal transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <MdChevronRight size={22} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* All testimonials grid (below) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={`mini-${t.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-premium border border-cream-dark"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <MdStar key={j} className="text-gold" size={14} />
                ))}
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3 mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-wood rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-xs">{t.name}</div>
                  <div className="text-charcoal/40 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
