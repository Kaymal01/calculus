'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';

type ClassItem = { id: string; name: string; year: string | null; };

export default function AddStudentPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [form, setForm] = useState({
    full_name: '',
    class_id: '',
    admission_no: '',
    dob: '',
    gender: 'Male',
    parent_contact: '',
  });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadClasses() {
      const { data } = await supabaseClient.from('classes').select('*').order('created_at', { ascending: false });
      setClasses((data ?? []) as ClassItem[]);
      if ((data ?? []).length) setForm((prev) => ({ ...prev, class_id: (data ?? [])[0].id }));
    }
    loadClasses();
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .insert([{ full_name: form.full_name, role: 'student', class_id: form.class_id }])
        .select()
        .single();

      if (profileError) throw profileError;

      const { error: studentError } = await supabaseClient.from('students').insert([
        {
          profile_id: profile.id,
          class_id: form.class_id,
          admission_no: form.admission_no,
          dob: form.dob || null,
          gender: form.gender,
          parent_contact: form.parent_contact,
        },
      ]);

      if (studentError) throw studentError;

      setMessage('Student added successfully.');
      setForm({
        full_name: '',
        class_id: classes[0]?.id || '',
        admission_no: '',
        dob: '',
        gender: 'Male',
        parent_contact: '',
      });
    } catch (err: any) {
      setMessage(err?.message || 'Unable to add student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-main py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Add Student</h1>
      <p className="text-[var(--muted)] mb-6">Create a student profile and assign them to a class.</p>

      <form onSubmit={handleSubmit} className="card p-6 space-y-4">
        <div>
          <label className="form-label">Student full name</label>
          <input className="form-input" value={form.full_name} onChange={(e) => handleChange('full_name', e.target.value)} required />
        </div>

        <div>
          <label className="form-label">Class</label>
          <select className="form-input" value={form.class_id} onChange={(e) => handleChange('class_id', e.target.value)}>
            {classes.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Admission Number</label>
          <input className="form-input" value={form.admission_no} onChange={(e) => handleChange('admission_no', e.target.value)} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Date of birth</label>
            <input type="date" className="form-input" value={form.dob} onChange={(e) => handleChange('dob', e.target.value)} />
          </div>

          <div>
            <label className="form-label">Gender</label>
            <select className="form-input" value={form.gender} onChange={(e) => handleChange('gender', e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="form-label">Parent/Guardian contact</label>
          <input className="form-input" value={form.parent_contact} onChange={(e) => handleChange('parent_contact', e.target.value)} placeholder="Phone number or contact details" />
        </div>

        <button type="submit" className="btn-primary w-full" disabled={loading}>{loading ? 'Adding student...' : 'Add student'}</button>
        {message && <p className="text-sm text-[var(--muted)]">{message}</p>}
      </form>
    </div>
  );
}