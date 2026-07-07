'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GALLERY_IMAGES } from '@/lib/constants';

export function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title">
              Recent{' '}
              <span className="text-gold">Projects</span>
            </h2>
            <div className="gold-divider mt-4" />
          </div>
          <Link href="/gallery" className="btn-outline-gold self-start md:self-auto">
            View Full Gallery <MdArrowForward size={18} />
          </Link>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300 ${
                i === 0 || i === 5 ? 'sm:row-span-2 aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
              {/* Category badge */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
