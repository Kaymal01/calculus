const activities = [
  { name: 'Sports', icon: '⚽', items: ['Soccer', 'Basketball', 'Swimming', 'Track & Field', 'Tennis', 'Volleyball'] },
  { name: 'Arts', icon: '🎨', items: ['Visual Arts', 'Drama Club', 'Band', 'Choir', 'Dance', 'Photography'] },
  { name: 'Academic', icon: '📚', items: ['Debate Team', 'Science Olympiad', 'Math Club', 'Robotics', 'Coding Club', 'Model UN'] },
  { name: 'Community', icon: '🤝', items: ['Student Government', 'Key Club', 'Environmental Club', 'Peer Tutoring', 'Cultural Society'] },
];

const facilities = [
  { name: 'Science Labs', desc: 'State-of-the-art biology, chemistry, and physics laboratories.', icon: '🔬' },
  { name: 'Library & Media Center', desc: 'Over 25,000 books, digital resources, and collaborative study spaces.', icon: '📚' },
  { name: 'Sports Complex', desc: 'Olympic-size pool, gymnasium, athletic fields, and fitness center.', icon: '🏟️' },
  { name: 'Performing Arts Center', desc: '500-seat auditorium with professional lighting and sound.', icon: '🎭' },
  { name: 'Technology Center', desc: 'Computer labs with the latest hardware and software.', icon: '💻' },
  { name: 'Cafeteria', desc: 'Nutritious meals prepared fresh daily with organic options.', icon: '🍽️' },
];

const events = [
  { date: 'Sep 15', title: 'Back to School Night', type: 'Annual' },
  { date: 'Oct 20', title: 'Science Fair', type: 'Annual' },
  { date: 'Nov 10', title: 'Fall Musical', type: 'Seasonal' },
  { date: 'Dec 18', title: 'Winter Concert', type: 'Seasonal' },
  { date: 'Feb 14', title: 'Valentine\'s Dance', type: 'Social' },
  { date: 'May 22', title: 'Graduation Ceremony', type: 'Annual' },
];

export default function StudentLifePage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <span className="badge-sky mb-4 inline-block">Student Life</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Beyond the Classroom</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            At Calculus Comprehensive, education extends far beyond textbooks. Discover a vibrant community where students thrive.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Clubs & Activities</h2>
          <p className="section-subtitle">Over 50 extracurricular options ensure every student finds their passion.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map(cat => (
              <div key={cat.name} className="card border-accent-top">
                <div className="card-body">
                  <span className="text-3xl block mb-3">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-3">{cat.name}</h3>
                  <ul className="space-y-1.5">
                    {cat.items.map(item => (
                      <li key={item} className="text-sm text-[var(--muted)] flex items-center gap-2">
                        <span className="text-[var(--sky-blue-dark)]">•</span>
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

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">Modern, well-equipped spaces designed to support learning and growth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map(f => (
              <div key={f.name} className="card bg-white border-accent-left">
                <div className="card-body text-center">
                  <span className="text-4xl block mb-3">{f.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{f.name}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Stay connected with what's happening at our school.</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {events.map(event => (
              <div key={event.title} className="card border-accent-left">
                <div className="card-body flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-sm font-bold text-[var(--sky-blue-dark)]">{event.date.split(' ')[0]}</p>
                    <p className="text-xl font-bold text-[var(--deep-blue)]">{event.date.split(' ')[1]}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--deep-blue)]">{event.title}</h3>
                  </div>
                  <span className="badge-sky hidden sm:inline-flex">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container-main">
          <h2 className="section-title">Student Voices</h2>
          <p className="section-subtitle">Hear from the students who make our community special.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Emma T.', grade: 'Grade 10', text: 'The robotics club changed my life. I went from never coding to winning a regional competition!' },
              { name: 'Marcus J.', grade: 'Grade 8', text: 'Swimming team taught me discipline and teamwork. The coaches push us to be our best.' },
              { name: 'Sophia L.', grade: 'Grade 11', text: 'Drama club helped me find my confidence. Performing on stage is my favorite thing to do.' },
            ].map(student => (
              <div key={student.name} className="card bg-white border-accent-top">
                <div className="card-body">
                  <p className="text-[var(--foreground)] leading-relaxed mb-4 italic">"{student.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue)] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{student.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--deep-blue)]">{student.name}</p>
                      <p className="text-sm text-[var(--muted)]">{student.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-[var(--deep-blue)] via-[var(--deep-blue-light)] to-[var(--sky-blue-dark)] text-white text-center">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Student Life</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our campus and see firsthand what makes Calculus Comprehensive a great place to learn and grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions#enroll" className="btn-accent text-lg px-8 py-4">Apply Now</a>
            <a href="/contact" className="btn-outline-light text-lg px-8 py-4">Schedule a Tour</a>
          </div>
        </div>
      </section>
    </>
  );
}