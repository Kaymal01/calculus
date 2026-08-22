'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard (Prototype)</h1>
      <p className="text-[var(--muted)] mb-6">Manage users, classes, students, fees, and site content.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/users" className="card p-4">
          <h3 className="font-semibold">Manage Users</h3>
          <p className="text-sm text-[var(--muted)]">Create admin, teacher, student and parent accounts.</p>
        </Link>
        <Link href="/admin/classes" className="card p-4">
          <h3 className="font-semibold">Manage Classes</h3>
          <p className="text-sm text-[var(--muted)]">Create and assign teachers to classes.</p>
        </Link>
      </div>
    </div>
  );
}