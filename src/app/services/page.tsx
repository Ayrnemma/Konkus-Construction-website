import type { Metadata } from 'next';
import Link from 'next/link';
import { MdArrowForward, MdPhone } from 'react-icons/md';
import { SERVICES, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Konkus Construction offers kitchen remodeling, bathroom remodeling, finished basements, flooring, interior painting, trim & finish carpentry, drywall repair, seasonal maintenance, and general home repairs throughout Downriver Michigan.',
};

const FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111'/%3E%3Cpolygon points='0,180 200,40 400,180 360,180 200,70 40,180' fill='%23C4922A' opacity='.5'/%3E%3Ctext x='200' y='240' font-family='Arial' font-size='14' fill='%23C4922A' text-anchor='middle'%3EKonkus Construction%3C/text%3E%3C/svg%3E";

export default function ServicesPage() {
  return (
    <div className="pt-[76px]">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Construction services"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow-light mb-5">What We Build</p>
          <h1 className="section-heading-light text-5xl md:text-6xl mb-6">
            Expert Services for{' '}
            <span className="text-gold">Every Home</span>
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="section-body-light max-w-xl mx-auto">
            From a single repair to a full renovation, we bring the same premium craftsmanship
            and honest approach to every job.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-dark-xl bg-[#111]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_SRC;
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-charcoal/75 backdrop-blur-sm text-gold text-[11px] font-bold
                                     uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/25">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <div className="gold-rule mb-6" />
                  <p className="section-body mb-8 text-lg">{service.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-primary">
                      Get a Quote <MdArrowForward size={17} />
                    </Link>
                    <a href={COMPANY.phoneHref} className="btn-secondary border-charcoal/15">
                      <MdPhone size={17} /> Call Us
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
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading-light mb-4">Don&apos;t See Your Project?</h2>
          <p className="section-body-light mb-10">
            We handle a wide range of home improvement work. Just ask — we probably do it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us <MdArrowForward size={17} /></Link>
            <a href={COMPANY.phoneHref} className="btn-ghost-white"><MdPhone size={17} /> {COMPANY.phone}</a>
          </div>
        </div>
      </section>

    </div>
  );
}
