'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  'Family-owned and operated since day one',
  'Honest communication throughout every project',
  'Dependable scheduling — we show up when promised',
  'Premium quality materials sourced locally',
  'Long-term customer relationships over quick jobs',
  'Your home treated with the same care as our own',
];

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Konkus Construction owner and craftsman"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium-lg p-5 max-w-[200px]"
            >
              <div className="text-3xl font-bold text-charcoal">15+</div>
              <div className="text-sm text-charcoal/60 font-medium mt-1">Years Serving Downriver Michigan</div>
              <div className="gold-divider mt-3" />
            </motion.div>

            {/* Floating accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gold/20 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title mb-6">
              Built on Trust,{' '}
              <span className="text-gold">Driven by Craftsmanship</span>
            </h2>
            <div className="gold-divider mb-8" />

            <div className="space-y-5 text-charcoal/70 leading-relaxed">
              <p>
                Konkus Construction was founded on a simple belief: every homeowner deserves honest work at a fair price.
                As a family-owned business rooted in Downriver Michigan, we bring a personal commitment to quality that
                larger contractors simply can&apos;t match.
              </p>
              <p>
                From the moment you call us to the day we clean up and walk out your door, you&apos;ll experience the
                difference that genuine care makes. We listen carefully, communicate clearly, and execute with the
                precision of craftsmen who take real pride in their work.
              </p>
              <p>
                We don&apos;t just build — we build relationships. Many of our customers have been with us for years,
                trusting us with project after project because they know what they&apos;re going to get: excellence,
                integrity, and a smile when the job is done.
              </p>
            </div>

            {/* Values list */}
            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <MdCheckCircle className="text-gold mt-0.5 shrink-0" size={20} />
                  <span className="text-charcoal/80 text-sm font-medium">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Meet the Team <MdArrowForward size={18} />
              </Link>
              <Link href="/contact" className="btn-outline-gold">
                Get Your Free Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
