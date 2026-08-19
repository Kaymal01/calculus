import Link from 'next/link';

const programs = [
  { title: 'Elementary', desc: 'K-5', icon: '🌟', detail: 'Building strong foundations through engaging, play-based learning experiences.' },
  { title: 'Middle School', desc: 'Grades 6-8', icon: '🚀', detail: 'Developing critical thinking and independence in a supportive environment.' },
  { title: 'High School', desc: 'Grades 9-12', icon: '🎓', detail: 'College-preparatory excellence with AP courses and real-world experiences.' },
];

const stats = [
  { value: '1,200+', label: 'Students Enrolled' },
  { value: '95%', label: 'College Acceptance' },
  { value: '18:1', label: 'Student-Teacher Ratio' },
  { value: '35+', label: 'Years of Excellence' },
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
      <section className="bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--sky-blue-light)] blur-3xl" />
        </div>
        <div className="container-main py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-sky mb-6 inline-block">Welcome to Calculus Comprehensive</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shaping Tomorrow's Leaders Today
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering young minds through academic excellence, character development, and a nurturing community since 1985.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions#enroll" className="btn-accent text-lg px-8 py-4">
                Start Enrollment
              </Link>
              <Link href="/about" className="btn-outline-light text-lg px-8 py-4">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map(stat => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gradient-brand">{stat.value}</p>
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
              <div key={prog.title} className="card border-accent-top">
                <div className="card-body text-center">
                  <span className="text-4xl block mb-4">{prog.icon}</span>
                  <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-1">{prog.title}</h3>
                  <p className="badge-sky mb-3">{prog.desc}</p>
                  <p className="text-[var(--muted)] leading-relaxed mb-4">{prog.detail}</p>
                  <Link href="/academics" className="text-sm font-semibold text-[var(--deep-blue)] hover:text-[var(--sky-blue-dark)] underline">
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
          <h2 className="section-title">Why Choose Calculus Comprehensive</h2>
          <p className="section-subtitle">
            A school where every student is seen, valued, and challenged to reach their full potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Academic Excellence', desc: 'Award-winning curriculum with 15+ AP courses and a 95% college acceptance rate.', icon: '📚' },
              { title: 'Nurturing Environment', desc: 'Small class sizes ensure personalized attention and strong teacher-student relationships.', icon: '🤝' },
              { title: 'Modern Facilities', desc: 'State-of-the-art labs, performing arts center, sports complex, and technology hub.', icon: '🏫' },
              { title: 'Diverse Community', desc: 'Students from 40+ nationalities learning together in an inclusive environment.', icon: '🌍' },
              { title: 'Character Development', desc: 'Building integrity, leadership, and empathy through service learning and mentorship.', icon: '💡' },
              { title: 'College Preparation', desc: 'Dedicated counseling, internship programs, and college readiness workshops.', icon: '🎯' },
            ].map(item => (
              <div key={item.title} className="card border-accent-left">
                <div className="card-body">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Hear from parents, alumni, and educators who are part of our school family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="card bg-white">
                <div className="card-body">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[var(--sky-blue-dark)] fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue)] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--deep-blue)] text-sm">{t.name}</p>
                      <p className="text-xs text-[var(--muted)]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-[var(--deep-blue)] via-[var(--deep-blue-light)] to-[var(--sky-blue-dark)] text-white text-center">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey With Us</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Applications for 2025-2026 are now open. Schedule a campus tour or start your enrollment today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions#enroll" className="btn-accent text-lg px-8 py-4">
              Start Enrollment
            </Link>
            <Link href="/contact" className="btn-outline-light text-lg px-8 py-4">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}