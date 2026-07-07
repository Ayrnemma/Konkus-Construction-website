import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward, MdPhone } from 'react-icons/md';
import { SERVICES, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Konkus Construction offers kitchen remodeling, bathroom renovation, flooring installation, interior and exterior painting, drywall, basement finishing, and more throughout Downriver Michigan.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert Services for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Every Home
            </span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            From a single repair to a full home renovation, we bring the same premium craftsmanship to every job.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <div className="gold-divider mb-6" />
                  <p className="text-charcoal/70 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn-primary"
                    >
                      Get a Quote <MdArrowForward size={18} />
                    </Link>
                    <a href={COMPANY.phoneHref} className="btn-secondary">
                      <MdPhone size={18} /> Call Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Don&apos;t See Your Project Listed?</h2>
          <p className="text-white/60 text-lg mb-10">
            We handle a wide range of home improvement projects. Just ask — we probably do it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us <MdArrowForward size={18} />
            </Link>
            <a href={COMPANY.phoneHref} className="btn-ghost">
              <MdPhone size={18} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
