'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';

type Profile = {
  id: string;
  full_name: string | null;
  role: string;
  email?: string;
  phone: string | null;
  user_id: string | null;
  class_id: string | null;
};

export default function AdminUsersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  const loadProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabaseClient.from('profiles').select('*').order('created_at', { ascending: false });
    if (error) {
      setMessage(error.message);
    } else {
      setProfiles((data ?? []) as Profile[]);
      if ((data ?? []).length) {
        setSelectedId((data ?? [])[0].id);
        setRole((data ?? [])[0].role ?? 'student');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleAssignRole = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const res = await fetch('/api/admin/assign-role', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profile_id: selectedId, role }),
    });

    const json = await res.json();
    if (!res.ok) {
      setMessage(json?.error || 'Unable to assign role');
      return;
    }

    setMessage('Role updated successfully.');
    loadProfiles();
  };

  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
      <p className="text-[var(--muted)] mb-6">Assign admin, teacher, parent and student roles.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          {loading ? (
            <p className="text-[var(--muted)]">Loading...</p>
          ) : profiles.length === 0 ? (
            <p className="text-[var(--muted)]">No profiles found.</p>
          ) : (
            <div className="space-y-3">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(profile.id);
                    setRole(profile.role || 'student');
                  }}
                  className={`w-full text-left rounded-lg border p-3 ${selectedId === profile.id ? 'border-[var(--primary)] bg-[var(--accent-pale)]' : 'border-[var(--border)]'}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">{profile.full_name || 'Unnamed user'}</p>
                      <p className="text-sm text-[var(--muted)]">{profile.phone || 'No phone'}</p>
                    </div>
                    <span className="badge-sky">{profile.role}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleAssignRole} className="card p-6">
          <h2 className="text-xl font-bold mb-4">Assign Role</h2>
          <div className="space-y-4">
            <div>
              <label className="form-label">Selected profile</label>
              <select className="form-input" value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
                {profiles.map((profile) => (
                  <option key={profile.id} value={profile.id}>{profile.full_name || 'Unnamed user'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Role</label>
              <select className="form-input" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            <button type="submit" className="btn-primary w-full">Update role</button>
            {message && <p className="text-sm text-[var(--muted)]">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}