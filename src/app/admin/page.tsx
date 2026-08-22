'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { supabaseClient } from '@/utils/supabase/client';

type Profile = {
  id: string;
  full_name: string | null;
  role: string | null;
  phone: string | null;
  created_at: string | null;
};

type ClassItem = {
  id: string;
  name: string;
  year: string | null;
  teacher_id: string | null;
};

type Student = {
  id: string;
  admission_no: string | null;
  class_id: string | null;
  profile_id: string | null;
  profile?: { full_name: string | null } | null;
};

export default function AdminPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const [profilesRes, classesRes, studentsRes] = await Promise.all([
        supabaseClient.from('profiles').select('*').order('created_at', { ascending: false }),
        supabaseClient.from('classes').select('*').order('created_at', { ascending: false }),
        supabaseClient
          .from('students')
          .select('id, admission_no, class_id, profile_id, profile:profiles(full_name)')
          .order('created_at', { ascending: false }),
      ]);

      if (profilesRes.data) setProfiles(profilesRes.data as Profile[]);
      if (classesRes.data) setClasses(classesRes.data as ClassItem[]);
      if (studentsRes.data) setStudents(studentsRes.data as Student[]);

      setLoading(false);
    }

    load();
  }, []);

  const totalUsers = profiles.length;
  const adminCount = profiles.filter((p) => p.role === 'admin').length;
  const teacherCount = profiles.filter((p) => p.role === 'teacher').length;
  const studentCount = profiles.filter((p) => p.role === 'student').length;

  return (
    <div className="container-main py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <p className="eyebrow text-[var(--deep-blue)]">Administration</p>
          <h1 className="text-4xl font-bold mt-2">School Dashboard</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/users" className="btn-primary">
            Manage users
          </Link>
          <Link href="/admin/classes" className="btn-outline">
            Manage classes
          </Link>
        </div>
      </div>

      {loading ? (
        <p className="text-[var(--muted)]">Loading dashboard...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <p className="text-sm text-[var(--muted)]">Total users</p>
              <p className="text-3xl font-bold mt-2">{totalUsers}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm text-[var(--muted)]">Admins</p>
              <p className="text-3xl font-bold mt-2">{adminCount}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm text-[var(--muted)]">Teachers</p>
              <p className="text-3xl font-bold mt-2">{teacherCount}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm text-[var(--muted)]">Students</p>
              <p className="text-3xl font-bold mt-2">{studentCount}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="card p-6 xl:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Recent users</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 pr-4">Name</th>
                      <th className="py-3 pr-4">Role</th>
                      <th className="py-3 pr-4">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.slice(0, 6).map((profile) => (
                      <tr key={profile.id} className="border-b last:border-b-0">
                        <td className="py-3 pr-4 font-medium">{profile.full_name || 'Unnamed user'}</td>
                        <td className="py-3 pr-4">
                          <span className="badge-sky">{profile.role || 'student'}</span>
                        </td>
                        <td className="py-3 pr-4 text-[var(--muted)]">{profile.phone || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-4">Classes</h2>
              <div className="space-y-3">
                {classes.slice(0, 6).map((item) => (
                  <div key={item.id} className="rounded-lg border border-[var(--border)] p-3">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-[var(--muted)]">{item.year || 'Academic year not set'}</p>
                  </div>
                ))}
                {classes.length === 0 && <p className="text-[var(--muted)]">No classes yet.</p>}
              </div>
            </div>
          </div>

          <div className="mt-8 card p-6">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-2xl font-bold">Students</h2>
              <Link href="/teacher/add-student" className="btn-primary">
                Add student
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 pr-4">Student</th>
                    <th className="py-3 pr-4">Admission</th>
                    <th className="py-3 pr-4">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {students.slice(0, 8).map((student) => {
                    const className = classes.find((c) => c.id === student.class_id)?.name || 'Unassigned';
                    return (
                      <tr key={student.id} className="border-b last:border-b-0">
                        <td className="py-3 pr-4 font-medium">{(student.profile as any)?.full_name || 'Unnamed student'}</td>
                        <td className="py-3 pr-4 text-[var(--muted)]">{student.admission_no || '—'}</td>
                        <td className="py-3 pr-4 text-[var(--muted)]">{className}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}