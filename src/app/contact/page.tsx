import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import { MdPhone, MdEmail, MdLocationOn, MdCheckCircle } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate',
  description:
    'Contact Konkus Construction for a free, no-obligation estimate. Serving Downriver Michigan with honest pricing and quality craftsmanship.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Contact Konkus Construction"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Project Today
            </span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            Fill out the form and we&apos;ll get back to you within 24 hours with an honest, no-pressure estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">Contact Information</h2>
                <div className="gold-divider mb-6" />
              </div>

              {/* Call button */}
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-4 bg-charcoal text-white rounded-2xl p-5 hover:bg-charcoal/90 transition-all group shadow-premium-lg"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <MdPhone className="text-gold" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-xs mb-0.5">Call Us Now</div>
                  <div className="font-bold text-lg">{COMPANY.phone}</div>
                </div>
              </a>

              {/* Email button */}
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-4 bg-gold text-white rounded-2xl p-5 hover:bg-gold-700 transition-all group shadow-gold"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MdEmail size={24} />
                </div>
                <div>
                  <div className="text-white/80 text-xs mb-0.5">Email Us</div>
                  <div className="font-bold text-sm break-all">{COMPANY.email}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-premium">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <MdLocationOn className="text-gold" size={24} />
                </div>
                <div>
                  <div className="text-charcoal/50 text-xs mb-0.5">Service Area</div>
                  <div className="font-bold text-charcoal">Downriver Michigan</div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-premium">
                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                  <MdCheckCircle className="text-gold" size={18} /> Business Hours
                </h3>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-charcoal">7am – 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-charcoal">8am – 2pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-charcoal/40">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-2xl p-5">
                <p className="text-charcoal font-semibold text-sm mb-1">🏠 Free Estimates</p>
                <p className="text-charcoal/60 text-sm">
                  All estimates are free, no-obligation, and provided in writing so you always know exactly what to expect.
                </p>
              </div>
            </div>

            {/* Form — wrapped in Suspense because ContactForm uses useSearchParams() */}
            <div className="lg:col-span-2">
              <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactFormSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-premium-lg p-8 md:p-10 animate-pulse">
      <div className="h-7 bg-charcoal/10 rounded-lg w-2/3 mb-3" />
      <div className="h-4 bg-charcoal/5 rounded w-1/2 mb-8" />
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="h-12 bg-charcoal/5 rounded-xl" />
          <div className="h-12 bg-charcoal/5 rounded-xl" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="h-12 bg-charcoal/5 rounded-xl" />
          <div className="h-12 bg-charcoal/5 rounded-xl" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="h-12 bg-charcoal/5 rounded-xl" />
          <div className="h-12 bg-charcoal/5 rounded-xl" />
        </div>
        <div className="h-36 bg-charcoal/5 rounded-xl" />
        <div className="h-14 bg-gold/20 rounded-xl" />
      </div>
    </div>
  );
}
