'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { supabaseClient } from '@/utils/supabase/client';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) throw error;

      const user = data.user;
      const { data: profileData, error: profileError } = await supabaseClient
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .maybeSingle();

      if (profileError) throw profileError;

      const target =
        profileData?.role === 'admin'
          ? '/admin'
          : profileData?.role === 'teacher'
            ? '/teacher'
            : profileData?.role === 'parent'
              ? '/parent'
              : '/student';

      setMessage('Signed in successfully. Redirecting...');
      router.push(target);
    } catch (err: any) {
      setMessage(err?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-main py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
      <p className="text-[var(--muted)] mb-6">Sign in to your Calculus school portal.</p>

      <form onSubmit={handleSubmit} className="space-y-4 card p-6">
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>

        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <p className="text-sm text-[var(--muted)]">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-[var(--deep-blue)] underline">
            Create one
          </Link>
        </p>

        {message && <p className="text-sm text-[var(--muted)]">{message}</p>}
      </form>
    </div>
  );
}