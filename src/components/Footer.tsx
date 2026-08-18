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
    <footer className="bg-[var(--primary)] text-white">
      {/* Main Footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <p className="font-bold leading-tight">Calculus Comprehensive</p>
                <p className="text-xs text-white/60">School of Excellence</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Empowering young minds through academic excellence, character development, and a nurturing community since 1985.
            </p>
            <p className="text-sm text-white/60">
              123 Education Drive<br />
              Academic City, ST 12345
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-white/80 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
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