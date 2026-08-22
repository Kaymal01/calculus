import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';
import type { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

// Create a Supabase client for server-side usage in Next.js Server Components.
// Pass the Next.js cookies() store (or an object with a `get(name)` method) so
// this helper can attach the current user's access token when present.

export function createClient(cookieStore: { get: (name: string) => { value: string } | undefined } | RequestCookies): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment');
  }

  const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });

  // Try several common Supabase cookie names to recover the user's access token.
  // Different setups store the session/token under different cookie names.
  const tryGet = (name: string) => {
    try {
      const c = (cookieStore as any).get?.(name);
      return c?.value ?? undefined;
    } catch (e) {
      return undefined;
    }
  };

  const cookieCandidates = ['sb:session', 'sb-session', 'sb-access-token', 'supabase-auth-token', 'sb:token', 'supabase-session'];
  let accessToken: string | undefined;

  for (const name of cookieCandidates) {
    const val = tryGet(name);
    if (!val) continue;

    // Some cookies store a JSON session object, others store the raw token string.
    try {
      if (val.trim().startsWith('{')) {
        const parsed = JSON.parse(val);
        accessToken = parsed?.access_token || parsed?.token || parsed?.accessToken;
      } else {
        accessToken = val;
      }
    } catch (e) {
      // fallback to using the raw value
      accessToken = val;
    }

    if (accessToken) break;
  }

  if (accessToken) {
    // Attach the token to the client for server-side calls on behalf of the user.
    // supabase.auth.setAuth is synchronous and sets the Authorization header on subsequent requests.
    // Note: This does not persist anything server-side; it only attaches the token to this client instance.
    // @ts-ignore - setAuth exists on the JS client runtime
    supabase.auth.setAuth(accessToken);
  }

  return supabase;
}