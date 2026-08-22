'use client';

import { useState } from 'react';

const steps = [
  { step: 1, title: 'Inquiry', desc: 'Submit an inquiry or schedule a campus tour.' },
  { step: 2, title: 'Application', desc: 'Complete the online application form and submit required documents.' },
  { step: 3, title: 'Assessment', desc: 'Student completes an age-appropriate assessment and interview.' },
  { step: 4, title: 'Decision', desc: 'Admissions committee reviews and sends a decision within 2 weeks.' },
  { step: 5, title: 'Enrollment', desc: 'Accept offer, pay deposit, and complete registration.' },
];

const requirements = [
  { category: 'Nursery & Kindergarten', items: ['Completed application form', 'Birth certificate', 'Immunization record', 'Two recent passport photographs', 'Parent/guardian ID'] },
  { category: 'Primary (P1–P6)', items: ['Completed application form', 'Birth certificate', 'Previous school report (if applicable)', 'Two passport photographs', 'Immunization record'] },
  { category: 'Junior Secondary (JSS1–JSS3)', items: ['Completed application form', 'Birth certificate', 'Last 2 years\' school reports', 'Entrance assessment', 'Two passport photographs'] },
  { category: 'Senior Secondary (SSS1–SSS3)', items: ['Completed application form', 'Birth certificate', 'Complete transcripts', 'WAEC/NECO results (if transferring)', 'Entrance assessment/interview', 'Two passport photographs'] },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentDOB: '',
    gradeApplying: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    previousSchool: '',
    emergencyContact: '',
    emergencyPhone: '',
    specialNeeds: '',
    financialAid: 'no',
    howHeard: '',
    additionalNotes: '',
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
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.studentDOB) newErrors.studentDOB = 'Date of birth is required';
    if (!formData.gradeApplying) newErrors.gradeApplying = 'Please select a grade';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/guardian name is required';
    if (!formData.parentEmail.trim()) newErrors.parentEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) newErrors.parentEmail = 'Invalid email format';
    if (!formData.parentPhone.trim()) newErrors.parentPhone = 'Phone number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
          </div>
          <div className="container-main relative z-10">
            <span className="badge-sky mb-4 inline-block">Admissions</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Application Submitted</h1>
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
                <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Thank You!</h2>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  Your enrollment application for <strong>{formData.studentName}</strong> has been submitted successfully.
                  Our admissions team will review your application and contact you within 5 business days.
                </p>
                <p className="text-sm text-[var(--muted)]">
                  A confirmation email has been sent to <strong>{formData.parentEmail}</strong>
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
          <span className="badge-sky mb-4 inline-block">Admissions</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Begin your child’s journey with Calculus Schools. Enrolment enquiries are now welcome.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Admissions Process</h2>
          <p className="section-subtitle">Five simple steps to become part of our school family.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(s => (
              <div key={s.step} className="card border-accent-top">
                <div className="card-body text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue)] text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{s.title}</h3>
                  <p className="text-[var(--muted)] text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main">
          <h2 className="section-title">Requirements by Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map(req => (
              <div key={req.category} className="card bg-white border-accent-left">
                <div className="card-body">
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-4">{req.category}</h3>
                  <ul className="space-y-2">
                    {req.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="text-[var(--sky-blue-dark)] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section bg-white">
        <div className="container-main max-w-3xl">
          <h2 className="section-title">Online Enrollment Form</h2>
          <p className="section-subtitle">
            Complete the form below to begin the admissions process. All fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit} className="card border-accent-top" noValidate>
            <div className="card-body">
              {errors.form && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {errors.form}
                </div>
              )}

              <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-4 pb-2 border-b border-[var(--border)]">
                Student Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="form-label" htmlFor="studentName">Student Full Name *</label>
                  <input id="studentName" name="studentName" type="text" required value={formData.studentName} onChange={handleChange} className={`form-input ${errors.studentName ? 'border-red-500' : ''}`} aria-invalid={!!errors.studentName} />
                  {errors.studentName && <p className="form-error">{errors.studentName}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="studentDOB">Date of Birth *</label>
                  <input id="studentDOB" name="studentDOB" type="date" required value={formData.studentDOB} onChange={handleChange} className={`form-input ${errors.studentDOB ? 'border-red-500' : ''}`} aria-invalid={!!errors.studentDOB} />
                  {errors.studentDOB && <p className="form-error">{errors.studentDOB}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="gradeApplying">Grade Applying For *</label>
                  <select id="gradeApplying" name="gradeApplying" required value={formData.gradeApplying} onChange={handleChange} className={`form-input ${errors.gradeApplying ? 'border-red-500' : ''}`} aria-invalid={!!errors.gradeApplying}>
                    <option value="">Select a grade</option>
                    <option value="K">Kindergarten</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(g => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                  {errors.gradeApplying && <p className="form-error">{errors.gradeApplying}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="previousSchool">Previous School</label>
                  <input id="previousSchool" name="previousSchool" type="text" value={formData.previousSchool} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-4 pb-2 border-b border-[var(--border)]">
                Parent/Guardian Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="form-label" htmlFor="parentName">Parent/Guardian Name *</label>
                  <input id="parentName" name="parentName" type="text" required value={formData.parentName} onChange={handleChange} className={`form-input ${errors.parentName ? 'border-red-500' : ''}`} aria-invalid={!!errors.parentName} />
                  {errors.parentName && <p className="form-error">{errors.parentName}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="parentEmail">Email Address *</label>
                  <input id="parentEmail" name="parentEmail" type="email" required value={formData.parentEmail} onChange={handleChange} className={`form-input ${errors.parentEmail ? 'border-red-500' : ''}`} aria-invalid={!!errors.parentEmail} />
                  {errors.parentEmail && <p className="form-error">{errors.parentEmail}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="parentPhone">Phone Number *</label>
                  <input id="parentPhone" name="parentPhone" type="tel" required value={formData.parentPhone} onChange={handleChange} className={`form-input ${errors.parentPhone ? 'border-red-500' : ''}`} aria-invalid={!!errors.parentPhone} />
                  {errors.parentPhone && <p className="form-error">{errors.parentPhone}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="emergencyContact">Emergency Contact Name</label>
                  <input id="emergencyContact" name="emergencyContact" type="text" value={formData.emergencyContact} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label className="form-label" htmlFor="emergencyPhone">Emergency Contact Phone</label>
                  <input id="emergencyPhone" name="emergencyPhone" type="tel" value={formData.emergencyPhone} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-4 pb-2 border-b border-[var(--border)]">Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="address">Street Address</label>
                  <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label className="form-label" htmlFor="city">City *</label>
                  <input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} className={`form-input ${errors.city ? 'border-red-500' : ''}`} />
                  {errors.city && <p className="form-error">{errors.city}</p>}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="form-label" htmlFor="state">State *</label>
                    <input id="state" name="state" type="text" required value={formData.state} onChange={handleChange} className={`form-input ${errors.state ? 'border-red-500' : ''}`} />
                    {errors.state && <p className="form-error">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="zip">ZIP *</label>
                    <input id="zip" name="zip" type="text" required value={formData.zip} onChange={handleChange} className={`form-input ${errors.zip ? 'border-red-500' : ''}`} />
                    {errors.zip && <p className="form-error">{errors.zip}</p>}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-4 pb-2 border-b border-[var(--border)]">Additional Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="form-label" htmlFor="specialNeeds">Special Needs or Accommodations</label>
                  <textarea id="specialNeeds" name="specialNeeds" rows={3} value={formData.specialNeeds} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label className="form-label" htmlFor="financialAid">Financial Aid Requested?</label>
                  <select id="financialAid" name="financialAid" value={formData.financialAid} onChange={handleChange} className="form-input">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="howHeard">How Did You Hear About Us?</label>
                  <select id="howHeard" name="howHeard" value={formData.howHeard} onChange={handleChange} className="form-input">
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="event">School Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="additionalNotes">Additional Notes</label>
                  <textarea id="additionalNotes" name="additionalNotes" rows={3} value={formData.additionalNotes} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="btn-primary">Submit Application</button>
                <button type="reset" className="btn-outline">Clear Form</button>
              </div>
              <p className="text-xs text-[var(--muted)] mt-4">
                By submitting this form, you agree to our privacy policy and consent to being contacted regarding your application.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main text-center">
          <h2 className="section-title">Tuition & Financial Aid</h2>
          <p className="section-subtitle mb-8">
            We offer competitive tuition rates and need-based financial aid to ensure access for all qualified students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { level: 'Elementary', tuition: '$12,500/yr', note: 'K-5' },
              { level: 'Middle School', tuition: '$14,800/yr', note: 'Grades 6-8' },
              { level: 'High School', tuition: '$16,200/yr', note: 'Grades 9-12' },
            ].map(t => (
              <div key={t.level} className="card bg-white border-accent-top">
                <div className="card-body text-center">
                  <h3 className="text-lg font-bold text-[var(--deep-blue)]">{t.level}</h3>
                  <p className="text-sm text-[var(--muted)] mb-2">{t.note}</p>
                  <p className="text-3xl font-bold text-[var(--sky-blue-dark)]">{t.tuition}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)] mt-6">
            Contact our admissions office for detailed tuition information and financial aid applications.
          </p>
        </div>
      </section>
    </>
  );
}