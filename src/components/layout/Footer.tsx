import Link from 'next/link';
import Image from 'next/image';
import { MdPhone, MdEmail, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-16 w-52 bg-white rounded-xl p-2">
                <Image src="/logo.png" alt="Konkus Construction" fill className="object-contain p-1" />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Family-owned construction serving Downriver Michigan with honest craftsmanship and quality workmanship since day one.
            </p>
            <div className="space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group"
              >
                <span className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MdPhone className="text-gold" size={18} />
                </span>
                <span className="text-sm font-medium">{COMPANY.phone}</span>
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group"
              >
                <span className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MdEmail className="text-gold" size={18} />
                </span>
                <span className="text-sm font-medium break-all">{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <span className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="text-gold" size={18} />
                </span>
                <span className="text-sm font-medium">{COMPANY.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm group"
                  >
                    <MdArrowForward size={14} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-gold hover:text-wood transition-colors text-sm font-semibold group">
                  <MdArrowForward size={14} />
                  Request Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm group"
                  >
                    <MdArrowForward size={14} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-xs text-white/60 bg-white/5 hover:bg-gold/10 hover:text-gold transition-colors px-3 py-1.5 rounded-full cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gold/10 rounded-xl border border-gold/20">
              <p className="text-sm text-white/80 mb-3">Ready to start your project?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors"
              >
                Get a Free Estimate <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {currentYear} {COMPANY.name}. All rights reserved. Proudly serving Downriver Michigan.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
