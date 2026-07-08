import Link from 'next/link';
import { MdPhone, MdEmail, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 border-t border-white/[0.07]">

      {/* ── Main content ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Konkus Construction"
                style={{ height: 64 }}
                className="w-auto"
              />
            </Link>

            <p className="text-white/45 text-[14px] leading-relaxed mb-7 max-w-xs">
              Family-owned construction serving Downriver Michigan with honest craftsmanship
              and quality workmanship.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href={COMPANY.phoneHref}
                 className="flex items-center gap-3 text-white/55 hover:text-gold transition-colors group">
                <span className="w-8 h-8 bg-white/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center transition-colors">
                  <MdPhone className="text-gold" size={15} />
                </span>
                <span className="text-[14px] font-medium">{COMPANY.phone}</span>
              </a>
              <a href={COMPANY.emailHref}
                 className="flex items-center gap-3 text-white/55 hover:text-gold transition-colors group">
                <span className="w-8 h-8 bg-white/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center transition-colors">
                  <MdEmail className="text-gold" size={15} />
                </span>
                <span className="text-[13px] font-medium break-all">{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/45">
                <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="text-gold" size={15} />
                </span>
                <span className="text-[14px] font-medium">{COMPANY.serviceArea}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konkus Construction on Facebook"
                className="w-9 h-9 bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/30
                           rounded-lg flex items-center justify-center text-white/50 hover:text-gold
                           transition-all duration-200"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konkus Construction on Instagram"
                className="w-9 h-9 bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/30
                           rounded-lg flex items-center justify-center text-white/50 hover:text-gold
                           transition-all duration-200"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                        className="flex items-center gap-2 text-white/50 hover:text-white text-[14px] transition-colors group">
                    <MdArrowForward size={13} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact"
                      className="flex items-center gap-2 text-gold hover:text-gold-light text-[14px] font-semibold transition-colors mt-2">
                  <MdArrowForward size={13} />
                  Request Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-6">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}
                        className="flex items-center gap-2 text-white/50 hover:text-white text-[14px] transition-colors group">
                    <MdArrowForward size={13} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-6">
              Service Area
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span key={area}
                      className="text-[12px] text-white/45 bg-white/4 hover:bg-gold/8 hover:text-gold/80
                                 border border-white/8 px-3 py-1.5 rounded-full transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[13px]">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy"
                  className="text-white/30 hover:text-white/60 text-[12px] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service"
                  className="text-white/30 hover:text-white/60 text-[12px] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
