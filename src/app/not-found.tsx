import Link from 'next/link';
import Image from 'next/image';
import { MdHome, MdPhone, MdArrowForward } from 'react-icons/md';
import { COMPANY } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">
        <div className="relative h-20 w-64 mx-auto mb-12">
          <Image src="/logo.png" alt="Konkus Construction" fill className="object-contain" />
        </div>

        <div className="text-8xl font-bold text-gold/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-charcoal mb-4">Page Not Found</h1>
        <div className="gold-divider mx-auto mb-6" />
        <p className="text-charcoal/60 mb-10 leading-relaxed">
          Looks like this page has been demo&apos;d. Don&apos;t worry — our team is still here
          to help with your project. Head back home or give us a call.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <MdHome size={18} /> Back to Home
          </Link>
          <a href={COMPANY.phoneHref} className="btn-secondary">
            <MdPhone size={18} /> {COMPANY.phone}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Gallery', href: '/gallery' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-center gap-1 bg-white rounded-xl py-3 px-4 text-sm font-semibold text-charcoal hover:text-gold hover:shadow-premium transition-all group"
            >
              {link.label} <MdArrowForward size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
