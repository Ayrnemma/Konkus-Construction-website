'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, GALLERY_FILTERS } from '@/lib/constants';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-charcoal text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Project{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">Gallery</span>
        </h1>
        <p className="text-white/60 text-xl max-w-xl mx-auto">
          Browse our completed projects — each one a testament to quality craftsmanship and attention to detail.
        </p>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap justify-center mb-12">
            {GALLERY_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gold text-white shadow-gold'
                    : 'bg-cream text-charcoal/70 hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="masonry-grid"
            >
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="masonry-item group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg cursor-pointer"
                >
                  <div className={`relative w-full overflow-hidden ${
                    img.height === 'tall' ? 'aspect-[3/4]' :
                    img.height === 'short' ? 'aspect-[4/3]' : 'aspect-square'
                  }`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-2">
                        {img.category}
                      </span>
                      <p className="text-white text-sm font-medium">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal/40">
              <p className="text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Ready to Add Your Project to Our Gallery?
          </h2>
          <p className="text-charcoal/60 mb-8">
            Let&apos;s create something beautiful together. Request your free estimate today.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Free Estimate <MdArrowForward size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
