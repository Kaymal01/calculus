'use client';

import Link from 'next/link';

export default function TeacherPage() {
  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard (Prototype)</h1>
      <p className="text-[var(--muted)] mb-6">Manage your classes and students here.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/teacher/classes" className="card p-4">
          <h3 className="font-semibold">My Classes</h3>
          <p className="text-sm text-[var(--muted)]">View students and add student profiles.</p>
        </Link>
        <Link href="/teacher/add-student" className="card p-4">
          <h3 className="font-semibold">Add Student</h3>
          <p className="text-sm text-[var(--muted)]">Quickly add a student to your class.</p>
        </Link>
      </div>
    </div>
  );
}