'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { MdPhone, MdEmail, MdLocationOn, MdSend, MdCheckCircle } from 'react-icons/md';
import { COMPANY, PROJECT_TYPES, BUDGET_RANGES } from '@/lib/constants';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdarvkyd';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectType: searchParams.get('service') || '',
    budget: '',
    message: '',
    wantEstimate: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          project_type: form.projectType,
          budget: form.budget,
          message: form.message,
          free_estimate_requested: form.wantEstimate ? 'Yes' : 'No',
        }),
      });
      if (response.ok) {
        router.push('/thank-you');
      } else {
        const data = await response.json();
        alert(data?.errors?.[0]?.message ?? 'Something went wrong. Please call us directly at ' + COMPANY.phone);
        setSubmitting(false);
      }
    } catch {
      alert('Network error. Please call us directly at ' + COMPANY.phone);
      setSubmitting(false);
    }
  };

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
            {/* Contact Info */}
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
                    <span>Monday – Friday</span><span className="font-semibold text-charcoal">7am – 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span><span className="font-semibold text-charcoal">8am – 2pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span><span className="text-charcoal/40">Closed</span>
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

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-premium-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold text-charcoal mb-2">Request Your Free Estimate</h2>
                <p className="text-charcoal/50 text-sm mb-8">All fields marked * are required. We&apos;ll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(734) 555-1234"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Property Address</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="123 Main St, Wyandotte, MI"
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal bg-white"
                      >
                        <option value="">Select a service...</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Estimated Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal bg-white"
                      >
                        <option value="">Select a range...</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Project Description *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project — what you're hoping to accomplish, any special requirements, timeline, etc."
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30 resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        name="wantEstimate"
                        checked={form.wantEstimate}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        form.wantEstimate ? 'bg-gold border-gold' : 'border-charcoal/30 group-hover:border-gold'
                      }`}>
                        {form.wantEstimate && <MdCheckCircle className="text-white" size={14} />}
                      </div>
                    </div>
                    <span className="text-sm text-charcoal/70">
                      Yes, I&apos;d like a <strong className="text-charcoal">free, no-obligation estimate</strong> for my project.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary py-4 text-base rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send My Request <MdSend size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-charcoal/40 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>.
                    We&apos;ll never spam you or share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
