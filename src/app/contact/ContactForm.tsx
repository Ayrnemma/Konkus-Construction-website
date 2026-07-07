'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MdSend, MdCheckCircle } from 'react-icons/md';
import { COMPANY, PROJECT_TYPES, BUDGET_RANGES } from '@/lib/constants';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdarvkyd';

export function ContactForm() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
        alert(
          data?.errors?.[0]?.message ??
            'Something went wrong. Please call us directly at ' + COMPANY.phone
        );
        setSubmitting(false);
      }
    } catch {
      alert('Network error. Please call us directly at ' + COMPANY.phone);
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder-charcoal/30 bg-white';

  return (
    <div className="bg-white rounded-3xl shadow-premium-lg p-8 md:p-10">
      <h2 className="text-2xl font-bold text-charcoal mb-2">Request Your Free Estimate</h2>
      <p className="text-charcoal/50 text-sm mb-8">
        All fields marked * are required. We&apos;ll respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Phone */}
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
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="(734) 555-1234"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email + Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@email.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Property Address
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Main St, Wyandotte, MI"
              className={inputClass}
            />
          </div>
        </div>

        {/* Project type + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Project Type *
            </label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select a service...</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Estimated Budget
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a range...</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Project Description *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your project — what you're hoping to accomplish, any special requirements, timeline, etc."
            className={`${inputClass} resize-none`}
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
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                form.wantEstimate
                  ? 'bg-gold border-gold'
                  : 'border-charcoal/30 group-hover:border-gold'
              }`}
            >
              {form.wantEstimate && <MdCheckCircle className="text-white" size={14} />}
            </div>
          </div>
          <span className="text-sm text-charcoal/70">
            Yes, I&apos;d like a{' '}
            <strong className="text-charcoal">free, no-obligation estimate</strong> for my project.
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
          <a href="/privacy-policy" className="text-gold hover:underline">
            Privacy Policy
          </a>
          . We&apos;ll never spam you or share your information.
        </p>
      </form>
    </div>
  );
}
