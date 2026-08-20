import Link from 'next/link';

const programs = [
  { title: 'Daycare', desc: '18 months - 5+', icon: '🌱', detail: 'A prepared Montessori environment where children build confidence through play and discovery.' },
  { title: 'Nursery & Primary', desc: 'Early years - Basic 6', icon: '📚', detail: 'Child-centred learning through the International Primary Curriculum and caring guidance.' },
  { title: 'Secondary', desc: 'Year 7 - 15+', icon: '🎓', detail: 'Stronger foundations in English, Mathematics, Sciences, and a purposeful Tahfiz programme.' },
];

const stats = [
  { value: '1,200+', label: 'Students Enrolled' },
  { value: '95%', label: 'College Acceptance' },
  { value: '18:1', label: 'Student-Teacher Ratio' },
  { value: '35+', label: 'Years of Excellence' },
];

const testimonials = [
  { name: 'Hajia Fatimah Abdul', role: 'Parent', text: 'Calculus School is a great place for my daughter to start her schooling experience. It is welcoming and safe.' },
  { name: 'Mallam Abd Kabir Uthman', role: 'Parent', text: 'I have two children attending and I cannot say enough about how much I appreciate the wonderful staff.' },
  { name: 'Labibah Taiwo', role: 'Parent', text: 'This is by far the very best school experience we have had with our children.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero relative overflow-hidden bg-[var(--deep-blue-dark)] text-white">
        <div className="home-hero-image absolute inset-y-0 right-0 w-full lg:w-[48%]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-blue-dark)] via-[var(--deep-blue-dark)]/95 to-transparent lg:w-[72%]" />
        <div className="container-main relative z-10 grid min-h-[640px] items-end py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.45fr)] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 text-[var(--sky-blue-light)]">Daycare · Nursery · Primary · Secondary</p>
            <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
              A place to become fully yourself.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Calculus Schools gives children a stimulating, safe, and child-centred environment to learn, play, grow, and become change agents.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/admissions#enroll" className="btn-accent px-7 py-3.5">
                Begin your application <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/contact" className="btn-outline-light px-7 py-3.5">
                Visit campus
              </Link>
            </div>
          </div>
          <div className="hidden border-l border-white/25 pl-7 lg:block">
            <p className="eyebrow text-[var(--sky-blue-light)]">At a glance</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="font-display text-4xl font-bold">1,200+</p>
                <p className="mt-1 text-sm text-white/65">students learning across K-12</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold">18:1</p>
                <p className="mt-1 text-sm text-white/65">student-to-teacher ratio</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold">95%</p>
                <p className="mt-1 text-sm text-white/65">college acceptance rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[var(--deep-blue-dark)]/50 backdrop-blur-sm">
          <div className="container-main flex items-center justify-between py-3 text-xs uppercase tracking-[0.18em] text-white/60">
            <span>Learning with purpose</span>
            <span className="hidden sm:inline">Itele Road, Ogun State · 8:00—17:00</span>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[var(--sky-blue-dark)]">A day at Calculus</p>
              <h2 className="section-title mb-0 text-left">Learning looks like this.</h2>
            </div>
            <Link href="/student-life" className="text-sm font-semibold text-[var(--deep-blue)] underline">See student life ↗</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmODkFP3TgZ6omcSrXaCND1ZADbhdSL8KqBPFTYsgwNCucAxWkJPo5XajR6Vd-4nAWUBjchEU1cY0YvVGNYNZs8rwV8MOa_vqp6WyarfcJCU_viXZhBzUaPbaYdujJFfIm-RIKM=w1400-h920-k-no',
              'https://web.archive.org/web/20190909041130im_/http://calculusschools.net/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-3.43.26-AM.jpeg',
              'https://web.archive.org/web/20190909041130im_/http://calculusschools.net/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-3.43.28-AM.jpeg',
              'https://web.archive.org/web/20190909041130im_/http://calculusschools.net/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-19-at-3.43.26-AM-1.jpeg',
            ].map((image, index) => (
              <div key={image} className={`overflow-hidden rounded-md bg-[var(--surface)] ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img src={image} alt={`Calculus Schools learning moment ${index + 1}`} className="h-full min-h-40 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[var(--border)] lg:hidden">
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
            From early childhood through secondary school, every section is designed around the age, curiosity, and potential of each child.
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
          <h2 className="section-title">Why Choose Calculus Schools</h2>
          <p className="section-subtitle">
            A school where every student is seen, valued, and challenged to reach their full potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Academic Intensive', desc: 'Experienced professionals handle academic activities with each child in mind.', icon: '📚' },
              { title: 'Child Centred', desc: 'Children are encouraged to think outside the box and actively shape their learning.', icon: '🤝' },
              { title: 'Learning Through Play', desc: 'A stimulating environment where play is an integral part of meaningful learning.', icon: '🏫' },
              { title: 'Tahfiz ul Quran', desc: 'Memorisation of the Quran is an integral part of our curriculum and school life.', icon: '✨' },
              { title: 'Small-Class Attention', desc: 'Individual attention, reporting on achievement, and a positive learning environment.', icon: '💡' },
              { title: 'Children’s Safety', desc: 'A friendly, homely environment where the safety and wellbeing of every child comes first.', icon: '🛡️' },
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
            Enrol your child in a school built around curiosity, care, strong foundations, and purposeful growth.
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