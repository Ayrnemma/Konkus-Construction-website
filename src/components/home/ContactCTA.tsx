'use client';

import Link from 'next/link';
import { MdPhone, MdEmail, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { COMPANY } from '@/lib/constants';

export function ContactCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden" ref={ref}>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
          alt="Build something great with Konkus Construction"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/88" />
        {/* Gradient edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/40" />
      </div>

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow-light mb-6">Let&apos;s Talk</p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]
                          tracking-[-0.03em] mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Great Together
            </span>
          </h2>

          <div className="gold-rule mx-auto mb-8" />

          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Free estimates, honest pricing, dependable work.
            Reach out — we&apos;d love to hear about your project.
          </p>

          {/* Primary CTA */}
          <Link href="/contact" className="btn-primary px-12 py-5 text-[16px] rounded-xl inline-flex mb-10">
            Request Free Estimate <MdArrowForward size={19} />
          </Link>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-3 bg-white/8 hover:bg-white/14 border border-white/15
                         hover:border-white/25 text-white font-semibold px-7 py-4 rounded-2xl
                         transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <MdPhone className="text-gold shrink-0" size={22} />
              <div className="text-left">
                <div className="text-white/50 text-[11px] font-medium mb-0.5 uppercase tracking-wider">Call Us</div>
                <div className="text-[16px] font-bold">{COMPANY.phone}</div>
              </div>
            </a>
            <a
              href={COMPANY.emailHref}
              className="flex items-center gap-3 bg-white/8 hover:bg-white/14 border border-white/15
                         hover:border-white/25 text-white font-semibold px-7 py-4 rounded-2xl
                         transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <MdEmail className="text-gold shrink-0" size={22} />
              <div className="text-left">
                <div className="text-white/50 text-[11px] font-medium mb-0.5 uppercase tracking-wider">Email Us</div>
                <div className="text-[14px] font-bold break-all">{COMPANY.email}</div>
              </div>
            </a>
          </div>

        </motion.div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />
    </section>
  );
}
