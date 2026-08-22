import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  if (!supabaseAdmin) return NextResponse.json({ error: 'Service role key not configured on server.' }, { status: 500 });

  const body = await req.json();
  const { profile_id, role } = body;

  if (!profile_id || !role) {
    return NextResponse.json({ error: 'Missing profile_id or role' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('profiles')
    .update({ role })
    .eq('id', profile_id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}