'use client';

import { MdLocationOn, MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICE_AREAS } from '@/lib/constants';

export function ServiceArea() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="service-area" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle">Where We Work</p>
            <h2 className="section-title mb-4">
              Proudly Serving{' '}
              <span className="text-gold">Downriver Michigan</span>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="section-description mb-8">
              We&apos;re local — your neighbors. We serve communities throughout the Downriver
              Michigan area with the same care and attention we&apos;d give our own homes.
            </p>

            {/* Areas list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                  className="flex items-center gap-2 bg-cream rounded-xl px-4 py-3"
                >
                  <MdCheckCircle className="text-gold shrink-0" size={16} />
                  <span className="text-charcoal/80 text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 bg-gold/5 border border-gold/20 rounded-2xl px-6 py-4">
              <MdLocationOn className="text-gold" size={24} />
              <div>
                <div className="font-semibold text-charcoal text-sm">Not on the list?</div>
                <div className="text-charcoal/60 text-sm">Call us — we may still be able to help!</div>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg bg-cream-dark aspect-square">
              {/* Map placeholder with styled content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream to-cream-dark">
                {/* Decorative map graphic */}
                <div className="relative w-64 h-64 mb-6">
                  {SERVICE_AREAS.slice(0, 8).map((area, i) => {
                    const angle = (i / 8) * 2 * Math.PI;
                    const radius = 90 + (i % 3) * 15;
                    const x = 50 + (radius / 130) * 45 * Math.cos(angle);
                    const y = 50 + (radius / 130) * 45 * Math.sin(angle);
                    return (
                      <div
                        key={area}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 bg-gold rounded-full shadow-gold" />
                          <span className="text-[9px] font-semibold text-charcoal/60 whitespace-nowrap mt-1">{area}</span>
                        </div>
                      </div>
                    );
                  })}
                  {/* Center pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-gold animate-float">
                        <MdLocationOn className="text-white" size={18} />
                      </div>
                      <div className="w-0.5 h-4 bg-gold/40 mt-1" />
                      <div className="w-2 h-0.5 bg-gold/20 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="text-center px-8">
                  <h3 className="font-bold text-charcoal text-lg mb-1">Downriver Michigan</h3>
                  <p className="text-charcoal/50 text-sm">15+ Communities Served</p>
                </div>
              </div>

              {/* Embed note */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="text-xs text-charcoal/30 bg-white/80 px-3 py-1 rounded-full">
                  Replace with Google Maps embed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
