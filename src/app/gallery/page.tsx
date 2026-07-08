'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, GALLERY_FILTERS } from '@/lib/constants';

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Cpolygon points='0,180 200,40 400,180 360,180 200,70 40,180' fill='%23C4922A' opacity='.5'/%3E%3Ctext x='200' y='240' font-family='Arial' font-size='14' fill='%23C4922A' text-anchor='middle'%3EKonkus Construction%3C/text%3E%3C/svg%3E";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="pt-[76px]">

      {/* Hero */}
      <section className="py-24 bg-charcoal text-center">
        <p className="eyebrow-light mb-5">Our Portfolio</p>
        <h1 className="section-heading-light text-5xl md:text-6xl mb-6">
          Project <span className="text-gold">Gallery</span>
        </h1>
        <div className="gold-rule mx-auto mb-6" />
        <p className="section-body-light max-w-md mx-auto">
          Browse completed projects — each one a testament to honest craftsmanship
          and attention to detail.
        </p>
        <p className="text-white/25 text-xs mt-4">
          Placeholder photos — will be replaced with actual project photos.
        </p>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-gold text-white shadow-gold'
                    : 'bg-cream text-charcoal/65 hover:bg-gold/8 hover:text-gold border border-cream-dark'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="masonry-grid"
            >
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="masonry-item group relative overflow-hidden rounded-2xl shadow-dark-sm hover:shadow-dark cursor-pointer bg-[#111]"
                >
                  <div className={`relative w-full ${
                    img.height === 'tall' ? 'aspect-[3/4]' :
                    img.height === 'short' ? 'aspect-[4/3]' : 'aspect-square'
                  }`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = FALLBACK_SRC;
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4
                                    opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                                    transition-all duration-300">
                      <span className="bg-gold text-white text-[11px] font-bold uppercase tracking-wider
                                        px-3 py-1.5 rounded-full self-start mb-1.5">
                        {img.category}
                      </span>
                      <p className="text-white text-sm font-medium">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="section-heading-light mb-4">Start Your Project</h2>
          <p className="section-body-light mb-8">Request a free estimate and let&apos;s get to work.</p>
          <Link href="/contact" className="btn-primary px-10">
            Request Free Estimate <MdArrowForward size={17} />
          </Link>
        </div>
      </section>

    </div>
  );
}
