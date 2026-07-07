import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Konkus Construction.',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <p className="section-subtitle">Legal</p>
        <h1 className="text-4xl font-bold text-charcoal mb-4">Terms of Service</h1>
        <div className="gold-divider mb-8" />
        <p className="text-charcoal/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-charcoal/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">1. Services</h2>
            <p>Konkus Construction provides home improvement and construction services throughout Downriver Michigan. All services are subject to a written agreement or contract prior to commencement of work.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">2. Estimates</h2>
            <p>Free estimates are provided in good faith based on information available at time of assessment. Final pricing may vary if unforeseen conditions are discovered during the project.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">3. Payment</h2>
            <p>Payment terms are specified in each individual project contract. We accept cash, check, and major credit cards.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">4. Warranty</h2>
            <p>We stand behind our work. Warranty terms vary by project type and are outlined in your project contract.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">5. Contact</h2>
            <p>Questions? Contact us at <a href={COMPANY.emailHref} className="text-gold hover:underline">{COMPANY.email}</a> or <a href={COMPANY.phoneHref} className="text-gold hover:underline">{COMPANY.phone}</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-gold font-semibold hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
