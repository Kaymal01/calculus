'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/fees', label: 'Fees' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--deep-blue)] via-[var(--sky-blue)] to-[var(--deep-blue)]" />
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-md bg-[var(--deep-blue)] flex items-center justify-center shadow-lg group-hover:bg-[var(--deep-blue-light)] transition-colors">
              <span className="text-[var(--sky-blue)] font-display font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-[var(--deep-blue)] leading-tight text-lg">Calculus Comprehensive School</p>
              <p className="text-xs text-[var(--muted)] tracking-wide">LEARNING WITH PURPOSE</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth/signin"
              className="px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/admissions#enroll"
              className={buttonVariants({ variant: 'default', size: 'sm', className: 'ml-3 shadow-md hover:shadow-lg' })}
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
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
          </Button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border)]" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/auth/signin"
                className="px-4 py-3 text-sm font-medium text-[var(--foreground)] hover:text-[var(--deep-blue)] hover:bg-[var(--accent-pale)] transition-colors w-full"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/admissions#enroll"
                className={buttonVariants({ variant: 'default', size: 'default', className: 'mt-2 w-full' })}
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