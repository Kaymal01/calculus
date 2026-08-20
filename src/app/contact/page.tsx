'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', lines: ['Ijoba Bus Stop, 1-3 Calculus Avenue', 'Tipper Garage Rd, Itele, Ota 102213, Ogun State'] },
    { icon: '📞', title: 'Phone', lines: ['0810 660 4904'] },
    { icon: '✉️', title: 'Email', lines: ['admin@calculusschools.net'] },
    { icon: '🕐', title: 'Hours', lines: ['Open 24 hours'] },
  ];

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
          </div>
          <div className="container-main relative z-10">
            <span className="badge-sky mb-4 inline-block">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          </div>
        </section>
        <section className="section bg-white">
          <div className="container-main max-w-2xl">
            <div className="card border-accent-top text-center">
              <div className="card-body py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--sky-blue-pale)] mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--sky-blue-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Message Sent!</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  Thank you for reaching out. Our team will respond to your inquiry within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <span className="badge-sky mb-4 inline-block">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(info => (
              <div key={info.title} className="card bg-white border-accent-top">
                <div className="card-body text-center">
                  <span className="text-3xl block mb-3">{info.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-[var(--muted)] text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="card border-accent-top" noValidate>
                <div className="card-body space-y-4">
                  <div>
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'border-red-500' : ''}`} aria-invalid={!!errors.name} />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input id="contact-email" name="email" type="email" required value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'border-red-500' : ''}`} aria-invalid={!!errors.email} />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contact-phone">Phone</label>
                      <input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-category">Category</label>
                    <select id="contact-category" name="category" value={formData.category} onChange={handleChange} className="form-input">
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="financial-aid">Financial Aid</option>
                      <option value="technology">Technology Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" rows={5} required value={formData.message} onChange={handleChange} className={`form-input ${errors.message ? 'border-red-500' : ''}`} aria-invalid={!!errors.message} />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
                </div>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">Find Us</h2>
              <div className="card overflow-hidden">
                <div className="bg-gradient-to-br from-[var(--accent-pale)] to-[var(--sky-blue-light)] h-64 sm:h-80 md:h-full min-h-[300px] flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="text-4xl block mb-3">📍</span>
                    <p className="font-bold text-[var(--deep-blue)] mb-1">Ijoba Bus Stop, 1-3 Calculus Avenue</p>
                    <p className="text-[var(--muted)] text-sm">Tipper Garage Rd, Itele, Ota 102213, Ogun State</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Ijoba+Bus+Stop%2C+1-3+Calculus+Avenue%2C+Tipper+Garage+Rd%2C+Itele%2C+Ota+102213%2C+Ogun+State" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-[var(--deep-blue)] hover:text-[var(--sky-blue-dark)] underline">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container-main max-w-3xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do I schedule a campus tour?', a: 'Call 0810 660 4904 or use the form above to request a tour. The Google Maps listing currently shows the school as open 24 hours.' },
              { q: 'What is the application deadline?', a: 'Early application deadline is January 15. Regular deadline is March 1. Rolling admissions available for late applications.' },
              { q: 'Do you offer financial aid?', a: 'Yes, we offer need-based financial aid covering up to 50% of tuition. Applications open in September for the following academic year.' },
              { q: 'What is the student-teacher ratio?', a: 'Our average class size is 18 students, giving us an 18:1 student-teacher ratio across all grade levels.' },
            ].map((faq, i) => (
              <div key={i} className="card bg-white border-accent-left">
                <div className="card-body">
                  <h3 className="font-bold text-[var(--deep-blue)] mb-2">{faq.q}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}