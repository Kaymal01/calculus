'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--deep-blue)] via-[var(--sky-blue)] to-[var(--deep-blue)]" />
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--deep-blue)] to-[var(--sky-blue-dark)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[var(--deep-blue)] leading-tight text-lg">Calculus Comprehensive</p>
              <p className="text-xs text-[var(--muted)] tracking-wide">EXCELLENCE IN EDUCATION</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions#enroll"
              className="ml-3 inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[var(--deep-blue)] to-[var(--sky-blue-dark)] hover:from-[var(--deep-blue-light)] hover:to-[var(--sky-blue)] shadow-md hover:shadow-lg transition-all text-sm"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border)]" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions#enroll"
                className="mt-2 btn-primary text-sm text-center bg-gradient-to-r from-[var(--deep-blue)] to-[var(--sky-blue-dark)]"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}