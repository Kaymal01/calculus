'use client';

import { useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabaseClient.auth.signUp({ email, password });
      if (error) throw error;

      const userId = (data.user?.id ?? data?.user?.id) as string | undefined;
      if (!userId) {
        setMessage('Sign up succeeded but user id not available yet. Check your email to confirm.');
        setLoading(false);
        return;
      }

      const resp = await fetch('/api/auth/create-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, full_name: fullName, role }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        setMessage('Profile creation failed: ' + (err?.error?.message || resp.statusText));
        setLoading(false);
        return;
      }

      setMessage('Sign-up successful. Please check your email to confirm (if required). Redirecting...');
      setTimeout(() => router.push('/'), 1500);
    } catch (err: any) {
      setMessage(err?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-main py-12 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Create an account</h1>
      <form onSubmit={handleSubmit} className="space-y-4 card p-6">
        <div>
          <label className="form-label">Full name</label>
          <input className="form-input" value={fullName} onChange={e => setFullName(e.target.value)} required />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} />
        </div>
        <div>
          <label className="form-label">Role</label>
          <select className="form-input" value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent / Guardian</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div>
          <button className="btn-primary w-full" type="submit" disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
        </div>

        <p className="text-sm text-[var(--muted)]">
          Already have an account?{' '}
          <a href="/auth/signin" className="text-[var(--deep-blue)] underline">Sign in</a>
        </p>

        {message && <p className="text-sm text-[var(--muted)] mt-2">{message}</p>}
      </form>
    </div>
  );
}