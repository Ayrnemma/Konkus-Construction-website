'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForward, MdKitchen, MdBathtub, MdFoundation, MdGridOn,
  MdFormatPaint, MdCarpenter, MdWallpaper, MdBuild, MdHandyman, MdAutoAwesome } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  kitchen:     <MdKitchen size={22} />,
  bathroom:    <MdBathtub size={22} />,
  basement:    <MdFoundation size={22} />,
  flooring:    <MdGridOn size={22} />,
  painting:    <MdFormatPaint size={22} />,
  trim:        <MdCarpenter size={22} />,
  drywall:     <MdWallpaper size={22} />,
  maintenance: <MdBuild size={22} />,
  repairs:     <MdHandyman size={22} />,
  custom:      <MdAutoAwesome size={22} />,
};

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow-light mb-3">What We Do</p>
          <h2 className="section-heading-light mb-4">
            Services Built Around <span className="text-gold">Your Home</span>
          </h2>
          <div className="gold-rule mx-auto mb-5" />
          <p className="section-body-light max-w-xl mx-auto">
            From a single repair to a full renovation — every job gets the same careful attention
            and honest approach.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08]
                           bg-white/[0.03] hover:bg-white/[0.07] hover:border-gold/30
                           transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    loading={i < 5 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest
                                   text-gold/90 bg-black/60 backdrop-blur-sm border border-gold/20
                                   px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-gold/70 group-hover:text-gold transition-colors duration-200 flex-shrink-0">
                      {ICON_MAP[service.icon]}
                    </span>
                    <h3 className="text-white font-bold text-[14px] leading-tight group-hover:text-gold
                                   transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/40 text-[12px] leading-relaxed flex-1 mb-3">
                    {service.description.slice(0, 100)}…
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold/60 group-hover:text-gold
                                   text-[10px] font-bold uppercase tracking-wider transition-all duration-200
                                   group-hover:gap-2">
                    Learn More <MdArrowForward size={11} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            href="/services"
            className="btn-ghost-white px-10 border-white/20 hover:border-gold/50"
          >
            View All Services <MdArrowForward size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
