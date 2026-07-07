'use client';

import {
  MdVerified, MdRequestQuote, MdAttachMoney, MdDiamond,
  MdPhone, MdConstruction, MdLocationOn, MdStars
} from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHY_CHOOSE_US } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  MdVerified, MdRequestQuote, MdAttachMoney, MdDiamond,
  MdPhone, MdConstruction, MdLocationOn, MdStars,
};

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wood/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Why Konkus Construction
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            The Difference You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Can Feel
            </span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed">
            We built our reputation one satisfied homeowner at a time. Here&apos;s what you can expect
            when you hire Konkus Construction.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] ?? MdVerified;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="text-gold" size={24} />
                </div>

                <h3 className="text-white font-bold text-base mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-gold to-wood rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
