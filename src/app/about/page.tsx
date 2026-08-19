import Link from 'next/link';

const leadership = [
  { name: 'Dr. Margaret Thompson', role: 'Principal', bio: '20+ years in education leadership with a passion for innovative teaching methods.' },
  { name: 'Robert Chen', role: 'Vice Principal', bio: 'Former math department head dedicated to academic excellence and student mentorship.' },
  { name: 'Dr. Angela Martinez', role: 'Academic Director', bio: 'PhD in Curriculum Design, overseeing our award-winning academic programs.' },
];

const values = [
  { title: 'Excellence', desc: 'We strive for the highest standards in everything we do.', icon: '🏆' },
  { title: 'Integrity', desc: 'Honesty and ethical behavior guide our actions daily.', icon: '⚖️' },
  { title: 'Innovation', desc: 'Embracing new ideas and modern approaches to education.', icon: '💡' },
  { title: 'Inclusion', desc: 'Celebrating diversity and ensuring every student belongs.', icon: '🤝' },
  { title: 'Growth', desc: 'Continuous improvement for students, staff, and our community.', icon: '🌱' },
  { title: 'Service', desc: 'Contributing positively to our school and wider community.', icon: '❤️' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <span className="badge-sky mb-4 inline-block">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            For nearly four decades, Calculus Comprehensive has been a beacon of educational excellence.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card border-accent-left">
              <div className="card-body">
                <span className="text-3xl mb-3 block">🎯</span>
                <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Our Mission</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  To provide a nurturing, rigorous, and inclusive educational environment that empowers every student
                  to achieve academic excellence, develop strong character, and become lifelong learners prepared
                  to make meaningful contributions to society.
                </p>
              </div>
            </div>
            <div className="card border-accent-left">
              <div className="card-body">
                <span className="text-3xl mb-3 block">🔭</span>
                <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Our Vision</h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  To be recognized as a leading comprehensive school that sets the standard for educational innovation,
                  producing confident, compassionate, and capable graduates who thrive in an ever-changing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main max-w-3xl">
          <h2 className="section-title">Our History</h2>
          <div className="space-y-6 text-[var(--muted)] leading-relaxed">
            <p>
              Founded in 1985 by a group of visionary educators, Calculus Comprehensive School began with a simple
              belief: every child deserves access to exceptional education in a supportive environment.
            </p>
            <p>
              What started as a small K-8 school with just 150 students has grown into a thriving K-12 institution
              serving over 1,200 students. Our expansion has always been guided by our commitment to quality over quantity.
            </p>
            <p>
              Today, we boast state-of-the-art facilities, an award-winning curriculum, and a diverse community
              of learners and educators united by a shared passion for excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">These principles guide everything we do at Calculus Comprehensive.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="card border-accent-top">
                <div className="card-body text-center">
                  <span className="text-3xl block mb-3">{v.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{v.title}</h3>
                  <p className="text-[var(--muted)] text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container-main">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-subtitle">Meet the dedicated professionals guiding our school.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map(l => (
              <div key={l.name} className="card">
                <div className="card-body text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue)] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">{l.name.split(' ').pop()?.[0]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)]">{l.name}</h3>
                  <p className="badge-sky mb-3">{l.role}</p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-[var(--deep-blue)] via-[var(--deep-blue-light)] to-[var(--sky-blue-dark)] text-white text-center">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Calculus Comprehensive</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour and see what makes us special firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent text-lg px-8 py-4">
              Schedule a Tour
            </Link>
            <Link href="/admissions" className="btn-outline-light text-lg px-8 py-4">
              View Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}