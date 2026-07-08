import type { Metadata } from 'next';
import Link from 'next/link';
import { MdCheckCircle, MdPhone, MdHome } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Thank You!',
  description: 'Your message has been received. Konkus Construction will be in touch shortly.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Konkus Construction" style={{ height: 80 }} className="mx-auto mb-10 w-auto" />

        {/* Check icon */}
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <MdCheckCircle className="text-gold" size={52} />
        </div>

        <h1 className="text-4xl font-bold text-charcoal mb-4">You&apos;re All Set!</h1>
        <div className="gold-divider mx-auto mb-6" />
        <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
          Thank you for reaching out to Konkus Construction. We&apos;ve received your request and
          will get back to you within <strong className="text-charcoal">24 hours</strong> with your
          free, no-obligation estimate.
        </p>
        <p className="text-charcoal/60 mb-10">
          If you have an urgent need, don&apos;t hesitate to call us directly:
        </p>

        <a
          href={COMPANY.phoneHref}
          className="inline-flex items-center gap-3 bg-charcoal text-white font-bold px-8 py-4 rounded-2xl shadow-premium-lg hover:bg-charcoal/90 transition-all mb-4 w-full justify-center"
        >
          <MdPhone size={22} /> {COMPANY.phone}
        </a>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-700 transition-colors"
        >
          <MdHome size={20} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}
