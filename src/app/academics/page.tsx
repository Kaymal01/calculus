const programs = [
  {
    title: 'Elementary School (K-5)',
    grades: 'Kindergarten - Grade 5',
    desc: 'A nurturing environment where young learners build strong academic foundations through play-based and exploratory learning.',
    highlights: ['Phonics & Reading Program', 'Hands-on STEM Activities', 'Social-Emotional Learning', 'Arts & Music Integration'],
  },
  {
    title: 'Middle School (6-8)',
    grades: 'Grade 6 - Grade 8',
    desc: 'Developing critical thinking, creativity, and independence as students transition to more rigorous academics.',
    highlights: ['Advanced Math & Science Tracks', 'Foreign Language (Spanish, French)', 'Digital Literacy & Coding', 'Advisory & Mentorship Program'],
  },
  {
    title: 'High School (9-12)',
    grades: 'Grade 9 - Grade 12',
    desc: 'Building confident learners through advanced studies in English, Mathematics, Sciences, and a purposeful Tahfiz programme.',
    highlights: ['English & Mathematics', 'Science Foundations', 'Tahfiz Programme', 'Individual Attention'],
  },
];

const faculty = [
  { name: 'Dr. Patricia Williams', subject: 'Mathematics', exp: '15 years', degree: 'PhD, MIT' },
  { name: 'Mr. David Kim', subject: 'Physics', exp: '12 years', degree: 'MSc, Stanford' },
  { name: 'Ms. Jennifer Lopez', subject: 'English Literature', exp: '10 years', degree: 'MA, Columbia' },
  { name: 'Dr. Michael Brown', subject: 'Chemistry', exp: '18 years', degree: 'PhD, Harvard' },
  { name: 'Mrs. Susan Davis', subject: 'History', exp: '14 years', degree: 'MA, Yale' },
  { name: 'Mr. James Wilson', subject: 'Computer Science', exp: '8 years', degree: 'MS, Georgia Tech' },
];

export default function AcademicsPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--sky-blue)] blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <span className="badge-sky mb-4 inline-block">Academics</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Excellence in Every Classroom</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Our child-centred curriculum challenges and inspires students to reach their full potential at every stage.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Academic Programs</h2>
          <p className="section-subtitle">
            Thoughtful learning from daycare through secondary school, designed around each child’s age, needs, and potential.
          </p>
          <div className="space-y-8">
            {programs.map(prog => (
              <div key={prog.title} className="card border-accent-left">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-1">{prog.title}</h3>
                      <p className="badge-sky mb-3">{prog.grades}</p>
                      <p className="text-[var(--muted)] leading-relaxed mb-4">{prog.desc}</p>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">Key Highlights</h4>
                      <ul className="space-y-2">
                        {prog.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                            <span className="text-[var(--sky-blue-dark)] mt-0.5">✓</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--accent-pale)]">
        <div className="container-main">
          <h2 className="section-title">Curriculum Overview</h2>
          <p className="section-subtitle">
            Our standards-based curriculum integrates core subjects with enrichment opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Mathematics', icon: '📐', desc: 'From foundational numeracy to AP Calculus, building analytical thinking.' },
              { title: 'Science', icon: '🔬', desc: 'Hands-on labs and inquiry-based learning in biology, chemistry, and physics.' },
              { title: 'English Language Arts', icon: '📖', desc: 'Reading, writing, and communication skills for lifelong literacy.' },
              { title: 'Social Studies', icon: '🌍', desc: 'History, geography, and civics to develop informed global citizens.' },
              { title: 'Foreign Languages', icon: '🗣️', desc: 'Spanish and French programs building cultural awareness and communication.' },
              { title: 'Arts & Music', icon: '🎨', desc: 'Visual arts, band, choir, and drama for creative expression.' },
            ].map(subject => (
              <div key={subject.title} className="card bg-white border-accent-top">
                <div className="card-body text-center">
                  <span className="text-3xl block mb-3">{subject.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{subject.title}</h3>
                  <p className="text-[var(--muted)] text-sm">{subject.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <h2 className="section-title">Our Faculty</h2>
          <p className="section-subtitle">
            98% of our teachers hold advanced degrees, with an average of 10 years of experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map(f => (
              <div key={f.name} className="card">
                <div className="card-body text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue)] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">{f.name.split(' ').pop()?.[0]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--deep-blue)]">{f.name}</h3>
                  <p className="text-[var(--sky-blue-dark)] font-medium text-sm mb-1">{f.subject}</p>
                  <p className="text-[var(--muted)] text-sm">{f.degree}</p>
                  <p className="text-[var(--muted)] text-xs mt-1">{f.exp} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-[var(--deep-blue)] via-[var(--deep-blue-light)] to-[var(--sky-blue-dark)] text-white">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '4', label: 'School Sections' },
              { value: '15+', label: 'Years Educating Children' },
              { value: 'IPC', label: 'Primary Curriculum' },
              { value: 'K-12', label: 'Tahfiz Integrated' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}