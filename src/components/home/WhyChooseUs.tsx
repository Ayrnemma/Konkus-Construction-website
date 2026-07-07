'use client';

import Link from 'next/link';
import { MdVerified, MdRequestQuote, MdAttachMoney, MdDiamond, MdPhone, MdLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHY_CHOOSE_US } from '@/lib/constants';

const icons = [MdVerified, MdRequestQuote, MdAttachMoney, MdDiamond, MdPhone, MdLocationOn];

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section className="py-28 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-18"
        >
          <p className="eyebrow">The Konkus Difference</p>
          <h2 className="section-heading mb-4">
            Why Homeowners <br />
            <span className="text-gold">Choose Us</span>
          </h2>
          <div className="gold-rule mx-auto mt-4 mb-6" />
          <p className="section-body">
            We built our reputation one satisfied homeowner at a time — by doing exactly
            what we say we&apos;ll do, when we say we&apos;ll do it.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = icons[i] ?? MdVerified;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group card-white p-7 rounded-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/8 group-hover:bg-gold/15 rounded-xl
                                flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="text-charcoal font-bold text-[16px] mb-2 group-hover:text-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-charcoal rounded-3xl px-8 py-10 flex flex-col md:flex-row
                     items-center justify-between gap-6 text-center md:text-left shadow-dark-xl"
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">
              Ready to get started?
            </h3>
            <p className="text-white/50 text-[15px]">
              Request your free, no-obligation estimate today.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 px-10">
            Request Free Estimate
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
