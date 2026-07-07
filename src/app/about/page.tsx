import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MdCheckCircle, MdArrowForward, MdPhone } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Konkus Construction — a family-owned company serving Downriver Michigan with honest craftsmanship, quality workmanship, and reliable communication on every project.',
};

const milestones = [
  { year: '2010', title: 'Founded', description: 'Konkus Construction was established with a mission of honest, quality craftsmanship.' },
  { year: '2013', title: 'Expanded Services', description: 'Added basement finishing and full kitchen/bathroom remodeling to our service lineup.' },
  { year: '2016', title: '200+ Projects', description: 'Celebrated completing 200+ projects across Downriver Michigan.' },
  { year: '2019', title: 'Fully Licensed & Insured', description: 'Achieved all licensing and insurance certifications for complete homeowner protection.' },
  { year: '2022', title: '400+ Projects', description: 'Milestone of 400+ completed projects and a 5-star average rating from customers.' },
  { year: 'Today', title: 'Still Growing', description: 'Still family-owned, still honest, still committed to the communities we serve.' },
];

const teamValues = [
  { title: 'Honesty', description: 'We tell you exactly what we see, what it will cost, and how long it will take. No embellishments.' },
  { title: 'Craftsmanship', description: 'We take personal pride in every joint, every finish, every detail. Mediocre is never acceptable.' },
  { title: 'Reliability', description: 'We show up when we say we will, we finish when we say we will, and we answer when you call.' },
  { title: 'Respect', description: 'Your home is your sanctuary. We treat it with the same care and respect as our own.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Konkus Construction team at work"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            A Family Business Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-wood">
              Integrity
            </span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            We&apos;re not a big corporation — we&apos;re your neighbors. And we build like it.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-premium-lg aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Konkus Construction owner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white rounded-2xl p-6 shadow-gold">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium opacity-90">Years in Business</div>
              </div>
            </div>

            <div>
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title mb-6">
                Why We Started{' '}
                <span className="text-gold">Konkus Construction</span>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-charcoal/70 leading-relaxed">
                <p>
                  Konkus Construction was born from a straightforward idea: homeowners deserve a contractor
                  they can actually trust. We were tired of hearing about homeowners getting burned by
                  contractors who over-promised, under-delivered, and disappeared when problems arose.
                </p>
                <p>
                  So we built something different. A company where your calls get answered. Where your
                  questions get honest answers. Where the price you&apos;re quoted is the price you pay.
                  Where every project is treated as if it&apos;s our own home.
                </p>
                <p>
                  As a family-owned business rooted right here in Downriver Michigan, we have a stake in
                  this community. Our reputation lives and breathes on every project we complete. That&apos;s
                  not a marketing line — it&apos;s simply how we operate.
                </p>
                <p>
                  Over 500+ projects later, our commitment hasn&apos;t changed. If anything, the satisfaction
                  we see on our customers&apos; faces when a project is complete drives us to keep raising
                  our own bar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title">
              Our Core <span className="text-gold">Values</span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((val) => (
              <div key={val.title} className="card p-8 text-center group hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                  <MdCheckCircle className="text-gold" size={32} />
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-3">{val.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">
              How We Got <span className="text-gold">Here</span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-wood to-gold/20" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 bg-white border-2 border-gold rounded-full flex items-center justify-center -translate-x-1/2">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                  </div>
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-1">{m.year}</div>
                  <h3 className="text-charcoal font-bold text-lg mb-1">{m.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/60 text-lg mb-10">Let&apos;s talk about your project. No pressure, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate <MdArrowForward size={18} />
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
