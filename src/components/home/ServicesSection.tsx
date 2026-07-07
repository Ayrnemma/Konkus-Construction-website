'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/lib/constants';

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.04 });

  return (
    <section id="services" className="py-28 lg:py-36 bg-charcoal relative overflow-hidden" ref={ref}>

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C4924A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-18"
        >
          <p className="eyebrow-light">What We Build</p>
          <h2 className="section-heading-light mb-4">
            Services Built for{' '}
            <span className="text-gold">Every Home</span>
          </h2>
          <div className="gold-rule mx-auto mt-4 mb-6" />
          <p className="section-body-light">
            From full renovations to targeted repairs, we bring the same premium
            craftsmanship and honest approach to every single job.
          </p>
        </motion.div>

        {/* Grid — 2 columns on md, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.055 }}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-700 border border-white/8
                         hover:border-gold/30 hover:-translate-y-1
                         transition-all duration-350 shadow-dark"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                {/* Category chip */}
                <span className="absolute top-4 left-4 bg-charcoal/70 backdrop-blur-sm text-gold
                                  text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full
                                  border border-gold/25">
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-[17px] mb-2.5 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-white/50 text-[14px] leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-gold font-semibold text-[13px]
                             hover:gap-3 transition-all duration-200"
                >
                  Get a Quote
                  <MdArrowForward size={15} />
                </Link>
              </div>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary px-10">
            View All Services <MdArrowForward size={17} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
