import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Konkus Construction.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <p className="section-subtitle">Legal</p>
        <h1 className="text-4xl font-bold text-charcoal mb-4">Privacy Policy</h1>
        <div className="gold-divider mb-8" />
        <p className="text-charcoal/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out our contact form, request an estimate, or call us. This includes your name, phone number, email address, and project details.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, provide estimates, schedule services, and communicate about your project. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">3. Data Security</h2>
            <p>We implement reasonable security measures to protect your information. However, no transmission over the internet is 100% secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal mb-3">4. Contact Us</h2>
            <p>If you have questions about this privacy policy, contact us at <a href={COMPANY.emailHref} className="text-gold hover:underline">{COMPANY.email}</a> or <a href={COMPANY.phoneHref} className="text-gold hover:underline">{COMPANY.phone}</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-gold font-semibold hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
