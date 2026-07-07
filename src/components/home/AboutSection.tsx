'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pillars = [
  'Honest communication from the first call to final walkthrough',
  'Dependable scheduling — we show up when we say we will',
  'Quality materials chosen for durability, not just aesthetics',
  'Your home treated with the same care as our own',
  'Transparent pricing with no surprise charges',
  'We don\'t walk away until you\'re genuinely satisfied',
];

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* ── Image stack ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Primary image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-dark-xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85"
                alt="Konkus Construction team at work"
                fill
                className="object-cover"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -bottom-7 -right-5 sm:-right-8 bg-white rounded-2xl shadow-dark-lg p-5 w-48 border border-charcoal/5"
            >
              <div className="gold-rule mb-3" />
              <p className="text-charcoal font-bold text-sm leading-snug">
                Family-Owned &amp; Operated
              </p>
              <p className="text-charcoal/50 text-xs mt-1">
                Proudly serving Downriver Michigan
              </p>
            </motion.div>

            {/* Background accent */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gold/6 -z-10" />
          </motion.div>

          {/* ── Copy ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-heading mb-5">
              Built on Trust. <br />
              <span className="text-gold">Driven by Craft.</span>
            </h2>
            <div className="gold-rule mb-8" />

            <div className="space-y-4 section-body mb-8">
              <p>
                We started Konkus Construction because we believe homeowners deserve honest
                communication, dependable craftsmanship, and quality work they can trust.
                Every project is treated like it&apos;s our own home.
              </p>
              <p>
                As a family-owned business rooted right here in Downriver Michigan, our
                reputation lives and breathes on every project we complete. We don&apos;t
                chase volume — we chase excellence. That means taking on the right projects,
                doing them properly, and building relationships that last well beyond the job.
              </p>
              <p>
                When you hire Konkus, you get direct access to the people doing the work —
                not a middleman, not a call center. Just honest contractors who care.
              </p>
            </div>

            {/* Pillars */}
            <ul className="space-y-2.5 mb-10">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <MdCheckCircle className="text-gold mt-0.5 shrink-0" size={18} />
                  <span className="text-charcoal/75 text-[15px] font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Estimate <MdArrowForward size={17} />
              </Link>
              <Link href="/about" className="btn-outline-gold">
                Our Story
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
