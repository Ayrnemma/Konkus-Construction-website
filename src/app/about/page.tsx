import type { Metadata } from 'next';
import Link from 'next/link';
import { MdCheckCircle, MdArrowForward, MdPhone } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Konkus Construction — a family-owned company serving Downriver Michigan with honest craftsmanship, quality workmanship, and reliable communication on every project.',
};

const values = [
  { title: 'Honesty First', description: 'We tell you exactly what we see, what it will cost, and how long it will take — no embellishments, no surprises.' },
  { title: 'Dependable Craft', description: 'Every joint, every finish, every detail is executed with precision. Mediocre simply isn\'t in our vocabulary.' },
  { title: 'Reliable Scheduling', description: 'We show up when we say we will, finish on schedule, and answer the phone when you call.' },
  { title: 'Respect for Your Home', description: 'Your home is your sanctuary. We protect it, clean up after ourselves, and treat it as our own.' },
];

export default function AboutPage() {
  return (
    <div className="pt-[76px]">

      {/* ── Page hero ─────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="About Konkus Construction"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow-light mb-5">Who We Are</p>
          <h1 className="section-heading-light text-5xl md:text-6xl mb-6">
            A Family Business Built{' '}
            <span className="text-gold">on Integrity</span>
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="section-body-light max-w-xl mx-auto">
            We&apos;re not a big corporation — we&apos;re your neighbors, and we build like it.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-dark-xl bg-[#111]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85"
                  alt="Konkus Construction team"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-5 sm:-right-7 bg-gold text-white rounded-2xl p-6 shadow-gold-lg">
                <p className="font-bold text-lg leading-tight">Family-Owned<br />&amp; Operated</p>
                <p className="text-white/70 text-sm mt-1">Downriver Michigan</p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-heading mb-5">
                Why We Started <span className="text-gold">Konkus Construction</span>
              </h2>
              <div className="gold-rule mb-8" />
              <div className="space-y-4 section-body">
                <p>
                  We started Konkus Construction because we believe homeowners deserve honest
                  communication, dependable craftsmanship, and quality work they can trust.
                  Every project is treated like it&apos;s our own home.
                </p>
                <p>
                  As a family-owned business rooted in Downriver Michigan, our reputation
                  lives and breathes on every single project we complete. We don&apos;t chase
                  volume — we chase excellence. That means taking on the right projects,
                  doing them properly, and building relationships that last well beyond the job.
                </p>
                <p>
                  When you hire Konkus, you get direct access to the people doing the work —
                  not a middleman, not a call center. Just honest contractors who care about
                  the community they live and work in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="section-heading mb-4">
              Our Core <span className="text-gold">Values</span>
            </h2>
            <div className="gold-rule mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-white p-7 rounded-2xl group hover:-translate-y-1 transition-all">
                <MdCheckCircle className="text-gold mb-4" size={28} />
                <h3 className="font-bold text-charcoal text-[16px] mb-2 group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-charcoal/60 text-[14px] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading-light mb-4">Ready to Work Together?</h2>
          <p className="section-body-light mb-10">Let&apos;s talk about your project — no pressure, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate <MdArrowForward size={17} />
            </Link>
            <a href={COMPANY.phoneHref} className="btn-ghost-white">
              <MdPhone size={17} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
