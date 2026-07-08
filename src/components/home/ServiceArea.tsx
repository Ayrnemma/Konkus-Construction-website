'use client';

import Link from 'next/link';
import { MdCheckCircle, MdArrowForward, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICE_AREAS, COMPANY } from '@/lib/constants';

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

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-dark-sm border border-cream-dark">
            {/* Dark header strip */}
            <div className="bg-charcoal px-8 py-5 text-center">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                Serving Downriver &amp; Metro Detroit
              </p>
            </div>

            {/* Body */}
            <div className="bg-cream px-8 py-8 text-center">
              <p className="text-charcoal font-bold text-xl mb-3">
                Don&apos;t see your city listed?
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Give us a call or request a free estimate. We proudly serve many surrounding
                communities throughout Downriver and Metro Detroit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request a Free Estimate <MdArrowForward size={17} />
                </Link>
                <a href={COMPANY.phoneHref} className="btn-secondary border-charcoal/15">
                  <MdPhone size={17} /> Call {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
