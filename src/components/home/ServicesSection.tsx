'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/lib/constants';

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title mb-4">
            Expert Services for{' '}
            <span className="text-gold">Every Project</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-description">
            From full kitchen remodels to seasonal maintenance, we bring the same level of care and
            craftsmanship to every job — big or small.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group card overflow-hidden hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1 text-gold font-semibold text-sm hover:gap-2 transition-all"
                >
                  Get a Quote <MdArrowForward size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link href="/services" className="btn-primary">
            View All Services <MdArrowForward size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
