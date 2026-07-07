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

        {/* Map placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-cream border border-cream-dark
                          aspect-[16/7] flex items-center justify-center shadow-dark-sm">
            <div className="text-center p-8">
              <MdLocationOn className="text-gold mx-auto mb-3 animate-float" size={40} />
              <p className="font-bold text-charcoal text-lg mb-1">Downriver Michigan</p>
              <p className="text-charcoal/45 text-sm">
                Replace this with a Google Maps embed
              </p>
            </div>
          </div>
          <p className="text-center text-charcoal/35 text-xs mt-4">
            Not on the list? Give us a call — we may still be able to help.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
