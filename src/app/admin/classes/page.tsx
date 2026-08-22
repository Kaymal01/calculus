'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';

type ClassItem = {
  id: string;
  name: string;
  year: string | null;
  teacher_id: string | null;
};

export default function AdminClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState('2026/2027');
  const [teacherId, setTeacherId] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const loadClasses = async () => {
    const { data, error } = await supabaseClient.from('classes').select('*').order('created_at', { ascending: false });
    if (error) {
      setMessage(error.message);
      return;
    }
    setClasses((data ?? []) as ClassItem[]);
  };

  useEffect(() => {
    loadClasses();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { error } = await supabaseClient.from('classes').insert([{ name, year, teacher_id: teacherId || null }]);
    if (error) {
      setMessage(error.message);
      return;
    }

    setName('');
    setYear('2026/2027');
    setTeacherId('');
    setMessage('Class created successfully.');
    loadClasses();
  };

  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-4">Manage Classes</h1>
      <p className="text-[var(--muted)] mb-6">Create classes and assign teachers.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleCreate} className="card p-6 space-y-4">
          <h2 className="text-xl font-bold">Create class</h2>
          <div>
            <label className="form-label">Class name</label>
            <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="form-label">Academic year</label>
            <input className="form-input" value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
          <div>
            <label className="form-label">Teacher ID (optional)</label>
            <input className="form-input" value={teacherId} onChange={(e) => setTeacherId(e.target.value)} placeholder="UUID of assigned teacher" />
          </div>
          <button type="submit" className="btn-primary w-full">Create class</button>
          {message && <p className="text-sm text-[var(--muted)]">{message}</p>}
        </form>

        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Classes</h2>
          {classes.length === 0 ? (
            <p className="text-[var(--muted)]">No classes yet.</p>
          ) : (
            <div className="space-y-3">
              {classes.map((item) => (
                <div key={item.id} className="rounded-lg border border-[var(--border)] p-3">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.year || 'No academic year'} </p>
                  <p className="text-xs text-[var(--muted)]">Teacher: {item.teacher_id || 'Unassigned'}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}