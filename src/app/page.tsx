import Link from 'next/link';

const programs = [
  { title: 'Elementary', desc: 'K-5', icon: '🌟', detail: 'Building strong foundations through engaging, play-based learning experiences.' },
  { title: 'Middle School', desc: 'Grades 6-8', icon: '🚀', detail: 'Developing critical thinking and independence in a supportive environment.' },
  { title: 'High School', desc: 'Grades 9-12', icon: '🎓', detail: 'College-preparatory excellence with AP courses and real-world experiences.' },
];

const testimonials = [
  { name: 'Sarah M.', role: 'Parent of Grade 8 Student', text: 'Calculus Comprehensive has transformed my child\'s love for learning. The teachers truly care about every student\'s success.' },
  { name: 'James K.', role: 'Alumni, Class of 2023', text: 'The education and values I gained here prepared me for college and beyond. I\'m grateful for everything.' },
  { name: 'Dr. Lisa Chen', role: 'Parent of Grade 3 & 5 Students', text: 'As an educator myself, I appreciate the rigorous curriculum and the warm, inclusive community.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-16 md:py-24 lg:py-32">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="text-white/80 font-medium mb-3 tracking-wide uppercase text-sm">Welcome to Calculus Comprehensive</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Where Every Student Thrives
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Empowering young minds through academic excellence, character development, and a nurturing community since 1985.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions#enroll" className="btn-primary bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
                Apply for 2025-2026
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 bg-white border-b border-[var(--border)]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: '1,200+', label: 'Students' },
              { value: '95%', label: 'College Acceptance' },
              { value: '18:1', label: 'Student-Teacher Ratio' },
              { value: '50+', label: 'Clubs & Activities' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">{stat.value}</p>
                <p className="text-sm text-[var(--muted)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-[var(--surface)]">
        <div className="container-main">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Comprehensive education from kindergarten through 12th grade, designed to meet every student where they are.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map(prog => (
              <div key={prog.title} className="card">
                <div className="card-body text-center">
                  <span className="text-4xl block mb-4">{prog.icon}</span>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-1">{prog.title}</h3>
                  <p className="text-sm text-[var(--accent)] font-medium mb-3">{prog.desc}</p>
                  <p className="text-[var(--muted)] leading-relaxed mb-4">{prog.detail}</p>
                  <Link href="/academics" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-light)] underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Why Choose Calculus Comprehensive?</h2>
          <p className="section-subtitle">
            We go beyond textbooks to develop well-rounded, confident students prepared for the future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Academic Excellence', desc: 'Award-winning curriculum with 15+ AP courses and a 95% college acceptance rate.' },
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: '98% of our teachers hold advanced degrees with an average of 10+ years experience.' },
              { icon: '🏆', title: 'Extracurriculars', desc: '50+ clubs, sports teams, and arts programs for every interest and passion.' },
              { icon: '🌍', title: 'Global Perspective', desc: 'Foreign language programs, Model UN, and international exchange opportunities.' },
              { icon: '💻', title: 'Modern Facilities', desc: 'State-of-the-art labs, technology centers, and performing arts facilities.' },
              { icon: '❤️', title: 'Supportive Community', desc: 'Small class sizes ensure every student receives personalized attention and care.' },
            ].map(feature => (
              <div key={feature.title} className="card">
                <div className="card-body">
                  <span className="text-3xl block mb-3">{feature.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-[var(--surface)]">
        <div className="container-main">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Hear from the families and students who make our school special.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card">
                <div className="card-body">
                  <p className="text-[var(--foreground)] leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-[var(--primary)]">{t.name}</p>
                    <p className="text-sm text-[var(--muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-center">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey With Us</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Applications for 2025-2026 are now open. Schedule a campus tour or start your enrollment today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions#enroll" className="btn-primary bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
              Start Enrollment
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}