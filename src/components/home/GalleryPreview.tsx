'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GALLERY_IMAGES } from '@/lib/constants';

// Pick a visually varied 8-image preview
const PREVIEW_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
const preview = GALLERY_IMAGES.filter((img) => PREVIEW_IDS.includes(img.id));

export function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.04 });

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Our Work</p>
            <h2 className="section-heading">
              Recent <span className="text-gold">Projects</span>
            </h2>
            <div className="gold-rule mt-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <Link href="/gallery" className="btn-outline-gold self-start">
              View Full Gallery <MdArrowForward size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Gallery bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px]">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl shadow-dark-sm
                          hover:shadow-dark transition-all duration-300 cursor-pointer
                          ${i === 0 ? 'col-span-2 row-span-2' : ''}
                          ${i === 3 ? 'row-span-2' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/45
                              transition-all duration-300" />
              {/* Category chip on hover */}
              <div className="absolute bottom-3 left-3 translate-y-3 opacity-0
                              group-hover:translate-y-0 group-hover:opacity-100
                              transition-all duration-300">
                <span className="bg-gold text-white text-[11px] font-bold
                                  uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-charcoal/40 text-sm mt-8"
        >
          Photos will be replaced with your actual project photos.
        </motion.p>

      </div>
    </section>
  );
}
