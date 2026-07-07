'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhone, MdEmail, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { COMPANY } from '@/lib/constants';

export function ContactCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&q=80"
          alt="Beautiful home construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Exceptional
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Get your free, no-obligation estimate today. We&apos;ll listen to your vision,
            assess your project, and give you an honest price — no surprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-base px-10 py-4 rounded-xl shadow-gold">
              Request Free Estimate <MdArrowForward size={20} />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all group"
            >
              <MdPhone className="text-gold" size={22} />
              <div className="text-left">
                <div className="text-xs text-white/60 font-normal">Call Us Now</div>
                <div className="text-base">{COMPANY.phone}</div>
              </div>
            </a>
            <a
              href={COMPANY.emailHref}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all group"
            >
              <MdEmail className="text-gold" size={22} />
              <div className="text-left">
                <div className="text-xs text-white/60 font-normal">Email Us</div>
                <div className="text-sm">{COMPANY.email}</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
