import Link from 'next/link';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/academics', label: 'Academics' },
      { href: '/admissions', label: 'Admissions' },
      { href: '/student-life', label: 'Student Life' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/admissions#enroll', label: 'Enroll Online' },
      { href: '#', label: 'Parent Portal' },
      { href: '#', label: 'School Calendar' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '#', label: 'Facebook' },
      { href: '#', label: 'Twitter' },
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'LinkedIn' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--deep-blue)] via-[var(--deep-blue-light)] to-[var(--deep-blue-dark)] text-white">
      {/* Sky blue accent line */}
      <div className="h-1 bg-gradient-to-r from-[var(--sky-blue)] via-[var(--sky-blue-light)] to-[var(--sky-blue)]" />
      {/* Main Footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--sky-blue)] to-[var(--sky-blue-dark)] flex items-center justify-center shadow-lg">
                <span className="text-[var(--deep-blue)] font-bold text-xl">C</span>
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Calculus Comprehensive</p>
                <p className="text-xs text-[var(--sky-blue-light)] tracking-wide">EXCELLENCE IN EDUCATION</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering young minds through academic excellence, character development, and a nurturing community since 1985.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              123 Education Drive, Knowledge City
            </div>
          </div>

          {/* Link sections */}
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-[var(--sky-blue-light)] mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-[var(--sky-blue)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Calculus Comprehensive School. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Office Hours: Mon-Fri 8:00 AM - 4:00 PM | (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
}