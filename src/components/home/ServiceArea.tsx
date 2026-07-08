'use client';

import { MdLocationOn, MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICE_AREAS } from '@/lib/constants';

export function ServiceArea() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="service-area" className="py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="eyebrow">Where We Work</p>
          <h2 className="section-heading mb-4">
            Proudly Serving <span className="text-gold">Downriver Michigan</span>
          </h2>
          <div className="gold-rule mx-auto mb-6" />
          <p className="section-body">
            We&apos;re local — your neighbors. Every community we serve gets
            the same level of craftsmanship we&apos;d want in our own homes.
          </p>
        </motion.div>

        {/* Area chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SERVICE_AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.04 }}
              className="flex items-center gap-2 bg-cream border border-cream-dark
                         rounded-full px-4 py-2.5 hover:bg-gold/8 hover:border-gold/20
                         transition-colors duration-200 cursor-default group"
            >
              <MdCheckCircle className="text-gold shrink-0" size={15} />
              <span className="text-charcoal/75 text-sm font-medium group-hover:text-charcoal transition-colors">
                {area}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-4xl mx-auto"
        >
          {/* Gold header bar */}
          <div className="bg-charcoal rounded-t-3xl px-6 py-4 flex items-center gap-3">
            <MdLocationOn className="text-gold shrink-0" size={22} />
            <div>
              <p className="text-white font-bold text-sm leading-tight">Service Area</p>
              <p className="text-white/50 text-xs">Downriver Michigan</p>
            </div>
          </div>

          {/* Map iframe */}
          <div className="relative w-full aspect-[16/9] rounded-b-3xl overflow-hidden shadow-dark-xl">
            <iframe
              src="https://maps.google.com/maps?q=Southgate%2C+Michigan+48195&t=&z=11&ie=UTF8&iwloc=&output=embed"
              title="Konkus Construction service area — Downriver Michigan"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-charcoal/45 text-sm mt-5">
            Don&apos;t see your city?{' '}
            <a href="tel:+17344717196" className="text-gold hover:text-gold-700 font-semibold transition-colors">
              Give us a call
            </a>{' '}
            — we may still be able to help.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
